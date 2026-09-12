from datetime import date, datetime
from typing import Optional

from pydantic import BaseModel, ConfigDict

from app.models.resource import ResourceStatus


class ResourceBase(BaseModel):
    resource_code: str
    resource_name: str
    category_id: int
    status: ResourceStatus = ResourceStatus.AVAILABLE
    location: Optional[str] = None
    purchase_date: Optional[date] = None


class ResourceCreate(ResourceBase):
    pass


class ResourceUpdate(BaseModel):
    resource_name: Optional[str] = None
    category_id: Optional[int] = None
    status: Optional[ResourceStatus] = None
    location: Optional[str] = None
    purchase_date: Optional[date] = None


class ResourceOut(ResourceBase):
    model_config = ConfigDict(from_attributes=True)
    resource_id: int
    created_at: datetime
    updated_at: datetime