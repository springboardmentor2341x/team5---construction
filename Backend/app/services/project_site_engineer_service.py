from sqlalchemy.orm import Session
from app.crud import project_site_engineer_crud
from app.schemas.project_site_engineer import (
ProjectSiteEngineerCreate,
ProjectSiteEngineerUpdate,
)
from app.models.project_site_engineer import ProjectSiteEngineer
from app.models.user import User
from app.models.project import Project

def create_project_site_engineer(db: Session, engineer: ProjectSiteEngineerCreate):
    return project_site_engineer_crud.create_project_site_engineer(db, engineer)


def get_project_site_engineer(db: Session, project_site_engineer_id: int):
    return project_site_engineer_crud.get_project_site_engineer(
        db,
        project_site_engineer_id,
    )


def get_all_project_site_engineers(db: Session):
    return project_site_engineer_crud.get_all_project_site_engineers(db)


def update_project_site_engineer(
    db: Session,
    project_site_engineer_id: int,
    engineer: ProjectSiteEngineerUpdate,
):
    return project_site_engineer_crud.update_project_site_engineer(
        db,
        project_site_engineer_id,
        engineer,
    )


def delete_project_site_engineer(db: Session, project_site_engineer_id: int):
    return project_site_engineer_crud.delete_project_site_engineer(
        db,
        project_site_engineer_id,
    )

def get_pm_site_engineers(db: Session, project_id: int):
    results = (
        db.query(ProjectSiteEngineer, User, Project)
        .join(User, User.user_id == ProjectSiteEngineer.site_engineer_id)
        .join(Project, Project.project_id == ProjectSiteEngineer.project_id)
        .filter(ProjectSiteEngineer.project_id == project_id)
        .all()
    )

    response = []

    for assignment, engineer, project in results:
        response.append({
            "name": engineer.full_name,
            "employee_id": engineer.employee_id,
            "contact": engineer.mobile,
            "assigned_area": None,
            "project_name": project.name,
            "status": assignment.assignment_status,
        })

    return response