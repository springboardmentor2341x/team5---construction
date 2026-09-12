from pydantic import BaseModel, Field
from datetime import date, datetime
from decimal import Decimal
from typing import Optional,Literal


MilestoneStatus = Literal[
    "Not Started",
    "In Progress",
    "Completed",
    "Delayed"
]

class MilestoneBase(BaseModel):
    milestone_name: str
    description: Optional[str] = None
    status: MilestoneStatus
    progress_percentage: Decimal
    planned_start_date: date
    planned_end_date: date
    actual_start_date: Optional[date] = None
    actual_end_date: Optional[date] = None


class MilestoneCreate(BaseModel):
    project_id: int
    milestone_name: str
    description: Optional[str] = None
    status: Optional[str] = "Not Started"
    progress_percentage: Decimal = Field(default=0, ge=0, le=100)
    planned_start_date: Optional[date] = None
    planned_end_date: Optional[date] = None
    actual_start_date: Optional[date] = None
    actual_end_date: Optional[date] = None


class MilestoneUpdate(BaseModel):
    project_id: Optional[int] = None
    milestone_name: Optional[str] = None
    description: Optional[str] = None
    status: Optional[str] = None
    progress_percentage: Optional[Decimal] = Field(
        default=None,
        ge=0,
        le=100
    )
    planned_start_date: Optional[date] = None
    planned_end_date: Optional[date] = None
    actual_start_date: Optional[date] = None
    actual_end_date: Optional[date] = None


class MilestoneResponse(BaseModel):
    milestone_id: int
    project_id: int
    milestone_name: str
    description: Optional[str] = None
    status: Optional[str] = None
    progress_percentage: Decimal
    planned_start_date: Optional[date] = None
    planned_end_date: Optional[date] = None
    actual_start_date: Optional[date] = None
    actual_end_date: Optional[date] = None
    created_at: Optional[datetime] = None
    updated_at: Optional[datetime] = None

    class Config:
        from_attributes = True