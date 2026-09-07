from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from database import get_db
from app.schemas.daily_progress import (
    DailyProgressCreate,
    DailyProgressResponse,
)
from app.services import daily_progress_service

router = APIRouter(
    prefix="/daily-progress",
    tags=["Daily Progress"]
)


@router.post("/", response_model=DailyProgressResponse)
def create_daily_progress(
    report: DailyProgressCreate,
    db: Session = Depends(get_db),
):
    try:
        return daily_progress_service.create_daily_progress(
            db,
            report
        )

    except ValueError as e:
        raise HTTPException(
            status_code=400,
            detail=str(e)
        )


@router.get("/", response_model=list[DailyProgressResponse])
def get_daily_progress_reports(
    db: Session = Depends(get_db)
):
    return daily_progress_service.get_all_daily_progress(db)


@router.get("/{report_id}", response_model=DailyProgressResponse)
def get_daily_progress(
    report_id: int,
    db: Session = Depends(get_db)
):
    report = daily_progress_service.get_daily_progress(
        db,
        report_id
    )

    if not report:
        raise HTTPException(
            status_code=404,
            detail="Daily progress report not found"
        )

    return report


@router.delete("/{report_id}")
def delete_daily_progress(
    report_id: int,
    db: Session = Depends(get_db)
):
    deleted = daily_progress_service.delete_daily_progress(
        db,
        report_id
    )

    if not deleted:
        raise HTTPException(
            status_code=404,
            detail="Daily progress report not found"
        )

    return {
        "message": "Daily progress report deleted successfully",
        "report_id": report_id
    }