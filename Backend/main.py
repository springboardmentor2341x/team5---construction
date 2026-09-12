from sqlalchemy import text
from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
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
from app.models.milestone import Milestone
from app.models.daily_progress import DailyProgressReport
from app.models.resource_allocation import ResourceAllocation
from app.models.resource_utilization import ResourceUtilization
from app.models. daily_progress import DelayRecord
from app.routers import project
from app.routers import project_worker
from app.routers import project_contractor
from app.routers import project_site_engineer
from app.routers import milestone
from app.routers import worker
from app.routers import project_schedule
from app.routers import project_closure
from app.routers.daily_progress import router as daily_progress_router

from app.routers import (
    worker,
    materials,
    attendance,
    milestone,
    daily_reports,
    delay_records,
    progress_photos,
    site_activity_logs,
)
from app.routers import (
    resource_categories,
    resources,
    resource_allocations,
    resource_utilization,
    maintenance_records,
)
from app.routers import material_inventory
from app.services import project_contractor_service
from app.schemas.contractor_dashboard import ContractorDashboardResponse
app = FastAPI()
app.include_router(project.router)
app.include_router(project_worker.router)
app.include_router(project_contractor.router)
app.include_router(project_site_engineer.router)
app.include_router(worker.router)
app.include_router(project_schedule.router)
app.include_router(project_closure.router)
app.include_router(daily_progress_router)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:4200",
        "http://127.0.0.1:4200"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(material_inventory.router)
app.include_router(materials.router)
app.include_router(attendance.router)
app.include_router(milestone.router)
app.include_router(daily_reports.router)
app.include_router(delay_records.router)
app.include_router(progress_photos.router)
app.include_router(site_activity_logs.router)
app.include_router(resource_categories.router)
app.include_router(resources.router)
app.include_router(resource_allocations.router)
app.include_router(resource_utilization.router)
app.include_router(maintenance_records.router)

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
        

    return {"message": "User registered successfully"}      

