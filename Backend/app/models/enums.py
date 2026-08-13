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
class ActivityTypeEnum(str, Enum):
    CLIENT_VISIT = "CLIENT_VISIT"
    SAFETY_TRAINING = "SAFETY_TRAINING"
    MACHINERY_MAINTENANCE = "MACHINERY_MAINTENANCE"
    MATERIAL_DELIVERY = "MATERIAL_DELIVERY"
    GOVERNMENT_INSPECTION = "GOVERNMENT_INSPECTION"
    QUALITY_AUDIT = "QUALITY_AUDIT"
    ACCIDENT = "ACCIDENT"
    CONTRACTOR_MEETING = "CONTRACTOR_MEETING"
    EQUIPMENT_SERVICING = "EQUIPMENT_SERVICING"
    OTHER = "OTHER"


class AttendanceStatusEnum(str, Enum):
    PRESENT = "PRESENT"
    ABSENT = "ABSENT"
    LEAVE = "LEAVE"
    HALF_DAY = "HALF_DAY"


class DelayReasonEnum(str, Enum):
    RAIN = "RAIN"
    LABOUR_SHORTAGE = "LABOUR_SHORTAGE"
    MATERIAL_DELAY = "MATERIAL_DELAY"
    MACHINERY_BREAKDOWN = "MACHINERY_BREAKDOWN"
    FINANCIAL = "FINANCIAL"
    DESIGN_CHANGE = "DESIGN_CHANGE"
    GOVERNMENT_APPROVAL = "GOVERNMENT_APPROVAL"
    OTHER = "OTHER"


class MachineStatusEnum(str, Enum):
    ACTIVE = "ACTIVE"
    INACTIVE = "INACTIVE"
    UNDER_MAINTENANCE = "UNDER_MAINTENANCE"
    OUT_OF_SERVICE = "OUT_OF_SERVICE"


class MachineTypeEnum(str, Enum):
    EARTHMOVING = "EARTHMOVING"
    CONCRETE_EQUIPMENT = "CONCRETE_EQUIPMENT"
    LIFTING_EQUIPMENT = "LIFTING_EQUIPMENT"
    TRANSPORT = "TRANSPORT"
    COMPACTION = "COMPACTION"
    DRILLING = "DRILLING"
    OTHER = "OTHER"


class MaterialStatusEnum(str, Enum):
    ACTIVE = "ACTIVE"
    INACTIVE = "INACTIVE"


class MaterialUnitEnum(str, Enum):
    BAG = "BAG"
    KG = "KG"
    TON = "TON"
    PIECE = "PIECE"
    LITER = "LITER"
    CUBIC_METER = "CUBIC_METER"
    METER = "METER"
    BOX = "BOX"
    OTHER = "OTHER"


class WeatherConditionEnum(str, Enum):
    SUNNY = "SUNNY"
    CLOUDY = "CLOUDY"
    RAINY = "RAINY"
    STORM = "STORM"
    FOGGY = "FOGGY"
    WINDY = "WINDY"
    OTHER = "OTHER"    