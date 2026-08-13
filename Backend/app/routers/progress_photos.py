from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from database import get_db
from app.services import progress_photo_service
from app.schemas.progress_photo import (
    ProgressPhotoCreate,
    ProgressPhotoUpdate,
    ProgressPhotoResponse,
)

router = APIRouter(
    prefix="/progress-photos",
    tags=["Progress Photos"],
)


@router.post("/", response_model=ProgressPhotoResponse)
def create_progress_photo(
    photo: ProgressPhotoCreate,
    db: Session = Depends(get_db),
):
    return progress_photo_service.create_progress_photo(db, photo)


@router.get("/", response_model=list[ProgressPhotoResponse])
def get_all_progress_photos(
    db: Session = Depends(get_db),
):
    return progress_photo_service.get_all_progress_photos(db)


@router.get("/{photo_id}", response_model=ProgressPhotoResponse)
def get_progress_photo(
    photo_id: int,
    db: Session = Depends(get_db),
):
    photo = progress_photo_service.get_progress_photo(db, photo_id)

    if not photo:
        raise HTTPException(
            status_code=404,
            detail="Progress photo not found",
        )

    return photo


@router.put("/{photo_id}", response_model=ProgressPhotoResponse)
def update_progress_photo(
    photo_id: int,
    photo: ProgressPhotoUpdate,
    db: Session = Depends(get_db),
):
    updated = progress_photo_service.update_progress_photo(
        db,
        photo_id,
        photo,
    )

    if not updated:
        raise HTTPException(
            status_code=404,
            detail="Progress photo not found",
        )

    return updated


@router.delete("/{photo_id}")
def delete_progress_photo(
    photo_id: int,
    db: Session = Depends(get_db),
):
    deleted = progress_photo_service.delete_progress_photo(
        db,
        photo_id,
    )

    if not deleted:
        raise HTTPException(
            status_code=404,
            detail="Progress photo not found",
        )

    return {
        "message": "Progress photo deleted successfully"
    }