from sqlalchemy.orm import Session
from app.models.project_worker import ProjectWorker
from app.schemas.project_worker import ProjectWorkerCreate, ProjectWorkerUpdate


def create_project_worker(db: Session, project_worker: ProjectWorkerCreate):
    db_project_worker = ProjectWorker(**project_worker.model_dump())

    db.add(db_project_worker)
    db.commit()
    db.refresh(db_project_worker)

    return db_project_worker


def get_project_worker(db: Session, project_worker_id: int):
    return (
        db.query(ProjectWorker)
        .filter(ProjectWorker.project_worker_id == project_worker_id)
        .first()
    )


def get_all_project_workers(db: Session):
    return db.query(ProjectWorker).all()


def update_project_worker(
    db: Session,
    project_worker_id: int,
    project_worker: ProjectWorkerUpdate,
):
    db_project_worker = get_project_worker(db, project_worker_id)

    if not db_project_worker:
        return None

    for key, value in project_worker.model_dump(exclude_unset=True).items():
        setattr(db_project_worker, key, value)

    db.commit()
    db.refresh(db_project_worker)

    return db_project_worker


def delete_project_worker(db: Session, project_worker_id: int):
    db_project_worker = get_project_worker(db, project_worker_id)

    if not db_project_worker:
        return None

    db.delete(db_project_worker)
    db.commit()

    return db_project_worker