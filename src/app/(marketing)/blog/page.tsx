import type { Metadata } from "next";
import Link from "next/link";
import {
  Newspaper,
  Search,
  Clock,
  ArrowRight,
  User,
  TrendingUp,
  Tag,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Blog — Construction Industry Insights | ConstructHire",
  description:
    "News, insights, and how-to guides for India's construction workforce. Workforce trends, hiring tips, policy updates, and worker success stories.",
};

type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: "Industry" | "Hiring" | "Workers" | "Policy" | "Success Stories" | "Technology";
  author: {
    name: string;
    role: string;
    initials: string;
  };
  publishedAt: string;
  readTime: string;
  isFeatured?: boolean;
  coverColor: string;
};

const POSTS: BlogPost[] = [
  {
    id: "1",
    slug: "india-construction-workforce-2026-report",
    title: "The 2026 State of India's Construction Workforce",
    excerpt:
      "Our annual report analysing data from 60,000+ workers and 4,500 hiring companies across 180 cities. Wage growth, demand shifts, and what to expect in 2026.",
    category: "Industry",
    author: { name: "Aditi Sharma", role: "Head of Research", initials: "AS" },
    publishedAt: "Mar 20, 2026",
    readTime: "14 min read",
    isFeatured: true,
    coverColor: "from-brand-500 to-amber-500",
  },
  {
    id: "2",
    slug: "hire-electrician-mumbai-guide",
    title: "How to hire a verified electrician in Mumbai (without getting burned)",
    excerpt:
      "A practical guide for site managers and homeowners — what to look for, fair wage ranges by experience, red flags to avoid, and questions to ask.",
    category: "Hiring",
    author: { name: "Rohan Iyer", role: "Senior Editor", initials: "RI" },
    publishedAt: "Mar 18, 2026",
    readTime: "9 min read",
    coverColor: "from-blue-500 to-cyan-500",
  },
  {
    id: "3",
    slug: "from-helper-to-foreman-rajesh-story",
    title: "From helper to foreman: Rajesh's 4-year journey",
    excerpt:
      "Rajesh Kumar started as a daily-wage helper in Lucknow. Today he manages a 35-person crew. Here's exactly how he did it — and what he wishes he knew earlier.",
    category: "Success Stories",
    author: { name: "Priya Mehta", role: "Community Writer", initials: "PM" },
    publishedAt: "Mar 14, 2026",
    readTime: "11 min read",
    coverColor: "from-emerald-500 to-teal-500",
  },
  {
    id: "4",
    slug: "bocw-cess-explained-2026",
    title: "BOCW Welfare Cess explained: what changed in 2026",
    excerpt:
      "The Building and Other Construction Workers Welfare Cess rules were updated in January. Here's what employers, contractors, and workers need to know.",
    category: "Policy",
    author: { name: "Vikram Desai", role: "Compliance Lead", initials: "VD" },
    publishedAt: "Mar 10, 2026",
    readTime: "7 min read",
    coverColor: "from-purple-500 to-pink-500",
  },
  {
    id: "5",
    slug: "ai-construction-hiring-2026",
    title: "How AI is quietly reshaping construction hiring in India",
    excerpt:
      "From skill matching to wage benchmarking to fraud detection — a look at where AI is actually moving the needle (and where it's still mostly hype).",
    category: "Technology",
    author: { name: "Sneha Krishnan", role: "Product Marketing", initials: "SK" },
    publishedAt: "Mar 6, 2026",
    readTime: "10 min read",
    coverColor: "from-indigo-500 to-violet-500",
  },
  {
    id: "6",
    slug: "monsoon-safety-construction-sites",
    title: "Monsoon-ready: 12 site safety checks before the rains arrive",
    excerpt:
      "Slips, electrical hazards, and structural risks spike during monsoon. A checklist drawn from 200+ site safety audits across western India.",
    category: "Workers",
    author: { name: "Arjun Patil", role: "Safety Advisor", initials: "AP" },
    publishedAt: "Mar 2, 2026",
    readTime: "8 min read",
    coverColor: "from-amber-500 to-orange-500",
  },
  {
    id: "7",
    slug: "women-in-construction-india-2026",
    title: "Women in construction: where India stands and what's working",
    excerpt:
      "Only 12% of India's construction workforce is women — but the number is growing. We talked to 40 women on site about what changed their careers.",
    category: "Industry",
    author: { name: "Aditi Sharma", role: "Head of Research", initials: "AS" },
    publishedAt: "Feb 26, 2026",
    readTime: "13 min read",
    coverColor: "from-rose-500 to-pink-500",
  },
  {
    id: "8",
    slug: "small-contractor-cash-flow-tips",
    title: "5 cash flow tips every small contractor should steal",
    excerpt:
      "Late client payments are the #1 reason small contractors close shop. Five practical tactics from contractors who've built sustainable businesses.",
    category: "Hiring",
    author: { name: "Rohan Iyer", role: "Senior Editor", initials: "RI" },
    publishedAt: "Feb 22, 2026",
    readTime: "6 min read",
    coverColor: "from-emerald-500 to-lime-500",
  },
];

