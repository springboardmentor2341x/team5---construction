from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from database import get_db
from app.services import attendance_service
from app.schemas.attendance import (
    AttendanceCreate,
    AttendanceUpdate,
    AttendanceResponse,
)

router = APIRouter(
    prefix="/attendance",
    tags=["Attendance"],
)


@router.post("/", response_model=AttendanceResponse)
def create_attendance(
    attendance: AttendanceCreate,
    db: Session = Depends(get_db),
):
    return attendance_service.create_attendance(db, attendance)


@router.get("/", response_model=list[AttendanceResponse])
def get_all_attendance(
    db: Session = Depends(get_db),
):
    return attendance_service.get_all_attendance(db)


@router.get("/{attendance_id}", response_model=AttendanceResponse)
def get_attendance(
    attendance_id: int,
    db: Session = Depends(get_db),
):
    attendance = attendance_service.get_attendance(db, attendance_id)

    if not attendance:
        raise HTTPException(
            status_code=404,
            detail="Attendance record not found",
        )

    return attendance


@router.put("/{attendance_id}", response_model=AttendanceResponse)
def update_attendance(
    attendance_id: int,
    attendance: AttendanceUpdate,
    db: Session = Depends(get_db),
):
    updated = attendance_service.update_attendance(
        db,
        attendance_id,
        attendance,
    )

    if not updated:
        raise HTTPException(
            status_code=404,
            detail="Attendance record not found",
        )

    return updated


@router.delete("/{attendance_id}")
def delete_attendance(
    attendance_id: int,
    db: Session = Depends(get_db),
):
    deleted = attendance_service.delete_attendance(
        db,
        attendance_id,
    )

    if not deleted:
        raise HTTPException(
            status_code=404,
            detail="Attendance record not found",
        )

    return {
        "message": "Attendance record deleted successfully"
    }