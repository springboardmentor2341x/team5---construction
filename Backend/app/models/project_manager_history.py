from sqlalchemy import Column, Integer, DateTime, ForeignKey
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship

from database import Base


class ProjectManagerHistory(Base):
    __tablename__ = "project_manager_history"

    history_id = Column(Integer, primary_key=True, index=True)
    project_id = Column(Integer, ForeignKey("projects.project_id"), nullable=False)
    previous_manager_id = Column(Integer, ForeignKey("users.user_id"), nullable=True)
    new_manager_id = Column(Integer, ForeignKey("users.user_id"), nullable=False)
    assigned_by = Column(Integer, ForeignKey("users.user_id"), nullable=True)
    assigned_at = Column(DateTime(timezone=True), server_default=func.now())

    project = relationship("Project")