import type { Metadata } from "next";
import Link from "next/link";
import {
  BookOpen,
  Download,
  GraduationCap,
  Video,
  FileText,
  Briefcase,
  HardHat,
  TrendingUp,
  Calculator,
  ShieldCheck,
  Award,
  ArrowRight,
  Clock,
  Languages,
  Search,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Resources — Career Guides, Training & Downloads | ConstructHire",
  description:
    "Career guides, skill training, downloadable templates, and ebooks for India's construction workforce — workers, students, contractors, and companies.",
};

type ResourceCategory = {
  id: string;
  icon: typeof BookOpen;
  title: string;
  description: string;
  count: number;
  href: string;
  color: string;
};

const CATEGORIES: ResourceCategory[] = [
  {
    id: "career-guides",
    icon: Briefcase,
    title: "Career guides",
    description: "Step-by-step playbooks for growing in your trade",
    count: 32,
    href: "/resources/career-guides",
    color: "bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-300",
  },
  {
    id: "training",
    icon: GraduationCap,
    title: "Skill training",
    description: "Free courses across 22 construction trades",
    count: 48,
    href: "/resources/training",
    color: "bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-300",
  },
  {
    id: "ebooks",
    icon: BookOpen,
    title: "Ebooks & guides",
    description: "Deep-dive PDFs on hiring, wages, compliance",
    count: 18,
    href: "/resources/ebooks",
    color: "bg-purple-50 text-purple-700 dark:bg-purple-500/10 dark:text-purple-300",
  },
  {
    id: "templates",
    icon: Download,
    title: "Templates",
    description: "Contracts, checklists, and wage sheets",
    count: 24,
    href: "/resources/templates",
    color: "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300",
  },
  {
    id: "videos",
    icon: Video,
    title: "Video tutorials",
    description: "Watch and learn in Hindi, English, and 6 more languages",
    count: 86,
    href: "/resources/videos",
    color: "bg-rose-50 text-rose-700 dark:bg-rose-500/10 dark:text-rose-300",
  },
  {
    id: "compliance",
    icon: ShieldCheck,
    title: "Compliance toolkit",
    description: "Labour laws, EPF, ESIC, GST explained simply",
    count: 14,
    href: "/resources/compliance",
    color: "bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-300",
  },
];

type FeaturedResource = {
  id: string;
  type: "Guide" | "Ebook" | "Template" | "Course" | "Video";
  title: string;
  description: string;
  readTime: string;
  languages: string[];
  href: string;
  isFree: boolean;
  isNew?: boolean;
};

