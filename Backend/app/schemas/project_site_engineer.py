from pydantic import BaseModel
from datetime import date, datetime
from typing import Optional


class ProjectSiteEngineerBase(BaseModel):
    project_id: int
    site_engineer_id: int
    specialization: Optional[str] = None
    assigned_date: date
    end_date: Optional[date] = None
    assignment_status: Optional[str] = None


class ProjectSiteEngineerCreate(ProjectSiteEngineerBase):
    pass


class ProjectSiteEngineerUpdate(BaseModel):
    project_id: Optional[int] = None
    site_engineer_id: Optional[int] = None
    specialization: Optional[str] = None
    assigned_date: Optional[date] = None
    end_date: Optional[date] = None
    assignment_status: Optional[str] = None


class ProjectSiteEngineerResponse(ProjectSiteEngineerBase):
    project_site_engineer_id: int
    created_at: datetime

    class Config:
        from_attributes = True