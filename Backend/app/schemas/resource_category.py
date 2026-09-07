from datetime import datetime
from typing import Optional

from pydantic import BaseModel, ConfigDict


class ResourceCategoryBase(BaseModel):
    category_name: str
    description: Optional[str] = None


class ResourceCategoryCreate(ResourceCategoryBase):
    pass


class ResourceCategoryUpdate(BaseModel):
    category_name: Optional[str] = None
    description: Optional[str] = None


class ResourceCategoryOut(ResourceCategoryBase):
    model_config = ConfigDict(from_attributes=True)
    category_id: int
    created_at: datetime
    updated_at: datetime