const FEATURED: FeaturedResource[] = [
  {
    id: "wage-guide-2026",
    type: "Ebook",
    title: "India Construction Wage Guide 2026",
    description:
      "City-wise, trade-wise wage benchmarks across 180+ cities. Updated quarterly with data from 50,000+ hires.",
    readTime: "42 page PDF",
    languages: ["English", "हिंदी"],
    href: "/resources/ebooks/wage-guide-2026",
    isFree: true,
    isNew: true,
  },
  {
    id: "first-job-worker",
    type: "Guide",
    title: "How to land your first construction job",
    description:
      "A complete walkthrough for new workers — profile setup, finding jobs, interview tips, and getting paid.",
    readTime: "12 min read",
    languages: ["English", "हिंदी", "मराठी", "தமிழ்"],
    href: "/resources/career-guides/first-job",
    isFree: true,
  },
  {
    id: "contract-template",
    type: "Template",
    title: "Worker engagement contract (bilingual)",
    description:
      "Lawyer-reviewed contract template in English + Hindi. Covers wages, leave, safety, and termination.",
    readTime: "DOCX + PDF",
    languages: ["English", "हिंदी"],
    href: "/resources/templates/worker-contract",
    isFree: true,
  },
  {
    id: "electrician-course",
    type: "Course",
    title: "Electrician certification prep (NSDC aligned)",
    description:
      "8-module course covering wiring, safety, code compliance, and exam prep for the NSDC electrician certificate.",
    readTime: "16 hours",
    languages: ["हिंदी", "English"],
    href: "/resources/training/electrician-cert",
    isFree: true,
  },
  {
    id: "hiring-playbook",
    type: "Ebook",
    title: "The contractor's hiring playbook",
    description:
      "How small contractors can build a reliable worker network — sourcing, vetting, paying, retaining.",
    readTime: "28 page PDF",
    languages: ["English", "हिंदी"],
    href: "/resources/ebooks/hiring-playbook",
    isFree: true,
  },
  {
    id: "safety-checklist",
    type: "Template",
    title: "Site safety daily checklist",
    description:
      "Print-ready checklist covering PPE, scaffolding, electrical, and emergency protocols. BOCW Act aligned.",
    readTime: "Printable PDF",
    languages: ["English", "हिंदी"],
    href: "/resources/templates/safety-checklist",
    isFree: true,
  },
  {
    id: "epf-explainer",
    type: "Guide",
    title: "EPF & ESIC — what every worker should know",
    description:
      "Plain-language explainer on Provident Fund, ESI benefits, and how to claim what's yours.",
    readTime: "8 min read",
    languages: ["हिंदी", "English", "தமிழ்"],
    href: "/resources/compliance/epf-esic",
    isFree: true,
  },
  {
    id: "wage-calculator",
    type: "Template",
    title: "Wage calculator spreadsheet",
    description:
      "Excel template for daily, weekly, and monthly wage calculations with overtime and deductions built in.",
    readTime: "XLSX",
    languages: ["English"],
    href: "/resources/templates/wage-calculator",
    isFree: true,
  },
  {
    id: "interview-prep-video",
    type: "Video",
    title: "Interview prep for site supervisors",
    description:
      "30-minute video walkthrough of common interview questions for supervisor and foreman roles.",
    readTime: "30 min video",
    languages: ["हिंदी"],
    href: "/resources/videos/supervisor-interview",
    isFree: true,
  },
];

const QUICK_TOOLS = [
  {
    icon: Calculator,
    title: "Wage calculator",
    description: "Calculate fair wages by trade, city, and experience",
    href: "/tools/wage-calculator",
  },
  {
    icon: Award,
    title: "Skill assessment",
    description: "Test your skills and get a verified ConstructHire badge",
    href: "/tools/skill-assessment",
  },
  {
    icon: TrendingUp,
    title: "Career roadmap",
    description: "See your growth path from helper to contractor",
    href: "/tools/career-roadmap",
  },
  {
    icon: FileText,
    title: "Profile builder",
    description: "Build a portfolio that gets you hired faster",
    href: "/tools/profile-builder",
  },
];

const typeColors: Record<FeaturedResource["type"], string> = {
  Guide: "bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-300",
  Ebook: "bg-purple-50 text-purple-700 dark:bg-purple-500/10 dark:text-purple-300",
  Template: "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300",
  Course: "bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-300",
  Video: "bg-rose-50 text-rose-700 dark:bg-rose-500/10 dark:text-rose-300",
};

