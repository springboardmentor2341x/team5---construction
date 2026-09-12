from sqlalchemy.orm import Session

from app.crud import delay_record_crud
from app.schemas.delay_record import DelayRecordCreate, DelayRecordUpdate


def create_delay_record(db: Session, delay: DelayRecordCreate):
    return delay_record_crud.create_delay_record(db, delay)


def get_delay_record(db: Session, delay_id: int):
    return delay_record_crud.get_delay_record(db, delay_id)


def get_all_delay_records(db: Session):
    return delay_record_crud.get_all_delay_records(db)


def update_delay_record(db: Session, delay_id: int, delay: DelayRecordUpdate):
    return delay_record_crud.update_delay_record(db, delay_id, delay)


def delete_delay_record(db: Session, delay_id: int):
    return delay_record_crud.delete_delay_record(db, delay_id)
