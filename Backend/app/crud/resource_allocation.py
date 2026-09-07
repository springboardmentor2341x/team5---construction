from datetime import date
from typing import Optional

from fastapi import HTTPException
from sqlalchemy.orm import Session

from app.models.resource import ResourceStatus
from app.models.resource_allocation import ResourceAllocation, AllocationStatus
from app.schemas.resource_allocation import (
    ResourceAllocationCreate,
    ResourceAllocationUpdate,
    ResourceAllocationReturn,
)
from app.crud.resource import get_resource


def _has_overlapping_allocation(
    db: Session,
    resource_id: int,
    allocation_date: date,
    expected_return_date: Optional[date],
    exclude_allocation_id: Optional[int] = None,
) -> bool:
    """
    Mirrors the DB's exclusion constraint: a resource cannot have two
    PLANNED/ACTIVE allocations with overlapping date ranges.
    """
    new_end = expected_return_date or date.max

    query = db.query(ResourceAllocation).filter(
        ResourceAllocation.resource_id == resource_id,
        ResourceAllocation.status.in_([AllocationStatus.PLANNED, AllocationStatus.ACTIVE]),
    )
    if exclude_allocation_id:
        query = query.filter(ResourceAllocation.allocation_id != exclude_allocation_id)

    for existing in query.all():
        existing_end = existing.expected_return_date or date.max
        if allocation_date <= existing_end and existing.allocation_date <= new_end:
            return True
    return False


def create_allocation(db: Session, allocation: ResourceAllocationCreate):
    resource = get_resource(db, allocation.resource_id)

    if resource.status in (ResourceStatus.UNDER_MAINTENANCE, ResourceStatus.OUT_OF_SERVICE):
        raise HTTPException(
            status_code=400,
            detail=f"Resource '{resource.resource_name}' is {resource.status.value} "
                   f"and cannot be allocated.",
        )

    if _has_overlapping_allocation(
        db, allocation.resource_id, allocation.allocation_date, allocation.expected_return_date
    ):
        raise HTTPException(
            status_code=409,
            detail=f"Resource '{resource.resource_name}' is already allocated "
                   f"during the requested date range.",
        )

    db_allocation = ResourceAllocation(**allocation.model_dump())
    db.add(db_allocation)

    # Reflect the allocation immediately in machinery tracking status.
    resource.status = ResourceStatus.ALLOCATED

    db.commit()
    db.refresh(db_allocation)
    return db_allocation


def get_allocations(
    db: Session,
    project_id: Optional[int] = None,
    resource_id: Optional[int] = None,
    status_filter: Optional[AllocationStatus] = None,
    skip: int = 0,
    limit: int = 100,
):
    query = db.query(ResourceAllocation)
    if project_id:
        query = query.filter(ResourceAllocation.project_id == project_id)
    if resource_id:
        query = query.filter(ResourceAllocation.resource_id == resource_id)
    if status_filter:
        query = query.filter(ResourceAllocation.status == status_filter)
    return query.offset(skip).limit(limit).all()


def get_allocation(db: Session, allocation_id: int):
    allocation = db.get(ResourceAllocation, allocation_id)
    if not allocation:
        raise HTTPException(status_code=404, detail="Allocation not found.")
    return allocation


def update_allocation(db: Session, allocation_id: int, updates: ResourceAllocationUpdate):
    allocation = get_allocation(db, allocation_id)
    for field, value in updates.model_dump(exclude_unset=True).items():
        setattr(allocation, field, value)
    db.commit()
    db.refresh(allocation)
    return allocation


def return_resource(db: Session, allocation_id: int, return_data: ResourceAllocationReturn):
    """Marks equipment as returned and frees it up for future allocation."""
    allocation = get_allocation(db, allocation_id)
    allocation.actual_return_date = return_data.actual_return_date
    allocation.remarks = return_data.remarks or allocation.remarks
    allocation.status = AllocationStatus.COMPLETED

    resource = get_resource(db, allocation.resource_id)
    resource.status = ResourceStatus.AVAILABLE

    db.commit()
    db.refresh(allocation)
    return allocation


def cancel_allocation(db: Session, allocation_id: int):
    allocation = get_allocation(db, allocation_id)
    allocation.status = AllocationStatus.CANCELLED

    resource = get_resource(db, allocation.resource_id)
    resource.status = ResourceStatus.AVAILABLE

    db.commit()
    db.refresh(allocation)
    return allocation