import Link from "next/link"
import { HardHat } from "lucide-react"
import { cn } from "@/lib/utils"
import { SITE_CONFIG } from "@/config/site"

interface LogoProps {
  className?: string
  showTagline?: boolean
  variant?: "default" | "white" | "compact"
}

export function Logo({
  className = "",
  showTagline = true,
  variant = "default",
}: LogoProps) {
  const isWhite = variant === "white"
  const isCompact = variant === "compact"

  return (
    <Link
      href="/"
      className={cn("group flex items-center gap-2.5", className)}
      aria-label={`${SITE_CONFIG.shortName} — home`}
    >
      {/* Logo Mark */}
      <span
        className={cn(
          "relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-500 text-white shadow-brand-glow transition-transform duration-300 group-hover:-translate-y-0.5",
          isCompact && "h-8 w-8"
        )}
      >
        <HardHat className={cn("h-5 w-5", isCompact && "h-4 w-4")} />
        {/* Hi-vis yellow accent dot */}
        <span
          className={cn(
            "absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-hiviz-400 ring-2",
            isWhite ? "ring-steel-950" : "ring-background"
          )}
        />
      </span>

      {/* Wordmark */}
      {!isCompact && (
        <span className="flex flex-col leading-none">
          <span
            className={cn(
              "font-display text-lg font-bold tracking-tight",
              isWhite && "text-white"
            )}
          >
            {SITE_CONFIG.shortName}
          </span>
          {showTagline && (
            <span
              className={cn(
                "text-[10px] font-semibold uppercase tracking-[0.18em]",
                isWhite ? "text-steel-400" : "text-muted-foreground"
              )}
            >
              Construction Hire
            </span>
          )}
        </span>
      )}
    </Link>
  )
}