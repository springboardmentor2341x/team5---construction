from sqlalchemy.orm import Session
from app.models.delay_record import DelayRecord
from app.schemas.delay_record import DelayRecordCreate, DelayRecordUpdate


def create_delay_record(db: Session, delay: DelayRecordCreate):
    db_delay = DelayRecord(**delay.model_dump())

    db.add(db_delay)
    db.commit()
    db.refresh(db_delay)

    return db_delay


def get_delay_record(db: Session, delay_id: int):
    return (
        db.query(DelayRecord)
        .filter(DelayRecord.delay_id == delay_id)
        .first()
    )


def get_all_delay_records(db: Session):
    return db.query(DelayRecord).all()


def update_delay_record(db: Session, delay_id: int, delay: DelayRecordUpdate):
    db_delay = get_delay_record(db, delay_id)

    if not db_delay:
        return None

    for key, value in delay.model_dump(exclude_unset=True).items():
        setattr(db_delay, key, value)

    db.commit()
    db.refresh(db_delay)

    return db_delay


def delete_delay_record(db: Session, delay_id: int):
    db_delay = get_delay_record(db, delay_id)

    if not db_delay:
        return None

    db.delete(db_delay)
    db.commit()

    return db_delay