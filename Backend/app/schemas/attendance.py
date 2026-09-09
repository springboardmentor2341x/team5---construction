from pydantic import BaseModel
from datetime import date, datetime, time
from typing import Optional

from app.models.enums import AttendanceStatusEnum


class AttendanceBase(BaseModel):
    project_worker_id: int
    project_contractor_id: int
    attendance_date: date
    status: AttendanceStatusEnum
    check_in_time: Optional[time] = None
    check_out_time: Optional[time] = None
    remarks: Optional[str] = None


class AttendanceCreate(AttendanceBase):
    pass


class AttendanceUpdate(BaseModel):
    project_worker_id: Optional[int] = None
    project_contractor_id: Optional[int] = None
    attendance_date: Optional[date] = None
    status: Optional[AttendanceStatusEnum] = None
    check_in_time: Optional[time] = None
    check_out_time: Optional[time] = None
    remarks: Optional[str] = None


class AttendanceResponse(AttendanceBase):
    attendance_id: int
    created_at: Optional[datetime] = None
    updated_at: Optional[datetime] = None

    class Config:
        from_attributes = True