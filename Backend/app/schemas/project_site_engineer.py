from pydantic import BaseModel
from datetime import date, datetime
from typing import Optional


class ProjectSiteEngineerBase(BaseModel):
    project_id: int
    site_engineer_id: int
    #specialization: Optional[str] = None
    assigned_date: date
    end_date: Optional[date] = None
    assignment_status: Optional[str] = None


class ProjectSiteEngineerCreate(ProjectSiteEngineerBase):
    pass


class ProjectSiteEngineerUpdate(BaseModel):
    project_id: Optional[int] = None
    site_engineer_id: Optional[int] = None
    #specialization: Optional[str] = None
    assigned_date: Optional[date] = None
    end_date: Optional[date] = None
    assignment_status: Optional[str] = None


class ProjectSiteEngineerResponse(ProjectSiteEngineerBase):
    project_site_engineer_id: int
    # created_at: datetime

    class Config:
        from_attributes = True
class PMSiteEngineerAssignmentResponse(BaseModel):
    name: str
    employee_id: Optional[str] = None
    contact: Optional[str] = None
    assigned_area: Optional[str] = None
    project_name: str
    status: Optional[str] = None        
class SiteEngineerProjectResponse(BaseModel):
    project_id: int
    project_code: Optional[str] = None
    project_name: str
    description: Optional[str] = None
    category: Optional[str] = None
    location: Optional[str] = None
    estimated_budget: Optional[float] = None
    priority: Optional[str] = None
    project_status: Optional[str] = None
    planned_start_date: Optional[date] = None
    expected_completion_date: Optional[date] = None
    assigned_date: date
    assignment_end_date: Optional[date] = None
    assignment_status: Optional[str] = None
    project_manager_name: Optional[str] = None
       