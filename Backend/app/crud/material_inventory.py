

from decimal import Decimal
from typing import List, Optional

from sqlalchemy.orm import Session
from sqlalchemy import select

from app.models.material_inventory import (
    MaterialCategory,
    Inventory,
    MaterialRequest,
    MaterialAllocation,
    StockMovement,
    MaterialRequestStatus,
    MaterialAllocationStatus,
    StockMovementType,
)
from app.models.material import Material  # existing Module 3 model
from app.schemas import material_inventory as schemas


# ============================================================
# MATERIAL CATEGORIES
# ============================================================

def create_category(db: Session, category: schemas.MaterialCategoryCreate) -> MaterialCategory:
    db_category = MaterialCategory(**category.model_dump())
    db.add(db_category)
    db.commit()
    db.refresh(db_category)
    return db_category


def get_category(db: Session, category_id: int) -> Optional[MaterialCategory]:
    return db.get(MaterialCategory, category_id)


def get_categories(db: Session, skip: int = 0, limit: int = 100) -> List[MaterialCategory]:
    return db.query(MaterialCategory).offset(skip).limit(limit).all()


# ============================================================
# INVENTORY
# ============================================================

def get_inventory_by_material(db: Session, material_id: int) -> Optional[Inventory]:
    return db.query(Inventory).filter(Inventory.material_id == material_id).first()


def get_all_inventory(db: Session, skip: int = 0, limit: int = 100) -> List[Inventory]:
    return db.query(Inventory).offset(skip).limit(limit).all()


def create_inventory(db: Session, inventory: schemas.InventoryCreate) -> Inventory:
    db_inventory = Inventory(**inventory.model_dump())
    db.add(db_inventory)
    db.commit()
    db.refresh(db_inventory)
    return db_inventory


def get_low_stock_materials(db: Session) -> List[Inventory]:
    """Materials whose current_stock has fallen to/below their minimum level."""
    return (
        db.query(Inventory)
        .filter(Inventory.current_stock <= Inventory.minimum_stock_level)
        .all()
    )


def receive_stock(
    db: Session,
    material_id: int,
    data: schemas.InventoryReceiveStock,
) -> Inventory:
    """
    Material arrives from a supplier (Module 7 - Procurement Management
    hands off here once a purchase is fulfilled): increase current_stock
    and log the movement.
    """
    inventory = get_inventory_by_material(db, material_id)
    if inventory is None:
        inventory = Inventory(material_id=material_id, current_stock=0, allocated_stock=0)
        db.add(inventory)

    inventory.current_stock = (inventory.current_stock or Decimal("0")) + data.quantity
    db.add(inventory)

    movement = StockMovement(
        material_id=material_id,
        movement_type=StockMovementType.RECEIVED,
        quantity=data.quantity,
        reference_type=data.reference_type,
        reference_id=data.reference_id,
        movement_date=data.movement_date,
        performed_by_user_id=data.performed_by_user_id,
        remarks=data.remarks,
    )
    db.add(movement)

    db.commit()
    db.refresh(inventory)
    return inventory


def check_availability(db: Session, material_id: int, requested_quantity: Decimal) -> schemas.MaterialAvailabilityCheck:
    """
    Compares a requested quantity against available (current - allocated)
    stock, without mutating anything.
    """
    inventory = get_inventory_by_material(db, material_id)
    available = inventory.available_stock if inventory else Decimal("0")
    shortage = max(Decimal("0"), requested_quantity - available)

    return schemas.MaterialAvailabilityCheck(
        material_id=material_id,
        requested_quantity=requested_quantity,
        available_stock=available,
        shortage_quantity=shortage,
        can_fulfill_from_stock=shortage == 0,
    )


# ============================================================
# MATERIAL REQUESTS
# ============================================================

def create_material_request(db: Session, request: schemas.MaterialRequestCreate) -> MaterialRequest:
    db_request = MaterialRequest(**request.model_dump())
    db.add(db_request)
    db.commit()
    db.refresh(db_request)
    return db_request


def get_material_request(db: Session, request_id: int) -> Optional[MaterialRequest]:
    return db.get(MaterialRequest, request_id)


