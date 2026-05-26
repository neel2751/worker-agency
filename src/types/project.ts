// ============================================
// PROJECT STATUS & TYPES
// ============================================
export type ProjectStatus =
  | "Open for Bids"
  | "In Progress"
  | "On Hold"
  | "Completed"
  | "Cancelled"

export type ProjectPostedByType = "company" | "contractor" | "individual"

export type BudgetType = "fixed" | "range" | "negotiable"

// ============================================
// PROJECT ENTITIES
// ============================================
export interface ProjectLocation {
  city: string
  state: string
  address?: string
  pincode?: string
}

export interface ProjectBudget {
  min: number
  max: number
  currency: "INR"
  type: BudgetType
}

export interface ProjectTimeline {
  startDate: string // ISO
  endDate: string // ISO
  durationMonths: number
}

export interface ProjectWorkforceNeed {
  totalWorkers: number
  categories: { category: string; count: number }[] // WORKER_CATEGORIES slug
}

export interface ProjectPostedBy {
  id: string
  name: string
  logo: string
  type: ProjectPostedByType
  verified: boolean
}

export interface ProjectAttachment {
  name: string
  type: "pdf" | "image" | "doc"
  size: string
  url?: string
}

export interface Project {
  id: string
  title: string
  slug: string
  postedBy: ProjectPostedBy
  projectType: string // INDUSTRIES slug
  description: string
  scope: string[]
  location: ProjectLocation
  budget: ProjectBudget
  timeline: ProjectTimeline
  workforceNeeded: ProjectWorkforceNeed
  status: ProjectStatus
  bids: number
  views: number
  postedDate: string
  deadline?: string
  featured?: boolean
  urgent?: boolean
  verified: boolean
  attachments?: ProjectAttachment[]
  images?: string[]
}

// ============================================
// BIDS
// ============================================
export type BidStatus =
  | "Submitted"
  | "Under Review"
  | "Shortlisted"
  | "Accepted"
  | "Rejected"
  | "Withdrawn"

export interface ProjectBid {
  id: string
  projectId: string
  projectTitle: string
  bidderId: string
  bidderName: string
  bidderLogo?: string
  bidderType: ProjectPostedByType
  bidderVerified: boolean
  bidAmount: number
  currency: "INR"
  proposedDuration: number // months
  proposedStartDate: string
  proposal: string
  highlights: string[] // key selling points
  attachments?: ProjectAttachment[]
  status: BidStatus
  submittedAt: string
  updatedAt: string
  feedback?: string
  rank?: number // ranking among other bids
}

// ============================================
// PROJECT APPLICATION (for workers applying directly)
// ============================================
export interface ProjectApplication {
  id: string
  projectId: string
  projectTitle: string
  workerId: string
  workerName: string
  workerCategory: string
  workerExperience: number // years
  expectedDailyRate?: number
  expectedMonthlyRate?: number
  availableFrom: string
  message?: string
  status:
    | "Pending"
    | "Shortlisted"
    | "Hired"
    | "Rejected"
    | "Withdrawn"
  appliedAt: string
  updatedAt: string
}

// ============================================
// PROJECT TRACKING (for ongoing projects)
// ============================================
export type MilestoneStatus =
  | "pending"
  | "in-progress"
  | "completed"
  | "delayed"
  | "blocked"

export interface ProjectMilestone {
  id: string
  projectId: string
  title: string
  description?: string
  plannedStartDate: string
  plannedEndDate: string
  actualStartDate?: string
  actualEndDate?: string
  progress: number // percentage 0-100
  status: MilestoneStatus
  assignedTeam?: string[]
}

export interface ProjectUpdate {
  id: string
  projectId: string
  title: string
  description: string
  postedBy: string
  postedByName: string
  postedAt: string
  attachments?: ProjectAttachment[]
  type: "progress" | "issue" | "announcement" | "completion"
}

// ============================================
// PROJECT FILTERS
// ============================================
export interface ProjectFilters {
  query?: string
  projectTypes?: string[]
  statuses?: ProjectStatus[]
  cities?: string[]
  states?: string[]
  budgetMin?: number
  budgetMax?: number
  durationMin?: number // months
  durationMax?: number
  postedWithin?: "24h" | "7d" | "15d" | "30d"
  verified?: boolean
  featured?: boolean
  sortBy?: "latest" | "budget-high" | "budget-low" | "deadline" | "popular"
  page?: number
  pageSize?: number
}

// ============================================
// PROJECT MATCH SUGGESTIONS
// ============================================
export interface ProjectMatch {
  projectId: string
  matchScore: number // 0-100
  matchReasons: string[]
  category: string
}