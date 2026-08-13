from pydantic import BaseModel
from datetime import date, time, datetime
from typing import Optional

from app.models.enums import ActivityTypeEnum


class SiteActivityLogBase(BaseModel):
    project_id: int
    responsible_user_id: int
    activity_type: ActivityTypeEnum
    activity_date: date
    activity_time: time
    description: str
    attachment_url: Optional[str] = None


class SiteActivityLogCreate(SiteActivityLogBase):
    pass


class SiteActivityLogUpdate(BaseModel):
    project_id: Optional[int] = None
    responsible_user_id: Optional[int] = None
    activity_type: Optional[ActivityTypeEnum] = None
    activity_date: Optional[date] = None
    activity_time: Optional[time] = None
    description: Optional[str] = None
    attachment_url: Optional[str] = None


class SiteActivityLogResponse(SiteActivityLogBase):
    site_activity_id: int
    created_at: Optional[datetime] = None
    updated_at: Optional[datetime] = None

    class Config:
        from_attributes = True