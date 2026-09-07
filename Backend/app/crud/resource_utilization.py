from decimal import Decimal
from typing import Optional

from fastapi import HTTPException
from sqlalchemy.orm import Session

from app.models.resource_utilization import ResourceUtilization
from app.schemas.resource_utilization import (
    ResourceUtilizationCreate,
    UtilizationSummaryOut,
)
from app.crud.resource import get_resource


def create_utilization(db: Session, record: ResourceUtilizationCreate):
    get_resource(db, record.resource_id)  # validates resource exists

    existing = db.query(ResourceUtilization).filter(
        ResourceUtilization.resource_id == record.resource_id,
        ResourceUtilization.project_id == record.project_id,
        ResourceUtilization.utilization_date == record.utilization_date,
    ).first()
    if existing:
        raise HTTPException(
            status_code=400,
            detail="Utilization already recorded for this resource, project, and date.",
        )

    db_record = ResourceUtilization(**record.model_dump())
    db.add(db_record)
    db.commit()
    db.refresh(db_record)
    return db_record


def get_utilization_records(
    db: Session,
    resource_id: Optional[int] = None,
    project_id: Optional[int] = None,
    skip: int = 0,
    limit: int = 100,
):
    query = db.query(ResourceUtilization)
    if resource_id:
        query = query.filter(ResourceUtilization.resource_id == resource_id)
    if project_id:
        query = query.filter(ResourceUtilization.project_id == project_id)
    return query.offset(skip).limit(limit).all()


def get_utilization_summary(db: Session, resource_id: int) -> UtilizationSummaryOut:
    """
    Aggregate operating vs idle hours and compute a utilization percentage,
    e.g. a mixer used 4 of 10 available days => 40% utilization.
    """
    resource = get_resource(db, resource_id)
    records = db.query(ResourceUtilization).filter(
        ResourceUtilization.resource_id == resource_id
    ).all()

    total_operating = sum((r.operating_hours for r in records), Decimal("0"))
    total_idle = sum((r.idle_hours for r in records), Decimal("0"))
    total_hours = total_operating + total_idle

    utilization_pct = (
        float(total_operating / total_hours * 100) if total_hours > 0 else 0.0
    )

    return UtilizationSummaryOut(
        resource_id=resource.resource_id,
        resource_name=resource.resource_name,
        total_operating_hours=total_operating,
        total_idle_hours=total_idle,
        utilization_percentage=round(utilization_pct, 2),
    )