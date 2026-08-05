from sqlalchemy.orm import Session

from app.crud import milestone_crud
from app.schemas.milestone import MilestoneCreate, MilestoneUpdate


def create_milestone(db: Session, milestone: MilestoneCreate):
    return milestone_crud.create_milestone(db, milestone)


def get_milestone(db: Session, milestone_id: int):
    return milestone_crud.get_milestone(db, milestone_id)


def get_all_milestones(db: Session):
    return milestone_crud.get_all_milestones(db)


def update_milestone(db: Session, milestone_id: int, milestone: MilestoneUpdate):
    return milestone_crud.update_milestone(db, milestone_id, milestone)


def delete_milestone(db: Session, milestone_id: int):
    return milestone_crud.delete_milestone(db, milestone_id)