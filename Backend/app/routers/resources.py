from typing import List, Optional

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from database import get_db
from app.models.resource import ResourceStatus
from app.schemas.resource import ResourceCreate, ResourceUpdate, ResourceOut
from app.crud import resource as crud

router = APIRouter(prefix="/resources", tags=["Resources"])


@router.post("/", response_model=ResourceOut, status_code=201)
def create_resource(resource: ResourceCreate, db: Session = Depends(get_db)):
    return crud.create_resource(db, resource)


@router.get("/", response_model=List[ResourceOut])
def list_resources(
    status_filter: Optional[ResourceStatus] = None,
    category_id: Optional[int] = None,
    skip: int = 0,
    limit: int = 100,
    db: Session = Depends(get_db),
):
    return crud.get_resources(db, status_filter, category_id, skip, limit)


@router.get("/available", response_model=List[ResourceOut])
def list_available_resources(category_id: Optional[int] = None, db: Session = Depends(get_db)):
    return crud.get_available_resources(db, category_id)


@router.get("/{resource_id}", response_model=ResourceOut)
def get_resource(resource_id: int, db: Session = Depends(get_db)):
    return crud.get_resource(db, resource_id)


@router.put("/{resource_id}", response_model=ResourceOut)
def update_resource(resource_id: int, updates: ResourceUpdate, db: Session = Depends(get_db)):
    return crud.update_resource(db, resource_id, updates)


@router.delete("/{resource_id}", status_code=204)
def delete_resource(resource_id: int, db: Session = Depends(get_db)):
    crud.delete_resource(db, resource_id)
