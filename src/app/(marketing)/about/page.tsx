import { Container } from "@/components/layout/Container"
import { IMPACT_STATS, PLATFORM_STATS } from "@/data/stats"
import { Target, Eye, Heart, Users, Award, TrendingUp, ShieldCheck, Globe } from "lucide-react"

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Trust & Verification",
    description: "Every worker and company is verified. No fake profiles, no scams.",
  },
  {
    icon: Heart,
    title: "Worker-First",
    description: "We prioritize dignity, fair wages, and timely payments for every worker.",
  },
  {
    icon: TrendingUp,
    title: "Growth & Skills",
    description: "Free training resources to help workers and students grow their careers.",
  },
  {
    icon: Globe,
    title: "Pan-India Reach",
    description: "Connecting talent and opportunities across 150+ cities in India.",
  },
]

const TIMELINE = [
  { year: "2022", title: "BuildForce Founded", description: "Started with a vision to digitize India's construction workforce" },
  { year: "2023", title: "10,000 Workers Joined", description: "Reached our first major milestone with verified workers across 5 states" },
  { year: "2024", title: "Partnership with NSDC", description: "Official Skill India training partner, launched free certifications" },
  { year: "2025", title: "50,000+ Active Users", description: "Expanded to 150+ cities, partnered with top construction firms" },
  { year: "2026", title: "AI-Powered Matching", description: "Launching smart worker-to-job matching with 94% accuracy" },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden gradient-hero">
        <div className="absolute inset-0 grid-pattern-soft opacity-30 pointer-events-none" />
        <Container className="relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-200 bg-brand-50 mb-6">
            <span className="h-2 w-2 rounded-full bg-brand-500" />
            <span className="text-sm font-semibold text-brand-700">About BuildForce</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Building India's <span className="text-gradient-brand">Construction Future</span>
          </h1>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            We're on a mission to transform how India's construction industry connects, hires, and grows. By bringing together students, skilled workers, and companies on one trusted platform.
          </p>
        </Container>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              { icon: Target, title: "Our Mission", text: "To empower every construction worker, student, and company in India with verified opportunities, fair wages, and the tools to succeed." },
              { icon: Eye, title: "Our Vision", text: "To become India's most trusted construction workforce platform — building the future, one connection at a time." },
              { icon: Heart, title: "Our Promise", text: "Zero fake profiles. Verified payments. Fair dealings. We stand by every interaction on our platform." },
            ].map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="rounded-2xl border border-border/50 bg-background p-8 hover:border-brand-200 transition-all">
                  <div className="h-14 w-14 rounded-xl bg-brand-500 text-white flex items-center justify-center mb-6">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h2 className="text-2xl font-bold mb-3">{item.title}</h2>
                  <p className="text-foreground/70 leading-relaxed">{item.text}</p>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-muted/30">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Real numbers, real change. Here's what we've accomplished together with our community.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {IMPACT_STATS.map((stat) => {
              const Icon = stat.icon
              return (
                <div key={stat.label} className="text-center rounded-xl border border-border/50 bg-background p-6">
                  {Icon && (
                    <div className="h-12 w-12 rounded-xl bg-brand-50 dark:bg-brand-500/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className={`h-6 w-6 ${stat.color}`} />
                    </div>
                  )}
                  <p className="text-4xl font-bold text-brand-600 mb-2">{stat.value}</p>
                  <p className="text-sm font-semibold mb-1">{stat.label}</p>
                  <p className="text-xs text-foreground/60">{stat.description}</p>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-20">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">What We Stand For</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Our core values guide every decision and feature we build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((value) => {
              const Icon = value.icon
              return (
                <div key={value.title} className="rounded-xl border border-border/50 bg-background p-6 hover:shadow-card-hover hover:border-brand-200 transition-all">
                  <div className="h-12 w-12 rounded-xl bg-hiviz-100 text-hiviz-700 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold mb-2">{value.title}</h3>
                  <p className="text-sm text-foreground/70">{value.description}</p>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-steel-950 text-steel-100">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Our Journey</h2>
            <p className="text-steel-400 max-w-2xl mx-auto">
              From a small idea to a national platform — here's how we got here.
            </p>
          </div>

          <div className="max-w-3xl mx-auto relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-steel-800 hidden md:block" />

            <div className="space-y-12">
              {TIMELINE.map((item, idx) => (
                <div key={item.year} className="relative flex gap-6 items-start">
                  <div className="hidden md:flex h-16 w-16 rounded-full bg-brand-500 text-white items-center justify-center flex-shrink-0 font-bold shadow-brand-glow z-10">
                    {item.year}
                  </div>
                  <div className="flex-1 rounded-xl bg-steel-900 border border-steel-800 p-6">
                    <div className="md:hidden mb-2">
                      <span className="px-3 py-1 bg-brand-500 text-white rounded-full text-sm font-bold">{item.year}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-steel-300">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20">
        <Container>
          <div className="rounded-3xl bg-gradient-to-br from-brand-500 to-brand-600 p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Ready to Build With Us?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of workers, students, and companies already growing on BuildForce.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/register" className="px-8 py-3 bg-white text-brand-600 font-bold rounded-lg hover:bg-white/90 transition-colors">
                Get Started Free
              </a>
              <a href="/contact" className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
                Contact Sales
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}