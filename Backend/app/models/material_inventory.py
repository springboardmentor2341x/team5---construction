

import enum

from sqlalchemy import (
    Column,
    Integer,
    String,
    Text,
    Numeric,
    Date,
    DateTime,
    ForeignKey,
    CheckConstraint,
    UniqueConstraint,
    Enum as SAEnum,
    func,
)
from sqlalchemy.orm import relationship

from database import Base


# ============================================================
# ENUMS
# ============================================================

class MaterialRequestStatus(str, enum.Enum):
    PENDING = "PENDING"
    APPROVED = "APPROVED"
    REJECTED = "REJECTED"
    FULFILLED = "FULFILLED"
    CANCELLED = "CANCELLED"


class MaterialAllocationStatus(str, enum.Enum):
    ALLOCATED = "ALLOCATED"
    CONSUMED = "CONSUMED"
    RETURNED = "RETURNED"


class StockMovementType(str, enum.Enum):
    RECEIVED = "RECEIVED"
    ALLOCATED = "ALLOCATED"
    CONSUMED = "CONSUMED"
    RETURNED = "RETURNED"
    ADJUSTMENT = "ADJUSTMENT"


# ============================================================
# MATERIAL CATEGORIES
# ============================================================

class MaterialCategory(Base):
    __tablename__ = "materialcategories"

    category_id = Column(Integer, primary_key=True, index=True)
    category_name = Column(String(100), nullable=False, unique=True)
    description = Column(Text, nullable=True)
    created_at = Column(DateTime, server_default=func.now(), nullable=False)
    updated_at = Column(DateTime, server_default=func.now(), onupdate=func.now(), nullable=False)

    materials = relationship("Material", back_populates="category")


# ---- ADD TO EXISTING Material MODEL ----
# category_id = Column(Integer, ForeignKey("materialcategories.category_id"), nullable=True)
# category = relationship("MaterialCategory", back_populates="materials")


# ============================================================
# INVENTORY
# ============================================================

class Inventory(Base):
    __tablename__ = "inventory"
    __table_args__ = (
        UniqueConstraint("material_id", name="uq_inventory_material"),
        CheckConstraint("current_stock >= 0", name="ck_current_stock_non_negative"),
        CheckConstraint("allocated_stock >= 0", name="ck_allocated_stock_non_negative"),
    )

    inventory_id = Column(Integer, primary_key=True, index=True)
    material_id = Column(Integer, ForeignKey("materials.material_id", ondelete="CASCADE"), nullable=False)
    current_stock = Column(Numeric(12, 2), nullable=False, default=0)
    allocated_stock = Column(Numeric(12, 2), nullable=False, default=0)
    minimum_stock_level = Column(Numeric(12, 2), nullable=False, default=0)
    location = Column(String(200), nullable=True)
    last_updated = Column(DateTime, server_default=func.now(), nullable=False)
    created_at = Column(DateTime, server_default=func.now(), nullable=False)
    updated_at = Column(DateTime, server_default=func.now(), onupdate=func.now(), nullable=False)

    material = relationship("Material", backref="inventory_record", uselist=False)

    @property
    def available_stock(self):
        """Stock that is not yet committed to any project."""
        return (self.current_stock or 0) - (self.allocated_stock or 0)

    @property
    def is_low_stock(self):
        return (self.current_stock or 0) <= (self.minimum_stock_level or 0)


# ============================================================
# MATERIAL REQUESTS
# ============================================================

class MaterialRequest(Base):
    __tablename__ = "materialrequests"
    __table_args__ = (
        CheckConstraint("requested_quantity > 0", name="ck_requested_quantity_positive"),
    )

    request_id = Column(Integer, primary_key=True, index=True)
    project_id = Column(Integer, ForeignKey("projects.project_id", ondelete="CASCADE"), nullable=False)
    material_id = Column(Integer, ForeignKey("materials.material_id"), nullable=False)
    requested_by_user_id = Column(Integer, ForeignKey("users.user_id"), nullable=False)
    requested_quantity = Column(Numeric(12, 2), nullable=False)
    required_date = Column(Date, nullable=False)
    purpose = Column(Text, nullable=True)
    status = Column(SAEnum(MaterialRequestStatus, name="materialrequeststatus"),
                     nullable=False, default=MaterialRequestStatus.PENDING)
    remarks = Column(Text, nullable=True)
    created_at = Column(DateTime, server_default=func.now(), nullable=False)
    updated_at = Column(DateTime, server_default=func.now(), onupdate=func.now(), nullable=False)

    project = relationship("Project", backref="material_requests")
    material = relationship("Material", backref="requests")
    requested_by = relationship("User", foreign_keys=[requested_by_user_id])
    allocations = relationship("MaterialAllocation", back_populates="request")


# ============================================================
# MATERIAL ALLOCATIONS
# ============================================================

class MaterialAllocation(Base):
    __tablename__ = "materialallocations"
    __table_args__ = (
        CheckConstraint("quantity_allocated > 0", name="ck_quantity_allocated_positive"),
    )

    allocation_id = Column(Integer, primary_key=True, index=True)
    project_id = Column(Integer, ForeignKey("projects.project_id", ondelete="CASCADE"), nullable=False)
    material_id = Column(Integer, ForeignKey("materials.material_id"), nullable=False)
    request_id = Column(Integer, ForeignKey("materialrequests.request_id"), nullable=True)
    quantity_allocated = Column(Numeric(12, 2), nullable=False)
    allocation_date = Column(Date, nullable=False)
    work_activity = Column(String(150), nullable=True)
    responsible_user_id = Column(Integer, ForeignKey("users.user_id"), nullable=False)
    status = Column(SAEnum(MaterialAllocationStatus, name="materialallocationstatus"),
                     nullable=False, default=MaterialAllocationStatus.ALLOCATED)
    remarks = Column(Text, nullable=True)
    created_at = Column(DateTime, server_default=func.now(), nullable=False)
    updated_at = Column(DateTime, server_default=func.now(), onupdate=func.now(), nullable=False)

    project = relationship("Project", backref="material_allocations")
    material = relationship("Material", backref="allocations")
    request = relationship("MaterialRequest", back_populates="allocations")
    responsible_user = relationship("User", foreign_keys=[responsible_user_id])


# ============================================================
# STOCK MOVEMENTS
# ============================================================

class StockMovement(Base):
    __tablename__ = "stockmovements"
    __table_args__ = (
        CheckConstraint("quantity > 0", name="ck_movement_quantity_positive"),
    )

    movement_id = Column(Integer, primary_key=True, index=True)
    material_id = Column(Integer, ForeignKey("materials.material_id"), nullable=False)
    movement_type = Column(SAEnum(StockMovementType, name="stockmovementtype"), nullable=False)
    quantity = Column(Numeric(12, 2), nullable=False)
    reference_type = Column(String(50), nullable=True)
    reference_id = Column(Integer, nullable=True)
    movement_date = Column(Date, nullable=False)
    performed_by_user_id = Column(Integer, ForeignKey("users.user_id"), nullable=False)
    remarks = Column(Text, nullable=True)
    created_at = Column(DateTime, server_default=func.now(), nullable=False)

    material = relationship("Material", backref="stock_movements")
    performed_by = relationship("User", foreign_keys=[performed_by_user_id])