from sqlalchemy.orm import Session
from app.crud import project_schedule_crud
from app.schemas.project_schedules import ProjectScheduleCreate, ProjectScheduleUpdate


def create_schedule(db: Session, schedule: ProjectScheduleCreate):
    return project_schedule_crud.create_schedule(db, schedule)


def get_schedule(db: Session, schedule_id: int):
    return project_schedule_crud.get_schedule(db, schedule_id)


def get_all_schedules(db: Session):
    return project_schedule_crud.get_all_schedules(db)


def update_schedule(db: Session, schedule_id: int, schedule: ProjectScheduleUpdate):
    return project_schedule_crud.update_schedule(db, schedule_id, schedule)


def delete_schedule(db: Session, schedule_id: int):
    return project_schedule_crud.delete_schedule(db, schedule_id)