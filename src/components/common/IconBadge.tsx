import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface IconBadgeProps {
  icon: LucideIcon
  size?: "sm" | "md" | "lg"
  className?: string
}

export function IconBadge({ icon: Icon, size = "md", className }: IconBadgeProps) {
  const sizeClasses = {
    sm: "w-8 h-8 p-1.5",
    md: "w-12 h-12 p-2.5",
    lg: "w-16 h-16 p-4",
  }

  const iconSizes = {
    sm: 16,
    md: 24,
    lg: 32,
  }

  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0",
        sizeClasses[size],
        className
      )}
    >
      <Icon size={iconSizes[size]} strokeWidth={1.5} />
    </div>
  )
}
