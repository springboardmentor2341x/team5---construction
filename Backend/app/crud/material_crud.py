from sqlalchemy.orm import Session
from app.models.material import Material
from app.schemas.material import MaterialCreate, MaterialUpdate


def create_material(db: Session, material: MaterialCreate):
    db_material = Material(**material.model_dump())

    db.add(db_material)
    db.commit()
    db.refresh(db_material)

    return db_material


def get_material(db: Session, material_id: int):
    return (
        db.query(Material)
        .filter(Material.material_id == material_id)
        .first()
    )


def get_all_materials(db: Session):
    return db.query(Material).all()


def update_material(db: Session, material_id: int, material: MaterialUpdate):
    db_material = get_material(db, material_id)

    if not db_material:
        return None

    for key, value in material.model_dump(exclude_unset=True).items():
        setattr(db_material, key, value)

    db.commit()
    db.refresh(db_material)

    return db_material


def delete_material(db: Session, material_id: int):
    db_material = get_material(db, material_id)

    if not db_material:
        return None

    db.delete(db_material)
    db.commit()

    return db_material