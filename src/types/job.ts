// ============================================
// JOB TYPE DEFINITIONS
// ============================================
export type JobType =
  | "Full-time"
  | "Part-time"
  | "Contract"
  | "Daily Wage"
  | "Project-based"
  | "Internship"
  | "Apprenticeship"

export type ExperienceLevel =
  | "Fresher"
  | "Entry Level"
  | "Mid Level"
  | "Senior Level"
  | "Expert"

export type SalaryPeriod = "monthly" | "daily" | "hourly" | "project"

export type JobStatus = "active" | "closed" | "paused" | "draft"

// ============================================
// JOB ENTITIES
// ============================================
export interface JobLocation {
  city: string
  state: string
  isRemote?: boolean
  onSite: boolean
  address?: string
}

export interface JobSalary {
  min: number
  max: number
  period: SalaryPeriod
  currency: "INR"
  negotiable?: boolean
  hideFromPublic?: boolean
}

export interface Job {
  id: string
  title: string
  slug: string
  companyId: string
  companyName: string
  companyLogo: string
  category: string // WORKER_CATEGORIES slug
  jobType: JobType
  experienceLevel: ExperienceLevel
  location: JobLocation
  salary: JobSalary
  description: string
  responsibilities: string[]
  requirements: string[]
  skills: string[]
  benefits?: string[]
  openings: number
  applicants: number
  views: number
  postedDate: string // ISO
  deadline?: string
  urgent?: boolean
  featured?: boolean
  verified: boolean
  status: JobStatus
}

// ============================================
// JOB APPLICATION
// ============================================
export type ApplicationStatus =
  | "Pending"
  | "Under Review"
  | "Shortlisted"
  | "Interview Scheduled"
  | "Offered"
  | "Hired"
  | "Rejected"
  | "Withdrawn"

export interface JobApplication {
  id: string
  jobId: string
  jobTitle: string
  companyId: string
  companyName: string
  companyLogo: string
  applicantId: string
  applicantName: string
  applicantAvatar?: string
  applicantHeadline?: string
  resumeUrl?: string
  coverLetter?: string
  expectedSalary?: number
  availableFrom?: string
  status: ApplicationStatus
  appliedAt: string
  updatedAt: string
  interviewDate?: string
  interviewMode?: "in-person" | "video" | "phone"
  interviewLocation?: string
  interviewLink?: string
  notes?: string
  rejectionReason?: string
}

// ============================================
// SAVED JOBS
// ============================================
export interface SavedJob {
  id: string
  userId: string
  jobId: string
  savedAt: string
  note?: string
}

// ============================================
// JOB FILTERS (used by search/listing pages)
// ============================================
export interface JobFilters {
  query?: string
  categories?: string[]
  jobTypes?: JobType[]
  experienceLevels?: ExperienceLevel[]
  cities?: string[]
  states?: string[]
  salaryMin?: number
  salaryMax?: number
  salaryPeriod?: SalaryPeriod
  postedWithin?: "24h" | "3d" | "7d" | "15d" | "30d"
  urgent?: boolean
  featured?: boolean
  verified?: boolean
  sortBy?: "latest" | "salary-high" | "salary-low" | "relevance" | "popular"
  page?: number
  pageSize?: number
}

// ============================================
// JOB ALERT (saved search)
// ============================================
export interface JobAlert {
  id: string
  userId: string
  name: string
  filters: JobFilters
  frequency: "instant" | "daily" | "weekly"
  active: boolean
  createdAt: string
  lastSentAt?: string
}

// ============================================
// INTERVIEW
// ============================================
export interface Interview {
  id: string
  applicationId: string
  jobId: string
  jobTitle: string
  companyId: string
  companyName: string
  applicantId: string
  applicantName: string
  scheduledAt: string // ISO datetime
  durationMinutes: number
  mode: "in-person" | "video" | "phone"
  location?: string // for in-person
  meetingLink?: string // for video
  interviewerName?: string
  interviewerRole?: string
  notes?: string
  status: "scheduled" | "completed" | "cancelled" | "no-show" | "rescheduled"
  outcome?: "selected" | "rejected" | "on-hold" | "pending"
  feedback?: string
}