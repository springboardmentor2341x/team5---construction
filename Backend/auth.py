from fastapi import HTTPException
from jose import JWTError
from passlib.context import CryptContext
from jose import jwt
from datetime import datetime, timedelta
from dotenv import load_dotenv
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials

security = HTTPBearer()
import os

load_dotenv()

SECRET_KEY = os.getenv("SECRET_KEY")
ALGORITHM = os.getenv("ALGORITHM")
ACCESS_TOKEN_EXPIRE_MINUTES = int(os.getenv("ACCESS_TOKEN_EXPIRE_MINUTES"))

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


def hash_password(password: str):
    return pwd_context.hash(password)


def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)


# credentials: HTTPAuthorizationCredentials = Depends(security)
# ...
# token = credentials.credentials


def create_access_token(data: dict, remember_me: bool = False):
    to_encode = data.copy()

    if remember_me:
        expire = datetime.utcnow() + timedelta(days=30)
    else:
        expire = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)

    to_encode.update({"exp": expire})
    print("Remember Me:", remember_me)
    print("Expires At:", expire)

    return jwt.encode(
        to_encode,
        SECRET_KEY,
        algorithm=ALGORITHM
    )


def verify_token(token: str):
    try:
        payload = jwt.decode(
            token,
            SECRET_KEY,
            algorithms=[ALGORITHM]
        )

        email = payload.get("sub")

        if email is None:
            raise HTTPException(
                status_code=401,
                detail="Invalid token"
            )

        return email

    except JWTError:
        raise HTTPException(
            status_code=401,
            detail="Invalid or expired token"
        )
from datetime import datetime, timedelta
from jose import jwt

EMAIL_SECRET = SECRET_KEY

def create_email_verification_token(email: str):
    expire = datetime.utcnow() + timedelta(hours=24)

    payload = {
        "sub": email,
        "exp": expire
    }

    return jwt.encode(payload, EMAIL_SECRET, algorithm=ALGORITHM)    