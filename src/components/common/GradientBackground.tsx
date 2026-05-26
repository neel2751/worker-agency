import { cn } from "@/lib/utils"

export function GradientBackground({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 -z-20 overflow-hidden",
        className
      )}
    >
      <div className="absolute -top-40 left-1/2 h-[640px] w-full max-w-5xl -translate-x-1/2 rounded-full bg-gradient-to-b from-primary/20 to-transparent opacity-50 blur-3xl dark:opacity-60" />
      <div className="absolute -top-20 right-[8%] h-[420px] w-[420px] rounded-full bg-accent/15 opacity-60 blur-[120px] dark:opacity-40" />
      <div className="absolute bottom-0 left-[5%] h-[360px] w-[360px] rounded-full bg-primary/10 opacity-50 blur-[120px]" />
    </div>
  )
}