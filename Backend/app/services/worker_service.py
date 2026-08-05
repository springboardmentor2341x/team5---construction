from sqlalchemy.orm import Session

from app.crud import worker_crud
from app.schemas.worker import WorkerCreate, WorkerUpdate


def create_worker(db: Session, worker: WorkerCreate):
    return worker_crud.create_worker(db, worker)


def get_worker(db: Session, worker_id: int):
    return worker_crud.get_worker(db, worker_id)


def get_all_workers(db: Session):
    return worker_crud.get_all_workers(db)


def update_worker(db: Session, worker_id: int, worker: WorkerUpdate):
    return worker_crud.update_worker(db, worker_id, worker)


def delete_worker(db: Session, worker_id: int):
    return worker_crud.delete_worker(db, worker_id)
