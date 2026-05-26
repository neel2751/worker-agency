import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  Clock,
  Briefcase,
  Heart,
  Coffee,
  GraduationCap,
  Home,
  Plane,
  Stethoscope,
  Users,
  Sparkles,
  HardHat,
  Building2,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Careers — Join Us | ConstructHire",
  description:
    "Help us build India's largest skilled construction workforce platform. See open roles across engineering, design, sales, and operations.",
};

type Position = {
  id: string;
  title: string;
  team: string;
  location: string;
  type: "Full-time" | "Contract" | "Internship";
  level: "Junior" | "Mid" | "Senior" | "Lead";
  href: string;
};

const POSITIONS: Position[] = [
  {
    id: "eng-1",
    title: "Senior Full-Stack Engineer (Next.js)",
    team: "Engineering",
    location: "Bengaluru / Remote",
    type: "Full-time",
    level: "Senior",
    href: "/careers/senior-full-stack-engineer",
  },
  {
    id: "eng-2",
    title: "Mobile Engineer (React Native)",
    team: "Engineering",
    location: "Bengaluru",
    type: "Full-time",
    level: "Mid",
    href: "/careers/mobile-engineer",
  },
  {
    id: "eng-3",
    title: "Backend Engineer (Node.js + PostgreSQL)",
    team: "Engineering",
    location: "Remote — India",
    type: "Full-time",
    level: "Mid",
    href: "/careers/backend-engineer",
  },
  {
    id: "design-1",
    title: "Senior Product Designer",
    team: "Design",
    location: "Bengaluru / Mumbai",
    type: "Full-time",
    level: "Senior",
    href: "/careers/senior-product-designer",
  },
  {
    id: "sales-1",
    title: "Enterprise Account Executive",
    team: "Sales",
    location: "Mumbai",
    type: "Full-time",
    level: "Senior",
    href: "/careers/enterprise-account-executive",
  },
  {
    id: "sales-2",
    title: "Field Sales Lead — North India",
    team: "Sales",
    location: "Delhi NCR",
    type: "Full-time",
    level: "Lead",
    href: "/careers/field-sales-lead-north",
  },
  {
    id: "ops-1",
    title: "Worker Verification Operations Manager",
    team: "Operations",
    location: "Ahmedabad",
    type: "Full-time",
    level: "Mid",
    href: "/careers/verification-operations-manager",
  },
  {
    id: "ops-2",
    title: "Trust & Safety Specialist",
    team: "Operations",
    location: "Bengaluru",
    type: "Full-time",
    level: "Mid",
    href: "/careers/trust-safety-specialist",
  },
  {
    id: "growth-1",
    title: "Growth Marketing Manager",
    team: "Marketing",
    location: "Bengaluru / Remote",
    type: "Full-time",
    level: "Mid",
    href: "/careers/growth-marketing-manager",
  },
  {
    id: "growth-2",
    title: "Content Lead (Hindi + English)",
    team: "Marketing",
    location: "Remote — India",
    type: "Full-time",
    level: "Senior",
    href: "/careers/content-lead",
  },
  {
    id: "support-1",
    title: "Customer Success Associate",
    team: "Customer Success",
    location: "Bengaluru",
    type: "Full-time",
    level: "Junior",
    href: "/careers/customer-success-associate",
  },
  {
    id: "intern-1",
    title: "Engineering Intern (Summer 2026)",
    team: "Engineering",
    location: "Bengaluru",
    type: "Internship",
    level: "Junior",
    href: "/careers/engineering-intern",
  },
];

const TEAMS = ["All", "Engineering", "Design", "Sales", "Operations", "Marketing", "Customer Success"];

