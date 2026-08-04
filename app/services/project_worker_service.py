from sqlalchemy.orm import Session

from app.crud import project_worker_crud
from app.schemas.project_worker import (
    ProjectWorkerCreate,
    ProjectWorkerUpdate,
)


def create_project_worker(db: Session, worker: ProjectWorkerCreate):
    return project_worker_crud.create_project_worker(db, worker)


def get_project_worker(db: Session, project_worker_id: int):
    return project_worker_crud.get_project_worker(db, project_worker_id)


def get_all_project_workers(db: Session):
    return project_worker_crud.get_all_project_workers(db)


def update_project_worker(
    db: Session,
    project_worker_id: int,
    worker: ProjectWorkerUpdate,
):
    return project_worker_crud.update_project_worker(
        db,
        project_worker_id,
        worker,
    )


def delete_project_worker(db: Session, project_worker_id: int):
    return project_worker_crud.delete_project_worker(
        db,
        project_worker_id,
    )