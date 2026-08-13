from pydantic import BaseModel
from datetime import date, datetime
from decimal import Decimal
from typing import Optional

from app.models.enums import WeatherConditionEnum


class DailyProgressReportBase(BaseModel):
    milestone_id: int
    site_engineer_id: int
    project_contractor_id: int
    report_date: date
    activity_performed: str
    progress_percentage: Decimal
    weather_condition: Optional[WeatherConditionEnum] = None
    safety_observations: Optional[str] = None
    quality_remarks: Optional[str] = None
    additional_comments: Optional[str] = None


class DailyProgressReportCreate(DailyProgressReportBase):
    pass


class DailyProgressReportUpdate(BaseModel):
    milestone_id: Optional[int] = None
    site_engineer_id: Optional[int] = None
    project_contractor_id: Optional[int] = None
    report_date: Optional[date] = None
    activity_performed: Optional[str] = None
    progress_percentage: Optional[Decimal] = None
    weather_condition: Optional[WeatherConditionEnum] = None
    safety_observations: Optional[str] = None
    quality_remarks: Optional[str] = None
    additional_comments: Optional[str] = None


class DailyProgressReportResponse(DailyProgressReportBase):
    report_id: int
    created_at: Optional[datetime] = None
    updated_at: Optional[datetime] = None

    class Config:
        from_attributes = True


class DailyReportMachineryBase(BaseModel):
    report_id: int
    machine_id: int
    operating_hours: Decimal
    remarks: Optional[str] = None


class DailyReportMachineryCreate(DailyReportMachineryBase):
    pass


class DailyReportMachineryResponse(DailyReportMachineryBase):
    report_machine_id: int

    class Config:
        from_attributes = True


class DailyReportMaterialBase(BaseModel):
    report_id: int
    material_id: int
    quantity_used: Decimal
    remarks: Optional[str] = None


class DailyReportMaterialCreate(DailyReportMaterialBase):
    pass


class DailyReportMaterialResponse(DailyReportMaterialBase):
    report_material_id: int

    class Config:
        from_attributes = True