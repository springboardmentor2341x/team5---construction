from sqlalchemy.orm import Session

from app.crud import project_site_engineer_crud
from app.schemas.project_site_engineer import (
    ProjectSiteEngineerCreate,
    ProjectSiteEngineerUpdate,
)


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