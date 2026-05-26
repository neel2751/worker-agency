import { cn } from "@/lib/utils"

interface StatBlockProps {
  value: string
  label: string
  description?: string
  className?: string
}

export function StatBlock({ value, label, description, className }: StatBlockProps) {
  return (
    <div className={cn("text-center", className)}>
      <div className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-2">
        {value}
      </div>
      <div className="text-sm font-semibold text-primary uppercase tracking-wider mb-1">
        {label}
      </div>
      {description && (
        <p className="text-sm text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  )
}
