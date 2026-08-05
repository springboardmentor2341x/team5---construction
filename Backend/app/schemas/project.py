from datetime import date, datetime
from decimal import Decimal
from typing import Optional

from pydantic import BaseModel


# -------------------------
# Base Schema
# -------------------------

class ProjectBase(BaseModel):
    project_code: str
    name: str
    description: Optional[str] = None

    category: Optional[str] = None
    location: Optional[str] = None

    estimated_budget: Optional[Decimal] = None

    priority: Optional[str] = None
    status: Optional[str] = "Planning"

    planned_start_date: Optional[date] = None
    expected_completion_date: Optional[date] = None

    project_manager_id: Optional[int] = None
    client_id: Optional[int] = None


# -------------------------
# Create
# -------------------------

class ProjectCreate(ProjectBase):
    created_by: Optional[int] = None
    updated_by: Optional[int] = None


# -------------------------
# Update
# -------------------------

class ProjectUpdate(BaseModel):
    project_code: Optional[str] = None
    name: Optional[str] = None
    description: Optional[str] = None

    category: Optional[str] = None
    location: Optional[str] = None

    estimated_budget: Optional[Decimal] = None

    priority: Optional[str] = None
    status: Optional[str] = None

    planned_start_date: Optional[date] = None
    expected_completion_date: Optional[date] = None

    project_manager_id: Optional[int] = None
    client_id: Optional[int] = None
    updated_by: Optional[int] = None

# -------------------------
# Response
# -------------------------

class ProjectResponse(ProjectBase):
    project_id: int

    created_by: Optional[int] = None
    updated_by: Optional[int] = None

    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True
        
class ProjectManagerAssignment(BaseModel):
    project_manager_id: int