from fastapi import Depends, HTTPException,status
from sqlalchemy.orm import Session

import auth
from app.models.user import User
from database import get_db
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials

security = HTTPBearer()

def get_current_user(
    credentials: HTTPAuthorizationCredentials = Depends(security),
    db: Session = Depends(get_db)
):
    token = credentials.credentials
    email = auth.verify_token(token)

    user = db.query(User).filter(
        User.email == email
    ).first()

    if not user:
        raise HTTPException(
            status_code=404,
            detail="User not found"
        )

    return user
def allow_roles(*roles):
    def role_checker(
        current_user: User = Depends(get_current_user)
    ):
        print("User email:",
              current_user.email)
        print("User role:",  
              current_user.role)
        print("Allowed roles:",roles)

        if current_user.role not in roles:
            raise HTTPException(
                status_code=403,
                detail="You are not authorized to perform this action"
            )

        return current_user

    return role_checker