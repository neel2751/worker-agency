import Link from "next/link"
import { FEATURED_CLIENTS } from "@/data/clients"
import { ArrowRight } from "lucide-react"

export function FeaturedCompanies() {
  return (
    <section className="py-20 relative">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-200 bg-brand-50 mb-6">
            <span className="h-2 w-2 rounded-full bg-brand-500" />
            <span className="text-sm font-semibold text-brand-700">Trusted By</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
            Leading Construction Companies
          </h2>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            Join 2,500+ verified construction firms already hiring on BuildForce
          </p>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          {FEATURED_CLIENTS.map((client) => (
            <Link
              key={client.id}
              href={`/companies/${client.id}`}
              className="group flex items-center justify-center p-6 rounded-xl border border-border/50 bg-background hover:border-brand-200 hover:shadow-elev-2 transition-all"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-12 object-contain grayscale group-hover:grayscale-0 transition-all"
              />
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/companies"
            className="inline-flex items-center gap-2 px-6 py-3 text-brand-600 hover:text-brand-700 font-semibold group"
          >
            View All Companies
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}