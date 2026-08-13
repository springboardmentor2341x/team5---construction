from sqlalchemy import Column, Integer, String, DateTime
from sqlalchemy.sql import func
from sqlalchemy.dialects.postgresql import ENUM as PGEnum

from database import Base
from app.models.enums import MaterialUnitEnum, MaterialStatusEnum

material_unit_enum = PGEnum(MaterialUnitEnum, name="material_unit_enum", create_type=False)
material_status_enum = PGEnum(MaterialStatusEnum, name="material_status_enum", create_type=False)


class Material(Base):
    __tablename__ = "materials"

    material_id = Column(Integer, primary_key=True, index=True)
    material_name = Column(String, nullable=False)
    unit = Column(material_unit_enum, nullable=False)
    status = Column(material_status_enum, nullable=False, default=MaterialStatusEnum.ACTIVE)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())