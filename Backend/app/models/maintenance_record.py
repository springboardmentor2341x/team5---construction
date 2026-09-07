import enum

from sqlalchemy import Column, Integer, Date, DateTime, Numeric, Text, ForeignKey
from sqlalchemy import Enum as SQLEnum
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func

from database import Base


class MaintenanceType(str, enum.Enum):
    PREVENTIVE = "PREVENTIVE"
    CORRECTIVE = "CORRECTIVE"
    INSPECTION = "INSPECTION"
    EMERGENCY = "EMERGENCY"
    OTHER = "OTHER"


class MaintenanceStatus(str, enum.Enum):
    SCHEDULED = "SCHEDULED"
    IN_PROGRESS = "IN_PROGRESS"
    COMPLETED = "COMPLETED"
    CANCELLED = "CANCELLED"


class MaintenanceRecord(Base):
    __tablename__ = "maintenancerecords"

    maintenance_id = Column(Integer, primary_key=True, index=True)
    resource_id = Column(Integer, ForeignKey("resources.resource_id"), nullable=False)
    last_maintenance_date = Column(Date, nullable=True)
    next_maintenance_date = Column(Date, nullable=True)
    maintenance_type = Column(
        SQLEnum(MaintenanceType, name="maintenancetype"), nullable=False
    )
    service_engineer_id = Column(Integer, ForeignKey("users.user_id"), nullable=False)
    maintenance_status = Column(
        SQLEnum(MaintenanceStatus, name="maintenancestatus"), nullable=False
    )
    maintenance_cost = Column(Numeric(10, 2), nullable=True)
    description = Column(Text, nullable=True)
    created_at = Column(DateTime, server_default=func.now())
    updated_at = Column(DateTime, server_default=func.now(), onupdate=func.now())

    resource = relationship("Resource", back_populates="maintenance_records")
