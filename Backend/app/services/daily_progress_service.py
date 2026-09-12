from sqlalchemy.orm import Session
from app.models.daily_progress import DailyProgressReport
from app.schemas.daily_progress import DailyProgressCreate, DailyProgressUpdate
from app.models.milestone import Milestone
from app.models.project_contractor import ProjectContractor
from app.models.project import Project
from app.models.user import User

from app.schemas.daily_progress import (
    DailyProgressCreate,
    DailyProgressUpdate,
)

def create_daily_progress(
    db: Session,
    report: DailyProgressCreate,
    # site_engineer_id: int
):
    # Check duplicate report for same milestone and date
    existing = (
        db.query(DailyProgressReport)
        .filter(
            DailyProgressReport.milestone_id == report.milestone_id,
            DailyProgressReport.report_date == report.report_date
        )
        .first()
    )

    if existing:
        raise ValueError(
            "Daily progress report already exists for this milestone and date."
        )

    db_report = DailyProgressReport(
        milestone_id=report.milestone_id,
        site_engineer_id=report.site_engineer_id,
        project_contractor_id=report.project_contractor_id,
        report_date=report.report_date,
        activity_performed=report.activity_performed,
        progress_percentage=report.progress_percentage,
        weather_condition=report.weather_condition,
        safety_observations=report.safety_observations,
        quality_remarks=report.quality_remarks,
        additional_comments=report.additional_comments,
    )

    db.add(db_report)
    db.commit()
    db.refresh(db_report)

    return db_report


def get_all_daily_progress(db: Session):
    return (
        db.query(DailyProgressReport)
        .order_by(DailyProgressReport.report_date.desc())
        .all()
    )


def get_daily_progress(
    db: Session,
    report_id: int
):
    return (
        db.query(DailyProgressReport)
        .filter(
            DailyProgressReport.report_id == report_id
        )
        .first()
    )


def get_site_engineer_reports(
    db: Session,
    site_engineer_id: int
):
    return (
        db.query(DailyProgressReport)
        .filter(
            DailyProgressReport.site_engineer_id == site_engineer_id
        )
        .order_by(DailyProgressReport.report_date.desc())
        .all()
    )


def update_daily_progress(
    db: Session,
    report_id: int,
    report: DailyProgressUpdate
):
    db_report = get_daily_progress(db, report_id)

    if not db_report:
        return None

    update_data = report.model_dump(exclude_unset=True)

    for key, value in update_data.items():
        setattr(db_report, key, value)

    db.commit()
    db.refresh(db_report)

    return db_report


def delete_daily_progress(
    db: Session,
    report_id: int
):
    db_report = get_daily_progress(db, report_id)

    if not db_report:
        return None

    db.delete(db_report)
    db.commit()

    return db_report
def get_pm_site_progress(db: Session, project_id: int):
    results = (
        db.query(
            DailyProgressReport,
            Milestone,
            User,
            ProjectContractor,
            Project,
        )
        .join(
            Milestone,
            Milestone.milestone_id == DailyProgressReport.milestone_id,
        )
        .join(
            User,
            User.user_id == DailyProgressReport.site_engineer_id,
        )
        .join(
            ProjectContractor,
            ProjectContractor.project_contractor_id
            == DailyProgressReport.project_contractor_id,
        )
        .join(
            Project,
            Project.project_id == Milestone.project_id,
        )
        .filter(
            Milestone.project_id == project_id
        )
        .order_by(
            DailyProgressReport.report_date.desc()
        )
        .all()
    )

    response = []

    for report, milestone, engineer, contractor_assignment, project in results:

        contractor = (
            db.query(User)
            .filter(
                User.user_id == contractor_assignment.contractor_id
            )
            .first()
        )

        response.append({
            "report_id": report.report_id,
            "report_date": report.report_date,
            "milestone_name": milestone.milestone_name,
            "activity_performed": report.activity_performed,
            "progress_percentage": report.progress_percentage,
            "weather_condition": report.weather_condition,
            "safety_observations": report.safety_observations,
            "site_engineer_name": engineer.full_name,
            "contractor_name": contractor.full_name if contractor else None,
        })

    return response