from sqlalchemy.orm import Session
from app.crud import project_schedule_crud
from app.schemas.project_schedules import ProjectScheduleCreate, ProjectScheduleUpdate
from app.models.milestone import Milestone
from app.models.project_site_engineer import ProjectSiteEngineer
from app.models.user import User

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
def get_pm_schedule(db: Session, project_id: int):
    milestones = (
        db.query(Milestone)
        .filter(Milestone.project_id == project_id)
        .order_by(Milestone.planned_start_date)
        .all()
    )

    engineers = (
        db.query(ProjectSiteEngineer, User)
        .join(
            User,
            User.user_id == ProjectSiteEngineer.site_engineer_id
        )
        .filter(ProjectSiteEngineer.project_id == project_id)
        .all()
    )

    engineer_name = engineers[0][1].full_name if engineers else None

    result = []

    for milestone in milestones:
        duration = None

        if milestone.planned_start_date and milestone.planned_end_date:
            duration = (
                milestone.planned_end_date -
                milestone.planned_start_date
            ).days

        result.append({
            "task_name": milestone.milestone_name,
            "start_date": milestone.planned_start_date,
            "end_date": milestone.planned_end_date,
            "duration": duration,
            "assigned_engineer_name": engineer_name,
            "status": milestone.status,
        })

    return result