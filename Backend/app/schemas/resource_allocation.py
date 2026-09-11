from datetime import date, datetime
from typing import Optional

from pydantic import BaseModel, ConfigDict

from app.models.resource_allocation import AllocationStatus


class ResourceAllocationBase(BaseModel):
    resource_id: int
    project_id: int
    allocation_date: date
    expected_return_date: Optional[date] = None
    responsible_user_id: int
    status: AllocationStatus = AllocationStatus.PLANNED
    remarks: Optional[str] = None


class ResourceAllocationCreate(ResourceAllocationBase):
    pass


class ResourceAllocationUpdate(BaseModel):
    expected_return_date: Optional[date] = None
    actual_return_date: Optional[date] = None
    status: Optional[AllocationStatus] = None
    remarks: Optional[str] = None


class ResourceAllocationReturn(BaseModel):
    """Used when returning equipment back to the yard."""
    actual_return_date: date
    remarks: Optional[str] = None


class ResourceAllocationOut(ResourceAllocationBase):
    model_config = ConfigDict(from_attributes=True)
    allocation_id: int
    actual_return_date: Optional[date] = None
    created_at: datetime
    updated_at: datetime
    
class PMResourceAllocationResponse(BaseModel):
    resource_id: int
    resource_name: Optional[str] = None
    resource_type: Optional[str] = None
    assigned_project: Optional[str] = None
    assigned_to: Optional[str] = None
    quantity: Optional[int] = None
    status: Optional[str] = None
class SiteEngineerEquipmentResponse(BaseModel):
    resource_id: int
    resource_code: Optional[str] = None
    equipment_name: Optional[str] = None
    category: Optional[str] = None
    equipment_status: Optional[str] = None
    location: Optional[str] = None

    project_name: Optional[str] = None
    allocation_date: Optional[date] = None
    expected_return_date: Optional[date] = None
    actual_return_date: Optional[date] = None

    responsible_user: Optional[str] = None
    allocation_status: Optional[str] = None
    remarks: Optional[str] = None

    last_maintenance_date: Optional[date] = None
    next_maintenance_date: Optional[date] = None
    maintenance_type: Optional[str] = None
    maintenance_status: Optional[str] = None
    maintenance_cost: Optional[float] = None
    maintenance_description: Optional[str] = None    