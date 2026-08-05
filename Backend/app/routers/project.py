from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database import get_db
from app.schemas.project import (
    ProjectCreate,
    ProjectUpdate,
    ProjectResponse,
)
from app.services import project_service
from dependencies import allow_roles

router = APIRouter(
    prefix="/projects",
    tags=["Projects"],
)


@router.post("/", response_model=ProjectResponse)
def create_project(
    project: ProjectCreate,
    db: Session = Depends(get_db),
    current_user=Depends(allow_roles("Administrator")),
):
    try:
        return project_service.create_project(db, project)
    except ValueError as e:
        raise HTTPException(
            status_code=400,
            detail=str(e)
        )
    

@router.get("/", response_model=list[ProjectResponse])
def get_all_projects(db: Session = Depends(get_db)):
    return project_service.get_all_projects(db)


@router.get("/{project_id}", response_model=ProjectResponse)
def get_project(
    project_id: int,
    db: Session = Depends(get_db),
):
    project = project_service.get_project(db, project_id)

    if not project:
        raise HTTPException(
            status_code=404,
            detail="Project not found",
        )

    return project


@router.put("/{project_id}", response_model=ProjectResponse)
def update_project(
    project_id: int,
    project: ProjectUpdate,
    db: Session = Depends(get_db),
    current_user=Depends(allow_roles("Administrator")),
):
    try:
        updated = project_service.update_project(
            db,
            project_id,
            project,
        )
        return updated   
    except ValueError as e:
        raise HTTPException(
            status_code=400,
            detail=str(e)
        )
    


@router.delete("/{project_id}")
def delete_project(
    project_id: int,
    db: Session = Depends(get_db),
    current_user=Depends(allow_roles("Administrator")),
):
    deleted = project_service.delete_project(
        db,
        project_id,
    )

    if not deleted:
        raise HTTPException(
            status_code=404,
            detail="Project not found",
        )

    return {
    "message": "Project deleted successfully",
    "project_id": project_id
}
from app.schemas.project import ProjectManagerAssignment

@router.patch("/{project_id}/assign-manager", response_model=ProjectResponse)
def assign_project_manager(
    project_id: int,
    assignment: ProjectManagerAssignment,
    db: Session = Depends(get_db),
    current_user=Depends(allow_roles("Administrator")),
):
    try:
        return project_service.assign_project_manager(
            db, project_id, assignment.project_manager_id, current_user.user_id
        )
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))
@router.get("/{project_id}/manager-history")
def get_manager_history(project_id: int, db: Session = Depends(get_db)):
    from app.models.project_manager_history import ProjectManagerHistory
    return (
        db.query(ProjectManagerHistory)
        .filter(ProjectManagerHistory.project_id == project_id)
        .order_by(ProjectManagerHistory.assigned_at.desc())
        .all()
    )   