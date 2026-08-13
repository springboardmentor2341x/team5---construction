from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from database import get_db
from app.services import material_service
from app.schemas.material import (
    MaterialCreate,
    MaterialUpdate,
    MaterialResponse,
)

router = APIRouter(
    prefix="/materials",
    tags=["Materials"],
)


@router.post("/", response_model=MaterialResponse)
def create_material(
    material: MaterialCreate,
    db: Session = Depends(get_db),
):
    return material_service.create_material(db, material)


@router.get("/", response_model=list[MaterialResponse])
def get_all_materials(
    db: Session = Depends(get_db),
):
    return material_service.get_all_materials(db)


@router.get("/{material_id}", response_model=MaterialResponse)
def get_material(
    material_id: int,
    db: Session = Depends(get_db),
):
    material = material_service.get_material(db, material_id)

    if not material:
        raise HTTPException(
            status_code=404,
            detail="Material not found",
        )

    return material


@router.put("/{material_id}", response_model=MaterialResponse)
def update_material(
    material_id: int,
    material: MaterialUpdate,
    db: Session = Depends(get_db),
):
    updated = material_service.update_material(
        db,
        material_id,
        material,
    )

    if not updated:
        raise HTTPException(
            status_code=404,
            detail="Material not found",
        )

    return updated


@router.delete("/{material_id}")
def delete_material(
    material_id: int,
    db: Session = Depends(get_db),
):
    deleted = material_service.delete_material(
        db,
        material_id,
    )

    if not deleted:
        raise HTTPException(
            status_code=404,
            detail="Material not found",
        )

    return {
        "message": "Material deleted successfully"
    }