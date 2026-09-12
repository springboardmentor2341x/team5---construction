from sqlalchemy.orm import Session

from app.crud import project_contractor_crud
from app.schemas.project_contractor import (
    ProjectContractorCreate,
    ProjectContractorUpdate,
)
from app.models.user import User
from app.models.project import Project
from app.schemas.contractor_dashboard import ContractorDashboardResponse

def create_project_contractor(
    db: Session,
    contractor: ProjectContractorCreate,
):
    return project_contractor_crud.create_project_contractor(
        db,
        contractor,
    )


def get_project_contractor(db: Session, project_contractor_id: int):
    return project_contractor_crud.get_project_contractor(
        db,
        project_contractor_id,
    )


def get_all_project_contractors(db: Session):
    return project_contractor_crud.get_all_project_contractors(db)


def update_project_contractor(
    db: Session,
    project_contractor_id: int,
    contractor: ProjectContractorUpdate,
):
    return project_contractor_crud.update_project_contractor(
        db,
        project_contractor_id,
        contractor,
    )


def delete_project_contractor(
    db: Session,
    project_contractor_id: int,
):
    return project_contractor_crud.delete_project_contractor(
        db,
        project_contractor_id,
    )
def get_my_projects(db: Session, contractor_id: int):
    return project_contractor_crud.get_my_projects(
        db,
        contractor_id,
    )
def get_contractor_dashboard(
    db: Session,
    contractor_id: int,
):
    # Get contractor profile
    contractor = (
        db.query(User)
        .filter(User.user_id == contractor_id)
        .first()
    )

    if not contractor:
        return None

    # Get projects assigned to this contractor
    assignments = (
        db.query(project_contractor_crud.ProjectContractor)
        .filter(
            project_contractor_crud.ProjectContractor.contractor_id
            == contractor_id
        )
        .all()
    )

    projects = []

    for assignment in assignments:
        project = (
            db.query(Project)
            .filter(
                Project.project_id == assignment.project_id
            )
            .first()
        )

        if not project:
            continue

        projects.append({
            "project_id": project.project_id,
            "project_code": project.project_code,
            "name": project.name,
            "description": project.description,
            "category": project.category,
            "location": project.location,
            "estimated_budget": project.estimated_budget,
            "priority": project.priority,
            "status": project.status,
            "planned_start_date": project.planned_start_date,
            "expected_completion_date": project.expected_completion_date,
            "specialization": assignment.specialization,
            "assignment_status": assignment.assignment_status,
        })

    return {
        "contractor": {
            "user_id": contractor.user_id,
            "full_name": contractor.full_name,
            "email": contractor.email,
            "mobile": contractor.mobile,
            "employee_id": contractor.employee_id,
            "department": contractor.department,
            "address": contractor.address,
            "is_verified": contractor.is_verified,
        },
        "projects": projects,
    }
def get_pm_contractors(db: Session, project_id: int):
    assignments = (
        db.query(project_contractor_crud.ProjectContractor, User, Project)
        .join(
            User,
            User.user_id == project_contractor_crud.ProjectContractor.contractor_id,
        )
        .join(
            Project,
            Project.project_id == project_contractor_crud.ProjectContractor.project_id,
        )
        .filter(
            project_contractor_crud.ProjectContractor.project_id == project_id
        )
        .all()
    )

    response = []

    for assignment, contractor, project in assignments:
        response.append({
            "contractor_name": contractor.full_name,
            "company": None,
            "specialization": assignment.specialization,
            "contact": contractor.mobile,
            "assigned_project": project.name,
            "status": assignment.assignment_status,
        })

    return response