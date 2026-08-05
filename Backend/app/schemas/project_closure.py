from pydantic import BaseModel
from datetime import datetime
from typing import Optional


class ProjectClosureBase(BaseModel):
    inspections_approved: Optional[bool] = False
    financial_settlement_completed: Optional[bool] = False
    client_acceptance_received: Optional[bool] = False
    inspection_notes: Optional[str] = None
    financial_notes: Optional[str] = None
    client_acceptance_notes: Optional[str] = None


class ProjectClosureCreate(ProjectClosureBase):
    project_id: int


class ProjectClosureUpdate(BaseModel):
    inspections_approved: Optional[bool] = None
    financial_settlement_completed: Optional[bool] = None
    client_acceptance_received: Optional[bool] = None
    inspection_notes: Optional[str] = None
    financial_notes: Optional[str] = None
    client_acceptance_notes: Optional[str] = None


class ProjectClosureResponse(ProjectClosureBase):
    closure_id: int
    project_id: int
    updated_by: Optional[int] = None
    created_at: Optional[datetime] = None
    updated_at: Optional[datetime] = None

    class Config:
        from_attributes = True