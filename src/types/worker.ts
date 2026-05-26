import type { ExperienceLevel } from "./job"

// ============================================
// WORKER COMMON TYPES
// ============================================
export type AvailabilityStatus =
  | "Available Now"
  | "Available in 15 days"
  | "Available in 30 days"
  | "Not Available"

export type SalaryPeriod = "monthly" | "daily" | "hourly"

// ============================================
// WORKER PROFILE SECTIONS
// ============================================
export interface WorkerLocation {
  city: string
  state: string
  willingToRelocate: boolean
  preferredCities?: string[]
}

export interface WorkerExperience {
  years: number
  level: ExperienceLevel
}

export interface WorkerSalary {
  min: number
  max: number
  period: SalaryPeriod
  currency: "INR"
  negotiable: boolean
}

export interface WorkerCertification {
  id?: string
  name: string
  issuer: string
  year: number
  expiryYear?: number
  certificateUrl?: string
  verified: boolean
}

export interface WorkerEducation {
  id?: string
  degree: string
  specialization?: string
  institute: string
  startYear?: number
  endYear: number
  percentage?: number
  cgpa?: number
}

export interface WorkerWorkHistory {
  id?: string
  role: string
  company: string
  startDate?: string // ISO
  endDate?: string // ISO ("Present" if current)
  duration: string // pre-formatted, e.g., "2022 - Present"
  current?: boolean
  description?: string
  projectType?: string
  location?: string
}

export interface WorkerPortfolioItem {
  id?: string
  title: string
  description: string
  image: string
  projectType?: string
  year?: number
  location?: string
  role?: string
}

// ============================================
// MAIN WORKER ENTITY
// ============================================
export interface Worker {
  id: string
  name: string
  slug: string
  avatar: string
  coverImage?: string
  headline: string
  primaryCategory: string // WORKER_CATEGORIES slug
  secondaryCategories?: string[]
  experience: WorkerExperience
  location: WorkerLocation
  availability: AvailabilityStatus
  expectedSalary: WorkerSalary
  skills: string[]
  languages: string[]
  about: string
  certifications: WorkerCertification[]
  education?: WorkerEducation[]
  workHistory: WorkerWorkHistory[]
  portfolio?: WorkerPortfolioItem[]
  rating: number // 1-5
  reviewCount: number
  jobsCompleted: number
  profileViews: number
  profileCompletion: number
  verified: boolean
  topRated?: boolean
  featured?: boolean
  joinedDate: string
}

// ============================================
// WORKER FILTERS (search/listing)
// ============================================
export interface WorkerFilters {
  query?: string
  categories?: string[]
  experienceLevels?: ExperienceLevel[]
  experienceMin?: number // years
  experienceMax?: number
  cities?: string[]
  states?: string[]
  availability?: AvailabilityStatus[]
  salaryMin?: number
  salaryMax?: number
  salaryPeriod?: SalaryPeriod
  willingToRelocate?: boolean
  skills?: string[]
  languages?: string[]
  verified?: boolean
  topRated?: boolean
  minRating?: number
  sortBy?: "relevance" | "rating" | "experience" | "latest" | "salary-low" | "salary-high"
  page?: number
  pageSize?: number
}

// ============================================
// WORKER STATS (dashboard widgets)
// ============================================
export interface WorkerDashboardData {
  activeApplications: number
  profileViews: number
  jobsMatched: number
  projectsCompleted: number
  averageRating: number
  totalEarnings?: number
  pendingInterviews: number
  unreadMessages: number
}

// ============================================
// WORKER REVIEW
// ============================================
export interface WorkerReview {
  id: string
  workerId: string
  reviewerId: string
  reviewerName: string
  reviewerCompany?: string
  reviewerAvatar?: string
  projectTitle?: string
  rating: number // 1-5
  comment: string
  punctualityRating?: number
  qualityRating?: number
  communicationRating?: number
  createdAt: string
  helpful: number
}

// ============================================
// WORKER MATCH (recommended jobs for worker)
// ============================================
export interface WorkerJobMatch {
  jobId: string
  matchScore: number // 0-100
  matchReasons: string[]
  category: string
}