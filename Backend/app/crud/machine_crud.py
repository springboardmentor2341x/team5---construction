from sqlalchemy.orm import Session
from app.models.machine import Machine
from app.schemas.machine import MachineCreate, MachineUpdate


def create_machine(db: Session, machine: MachineCreate):
    db_machine = Machine(**machine.model_dump())

    db.add(db_machine)
    db.commit()
    db.refresh(db_machine)

    return db_machine


def get_machine(db: Session, machine_id: int):
    return (
        db.query(Machine)
        .filter(Machine.machine_id == machine_id)
        .first()
    )


def get_all_machines(db: Session):
    return db.query(Machine).all()


def update_machine(db: Session, machine_id: int, machine: MachineUpdate):
    db_machine = get_machine(db, machine_id)

    if not db_machine:
        return None

    for key, value in machine.model_dump(exclude_unset=True).items():
        setattr(db_machine, key, value)

    db.commit()
    db.refresh(db_machine)

    return db_machine


def delete_machine(db: Session, machine_id: int):
    db_machine = get_machine(db, machine_id)

    if not db_machine:
        return None

    db.delete(db_machine)
    db.commit()

    return db_machine