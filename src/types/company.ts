// ============================================
// COMPANY ENUMS
// ============================================
export type CompanyType =
  | "Developer"
  | "Contractor"
  | "EPC"
  | "Infrastructure"
  | "Consultancy"

export type CompanySize =
  | "1-50"
  | "51-200"
  | "201-500"
  | "501-1000"
  | "1000-5000"
  | "5000+"

// ============================================
// COMPANY SUB-ENTITIES
// ============================================
export interface CompanyHeadquarters {
  city: string
  state: string
  country: string
  address?: string
  pincode?: string
}

export interface CompanyBranch {
  city: string
  state: string
  address?: string
  phone?: string
  email?: string
}

export interface CompanySocials {
  linkedin?: string
  twitter?: string
  facebook?: string
  instagram?: string
  youtube?: string
}

export interface CompanyContact {
  email: string
  phone: string
  alternatePhone?: string
  hrEmail?: string
}

// ============================================
// MAIN COMPANY ENTITY
// ============================================
export interface Company {
  id: string
  name: string
  slug: string
  logo: string
  coverImage?: string
  tagline: string
  about: string
  industry: string[] // INDUSTRIES slug
  companyType: CompanyType
  size: CompanySize
  founded: number
  headquarters: CompanyHeadquarters
  branches?: CompanyBranch[]
  website?: string
  email: string
  phone: string
  socials?: CompanySocials
  specialties: string[]
  certifications?: string[]
  awards?: string[]
  activeJobs: number
  activeProjects: number
  totalHires: number
  rating: number
  reviewCount: number
  followers: number
  verified: boolean
  featured?: boolean
  premium?: boolean
  joinedDate: string
}

// ============================================
// COMPANY DASHBOARD DATA
// ============================================
export interface CompanyDashboardStats {
  activeJobPosts: number
  totalApplicants: number
  shortlisted: number
  hiredThisMonth: number
  scheduledInterviews: number
  activeProjects: number
  totalProjectBids: number
  profileViews: number
  unreadMessages: number
}

export interface CompanyHiringFunnel {
  applied: number
  underReview: number
  shortlisted: number
  interviewed: number
  offered: number
  hired: number
  rejected: number
}

export interface CompanyAnalytics {
  monthlyApplications: { month: string; count: number }[]
  monthlyHires: { month: string; count: number }[]
  topJobCategories: { category: string; count: number }[]
  applicantSources: { source: string; percentage: number }[]
  averageTimeToHire: number // days
  hiringFunnel: CompanyHiringFunnel
}

// ============================================
// COMPANY FILTERS
// ============================================
export interface CompanyFilters {
  query?: string
  companyTypes?: CompanyType[]
  industries?: string[]
  sizes?: CompanySize[]
  cities?: string[]
  states?: string[]
  verified?: boolean
  premium?: boolean
  minRating?: number
  sortBy?: "relevance" | "rating" | "followers" | "active-jobs" | "latest"
  page?: number
  pageSize?: number
}

// ============================================
// COMPANY REVIEW
// ============================================
export interface CompanyReview {
  id: string
  companyId: string
  reviewerId: string
  reviewerName: string
  reviewerRole?: string // worker / contractor
  reviewerAvatar?: string
  rating: number // 1-5
  title: string
  pros: string
  cons: string
  workEnvironmentRating?: number
  payRating?: number
  managementRating?: number
  growthRating?: number
  wouldRecommend: boolean
  workedDuration?: string
  currentEmployee?: boolean
  createdAt: string
  helpful: number
}

// ============================================
// COMPANY VERIFICATION DOCUMENT
// ============================================
export interface CompanyVerificationDoc {
  type:
    | "company-registration"
    | "gst"
    | "pan"
    | "tan"
    | "msme"
    | "iso-certificate"
    | "license"
  documentNumber?: string
  documentUrl: string
  uploadedAt: string
  verified: boolean
}

// ============================================
// COMPANY SUBSCRIPTION FEATURES
// ============================================
export interface CompanyPlanFeatures {
  plan: "free" | "basic" | "premium" | "enterprise"
  maxActiveJobs: number
  maxApplicantsPerMonth: number
  resumeDatabaseAccess: boolean
  advancedFilters: boolean
  prioritySupport: boolean
  brandedJobPosts: boolean
  analyticsAccess: boolean
  interviewScheduling: boolean
  bulkMessaging: boolean
  apiAccess: boolean
}

// ============================================
// JOB POSTING FORM DATA
// ============================================
export interface JobPostingFormData {
  title: string
  category: string
  jobType: string
  experienceLevel: string
  description: string
  responsibilities: string[]
  requirements: string[]
  skills: string[]
  benefits?: string[]
  location: {
    city: string
    state: string
    onSite: boolean
  }
  salary: {
    min: number
    max: number
    period: string
    currency: "INR"
    negotiable: boolean
  }
  openings: number
  deadline?: string
  urgent: boolean
}

// ============================================
// PROJECT POSTING FORM DATA
// ============================================
export interface ProjectPostingFormData {
  title: string
  projectType: string
  description: string
  scope: string[]
  location: {
    city: string
    state: string
    address?: string
  }
  budget: {
    min: number
    max: number
    type: "fixed" | "range" | "negotiable"
  }
  timeline: {
    startDate: string
    endDate: string
  }
  workforceNeeded: {
    totalWorkers: number
    categories: { category: string; count: number }[]
  }
  deadline?: string
  attachments?: File[]
}