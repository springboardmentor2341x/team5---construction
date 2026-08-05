"""add updated_at to users

Revision ID: a17571915cd0
Revises: "d1225009f9cb"
Create Date: 2026-08-02 14:32:51.808868

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'a17571915cd0'
down_revision: Union[str, Sequence[str], None] = '52a2027e191a'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None

def upgrade():
    op.add_column(
        "users",
        sa.Column(
            "updated_at",
            sa.DateTime(),
            nullable=True
        )
    )

def downgrade():
    op.drop_column("users", "updated_at")
