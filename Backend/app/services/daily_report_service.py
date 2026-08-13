from sqlalchemy.orm import Session

from app.crud import daily_report_crud
from app.schemas.daily_report import (
    DailyProgressReportCreate,
    DailyProgressReportUpdate,
    DailyReportMachineryCreate,
    DailyReportMaterialCreate,
)


def create_report(db: Session, report: DailyProgressReportCreate):
    return daily_report_crud.create_report(db, report)


def get_report(db: Session, report_id: int):
    return daily_report_crud.get_report(db, report_id)


def get_all_reports(db: Session):
    return daily_report_crud.get_all_reports(db)


def update_report(db: Session, report_id: int, report: DailyProgressReportUpdate):
    return daily_report_crud.update_report(db, report_id, report)


def delete_report(db: Session, report_id: int):
    return daily_report_crud.delete_report(db, report_id)


def add_machinery_entry(db: Session, entry: DailyReportMachineryCreate):
    return daily_report_crud.add_machinery_entry(db, entry)


def add_material_entry(db: Session, entry: DailyReportMaterialCreate):
    return daily_report_crud.add_material_entry(db, entry)