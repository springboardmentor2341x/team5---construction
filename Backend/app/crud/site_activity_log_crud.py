from sqlalchemy.orm import Session
from app.models.site_activity_log import SiteActivityLog
from app.schemas.site_activity_log import SiteActivityLogCreate, SiteActivityLogUpdate


def create_site_activity_log(db: Session, log: SiteActivityLogCreate):
    db_log = SiteActivityLog(**log.model_dump())

    db.add(db_log)
    db.commit()
    db.refresh(db_log)

    return db_log


def get_site_activity_log(db: Session, log_id: int):
    return (
        db.query(SiteActivityLog)
        .filter(SiteActivityLog.site_activity_id == log_id)
        .first()
    )


def get_all_site_activity_logs(db: Session):
    return db.query(SiteActivityLog).all()


def update_site_activity_log(db: Session, log_id: int, log: SiteActivityLogUpdate):
    db_log = get_site_activity_log(db, log_id)

    if not db_log:
        return None

    for key, value in log.model_dump(exclude_unset=True).items():
        setattr(db_log, key, value)

    db.commit()
    db.refresh(db_log)

    return db_log


def delete_site_activity_log(db: Session, log_id: int):
    db_log = get_site_activity_log(db, log_id)

    if not db_log:
        return None

    db.delete(db_log)
    db.commit()

    return db_log