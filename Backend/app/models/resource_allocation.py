import enum

from sqlalchemy import Column, Integer, Date, DateTime, Text, ForeignKey
from sqlalchemy import Enum as SQLEnum
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func

from database import Base


class AllocationStatus(str, enum.Enum):
    PLANNED = "PLANNED"
    ACTIVE = "ACTIVE"
    COMPLETED = "COMPLETED"
    CANCELLED = "CANCELLED"


class ResourceAllocation(Base):
    __tablename__ = "resourceallocations"

    allocation_id = Column(Integer, primary_key=True, index=True)
    resource_id = Column(Integer, ForeignKey("resources.resource_id"), nullable=False)
    project_id = Column(Integer, ForeignKey("projects.project_id"), nullable=False)
    allocation_date = Column(Date, nullable=False)
    expected_return_date = Column(Date, nullable=True)
    actual_return_date = Column(Date, nullable=True)
    responsible_user_id = Column(Integer, ForeignKey("users.user_id"), nullable=False)
    status = Column(SQLEnum(AllocationStatus, name="allocationstatus"), nullable=False)
    remarks = Column(Text, nullable=True)
    created_at = Column(DateTime, server_default=func.now())
    updated_at = Column(DateTime, server_default=func.now(), onupdate=func.now())

    resource = relationship("Resource", back_populates="allocations")
