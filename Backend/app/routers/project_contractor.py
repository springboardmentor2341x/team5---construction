from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from database import get_db
from app.services import project_contractor_service
from app.schemas.project_contractor import (
    ProjectContractorCreate,
    ProjectContractorUpdate,
    ProjectContractorResponse,
)

router = APIRouter(
    prefix="/project-contractors",
    tags=["Project Contractors"],
)


@router.post("/", response_model=ProjectContractorResponse)
def create_project_contractor(
    contractor: ProjectContractorCreate,
    db: Session = Depends(get_db),
):
    return project_contractor_service.create_project_contractor(
        db,
        contractor,
    )


@router.get("/", response_model=list[ProjectContractorResponse])
def get_all_project_contractors(
    db: Session = Depends(get_db),
):
    return project_contractor_service.get_all_project_contractors(db)


@router.get("/{project_contractor_id}", response_model=ProjectContractorResponse)
def get_project_contractor(
    project_contractor_id: int,
    db: Session = Depends(get_db),
):
    contractor = project_contractor_service.get_project_contractor(
        db,
        project_contractor_id,
    )

    if not contractor:
        raise HTTPException(
            status_code=404,
            detail="Project Contractor not found",
        )

    return contractor


@router.put("/{project_contractor_id}", response_model=ProjectContractorResponse)
def update_project_contractor(
    project_contractor_id: int,
    contractor: ProjectContractorUpdate,
    db: Session = Depends(get_db),
):
    updated = project_contractor_service.update_project_contractor(
        db,
        project_contractor_id,
        contractor,
    )

    if not updated:
        raise HTTPException(
            status_code=404,
            detail="Project Contractor not found",
        )

    return updated


@router.delete("/{project_contractor_id}")
def delete_project_contractor(
    project_contractor_id: int,
    db: Session = Depends(get_db),
):
    deleted = project_contractor_service.delete_project_contractor(
        db,
        project_contractor_id,
    )

    if not deleted:
        raise HTTPException(
            status_code=404,
            detail="Project Contractor not found",
        )

    return {
        "message": "Project Contractor deleted successfully"
    }