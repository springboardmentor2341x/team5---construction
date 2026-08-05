from sqlalchemy import (
    Column,
    Integer,
    String,
    Date,
    Numeric,
    ForeignKey,
    DateTime,
)

from sqlalchemy.orm import relationship
from sqlalchemy.sql import func

from database import Base


class Project(Base):
    __tablename__ = "projects"

    project_id = Column(Integer, primary_key=True, index=True)

    project_code = Column(String(50), unique=True, nullable=False)
    name = Column(String(255), nullable=False)
    description = Column(String)

    category = Column(String(50))
    location = Column(String(255))

    estimated_budget = Column(Numeric(12, 2))

    priority = Column(String(50))
    status = Column(
    String(50),
    nullable=False,
    default="Planning"
)

    planned_start_date = Column(Date)
    expected_completion_date = Column(Date)

    # Compatible with your authentication model
    project_manager_id = Column(Integer, ForeignKey("users.user_id"))
    client_id = Column(Integer, ForeignKey("users.user_id"))
    created_by = Column(
    Integer,
    ForeignKey("users.user_id")
)

    updated_by = Column(
    Integer,
    ForeignKey("users.user_id")
    )

    created_at = Column(
        DateTime(timezone=True),
        server_default=func.now()
    )

    updated_at = Column(
        DateTime(timezone=True),
        server_default=func.now(),
        onupdate=func.now()
    )

    project_manager = relationship(
        "User",
        foreign_keys=[project_manager_id]
    )

    client = relationship(
        "User",
        foreign_keys=[client_id]
    )
    created_user = relationship(
    "User",
    foreign_keys=[created_by]
    )

    updated_user = relationship(
    "User",
    foreign_keys=[updated_by]
    )

    milestones = relationship(
        "Milestone",
        back_populates="project",
        cascade="all, delete-orphan"
    )

    project_workers = relationship(
        "ProjectWorker",
        back_populates="project",
        cascade="all, delete-orphan"
    )

    project_site_engineers = relationship(
        "ProjectSiteEngineer",
        back_populates="project",
        cascade="all, delete-orphan"
    )

    project_contractors = relationship(
        "ProjectContractor",
        back_populates="project",
        cascade="all, delete-orphan"
    )