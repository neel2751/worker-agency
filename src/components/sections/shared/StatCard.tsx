import { AnimatedCounter } from "@/components/common/AnimatedCounter"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface StatCardProps {
  label: string
  value: string
  suffix?: string
  icon?: LucideIcon
  className?: string
}

export function StatCard({ label, value, suffix, icon: Icon, className }: StatCardProps) {
  const numericValue = parseInt(value.replace(/,/g, ""))

  return (
    <div className={cn("p-6 rounded-2xl bg-card border shadow-sm", className)}>
      <div className="flex items-center gap-4 mb-4">
        {Icon && (
          <div className="p-3 bg-primary/10 text-primary rounded-xl">
            <Icon size={24} />
          </div>
        )}
        <p className="text-sm font-medium text-muted-foreground">{label}</p>
      </div>
      <div className="text-4xl font-bold tracking-tight font-display">
        {isNaN(numericValue) ? value : <AnimatedCounter value={numericValue} suffix={suffix} />}
      </div>
    </div>
  )
}
