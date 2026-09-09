from pydantic import BaseModel
from datetime import datetime
from typing import Optional

from app.models.enums import MaterialUnitEnum, MaterialStatusEnum


class MaterialBase(BaseModel):
    material_name: str
    unit: MaterialUnitEnum
    status: Optional[MaterialStatusEnum] = MaterialStatusEnum.ACTIVE


class MaterialCreate(MaterialBase):
    pass


class MaterialUpdate(BaseModel):
    material_name: Optional[str] = None
    unit: Optional[MaterialUnitEnum] = None
    status: Optional[MaterialStatusEnum] = None


class MaterialResponse(MaterialBase):
    material_id: int
    created_at: Optional[datetime] = None
    updated_at: Optional[datetime] = None

    class Config:
        from_attributes = True