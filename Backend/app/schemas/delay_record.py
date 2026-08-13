from pydantic import BaseModel
from datetime import datetime
from decimal import Decimal
from typing import Optional

from app.models.enums import DelayReasonEnum


class DelayRecordBase(BaseModel):
    report_id: int
    reason_for_delay: DelayReasonEnum
    duration_hours: Decimal
    impact_on_project_timeline: Optional[str] = None
    description: Optional[str] = None


class DelayRecordCreate(DelayRecordBase):
    pass


class DelayRecordUpdate(BaseModel):
    report_id: Optional[int] = None
    reason_for_delay: Optional[DelayReasonEnum] = None
    duration_hours: Optional[Decimal] = None
    impact_on_project_timeline: Optional[str] = None
    description: Optional[str] = None


class DelayRecordResponse(DelayRecordBase):
    delay_id: int
    created_at: Optional[datetime] = None
    updated_at: Optional[datetime] = None

    class Config:
        from_attributes = True