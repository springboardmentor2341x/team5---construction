from sqlalchemy import Column, Integer, String, ForeignKey, DateTime
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func

from database import Base


class ProgressPhoto(Base):
    __tablename__ = "progressphotos"

    progress_photo_id = Column(Integer, primary_key=True, index=True)
    report_id = Column(Integer, ForeignKey("dailyprogressreports.report_id"), nullable=False)

    photo_url = Column(String, nullable=False)
    description = Column(String)

    uploaded_at = Column(DateTime(timezone=True), server_default=func.now())

    report = relationship("DailyProgressReport")