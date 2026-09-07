from sqlalchemy import (
    Column,
    Integer,
    Text,
    Date,
    Numeric,
    ForeignKey,
    DateTime,
    String,
)
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from sqlalchemy.dialects.postgresql import ENUM
from database import Base


# ============================================================
# Daily Progress Report
# ============================================================

class DailyProgressReport(Base):
    __tablename__ = "dailyprogressreports"

    report_id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    milestone_id = Column(
        Integer,
        ForeignKey(
            "milestones.milestone_id",
            ondelete="CASCADE"
        ),
        nullable=False
    )

    site_engineer_id = Column(
        Integer,
        ForeignKey(
            "users.user_id",
            ondelete="RESTRICT"
        ),
        nullable=False
    )

    project_contractor_id = Column(
        Integer,
        ForeignKey(
            "projectcontractors.project_contractor_id",
            ondelete="RESTRICT"
        ),
        nullable=False
    )

    report_date = Column(
        Date,
        nullable=False
    )

    activity_performed = Column(
        Text,
        nullable=True
    )

    progress_percentage = Column(
        Numeric(5, 2),
        nullable=False
    )

    weather_condition = Column(
    ENUM(
        "SUNNY",
        "CLOUDY",
        "RAINY",
        "STORM",
        "FOGGY",
        "WINDY",
        "OTHER",
        name="weather_condition_enum",
        create_type=False
    ),
    nullable=True
)

    safety_observations = Column(
        Text,
        nullable=True
    )

    quality_remarks = Column(
        Text,
        nullable=True
    )

    additional_comments = Column(
        Text,
        nullable=True
    )

    created_at = Column(
        DateTime,
        server_default=func.now()
    )

    updated_at = Column(
        DateTime,
        server_default=func.now(),
        onupdate=func.now()
    )

    # ========================================================
    # Relationships
    # ========================================================

    milestone = relationship(
        "Milestone"
    )

    site_engineer = relationship(
        "User"
    )

    project_contractor = relationship(
        "ProjectContractor",
        back_populates="daily_progress_reports"
    )

    materials = relationship(
        "DailyReportMaterial",
        back_populates="report",
        cascade="all, delete-orphan"
    )

    machinery = relationship(
        "DailyReportMachinery",
        back_populates="report",
        cascade="all, delete-orphan"
    )

    photos = relationship(
        "ProgressPhoto",
        back_populates="report",
        cascade="all, delete-orphan"
    )

    delay = relationship(
        "DelayRecord",
        back_populates="report",
        uselist=False,
        cascade="all, delete-orphan"
    )


# ============================================================
# Daily Report Materials
# ============================================================

class DailyReportMaterial(Base):
    __tablename__ = "dailyreportmaterials"

    report_material_id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    report_id = Column(
        Integer,
        ForeignKey(
            "dailyprogressreports.report_id",
            ondelete="CASCADE"
        ),
        nullable=False
    )

    material_id = Column(
        Integer,
        # ForeignKey(
        #     "materials.material_id",
        #     ondelete="RESTRICT"
        # ),
        nullable=False
    )

    quantity_used = Column(
        Numeric(10, 2),
        nullable=False
    )

    remarks = Column(
        Text,
        nullable=True
    )

    # Relationship with DailyProgressReport
    report = relationship(
        "DailyProgressReport",
        back_populates="materials"
    )

    # Relationship with Material
    # material = relationship(
    #     "Material"
    # )




# ============================================================
# Daily Report Machinery
# ============================================================

class DailyReportMachinery(Base):
    __tablename__ = "dailyreportmachinery"

    report_machine_id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    report_id = Column(
        Integer,
        ForeignKey(
            "dailyprogressreports.report_id",
            ondelete="CASCADE"
        ),
        nullable=False
    )

    operating_hours = Column(
        Numeric(5, 2),
        nullable=False
    )

    remarks = Column(
        Text,
        nullable=True
    )

    resource_id = Column(
        Integer,
        # ForeignKey(
        #     "resources.resource_id",
        #     ondelete="RESTRICT"
        # ),
        nullable=False
    )

    # Relationship with DailyProgressReport
    report = relationship(
        "DailyProgressReport",
        back_populates="machinery"
    )

    # Relationship with Resource
    # resource = relationship(
    #     "Resource"
    # )


# ============================================================
# Progress Photos
# ============================================================

class ProgressPhoto(Base):
    __tablename__ = "progressphotos"

    progress_photo_id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    report_id = Column(
        Integer,
        ForeignKey(
            "dailyprogressreports.report_id",
            ondelete="CASCADE"
        ),
        nullable=False
    )

    photo_url = Column(
        String(500),
        nullable=False
    )

    description = Column(
        Text,
        nullable=True
    )

    display_order = Column(
        Integer,
        default=1
    )

    uploaded_at = Column(
        DateTime,
        server_default=func.now()
    )

    # Relationship with DailyProgressReport
    report = relationship(
        "DailyProgressReport",
        back_populates="photos"
    )


# ============================================================
# Delay Records
# ============================================================

class DelayRecord(Base):
    __tablename__ = "delayrecords"

    delay_id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    report_id = Column(
        Integer,
        ForeignKey(
            "dailyprogressreports.report_id",
            ondelete="CASCADE"
        ),
        nullable=False
    )

    reason_for_delay = Column(
        String(100),
        nullable=False
    )

    duration_hours = Column(
        Numeric(5, 2),
        nullable=False
    )

    impact_on_project_timeline = Column(
        Text,
        nullable=True
    )

    description = Column(
        Text,
        nullable=True
    )

    created_at = Column(
        DateTime,
        server_default=func.now()
    )

    updated_at = Column(
        DateTime,
        server_default=func.now(),
        onupdate=func.now()
    )

    # Relationship with DailyProgressReport
    report = relationship(
        "DailyProgressReport",
        back_populates="delay"
    )