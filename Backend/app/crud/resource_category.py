from fastapi import HTTPException
from sqlalchemy.orm import Session

from app.models.resource_category import ResourceCategory
from app.schemas.resource_category import ResourceCategoryCreate, ResourceCategoryUpdate


def create_category(db: Session, category: ResourceCategoryCreate):
    existing = db.query(ResourceCategory).filter(
        ResourceCategory.category_name == category.category_name
    ).first()
    if existing:
        raise HTTPException(status_code=400, detail="Category name already exists.")
    db_category = ResourceCategory(**category.model_dump())
    db.add(db_category)
    db.commit()
    db.refresh(db_category)
    return db_category


def get_categories(db: Session, skip: int = 0, limit: int = 100):
    return db.query(ResourceCategory).offset(skip).limit(limit).all()


def get_category(db: Session, category_id: int):
    category = db.get(ResourceCategory, category_id)
    if not category:
        raise HTTPException(status_code=404, detail="Resource category not found.")
    return category


def update_category(db: Session, category_id: int, updates: ResourceCategoryUpdate):
    category = get_category(db, category_id)
    for field, value in updates.model_dump(exclude_unset=True).items():
        setattr(category, field, value)
    db.commit()
    db.refresh(category)
    return category


def delete_category(db: Session, category_id: int):
    category = get_category(db, category_id)
    db.delete(category)
    db.commit()