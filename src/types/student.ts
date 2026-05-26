// ============================================
// STUDENT ENUMS
// ============================================
export type EducationStatus = "Pursuing" | "Completed"

export type StudentLookingFor =
  | "Internship"
  | "Full-time"
  | "Part-time"
  | "Apprenticeship"

export type StudentDegree =
  | "B.Tech"
  | "B.E."
  | "M.Tech"
  | "M.E."
  | "B.Arch"
  | "M.Arch"
  | "Diploma"
  | "ITI"
  | "Certificate"
  | "MBA"
  | "Other"

// ============================================
// STUDENT SUB-ENTITIES
// ============================================
export interface StudentLocation {
  city: string
  state: string
  willingToRelocate: boolean
}

export interface StudentEducation {
  degree: string
  specialization: string
  institute: string
  universityBoard?: string
  startYear: number
  endYear: number
  currentYear: number
  cgpa?: number
  percentage?: number
  status: EducationStatus
}

export interface StudentPreviousEducation {
  qualification: string
  institute: string
  year: number
  percentage?: number
}

export interface StudentCertification {
  id?: string
  name: string
  issuer: string
  year: number
  certificateUrl?: string
  verified: boolean
}

export interface StudentInternship {
  id?: string
  role: string
  company: string
  startDate?: string
  endDate?: string
  duration: string
  description?: string
  certificate?: boolean
  certificateUrl?: string
}

export interface StudentProject {
  id?: string
  title: string
  description: string
  technologies?: string[]
  year: number
  link?: string
}

export interface StudentStipend {
  min: number
  max: number
  period: "monthly"
  currency: "INR"
}

// ============================================
// MAIN STUDENT ENTITY
// ============================================
export interface Student {
  id: string
  name: string
  slug: string
  avatar: string
  headline: string
  email: string
  phone: string
  location: StudentLocation
  education: StudentEducation
  previousEducation?: StudentPreviousEducation[]
  skills: string[]
  technicalSkills: string[]
  languages: string[]
  about: string
  certifications: StudentCertification[]
  internships?: StudentInternship[]
  projects?: StudentProject[]
  achievements?: string[]
  interests: string[] // WORKER_CATEGORIES slugs
  lookingFor: StudentLookingFor[]
  availableFrom: string
  expectedStipend?: StudentStipend
  expectedSalary?: StudentStipend
  applicationsCount: number
  savedJobsCount: number
  placementsCount: number
  profileViews: number
  profileCompletion: number
  resumeUploaded: boolean
  verified: boolean
  featured?: boolean
  joinedDate: string
}

// ============================================
// STUDENT FILTERS
// ============================================
export interface StudentFilters {
  query?: string
  degrees?: string[]
  specializations?: string[]
  institutes?: string[]
  cities?: string[]
  states?: string[]
  graduationYear?: number[]
  cgpaMin?: number
  percentageMin?: number
  lookingFor?: StudentLookingFor[]
  interests?: string[] // categories
  skills?: string[]
  resumeUploaded?: boolean
  verified?: boolean
  sortBy?: "latest" | "relevance" | "cgpa" | "graduation-year"
  page?: number
  pageSize?: number
}

// ============================================
// STUDENT DASHBOARD DATA
// ============================================
export interface StudentDashboardStats {
  applicationsSent: number
  profileViews: number
  savedJobs: number
  interviewsScheduled: number
  placementOffers: number
  certificatesEarned: number
  trainingsCompleted: number
  unreadMessages: number
}

// ============================================
// PLACEMENT TRACKING
// ============================================
export type PlacementStage =
  | "Applied"
  | "Shortlisted"
  | "Online Test"
  | "Technical Interview"
  | "HR Interview"
  | "Offer Received"
  | "Accepted"
  | "Joined"
  | "Rejected"
  | "Withdrawn"

export interface PlacementApplication {
  id: string
  studentId: string
  jobId: string
  jobTitle: string
  companyId: string
  companyName: string
  companyLogo: string
  stage: PlacementStage
  appliedDate: string
  lastUpdated: string
  offeredSalary?: number
  offerLetter?: string
  joinDate?: string
  notes?: string
  stages: {
    stage: PlacementStage
    date: string
    status: "completed" | "current" | "upcoming"
    feedback?: string
  }[]
}

// ============================================
// TRAINING & RESOURCES
// ============================================
export type TrainingType = "video" | "course" | "workshop" | "webinar" | "ebook" | "practice-test"
export type TrainingLevel = "Beginner" | "Intermediate" | "Advanced"

export interface TrainingResource {
  id: string
  title: string
  description: string
  type: TrainingType
  level: TrainingLevel
  category: string // matches WORKER_CATEGORIES or general skills
  thumbnail?: string
  duration?: string // e.g., "4 hours"
  instructor?: string
  rating?: number
  enrolledCount?: number
  free: boolean
  price?: number
  certificate: boolean
  resourceUrl?: string
  syllabus?: string[]
  prerequisites?: string[]
  createdAt: string
}

export interface StudentTrainingProgress {
  id: string
  studentId: string
  trainingId: string
  trainingTitle: string
  progress: number // percentage
  startedAt: string
  completedAt?: string
  certificateUrl?: string
  status: "in-progress" | "completed" | "abandoned"
  lastAccessedAt: string
}

// ============================================
// RESUME DATA STRUCTURE
// ============================================
export interface ResumeData {
  personalInfo: {
    fullName: string
    email: string
    phone: string
    location: string
    linkedinUrl?: string
    portfolioUrl?: string
  }
  summary: string
  education: StudentEducation[]
  internships: StudentInternship[]
  projects: StudentProject[]
  skills: {
    technical: string[]
    soft: string[]
    tools: string[]
  }
  certifications: StudentCertification[]
  languages: string[]
  achievements: string[]
  hobbies?: string[]
}