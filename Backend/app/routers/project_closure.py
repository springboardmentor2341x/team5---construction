from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database import get_db
from app.schemas.project_closure import (
    ProjectClosureCreate,
    ProjectClosureUpdate,
    ProjectClosureResponse,
)
from app.services import project_closure_service
from dependencies import allow_roles

router = APIRouter(
    prefix="/project-closures",
    tags=["Project Closures"],
)


@router.post("/", response_model=ProjectClosureResponse)
def create_closure(
    closure: ProjectClosureCreate,
    db: Session = Depends(get_db),
    current_user=Depends(allow_roles("Administrator", "Project Manager")),
):
    try:
        return project_closure_service.create_closure(db, closure)
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))


@router.get("/{project_id}", response_model=ProjectClosureResponse)
def get_closure(project_id: int, db: Session = Depends(get_db)):
    closure = project_closure_service.get_closure_by_project(db, project_id)
    if not closure:
        raise HTTPException(status_code=404, detail="Closure record not found")
    return closure


@router.put("/{project_id}", response_model=ProjectClosureResponse)
def update_closure(
    project_id: int,
    closure: ProjectClosureUpdate,
    db: Session = Depends(get_db),
    current_user=Depends(allow_roles("Administrator", "Project Manager")),
):
    try:
        return project_closure_service.update_closure(db, project_id, closure, current_user.user_id)
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))