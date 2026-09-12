from typing import List, Optional

from fastapi import APIRouter, Depends, Query
from sqlalchemy.orm import Session

from database import get_db
from app.models.maintenance_record import MaintenanceStatus
from app.schemas.maintenance_record import (
    MaintenanceRecordCreate,
    MaintenanceRecordUpdate,
    MaintenanceRecordOut,
)
from app.crud import maintenance_record as crud

router = APIRouter(prefix="/maintenance-records", tags=["Maintenance Records"])


@router.post("/", response_model=MaintenanceRecordOut, status_code=201)
def create_maintenance_record(record: MaintenanceRecordCreate, db: Session = Depends(get_db)):
    return crud.create_maintenance_record(db, record)


@router.get("/", response_model=List[MaintenanceRecordOut])
def list_maintenance_records(
    resource_id: Optional[int] = None,
    status_filter: Optional[MaintenanceStatus] = None,
    skip: int = 0,
    limit: int = 100,
    db: Session = Depends(get_db),
):
    return crud.get_maintenance_records(db, resource_id, status_filter, skip, limit)


@router.get("/upcoming", response_model=List[MaintenanceRecordOut])
def upcoming_maintenance(
    days_ahead: int = Query(7, description="Look-ahead window in days"),
    db: Session = Depends(get_db),
):
    return crud.get_upcoming_maintenance(db, days_ahead)


@router.get("/{maintenance_id}", response_model=MaintenanceRecordOut)
def get_maintenance_record(maintenance_id: int, db: Session = Depends(get_db)):
    return crud.get_maintenance_record(db, maintenance_id)


@router.put("/{maintenance_id}", response_model=MaintenanceRecordOut)
def update_maintenance_record(maintenance_id: int, updates: MaintenanceRecordUpdate, db: Session = Depends(get_db)):
    return crud.update_maintenance_record(db, maintenance_id, updates)
