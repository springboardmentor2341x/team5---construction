from pydantic import BaseModel
from datetime import date, datetime
from typing import Optional


class ProjectContractorBase(BaseModel):
    project_id: int
    contractor_id: int
    specialization: Optional[str] = None
    assigned_date: date
    end_date: Optional[date] = None
    assignment_status: Optional[str] = None


class ProjectContractorCreate(ProjectContractorBase):
    pass


class ProjectContractorUpdate(BaseModel):
    project_id: Optional[int] = None
    contractor_id: Optional[int] = None
    specialization: Optional[str] = None
    assigned_date: Optional[date] = None
    end_date: Optional[date] = None
    assignment_status: Optional[str] = None


class ProjectContractorResponse(ProjectContractorBase):
    project_contractor_id: int
    created_at: datetime

    class Config:
        from_attributes = True