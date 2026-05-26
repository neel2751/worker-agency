// ============================================
// COMPANY & CONTACT INFO
// ============================================
export const COMPANY_NAME = "BuildForce"
export const CONTACT_EMAIL = "hello@buildforce.com"
export const SUPPORT_EMAIL = "support@buildforce.com"
export const CAREERS_EMAIL = "careers@buildforce.com"
export const PHONE = "+91 80000 00000"

// ============================================
// OFFICE LOCATIONS
// ============================================
export const OFFICES = [
  {
    city: "Ahmedabad",
    address: "Tech Park, Bopal",
    state: "Gujarat 380058",
    country: "India",
  },
  {
    city: "Mumbai",
    address: "Bandra Kurla Complex",
    state: "Maharashtra 400051",
    country: "India",
  },
  {
    city: "Bengaluru",
    address: "Whitefield Tech Park",
    state: "Karnataka 560066",
    country: "India",
  },
]

export const LOCATIONS = OFFICES

// ============================================
// SOCIAL LINKS
// ============================================
export const SOCIAL_LINKS = {
  linkedin: "https://linkedin.com/company/buildforce",
  twitter: "https://twitter.com/buildforce",
  facebook: "https://facebook.com/buildforce",
  instagram: "https://instagram.com/buildforce",
  youtube: "https://youtube.com/@buildforce",
}

// ============================================
// USER ROLES
// ============================================
export const USER_ROLES = {
  STUDENT: "student",
  WORKER: "worker",
  COMPANY: "company",
  ADMIN: "admin",
} as const

export type UserRole = (typeof USER_ROLES)[keyof typeof USER_ROLES]

export const ROLE_LABELS: Record<UserRole, string> = {
  student: "Student",
  worker: "Worker / Employee",
  company: "Construction Company",
  admin: "Administrator",
}

// ============================================
// WORKER CATEGORIES (Construction Trades)
// ============================================
export const WORKER_CATEGORIES = [
  "Mason",
  "Electrician",
  "Plumber",
  "Carpenter",
  "Welder",
  "Painter",
  "Steel Fixer",
  "Tile Layer",
  "Crane Operator",
  "Heavy Equipment Operator",
  "Site Supervisor",
  "Civil Engineer",
  "Site Engineer",
  "Safety Officer",
  "Surveyor",
  "Architect",
  "Foreman",
  "Helper / Labourer",
  "HVAC Technician",
  "Glass Installer",
  "Roofing Specialist",
  "Excavator Operator",
] as const

// ============================================
// JOB TYPES
// ============================================
export const JOB_TYPES = {
  FULL_TIME: "Full-time",
  PART_TIME: "Part-time",
  CONTRACT: "Contract",
  DAILY_WAGE: "Daily Wage",
  PROJECT_BASED: "Project-based",
  INTERNSHIP: "Internship",
  APPRENTICESHIP: "Apprenticeship",
} as const

export const JOB_TYPE_LIST = Object.values(JOB_TYPES)

// ============================================
// EXPERIENCE LEVELS
// ============================================
export const EXPERIENCE_LEVELS = [
  "Fresher (0 years)",
  "Entry Level (0-2 years)",
  "Mid Level (2-5 years)",
  "Senior Level (5-10 years)",
  "Expert (10+ years)",
] as const

// ============================================
// PROJECT TYPES
// ============================================
export const PROJECT_TYPES = [
  "Residential Building",
  "Commercial Building",
  "Industrial Construction",
  "Road & Highway",
  "Bridge Construction",
  "Metro / Railway",
  "Airport / Port",
  "Renovation",
  "Interior Fit-out",
  "Solar / Renewable Energy",
  "Water & Sewage",
  "Smart City Infrastructure",
] as const

// ============================================
// APPLICATION STATUS
// ============================================
export const APPLICATION_STATUS = {
  PENDING: "Pending",
  REVIEWING: "Under Review",
  SHORTLISTED: "Shortlisted",
  INTERVIEW: "Interview Scheduled",
  OFFERED: "Offered",
  HIRED: "Hired",
  REJECTED: "Rejected",
  WITHDRAWN: "Withdrawn",
} as const

// ============================================
// PROJECT STATUS
// ============================================
export const PROJECT_STATUS = {
  OPEN_FOR_BIDS: "Open for Bids",
  IN_PROGRESS: "In Progress",
  ON_HOLD: "On Hold",
  COMPLETED: "Completed",
  CANCELLED: "Cancelled",
} as const

// ============================================
// AVAILABILITY STATUS
// ============================================
export const AVAILABILITY_STATUS = {
  AVAILABLE: "Available Now",
  WITHIN_15_DAYS: "Available in 15 days",
  WITHIN_30_DAYS: "Available in 30 days",
  NOT_AVAILABLE: "Not Available",
} as const

// ============================================
// SALARY RANGES (INR Monthly)
// ============================================
export const SALARY_RANGES = [
  { label: "Below ₹15,000", min: 0, max: 15000 },
  { label: "₹15,000 - ₹25,000", min: 15000, max: 25000 },
  { label: "₹25,000 - ₹40,000", min: 25000, max: 40000 },
  { label: "₹40,000 - ₹60,000", min: 40000, max: 60000 },
  { label: "₹60,000 - ₹1,00,000", min: 60000, max: 100000 },
  { label: "Above ₹1,00,000", min: 100000, max: Infinity },
]

// ============================================
// INDIAN STATES (Most active construction states)
// ============================================
export const INDIAN_STATES = [
  "Andhra Pradesh",
  "Bihar",
  "Delhi",
  "Goa",
  "Gujarat",
  "Haryana",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Tamil Nadu",
  "Telangana",
  "Uttar Pradesh",
  "West Bengal",
] as const

// ============================================
// PAGINATION
// ============================================
export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 12,
  JOBS_PAGE_SIZE: 10,
  PROJECTS_PAGE_SIZE: 9,
  WORKERS_PAGE_SIZE: 12,
} as const

// ============================================
// FILE UPLOAD LIMITS
// ============================================
export const UPLOAD_LIMITS = {
  RESUME_MAX_SIZE_MB: 5,
  IMAGE_MAX_SIZE_MB: 2,
  CERTIFICATE_MAX_SIZE_MB: 5,
  PORTFOLIO_MAX_SIZE_MB: 10,
  ALLOWED_RESUME_TYPES: [".pdf", ".doc", ".docx"],
  ALLOWED_IMAGE_TYPES: [".jpg", ".jpeg", ".png", ".webp"],
} as const

// ============================================
// PLATFORM STATS (for marketing display)
// ============================================
export const PLATFORM_STATS = {
  TOTAL_WORKERS: "50,000+",
  TOTAL_COMPANIES: "2,500+",
  TOTAL_JOBS: "15,000+",
  TOTAL_PROJECTS: "8,000+",
  CITIES_COVERED: "150+",
  SUCCESS_RATE: "94%",
} as const