from sqlalchemy.orm import Session
from app.models.project import Project
from app.schemas.project import ProjectCreate, ProjectUpdate


def create_project(db: Session, project: ProjectCreate):

    # Check if project code already exists
    existing_project = (
        db.query(Project)
        .filter(Project.project_code == project.project_code)
        .first()
    )

    if existing_project:
        raise ValueError("Project code already exists")

    project_data = project.model_dump()

    # Default status
    if not project_data.get("status"):
        project_data["status"] = "Planning"

    db_project = Project(**project_data)

    db.add(db_project)
    db.commit()
    db.refresh(db_project)

    return db_project


def get_project(db: Session, project_id: int):
    return (
        db.query(Project)
        .filter(Project.project_id == project_id)
        .first()
    )

def get_all_projects(db: Session):
    return db.query(Project).all()

def update_project(db: Session, project_id: int, project_update: ProjectUpdate):
    db_project = get_project(db, project_id)
    print("DEBUG: db_project =", db_project)
    print("DEBUG: db_project =", project_id)
    if not db_project:
        print("DEBUG: returning none because project is false")
        return None

    if project_update.project_code:
        existing = (
            db.query(Project)
            .filter(
                Project.project_code == project_update.project_code,
                Project.project_id != project_id
            )
            .first()
        )
        if existing:
            raise ValueError("Project code already exists")

    update_data = project_update.model_dump(exclude_unset=True)
    for key, value in update_data.items():
        setattr(db_project, key, value)

    db.commit()
    db.refresh(db_project)
    print("DEBUG: returning db project db_project",db_project)
    return db_project



def delete_project(db: Session, project_id: int):
    db_project = get_project(db, project_id)

    if not db_project:
        return None

    db.delete(db_project)
    db.commit()

    return db_project
