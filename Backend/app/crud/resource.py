from typing import Optional

from fastapi import HTTPException
from sqlalchemy.orm import Session

from app.models.resource import Resource, ResourceStatus
from app.schemas.resource import ResourceCreate, ResourceUpdate


def create_resource(db: Session, resource: ResourceCreate):
    existing = db.query(Resource).filter(
        Resource.resource_code == resource.resource_code
    ).first()
    if existing:
        raise HTTPException(status_code=400, detail="Resource code already exists.")
    db_resource = Resource(**resource.model_dump())
    db.add(db_resource)
    db.commit()
    db.refresh(db_resource)
    return db_resource


def get_resources(
    db: Session,
    status_filter: Optional[ResourceStatus] = None,
    category_id: Optional[int] = None,
    skip: int = 0,
    limit: int = 100,
):
    query = db.query(Resource)
    if status_filter:
        query = query.filter(Resource.status == status_filter)
    if category_id:
        query = query.filter(Resource.category_id == category_id)
    return query.offset(skip).limit(limit).all()


def get_resource(db: Session, resource_id: int):
    resource = db.get(Resource, resource_id)
    if not resource:
        raise HTTPException(status_code=404, detail="Resource not found.")
    return resource


def update_resource(db: Session, resource_id: int, updates: ResourceUpdate):
    resource = get_resource(db, resource_id)
    for field, value in updates.model_dump(exclude_unset=True).items():
        setattr(resource, field, value)
    db.commit()
    db.refresh(resource)
    return resource


def delete_resource(db: Session, resource_id: int):
    resource = get_resource(db, resource_id)
    db.delete(resource)
    db.commit()


def get_available_resources(db: Session, category_id: Optional[int] = None):
    """Resource Availability feature: what can be allocated right now."""
    query = db.query(Resource).filter(Resource.status == ResourceStatus.AVAILABLE)
    if category_id:
        query = query.filter(Resource.category_id == category_id)
    return query.all()