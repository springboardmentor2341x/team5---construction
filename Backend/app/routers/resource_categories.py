from typing import List

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from database import get_db
from app.schemas.resource_category import (
    ResourceCategoryCreate,
    ResourceCategoryUpdate,
    ResourceCategoryOut,
)
from app.crud import resource_category as crud

router = APIRouter(prefix="/resource-categories", tags=["Resource Categories"])


@router.post("/", response_model=ResourceCategoryOut, status_code=201)
def create_category(category: ResourceCategoryCreate, db: Session = Depends(get_db)):
    return crud.create_category(db, category)


@router.get("/", response_model=List[ResourceCategoryOut])
def list_categories(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return crud.get_categories(db, skip, limit)


@router.get("/{category_id}", response_model=ResourceCategoryOut)
def get_category(category_id: int, db: Session = Depends(get_db)):
    return crud.get_category(db, category_id)


@router.put("/{category_id}", response_model=ResourceCategoryOut)
def update_category(category_id: int, updates: ResourceCategoryUpdate, db: Session = Depends(get_db)):
    return crud.update_category(db, category_id, updates)


@router.delete("/{category_id}", status_code=204)
def delete_category(category_id: int, db: Session = Depends(get_db)):
    crud.delete_category(db, category_id)
