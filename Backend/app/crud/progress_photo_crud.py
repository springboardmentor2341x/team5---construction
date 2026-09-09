from sqlalchemy.orm import Session
from app.models.progress_photo import ProgressPhoto
from app.schemas.progress_photo import ProgressPhotoCreate, ProgressPhotoUpdate


def create_progress_photo(db: Session, photo: ProgressPhotoCreate):
    db_photo = ProgressPhoto(**photo.model_dump())

    db.add(db_photo)
    db.commit()
    db.refresh(db_photo)

    return db_photo


def get_progress_photo(db: Session, photo_id: int):
    return (
        db.query(ProgressPhoto)
        .filter(ProgressPhoto.progress_photo_id == photo_id)
        .first()
    )


def get_all_progress_photos(db: Session):
    return db.query(ProgressPhoto).all()


def update_progress_photo(db: Session, photo_id: int, photo: ProgressPhotoUpdate):
    db_photo = get_progress_photo(db, photo_id)

    if not db_photo:
        return None

    for key, value in photo.model_dump(exclude_unset=True).items():
        setattr(db_photo, key, value)

    db.commit()
    db.refresh(db_photo)

    return db_photo


def delete_progress_photo(db: Session, photo_id: int):
    db_photo = get_progress_photo(db, photo_id)

    if not db_photo:
        return None

    db.delete(db_photo)
    db.commit()

    return db_photo