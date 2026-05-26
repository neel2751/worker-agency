import { Metadata } from "next"
import { Hero } from "@/components/sections/home/HeroSection"
import { FeaturedCompanies } from "@/components/sections/home/FeaturedCompaniesSection"
import { LatestJobs } from "@/components/sections/home/LatestJobs"
import { WorkerCategoriesSection } from "@/components/sections/home/WorkerCategoriesSection"
import { StatisticsSection } from "@/components/sections/home/StatisticsSection"
import { TestimonialsSection } from "@/components/sections/home/TestimonialsSection"
import { PartnersSection } from "@/components/sections/home/PartnersSection"
import { RoleHighlightSection } from "@/components/sections/home/RoleHighlightSection"
import { Breadcrumbs } from "@/components/layout/Breadcrumbs"

export const metadata: Metadata = {
  title: "BuildForce - Construction Recruitment & Workforce Management",
  description:
    "India's leading construction recruitment platform. Connect with thousands of construction jobs, projects, and skilled workers. Find your next opportunity today.",
  keywords: [
    "construction jobs",
    "construction workers",
    "hire construction labor",
    "construction recruitment",
    "skilled workers",
    "construction projects",
  ],
}

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Featured Companies */}
      <FeaturedCompanies />

      {/* Latest Jobs */}
      <LatestJobs />

      {/* Worker Categories */}
      <WorkerCategoriesSection />

      {/* Statistics */}
      <StatisticsSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Partners Marquee */}
      <PartnersSection />

      {/* Role Highlight Cards */}
      <RoleHighlightSection />

      {/* Final CTA Section */}
      <section className="py-20 relative bg-gradient-to-br from-brand-500/10 via-transparent to-hiviz-400/10 border-t">
        <div className="container text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight">
            Ready to Transform Your Construction Career?
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto mb-8">
            Join 50,000+ construction professionals already using BuildForce
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/register"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold bg-brand-500 hover:bg-brand-600 text-white rounded-xl transition-all hover:shadow-brand-glow"
            >
              Get Started Free
            </a>
            <a
              href="/jobs"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold border-2 border-brand-500 text-brand-600 hover:bg-brand-50 dark:hover:bg-brand-500/10 rounded-xl transition-all"
            >
              Browse Jobs
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}