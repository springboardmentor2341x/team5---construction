from sqlalchemy import Column, Integer, Boolean, Text, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func

from database import Base


class ProjectClosure(Base):
    __tablename__ = "project_closures"

    closure_id = Column(Integer, primary_key=True, index=True)

    project_id = Column(Integer, ForeignKey("projects.project_id"), nullable=False, unique=True)

    inspections_approved = Column(Boolean, default=False)
    financial_settlement_completed = Column(Boolean, default=False)
    client_acceptance_received = Column(Boolean, default=False)

    inspection_notes = Column(Text, nullable=True)
    financial_notes = Column(Text, nullable=True)
    client_acceptance_notes = Column(Text, nullable=True)

    updated_by = Column(Integer, ForeignKey("users.user_id"), nullable=True)

    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())

    project = relationship("Project")