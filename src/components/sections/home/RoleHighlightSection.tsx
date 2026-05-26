import Link from "next/link"
import {
  GraduationCap,
  HardHat,
  Building2,
  Hammer,
  ArrowRight,
} from "lucide-react"

const ROLES = [
  {
    id: "student",
    icon: GraduationCap,
    title: "For Students",
    description:
      "Kickstart your construction career with internships, training, and placement opportunities.",
    cta: "Explore Internships",
    href: "/for-students",
    color: "bg-blue-500",
  },
  {
    id: "worker",
    icon: HardHat,
    title: "For Workers",
    description:
      "Find high-paying construction jobs, showcase your portfolio, and grow your skills.",
    cta: "Find Jobs Now",
    href: "/for-workers",
    color: "bg-brand-500",
  },
  {
    id: "company",
    icon: Building2,
    title: "For Companies",
    description:
      "Hire verified construction workers and manage your entire workforce in one platform.",
    cta: "Start Hiring",
    href: "/for-companies",
    color: "bg-purple-500",
  },
  {
    id: "contractor",
    icon: Hammer,
    title: "For Contractors",
    description:
      "Bid on construction projects, find labor, and scale your business efficiently.",
    cta: "Browse Projects",
    href: "/for-contractors",
    color: "bg-orange-500",
  },
]

export function RoleHighlightSection() {
  return (
    <section className="py-20 relative">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
            What's Your Role?
          </h2>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            BuildForce serves everyone in the construction industry. Choose your path.
          </p>
        </div>

        {/* Role Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {ROLES.map((role) => {
            const Icon = role.icon
            return (
              <Link
                key={role.id}
                href={role.href}
                className="group relative overflow-hidden rounded-2xl border border-border/50 bg-background p-8 hover:border-brand-200 hover:shadow-card-hover transition-all card-lift"
              >
                {/* Background accent */}
                <div
                  className={`absolute -right-12 -top-12 h-32 w-32 rounded-full ${role.color} opacity-10 group-hover:opacity-20 transition-opacity`}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={`h-14 w-14 rounded-xl ${role.color} text-white flex items-center justify-center mb-6`}
                  >
                    <Icon className="h-7 w-7" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-brand-500 transition-colors">
                    {role.title}
                  </h3>
                  <p className="text-foreground/70 mb-6 leading-relaxed">
                    {role.description}
                  </p>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-brand-600 font-semibold group-hover:gap-3 transition-all">
                    {role.cta}
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-foreground/60 mb-6">
            Not sure which option fits you? Explore all opportunities below.
          </p>
        </div>
      </div>
    </section>
  )
}