export default function ResourcesPage() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="gradient-hero grid-pattern-soft relative overflow-hidden border-b border-border/50">
        <Container>
          <div className="mx-auto max-w-3xl py-16 text-center md:py-24">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-xs font-medium text-brand-700 dark:bg-brand-500/10 dark:text-brand-300">
              <BookOpen className="h-3.5 w-3.5" />
              Free resources
            </div>
            <h1 className="mt-6 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
              Everything you need to grow in construction
            </h1>
            <p className="mt-5 text-base text-foreground/70 md:text-lg">
              Career guides, training courses, downloadable templates, and tools — all free, all
              built specifically for India&apos;s construction workforce.
            </p>

            {/* Search */}
            <div className="mx-auto mt-8 max-w-xl">
              <div className="relative">
                <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-foreground/40" />
                <input
                  type="search"
                  placeholder="Search guides, templates, courses..."
                  aria-label="Search resources"
                  className="w-full rounded-full border border-border bg-background py-3 pl-12 pr-4 text-sm focus:border-brand-500 focus:outline-none"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Categories */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">
              Browse by category
            </h2>
            <p className="mt-3 text-foreground/70">
              Find what you need — fast.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              return (
                <Link
                  key={cat.id}
                  href={cat.href}
                  className="card-lift group rounded-xl border border-border/50 bg-background p-6 transition-all hover:border-brand-200 hover:shadow-card-hover"
                >
                  <div className="flex items-start justify-between">
                    <div className={`flex h-11 w-11 items-center justify-center rounded-lg ${cat.color}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <Badge variant="secondary" className="bg-muted text-foreground/60">
                      {cat.count} items
                    </Badge>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-foreground group-hover:text-brand-600">
                    {cat.title}
                  </h3>
                  <p className="mt-2 text-sm text-foreground/70">{cat.description}</p>
                  <div className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-brand-600 group-hover:gap-2 transition-all">
                    Explore <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Featured Resources */}
      <section className="border-y border-border/50 bg-muted/30 py-16 md:py-20">
        <Container>
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                Featured resources
              </h2>
              <p className="mt-2 text-foreground/70">
                Our most popular and most recently updated.
              </p>
            </div>
            <Button asChild variant="outline">
              <Link href="/resources/all">
                View all <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURED.map((res) => (
              <Link
                key={res.id}
                href={res.href}
                className="card-lift group flex flex-col rounded-xl border border-border/50 bg-background p-6 transition-all hover:border-brand-200 hover:shadow-card-hover"
              >
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className={typeColors[res.type]}>
                    {res.type}
                  </Badge>
                  {res.isNew && (
                    <Badge className="bg-hiviz-400 text-foreground dark:bg-hiviz-500">
                      New
                    </Badge>
                  )}
                  {res.isFree && (
                    <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
                      Free
                    </span>
                  )}
                </div>

                <h3 className="mt-4 text-base font-semibold text-foreground group-hover:text-brand-600">
                  {res.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-foreground/70 line-clamp-3">
                  {res.description}
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-border/40 pt-4 text-xs text-foreground/60">
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {res.readTime}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Languages className="h-3 w-3" />
                    {res.languages.join(", ")}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Quick Tools */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-muted/40 px-4 py-1.5 text-xs font-medium text-foreground/70">
              <HardHat className="h-3.5 w-3.5" />
              Interactive tools
            </div>
            <h2 className="mt-5 text-2xl font-bold text-foreground md:text-3xl">
              Free tools for workers and contractors
            </h2>
            <p className="mt-3 text-foreground/70">
              Calculators, builders, and assessments — no signup required.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {QUICK_TOOLS.map((tool) => {
              const Icon = tool.icon;
              return (
                <Link
                  key={tool.title}
                  href={tool.href}
                  className="card-lift group rounded-xl border border-border/50 bg-background p-6 text-center transition-all hover:border-brand-200 hover:shadow-card-hover"
                >
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-foreground group-hover:text-brand-600">
                    {tool.title}
                  </h3>
                  <p className="mt-2 text-sm text-foreground/70">{tool.description}</p>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Newsletter CTA */}
      <section className="border-t border-border/50 bg-muted/30 py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-3xl rounded-2xl border border-brand-200 bg-gradient-to-br from-brand-50 to-background p-8 text-center dark:border-brand-500/30 dark:from-brand-500/10 md:p-12">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-500 text-white">
              <BookOpen className="h-6 w-6" />
            </div>
            <h2 className="mt-5 text-2xl font-bold text-foreground md:text-3xl">
              Get new resources in your inbox
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-foreground/70">
              One email a month with the best new guides, templates, and training — no spam,
              unsubscribe anytime.
            </p>
            <form className="mx-auto mt-7 flex max-w-md flex-col gap-3 sm:flex-row">
              <input
                type="email"
                required
                placeholder="you@example.com"
                aria-label="Email address"
                className="flex-1 rounded-lg border border-border bg-background px-4 py-3 text-sm focus:border-brand-500 focus:outline-none"
              />
              <Button type="submit" size="lg" className="bg-brand-500 text-white hover:bg-brand-600">
                Subscribe
              </Button>
            </form>
            <p className="mt-3 text-xs text-foreground/60">
              By subscribing, you agree to our{" "}
              <Link href="/legal/privacy" className="text-brand-600 hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}