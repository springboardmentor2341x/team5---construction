from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database import get_db
from app.schemas.project_schedules import (
    ProjectScheduleCreate,
    ProjectScheduleUpdate,
    ProjectScheduleResponse,
)
from app.services import project_schedules_service
from dependencies import allow_roles

router = APIRouter(
    prefix="/project-schedules",
    tags=["Project Schedules"],
)


@router.post("/", response_model=ProjectScheduleResponse)
def create_schedule(
    schedule: ProjectScheduleCreate,
    db: Session = Depends(get_db),
    current_user=Depends(allow_roles("Administrator", "Project Manager")),
):
    return project_schedules_service.create_schedule(db, schedule)


@router.get("/", response_model=list[ProjectScheduleResponse])
def get_all_schedules(db: Session = Depends(get_db)):
    return project_schedules_service.get_all_schedules(db)


@router.get("/{schedule_id}", response_model=ProjectScheduleResponse)
def get_schedule(schedule_id: int, db: Session = Depends(get_db)):
    schedule = project_schedules_service.get_schedule(db, schedule_id)
    if not schedule:
        raise HTTPException(status_code=404, detail="Schedule not found")
    return schedule


@router.put("/{schedule_id}", response_model=ProjectScheduleResponse)
def update_schedule(
    schedule_id: int,
    schedule: ProjectScheduleUpdate,
    db: Session = Depends(get_db),
    current_user=Depends(allow_roles("Administrator", "Project Manager")),
):
    updated = project_schedules_service.update_schedule(db, schedule_id, schedule)
    if not updated:
        raise HTTPException(status_code=404, detail="Schedule not found")
    return updated


@router.delete("/{schedule_id}")
def delete_schedule(
    schedule_id: int,
    db: Session = Depends(get_db),
    current_user=Depends(allow_roles("Administrator", "Project Manager")),
):
    deleted = project_schedules_service.delete_schedule(db, schedule_id)
    if not deleted:
        raise HTTPException(status_code=404, detail="Schedule not found")
    return {"message": "Schedule deleted successfully", "schedule_id": schedule_id}
