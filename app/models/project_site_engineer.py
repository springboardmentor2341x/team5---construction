from sqlalchemy import Column, Integer, String, Date, ForeignKey, DateTime
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func

from database import Base


class ProjectSiteEngineer(Base):
    __tablename__ = "project_site_engineers"

    project_site_engineer_id = Column(Integer, primary_key=True, index=True)

    project_id = Column(Integer, ForeignKey("projects.project_id"))
    site_engineer_id = Column(Integer, ForeignKey("users.user_id"))

    specialization = Column(String(100))

    assigned_date = Column(Date)
    end_date = Column(Date)

    assignment_status = Column(String(50))

    created_at = Column(
        DateTime(timezone=True),
        server_default=func.now()
    )

    project = relationship(
        "Project",
        back_populates="project_site_engineers"
    )

    site_engineer = relationship("User")