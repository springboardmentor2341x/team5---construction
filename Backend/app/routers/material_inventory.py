
from decimal import Decimal
from typing import List, Optional
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from database import get_db
from dependencies import get_current_user  # adjust import to your Module 1 auth setup
from app.crud import material_inventory as crud
from app.schemas import material_inventory as schemas
from datetime import date
from app.models.material_inventory import MaterialAllocation, MaterialCategory, MaterialAllocationStatus
from app.models.material import Material
from app.models.project import Project
from app.models.user import User
from app.models.project_site_engineer import ProjectSiteEngineer
router = APIRouter(prefix="/materials", tags=["Material & Inventory Management"])


# ============================================================
# MATERIAL CATEGORIES
# ============================================================

@router.post("/categories", response_model=schemas.MaterialCategoryOut, status_code=status.HTTP_201_CREATED)
def create_category(
    category: schemas.MaterialCategoryCreate,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user),
):
    return crud.create_category(db, category)


@router.get("/categories", response_model=List[schemas.MaterialCategoryOut])
def list_categories(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return crud.get_categories(db, skip, limit)


# ============================================================
# INVENTORY
# ============================================================

@router.get("/inventory", response_model=List[schemas.InventoryOut])
def list_inventory(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return crud.get_all_inventory(db, skip, limit)


@router.get("/inventory/summary", response_model=List[schemas.MaterialStockSummary])
def inventory_summary(db: Session = Depends(get_db)):
    """Dashboard-friendly view: material, category, current/allocated/available stock."""
    return crud.get_stock_summary(db)


@router.get("/inventory/low-stock", response_model=List[schemas.InventoryOut])
def low_stock_alerts(db: Session = Depends(get_db)):
    return crud.get_low_stock_materials(db)


@router.get("/inventory/{material_id}", response_model=schemas.InventoryOut)
def get_inventory(material_id: int, db: Session = Depends(get_db)):
    inventory = crud.get_inventory_by_material(db, material_id)
    if inventory is None:
        raise HTTPException(status_code=404, detail="No inventory record found for this material.")
    return inventory


@router.post("/inventory", response_model=schemas.InventoryOut, status_code=status.HTTP_201_CREATED)
def create_inventory(
    inventory: schemas.InventoryCreate,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user),
):
    if crud.get_inventory_by_material(db, inventory.material_id):
        raise HTTPException(status_code=409, detail="Inventory record already exists for this material.")
    return crud.create_inventory(db, inventory)


@router.post("/inventory/{material_id}/receive", response_model=schemas.InventoryOut)
def receive_stock(
    material_id: int,
    data: schemas.InventoryReceiveStock,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user),
):
    """Record newly received material (from Module 7 - Procurement) and increase stock."""
    return crud.receive_stock(db, material_id, data)


@router.get("/inventory/{material_id}/check-availability", response_model=schemas.MaterialAvailabilityCheck)
def check_availability(
    material_id: int,
    requested_quantity: Decimal,
    db: Session = Depends(get_db),
):
    return crud.check_availability(db, material_id, requested_quantity)


# ============================================================
# MATERIAL REQUESTS
# ============================================================

@router.post("/requests", response_model=schemas.MaterialRequestOut, status_code=status.HTTP_201_CREATED)
def create_request(
    request: schemas.MaterialRequestCreate,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user),
):
    return crud.create_material_request(db, request)


@router.get("/requests", response_model=List[schemas.MaterialRequestOut])
def list_requests(
    project_id: Optional[int] = None,
    status_filter: Optional[schemas.MaterialRequestStatus] = None,
    skip: int = 0,
    limit: int = 100,
    db: Session = Depends(get_db),
):
    return crud.get_material_requests(db, project_id, status_filter, skip, limit)


@router.get("/requests/{request_id}", response_model=schemas.MaterialRequestOut)
def get_request(request_id: int, db: Session = Depends(get_db)):
    db_request = crud.get_material_request(db, request_id)
    if db_request is None:
        raise HTTPException(status_code=404, detail="Material request not found.")
    return db_request


@router.patch("/requests/{request_id}", response_model=schemas.MaterialRequestOut)
def update_request(
    request_id: int,
    data: schemas.MaterialRequestUpdate,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user),
):
    db_request = crud.update_material_request(db, request_id, data)
    if db_request is None:
        raise HTTPException(status_code=404, detail="Material request not found.")
    return db_request


@router.patch("/requests/{request_id}/status", response_model=schemas.MaterialRequestOut)
def update_request_status(
    request_id: int,
    data: schemas.MaterialRequestStatusUpdate,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user),
):
    """Approve / reject / cancel a request. RBAC: restrict to Project Manager and above."""
    db_request = crud.update_request_status(db, request_id, data)
    if db_request is None:
        raise HTTPException(status_code=404, detail="Material request not found.")
    return db_request


