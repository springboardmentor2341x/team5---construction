from enum import Enum


class ProjectCategory(str, Enum):
    BUILDING = "Building"
    ROAD = "Road"
    BRIDGE = "Bridge"
    DAM = "Dam"
    INDUSTRIAL = "Industrial"


class ProjectPriority(str, Enum):
    LOW = "Low"
    MEDIUM = "Medium"
    HIGH = "High"
    CRITICAL = "Critical"


class ProjectStatus(str, Enum):
    PLANNING = "Planning"
    IN_PROGRESS = "In Progress"
    ON_HOLD = "On Hold"
    COMPLETED = "Completed"
    CANCELLED = "Cancelled"


class MilestoneStatus(str, Enum):
    NOT_STARTED = "Not Started"
    IN_PROGRESS = "In Progress"
    COMPLETED = "Completed"
    DELAYED = "Delayed"


class WorkerStatus(str, Enum):
    ACTIVE = "Active"
    INACTIVE = "Inactive"


class AssignmentStatus(str, Enum):
    ACTIVE = "Active"
    COMPLETED = "Completed"
    REMOVED = "Removed"