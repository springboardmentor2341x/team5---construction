import logging
logging.basicConfig(level=logging.DEBUG)
from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from jose import jwt, JWTError
from database import SessionLocal, engine, Base
import  schemas, auth
from database import get_db
from dependencies import allow_roles
from email_service import(send_reset_email,send_verification_email,)
from datetime import datetime,timedelta
from auth import ACCESS_TOKEN_EXPIRE_MINUTES
from app.models.user import User
from app.models.project import Project
from app.models.project_site_engineer import ProjectSiteEngineer
from app.models.project_contractor import ProjectContractor
from app.routers import project
from app.routers import project_worker
from app.routers import project_contractor
from app.routers import project_site_engineer
from app.routers import milestone
from app.routers import worker
from app.routers import project_schedule
from app.routers import project_closure

app = FastAPI()
app.include_router(project.router)
app.include_router(project_worker.router)
app.include_router(project_contractor.router)
app.include_router(project_site_engineer.router)
app.include_router(milestone.router)
app.include_router(worker.router)
app.include_router(project_schedule.router)
app.include_router(project_closure.router)
# Base.metadata.create_all(bind=engine)
from sqlalchemy import text


with engine.connect() as conn:
    
    columns = conn.execute(text("""
        SELECT column_name
        FROM information_schema.columns
        WHERE table_name = 'users'
        ORDER BY ordinal_position
    """)).fetchall()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
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


@app.post("/register")
async def register(user: schemas.UserCreate, db: Session = Depends(get_db)):
    existing_user = db.query(User).filter(
        User.email == user.email
    ).first()

    if existing_user:
        raise HTTPException(
            status_code=400,
            detail="Email already registered"
        )
    existing_employee = db.query(User).filter(
    User.employee_id == user.employee_id
).first()

    if existing_employee:
       raise HTTPException(
        status_code=400,
        detail="Employee ID already exists"
    )
    if user.password != user.confirm_password:
     raise HTTPException(
        status_code=400,
        detail="Passwords do not match"
    )

    hashed_password = auth.hash_password(user.password)
    
    new_user = User(
    full_name=user.full_name,
    email=user.email,
    mobile=user.mobile,
    password=hashed_password,
    role=user.role,
    employee_id=user.employee_id,
    department=user.department,
    address=user.address,
    profile_picture=user.profile_picture
)
    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    verification_token = auth.create_email_verification_token(new_user.email)
    new_user.verification_token = verification_token
    db.commit()

    print("DATABASE UPDATED")

    try:
        await send_verification_email(
            new_user.email,
            verification_token
        )
        print("EMAIL SENT")
    except Exception as e:
        print("EMAIL ERROR:", e)
        raise HTTPException(
            status_code=500,
            detail="Failed to send verification email"
        )

    return {"message": "User registered successfully"}      

@app.post("/login")
def login(
    
    user: schemas.UserLogin,
    db: Session = Depends(get_db)
):

    db_user = (
        db.query(User)
        .filter(User.email == user.email)
        .first()
    )

    if not db_user:
        raise HTTPException(
            status_code=401,
            detail="Invalid email or password"
        )

    if not db_user.is_verified:
        raise HTTPException(
            status_code=403,
            detail="Please verify your email first."
        )

    if not auth.verify_password(user.password, db_user.password):
        raise HTTPException(
            status_code=401,
            detail="Invalid email or password"
        )

    access_token = auth.create_access_token(
        data={
            "sub": db_user.email,
            "role": db_user.role
        },
        remember_me=user.remember_me
    )

    if user.remember_me:
        expires_at = datetime.utcnow() + timedelta(days=30)
    else:
        expires_at = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)

    return {
        "message": "Login successful",
        "access_token": access_token,
        "token_type": "bearer",
        "role": db_user.role,
        "full_name": db_user.full_name,
        "expires_at": expires_at.isoformat()
    }   

    
