from sqlalchemy.orm import Session
from app.models.milestone import Milestone
from app.schemas.milestone import MilestoneCreate, MilestoneUpdate


def create_milestone(db: Session, milestone: MilestoneCreate):
    db_milestone = Milestone(**milestone.model_dump())

    db.add(db_milestone)
    db.commit()
    db.refresh(db_milestone)

    return db_milestone


def get_milestone(db: Session, milestone_id: int):
    return (
        db.query(Milestone)
        .filter(Milestone.milestone_id == milestone_id)
        .first()
    )


def get_all_milestones(db: Session):
    return db.query(Milestone).all()


def update_milestone(
    db: Session,
    milestone_id: int,
    milestone: MilestoneUpdate,
):
    db_milestone = get_milestone(db, milestone_id)

    if not db_milestone:
        return None

    for key, value in milestone.model_dump(exclude_unset=True).items():
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