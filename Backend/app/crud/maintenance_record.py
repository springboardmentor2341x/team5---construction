from datetime import date, timedelta
from typing import List, Optional

from sqlalchemy.orm import Session

from app.models.resource import ResourceStatus
from app.models.maintenance_record import MaintenanceRecord, MaintenanceStatus
from app.schemas.maintenance_record import MaintenanceRecordCreate, MaintenanceRecordUpdate
from app.crud.resource import get_resource


def create_maintenance_record(db: Session, record: MaintenanceRecordCreate):
    resource = get_resource(db, record.resource_id)
    db_record = MaintenanceRecord(**record.model_dump())
    db.add(db_record)

    if record.maintenance_status == MaintenanceStatus.IN_PROGRESS:
        resource.status = ResourceStatus.UNDER_MAINTENANCE

    db.commit()
    db.refresh(db_record)
    return db_record


def get_maintenance_records(
    db: Session,
    resource_id: Optional[int] = None,
    status_filter: Optional[MaintenanceStatus] = None,
    skip: int = 0,
    limit: int = 100,
):
    query = db.query(MaintenanceRecord)
    if resource_id:
        query = query.filter(MaintenanceRecord.resource_id == resource_id)
    if status_filter:
        query = query.filter(MaintenanceRecord.maintenance_status == status_filter)
    return query.offset(skip).limit(limit).all()


def get_maintenance_record(db: Session, maintenance_id: int):
    from fastapi import HTTPException
    record = db.get(MaintenanceRecord, maintenance_id)
    if not record:
        raise HTTPException(status_code=404, detail="Maintenance record not found.")
    return record


def update_maintenance_record(db: Session, maintenance_id: int, updates: MaintenanceRecordUpdate):
    record = get_maintenance_record(db, maintenance_id)
    for field, value in updates.model_dump(exclude_unset=True).items():
        setattr(record, field, value)

    resource = get_resource(db, record.resource_id)
    if record.maintenance_status == MaintenanceStatus.IN_PROGRESS:
        resource.status = ResourceStatus.UNDER_MAINTENANCE
    elif record.maintenance_status == MaintenanceStatus.COMPLETED:
        resource.status = ResourceStatus.AVAILABLE

    db.commit()
    db.refresh(record)
    return record


def get_upcoming_maintenance(db: Session, days_ahead: int = 7) -> List[MaintenanceRecord]:
    """
    Returns maintenance records whose next_maintenance_date falls within
    the given window, so responsible users can be notified in advance.
    """
    today = date.today()
    horizon = today + timedelta(days=days_ahead)
    return db.query(MaintenanceRecord).filter(
        MaintenanceRecord.next_maintenance_date.isnot(None),
        MaintenanceRecord.next_maintenance_date.between(today, horizon),
        MaintenanceRecord.maintenance_status.in_(
            [MaintenanceStatus.SCHEDULED, MaintenanceStatus.IN_PROGRESS]
        ),
    ).all()