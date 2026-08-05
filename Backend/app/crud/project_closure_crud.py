from sqlalchemy.orm import Session
from app.models.project_closure import ProjectClosure
from app.schemas.project_closure import ProjectClosureCreate, ProjectClosureUpdate


def create_closure(db: Session, closure: ProjectClosureCreate):
    db_closure = ProjectClosure(**closure.model_dump())
    db.add(db_closure)
    db.commit()
    db.refresh(db_closure)

    return db_closure


def get_closure_by_project(db: Session, project_id: int):
    return (
        db.query(ProjectClosure)
        .filter(ProjectClosure.project_id == project_id)
        .first()
    )


def update_closure(db: Session, project_id: int, closure: ProjectClosureUpdate, updated_by: int):
    db_closure = get_closure_by_project(db, project_id)

    if not db_closure:
        return None

    for key, value in closure.model_dump(exclude_unset=True).items():
        setattr(db_closure, key, value)

    db_closure.updated_by = updated_by

    db.commit()
    db.refresh(db_closure)

    return db_closure


from app.models.milestone import Milestone

def is_ready_for_closure(db: Session, project_id: int) -> bool:
    closure = get_closure_by_project(db, project_id)
    if not closure:
        return False

    if not (
        closure.inspections_approved
        and closure.financial_settlement_completed
        and closure.client_acceptance_received
    ):
        return False

    milestones = db.query(Milestone).filter(Milestone.project_id == project_id).all()
    if not milestones:
        return False  # no milestones defined yet — not ready

    return all(m.actual_end_date is not None for m in milestones)