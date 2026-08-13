from sqlalchemy import Column, Integer, Numeric, Text, ForeignKey, DateTime
from sqlalchemy.dialects.postgresql import ENUM as PGEnum
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func

from database import Base
from app.models.enums import DelayReasonEnum

delay_reason_enum = PGEnum(DelayReasonEnum, name="delay_reason_enum", create_type=False)


class DelayRecord(Base):
    __tablename__ = "delayrecords"

    delay_id = Column(Integer, primary_key=True, index=True)
    report_id = Column(Integer, ForeignKey("dailyprogressreports.report_id"), nullable=False)

    reason_for_delay = Column(delay_reason_enum, nullable=False)
    duration_hours = Column(Numeric, nullable=False)
    impact_on_project_timeline = Column(Text)
    description = Column(Text)

    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())

    report = relationship("DailyProgressReport")