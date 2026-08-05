from sqlalchemy import Column, Integer, String, Date, Numeric, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func

from database import Base


class Worker(Base):
    __tablename__ = "workers"

    worker_id = Column(Integer, primary_key=True, index=True)

    user_id = Column(Integer, ForeignKey("users.user_id"), nullable=True)

    worker_code = Column(String(50), unique=True, nullable=True)
    full_name = Column(String(200), nullable=True)
    mobile = Column(String(15), nullable=True)
    email = Column(String(200), nullable=True)

    category = Column(String(30), nullable=True)
    skill = Column(String(100), nullable=False)
    experience_years = Column(Integer, nullable=True)

    daily_wage = Column(Numeric(10, 2), nullable=True)

    joining_date = Column(Date, nullable=False)

    status = Column(String(50), nullable=True)
    employment_status = Column(String(20), nullable=True)

    address = Column(String, nullable=True)

    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())

    user = relationship("User")

    projects = relationship(
        "ProjectWorker",
        back_populates="worker",
        cascade="all, delete-orphan"
    )