from sqlalchemy import Column, Integer, Date, Time, Text, ForeignKey, DateTime
from sqlalchemy.dialects.postgresql import ENUM as PGEnum
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func

from database import Base
from app.models.enums import AttendanceStatusEnum

attendance_status_enum = PGEnum(AttendanceStatusEnum, name="attendance_status_enum", create_type=False)


class Attendance(Base):
    __tablename__ = "attendance"

    attendance_id = Column(Integer, primary_key=True, index=True)

    project_worker_id = Column(Integer, ForeignKey("project_workers.project_worker_id"), nullable=False)
    project_contractor_id = Column(Integer, ForeignKey("project_contractors.project_contractor_id"), nullable=False)

    attendance_date = Column(Date, nullable=False)
    status = Column(attendance_status_enum, nullable=False)

    check_in_time = Column(Time)
    check_out_time = Column(Time)
    remarks = Column(Text)

    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())

    project_worker = relationship("ProjectWorker")
    project_contractor = relationship("ProjectContractor")