from datetime import date, datetime
from decimal import Decimal
from typing import Optional

from pydantic import BaseModel, ConfigDict

from app.models.maintenance_record import MaintenanceType, MaintenanceStatus


class MaintenanceRecordBase(BaseModel):
    resource_id: int
    last_maintenance_date: Optional[date] = None
    next_maintenance_date: Optional[date] = None
    maintenance_type: MaintenanceType
    service_engineer_id: int
    maintenance_status: MaintenanceStatus = MaintenanceStatus.SCHEDULED
    maintenance_cost: Optional[Decimal] = None
    description: Optional[str] = None


class MaintenanceRecordCreate(MaintenanceRecordBase):
    pass


class MaintenanceRecordUpdate(BaseModel):
    last_maintenance_date: Optional[date] = None
    next_maintenance_date: Optional[date] = None
    maintenance_type: Optional[MaintenanceType] = None
    service_engineer_id: Optional[int] = None
    maintenance_status: Optional[MaintenanceStatus] = None
    maintenance_cost: Optional[Decimal] = None
    description: Optional[str] = None


class MaintenanceRecordOut(MaintenanceRecordBase):
    model_config = ConfigDict(from_attributes=True)
    maintenance_id: int
    created_at: datetime
    updated_at: datetime