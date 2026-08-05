from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from database import get_db
from app.services import project_worker_service
from app.schemas.project_worker import (
    ProjectWorkerCreate,
    ProjectWorkerUpdate,
    ProjectWorkerResponse,
)

router = APIRouter(
    prefix="/project-workers",
    tags=["Project Workers"],
)


@router.post("/", response_model=ProjectWorkerResponse)
def create_project_worker(
    worker: ProjectWorkerCreate,
    db: Session = Depends(get_db),
):
    return project_worker_service.create_project_worker(db, worker)


@router.get("/", response_model=list[ProjectWorkerResponse])
def get_all_project_workers(
    db: Session = Depends(get_db),
):
    return project_worker_service.get_all_project_workers(db)


@router.get("/{project_worker_id}", response_model=ProjectWorkerResponse)
def get_project_worker(
    project_worker_id: int,
    db: Session = Depends(get_db),
):
    worker = project_worker_service.get_project_worker(
        db,
        project_worker_id,
    )

    if not worker:
        raise HTTPException(
            status_code=404,
            detail="Project Worker not found",
        )

    return worker


@router.put("/{project_worker_id}", response_model=ProjectWorkerResponse)
def update_project_worker(
    project_worker_id: int,
    worker: ProjectWorkerUpdate,
    db: Session = Depends(get_db),
):
    updated = project_worker_service.update_project_worker(
        db,
        project_worker_id,
        worker,
    )

    if not updated:
        raise HTTPException(
            status_code=404,
            detail="Project Worker not found",
        )

    return updated


@router.delete("/{project_worker_id}")
def delete_project_worker(
    project_worker_id: int,
    db: Session = Depends(get_db),
):
    deleted = project_worker_service.delete_project_worker(
        db,
        project_worker_id,
    )

    if not deleted:
        raise HTTPException(
            status_code=404,
            detail="Project Worker not found",
        )

    return {
        "message": "Project Worker deleted successfully"
    }