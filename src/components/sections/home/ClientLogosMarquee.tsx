"use client"

import { CLIENTS } from "@/data/clients"

export function ClientLogosMarquee() {
  return (
    <div className="relative w-full overflow-hidden border-y border-border/60 bg-background py-14">
      <div className="mb-10 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          Trusted by industry leaders
        </p>
      </div>

      <div className="relative mx-auto flex w-full max-w-7xl overflow-hidden">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-40 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-40 bg-gradient-to-l from-background to-transparent" />

        <div className="flex w-fit animate-marquee hover:[animation-play-state:paused]">
          {[...CLIENTS, ...CLIENTS].map((client, idx) => (
            <div
              key={`${client.name}-${idx}`}
              className="mx-10 flex w-44 flex-shrink-0 items-center justify-center"
            >
              <span className="font-display text-xl font-semibold tracking-tight text-muted-foreground/60 transition-colors duration-300 hover:text-accent">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}