from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from database import get_db
from app.services import milestone_service
from app.schemas.milestone import (
    MilestoneCreate,
    MilestoneUpdate,
    MilestoneResponse,
)

router = APIRouter(
    prefix="/milestones",
    tags=["Milestones"],
)


@router.post("/", response_model=MilestoneResponse)
def create_milestone(
    milestone: MilestoneCreate,
    db: Session = Depends(get_db),
):
    return milestone_service.create_milestone(db, milestone)


@router.get("/", response_model=list[MilestoneResponse])
def get_all_milestones(
    db: Session = Depends(get_db),
):
    return milestone_service.get_all_milestones(db)


@router.get("/{milestone_id}", response_model=MilestoneResponse)
def get_milestone(
    milestone_id: int,
    db: Session = Depends(get_db),
):
    milestone = milestone_service.get_milestone(
        db,
        milestone_id,
    )

    if not milestone:
        raise HTTPException(
            status_code=404,
            detail="Milestone not found",
        )

    return milestone


@router.put("/{milestone_id}", response_model=MilestoneResponse)
def update_milestone(
    milestone_id: int,
    milestone: MilestoneUpdate,
    db: Session = Depends(get_db),
):
    updated = milestone_service.update_milestone(
        db,
        milestone_id,
        milestone,
    )

    if not updated:
        raise HTTPException(
            status_code=404,
            detail="Milestone not found",
        )

    return updated


@router.delete("/{milestone_id}")
def delete_milestone(
    milestone_id: int,
    db: Session = Depends(get_db),
):
    deleted = milestone_service.delete_milestone(
        db,
        milestone_id,
    )

    if not deleted:
        raise HTTPException(
            status_code=404,
            detail="Milestone not found",
        )

    return {
        "message": "Milestone deleted successfully"
    }