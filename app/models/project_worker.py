from sqlalchemy import Column, Integer, String, Date, Numeric, ForeignKey, DateTime
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func

from database import Base


class ProjectWorker(Base):
    __tablename__ = "project_workers"

    project_worker_id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    project_id = Column(
        Integer,
        ForeignKey("projects.project_id")
    )

    worker_id = Column(
        Integer,
        ForeignKey("workers.worker_id")
    )
    project_contractor_id = Column(
        Integer,
        ForeignKey("project_contractors.project_contractor_id")
    )

    assigned_date = Column(Date)

    end_date = Column(Date)

    role_in_project = Column(String(100))

    daily_wage = Column(Numeric(10, 2))

    assignment_status = Column(String(50))

    created_at = Column(
        DateTime(timezone=True),
        server_default=func.now()
    )

    project = relationship(
        "Project",
        back_populates="project_workers"
    )

    worker = relationship(
        "Worker",
        back_populates="projects"
    )
    project_contractor = relationship("ProjectContractor")