from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from database import get_db
from app.services import machine_service
from app.schemas.machine import (
    MachineCreate,
    MachineUpdate,
    MachineResponse,
)

router = APIRouter(
    prefix="/machines",
    tags=["Machines"],
)


@router.post("/", response_model=MachineResponse)
def create_machine(
    machine: MachineCreate,
    db: Session = Depends(get_db),
):
    return machine_service.create_machine(db, machine)


@router.get("/", response_model=list[MachineResponse])
def get_all_machines(
    db: Session = Depends(get_db),
):
    return machine_service.get_all_machines(db)


@router.get("/{machine_id}", response_model=MachineResponse)
def get_machine(
    machine_id: int,
    db: Session = Depends(get_db),
):
    machine = machine_service.get_machine(db, machine_id)

    if not machine:
        raise HTTPException(
            status_code=404,
            detail="Machine not found",
        )

    return machine


@router.put("/{machine_id}", response_model=MachineResponse)
def update_machine(
    machine_id: int,
    machine: MachineUpdate,
    db: Session = Depends(get_db),
):
    updated = machine_service.update_machine(
        db,
        machine_id,
        machine,
    )

    if not updated:
        raise HTTPException(
            status_code=404,
            detail="Machine not found",
        )

    return updated


@router.delete("/{machine_id}")
def delete_machine(
    machine_id: int,
    db: Session = Depends(get_db),
):
    deleted = machine_service.delete_machine(
        db,
        machine_id,
    )

    if not deleted:
        raise HTTPException(
            status_code=404,
            detail="Machine not found",
        )

    return {
        "message": "Machine deleted successfully"
    }