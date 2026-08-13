from fastapi import HTTPException
from sqlalchemy.exc import IntegrityError

from sqlalchemy.orm import Session
from app.models.daily_report import (
    DailyProgressReport,
    DailyReportMachinery,
    DailyReportMaterial,
)
from app.schemas.daily_report import (
    DailyProgressReportCreate,
    DailyProgressReportUpdate,
    DailyReportMachineryCreate,
    DailyReportMaterialCreate,
)


def create_report(db: Session, report: DailyProgressReportCreate):
    db_report = DailyProgressReport(**report.model_dump())

    db.add(db_report)
    db.commit()
    db.refresh(db_report)

    return db_report


def get_report(db: Session, report_id: int):
    return (
        db.query(DailyProgressReport)
        .filter(DailyProgressReport.report_id == report_id)
        .first()
    )


def get_all_reports(db: Session):
    return db.query(DailyProgressReport).all()


def update_report(db: Session, report_id: int, report: DailyProgressReportUpdate):
    db_report = get_report(db, report_id)

    if not db_report:
        return None

    for key, value in report.model_dump(exclude_unset=True).items():
        setattr(db_report, key, value)

    db.commit()
    db.refresh(db_report)

    return db_report


def delete_report(db: Session, report_id: int):
    db_report = get_report(db, report_id)

    if not db_report:
        return None

    db.delete(db_report)
    db.commit()

    return db_report
from fastapi import HTTPException
from sqlalchemy.exc import IntegrityError

def add_machinery_entry(db: Session, entry: DailyReportMachineryCreate):
    db_entry = DailyReportMachinery(**entry.dict())
    db.add(db_entry)
    try:
        db.commit()
    except IntegrityError:
        db.rollback()
        raise HTTPException(
            status_code=409,
            detail=f"Machine {entry.machine_id} is already logged on report {entry.report_id}"
        )
    db.refresh(db_entry)
    return db_entry


def add_material_entry(db: Session, entry: DailyReportMaterialCreate):
    db_entry = DailyReportMaterial(**entry.dict())
    db.add(db_entry)
    try:
        db.commit()
    except IntegrityError:
        db.rollback()
        raise HTTPException(
            status_code=409,
            detail=f"Material {entry.material_id} is already logged on report {entry.report_id}"
        )
    db.refresh(db_entry)
    return db_entry