import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { CERTIFICATIONS } from "@/data/certifications"
import { cn } from "@/lib/utils"

export function TrustBadges({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-nowrap items-center gap-6", className)}>
      <TooltipProvider>
        {CERTIFICATIONS.map((cert) => (
          <Tooltip key={cert.name}>
            <TooltipTrigger asChild>
              <div className="h-12 px-4 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all border rounded-lg bg-card cursor-help">
                <span className="text-sm font-semibold whitespace-nowrap">{cert.name}</span>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Certified & Compliant</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </TooltipProvider>
    </div>
  )
}