const CATEGORIES = ["All", "Industry", "Hiring", "Workers", "Policy", "Success Stories", "Technology"];

const categoryColors: Record<BlogPost["category"], string> = {
  Industry: "bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-300",
  Hiring: "bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-300",
  Workers: "bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-300",
  Policy: "bg-purple-50 text-purple-700 dark:bg-purple-500/10 dark:text-purple-300",
  "Success Stories": "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300",
  Technology: "bg-indigo-50 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300",
};

export default function BlogPage() {
  const featured = POSTS.find((p) => p.isFeatured);
  const rest = POSTS.filter((p) => !p.isFeatured);

  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="gradient-hero grid-pattern-soft relative overflow-hidden border-b border-border/50">
        <Container>
          <div className="mx-auto max-w-3xl py-16 text-center md:py-20">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-xs font-medium text-brand-700 dark:bg-brand-500/10 dark:text-brand-300">
              <Newspaper className="h-3.5 w-3.5" />
              The ConstructHire Blog
            </div>
            <h1 className="mt-6 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
              Insights from India&apos;s construction frontline
            </h1>
            <p className="mt-5 text-base text-foreground/70 md:text-lg">
              Industry trends, hiring playbooks, policy updates, and stories from the workers,
              contractors, and companies building India.
            </p>

            {/* Search */}
            <div className="mx-auto mt-8 max-w-xl">
              <div className="relative">
                <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-foreground/40" />
                <input
                  type="search"
                  placeholder="Search articles..."
                  aria-label="Search blog articles"
                  className="w-full rounded-full border border-border bg-background py-3 pl-12 pr-4 text-sm focus:border-brand-500 focus:outline-none"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Category Filter */}
      <section className="border-b border-border/50 bg-background/80 py-6 backdrop-blur-sm">
        <Container>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`rounded-full border px-4 py-1.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500 ${
                  cat === "All"
                    ? "border-brand-500 bg-brand-500 text-white"
                    : "border-border bg-background text-foreground/70 hover:border-brand-200 hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured Post */}
      {featured && (
        <section className="py-12 md:py-16">
          <Container>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-foreground/60">
              <TrendingUp className="h-3.5 w-3.5 text-brand-500" />
              Featured
            </div>
            <Link
              href={`/blog/${featured.slug}`}
              className="group mt-4 grid gap-6 overflow-hidden rounded-2xl border border-border/50 bg-background transition-all hover:border-brand-200 hover:shadow-card-hover md:grid-cols-2"
            >
              {/* Cover */}
              <div
                className={`relative aspect-[16/10] bg-gradient-to-br ${featured.coverColor} md:aspect-auto`}
              >
                <div className="absolute inset-0 grid-pattern-soft opacity-30" />
                <div className="absolute inset-0 flex items-end p-8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                    <Newspaper className="h-7 w-7 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center p-8 md:p-10">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className={categoryColors[featured.category]}>
                    {featured.category}
                  </Badge>
                  <span className="text-xs text-foreground/60">{featured.publishedAt}</span>
                </div>
                <h2 className="mt-4 text-2xl font-bold text-foreground group-hover:text-brand-600 md:text-3xl">
                  {featured.title}
                </h2>
                <p className="mt-4 text-foreground/70">{featured.excerpt}</p>

                <div className="mt-6 flex items-center justify-between border-t border-border/40 pt-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-50 text-sm font-semibold text-brand-700 dark:bg-brand-500/10 dark:text-brand-300">
                      {featured.author.initials}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-foreground">
                        {featured.author.name}
                      </div>
                      <div className="text-xs text-foreground/60">{featured.author.role}</div>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs text-foreground/60">
                    <Clock className="h-3 w-3" />
                    {featured.readTime}
                  </span>
                </div>
              </div>
            </Link>
          </Container>
        </section>
      )}

      {/* Post Grid */}
      <section className="border-t border-border/50 bg-muted/30 py-16 md:py-20">
        <Container>
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-bold text-foreground md:text-3xl">Latest articles</h2>
              <p className="mt-2 text-foreground/70">
                Fresh writing every week from our editorial team and industry guests.
              </p>
            </div>
          </div>

          {rest.length === 0 ? (
            <div className="mx-auto mt-12 flex max-w-md flex-col items-center rounded-xl border border-border/50 bg-background p-10 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted text-foreground/40">
                <Newspaper className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-foreground">No articles yet</h3>
              <p className="mt-2 text-sm text-foreground/60">
                We&apos;re working on the first batch. Subscribe below to be notified.
              </p>
            </div>
          ) : (
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="card-lift group flex flex-col overflow-hidden rounded-xl border border-border/50 bg-background transition-all hover:border-brand-200 hover:shadow-card-hover"
                >
                  {/* Cover */}
                  <div
                    className={`relative aspect-[16/9] bg-gradient-to-br ${post.coverColor}`}
                  >
                    <div className="absolute inset-0 grid-pattern-soft opacity-25" />
                    <div className="absolute left-4 top-4">
                      <Badge variant="secondary" className={categoryColors[post.category]}>
                        {post.category}
                      </Badge>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-lg font-semibold leading-snug text-foreground group-hover:text-brand-600">
                      {post.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm text-foreground/70 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="mt-5 flex items-center justify-between border-t border-border/40 pt-4">
                      <div className="flex items-center gap-2">
                        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-50 text-[10px] font-semibold text-brand-700 dark:bg-brand-500/10 dark:text-brand-300">
                          {post.author.initials}
                        </div>
                        <span className="text-xs text-foreground/70">{post.author.name}</span>
                      </div>
                      <span className="inline-flex items-center gap-1 text-xs text-foreground/60">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* Pagination placeholder */}
          {rest.length > 0 && (
            <div className="mt-12 flex items-center justify-center gap-2">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <span className="px-3 text-sm text-foreground/60">Page 1 of 4</span>
              <Button variant="outline" size="sm">
                Next <ArrowRight className="ml-1 h-3.5 w-3.5" />
              </Button>
            </div>
          )}
        </Container>
      </section>

      {/* Topics */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-muted/40 px-4 py-1.5 text-xs font-medium text-foreground/70">
              <Tag className="h-3.5 w-3.5" />
              Topics
            </div>
            <h2 className="mt-5 text-2xl font-bold text-foreground md:text-3xl">
              Browse by topic
            </h2>
          </div>

          <div className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2">
            {[
              "Wage Trends",
              "Hiring Tips",
              "Safety",
              "EPF & ESIC",
              "Skill Training",
              "Women in Trades",
              "Contractor Tips",
              "Site Management",
              "Worker Stories",
              "Policy Updates",
              "Tech & Tools",
              "BOCW Act",
            ].map((topic) => (
              <Link
                key={topic}
                href={`/blog/topic/${topic.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and")}`}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-4 py-2 text-sm text-foreground/70 transition-colors hover:border-brand-200 hover:text-brand-600"
              >
                <User className="h-3 w-3" />
                {topic}
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Newsletter CTA */}
      <section className="border-t border-border/50 bg-muted/30 py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-3xl rounded-2xl border border-brand-200 bg-gradient-to-br from-brand-50 to-background p-8 text-center dark:border-brand-500/30 dark:from-brand-500/10 md:p-12">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-500 text-white">
              <Newspaper className="h-6 w-6" />
            </div>
            <h2 className="mt-5 text-2xl font-bold text-foreground md:text-3xl">
              Subscribe to The Build
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-foreground/70">
              Our weekly newsletter for India&apos;s construction industry. Short, useful, and
              free. Read by 40,000+ professionals.
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
              One email a week. Unsubscribe anytime.
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}