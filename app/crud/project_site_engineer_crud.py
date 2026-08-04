from sqlalchemy.orm import Session

from app.models.project_site_engineer import ProjectSiteEngineer
from app.schemas.project_site_engineer import (
    ProjectSiteEngineerCreate,
    ProjectSiteEngineerUpdate,
)


def create_project_site_engineer(
    db: Session,
    engineer: ProjectSiteEngineerCreate,
):
    db_engineer = ProjectSiteEngineer(**engineer.model_dump())

    db.add(db_engineer)
    db.commit()
    db.refresh(db_engineer)

    return db_engineer


def get_project_site_engineer(
    db: Session,
    project_site_engineer_id: int,
):
    return (
        db.query(ProjectSiteEngineer)
        .filter(
            ProjectSiteEngineer.project_site_engineer_id
            == project_site_engineer_id
        )
        .first()
    )


def get_all_project_site_engineers(db: Session):
    return db.query(ProjectSiteEngineer).all()


def update_project_site_engineer(
    db: Session,
    project_site_engineer_id: int,
    engineer: ProjectSiteEngineerUpdate,
):
    db_engineer = get_project_site_engineer(
        db,
        project_site_engineer_id,
    )

    if not db_engineer:
        return None

    for key, value in engineer.model_dump(exclude_unset=True).items():
        setattr(db_engineer, key, value)

    db.commit()
    db.refresh(db_engineer)

    return db_engineer


def delete_project_site_engineer(
    db: Session,
    project_site_engineer_id: int,
):
    db_engineer = get_project_site_engineer(
        db,
        project_site_engineer_id,
    )

    if not db_engineer:
        return None

    db.delete(db_engineer)
    db.commit()

    return db_engineer