from pydantic import BaseModel, EmailStr, field_validator
import re
from typing import Literal
class UserCreate(BaseModel):
    full_name: str
    email: EmailStr
    mobile: str
    password: str
    confirm_password: str
    role: Literal[
                 "Administrator",
                 "Project Manager",
                 "Site Engineer",
                 "Contractor",
                 "Worker",
                 "Client"

    ]       
    employee_id: str
    department: str
    address: str | None = None
    profile_picture: str | None = None

    @field_validator("password")
    @classmethod
    def validate_password(cls, value):
        if len(value) < 8:
            raise ValueError("Password must be at least 8 characters")

        if not re.search(r"[A-Z]", value):
            raise ValueError("Password must contain at least one uppercase letter")

        if not re.search(r"[a-z]", value):
            raise ValueError("Password must contain at least one lowercase letter")

        if not re.search(r"\d", value):
            raise ValueError("Password must contain at least one number")

        if not re.search(r"[!@#$%^&*(),.?\":{}|<>]", value):
            raise ValueError("Password must contain at least one special character")

        return value

    @field_validator("mobile")
    @classmethod
    def validate_mobile(cls, value):
        if not re.fullmatch(r"[6-9]\d{9}", value):
            raise ValueError("Enter a valid 10-digit mobile number")
        return value

    @field_validator("confirm_password")
    @classmethod
    def passwords_match(cls, value, info):
        if "password" in info.data and value != info.data["password"]:
            raise ValueError("Passwords do not match")
        return value
class UserLogin(BaseModel):
    email:EmailStr
    password:str
    remember_me:bool = False  
class ForgotPassword(BaseModel):
    email: EmailStr


class ResetPassword(BaseModel):
    token: str
    new_password: str
    confirm_password: str

class UserUpdate(BaseModel):
    full_name: str
    mobile: str
    department: str
    address: str | None = None   
from typing import Optional

class UserResponse(BaseModel):
    id: int
    full_name: str
    email: str
    mobile: str
    role: str
    employee_id: str
    department: str
    address: Optional[str] = None
    profile_picture: Optional[str] = None

    class Config:
        from_attributes = True  
class VerifyEmail(BaseModel):
    token: str   
class LoginRequest(BaseModel):
    email: EmailStr
    password: str
    remember_me: bool = False        