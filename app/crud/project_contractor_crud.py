from sqlalchemy.orm import Session

from app.models.project_contractor import ProjectContractor
from app.schemas.project_contractor import (
    ProjectContractorCreate,
    ProjectContractorUpdate,
)


def create_project_contractor(
    db: Session,
    contractor: ProjectContractorCreate,
):
    db_contractor = ProjectContractor(**contractor.model_dump())

    db.add(db_contractor)
    db.commit()
    db.refresh(db_contractor)

    return db_contractor


def get_project_contractor(
    db: Session,
    project_contractor_id: int,
):
    return (
        db.query(ProjectContractor)
        .filter(
            ProjectContractor.project_contractor_id
            == project_contractor_id
        )
        .first()
    )


def get_all_project_contractors(db: Session):
    return db.query(ProjectContractor).all()


def update_project_contractor(
    db: Session,
    project_contractor_id: int,
    contractor: ProjectContractorUpdate,
):
    db_contractor = get_project_contractor(
        db,
        project_contractor_id,
    )

    if not db_contractor:
        return None

    for key, value in contractor.model_dump(exclude_unset=True).items():
        setattr(db_contractor, key, value)

    db.commit()
    db.refresh(db_contractor)

    return db_contractor


def delete_project_contractor(
    db: Session,
    project_contractor_id: int,
):
    db_contractor = get_project_contractor(
        db,
        project_contractor_id,
    )

    if not db_contractor:
        return None

    db.delete(db_contractor)
    db.commit()

    return db_contractor