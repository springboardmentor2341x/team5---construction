from pydantic import BaseModel
from datetime import date, datetime
from typing import Optional


class ProjectScheduleBase(BaseModel):
    project_id: int
    phase_name: str
    sequence_order: int
    estimated_duration_days: Optional[int] = None
    planned_start_date: Optional[date] = None
    planned_end_date: Optional[date] = None
    actual_start_date: Optional[date] = None
    actual_end_date: Optional[date] = None
    status: Optional[str] = "Not Started"


class ProjectScheduleCreate(ProjectScheduleBase):
    pass


class ProjectScheduleUpdate(BaseModel):
    phase_name: Optional[str] = None
    sequence_order: Optional[int] = None
    estimated_duration_days: Optional[int] = None
    planned_start_date: Optional[date] = None
    planned_end_date: Optional[date] = None
    actual_start_date: Optional[date] = None
    actual_end_date: Optional[date] = None
    status: Optional[str] = None


class ProjectScheduleResponse(ProjectScheduleBase):
    schedule_id: int
    created_at: Optional[datetime] = None
    updated_at: Optional[datetime] = None

    class Config:
        from_attributes = True