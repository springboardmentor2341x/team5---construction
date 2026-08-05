from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from database import get_db
from app.services import worker_service
from app.schemas.worker import (
    WorkerCreate,
    WorkerUpdate,
    WorkerResponse,
)

router = APIRouter(
    prefix="/workers",
    tags=["Workers"],
)


@router.post("/", response_model=WorkerResponse)
def create_worker(
    worker: WorkerCreate,
    db: Session = Depends(get_db),
):
    return worker_service.create_worker(db, worker)


@router.get("/", response_model=list[WorkerResponse])
def get_all_workers(
    db: Session = Depends(get_db),
):
    return worker_service.get_all_workers(db)


@router.get("/{worker_id}", response_model=WorkerResponse)
def get_worker(
    worker_id: int,
    db: Session = Depends(get_db),
):
    worker = worker_service.get_worker(db, worker_id)

    if not worker:
        raise HTTPException(
            status_code=404,
            detail="Worker not found",
        )

    return worker


@router.put("/{worker_id}", response_model=WorkerResponse)
def update_worker(
    worker_id: int,
    worker: WorkerUpdate,
    db: Session = Depends(get_db),
):
    updated = worker_service.update_worker(
        db,
        worker_id,
        worker,
    )

    if not updated:
        raise HTTPException(
            status_code=404,
            detail="Worker not found",
        )

    return updated


@router.delete("/{worker_id}")
def delete_worker(
    worker_id: int,
    db: Session = Depends(get_db),
):
    deleted = worker_service.delete_worker(
        db,
        worker_id,
    )

    if not deleted:
        raise HTTPException(
            status_code=404,
            detail="Worker not found",
        )

    return {
        "message": "Worker deleted successfully"
    }