export function IntegrationDiagram() {
  const sources = ["Procore", "HCSS", "Sage 300", "LCPtracker"]
  const targets = ["Workday HCM", "Workday Pay", "Workday FIN"]

  return (
    <div className="relative flex items-center justify-between gap-4 rounded-2xl border border-border/70 bg-card p-8 shadow-elev-2">
      {/* Left: Source systems */}
      <div className="flex flex-col gap-3">
        {sources.map((src) => (
          <div
            key={src}
            className="rounded-xl border border-border/70 bg-muted px-4 py-2.5 text-sm font-semibold text-foreground shadow-sm"
          >
            {src}
          </div>
        ))}
      </div>

      {/* Center: Hub */}
      <div className="relative flex flex-col items-center gap-2">
        {/* Connector lines */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-full w-px bg-gradient-to-b from-transparent via-accent/30 to-transparent" />
        </div>

        <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-accent bg-accent/10 shadow-elev-2">
          <svg
            viewBox="0 0 24 24"
            className="h-8 w-8 text-accent"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
            />
          </svg>
        </div>
        <span className="relative z-10 text-xs font-bold uppercase tracking-widest text-accent">
          Workday
          <br />
          Integration
        </span>
      </div>

      {/* Right: Target systems */}
      <div className="flex flex-col gap-3">
        {targets.map((tgt) => (
          <div
            key={tgt}
            className="rounded-xl border border-accent/40 bg-accent/10 px-4 py-2.5 text-sm font-semibold text-accent shadow-sm"
          >
            {tgt}
          </div>
        ))}
      </div>

      {/* Animated pulse dot */}
      <div className="absolute bottom-4 right-4 flex items-center gap-1.5">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
        </span>
        <span className="text-xs text-muted-foreground">Live sync</span>
      </div>
    </div>
  )
}