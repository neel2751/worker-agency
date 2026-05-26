import {
  Home,
  Briefcase,
  HardHat,
  Building2,
  Users,
  GraduationCap,
  Hammer,
  ClipboardList,
  Search,
  FileText,
  LayoutDashboard,
  Settings,
  Bell,
  MessageSquare,
  UserCircle,
  LogOut,
  BookOpen,
  TrendingUp,
  Award,
  Wrench,
  Building,
  Shield,
  BarChart3,
  CreditCard,
  FileCheck,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

export interface NavItem {
  title: string
  href: string
  description?: string
  icon?: LucideIcon
  badge?: string
}

export interface NavGroup {
  title: string
  items: NavItem[]
}

// ============================================
// MAIN NAVBAR (Public)
// ============================================
export const MAIN_NAV: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "Find Jobs", href: "/jobs" },
  { title: "Find Workers", href: "/workers" },
  { title: "Projects", href: "/projects" },
  { title: "Companies", href: "/companies" },
  { title: "Resources", href: "/resources" },
]

// ============================================
// "FOR" DROPDOWN — Role-based entry points
// ============================================
export const FOR_DROPDOWN: NavGroup[] = [
  {
    title: "For Job Seekers",
    items: [
      {
        title: "For Students",
        href: "/for-students",
        description: "Internships, training & placement",
        icon: GraduationCap,
      },
      {
        title: "For Workers",
        href: "/for-workers",
        description: "Find skilled construction jobs",
        icon: HardHat,
      },
    ],
  },
  {
    title: "For Hiring",
    items: [
      {
        title: "For Companies",
        href: "/for-companies",
        description: "Hire workers & manage workforce",
        icon: Building2,
      },
      {
        title: "For Contractors",
        href: "/for-contractors",
        description: "Bid on projects & find labor",
        icon: Hammer,
      },
    ],
  },
]

// ============================================
// STUDENT DASHBOARD SIDEBAR
// ============================================
export const STUDENT_NAV: NavItem[] = [
  { title: "Dashboard", href: "/student/dashboard", icon: LayoutDashboard },
  { title: "My Profile", href: "/student/profile", icon: UserCircle },
  { title: "Resume", href: "/student/resume", icon: FileText },
  { title: "Browse Jobs", href: "/student/jobs", icon: Briefcase },
  { title: "Internships", href: "/student/internships", icon: GraduationCap },
  { title: "Applications", href: "/student/applications", icon: ClipboardList },
  { title: "Saved Jobs", href: "/student/saved", icon: Award },
  { title: "Placements", href: "/student/placements", icon: TrendingUp },
  { title: "Training", href: "/student/training", icon: BookOpen },
  { title: "Certificates", href: "/student/certificates", icon: FileCheck },
  { title: "Notifications", href: "/student/notifications", icon: Bell },
  { title: "Messages", href: "/student/messages", icon: MessageSquare },
  { title: "Settings", href: "/student/settings", icon: Settings },
]

// ============================================
// WORKER DASHBOARD SIDEBAR
// ============================================
export const WORKER_NAV: NavItem[] = [
  { title: "Dashboard", href: "/worker/dashboard", icon: LayoutDashboard },
  { title: "My Profile", href: "/worker/profile", icon: UserCircle },
  { title: "Find Jobs", href: "/worker/jobs", icon: Search },
  { title: "Applications", href: "/worker/applications", icon: ClipboardList },
  { title: "Work History", href: "/worker/history", icon: Briefcase },
  { title: "Portfolio", href: "/worker/portfolio", icon: Award },
  { title: "Certifications", href: "/worker/certifications", icon: FileCheck },
  { title: "Skills", href: "/worker/skills", icon: Wrench },
  { title: "Availability", href: "/worker/availability", icon: TrendingUp },
  { title: "Saved Jobs", href: "/worker/saved", icon: Award },
  { title: "Notifications", href: "/worker/notifications", icon: Bell },
  { title: "Messages", href: "/worker/messages", icon: MessageSquare },
  { title: "Settings", href: "/worker/settings", icon: Settings },
]

