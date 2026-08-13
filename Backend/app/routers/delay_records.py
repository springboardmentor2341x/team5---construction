from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from database import get_db
from app.services import delay_record_service
from app.schemas.delay_record import (
    DelayRecordCreate,
    DelayRecordUpdate,
    DelayRecordResponse,
)

router = APIRouter(
    prefix="/delay-records",
    tags=["Delay Records"],
)


@router.post("/", response_model=DelayRecordResponse)
def create_delay_record(
    delay: DelayRecordCreate,
    db: Session = Depends(get_db),
):
    return delay_record_service.create_delay_record(db, delay)


@router.get("/", response_model=list[DelayRecordResponse])
def get_all_delay_records(
    db: Session = Depends(get_db),
):
    return delay_record_service.get_all_delay_records(db)


@router.get("/{delay_id}", response_model=DelayRecordResponse)
def get_delay_record(
    delay_id: int,
    db: Session = Depends(get_db),
):
    delay = delay_record_service.get_delay_record(db, delay_id)

    if not delay:
        raise HTTPException(
            status_code=404,
            detail="Delay record not found",
        )

    return delay


@router.put("/{delay_id}", response_model=DelayRecordResponse)
def update_delay_record(
    delay_id: int,
    delay: DelayRecordUpdate,
    db: Session = Depends(get_db),
):
    updated = delay_record_service.update_delay_record(
        db,
        delay_id,
        delay,
    )

    if not updated:
        raise HTTPException(
            status_code=404,
            detail="Delay record not found",
        )

    return updated


@router.delete("/{delay_id}")
def delete_delay_record(
    delay_id: int,
    db: Session = Depends(get_db),
):
    deleted = delay_record_service.delete_delay_record(
        db,
        delay_id,
    )

    if not deleted:
        raise HTTPException(
            status_code=404,
            detail="Delay record not found",
        )

    return {
        "message": "Delay record deleted successfully"
    }