def get_material_requests(
    db: Session,
    project_id: Optional[int] = None,
    status: Optional[MaterialRequestStatus] = None,
    skip: int = 0,
    limit: int = 100,
) -> List[MaterialRequest]:
    query = db.query(MaterialRequest)
    if project_id is not None:
        query = query.filter(MaterialRequest.project_id == project_id)
    if status is not None:
        query = query.filter(MaterialRequest.status == status)
    return query.offset(skip).limit(limit).all()


def update_material_request(
    db: Session, request_id: int, data: schemas.MaterialRequestUpdate
) -> Optional[MaterialRequest]:
    db_request = get_material_request(db, request_id)
    if db_request is None:
        return None
    for field, value in data.model_dump(exclude_unset=True).items():
        setattr(db_request, field, value)
    db.commit()
    db.refresh(db_request)
    return db_request


def update_request_status(
    db: Session, request_id: int, data: schemas.MaterialRequestStatusUpdate
) -> Optional[MaterialRequest]:
    """
    Moves a request through the approval workflow (PENDING -> APPROVED /
    REJECTED -> FULFILLED / CANCELLED). This only changes status; actually
    fulfilling a request happens via allocate_material, which is what
    moves stock and creates the audit trail.
    """
    db_request = get_material_request(db, request_id)
    if db_request is None:
        return None
    db_request.status = data.status
    if data.remarks:
        db_request.remarks = data.remarks
    db.commit()
    db.refresh(db_request)
    return db_request


# ============================================================
# MATERIAL ALLOCATIONS
# ============================================================

def allocate_material(db: Session, allocation: schemas.MaterialAllocationCreate) -> MaterialAllocation:
    """
    Commits material from central inventory to a project + work activity.
    - increases inventory.allocated_stock (does NOT reduce current_stock;
      the material is still physically in the warehouse until consumed)
    - writes an ALLOCATED stock movement for the audit trail
    - if tied to a request, marks that request FULFILLED
    """
    inventory = get_inventory_by_material(db, allocation.material_id)
    if inventory is None:
        raise ValueError("No inventory record exists for this material.")
    if inventory.available_stock < allocation.quantity_allocated:
        raise ValueError(
            f"Cannot allocate {allocation.quantity_allocated}: only "
            f"{inventory.available_stock} available."
        )

    db_allocation = MaterialAllocation(**allocation.model_dump())
    db.add(db_allocation)

    inventory.allocated_stock = (inventory.allocated_stock or Decimal("0")) + allocation.quantity_allocated
    db.add(inventory)

    db.flush()  # get db_allocation.allocation_id before using it as a reference

    movement = StockMovement(
        material_id=allocation.material_id,
        movement_type=StockMovementType.ALLOCATED,
        quantity=allocation.quantity_allocated,
        reference_type="MaterialAllocation",
        reference_id=db_allocation.allocation_id,
        movement_date=allocation.allocation_date,
        performed_by_user_id=allocation.responsible_user_id,
        remarks=allocation.remarks,
    )
    db.add(movement)

    if allocation.request_id:
        request = get_material_request(db, allocation.request_id)
        if request:
            request.status = MaterialRequestStatus.FULFILLED

    db.commit()
    db.refresh(db_allocation)
    return db_allocation


def consume_allocation(
    db: Session,
    allocation_id: int,
    performed_by_user_id: int,
    remarks: Optional[str] = None,
) -> Optional[MaterialAllocation]:
    """
    Marks previously allocated material as actually used on site.
    - reduces both current_stock and allocated_stock by the allocation's quantity
    - flips the allocation status to CONSUMED
    - writes a CONSUMED stock movement
    """
    db_allocation = db.get(MaterialAllocation, allocation_id)
    if db_allocation is None:
        return None
    if db_allocation.status == MaterialAllocationStatus.CONSUMED:
        return db_allocation  # already consumed, nothing to do

    inventory = get_inventory_by_material(db, db_allocation.material_id)
    if inventory is None:
        raise ValueError("No inventory record exists for this material.")

    qty = db_allocation.quantity_allocated
    inventory.current_stock = (inventory.current_stock or Decimal("0")) - qty
    inventory.allocated_stock = (inventory.allocated_stock or Decimal("0")) - qty
    db.add(inventory)

    db_allocation.status = MaterialAllocationStatus.CONSUMED
    db.add(db_allocation)

    movement = StockMovement(
        material_id=db_allocation.material_id,
        movement_type=StockMovementType.CONSUMED,
        quantity=qty,
        reference_type="MaterialAllocation",
        reference_id=db_allocation.allocation_id,
        movement_date=db_allocation.allocation_date,
        performed_by_user_id=performed_by_user_id,
        remarks=remarks,
    )
    db.add(movement)

    db.commit()
    db.refresh(db_allocation)
    return db_allocation


