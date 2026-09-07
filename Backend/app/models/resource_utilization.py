from sqlalchemy import Column, Integer, Date, DateTime, Numeric, Text, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func

from database import Base


class ResourceUtilization(Base):
    __tablename__ = "resourceutilization"

    utilization_id = Column(Integer, primary_key=True, index=True)
    resource_id = Column(Integer, ForeignKey("resources.resource_id"), nullable=False)
    project_id = Column(Integer, ForeignKey("projects.project_id"), nullable=False)
    utilization_date = Column(Date, nullable=False)
    operating_hours = Column(Numeric(5, 2), nullable=False)
    idle_hours = Column(Numeric(5, 2), nullable=False)
    remarks = Column(Text, nullable=True)
    created_at = Column(DateTime, server_default=func.now())
    updated_at = Column(DateTime, server_default=func.now(), onupdate=func.now())

    resource = relationship("Resource", back_populates="utilization_records")
