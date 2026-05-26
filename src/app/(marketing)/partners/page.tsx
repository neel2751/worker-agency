import type { Metadata } from "next";
import Link from "next/link";
import {
  Building2,
  Handshake,
  TrendingUp,
  Users,
  Award,
  Globe2,
  ArrowRight,
  Check,
  Sparkles,
  Crown,
  Shield,
  Star,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CLIENTS } from "@/data/clients";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Partners — Trusted by India's Leading Builders | ConstructHire",
  description:
    "Meet the companies, contractors, and training institutions building India with ConstructHire. Explore partnership tiers and become a partner.",
};

type PartnershipTier = {
  id: string;
  name: string;
  tagline: string;
  icon: typeof Sparkles;
  highlight?: boolean;
  benefits: string[];
  bestFor: string;
};

const TIERS: PartnershipTier[] = [
  {
    id: "associate",
    name: "Associate Partner",
    tagline: "Get started with the network",
    icon: Sparkles,
    bestFor: "Small contractors, regional builders, ITIs",
    benefits: [
      "Listed in our partner directory",
      "Co-branded worker training kits",
      "Quarterly partner newsletter",
      "Access to partner Slack community",
      "Basic analytics dashboard",
    ],
  },
  {
    id: "preferred",
    name: "Preferred Partner",
    tagline: "Scale hiring across regions",
    icon: Shield,
    highlight: true,
    bestFor: "Mid-size developers, skilling institutions",
    benefits: [
      "Everything in Associate, plus:",
      "Featured placement on partner page",
      "Priority worker matching",
      "Dedicated onboarding manager",
      "Co-marketing opportunities (case studies, webinars)",
      "Bulk hiring discounts",
      "Quarterly business reviews",
    ],
  },
  {
    id: "strategic",
    name: "Strategic Partner",
    tagline: "Build the workforce of tomorrow",
    icon: Crown,
    bestFor: "Enterprise builders, PSUs, government bodies",
    benefits: [
      "Everything in Preferred, plus:",
      "Custom worker pipeline programs",
      "White-labeled training portal",
      "Dedicated account team",
      "API & ATS integrations",
      "Joint policy & advocacy initiatives",
      "Annual partner summit invite",
    ],
  },
];

const PARTNERSHIP_TYPES = [
  {
    icon: Building2,
    title: "Builders & developers",
    description:
      "Real estate developers, infrastructure firms, and construction companies hiring at scale.",
  },
  {
    icon: Users,
    title: "Contractors & subcontractors",
    description:
      "General contractors and trade specialists building dedicated worker pools.",
  },
  {
    icon: Award,
    title: "Training & skilling institutes",
    description:
      "ITIs, NSDC partners, and skill development bodies placing graduates into real jobs.",
  },
  {
    icon: Globe2,
    title: "Government & NGOs",
    description:
      "State skill missions, MGNREGA initiatives, and NGOs working on workforce development.",
  },
];

const BENEFITS = [
  {
    icon: TrendingUp,
    stat: "3x",
    label: "faster time-to-hire",
    description: "vs traditional labour contractors",
  },
  {
    icon: Users,
    stat: "60K+",
    label: "verified workers",
    description: "ready to hire across 22 trades",
  },
  {
    icon: Award,
    stat: "94%",
    label: "partner retention",
    description: "renew their partnership annually",
  },
  {
    icon: Globe2,
    stat: "180+",
    label: "cities covered",
    description: "Tier 1, 2, and 3 across India",
  },
];

const tierLabelMap: Record<string, string> = {
  "tier-1": "Tier 1",
  "tier-2": "Tier 2",
  "tier-3": "Tier 3",
};

const categoryLabelMap: Record<string, string> = {
  developer: "Developer",
  infrastructure: "Infrastructure",
  contractor: "Contractor",
  consultancy: "Consultancy",
  epc: "EPC",
};

