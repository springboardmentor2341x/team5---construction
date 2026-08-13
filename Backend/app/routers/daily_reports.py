from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from database import get_db
from app.services import daily_report_service
from app.schemas.daily_report import (
    DailyProgressReportCreate,
    DailyProgressReportUpdate,
    DailyProgressReportResponse,
    DailyReportMachineryCreate,
    DailyReportMachineryResponse,
    DailyReportMaterialCreate,
    DailyReportMaterialResponse,
)

router = APIRouter(
    prefix="/daily-reports",
    tags=["Daily Progress Reports"],
)


@router.post("/", response_model=DailyProgressReportResponse)
def create_report(
    report: DailyProgressReportCreate,
    db: Session = Depends(get_db),
):
    return daily_report_service.create_report(db, report)


@router.get("/", response_model=list[DailyProgressReportResponse])
def get_all_reports(
    db: Session = Depends(get_db),
):
    return daily_report_service.get_all_reports(db)


@router.get("/{report_id}", response_model=DailyProgressReportResponse)
def get_report(
    report_id: int,
    db: Session = Depends(get_db),
):
    report = daily_report_service.get_report(db, report_id)

    if not report:
        raise HTTPException(
            status_code=404,
            detail="Report not found",
        )

    return report


@router.put("/{report_id}", response_model=DailyProgressReportResponse)
def update_report(
    report_id: int,
    report: DailyProgressReportUpdate,
    db: Session = Depends(get_db),
):
    updated = daily_report_service.update_report(
        db,
        report_id,
        report,
    )

    if not updated:
        raise HTTPException(
            status_code=404,
            detail="Report not found",
        )

    return updated


@router.delete("/{report_id}")
def delete_report(
    report_id: int,
    db: Session = Depends(get_db),
):
    deleted = daily_report_service.delete_report(
        db,
        report_id,
    )

    if not deleted:
        raise HTTPException(
            status_code=404,
            detail="Report not found",
        )

    return {
        "message": "Report deleted successfully"
    }


@router.post("/machinery", response_model=DailyReportMachineryResponse)
def add_machinery_entry(
    entry: DailyReportMachineryCreate,
    db: Session = Depends(get_db),
):
    return daily_report_service.add_machinery_entry(db, entry)


@router.post("/materials", response_model=DailyReportMaterialResponse)
def add_material_entry(
    entry: DailyReportMaterialCreate,
    db: Session = Depends(get_db),
):
    return daily_report_service.add_material_entry(db, entry)