from sqlalchemy.orm import Session
from app.models.worker import Worker
from app.schemas.worker import WorkerCreate, WorkerUpdate


def create_worker(db: Session, worker: WorkerCreate):
    db_worker = Worker(**worker.model_dump())

    db.add(db_worker)
    db.commit()
    db.refresh(db_worker)

    return db_worker


def get_worker(db: Session, worker_id: int):
    return (
        db.query(Worker)
        .filter(Worker.worker_id == worker_id)
        .first()
    )


def get_all_workers(db: Session):
    return db.query(Worker).all()


def update_worker(db: Session, worker_id: int, worker: WorkerUpdate):
    db_worker = get_worker(db, worker_id)

    if not db_worker:
        return None

    for key, value in worker.model_dump(exclude_unset=True).items():
        setattr(db_worker, key, value)

    db.commit()
    db.refresh(db_worker)

    return db_worker


def delete_worker(db: Session, worker_id: int):
    db_worker = get_worker(db, worker_id)

    if not db_worker:
        return None

    db.delete(db_worker)
    db.commit()

    return db_worker