from pydantic import BaseModel
from datetime import datetime
from typing import Optional


class ProgressPhotoBase(BaseModel):
    report_id: int
    photo_url: str
    description: Optional[str] = None


class ProgressPhotoCreate(ProgressPhotoBase):
    pass


class ProgressPhotoUpdate(BaseModel):
    report_id: Optional[int] = None
    photo_url: Optional[str] = None
    description: Optional[str] = None


class ProgressPhotoResponse(ProgressPhotoBase):
    progress_photo_id: int
    uploaded_at: Optional[datetime] = None

    class Config:
        from_attributes = True