import type { UserRole } from "@/lib/constants"

// ============================================
// BASE USER
// ============================================
export interface BaseUser {
  id: string
  email: string
  phone: string
  role: UserRole
  name: string
  avatar?: string
  verified: boolean
  emailVerified: boolean
  phoneVerified: boolean
  active: boolean
  createdAt: string // ISO
  updatedAt: string // ISO
  lastLoginAt?: string
}

// ============================================
// AUTH
// ============================================
export interface AuthCredentials {
  email: string
  password: string
}

export interface RegisterPayload {
  name: string
  email: string
  phone: string
  password: string
  role: UserRole
  acceptedTerms: boolean
}

export interface AuthSession {
  user: BaseUser
  token: string
  expiresAt: string
}

// ============================================
// NOTIFICATIONS
// ============================================
export type NotificationType =
  | "job-match"
  | "application-update"
  | "interview-invite"
  | "message"
  | "profile-view"
  | "system"
  | "payment"
  | "verification"

export interface Notification {
  id: string
  userId: string
  type: NotificationType
  title: string
  description: string
  link?: string
  read: boolean
  createdAt: string
  icon?: string
}

// ============================================
// MESSAGES / CHAT
// ============================================
export interface ChatMessage {
  id: string
  conversationId: string
  senderId: string
  recipientId: string
  content: string
  attachments?: { name: string; url: string; type: string }[]
  read: boolean
  createdAt: string
}

export interface Conversation {
  id: string
  participants: {
    id: string
    name: string
    avatar?: string
    role: UserRole
  }[]
  lastMessage?: ChatMessage
  unreadCount: number
  updatedAt: string
}

// ============================================
// USER PREFERENCES
// ============================================
export interface UserPreferences {
  notifications: {
    email: boolean
    sms: boolean
    push: boolean
    jobAlerts: boolean
    applicationUpdates: boolean
    marketing: boolean
  }
  privacy: {
    showProfileToPublic: boolean
    showContactInfo: boolean
    showSalaryExpectation: boolean
  }
  language: "en" | "hi" | "gu" | "mr" | "ta" | "te" | "kn"
  theme: "light" | "dark" | "system"
}

// ============================================
// PROFILE COMPLETION TRACKING
// ============================================
export interface ProfileSection {
  name: string
  completed: boolean
  weight: number // percentage contribution
}

export interface ProfileCompletion {
  percentage: number
  sections: ProfileSection[]
  missingItems: string[]
}

// ============================================
// VERIFICATION
// ============================================
export type VerificationStatus =
  | "pending"
  | "in-review"
  | "verified"
  | "rejected"

export interface VerificationRequest {
  id: string
  userId: string
  userType: UserRole
  documentType: "aadhaar" | "pan" | "license" | "certificate" | "gst" | "company-registration"
  documentUrl: string
  status: VerificationStatus
  submittedAt: string
  reviewedAt?: string
  reviewedBy?: string
  rejectionReason?: string
}

// ============================================
// SUBSCRIPTION / PLANS
// ============================================
export type PlanTier = "free" | "basic" | "premium" | "enterprise"

export interface UserSubscription {
  id: string
  userId: string
  plan: PlanTier
  startDate: string
  endDate: string
  autoRenew: boolean
  status: "active" | "expired" | "cancelled" | "trial"
  paymentMethod?: string
}

// ============================================
// REVIEWS / RATINGS
// ============================================
export interface Review {
  id: string
  reviewerId: string
  reviewerName: string
  reviewerAvatar?: string
  revieweeId: string
  rating: number // 1-5
  comment: string
  projectContext?: string
  createdAt: string
  helpful: number
}