from sqlalchemy.orm import Session

from app.crud import site_activity_log_crud
from app.schemas.site_activity_log import SiteActivityLogCreate, SiteActivityLogUpdate


def create_site_activity_log(db: Session, log: SiteActivityLogCreate):
    return site_activity_log_crud.create_site_activity_log(db, log)


def get_site_activity_log(db: Session, log_id: int):
    return site_activity_log_crud.get_site_activity_log(db, log_id)


def get_all_site_activity_logs(db: Session):
    return site_activity_log_crud.get_all_site_activity_logs(db)


def update_site_activity_log(db: Session, log_id: int, log: SiteActivityLogUpdate):
    return site_activity_log_crud.update_site_activity_log(db, log_id, log)


def delete_site_activity_log(db: Session, log_id: int):
    return site_activity_log_crud.delete_site_activity_log(db, log_id)