from sqlalchemy import Column, Integer, String, Date, Numeric, ForeignKey, DateTime
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func

from database import Base


class Milestone(Base):
    __tablename__ = "milestones"

    milestone_id = Column(Integer, primary_key=True, index=True)

    project_id = Column(
        Integer,
        ForeignKey("projects.project_id")
    )

    milestone_name = Column(String(200), nullable=False)

    description = Column(String)

    status = Column(String(50))

    progress_percentage = Column(Numeric(5, 2), default=0)

    planned_start_date = Column(Date)
    planned_end_date = Column(Date)

    actual_start_date = Column(Date)
    actual_end_date = Column(Date)

    created_at = Column(
        DateTime(timezone=True),
        server_default=func.now()
    )

    updated_at = Column(
        DateTime(timezone=True),
        server_default=func.now(),
        onupdate=func.now()
    )

    project = relationship(
        "Project",
        back_populates="milestones"
    )