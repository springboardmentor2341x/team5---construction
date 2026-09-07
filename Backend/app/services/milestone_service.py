from sqlalchemy.orm import Session

from app.models.milestone import Milestone
from app.schemas.milestone import (
    MilestoneCreate,
    MilestoneUpdate
)


def create_milestone(db: Session, milestone: MilestoneCreate):

    db_milestone = Milestone(
        project_id=milestone.project_id,
        milestone_name=milestone.milestone_name,
        description=milestone.description,
        status=milestone.status,
        progress_percentage=milestone.progress_percentage,
        planned_start_date=milestone.planned_start_date,
        planned_end_date=milestone.planned_end_date,
        actual_start_date=milestone.actual_start_date,
        actual_end_date=milestone.actual_end_date
    )

    db.add(db_milestone)
    db.commit()
    db.refresh(db_milestone)

    return db_milestone


def get_all_milestones(db: Session):

    return (
        db.query(Milestone)
        .order_by(Milestone.milestone_id.desc())
        .all()
    )


def get_milestone(db: Session, milestone_id: int):

    return (
        db.query(Milestone)
        .filter(Milestone.milestone_id == milestone_id)
        .first()
    )


def get_project_milestones(db: Session, project_id: int):

    return (
        db.query(Milestone)
        .filter(Milestone.project_id == project_id)
        .order_by(Milestone.milestone_id.desc())
        .all()
    )


def update_milestone(
    db: Session,
    milestone_id: int,
    milestone: MilestoneUpdate
):

    db_milestone = get_milestone(db, milestone_id)

    if not db_milestone:
        return None

    update_data = milestone.model_dump(exclude_unset=True)

    for key, value in update_data.items():
        setattr(db_milestone, key, value)

    db.commit()
    db.refresh(db_milestone)

    return db_milestone


def delete_milestone(db: Session, milestone_id: int):

    db_milestone = get_milestone(db, milestone_id)

    if not db_milestone:
        return None

    db.delete(db_milestone)
    db.commit()

    return db_milestone