import type { Metadata } from "next";
import Link from "next/link";
import {
  HelpCircle,
  Search,
  User,
  Briefcase,
  Building2,
  CreditCard,
  Shield,
  Settings,
  MessageCircle,
  FileText,
  Phone,
  Mail,
  ArrowRight,
  TrendingUp,
  Sparkles,
  HardHat,
  GraduationCap,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Help Center — Get Support | ConstructHire",
  description:
    "Find answers, guides, and support for using ConstructHire. Browse by category or search our knowledge base.",
};

type HelpCategory = {
  id: string;
  icon: typeof User;
  title: string;
  description: string;
  articleCount: number;
  href: string;
  color: string;
};

const CATEGORIES: HelpCategory[] = [
  {
    id: "getting-started",
    icon: Sparkles,
    title: "Getting started",
    description: "Account setup, first steps, and platform basics",
    articleCount: 18,
    href: "/help/getting-started",
    color: "bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-300",
  },
  {
    id: "for-workers",
    icon: HardHat,
    title: "For workers",
    description: "Building your profile, applying to jobs, getting paid",
    articleCount: 32,
    href: "/help/for-workers",
    color: "bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-300",
  },
  {
    id: "for-students",
    icon: GraduationCap,
    title: "For students",
    description: "Internships, training, and starting your career",
    articleCount: 14,
    href: "/help/for-students",
    color: "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300",
  },
  {
    id: "for-contractors",
    icon: Briefcase,
    title: "For contractors",
    description: "Posting jobs, hiring workers, managing projects",
    articleCount: 27,
    href: "/help/for-contractors",
    color: "bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-300",
  },
  {
    id: "for-companies",
    icon: Building2,
    title: "For companies",
    description: "Team accounts, bulk hiring, analytics, integrations",
    articleCount: 23,
    href: "/help/for-companies",
    color: "bg-purple-50 text-purple-700 dark:bg-purple-500/10 dark:text-purple-300",
  },
  {
    id: "billing",
    icon: CreditCard,
    title: "Billing & payments",
    description: "Subscriptions, invoices, refunds, GST",
    articleCount: 16,
    href: "/help/billing",
    color: "bg-rose-50 text-rose-700 dark:bg-rose-500/10 dark:text-rose-300",
  },
  {
    id: "trust-safety",
    icon: Shield,
    title: "Trust & safety",
    description: "Verification, reporting issues, dispute resolution",
    articleCount: 12,
    href: "/help/trust-safety",
    color: "bg-indigo-50 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300",
  },
  {
    id: "account-settings",
    icon: Settings,
    title: "Account & settings",
    description: "Privacy controls, notifications, language preferences",
    articleCount: 19,
    href: "/help/account-settings",
    color: "bg-cyan-50 text-cyan-700 dark:bg-cyan-500/10 dark:text-cyan-300",
  },
];

type PopularArticle = {
  id: string;
  title: string;
  category: string;
  href: string;
  views: string;
};

const POPULAR_ARTICLES: PopularArticle[] = [
  {
    id: "1",
    title: "How to verify my Aadhaar and unlock the verified badge",
    category: "Trust & Safety",
    href: "/help/articles/aadhaar-verification",
    views: "32K",
  },
  {
    id: "2",
    title: "Adding photos to my work portfolio (without losing quality)",
    category: "For Workers",
    href: "/help/articles/portfolio-photos",
    views: "28K",
  },
  {
    id: "3",
    title: "How to post your first job and get applications fast",
    category: "For Contractors",
    href: "/help/articles/first-job-post",
    views: "24K",
  },
  {
    id: "4",
    title: "Why my payment failed and how to fix it",
    category: "Billing",
    href: "/help/articles/payment-failed",
    views: "21K",
  },
  {
    id: "5",
    title: "Switching languages — Hindi, English, Tamil, and more",
    category: "Account & Settings",
    href: "/help/articles/change-language",
    views: "19K",
  },
  {
    id: "6",
    title: "Reporting a worker or contractor who broke the rules",
    category: "Trust & Safety",
    href: "/help/articles/report-user",
    views: "17K",
  },
  {
    id: "7",
    title: "Understanding wage benchmarks for your trade",
    category: "For Workers",
    href: "/help/articles/wage-benchmarks",
    views: "15K",
  },
  {
    id: "8",
    title: "Inviting team members to your company account",
    category: "For Companies",
    href: "/help/articles/invite-team",
    views: "13K",
  },
];

