from typing import List, Optional
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from database import get_db
from app.models.resource_allocation import ResourceAllocation, AllocationStatus
from app.models.resource import Resource
from app.models.resource_category import ResourceCategory
from app.models.project import Project
from app.models.user import User
from app.schemas.resource_allocation import (
    ResourceAllocationCreate,
    ResourceAllocationUpdate,
    ResourceAllocationReturn,
    ResourceAllocationOut,
    PMResourceAllocationResponse,
    SiteEngineerEquipmentResponse,
)
from dependencies import get_current_user
from app.models.maintenance_record import MaintenanceRecord
from app.models.project_site_engineer import ProjectSiteEngineer
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
@router.get("/pm/{project_id}", response_model=List[PMResourceAllocationResponse])
def get_pm_resource_allocations(
    project_id: int,
    db: Session = Depends(get_db),
):
    results = (
        db.query(ResourceAllocation, Resource, ResourceCategory, Project, User)
        .join(Resource, Resource.resource_id == ResourceAllocation.resource_id)
        .join(ResourceCategory, ResourceCategory.category_id == Resource.category_id)
        .join(Project, Project.project_id == ResourceAllocation.project_id)
        .join(User, User.user_id == ResourceAllocation.responsible_user_id)
        .filter(ResourceAllocation.project_id == project_id)
        .all()
    )

    response = []

    for allocation, resource, category, project, user in results:
        response.append({
            "resource_id": resource.resource_id,
            "resource_name": resource.resource_name,
            "resource_type": category.category_name,
            "assigned_project": project.name,
            "assigned_to": user.full_name,
            "quantity": None,
            "status": allocation.status.value if allocation.status else None,
        })

    return response
@router.get(
    "/site-engineer/equipment",
    response_model=List[SiteEngineerEquipmentResponse]
)
def get_site_engineer_equipment(
    db: Session = Depends(get_db),
    current_user = Depends(get_current_user),
):

    results = (
        db.query(
            ResourceAllocation,
            Resource,
            ResourceCategory,
            Project,
            User,
            MaintenanceRecord,
        )
        .join(
            Resource,
            Resource.resource_id == ResourceAllocation.resource_id
        )
        .join(
            ResourceCategory,
            ResourceCategory.category_id == Resource.category_id
        )
        .join(
            Project,
            Project.project_id == ResourceAllocation.project_id
        )
        .join(
            User,
            User.user_id == ResourceAllocation.responsible_user_id
        )
        .outerjoin(
            MaintenanceRecord,
            MaintenanceRecord.resource_id == Resource.resource_id
        )
        .join(
            ProjectSiteEngineer,
            ProjectSiteEngineer.project_id == ResourceAllocation.project_id
        )
        .filter(
            ProjectSiteEngineer.site_engineer_id == current_user.user_id
        )
        .all()
    )

    response = []

    for allocation, resource, category, project, user, maintenance in results:
        response.append({
            "resource_id": resource.resource_id,
            "resource_code": resource.resource_code,
            "equipment_name": resource.resource_name,
            "category": category.category_name,
            "equipment_status": (
                resource.status.value
                if resource.status else None
            ),
            "location": resource.location,

            "project_name": project.name,
            "allocation_date": allocation.allocation_date,
            "expected_return_date": allocation.expected_return_date,
            "actual_return_date": allocation.actual_return_date,

            "responsible_user": user.full_name,
            "allocation_status": (
                allocation.status.value
                if allocation.status else None
            ),
            "remarks": allocation.remarks,

            "last_maintenance_date": (
                maintenance.last_maintenance_date
                if maintenance else None
            ),
            "next_maintenance_date": (
                maintenance.next_maintenance_date
                if maintenance else None
            ),
            "maintenance_type": (
                maintenance.maintenance_type.value
                if maintenance and maintenance.maintenance_type
                else None
            ),
            "maintenance_status": (
                maintenance.maintenance_status.value
                if maintenance and maintenance.maintenance_status
                else None
            ),
            "maintenance_cost": (
                float(maintenance.maintenance_cost)
                if maintenance and maintenance.maintenance_cost is not None
                else None
            ),
            "maintenance_description": (
                maintenance.description
                if maintenance else None
            ),
        })

    return response
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
