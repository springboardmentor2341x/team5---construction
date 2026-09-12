from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.models.milestone import Milestone
from database import get_db
from dependencies import get_current_user
from app.models.project_site_engineer import ProjectSiteEngineer
from app.schemas.milestone import (
    MilestoneCreate,
    MilestoneUpdate,
    MilestoneResponse
)

from app.services import milestone_service


router = APIRouter(
    prefix="/milestones",
    tags=["Milestones"]
)


@router.post("/", response_model=MilestoneResponse)
def create_milestone(
    milestone: MilestoneCreate,
    db: Session = Depends(get_db)
):

    return milestone_service.create_milestone(
        db,
        milestone
    )


@router.get("/", response_model=list[MilestoneResponse])
def get_all_milestones(
    db: Session = Depends(get_db)
):

    return milestone_service.get_all_milestones(db)


@router.get("/project/{project_id}", response_model=list[MilestoneResponse])
def get_project_milestones(
    project_id: int,
    db: Session = Depends(get_db)
):

    return milestone_service.get_project_milestones(
        db,
        project_id
    )

@router.get(
    "/site-engineer/work-progress",
    response_model=list[MilestoneResponse]
)
def get_site_engineer_work_progress(
    db: Session = Depends(get_db),
    current_user = Depends(get_current_user)
):
    project_ids = (
        db.query(ProjectSiteEngineer.project_id)
        .filter(
            ProjectSiteEngineer.site_engineer_id == current_user.user_id
        )
        .all()
    )

    project_ids = [project_id[0] for project_id in project_ids]

    if not project_ids:
        return []

    return (
        db.query(Milestone)
        .filter(Milestone.project_id.in_(project_ids))
        .all()
    )
@router.get("/site-engineer/work-category-progress")
def get_site_engineer_work_category_progress(
    db: Session = Depends(get_db),
    current_user = Depends(get_current_user)
):
    project_ids = (
        db.query(ProjectSiteEngineer.project_id)
        .filter(
            ProjectSiteEngineer.site_engineer_id == current_user.user_id
        )
        .all()
    )

    project_ids = [project_id[0] for project_id in project_ids]

    categories = {
        "Foundation Work": [],
        "Structural Work": [],
        "Electrical Work": [],
        "Plumbing Work": [],
        "Finishing Work": []
    }

    milestones = (
        db.query(Milestone)
        .filter(Milestone.project_id.in_(project_ids))
        .all()
    )

    for milestone in milestones:
        name = milestone.milestone_name.lower()

        for category in categories:
            keyword = category.replace(" Work", "").lower()

            if keyword in name:
                categories[category].append(
                    float(milestone.progress_percentage or 0)
                )

    result = []

    for category, progress_list in categories.items():
        progress = (
            sum(progress_list) / len(progress_list)
            if progress_list
            else 0
        )

        result.append({
            "category": category,
            "progress_percentage": round(progress, 2)
        })

    return result

@router.get("/{milestone_id}", response_model=MilestoneResponse)
def get_milestone(
    milestone_id: int,
    db: Session = Depends(get_db)
):

    milestone = milestone_service.get_milestone(
        db,
        milestone_id
    )

    if not milestone:
        raise HTTPException(
            status_code=404,
            detail="Milestone not found"
        )

    return milestone


@router.put("/{milestone_id}", response_model=MilestoneResponse)
def update_milestone(
    milestone_id: int,
    milestone: MilestoneUpdate,
    db: Session = Depends(get_db)
):

    updated = milestone_service.update_milestone(
        db,
        milestone_id,
        milestone
    )

    if not updated:
        raise HTTPException(
            status_code=404,
            detail="Milestone not found"
        )

    return updated


@router.delete("/{milestone_id}")
def delete_milestone(
    milestone_id: int,
    db: Session = Depends(get_db)
):

    deleted = milestone_service.delete_milestone(
        db,
        milestone_id
    )

    if not deleted:
        raise HTTPException(
            status_code=404,
            detail="Milestone not found"
        )

    return {

        "message": "Milestone deleted successfully",
        "milestone_id": milestone_id
    }