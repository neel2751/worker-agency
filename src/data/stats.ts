import {
  HardHat,
  Building2,
  Briefcase,
  Hammer,
  MapPin,
  TrendingUp,
  Users,
  Award,
  Clock,
  ShieldCheck,
  GraduationCap,
  Handshake,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

export interface Stat {
  label: string
  value: string
  numericValue: number
  suffix?: string
  prefix?: string
  description?: string
  icon?: LucideIcon
  color?: string
}

// ============================================
// HOMEPAGE HERO STATS (Big numbers)
// ============================================
export const HERO_STATS: Stat[] = [
  {
    label: "Skilled Workers",
    value: "50,000+",
    numericValue: 50000,
    suffix: "+",
    icon: HardHat,
    color: "text-brand-500",
  },
  {
    label: "Construction Companies",
    value: "2,500+",
    numericValue: 2500,
    suffix: "+",
    icon: Building2,
    color: "text-hiviz-600",
  },
  {
    label: "Active Jobs",
    value: "15,000+",
    numericValue: 15000,
    suffix: "+",
    icon: Briefcase,
    color: "text-blue-600",
  },
  {
    label: "Projects Posted",
    value: "8,000+",
    numericValue: 8000,
    suffix: "+",
    icon: Hammer,
    color: "text-green-600",
  },
]

// ============================================
// PLATFORM ACHIEVEMENTS (Detailed stats section)
// ============================================
export const PLATFORM_STATS: Stat[] = [
  {
    label: "Registered Workers",
    value: "50K+",
    numericValue: 50000,
    suffix: "K+",
    description: "Skilled construction professionals across India",
    icon: HardHat,
    color: "text-brand-500",
  },
  {
    label: "Verified Companies",
    value: "2.5K+",
    numericValue: 2500,
    suffix: "K+",
    description: "Trusted construction firms and contractors",
    icon: Building2,
    color: "text-hiviz-600",
  },
  {
    label: "Cities Covered",
    value: "150+",
    numericValue: 150,
    suffix: "+",
    description: "Tier 1, 2, and 3 cities across India",
    icon: MapPin,
    color: "text-blue-600",
  },
  {
    label: "Jobs Posted Monthly",
    value: "15K+",
    numericValue: 15000,
    suffix: "K+",
    description: "Fresh opportunities every month",
    icon: Briefcase,
    color: "text-green-600",
  },
  {
    label: "Successful Placements",
    value: "94%",
    numericValue: 94,
    suffix: "%",
    description: "Worker-to-job match success rate",
    icon: TrendingUp,
    color: "text-purple-600",
  },
  {
    label: "Average Hire Time",
    value: "48hrs",
    numericValue: 48,
    suffix: "hrs",
    description: "From job post to first interview",
    icon: Clock,
    color: "text-orange-600",
  },
  {
    label: "Verified Profiles",
    value: "100%",
    numericValue: 100,
    suffix: "%",
    description: "Every worker and company is verified",
    icon: ShieldCheck,
    color: "text-cyan-600",
  },
  {
    label: "Students Placed",
    value: "12K+",
    numericValue: 12000,
    suffix: "K+",
    description: "Internships and entry-level placements",
    icon: GraduationCap,
    color: "text-pink-600",
  },
]

// ============================================
// IMPACT STATS (About / Marketing pages)
// ============================================
export const IMPACT_STATS: Stat[] = [
  {
    label: "Total Workforce Connected",
    value: "75,000+",
    numericValue: 75000,
    suffix: "+",
    description:
      "Workers, students, and professionals connected to opportunities",
    icon: Users,
    color: "text-brand-500",
  },
  {
    label: "Projects Completed",
    value: "5,400+",
    numericValue: 5400,
    suffix: "+",
    description: "Successfully delivered construction projects",
    icon: Award,
    color: "text-hiviz-600",
  },
  {
    label: "Partner Network",
    value: "2,800+",
    numericValue: 2800,
    suffix: "+",
    description: "Companies, contractors, and training institutes",
    icon: Handshake,
    color: "text-blue-600",
  },
  {
    label: "Worker Satisfaction",
    value: "4.7/5",
    numericValue: 4.7,
    description: "Average rating from registered workers",
    icon: TrendingUp,
    color: "text-green-600",
  },
]

// ============================================
// DASHBOARD STATS (Quick-glance widgets)
// ============================================
export const STUDENT_DASHBOARD_STATS: Stat[] = [
  {
    label: "Applications Sent",
    value: "12",
    numericValue: 12,
    icon: Briefcase,
    color: "text-blue-600",
  },
  {
    label: "Profile Views",
    value: "248",
    numericValue: 248,
    icon: Users,
    color: "text-purple-600",
  },
  {
    label: "Saved Jobs",
    value: "23",
    numericValue: 23,
    icon: Award,
    color: "text-hiviz-600",
  },
  {
    label: "Interviews",
    value: "3",
    numericValue: 3,
    icon: Clock,
    color: "text-brand-500",
  },
]

export const WORKER_DASHBOARD_STATS: Stat[] = [
  {
    label: "Active Applications",
    value: "8",
    numericValue: 8,
    icon: Briefcase,
    color: "text-blue-600",
  },
  {
    label: "Profile Views",
    value: "542",
    numericValue: 542,
    icon: Users,
    color: "text-purple-600",
  },
  {
    label: "Jobs Matched",
    value: "34",
    numericValue: 34,
    icon: Hammer,
    color: "text-hiviz-600",
  },
  {
    label: "Projects Completed",
    value: "17",
    numericValue: 17,
    icon: Award,
    color: "text-green-600",
  },
]

export const COMPANY_DASHBOARD_STATS: Stat[] = [
  {
    label: "Active Job Posts",
    value: "14",
    numericValue: 14,
    icon: Briefcase,
    color: "text-blue-600",
  },
  {
    label: "Total Applicants",
    value: "326",
    numericValue: 326,
    icon: Users,
    color: "text-brand-500",
  },
  {
    label: "Shortlisted",
    value: "48",
    numericValue: 48,
    icon: Award,
    color: "text-hiviz-600",
  },
  {
    label: "Hired This Month",
    value: "23",
    numericValue: 23,
    icon: TrendingUp,
    color: "text-green-600",
  },
]

export const ADMIN_DASHBOARD_STATS: Stat[] = [
  {
    label: "Total Users",
    value: "78,432",
    numericValue: 78432,
    icon: Users,
    color: "text-brand-500",
  },
  {
    label: "Active Companies",
    value: "2,547",
    numericValue: 2547,
    icon: Building2,
    color: "text-hiviz-600",
  },
  {
    label: "Pending Verifications",
    value: "142",
    numericValue: 142,
    icon: ShieldCheck,
    color: "text-orange-600",
  },
  {
    label: "Monthly Revenue",
    value: "₹48L",
    numericValue: 4800000,
    prefix: "₹",
    icon: TrendingUp,
    color: "text-green-600",
  },
]