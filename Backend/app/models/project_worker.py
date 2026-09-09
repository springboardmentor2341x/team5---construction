from sqlalchemy import (
    Column,
    Integer,
    String,
    Date,
    Numeric,
    ForeignKey,
    DateTime
)
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
        ForeignKey("projects.project_id"),
        nullable=True
    )

    worker_id = Column(
        Integer,
        ForeignKey("workers.worker_id"),
        nullable=True
    )

    project_contractor_id = Column(
        Integer,
        ForeignKey("projectcontractors.project_contractor_id"),
        nullable=True
    )

    assigned_date = Column(Date)

    end_date = Column(Date)

    role_in_project = Column(String(100))

    daily_wage = Column(
        Numeric(10, 2)
    )

    assignment_status = Column(
        String(50)
    )

    created_at = Column(
        DateTime(timezone=True),
        server_default=func.now()
    )

    # =====================================================
    # Project Relationship
    # =====================================================

    project = relationship(
        "Project",
        back_populates="project_workers"
    )

    # =====================================================
    # Worker Relationship
    # =====================================================

    worker = relationship(
        "Worker",
        back_populates="projects"
    )
<<<<<<< HEAD

    # =====================================================
    # Project Contractor Relationship
    # =====================================================

    project_contractor = relationship(
        "ProjectContractor",
        back_populates="project_workers"
    )
=======
    project_contractor = relationship("ProjectContractor")
>>>>>>> sonali-team5
