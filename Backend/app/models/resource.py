import enum

from sqlalchemy import Column, Integer, String, Date, DateTime, ForeignKey
from sqlalchemy import Enum as SQLEnum
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func

from database import Base


class ResourceStatus(str, enum.Enum):
    AVAILABLE = "AVAILABLE"
    ALLOCATED = "ALLOCATED"
    UNDER_MAINTENANCE = "UNDER_MAINTENANCE"
    OUT_OF_SERVICE = "OUT_OF_SERVICE"


class Resource(Base):
    __tablename__ = "resources"

    resource_id = Column(Integer, primary_key=True, index=True)
    resource_code = Column(String(50), nullable=False, unique=True)
    resource_name = Column(String(100), nullable=False)
    category_id = Column(
        Integer, ForeignKey("resourcecategories.category_id"), nullable=False
    )
    status = Column(SQLEnum(ResourceStatus, name="resourcestatus"), nullable=False)
    location = Column(String(200), nullable=True)
    purchase_date = Column(Date, nullable=True)
    created_at = Column(DateTime, server_default=func.now())
    updated_at = Column(DateTime, server_default=func.now(), onupdate=func.now())

    category = relationship("ResourceCategory", back_populates="resources")
    allocations = relationship("ResourceAllocation", back_populates="resource")
    utilization_records = relationship("ResourceUtilization", back_populates="resource")
    maintenance_records = relationship("MaintenanceRecord", back_populates="resource")
