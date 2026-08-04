from pydantic import BaseModel
from datetime import date, datetime
from decimal import Decimal
from typing import Optional


class ProjectWorkerBase(BaseModel):
    project_id: int
    worker_id: int
    project_contractor_id: int
    assigned_date: date
    end_date: Optional[date] = None
    role_in_project: Optional[str] = None
    daily_wage: Optional[Decimal] = None
    assignment_status: Optional[str] = None


class ProjectWorkerCreate(ProjectWorkerBase):
    pass


class ProjectWorkerUpdate(BaseModel):
    project_id: Optional[int] = None
    worker_id: Optional[int] = None
    project_contractor_id:Optional[int]= None
    assigned_date: Optional[date] = None
    end_date: Optional[date] = None
    role_in_project: Optional[str] = None
    daily_wage: Optional[Decimal] = None
    assignment_status: Optional[str] = None


class ProjectWorkerResponse(ProjectWorkerBase):
    project_worker_id: int
    created_at: datetime

    class Config:
        from_attributes = True