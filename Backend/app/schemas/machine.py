from pydantic import BaseModel
from datetime import datetime
from typing import Optional

from app.models.enums import MachineTypeEnum, MachineStatusEnum


class MachineBase(BaseModel):
    machine_code: str
    machine_name: str
    machine_type: MachineTypeEnum
    status: Optional[MachineStatusEnum] = MachineStatusEnum.ACTIVE


class MachineCreate(MachineBase):
    pass


class MachineUpdate(BaseModel):
    machine_code: Optional[str] = None
    machine_name: Optional[str] = None
    machine_type: Optional[MachineTypeEnum] = None
    status: Optional[MachineStatusEnum] = None


class MachineResponse(MachineBase):
    machine_id: int
    created_at: Optional[datetime] = None
    updated_at: Optional[datetime] = None

    class Config:
        from_attributes = True