@app.post("/forgot-password")
async def forgot_password(user: schemas.ForgotPassword, db: Session = Depends(get_db)):
    db_user = db.query(User).filter(User.email == user.email).first()

    if not db_user:
        raise HTTPException(status_code=404, detail="Email not found")

    reset_token = auth.create_access_token(
        data={"sub": db_user.email},
        remember_me=False
    )
    await send_reset_email(
        db_user.email,
        reset_token
    )
    return {
        "message": "Password reset token generated successfully",
    }
    
@app.post("/reset-password")
def reset_password(user: schemas.ResetPassword, db: Session = Depends(get_db)):
    # if user.new_password != user.confirm_password:
    #     raise HTTPException(
    #         status_code=400,
    #         detail="Passwords do not match"

    try:
        print("SECRET_KEY =" ,auth.SECRET_KEY)
        print("ALGORITHM =",auth.ALGORITHM)
        print("TOKEN =",user.token)

        payload = jwt.decode(
            user.token,
            auth.SECRET_KEY,
            algorithms=[auth.ALGORITHM]
        )
        print(payload)
        email = payload.get("sub")

    except Exception as e:
     print("JWT ERROR:", type(e).__name__, str(e))
     raise HTTPException(
        status_code=401,
        detail="Invalid or expired token"
    )

    db_user = db.query(User).filter(User.email == email).first()

    if not db_user:
        raise HTTPException(
            status_code=404,
            detail="User not found"
        )

    db_user.password = auth.hash_password(user.new_password)

    db.commit()

    return {
        "message": "Password reset successfully"
    }
@app.get("/profile", response_model=schemas.UserResponse)
def profile(
    current_user: User = Depends(get_current_user)
):
    return current_user
@app.get("/admin/dashboard")
def admin_dashboard(
    current_user=Depends(
        allow_roles("Administrator")
    )
):
    return {
        "message": "Welcome Administrator"
    }
@app.get("/project-manager/dashboard")
def project_manager_dashboard(
    current_user=Depends(allow_roles("Project Manager"))
):
    return {
        "message": f"Welcome {current_user.full_name}",
        "dashboard": "Project Manager Dashboard"
    }
@app.get("/site-engineer/dashboard")
def site_engineer_dashboard(
    current_user=Depends(allow_roles("Site Engineer"))
):
    return {
        "message": f"Welcome {current_user.full_name}",
        "dashboard": "Site Engineer Dashboard"
    }
@app.get("/contractor/dashboard")
def contractor_dashboard(
    current_user=Depends(allow_roles("Contractor"))
):
    return {
        "message": f"Welcome {current_user.full_name}",
        "dashboard": "Contractor Dashboard"
    }
@app.get("/worker/dashboard")
def worker_dashboard(
    current_user=Depends(allow_roles("Worker"))
):
    return {
        "message": f"Welcome {current_user.full_name}",
        "dashboard": "Worker Dashboard"
    }
@app.get("/client/dashboard")
def client_dashboard(
    current_user=Depends(allow_roles("Client"))
):
    return {
        "message": f"Welcome {current_user.full_name}",
        "dashboard": "Client Dashboard"
    }
@app.put("/profile",response_model=schemas.UserResponse)
def update_profile(
    user_data: schemas.UserUpdate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    current_user.full_name = user_data.full_name
    current_user.mobile = user_data.mobile
    current_user.department = user_data.department
    current_user.address = user_data.address

    db.commit()
    db.refresh(current_user)

    return current_user
@app.get("/verify-email")
def verify_email(token: str, db: Session = Depends(get_db)):

    try:
        payload = jwt.decode(
            token,
            auth.SECRET_KEY,
            algorithms=[auth.ALGORITHM]
        )

        email = payload.get("sub")

    except JWTError:
        raise HTTPException(
            status_code=401,
            detail="Invalid verification token"
        )

    user = db.query(User).filter(
        User.email == email
    ).first()

    if not user:
        raise HTTPException(
            status_code=404,
            detail="User not found"
        )

    user.is_verified = True
    user.verification_token = None

    db.commit()

    return {
        "message": "Email verified successfully"
    }
@app.get("/")
def home():
    return {"message": "Construction Authentication API is running"}