# ============================================================
# MATERIAL ALLOCATIONS
# ============================================================

@router.post("/allocations", response_model=schemas.MaterialAllocationOut, status_code=status.HTTP_201_CREATED)
def allocate_material(
    allocation: schemas.MaterialAllocationCreate,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user),
):
    try:
        return crud.allocate_material(db, allocation)
    except ValueError as exc:
        raise HTTPException(status_code=400, detail=str(exc))


@router.get("/allocations/project/{project_id}", response_model=List[schemas.MaterialAllocationOut])
def get_allocations_by_project(project_id: int, db: Session = Depends(get_db)):
    return crud.get_allocations_by_project(db, project_id)


@router.get("/allocations/material/{material_id}", response_model=List[schemas.MaterialAllocationOut])
def get_allocations_by_material(material_id: int, db: Session = Depends(get_db)):
    return crud.get_allocations_by_material(db, material_id)


@router.post("/allocations/{allocation_id}/consume", response_model=schemas.MaterialAllocationOut)
def consume_allocation(
    allocation_id: int,
    performed_by_user_id: int,
    remarks: Optional[str] = None,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user),
):
    try:
        db_allocation = crud.consume_allocation(db, allocation_id, performed_by_user_id, remarks)
    except ValueError as exc:
        raise HTTPException(status_code=400, detail=str(exc))
    if db_allocation is None:
        raise HTTPException(status_code=404, detail="Allocation not found.")
    return db_allocation


@router.post("/allocations/{allocation_id}/return", response_model=schemas.MaterialAllocationOut)
def return_allocation(
    allocation_id: int,
    performed_by_user_id: int,
    remarks: Optional[str] = None,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user),
):
    try:
        db_allocation = crud.return_allocation(db, allocation_id, performed_by_user_id, remarks)
    except ValueError as exc:
        raise HTTPException(status_code=400, detail=str(exc))
    if db_allocation is None:
        raise HTTPException(status_code=404, detail="Allocation not found.")
    return db_allocation

@router.get(
    "/site-engineer/daily-used",
    response_model=List[schemas.SiteEngineerDailyMaterialResponse]
)
def get_site_engineer_daily_material_used(
    allocation_date: Optional[date] = None,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):
    query = (
        db.query(
            MaterialAllocation,
            Material,
            MaterialCategory,
            Project,
            User
        )
        .join(
            Material,
            Material.material_id == MaterialAllocation.material_id
        )
        .outerjoin(
            MaterialCategory,
            MaterialCategory.category_id == Material.category_id
        )
        .join(
            Project,
            Project.project_id == MaterialAllocation.project_id
        )
        .join(
            User,
            User.user_id == MaterialAllocation.responsible_user_id
        )
        .join(
            ProjectSiteEngineer,
            ProjectSiteEngineer.project_id == MaterialAllocation.project_id
        )
        .filter(
            ProjectSiteEngineer.site_engineer_id == current_user.user_id
        )
        .filter(
            MaterialAllocation.status == MaterialAllocationStatus.CONSUMED
        )
    )

    if allocation_date:
        query = query.filter(
            MaterialAllocation.allocation_date == allocation_date
        )

    results = query.order_by(
        MaterialAllocation.allocation_date.desc()
    ).all()

    response = []

    for allocation, material, category, project, user in results:
        response.append({
            "allocation_id": allocation.allocation_id,
            "project_id": project.project_id,
            "project_name": project.name,

            "material_id": material.material_id,
            "material_name": material.material_name,
            "unit": material.unit,
            "category_name": category.category_name if category else None,
            "material_status": material.status,

            "quantity_allocated": allocation.quantity_allocated,
            "allocation_date": allocation.allocation_date,
            "work_activity": allocation.work_activity,

            "responsible_user_id": allocation.responsible_user_id,
            "responsible_user_name": user.full_name,

            "allocation_status": allocation.status,
            "remarks": allocation.remarks
        })

    return response
# ============================================================
# STOCK MOVEMENTS (audit trail)
# ============================================================

@router.get("/stock-movements", response_model=List[schemas.StockMovementOut])
def list_stock_movements(
    material_id: Optional[int] = None,
    skip: int = 0,
    limit: int = 100,
    db: Session = Depends(get_db),
):
    return crud.get_stock_movements(db, material_id, skip, limit)


@router.post("/stock-movements/adjustment", response_model=schemas.StockMovementOut, status_code=status.HTTP_201_CREATED)
def create_adjustment(
    material_id: int,
    quantity: Decimal,
    performed_by_user_id: int,
    movement_date,
    remarks: Optional[str] = None,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user),
):
    """Manual stock correction, e.g. after a physical count discrepancy."""
    return crud.create_adjustment_movement(db, material_id, quantity, performed_by_user_id, movement_date, remarks) 