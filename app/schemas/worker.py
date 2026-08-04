from pydantic import BaseModel
from datetime import date, datetime
from decimal import Decimal
from typing import Optional


class WorkerBase(BaseModel):
    user_id: Optional[int] = None
    worker_code: Optional[str] = None
    full_name: Optional[str] = None
    mobile: Optional[str] = None
    email: Optional[str] = None
    category: Optional[str] = None
    skill: str
    experience_years: Optional[int] = None
    daily_wage: Optional[Decimal] = None
    joining_date: date
    status: Optional[str] = None
    employment_status: Optional[str] = None
    address: Optional[str] = None


class WorkerCreate(WorkerBase):
    pass


class WorkerUpdate(BaseModel):
    user_id: Optional[int] = None
    worker_code: Optional[str] = None
    full_name: Optional[str] = None
    mobile: Optional[str] = None
    email: Optional[str] = None
    category: Optional[str] = None
    skill: Optional[str] = None
    experience_years: Optional[int] = None
    daily_wage: Optional[Decimal] = None
    joining_date: Optional[date] = None
    status: Optional[str] = None
    employment_status: Optional[str] = None
    address: Optional[str] = None


class WorkerResponse(WorkerBase):
    worker_id: int
    created_at: Optional[datetime] = None
    updated_at: Optional[datetime] = None

    class Config:
        from_attributes = True