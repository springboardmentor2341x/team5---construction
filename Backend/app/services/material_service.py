from sqlalchemy.orm import Session

from app.crud import material_crud
from app.schemas.material import MaterialCreate, MaterialUpdate


def create_material(db: Session, material: MaterialCreate):
    return material_crud.create_material(db, material)


def get_material(db: Session, material_id: int):
    return material_crud.get_material(db, material_id)


def get_all_materials(db: Session):
    return material_crud.get_all_materials(db)


def update_material(db: Session, material_id: int, material: MaterialUpdate):
    return material_crud.update_material(db, material_id, material)


def delete_material(db: Session, material_id: int):
    return material_crud.delete_material(db, material_id)