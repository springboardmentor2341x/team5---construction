from sqlalchemy import Column, Integer, Date, Numeric, Text, ForeignKey, DateTime
from sqlalchemy.dialects.postgresql import ENUM as PGEnum
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func

from database import Base
from app.models.enums import WeatherConditionEnum

weather_condition_enum = PGEnum(WeatherConditionEnum, name="weather_condition_enum", create_type=False)


class DailyProgressReport(Base):
    __tablename__ = "dailyprogressreports"

    report_id = Column(Integer, primary_key=True, index=True)

    milestone_id = Column(Integer, ForeignKey("milestones.milestone_id"), nullable=False)
    site_engineer_id = Column(Integer, ForeignKey("users.user_id"), nullable=False)
    project_contractor_id = Column(Integer, ForeignKey("project_contractors.project_contractor_id"), nullable=False)

    report_date = Column(Date, nullable=False)
    activity_performed = Column(Text, nullable=False)
    progress_percentage = Column(Numeric, nullable=False)
    weather_condition = Column(weather_condition_enum)

    safety_observations = Column(Text)
    quality_remarks = Column(Text)
    additional_comments = Column(Text)

    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())

    milestone = relationship("Milestone")
    site_engineer = relationship("User")
    project_contractor = relationship("ProjectContractor")

    machinery_entries = relationship(
        "DailyReportMachinery",
        back_populates="report",
        cascade="all, delete-orphan"
    )
    material_entries = relationship(
        "DailyReportMaterial",
        back_populates="report",
        cascade="all, delete-orphan"
    )


class DailyReportMachinery(Base):
    __tablename__ = "dailyreportmachinery"

    report_machine_id = Column(Integer, primary_key=True, index=True)
    report_id = Column(Integer, ForeignKey("dailyprogressreports.report_id"), nullable=False)
    machine_id = Column(Integer, ForeignKey("machines.machine_id"), nullable=False)
    operating_hours = Column(Numeric, nullable=False)
    remarks = Column(Text)

    report = relationship("DailyProgressReport", back_populates="machinery_entries")
    machine = relationship("Machine")

class DailyReportMaterial(Base):
    __tablename__ = "dailyreportmaterials"

    report_material_id = Column(Integer, primary_key=True, index=True)
    report_id = Column(Integer, ForeignKey("dailyprogressreports.report_id"), nullable=False)
    material_id = Column(Integer, ForeignKey("materials.material_id"), nullable=False)
    quantity_used = Column(Numeric, nullable=False)
    remarks = Column(Text)

    report = relationship("DailyProgressReport", back_populates="material_entries")
    material = relationship("Material")