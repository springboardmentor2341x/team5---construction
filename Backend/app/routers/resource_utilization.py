from typing import List, Optional

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from database import get_db
from app.schemas.resource_utilization import (
    ResourceUtilizationCreate,
    ResourceUtilizationOut,
    UtilizationSummaryOut,
)
from app.crud import resource_utilization as crud

router = APIRouter(prefix="/resource-utilization", tags=["Resource Utilization"])


@router.post("/", response_model=ResourceUtilizationOut, status_code=201)
def log_utilization(record: ResourceUtilizationCreate, db: Session = Depends(get_db)):
    return crud.create_utilization(db, record)


@router.get("/", response_model=List[ResourceUtilizationOut])
def list_utilization(
    resource_id: Optional[int] = None,
    project_id: Optional[int] = None,
    skip: int = 0,
    limit: int = 100,
    db: Session = Depends(get_db),
):
    return crud.get_utilization_records(db, resource_id, project_id, skip, limit)


@router.get("/summary/{resource_id}", response_model=UtilizationSummaryOut)
def utilization_summary(resource_id: int, db: Session = Depends(get_db)):
    return crud.get_utilization_summary(db, resource_id)
