import { cn } from "@/lib/utils"

export function GridPatternBackground({ className }: { className?: string }) {
  return (
    <div 
      className={cn(
        "absolute inset-0 -z-10 grid-pattern opacity-40 dark:opacity-20 pointer-events-none", 
        className
      )} 
    />
  )
}
