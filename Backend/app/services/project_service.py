from sqlalchemy.orm import Session
from app.models.project import Project
from app.models.milestone import Milestone
from app.crud import project_crud
from app.schemas.project import ProjectCreate, ProjectUpdate
from app.crud import project_closure_crud
VALID_STATUS_TRANSITIONS = {
    "Planning": "In Progress",
    "In Progress": "On Hold", "Completed"
    "On Hold": "In Progress",
    "Completed": "Closed",
    "Closed": []
}
def all_milestones_completed(db: Session, project_id: int) -> bool:
    incomplete_count = (
        db.query(Milestone)
        .filter(Milestone.project_id == project_id)
        .filter(Milestone.status != "Completed")
        .count()
    )
    return incomplete_count == 0

def create_project(db: Session, project: ProjectCreate):
    return project_crud.create_project(db, project)


def get_project(db: Session, project_id: int):
    return project_crud.get_project(db, project_id)


def get_all_projects(db: Session):
    return project_crud.get_all_projects(db)

def update_project(db: Session, project_id: int, project: ProjectUpdate):
    existing_project = project_crud.get_project(db, project_id)

    if not existing_project:
        raise ValueError("Project not found")

    if project.status and project.status != existing_project.status:
        current_status = existing_project.status
        new_status = project.status

        allowed_next_statuses = VALID_STATUS_TRANSITIONS.get(current_status, [])

        if new_status not in allowed_next_statuses:
            raise ValueError(
                f"Invalid status transition: cannot change from "
                f"'{current_status}' to '{new_status}'"
            )

        if new_status == "Closed":
            if not all_milestones_completed(db, project_id):
                raise ValueError(
                    "Cannot set status to 'Closed': one or more milestones are not yet completed"
                )
            if not project_closure_crud.is_ready_for_closure(db, project_id):
                raise ValueError(
                    "Cannot set status to 'Closed': inspections, financial settlement, "
                    "and client acceptance must all be completed first"
                )
        elif new_status == "Completed":
            if not all_milestones_completed(db, project_id):
                raise ValueError(
                    "Cannot set status to 'Completed': one or more milestones are not yet completed"
                )
            
    return  project_crud.update_project(db,project_id,project)

def delete_project(db: Session, project_id: int):
    return project_crud.delete_project(db, project_id)
def assign_project_manager(db: Session, project_id: int, project_manager_id: int, updated_by: int):
    existing_project = project_crud.get_project(db, project_id)

    if not existing_project:
        raise ValueError("Project not found")

    existing_project.project_manager_id = project_manager_id
    existing_project.updated_by = updated_by

    db.commit()
    db.refresh(existing_project)

    return existing_project
from app.models.project_manager_history import ProjectManagerHistory

def assign_project_manager(db: Session, project_id: int, project_manager_id: int, updated_by: int):
    existing_project = project_crud.get_project(db, project_id)

    if not existing_project:
        raise ValueError("Project not found")

    previous_manager_id = existing_project.project_manager_id

    existing_project.project_manager_id = project_manager_id
    existing_project.updated_by = updated_by

    db.commit()
    db.refresh(existing_project)

    history_entry = ProjectManagerHistory(
        project_id=project_id,
        previous_manager_id=previous_manager_id,
        new_manager_id=project_manager_id,
        assigned_by=updated_by,
    )
    db.add(history_entry)
    db.commit()

    return existing_project
def get_projects_by_manager(db: Session, manager_id: int):
    projects = (
        db.query(Project)
        .filter(Project.project_manager_id == manager_id)
        .all()
    )

    result = []

    for project in projects:
        milestones = (
            db.query(Milestone)
            .filter(Milestone.project_id == project.project_id)
            .all()
        )

        total_milestones = len(milestones)

        completed_milestones = sum(
            1
            for milestone in milestones
            if milestone.status == "Completed"
        )

        if total_milestones > 0:
            progress_percentage = sum(
                float(milestone.progress_percentage or 0)
                for milestone in milestones
            ) / total_milestones
        else:
            progress_percentage = 0

        project_data = {
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
            "project_manager_id": project.project_manager_id,
            "client_id": project.client_id,
            "created_at": project.created_at,
            "updated_at": project.updated_at,
            "progress_percentage": progress_percentage,
            "completed_milestones": completed_milestones,
            "total_milestones": total_milestones,
        }

        result.append(project_data)

    return result