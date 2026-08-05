from sqlalchemy.orm import Session
from app.crud import project_closure_crud
from app.schemas.project_closure import ProjectClosureCreate, ProjectClosureUpdate


def create_closure(db: Session, closure: ProjectClosureCreate):
    existing = project_closure_crud.get_closure_by_project(db, closure.project_id)
    if existing:
        raise ValueError("Closure record already exists for this project")
    return project_closure_crud.create_closure(db, closure)


def get_closure_by_project(db: Session, project_id: int):
    return project_closure_crud.get_closure_by_project(db, project_id)


def update_closure(db: Session, project_id: int, closure: ProjectClosureUpdate, updated_by: int):
    updated = project_closure_crud.update_closure(db, project_id, closure, updated_by)
    if not updated:
        raise ValueError("Closure record not found for this project")
    return updated