import { IconBadge } from "@/components/common/IconBadge"
import { LucideIcon, ArrowRight } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface FeatureCardProps {
  title: string
  description: string
  icon: LucideIcon
  href?: string
  className?: string
}

export function FeatureCard({ title, description, icon, href, className }: FeatureCardProps) {
  const content = (
    <>
      <IconBadge icon={icon} className="mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground leading-relaxed flex-1">
        {description}
      </p>
      {href && (
        <div className="mt-6 flex items-center text-sm font-semibold text-primary">
          Learn more <ArrowRight className="ml-1 h-4 w-4" />
        </div>
      )}
    </>
  )

  if (href) {
    return (
      <Link 
        href={href}
        className={cn(
          "flex flex-col p-6 rounded-2xl bg-card border shadow-sm transition-all hover:-translate-y-1 hover:shadow-md hover:border-primary/30 group",
          className
        )}
      >
        {content}
      </Link>
    )
  }

  return (
    <div className={cn("flex flex-col p-6 rounded-2xl bg-card border shadow-sm", className)}>
      {content}
    </div>
  )
}
