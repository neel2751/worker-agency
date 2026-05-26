import type { LucideIcon } from "lucide-react"
import { ReactNode } from "react"

export interface Industry {
  slug: string
  title: string
  shortTitle: string
  description: string
  name?: ReactNode
  heroDesc?: ReactNode
  icon: LucideIcon
  color: string
  image: string
  projectCount: number
  activeWorkers: number
  highlights: string[]
  popular?: boolean
}