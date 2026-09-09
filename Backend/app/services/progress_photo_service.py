from sqlalchemy.orm import Session

from app.crud import progress_photo_crud
from app.schemas.progress_photo import ProgressPhotoCreate, ProgressPhotoUpdate


def create_progress_photo(db: Session, photo: ProgressPhotoCreate):
    return progress_photo_crud.create_progress_photo(db, photo)


def get_progress_photo(db: Session, photo_id: int):
    return progress_photo_crud.get_progress_photo(db, photo_id)


def get_all_progress_photos(db: Session):
    return progress_photo_crud.get_all_progress_photos(db)


def update_progress_photo(db: Session, photo_id: int, photo: ProgressPhotoUpdate):
    return progress_photo_crud.update_progress_photo(db, photo_id, photo)


def delete_progress_photo(db: Session, photo_id: int):
    return progress_photo_crud.delete_progress_photo(db, photo_id)