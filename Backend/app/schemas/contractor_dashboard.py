from pydantic import BaseModel
from typing import Optional
from datetime import date
from decimal import Decimal


class ContractorProfile(BaseModel):
    user_id: int
    full_name: str
    email: str
    mobile: Optional[str] = None
    employee_id: Optional[str] = None
    department: Optional[str] = None
    address: Optional[str] = None
    is_verified: bool


class ContractorProject(BaseModel):
    project_id: int
    project_code: str
    name: str
    description: Optional[str] = None
    category: Optional[str] = None
    location: Optional[str] = None
    estimated_budget: Optional[Decimal] = None
    priority: Optional[str] = None
    status: str
    planned_start_date: Optional[date] = None
    expected_completion_date: Optional[date] = None
    specialization: Optional[str] = None
    assignment_status: Optional[str] = None


class ContractorDashboardResponse(BaseModel):
    contractor: ContractorProfile
    projects: list[ContractorProject]