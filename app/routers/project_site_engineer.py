from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from database import get_db
from app.services import project_site_engineer_service
from app.schemas.project_site_engineer import (
    ProjectSiteEngineerCreate,
    ProjectSiteEngineerUpdate,
    ProjectSiteEngineerResponse,
)

router = APIRouter(
    prefix="/project-site-engineers",
    tags=["Project Site Engineers"],
)


@router.post("/", response_model=ProjectSiteEngineerResponse)
def create_project_site_engineer(
    engineer: ProjectSiteEngineerCreate,
    db: Session = Depends(get_db),
):
    return project_site_engineer_service.create_project_site_engineer(
        db, engineer
    )


@router.get("/", response_model=list[ProjectSiteEngineerResponse])
def get_all_project_site_engineers(
    db: Session = Depends(get_db),
):
    return project_site_engineer_service.get_all_project_site_engineers(db)


@router.get("/{project_site_engineer_id}", response_model=ProjectSiteEngineerResponse)
def get_project_site_engineer(
    project_site_engineer_id: int,
    db: Session = Depends(get_db),
):
    engineer = project_site_engineer_service.get_project_site_engineer(
        db, project_site_engineer_id
    )

    if not engineer:
        raise HTTPException(
            status_code=404,
            detail="Project Site Engineer not found",
        )

    return engineer


@router.put("/{project_site_engineer_id}", response_model=ProjectSiteEngineerResponse)
def update_project_site_engineer(
    project_site_engineer_id: int,
    engineer: ProjectSiteEngineerUpdate,
    db: Session = Depends(get_db),
):
    updated = project_site_engineer_service.update_project_site_engineer(
        db,
        project_site_engineer_id,
        engineer,
    )

    if not updated:
        raise HTTPException(
            status_code=404,
            detail="Project Site Engineer not found",
        )

    return updated


@router.delete("/{project_site_engineer_id}")
def delete_project_site_engineer(
    project_site_engineer_id: int,
    db: Session = Depends(get_db),
):
    deleted = project_site_engineer_service.delete_project_site_engineer(
        db,
        project_site_engineer_id,
    )

    if not deleted:
        raise HTTPException(
            status_code=404,
            detail="Project Site Engineer not found",
        )

    return {
        "message": "Project Site Engineer deleted successfully"
    }