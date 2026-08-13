from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from database import get_db
from app.services import site_activity_log_service
from app.schemas.site_activity_log import (
    SiteActivityLogCreate,
    SiteActivityLogUpdate,
    SiteActivityLogResponse,
)

router = APIRouter(
    prefix="/site-activity-logs",
    tags=["Site Activity Logs"],
)


@router.post("/", response_model=SiteActivityLogResponse)
def create_site_activity_log(
    log: SiteActivityLogCreate,
    db: Session = Depends(get_db),
):
    return site_activity_log_service.create_site_activity_log(db, log)


@router.get("/", response_model=list[SiteActivityLogResponse])
def get_all_site_activity_logs(
    db: Session = Depends(get_db),
):
    return site_activity_log_service.get_all_site_activity_logs(db)


@router.get("/{log_id}", response_model=SiteActivityLogResponse)
def get_site_activity_log(
    log_id: int,
    db: Session = Depends(get_db),
):
    log = site_activity_log_service.get_site_activity_log(db, log_id)

    if not log:
        raise HTTPException(
            status_code=404,
            detail="Site activity log not found",
        )

    return log


@router.put("/{log_id}", response_model=SiteActivityLogResponse)
def update_site_activity_log(
    log_id: int,
    log: SiteActivityLogUpdate,
    db: Session = Depends(get_db),
):
    updated = site_activity_log_service.update_site_activity_log(
        db,
        log_id,
        log,
    )

    if not updated:
        raise HTTPException(
            status_code=404,
            detail="Site activity log not found",
        )

    return updated


@router.delete("/{log_id}")
def delete_site_activity_log(
    log_id: int,
    db: Session = Depends(get_db),
):
    deleted = site_activity_log_service.delete_site_activity_log(
        db,
        log_id,
    )

    if not deleted:
        raise HTTPException(
            status_code=404,
            detail="Site activity log not found",
        )

    return {
        "message": "Site activity log deleted successfully"
    }