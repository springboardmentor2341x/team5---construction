from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import datetime


class UserCreate(BaseModel):
    full_name: str
    email: EmailStr
    password: str
    #phone: Optional[str] = None
    mobile: Optional[str] = None
    role: Optional[str] = None
    status: str
    employee_id: Optional[str] = None
    department: Optional[str] = None
    address: Optional[str] = None
    profile_picture: Optional[str] = None


class UserResponse(BaseModel):
    user_id: int
    full_name: str
    email: EmailStr
    mobile: Optional[str] = None
    role: Optional[str] = None
    employee_id: Optional[str] = None
    department: Optional[str] = None
    address: Optional[str] = None
    profile_picture: Optional[str] = None
    is_verified: bool
    created_at: Optional[datetime] = None
    updated_at: Optional[datetime] = None

    class Config:
        from_attributes = True