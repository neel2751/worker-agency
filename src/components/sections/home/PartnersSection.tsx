"use client";
import Link from "next/link"
import { FEATURED_CLIENTS } from "@/data/clients"

export function PartnersSection() {
  return (
    <section className="py-16 relative border-y border-border/50">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
            Partnered With Industry Leaders
          </p>
          <p className="text-lg text-foreground/70">
            Trusted by India's top construction companies
          </p>
        </div>

        {/* Logo Marquee */}
        <div className="overflow-hidden">
          <div className="flex gap-12 animate-marquee">
            {[...FEATURED_CLIENTS, ...FEATURED_CLIENTS].map((client, idx) => (
              <Link
                key={`${client.id}-${idx}`}
                href={`/companies/${client.id}`}
                className="flex-shrink-0 h-12 grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-full object-contain"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}