const PERKS = [
  {
    icon: Stethoscope,
    title: "Health for the whole family",
    description: "Comprehensive medical insurance covering you, your spouse, kids, and parents.",
  },
  {
    icon: Home,
    title: "Flexible work",
    description: "Hybrid by default. Many roles fully remote across India with quarterly meetups.",
  },
  {
    icon: GraduationCap,
    title: "Learning budget",
    description: "₹50,000 per year for courses, books, conferences — whatever helps you grow.",
  },
  {
    icon: Plane,
    title: "Generous time off",
    description: "25 days of paid leave, plus the week between Christmas and New Year off for everyone.",
  },
  {
    icon: Heart,
    title: "Parental leave",
    description: "6 months paid for primary caregivers, 12 weeks for secondary — across all genders.",
  },
  {
    icon: Coffee,
    title: "Office that feels like home",
    description: "Stocked pantry, ergonomic setups, and a dog-friendly Bengaluru HQ.",
  },
  {
    icon: Sparkles,
    title: "Equity for everyone",
    description: "Every full-time employee gets meaningful equity. We win when the company wins.",
  },
  {
    icon: Users,
    title: "Annual offsite",
    description: "A week somewhere beautiful with the whole team. Past trips: Goa, Coorg, Rishikesh.",
  },
];

const VALUES = [
  {
    title: "Workers first",
    description:
      "Every decision starts with one question: does this make life better for the workers on site? If not, we go back to the drawing board.",
  },
  {
    title: "Ship, then polish",
    description:
      "We move fast and learn from real users. A scrappy v1 in production beats a perfect spec in a doc, every time.",
  },
  {
    title: "Default to trust",
    description:
      "We hire adults and treat them like adults. No micromanagement, no theatre — clear goals, real autonomy, honest feedback.",
  },
  {
    title: "Build for Bharat",
    description:
      "Hindi-first, low-bandwidth-friendly, kirana-shop-tested. We design for the 80% of India that the rest of tech forgets.",
  },
];

const teamColors: Record<string, string> = {
  Engineering: "bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-300",
  Design: "bg-purple-50 text-purple-700 dark:bg-purple-500/10 dark:text-purple-300",
  Sales: "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300",
  Operations: "bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-300",
  Marketing: "bg-rose-50 text-rose-700 dark:bg-rose-500/10 dark:text-rose-300",
  "Customer Success": "bg-cyan-50 text-cyan-700 dark:bg-cyan-500/10 dark:text-cyan-300",
};