export default function PartnersPage() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="gradient-hero grid-pattern-soft relative overflow-hidden border-b border-border/50">
        <Container>
          <div className="mx-auto max-w-3xl py-16 text-center md:py-24">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-xs font-medium text-brand-700 dark:bg-brand-500/10 dark:text-brand-300">
              <Handshake className="h-3.5 w-3.5" />
              Partnerships
            </div>
            <h1 className="mt-6 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
              Trusted by India&apos;s leading builders
            </h1>
            <p className="mt-5 text-base text-foreground/70 md:text-lg">
              From neighbourhood contractors to national infrastructure firms — companies of every
              size are using ConstructHire to build their workforce.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-brand-500 text-white hover:bg-brand-600">
                <Link href="#become-partner">
                  Become a partner <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="#tiers">View partnership tiers</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="border-b border-border/50 bg-muted/30 py-12">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {BENEFITS.map((b) => {
              const Icon = b.icon;
              return (
                <div key={b.label} className="text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="mt-4 text-3xl font-bold text-foreground md:text-4xl">
                    {b.stat}
                  </div>
                  <div className="mt-1 text-sm font-medium text-foreground/80">{b.label}</div>
                  <div className="mt-1 text-xs text-foreground/60">{b.description}</div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Partner Showcase */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">
              Our partner network
            </h2>
            <p className="mt-3 text-foreground/70">
              {CLIENTS.length}+ companies and institutions building India with us.
            </p>
          </div>

          {CLIENTS.length === 0 ? (
            <div className="mx-auto mt-12 flex max-w-md flex-col items-center rounded-xl border border-border/50 bg-background p-10 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted text-foreground/40">
                <Building2 className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-foreground">
                No partners to display yet
              </h3>
              <p className="mt-2 text-sm text-foreground/60">
                We&apos;re onboarding founding partners now. Get in touch to be among the first.
              </p>
              <Button asChild className="mt-5 bg-brand-500 text-white hover:bg-brand-600">
                <Link href="#become-partner">Become a partner</Link>
              </Button>
            </div>
          ) : (
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {CLIENTS.map((client) => (
                <div
                  key={client.id}
                  className="card-lift group flex flex-col rounded-xl border border-border/50 bg-background p-6 transition-all hover:border-brand-200 hover:shadow-card-hover"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted/60 text-foreground/70">
                      {client.logo ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={client.logo}
                          alt={`${client.name} logo`}
                          className="h-8 w-8 object-contain"
                        />
                      ) : (
                        <Building2 className="h-6 w-6" />
                      )}
                    </div>
                    <Badge
                      variant="secondary"
                      className={
                        client.tier === "tier-1"
                          ? "bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-300"
                          : client.tier === "tier-2"
                          ? "bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-300"
                          : "bg-muted text-foreground/70"
                      }
                    >
                      {tierLabelMap[client.tier]}
                    </Badge>
                  </div>

                  <h3 className="mt-4 text-base font-semibold text-foreground group-hover:text-brand-600">
                    {client.name}
                  </h3>

                  <p className="mt-1 text-xs text-foreground/60">
                    {categoryLabelMap[client.category]}
                  </p>

                  {client.website && (
                    <div className="mt-4 border-t border-border/40 pt-4">
                      <a
                        href={client.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-brand-600 hover:underline"
                      >
                        Visit website →
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </Container>
      </section>

      {/* Who partners with us */}
      <section className="border-y border-border/50 bg-muted/30 py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">
              Who partners with us
            </h2>
            <p className="mt-3 text-foreground/70">
              Four types of organisations working together to professionalise India&apos;s
              construction workforce.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PARTNERSHIP_TYPES.map((type) => {
              const Icon = type.icon;
              return (
                <div
                  key={type.title}
                  className="rounded-xl border border-border/50 bg-background p-6 transition-all hover:border-brand-200 hover:shadow-card-hover"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-foreground">{type.title}</h3>
                  <p className="mt-2 text-sm text-foreground/70">{type.description}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Tiers */}
      <section id="tiers" className="py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">
              Partnership tiers
            </h2>
            <p className="mt-3 text-foreground/70">
              Three levels of partnership, designed to match your scale and ambition.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {TIERS.map((tier) => {
              const Icon = tier.icon;
              return (
                <div
                  key={tier.id}
                  className={`relative flex flex-col rounded-xl border bg-background p-6 transition-all md:p-8 ${
                    tier.highlight
                      ? "border-brand-500 shadow-card-hover ring-1 ring-brand-500"
                      : "border-border/50 hover:border-brand-200 hover:shadow-card-hover"
                  }`}
                >
                  {tier.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-500 px-3 py-1 text-xs font-semibold text-white">
                      Most popular
                    </div>
                  )}
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                        tier.highlight
                          ? "bg-brand-500 text-white"
                          : "bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-300"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{tier.name}</h3>
                      <p className="text-xs text-foreground/60">{tier.tagline}</p>
                    </div>
                  </div>

                  <p className="mt-5 text-xs font-medium uppercase tracking-wide text-foreground/50">
                    Best for
                  </p>
                  <p className="mt-1 text-sm text-foreground/80">{tier.bestFor}</p>

                  <ul className="mt-6 flex-1 space-y-3 border-t border-border/40 pt-6">
                    {tier.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2 text-sm">
                        <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-500" />
                        <span className="text-foreground/80">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    className={`mt-8 w-full ${
                      tier.highlight ? "bg-brand-500 text-white hover:bg-brand-600" : ""
                    }`}
                    variant={tier.highlight ? "default" : "outline"}
                  >
                    <Link href={`/contact?topic=partnership&tier=${tier.id}`}>
                      Talk to partnerships
                    </Link>
                  </Button>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Testimonial */}
      <section className="border-t border-border/50 bg-muted/30 py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="rounded-2xl border border-border/50 bg-background p-8 md:p-12">
              <div className="flex gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <blockquote className="mt-5 text-lg leading-relaxed text-foreground md:text-xl">
                &ldquo;ConstructHire cut our worker onboarding from three weeks to four days.
                We&apos;ve hired over 2,400 workers across 18 cities in the last year — every one
                verified, every one paid on time. It&apos;s changed how we think about workforce
                planning entirely.&rdquo;
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-50 font-semibold text-brand-700 dark:bg-brand-500/10 dark:text-brand-300">
                  RK
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">Rohit Kothari</div>
                  <div className="text-xs text-foreground/60">
                    VP Operations, Skyline Infrastructure
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section id="become-partner" className="py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-3xl rounded-2xl border border-brand-200 bg-gradient-to-br from-brand-50 to-background p-8 text-center dark:border-brand-500/30 dark:from-brand-500/10 md:p-12">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-500 text-white">
              <Handshake className="h-6 w-6" />
            </div>
            <h2 className="mt-5 text-2xl font-bold text-foreground md:text-3xl">
              Become a partner
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-foreground/70">
              Tell us about your hiring needs and goals. Our partnerships team will get back to
              you within 2 business days with a tailored proposal.
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-brand-500 text-white hover:bg-brand-600">
                <Link href="/contact?topic=partnership">Apply to partner</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="mailto:partners@constructhire.in">partners@constructhire.in</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}