// ============================================
// COMPANY DASHBOARD SIDEBAR
// ============================================
export const COMPANY_NAV: NavItem[] = [
  { title: "Dashboard", href: "/company/dashboard", icon: LayoutDashboard },
  { title: "Company Profile", href: "/company/profile", icon: Building },
  { title: "Post a Job", href: "/company/jobs/new", icon: Briefcase },
  { title: "My Jobs", href: "/company/jobs", icon: ClipboardList },
  { title: "Post a Project", href: "/company/projects/new", icon: Hammer },
  { title: "My Projects", href: "/company/projects", icon: ClipboardList },
  { title: "Applicants", href: "/company/applicants", icon: Users },
  { title: "Search Workers", href: "/company/workers", icon: Search },
  { title: "Interviews", href: "/company/interviews", icon: MessageSquare },
  { title: "Workforce", href: "/company/workforce", icon: HardHat },
  { title: "Analytics", href: "/company/analytics", icon: BarChart3 },
  { title: "Billing", href: "/company/billing", icon: CreditCard },
  { title: "Notifications", href: "/company/notifications", icon: Bell },
  { title: "Messages", href: "/company/messages", icon: MessageSquare },
  { title: "Settings", href: "/company/settings", icon: Settings },
]

// ============================================
// ADMIN DASHBOARD SIDEBAR
// ============================================
export const ADMIN_NAV: NavItem[] = [
  { title: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { title: "Users", href: "/admin/users", icon: Users },
  { title: "Companies", href: "/admin/companies", icon: Building2 },
  { title: "Workers", href: "/admin/workers", icon: HardHat },
  { title: "Students", href: "/admin/students", icon: GraduationCap },
  { title: "Verifications", href: "/admin/verifications", icon: Shield },
  { title: "Jobs", href: "/admin/jobs", icon: Briefcase },
  { title: "Projects", href: "/admin/projects", icon: Hammer },
  { title: "Reports", href: "/admin/reports", icon: FileText },
  { title: "Analytics", href: "/admin/analytics", icon: BarChart3 },
  { title: "Revenue", href: "/admin/revenue", icon: TrendingUp },
  { title: "Subscriptions", href: "/admin/subscriptions", icon: CreditCard },
  { title: "Moderation", href: "/admin/moderation", icon: Shield },
  { title: "Settings", href: "/admin/settings", icon: Settings },
]

// ============================================
// FOOTER NAV
// ============================================
export const FOOTER_NAV = {
  platform: {
    title: "Platform",
    links: [
      { title: "Find Jobs", href: "/jobs" },
      { title: "Find Workers", href: "/workers" },
      { title: "Browse Projects", href: "/projects" },
      { title: "Companies", href: "/companies" },
      { title: "Worker Categories", href: "/categories" },
    ],
  },
  forUsers: {
    title: "For You",
    links: [
      { title: "For Students", href: "/for-students" },
      { title: "For Workers", href: "/for-workers" },
      { title: "For Companies", href: "/for-companies" },
      { title: "For Contractors", href: "/for-contractors" },
      { title: "Pricing", href: "/pricing" },
    ],
  },
  resources: {
    title: "Resources",
    links: [
      { title: "Blog", href: "/blog" },
      { title: "Career Guide", href: "/resources/career-guide" },
      { title: "Training", href: "/resources/training" },
      { title: "Help Center", href: "/help" },
      { title: "FAQ", href: "/faq" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { title: "About Us", href: "/about" },
      { title: "Contact", href: "/contact" },
      { title: "Careers", href: "/careers" },
      { title: "Press", href: "/press" },
      { title: "Partners", href: "/partners" },
    ],
  },
  legal: {
    title: "Legal",
    links: [
      { title: "Privacy Policy", href: "/legal/privacy" },
      { title: "Terms of Service", href: "/legal/terms" },
      { title: "Cookie Policy", href: "/legal/cookies" },
      { title: "Refund Policy", href: "/legal/refund" },
    ],
  },
}

// ============================================
// AUTH NAV (Login / Register dropdown)
// ============================================
export const AUTH_NAV: NavItem[] = [
  { title: "Login", href: "/login" },
  { title: "Register as Student", href: "/register?role=student", icon: GraduationCap },
  { title: "Register as Worker", href: "/register?role=worker", icon: HardHat },
  { title: "Register as Company", href: "/register?role=company", icon: Building2 },
]

// ============================================
// USER MENU (when logged in)
// ============================================
export const USER_MENU: NavItem[] = [
  { title: "My Profile", href: "/profile", icon: UserCircle },
  { title: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { title: "Messages", href: "/messages", icon: MessageSquare },
  { title: "Notifications", href: "/notifications", icon: Bell },
  { title: "Settings", href: "/settings", icon: Settings },
  { title: "Logout", href: "/logout", icon: LogOut },
]