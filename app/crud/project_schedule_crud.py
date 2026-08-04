from sqlalchemy.orm import Session
from app.models.project_schedules import ProjectSchedule
from app.schemas.project_schedules import ProjectScheduleCreate, ProjectScheduleUpdate


def create_schedule(db: Session, schedule: ProjectScheduleCreate):
    db_schedule = ProjectSchedule(**schedule.model_dump())

    db.add(db_schedule)
    db.commit()
    db.refresh(db_schedule)

    return db_schedule


def get_schedule(db: Session, schedule_id: int):
    return (
        db.query(ProjectSchedule)
        .filter(ProjectSchedule.schedule_id == schedule_id)
        .first()
    )


def get_all_schedules(db: Session):
    return (
        db.query(ProjectSchedule)
        .order_by(ProjectSchedule.project_id, ProjectSchedule.sequence_order)
        .all()
    )


def get_schedules_by_project(db: Session, project_id: int):
    return (
        db.query(ProjectSchedule)
        .filter(ProjectSchedule.project_id == project_id)
        .order_by(ProjectSchedule.sequence_order)
        .all()
    )


def update_schedule(db: Session, schedule_id: int, schedule: ProjectScheduleUpdate):
    db_schedule = get_schedule(db, schedule_id)

    if not db_schedule:
        return None

    for key, value in schedule.model_dump(exclude_unset=True).items():
        setattr(db_schedule, key, value)

    db.commit()
    db.refresh(db_schedule)

    return db_schedule


def delete_schedule(db: Session, schedule_id: int):
    db_schedule = get_schedule(db, schedule_id)

    if not db_schedule:
        return None

    db.delete(db_schedule)
    db.commit()

    return db_schedule