const QUICK_LINKS = [
  { label: "Pricing plans", href: "/pricing", icon: CreditCard },
  { label: "Terms of Service", href: "/legal/terms", icon: FileText },
  { label: "Privacy Policy", href: "/legal/privacy", icon: Shield },
  { label: "Refund Policy", href: "/legal/refund", icon: CreditCard },
  { label: "Resources & guides", href: "/resources", icon: FileText },
  { label: "Become a partner", href: "/partners", icon: Building2 },
];

export default function HelpCenterPage() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="gradient-hero grid-pattern-soft relative overflow-hidden border-b border-border/50">
        <Container>
          <div className="mx-auto max-w-3xl py-16 text-center md:py-24">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-xs font-medium text-brand-700 dark:bg-brand-500/10 dark:text-brand-300">
              <HelpCircle className="h-3.5 w-3.5" />
              Help Center
            </div>
            <h1 className="mt-6 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
              How can we help?
            </h1>
            <p className="mt-5 text-base text-foreground/70 md:text-lg">
              Browse 160+ articles, watch video walkthroughs, or reach out to our support team.
              Most questions get answered in under 2 minutes.
            </p>

            {/* Search */}
            <div className="mx-auto mt-8 max-w-xl">
              <div className="relative">
                <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-foreground/40" />
                <input
                  type="search"
                  placeholder="Search articles, e.g. 'change password'"
                  aria-label="Search help articles"
                  className="w-full rounded-full border border-border bg-background py-3.5 pl-12 pr-4 text-sm focus:border-brand-500 focus:outline-none"
                />
              </div>
              <p className="mt-3 text-xs text-foreground/60">
                Popular:{" "}
                <Link href="/help/articles/aadhaar-verification" className="text-brand-600 hover:underline">
                  Aadhaar verification
                </Link>
                {", "}
                <Link href="/help/articles/payment-failed" className="text-brand-600 hover:underline">
                  payment failed
                </Link>
                {", "}
                <Link href="/help/articles/first-job-post" className="text-brand-600 hover:underline">
                  post a job
                </Link>
              </p>
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
              Pick the category that matches what you&apos;re trying to do.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              return (
                <Link
                  key={cat.id}
                  href={cat.href}
                  className="card-lift group rounded-xl border border-border/50 bg-background p-6 transition-all hover:border-brand-200 hover:shadow-card-hover"
                >
                  <div className={`flex h-11 w-11 items-center justify-center rounded-lg ${cat.color}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-base font-semibold text-foreground group-hover:text-brand-600">
                    {cat.title}
                  </h3>
                  <p className="mt-2 text-sm text-foreground/70">{cat.description}</p>
                  <div className="mt-4 flex items-center justify-between border-t border-border/40 pt-4">
                    <span className="text-xs text-foreground/60">
                      {cat.articleCount} articles
                    </span>
                    <ArrowRight className="h-4 w-4 text-foreground/40 transition-all group-hover:translate-x-1 group-hover:text-brand-600" />
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Popular Articles */}
      <section className="border-y border-border/50 bg-muted/30 py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-5xl">
            <div className="flex items-end justify-between">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-background px-4 py-1.5 text-xs font-medium text-foreground/70">
                  <TrendingUp className="h-3.5 w-3.5" />
                  Most viewed
                </div>
                <h2 className="mt-4 text-2xl font-bold text-foreground md:text-3xl">
                  Popular articles
                </h2>
              </div>
              <Button asChild variant="outline" className="hidden sm:inline-flex">
                <Link href="/help/all">
                  All articles <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="mt-8 overflow-hidden rounded-xl border border-border/50 bg-background">
              <ul className="divide-y divide-border/30">
                {POPULAR_ARTICLES.map((article, idx) => (
                  <li key={article.id}>
                    <Link
                      href={article.href}
                      className="group flex items-center gap-4 p-5 transition-colors hover:bg-muted/40"
                    >
                      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-muted text-xs font-semibold text-foreground/60">
                        {idx + 1}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-medium text-foreground group-hover:text-brand-600 sm:text-base">
                          {article.title}
                        </h3>
                        <div className="mt-1 flex items-center gap-2 text-xs text-foreground/60">
                          <Badge variant="secondary" className="bg-muted text-foreground/70">
                            {article.category}
                          </Badge>
                          <span>{article.views} views</span>
                        </div>
                      </div>
                      <ArrowRight className="hidden h-4 w-4 flex-shrink-0 text-foreground/40 transition-all group-hover:translate-x-1 group-hover:text-brand-600 sm:block" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 text-center sm:hidden">
              <Button asChild variant="outline">
                <Link href="/help/all">
                  All articles <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Quick Links */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                Quick links
              </h2>
              <p className="mt-3 text-foreground/70">
                Other things people frequently look for.
              </p>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {QUICK_LINKS.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="group flex items-center gap-3 rounded-lg border border-border/50 bg-background p-4 transition-colors hover:border-brand-200 hover:bg-muted/30"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted text-foreground/70 group-hover:bg-brand-50 group-hover:text-brand-600 dark:group-hover:bg-brand-500/10 dark:group-hover:text-brand-300">
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="flex-1 text-sm font-medium text-foreground group-hover:text-brand-600">
                      {link.label}
                    </span>
                    <ArrowRight className="h-4 w-4 text-foreground/40 transition-all group-hover:translate-x-1 group-hover:text-brand-600" />
                  </Link>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* Contact Support */}
      <section className="border-t border-border/50 bg-muted/30 py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                Still need help?
              </h2>
              <p className="mt-3 text-foreground/70">
                Our support team is available 7 days a week.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {/* Chat */}
              <div className="rounded-xl border border-border/50 bg-background p-6 text-center transition-all hover:border-brand-200 hover:shadow-card-hover">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-300">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-foreground">Live chat</h3>
                <p className="mt-2 text-sm text-foreground/70">
                  Talk to a real person in under 3 minutes. Available 9 AM – 9 PM IST.
                </p>
                <Button className="mt-5 w-full bg-brand-500 text-white hover:bg-brand-600">
                  Start chat
                </Button>
              </div>

              {/* Email */}
              <div className="rounded-xl border border-border/50 bg-background p-6 text-center transition-all hover:border-brand-200 hover:shadow-card-hover">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-300">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-foreground">Email us</h3>
                <p className="mt-2 text-sm text-foreground/70">
                  Send us a detailed query. We reply within 8 business hours.
                </p>
                <Button asChild variant="outline" className="mt-5 w-full">
                  <Link href="mailto:support@constructhire.in">support@constructhire.in</Link>
                </Button>
              </div>

              {/* Phone */}
              <div className="rounded-xl border border-border/50 bg-background p-6 text-center transition-all hover:border-brand-200 hover:shadow-card-hover">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-300">
                  <Phone className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-foreground">Call support</h3>
                <p className="mt-2 text-sm text-foreground/70">
                  Hindi & English. Mon–Sat, 10 AM – 7 PM IST. Toll-free in India.
                </p>
                <Button asChild variant="outline" className="mt-5 w-full">
                  <Link href="tel:18001234567">1800-123-4567</Link>
                </Button>
              </div>
            </div>

            <div className="mt-10 rounded-xl border border-border/50 bg-background p-6 text-center">
              <h3 className="text-base font-semibold text-foreground">
                For Premium & Enterprise customers
              </h3>
              <p className="mt-2 text-sm text-foreground/70">
                You get priority support with faster response times. Sign in to your account and
                use the priority queue, or reach out to your dedicated account manager directly.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}