@app.post("/admin/users", response_model=schemas.UserResponse)
def add_admin_user(
    user: schemas.UserCreate,
    current_user=Depends(allow_roles("Administrator")),
    db: Session = Depends(get_db)
):
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

    hashed_password = auth.hash_password(user.password)

    new_user = User(
        full_name=user.full_name,
        email=user.email,
        mobile=user.mobile,
        password=hashed_password,
        role=user.role,
        employee_id=user.employee_id,
        department=user.department,
        status="Active",
        address=user.address,
        profile_picture=user.profile_picture
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return new_user
@app.delete("/admin/users/{user_id}")
def delete_admin_user(
    user_id: int,
    current_user=Depends(allow_roles("Administrator")),
    db: Session = Depends(get_db)
):
    user = db.query(User).filter(User.user_id == user_id).first()

    if not user:
        raise HTTPException(
            status_code=404,
            detail="User not found"
        )

    references = [
        ("projects", "client_id"),
        ("projects", "project_manager_id"),
        ("workers", "user_id"),
        ("projectcontractors", "contractor_id"),
        ("projectsiteengineers", "site_engineer_id"),
        ("dailyprogressreports", "site_engineer_id"),
        ("siteactivitylogs", "responsible_user_id"),
        ("resourceallocations", "responsible_user_id"),
        ("maintenancerecords", "service_engineer_id"),
    ]

    for table_name, column_name in references:
        result = db.execute(
            text(
                f'SELECT 1 FROM "{table_name}" '
                f'WHERE "{column_name}" = :user_id LIMIT 1'
            ),
            {"user_id": user_id}
        ).first()

        if result:
            raise HTTPException(
                status_code=409,
                detail=f"User is already used in {table_name}. Cannot delete this user."
            )

    db.delete(user)
    db.commit()

    return {
        "message": "User deleted successfully",
        "user_id": user_id
    }
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
@app.get("/admin/users")
def get_all_users(
    current_user=Depends(allow_roles("Administrator")),
    db: Session = Depends(get_db)
):
    users = db.query(User).all()

    return [
        {
            "user_id": user.user_id,
            "full_name": user.full_name,
            "email": user.email,
            "mobile": user.mobile,
            "role": user.role,
            "department": user.department,
            "employee_id": user.employee_id,
            "status": user.status,
        }
        for user in users
    ]
@app.get("/project-manager/dashboard")
def project_manager_dashboard(
    current_user=Depends(allow_roles("Project Manager")),
    db: Session = Depends(get_db)
):
    # Get projects assigned to the logged-in Project Manager
    projects = (
        db.query(Project)
        .filter(Project.project_manager_id == current_user.user_id)
        .all()
    )

    dashboard_projects = []
    total_milestones = 0
    completed_milestones = 0
    total_progress = 0
    progress_count = 0

    for project in projects:

        # Milestones for this project
        milestones = (
            db.query(Milestone)
            .filter(Milestone.project_id == project.project_id)
            .all()
        )

        total_milestones += len(milestones)

        project_milestones = []

        for milestone in milestones:

            if milestone.status == "Completed":
                completed_milestones += 1

            if milestone.progress_percentage is not None:
                total_progress += float(milestone.progress_percentage)
                progress_count += 1

            project_milestones.append({
                "milestone_id": milestone.milestone_id,
                "milestone_name": milestone.milestone_name,
                "status": milestone.status,
                "progress_percentage": (
                    float(milestone.progress_percentage)
                    if milestone.progress_percentage is not None
                    else 0
                ),
                "planned_start_date": (
                    milestone.planned_start_date.isoformat()
                    if milestone.planned_start_date else None
                ),
                "planned_end_date": (
                    milestone.planned_end_date.isoformat()
                    if milestone.planned_end_date else None
                ),
                "actual_start_date": (
                    milestone.actual_start_date.isoformat()
                    if milestone.actual_start_date else None
                ),
                "actual_end_date": (
                    milestone.actual_end_date.isoformat()
                    if milestone.actual_end_date else None
                )
            })

        # Daily progress reports are connected through milestones
        milestone_ids = [m.milestone_id for m in milestones]

        daily_reports = []

        if milestone_ids:
            daily_reports = (
                db.query(DailyProgressReport)
                .filter(
                    DailyProgressReport.milestone_id.in_(milestone_ids)
                )
                .order_by(DailyProgressReport.report_date.desc())
                .all()
            )

        latest_progress = None

        if daily_reports:
            latest_progress = float(
                daily_reports[0].progress_percentage
            )

        dashboard_projects.append({
            "project_id": project.project_id,
            "project_code": project.project_code,
            "name": project.name,
            "category": project.category,
            "location": project.location,
            "status": project.status,
            "priority": project.priority,
            "estimated_budget": (
                float(project.estimated_budget)
                if project.estimated_budget is not None
                else None
            ),
            "planned_start_date": (
                project.planned_start_date.isoformat()
                if project.planned_start_date else None
            ),
            "expected_completion_date": (
                project.expected_completion_date.isoformat()
                if project.expected_completion_date else None
            ),
            "latest_progress": latest_progress,
            "milestones": project_milestones,
            "daily_reports_count": len(daily_reports)
        })

    average_milestone_progress = (
        round(total_progress / progress_count, 2)
        if progress_count
        else 0
    )

    return {
        "message": f"Welcome {current_user.full_name}",
        "dashboard": "Project Manager Dashboard",

        "summary": {
            "assigned_projects": len(projects),
            "total_milestones": total_milestones,
            "completed_milestones": completed_milestones,
            "average_milestone_progress": average_milestone_progress
        },

        "projects": dashboard_projects
    }
@app.get("/site-engineer/dashboard")
def site_engineer_dashboard(
    current_user=Depends(allow_roles("Site Engineer"))
):
    return {
        "message": f"Welcome {current_user.full_name}",
        "dashboard": "Site Engineer Dashboard"
    }
@app.get(
    "/contractor/dashboard",
    response_model=ContractorDashboardResponse
)
def contractor_dashboard(
    current_user: User = Depends(allow_roles("Contractor")),
    db: Session = Depends(get_db)
):
    return project_contractor_service.get_contractor_dashboard(
        db,
        current_user.user_id
    )
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