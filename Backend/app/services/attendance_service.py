from sqlalchemy.orm import Session

from app.crud import attendance_crud
from app.schemas.attendance import AttendanceCreate, AttendanceUpdate


def create_attendance(db: Session, attendance: AttendanceCreate):
    return attendance_crud.create_attendance(db, attendance)


def get_attendance(db: Session, attendance_id: int):
    return attendance_crud.get_attendance(db, attendance_id)


def get_all_attendance(db: Session):
    return attendance_crud.get_all_attendance(db)


def update_attendance(db: Session, attendance_id: int, attendance: AttendanceUpdate):
    return attendance_crud.update_attendance(db, attendance_id, attendance)


def delete_attendance(db: Session, attendance_id: int):
    return attendance_crud.delete_attendance(db, attendance_id)