from sqlalchemy.orm import Session

from app.crud import machine_crud
from app.schemas.machine import MachineCreate, MachineUpdate


def create_machine(db: Session, machine: MachineCreate):
    return machine_crud.create_machine(db, machine)


def get_machine(db: Session, machine_id: int):
    return machine_crud.get_machine(db, machine_id)


def get_all_machines(db: Session):
    return machine_crud.get_all_machines(db)


def update_machine(db: Session, machine_id: int, machine: MachineUpdate):
    return machine_crud.update_machine(db, machine_id, machine)


def delete_machine(db: Session, machine_id: int):
    return machine_crud.delete_machine(db, machine_id)