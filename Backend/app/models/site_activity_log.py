from sqlalchemy import Column, Integer, Date, Time, Text, String, ForeignKey, DateTime
from sqlalchemy.dialects.postgresql import ENUM as PGEnum
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func

from database import Base
from app.models.enums import ActivityTypeEnum

activity_type_enum = PGEnum(ActivityTypeEnum, name="activity_type_enum", create_type=False)


class SiteActivityLog(Base):
    __tablename__ = "siteactivitylogs"

    site_activity_id = Column(Integer, primary_key=True, index=True)

    project_id = Column(Integer, ForeignKey("projects.project_id"), nullable=False)
    responsible_user_id = Column(Integer, ForeignKey("users.user_id"), nullable=False)

    activity_type = Column(activity_type_enum, nullable=False)
    activity_date = Column(Date, nullable=False)
    activity_time = Column(Time, nullable=False)
    description = Column(Text, nullable=False)
    attachment_url = Column(String, nullable=True)

    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())

    project = relationship("Project")
    responsible_user = relationship("User")