

from datetime import date, datetime
from decimal import Decimal
from enum import Enum
from typing import Optional, List

from pydantic import BaseModel, Field, ConfigDict
from app.models.enums import MaterialUnitEnum, MaterialStatusEnum

# ============================================================
# ENUMS (mirror the SQLAlchemy/Postgres enums)
# ============================================================

class MaterialRequestStatus(str, Enum):
    PENDING = "PENDING"
    APPROVED = "APPROVED"
    REJECTED = "REJECTED"
    FULFILLED = "FULFILLED"
    CANCELLED = "CANCELLED"


class MaterialAllocationStatus(str, Enum):
    ALLOCATED = "ALLOCATED"
    CONSUMED = "CONSUMED"
    RETURNED = "RETURNED"


class StockMovementType(str, Enum):
    RECEIVED = "RECEIVED"
    ALLOCATED = "ALLOCATED"
    CONSUMED = "CONSUMED"
    RETURNED = "RETURNED"
    ADJUSTMENT = "ADJUSTMENT"


# ============================================================
# MATERIAL CATEGORY
# ============================================================

class MaterialCategoryBase(BaseModel):
    category_name: str = Field(..., max_length=100)
    description: Optional[str] = None


class MaterialCategoryCreate(MaterialCategoryBase):
    pass


class MaterialCategoryUpdate(BaseModel):
    category_name: Optional[str] = Field(None, max_length=100)
    description: Optional[str] = None


class MaterialCategoryOut(MaterialCategoryBase):
    model_config = ConfigDict(from_attributes=True)
    category_id: int
    created_at: datetime
    updated_at: datetime


# ============================================================
# INVENTORY
# ============================================================

class InventoryBase(BaseModel):
    material_id: int
    current_stock: Decimal = Decimal("0")
    allocated_stock: Decimal = Decimal("0")
    minimum_stock_level: Decimal = Decimal("0")
    location: Optional[str] = Field(None, max_length=200)


class InventoryCreate(InventoryBase):
    pass


class InventoryUpdate(BaseModel):
    current_stock: Optional[Decimal] = None
    allocated_stock: Optional[Decimal] = None
    minimum_stock_level: Optional[Decimal] = None
    location: Optional[str] = Field(None, max_length=200)


class InventoryOut(InventoryBase):
    model_config = ConfigDict(from_attributes=True)
    inventory_id: int
    available_stock: Decimal
    is_low_stock: bool
    last_updated: datetime
    created_at: datetime
    updated_at: datetime


class InventoryReceiveStock(BaseModel):
    """Used when new material arrives from a supplier."""
    quantity: Decimal = Field(..., gt=0)
    movement_date: date
    performed_by_user_id: int
    reference_type: Optional[str] = "Procurement"
    reference_id: Optional[int] = None
    remarks: Optional[str] = None


# ============================================================
# MATERIAL REQUESTS
# ============================================================

class MaterialRequestBase(BaseModel):
    project_id: int
    material_id: int
    requested_quantity: Decimal = Field(..., gt=0)
    required_date: date
    purpose: Optional[str] = None
    remarks: Optional[str] = None


class MaterialRequestCreate(MaterialRequestBase):
    requested_by_user_id: int


class MaterialRequestUpdate(BaseModel):
    requested_quantity: Optional[Decimal] = Field(None, gt=0)
    required_date: Optional[date] = None
    purpose: Optional[str] = None
    remarks: Optional[str] = None


class MaterialRequestStatusUpdate(BaseModel):
    status: MaterialRequestStatus
    remarks: Optional[str] = None


class MaterialRequestOut(MaterialRequestBase):
    model_config = ConfigDict(from_attributes=True)
    request_id: int
    requested_by_user_id: int
    status: MaterialRequestStatus
    created_at: datetime
    updated_at: datetime


class MaterialAvailabilityCheck(BaseModel):
    """Result of checking a request's quantity against current inventory."""
    material_id: int
    requested_quantity: Decimal
    available_stock: Decimal
    shortage_quantity: Decimal
    can_fulfill_from_stock: bool


# ============================================================
# MATERIAL ALLOCATIONS
# ============================================================

class MaterialAllocationBase(BaseModel):
    project_id: int
    material_id: int
    request_id: Optional[int] = None
    quantity_allocated: Decimal = Field(..., gt=0)
    allocation_date: date
    work_activity: Optional[str] = Field(None, max_length=150)
    remarks: Optional[str] = None


class MaterialAllocationCreate(MaterialAllocationBase):
    responsible_user_id: int


class MaterialAllocationStatusUpdate(BaseModel):
    status: MaterialAllocationStatus
    remarks: Optional[str] = None


class MaterialAllocationOut(MaterialAllocationBase):
    model_config = ConfigDict(from_attributes=True)
    allocation_id: int
    responsible_user_id: int
    status: MaterialAllocationStatus
    created_at: datetime
    updated_at: datetime


# ============================================================
# STOCK MOVEMENTS
# ============================================================

class StockMovementBase(BaseModel):
    material_id: int
    movement_type: StockMovementType
    quantity: Decimal = Field(..., gt=0)
    reference_type: Optional[str] = Field(None, max_length=50)
    reference_id: Optional[int] = None
    movement_date: date
    remarks: Optional[str] = None


class StockMovementCreate(StockMovementBase):
    performed_by_user_id: int


class StockMovementOut(StockMovementBase):
    model_config = ConfigDict(from_attributes=True)
    movement_id: int
    performed_by_user_id: int
    created_at: datetime


# ============================================================
# DASHBOARD / SUMMARY HELPERS
# ============================================================

class MaterialStockSummary(BaseModel):
    """Per-material snapshot: total, committed, and free stock."""
    material_id: int
    material_name: str
    category_name: Optional[str] = None
    current_stock: Decimal
    allocated_stock: Decimal
    available_stock: Decimal
    minimum_stock_level: Decimal
    is_low_stock: bool


class LowStockAlert(BaseModel):
    material_id: int
    material_name: str
    current_stock: Decimal
    minimum_stock_level: Decimal
    shortage_below_minimum: Decimal
class SiteEngineerDailyMaterialResponse(BaseModel):
    allocation_id: int
    project_id: int
    project_name: Optional[str] = None

    material_id: int
    material_name: str
    unit: MaterialUnitEnum
    category_name: Optional[str] = None
    material_status: Optional[MaterialStatusEnum] = None

    quantity_allocated: Decimal
    allocation_date: date
    work_activity: Optional[str] = None

    responsible_user_id: int
    responsible_user_name: Optional[str] = None

    allocation_status: MaterialAllocationStatus
    remarks: Optional[str] = None