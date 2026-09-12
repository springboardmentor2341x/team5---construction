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
def get_my_projects(db: Session, site_engineer_id: int):
    results = (
        db.query(ProjectSiteEngineer, Project)
        .join(
            Project,
            Project.project_id == ProjectSiteEngineer.project_id
        )
        .filter(
            ProjectSiteEngineer.site_engineer_id == site_engineer_id
        )
        .all()
    )

    response = []

    for assignment, project in results:
        project_manager = None

        if project.project_manager_id:
            manager = db.query(User).filter(
                User.user_id == project.project_manager_id
            ).first()

            if manager:
                project_manager = manager.full_name

        response.append({
            "project_id": project.project_id,
            "project_code": project.project_code,
            "project_name": project.name,
            "description": project.description,
            "category": project.category,
            "location": project.location,
            "estimated_budget": project.estimated_budget,
            "priority": project.priority,
            "project_status": project.status,
            "planned_start_date": project.planned_start_date,
            "expected_completion_date": project.expected_completion_date,
            "assigned_date": assignment.assigned_date,
            "assignment_end_date": assignment.end_date,
            "assignment_status": assignment.assignment_status,
            "project_manager_name": project_manager,
        })

    return response