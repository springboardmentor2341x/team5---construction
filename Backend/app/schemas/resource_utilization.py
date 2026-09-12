from datetime import date, datetime
from decimal import Decimal
from typing import Optional

from pydantic import BaseModel, ConfigDict


class ResourceUtilizationBase(BaseModel):
    resource_id: int
    project_id: int
    utilization_date: date
    operating_hours: Decimal
    idle_hours: Decimal
    remarks: Optional[str] = None


class ResourceUtilizationCreate(ResourceUtilizationBase):
    pass


class ResourceUtilizationUpdate(BaseModel):
    operating_hours: Optional[Decimal] = None
    idle_hours: Optional[Decimal] = None
    remarks: Optional[str] = None


class ResourceUtilizationOut(ResourceUtilizationBase):
    model_config = ConfigDict(from_attributes=True)
    utilization_id: int
    created_at: datetime
    updated_at: datetime


class UtilizationSummaryOut(BaseModel):
    """Aggregated utilization percentage report for a resource."""
    resource_id: int
    resource_name: str
    total_operating_hours: Decimal
    total_idle_hours: Decimal
    utilization_percentage: float