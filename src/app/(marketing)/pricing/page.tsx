import type { Metadata } from "next";
import Link from "next/link";
import { Check, X, HelpCircle, Sparkles, Zap, Building2, Crown } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Pricing — Plans for Workers, Contractors & Companies | ConstructHire",
  description:
    "Simple, transparent pricing built for India's construction industry. Free worker accounts, flexible plans for contractors and enterprises.",
};

type PlanTier = {
  id: string;
  name: string;
  tagline: string;
  price: string;
  priceSuffix: string;
  description: string;
  cta: string;
  ctaHref: string;
  highlight?: boolean;
  icon: typeof Sparkles;
  features: string[];
};

const PLANS: PlanTier[] = [
  {
    id: "free",
    name: "Free",
    tagline: "For workers & students",
    price: "₹0",
    priceSuffix: "forever",
    description: "Get discovered, apply to jobs, and build your portfolio at no cost.",
    cta: "Create free account",
    ctaHref: "/register?type=worker",
    icon: Sparkles,
    features: [
      "Public worker profile",
      "Apply to unlimited jobs",
      "Portfolio with 10 photos",
      "In-app messaging",
      "Skill verification (1 trade)",
      "Mobile app access",
    ],
  },
  {
    id: "basic",
    name: "Basic",
    tagline: "For small contractors",
    price: "₹9,000",
    priceSuffix: "/month",
    description: "Post jobs, hire verified workers, and manage small teams.",
    cta: "Start 14-day trial",
    ctaHref: "/register?type=contractor&plan=basic",
    icon: Zap,
    features: [
      "Post up to 10 active jobs",
      "Browse 50,000+ verified workers",
      "Direct messaging with workers",
      "Basic analytics dashboard",
      "Email support",
      "Worker shortlist & notes",
      "Mobile app for site managers",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    tagline: "For growing companies",
    price: "₹25,000",
    priceSuffix: "/month",
    description: "Scale hiring with priority placement, advanced filters, and team seats.",
    cta: "Start 14-day trial",
    ctaHref: "/register?type=company&plan=premium",
    highlight: true,
    icon: Crown,
    features: [
      "Unlimited active job postings",
      "Featured listings (top of search)",
      "Advanced filters & saved searches",
      "Up to 10 team member seats",
      "Project management workspace",
      "Priority phone & email support",
      "Bulk worker invitations",
      "Custom company profile page",
      "Detailed hiring analytics",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    tagline: "For large builders & PSUs",
    price: "₹1,00,000",
    priceSuffix: "/month",
    description: "Built for enterprise scale with dedicated support and integrations.",
    cta: "Talk to sales",
    ctaHref: "/contact?topic=enterprise",
    icon: Building2,
    features: [
      "Everything in Premium",
      "Unlimited team seats",
      "Dedicated account manager",
      "Custom onboarding & training",
      "API access & ATS integrations",
      "White-labeled worker portal",
      "SLA-backed 24/7 support",
      "Compliance & audit reports",
      "Bulk SMS & WhatsApp campaigns",
      "Custom contract terms",
    ],
  },
];

type FeatureRow = {
  label: string;
  free: boolean | string;
  basic: boolean | string;
  premium: boolean | string;
  enterprise: boolean | string;
};

type FeatureSection = {
  title: string;
  rows: FeatureRow[];
};

const FEATURE_SECTIONS: FeatureSection[] = [
  {
    title: "Hiring & job posts",
    rows: [
      { label: "Active job postings", free: "—", basic: "10", premium: "Unlimited", enterprise: "Unlimited" },
      { label: "Featured listings", free: false, basic: false, premium: true, enterprise: true },
      { label: "Worker search filters", free: "Basic", basic: "Standard", premium: "Advanced", enterprise: "Advanced + custom" },
      { label: "Saved searches & alerts", free: false, basic: true, premium: true, enterprise: true },
      { label: "Bulk invitations", free: false, basic: false, premium: true, enterprise: true },
    ],
  },
  {
    title: "Team & collaboration",
    rows: [
      { label: "Team member seats", free: "1", basic: "3", premium: "10", enterprise: "Unlimited" },
      { label: "Project workspace", free: false, basic: false, premium: true, enterprise: true },
      { label: "Internal notes & ratings", free: false, basic: true, premium: true, enterprise: true },
      { label: "Role-based permissions", free: false, basic: false, premium: true, enterprise: true },
    ],
  },
  {
    title: "Support & success",
    rows: [
      { label: "Help center access", free: true, basic: true, premium: true, enterprise: true },
      { label: "Email support", free: "48h", basic: "24h", premium: "8h", enterprise: "1h" },
      { label: "Phone support", free: false, basic: false, premium: true, enterprise: true },
      { label: "Dedicated account manager", free: false, basic: false, premium: false, enterprise: true },
      { label: "Custom onboarding", free: false, basic: false, premium: false, enterprise: true },
    ],
  },
  {
    title: "Integrations & compliance",
    rows: [
      { label: "API access", free: false, basic: false, premium: false, enterprise: true },
      { label: "ATS / HRMS integration", free: false, basic: false, premium: false, enterprise: true },
      { label: "Compliance reports", free: false, basic: false, premium: "Basic", enterprise: "Advanced" },
      { label: "Bulk SMS & WhatsApp", free: false, basic: false, premium: false, enterprise: true },
    ],
  },
];

const FAQS = [
  {
    q: "Is the platform really free for workers and students?",
    a: "Yes. Workers and students never pay to create a profile, apply to jobs, or message contractors. We charge contractors and companies who are hiring — that's how we keep it free for the people doing the work.",
  },
  {
    q: "Can I switch plans later?",
    a: "Absolutely. You can upgrade, downgrade, or cancel anytime from your billing settings. Upgrades take effect immediately and we prorate the difference. Downgrades take effect at the end of your current billing cycle.",
  },
  {
    q: "Do you offer a trial?",
    a: "Both Basic and Premium come with a 14-day free trial — no credit card required. You'll get full access to every feature during the trial so you can hire your first few workers before committing.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major Indian payment methods: UPI, net banking, credit and debit cards, and NEFT/RTGS for enterprise invoices. GST invoices are issued automatically and available in your billing dashboard.",
  },
  {
    q: "Is there a discount for annual billing?",
    a: "Yes. Pay annually and save 20% across Basic, Premium, and Enterprise plans. Annual billing also includes free quarterly hiring strategy reviews on Premium and above.",
  },
  {
    q: "How does Enterprise pricing work?",
    a: "Enterprise is a starting price — final pricing depends on team size, integration scope, and SLA needs. Get in touch and our team will put together a quote within 48 hours.",
  },
  {
    q: "Do you offer NGO or government discounts?",
    a: "Yes. Registered NGOs, skill development partners, and government training programs get 50% off all paid plans. Contact us with your registration details to apply.",
  },
];

function FeatureCell({ value }: { value: boolean | string }) {
  if (value === true) {
    return <Check className="h-5 w-5 text-brand-500" aria-label="Included" />;
  }
  if (value === false) {
    return <X className="h-5 w-5 text-foreground/30" aria-label="Not included" />;
  }
  return <span className="text-sm text-foreground/80">{value}</span>;
}

export default function PricingPage() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="gradient-hero grid-pattern-soft relative overflow-hidden border-b border-border/50">
        <Container>
          <div className="mx-auto max-w-3xl py-16 text-center md:py-24">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-xs font-medium text-brand-700 dark:bg-brand-500/10 dark:text-brand-300">
              <Sparkles className="h-3.5 w-3.5" />
              Simple, transparent pricing
            </div>
            <h1 className="mt-6 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
              Pricing built for India&apos;s construction industry
            </h1>
            <p className="mt-5 text-base text-foreground/70 md:text-lg">
              Free forever for workers and students. Flexible plans for contractors and
              enterprises — start small, scale when you&apos;re ready.
            </p>
          </div>
        </Container>
      </section>

      {/* Plan cards */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-4">
            {PLANS.map((plan) => {
              const Icon = plan.icon;
              return (
                <div
                  key={plan.id}
                  className={`relative flex flex-col rounded-xl border bg-background p-6 transition-all ${
                    plan.highlight
                      ? "border-brand-500 shadow-card-hover ring-1 ring-brand-500"
                      : "border-border/50 hover:border-brand-200 hover:shadow-card-hover"
                  }`}
                >
                  {plan.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-500 px-3 py-1 text-xs font-semibold text-white">
                      Most popular
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <div
                      className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                        plan.highlight
                          ? "bg-brand-500 text-white"
                          : "bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-300"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <h2 className="text-lg font-semibold text-foreground">{plan.name}</h2>
                  </div>
                  <p className="mt-1 text-sm text-foreground/60">{plan.tagline}</p>

                  <div className="mt-5 flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-sm text-foreground/60">{plan.priceSuffix}</span>
                  </div>
                  <p className="mt-2 text-sm text-foreground/70">{plan.description}</p>

                  <Button
                    asChild
                    className={`mt-6 w-full ${
                      plan.highlight
                        ? "bg-brand-500 text-white hover:bg-brand-600"
                        : ""
                    }`}
                    variant={plan.highlight ? "default" : "outline"}
                  >
                    <Link href={plan.ctaHref}>{plan.cta}</Link>
                  </Button>

                  <ul className="mt-6 space-y-3 border-t border-border/40 pt-6">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm">
                        <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-500" />
                        <span className="text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <p className="mt-8 text-center text-sm text-foreground/60">
            All prices exclusive of 18% GST. Save 20% with annual billing.
          </p>
        </Container>
      </section>

      {/* Feature comparison */}
      <section className="border-t border-border/50 bg-muted/30 py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">
              Compare every feature
            </h2>
            <p className="mt-3 text-foreground/70">
              A side-by-side look at what&apos;s included in each plan.
            </p>
          </div>

          <div className="mt-10 overflow-x-auto rounded-xl border border-border/50 bg-background">
            <table className="w-full min-w-[720px]">
              <thead className="bg-muted/50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                    Features
                  </th>
                  {PLANS.map((plan) => (
                    <th
                      key={plan.id}
                      className="px-6 py-4 text-center text-sm font-semibold text-foreground"
                    >
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border/30">
                {FEATURE_SECTIONS.map((section) => (
                  <>
                    <tr key={section.title} className="bg-muted/20">
                      <td
                        colSpan={5}
                        className="px-6 py-3 text-xs font-semibold uppercase tracking-wide text-foreground/60"
                      >
                        {section.title}
                      </td>
                    </tr>
                    {section.rows.map((row) => (
                      <tr
                        key={`${section.title}-${row.label}`}
                        className="transition-colors hover:bg-muted/30"
                      >
                        <td className="px-6 py-4 text-sm text-foreground">{row.label}</td>
                        <td className="px-6 py-4 text-center">
                          <div className="flex justify-center">
                            <FeatureCell value={row.free} />
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <div className="flex justify-center">
                            <FeatureCell value={row.basic} />
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <div className="flex justify-center">
                            <FeatureCell value={row.premium} />
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <div className="flex justify-center">
                            <FeatureCell value={row.enterprise} />
                          </div>
                        </td>
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-muted/40 px-4 py-1.5 text-xs font-medium text-foreground/70">
                <HelpCircle className="h-3.5 w-3.5" />
                Frequently asked questions
              </div>
              <h2 className="mt-5 text-2xl font-bold text-foreground md:text-3xl">
                Everything you need to know
              </h2>
              <p className="mt-3 text-foreground/70">
                Can&apos;t find what you&apos;re looking for?{" "}
                <Link href="/contact" className="font-medium text-brand-600 hover:underline">
                  Get in touch
                </Link>
                .
              </p>
            </div>

            <Accordion type="single" collapsible className="mt-10">
              {FAQS.map((faq, idx) => (
                <AccordionItem key={faq.q} value={`faq-${idx}`}>
                  <AccordionTrigger className="text-left text-base font-medium">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/70">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="border-t border-border/50 bg-muted/30 py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-3xl rounded-2xl border border-brand-200 bg-gradient-to-br from-brand-50 to-background p-8 text-center dark:border-brand-500/30 dark:from-brand-500/10 md:p-12">
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">
              Ready to build something great?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-foreground/70">
              Join thousands of contractors, companies, and workers already on the platform.
              Get started in under 5 minutes.
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-brand-500 text-white hover:bg-brand-600">
                <Link href="/register">Start free trial</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">Talk to sales</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}