from sqlalchemy import Column, Integer, String, DateTime
from sqlalchemy.sql import func
from sqlalchemy.dialects.postgresql import ENUM as PGEnum

from database import Base
from app.models.enums import MachineTypeEnum, MachineStatusEnum

machine_type_enum = PGEnum(MachineTypeEnum, name="machine_type_enum", create_type=False)
machine_status_enum = PGEnum(MachineStatusEnum, name="machine_status_enum", create_type=False)


class Machine(Base):
    __tablename__ = "machines"

    machine_id = Column(Integer, primary_key=True, index=True)
    machine_code = Column(String, nullable=False)
    machine_name = Column(String, nullable=False)
    machine_type = Column(machine_type_enum, nullable=False)
    status = Column(machine_status_enum, nullable=False, default=MachineStatusEnum.ACTIVE)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())