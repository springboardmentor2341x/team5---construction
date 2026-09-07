from typing import List, Optional

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from database import get_db
from app.models.resource_allocation import AllocationStatus
from app.schemas.resource_allocation import (
    ResourceAllocationCreate,
    ResourceAllocationUpdate,
    ResourceAllocationReturn,
    ResourceAllocationOut,
)
from app.crud import resource_allocation as crud

router = APIRouter(prefix="/resource-allocations", tags=["Resource Allocations"])


@router.post("/", response_model=ResourceAllocationOut, status_code=201)
def allocate_resource(allocation: ResourceAllocationCreate, db: Session = Depends(get_db)):
    """Returns 409 Conflict if the resource is already allocated during an overlapping period."""
    return crud.create_allocation(db, allocation)


@router.get("/", response_model=List[ResourceAllocationOut])
def list_allocations(
    project_id: Optional[int] = None,
    resource_id: Optional[int] = None,
    status_filter: Optional[AllocationStatus] = None,
    skip: int = 0,
    limit: int = 100,
    db: Session = Depends(get_db),
):
    return crud.get_allocations(db, project_id, resource_id, status_filter, skip, limit)


@router.get("/{allocation_id}", response_model=ResourceAllocationOut)
def get_allocation(allocation_id: int, db: Session = Depends(get_db)):
    return crud.get_allocation(db, allocation_id)


@router.put("/{allocation_id}", response_model=ResourceAllocationOut)
def update_allocation(allocation_id: int, updates: ResourceAllocationUpdate, db: Session = Depends(get_db)):
    return crud.update_allocation(db, allocation_id, updates)


@router.post("/{allocation_id}/return", response_model=ResourceAllocationOut)
def return_resource(allocation_id: int, return_data: ResourceAllocationReturn, db: Session = Depends(get_db)):
    return crud.return_resource(db, allocation_id, return_data)


@router.post("/{allocation_id}/cancel", response_model=ResourceAllocationOut)
def cancel_allocation(allocation_id: int, db: Session = Depends(get_db)):
    return crud.cancel_allocation(db, allocation_id)