def return_allocation(
    db: Session,
    allocation_id: int,
    performed_by_user_id: int,
    remarks: Optional[str] = None,
) -> Optional[MaterialAllocation]:
    """
    Unused allocated material is returned to general inventory:
    reduces allocated_stock (current_stock is untouched, since the
    material never left the warehouse) and flips status to RETURNED.
    """
    db_allocation = db.get(MaterialAllocation, allocation_id)
    if db_allocation is None:
        return None
    if db_allocation.status != MaterialAllocationStatus.ALLOCATED:
        raise ValueError("Only ALLOCATED (not yet consumed) allocations can be returned.")

    inventory = get_inventory_by_material(db, db_allocation.material_id)
    if inventory is None:
        raise ValueError("No inventory record exists for this material.")

    qty = db_allocation.quantity_allocated
    inventory.allocated_stock = (inventory.allocated_stock or Decimal("0")) - qty
    db.add(inventory)

    db_allocation.status = MaterialAllocationStatus.RETURNED
    db.add(db_allocation)

    movement = StockMovement(
        material_id=db_allocation.material_id,
        movement_type=StockMovementType.RETURNED,
        quantity=qty,
        reference_type="MaterialAllocation",
        reference_id=db_allocation.allocation_id,
        movement_date=db_allocation.allocation_date,
        performed_by_user_id=performed_by_user_id,
        remarks=remarks,
    )
    db.add(movement)

    db.commit()
    db.refresh(db_allocation)
    return db_allocation


def get_allocations_by_project(db: Session, project_id: int) -> List[MaterialAllocation]:
    return db.query(MaterialAllocation).filter(MaterialAllocation.project_id == project_id).all()


def get_allocations_by_material(db: Session, material_id: int) -> List[MaterialAllocation]:
    return db.query(MaterialAllocation).filter(MaterialAllocation.material_id == material_id).all()


# ============================================================
# STOCK MOVEMENTS (read / audit trail)
# ============================================================

def get_stock_movements(
    db: Session,
    material_id: Optional[int] = None,
    skip: int = 0,
    limit: int = 100,
) -> List[StockMovement]:
    query = db.query(StockMovement).order_by(StockMovement.movement_date.desc(), StockMovement.movement_id.desc())
    if material_id is not None:
        query = query.filter(StockMovement.material_id == material_id)
    return query.offset(skip).limit(limit).all()


def create_adjustment_movement(
    db: Session,
    material_id: int,
    quantity: Decimal,
    performed_by_user_id: int,
    movement_date,
    remarks: Optional[str] = None,
) -> StockMovement:
    """
    Manual correction (e.g. physical stock count doesn't match the
    system). Caller is responsible for also adjusting Inventory
    directly if the correction should change current_stock.
    """
    movement = StockMovement(
        material_id=material_id,
        movement_type=StockMovementType.ADJUSTMENT,
        quantity=quantity,
        reference_type="Adjustment",
        movement_date=movement_date,
        performed_by_user_id=performed_by_user_id,
        remarks=remarks,
    )
    db.add(movement)
    db.commit()
    db.refresh(movement)
    return movement


# ============================================================
# DASHBOARD / SUMMARY
# ============================================================

def get_stock_summary(db: Session) -> List[schemas.MaterialStockSummary]:
    """Per-material snapshot joining Material, Category, and Inventory."""
    rows = (
        db.query(Material, Inventory, MaterialCategory)
        .join(Inventory, Inventory.material_id == Material.material_id)
        .outerjoin(MaterialCategory, MaterialCategory.category_id == Material.category_id)
        .all()
    )
    summary = []
    for material, inventory, category in rows:
        summary.append(
            schemas.MaterialStockSummary(
                material_id=material.material_id,
                material_name=material.material_name,
                category_name=category.category_name if category else None,
                current_stock=inventory.current_stock,
                allocated_stock=inventory.allocated_stock,
                available_stock=inventory.available_stock,
                minimum_stock_level=inventory.minimum_stock_level,
                is_low_stock=inventory.is_low_stock,
            )
        )
    return summary