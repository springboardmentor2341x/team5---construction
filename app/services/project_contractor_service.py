from sqlalchemy.orm import Session

from app.crud import project_contractor_crud
from app.schemas.project_contractor import (
    ProjectContractorCreate,
    ProjectContractorUpdate,
)


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