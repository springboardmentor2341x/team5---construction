from datetime import date, datetime
from decimal import Decimal
from pydantic import BaseModel, Field
from typing import Optional


class DailyProgressCreate(BaseModel):
    milestone_id: int
    site_engineer_id: int
    project_contractor_id: int

    report_date: date

    activity_performed: Optional[str] = None

    progress_percentage: Decimal = Field(
        ge=0,
        le=100
    )

    weather_condition: Optional[str] = None

    safety_observations: Optional[str] = None
    quality_remarks: Optional[str] = None
    additional_comments: Optional[str] = None


class DailyProgressUpdate(BaseModel):
    milestone_id: Optional[int] = None
    site_engineer_id: Optional[int] = None
    project_contractor_id: Optional[int] = None

    report_date: Optional[date] = None

    activity_performed: Optional[str] = None

    progress_percentage: Optional[Decimal] = Field(
        default=None,
        ge=0,
        le=100
    )

    weather_condition: Optional[str] = None

    safety_observations: Optional[str] = None
    quality_remarks: Optional[str] = None
    additional_comments: Optional[str] = None


class DailyProgressResponse(BaseModel):
    report_id: int

    milestone_id: int
    site_engineer_id: int
    project_contractor_id: int

    report_date: date

    activity_performed: Optional[str] = None
    progress_percentage: Decimal

    weather_condition: Optional[str] = None

    safety_observations: Optional[str] = None
    quality_remarks: Optional[str] = None
    additional_comments: Optional[str] = None

    created_at: Optional[datetime] = None
    updated_at: Optional[datetime] = None

    class Config:
        from_attributes = True