export default function CareersPage() {
  // Group positions by team for the list view
  const groupedPositions = POSITIONS.reduce<Record<string, Position[]>>((acc, pos) => {
    if (!acc[pos.team]) acc[pos.team] = [];
    acc[pos.team].push(pos);
    return acc;
  }, {});

  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="gradient-hero grid-pattern-soft relative overflow-hidden border-b border-border/50">
        <Container>
          <div className="grid items-center gap-10 py-16 md:grid-cols-2 md:py-24">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-xs font-medium text-brand-700 dark:bg-brand-500/10 dark:text-brand-300">
                <HardHat className="h-3.5 w-3.5" />
                We&apos;re hiring across India
              </div>
              <h1 className="mt-6 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
                Help us rebuild how India hires its workforce
              </h1>
              <p className="mt-5 text-base text-foreground/70 md:text-lg">
                We&apos;re a small team building the platform that connects 60 million skilled
                construction workers to fair work, dignified pay, and real career growth. Come
                build it with us.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="bg-brand-500 text-white hover:bg-brand-600">
                  <Link href="#positions">
                    See open roles <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="#culture">Our culture</Link>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "120+", label: "Team members" },
                { value: "8", label: "Office cities" },
                { value: "₹50K", label: "Learning budget" },
                { value: "100%", label: "Equity participation" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-border/50 bg-background/80 p-5 backdrop-blur-sm"
                >
                  <div className="text-2xl font-bold text-brand-600 md:text-3xl">{stat.value}</div>
                  <div className="mt-1 text-sm text-foreground/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Values / Culture */}
      <section id="culture" className="py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">
              How we work
            </h2>
            <p className="mt-3 text-foreground/70">
              Four ideas that shape every decision we make — from product to people.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {VALUES.map((value, idx) => (
              <div
                key={value.title}
                className="rounded-xl border border-border/50 bg-background p-6 transition-all hover:border-brand-200 hover:shadow-card-hover"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-brand-50 text-sm font-bold text-brand-600 dark:bg-brand-500/10 dark:text-brand-300">
                    0{idx + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{value.title}</h3>
                    <p className="mt-2 text-sm text-foreground/70">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Perks */}
      <section className="border-y border-border/50 bg-muted/30 py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">
              Benefits that actually matter
            </h2>
            <p className="mt-3 text-foreground/70">
              Real support for real lives — not just ping pong tables.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PERKS.map((perk) => {
              const Icon = perk.icon;
              return (
                <div
                  key={perk.title}
                  className="rounded-xl border border-border/50 bg-background p-6 transition-all hover:border-brand-200 hover:shadow-card-hover"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-foreground">{perk.title}</h3>
                  <p className="mt-2 text-sm text-foreground/70">{perk.description}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Open positions */}
      <section id="positions" className="py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-muted/40 px-4 py-1.5 text-xs font-medium text-foreground/70">
              <Briefcase className="h-3.5 w-3.5" />
              {POSITIONS.length} open roles
            </div>
            <h2 className="mt-5 text-2xl font-bold text-foreground md:text-3xl">
              Open positions
            </h2>
            <p className="mt-3 text-foreground/70">
              Don&apos;t see your role? We&apos;re always open to hearing from great people.{" "}
              <Link href="/careers/general" className="font-medium text-brand-600 hover:underline">
                Send a general application
              </Link>
              .
            </p>
          </div>

          {/* Team filters - static visual chips */}
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {TEAMS.map((team) => (
              <span
                key={team}
                className={`rounded-full border px-4 py-1.5 text-xs font-medium ${
                  team === "All"
                    ? "border-brand-500 bg-brand-500 text-white"
                    : "border-border bg-background text-foreground/70"
                }`}
              >
                {team}
                {team !== "All" && groupedPositions[team] && (
                  <span className="ml-1.5 text-foreground/50">
                    {groupedPositions[team].length}
                  </span>
                )}
              </span>
            ))}
          </div>

          {/* Positions grouped by team */}
          <div className="mx-auto mt-10 max-w-4xl space-y-10">
            {Object.entries(groupedPositions).map(([team, positions]) => (
              <div key={team}>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-foreground/60">
                  {team} <span className="text-foreground/40">· {positions.length}</span>
                </h3>
                <div className="overflow-hidden rounded-xl border border-border/50 bg-background">
                  <ul className="divide-y divide-border/30">
                    {positions.map((position) => (
                      <li key={position.id}>
                        <Link
                          href={position.href}
                          className="group flex flex-col gap-3 p-5 transition-colors hover:bg-muted/40 sm:flex-row sm:items-center sm:justify-between"
                        >
                          <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-2">
                              <h4 className="text-base font-semibold text-foreground group-hover:text-brand-600">
                                {position.title}
                              </h4>
                              <Badge
                                variant="secondary"
                                className={teamColors[position.team] ?? ""}
                              >
                                {position.level}
                              </Badge>
                            </div>
                            <div className="mt-2 flex flex-wrap items-center gap-4 text-xs text-foreground/60">
                              <span className="inline-flex items-center gap-1">
                                <MapPin className="h-3.5 w-3.5" />
                                {position.location}
                              </span>
                              <span className="inline-flex items-center gap-1">
                                <Clock className="h-3.5 w-3.5" />
                                {position.type}
                              </span>
                            </div>
                          </div>
                          <ArrowRight className="hidden h-5 w-5 text-foreground/40 transition-transform group-hover:translate-x-1 group-hover:text-brand-600 sm:block" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="border-t border-border/50 bg-muted/30 py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-3xl rounded-2xl border border-brand-200 bg-gradient-to-br from-brand-50 to-background p-8 text-center dark:border-brand-500/30 dark:from-brand-500/10 md:p-12">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-500 text-white">
              <Building2 className="h-6 w-6" />
            </div>
            <h2 className="mt-5 text-2xl font-bold text-foreground md:text-3xl">
              Not sure where you fit?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-foreground/70">
              Send us your story — what you&apos;ve built, what excites you, what you&apos;d
              love to work on. We read every application.
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-brand-500 text-white hover:bg-brand-600">
                <Link href="/careers/general">Send a general application</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="mailto:careers@constructhire.in">careers@constructhire.in</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}