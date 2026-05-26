import type { Metadata } from "next";
import Link from "next/link";
import {
  Search,
  MapPin,
  Briefcase,
  Filter,
  SlidersHorizontal,
  TrendingUp,
  X,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { JobCard } from "@/components/ui/JobCard";
import { EmptyState } from "@/components/ui/EmptyState";
import { Pagination } from "@/components/ui/Pagination";
import { JOBS } from "@/data/jobs";
import { WORKER_CATEGORIES } from "@/data/services";

export const metadata: Metadata = {
  title: "Construction Jobs in India — Apply to Verified Openings | ConstructHire",
  description:
    "Browse thousands of verified construction jobs across India. Filter by trade, location, experience, and salary. Apply in minutes.",
};

type SearchParams = {
  q?: string;
  location?: string;
  category?: string;
  type?: string;
  experience?: string;
  salary?: string;
  sort?: string;
  page?: string;
};

const JOB_TYPES = ["Full-time", "Contract", "Daily Wage", "Part-time", "Apprenticeship"];
const EXPERIENCE_LEVELS = ["Fresher", "Entry Level", "Mid Level", "Senior Level", "Expert"];
const SALARY_RANGES = [
  "Below ₹15K/mo",
  "₹15K – ₹30K/mo",
  "₹30K – ₹50K/mo",
  "₹50K – ₹1L/mo",
  "Above ₹1L/mo",
];
const SORT_OPTIONS = [
  { value: "relevance", label: "Most relevant" },
  { value: "newest", label: "Newest first" },
  { value: "salary-high", label: "Salary: High to low" },
  { value: "salary-low", label: "Salary: Low to high" },
];

const PAGE_SIZE = 12;

function salaryInRange(min: number, range: string): boolean {
  if (range === "Below ₹15K/mo") return min < 15000;
  if (range === "₹15K – ₹30K/mo") return min >= 15000 && min < 30000;
  if (range === "₹30K – ₹50K/mo") return min >= 30000 && min < 50000;
  if (range === "₹50K – ₹1L/mo") return min >= 50000 && min < 100000;
  if (range === "Above ₹1L/mo") return min >= 100000;
  return true;
}

export default function JobsListingPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const query = searchParams.q?.toLowerCase().trim() ?? "";
  const location = searchParams.location?.toLowerCase().trim() ?? "";
  const category = searchParams.category ?? "";
  const type = searchParams.type ?? "";
  const experience = searchParams.experience ?? "";
  const salary = searchParams.salary ?? "";
  const sort = searchParams.sort ?? "relevance";
  const page = Math.max(1, parseInt(searchParams.page ?? "1", 10));

  // Filter jobs
  let filtered = JOBS.filter((job) => {
    if (query) {
      const haystack = `${job.title} ${job.companyName} ${job.description} ${
        job.skills.join(" ")
      }`.toLowerCase();
      if (!haystack.includes(query)) return false;
    }

    if (location) {
      const jobLocation = `${job.location.city} ${job.location.state}`.toLowerCase();
      if (!jobLocation.includes(location)) return false;
    }

    if (category && job.category !== category) return false;
    if (type && job.jobType !== type) return false;
    if (experience && job.experienceLevel !== experience) return false;
    if (salary && !salaryInRange(job.salary.min, salary)) return false;

    return true;
  });

  // Sort
  if (sort === "newest") {
    filtered = [...filtered].sort(
      (a, b) => new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime()
    );
  } else if (sort === "salary-high") {
    filtered = [...filtered].sort((a, b) => b.salary.max - a.salary.max);
  } else if (sort === "salary-low") {
    filtered = [...filtered].sort((a, b) => a.salary.min - b.salary.min);
  }

  // Pagination
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const paginated = filtered.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);

  // Active filter chips
  const activeFilters: { label: string; key: keyof SearchParams }[] = [];
  if (query) activeFilters.push({ label: `"${query}"`, key: "q" });
  if (location) activeFilters.push({ label: location, key: "location" });
  if (category) activeFilters.push({ label: category, key: "category" });
  if (type) activeFilters.push({ label: type, key: "type" });
  if (experience) activeFilters.push({ label: experience, key: "experience" });
  if (salary) activeFilters.push({ label: salary, key: "salary" });

  const removeFilterHref = (keyToRemove: keyof SearchParams) => {
    const params = new URLSearchParams();
    Object.entries(searchParams).forEach(([k, v]) => {
      if (k !== keyToRemove && k !== "page" && v) params.set(k, String(v));
    });
    const qs = params.toString();
    return `/jobs${qs ? `?${qs}` : ""}`;
  };

  return (
    <div className="bg-background">
      {/* Hero with search */}
      <section className="gradient-hero grid-pattern-soft relative overflow-hidden border-b border-border/50">
        <Container>
          <div className="mx-auto max-w-4xl py-12 text-center md:py-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-xs font-medium text-brand-700 dark:bg-brand-500/10 dark:text-brand-300">
              <Briefcase className="h-3.5 w-3.5" />
              {JOBS.length.toLocaleString()}+ verified jobs
            </div>
            <h1 className="mt-5 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Find your next construction job
            </h1>
            <p className="mt-3 text-base text-foreground/70">
              Verified openings across {WORKER_CATEGORIES.length} trades, 180+ cities in India.
            </p>

            {/* Search bar */}
            <form action="/jobs" method="get" className="mx-auto mt-8 max-w-3xl">
              <div className="flex flex-col gap-2 rounded-2xl border border-border bg-background p-2 shadow-sm sm:flex-row">
                <div className="relative flex-1">
                  <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground/40" />
                  <input
                    name="q"
                    defaultValue={query}
                    type="text"
                    placeholder="Job title, skill, or company"
                    aria-label="Search jobs"
                    className="w-full rounded-lg border-0 bg-transparent py-3 pl-9 pr-3 text-sm focus:outline-none"
                  />
                </div>
                <div className="hidden h-auto w-px bg-border sm:block" />
                <div className="relative flex-1">
                  <MapPin className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground/40" />
                  <input
                    name="location"
                    defaultValue={location}
                    type="text"
                    placeholder="City or state"
                    aria-label="Location"
                    className="w-full rounded-lg border-0 bg-transparent py-3 pl-9 pr-3 text-sm focus:outline-none"
                  />
                </div>
                <Button type="submit" size="lg" className="bg-brand-500 text-white hover:bg-brand-600">
                  <Search className="mr-2 h-4 w-4" />
                  Search
                </Button>
              </div>
            </form>
          </div>
        </Container>
      </section>

      {/* Main layout */}
      <section className="py-10">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
            {/* Sidebar Filters */}
            <aside className="lg:sticky lg:top-24 lg:self-start">
              <form action="/jobs" method="get" className="rounded-xl border border-border/50 bg-background">
                {query && <input type="hidden" name="q" value={query} />}
                {location && <input type="hidden" name="location" value={location} />}

                <div className="flex items-center justify-between border-b border-border/40 p-5">
                  <div className="flex items-center gap-2">
                    <SlidersHorizontal className="h-4 w-4 text-foreground/60" />
                    <h2 className="text-sm font-semibold text-foreground">Filters</h2>
                  </div>
                  {activeFilters.length > 0 && (
                    <Link href="/jobs" className="text-xs font-medium text-brand-600 hover:underline">
                      Clear all
                    </Link>
                  )}
                </div>

                {/* Category */}
                <FilterGroup title="Trade / Category">
                  <select
                    name="category"
                    defaultValue={category}
                    className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:border-brand-500 focus:outline-none"
                  >
                    <option value="">All trades</option>
                    {WORKER_CATEGORIES.map((cat) => (
                      <option key={cat.slug} value={cat.slug}>
                        {cat.title}
                      </option>
                    ))}
                  </select>
                </FilterGroup>

                {/* Job type */}
                <FilterGroup title="Job type">
                  <div className="space-y-2">
                    {JOB_TYPES.map((t) => (
                      <label key={t} className="flex cursor-pointer items-center gap-2 text-sm text-foreground/80">
                        <input
                          type="radio"
                          name="type"
                          value={t}
                          defaultChecked={type === t}
                          className="h-4 w-4 border-border text-brand-500 focus:ring-brand-500"
                        />
                        {t}
                      </label>
                    ))}
                  </div>
                </FilterGroup>

                {/* Experience */}
                <FilterGroup title="Experience level">
                  <div className="space-y-2">
                    {EXPERIENCE_LEVELS.map((lvl) => (
                      <label key={lvl} className="flex cursor-pointer items-center gap-2 text-sm text-foreground/80">
                        <input
                          type="radio"
                          name="experience"
                          value={lvl}
                          defaultChecked={experience === lvl}
                          className="h-4 w-4 border-border text-brand-500 focus:ring-brand-500"
                        />
                        {lvl}
                      </label>
                    ))}
                  </div>
                </FilterGroup>

                {/* Salary */}
                <FilterGroup title="Salary range" last>
                  <div className="space-y-2">
                    {SALARY_RANGES.map((range) => (
                      <label key={range} className="flex cursor-pointer items-center gap-2 text-sm text-foreground/80">
                        <input
                          type="radio"
                          name="salary"
                          value={range}
                          defaultChecked={salary === range}
                          className="h-4 w-4 border-border text-brand-500 focus:ring-brand-500"
                        />
                        {range}
                      </label>
                    ))}
                  </div>
                </FilterGroup>

                <div className="border-t border-border/40 p-5">
                  <Button type="submit" className="w-full bg-brand-500 text-white hover:bg-brand-600">
                    Apply filters
                  </Button>
                </div>
              </form>
            </aside>

            {/* Results */}
            <div>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-foreground">
                    {filtered.length.toLocaleString()}{" "}
                    {filtered.length === 1 ? "job" : "jobs"} found
                  </h2>
                  {activeFilters.length > 0 && (
                    <p className="mt-1 text-sm text-foreground/60">Filtered by your search</p>
                  )}
                </div>

                {/* Sort */}
                <form action="/jobs" method="get" className="flex items-center gap-2">
                  {Object.entries(searchParams).map(([k, v]) =>
                    k !== "sort" && k !== "page" && v ? (
                      <input key={k} type="hidden" name={k} value={String(v)} />
                    ) : null
                  )}
                  <label htmlFor="sort" className="text-sm text-foreground/60">Sort:</label>
                  <select
                    id="sort"
                    name="sort"
                    defaultValue={sort}
                    className="rounded-lg border border-border bg-background px-3 py-2 text-sm focus:border-brand-500 focus:outline-none"
                  >
                    {SORT_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                  <noscript>
                    <Button type="submit" size="sm" variant="outline">Apply</Button>
                  </noscript>
                </form>
              </div>

              {/* Active filter chips */}
              {activeFilters.length > 0 && (
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <Filter className="h-3.5 w-3.5 text-foreground/40" />
                  {activeFilters.map((f) => (
                    <Link
                      key={`${f.key}-${f.label}`}
                      href={removeFilterHref(f.key)}
                      className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted px-3 py-1 text-xs text-foreground/80 hover:bg-muted/70"
                    >
                      {f.label}
                      <X className="h-3 w-3" />
                    </Link>
                  ))}
                </div>
              )}

              {/* Job list */}
              <div className="mt-6">
                {paginated.length === 0 ? (
                  <EmptyState
                    icon={Briefcase}
                    title="No jobs match your filters"
                    description="Try removing some filters, broadening your location, or searching for a different keyword."
                    action={{ label: "Clear all filters", href: "/jobs" }}
                  />
                ) : (
                  <div className="grid gap-4">
                    {paginated.map((job) => (
                      <JobCard key={job.id} job={job} variant="default" />
                    ))}
                  </div>
                )}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="mt-10">
                  <Pagination
                    currentPage={safePage}
                    totalPages={totalPages}
                    basePath="/jobs"
                    searchParams={Object.fromEntries(
                      Object.entries(searchParams).filter(([k]) => k !== "page")
                    )}
                  />
                </div>
              )}

              {/* Trending */}
              {paginated.length > 0 && (
                <div className="mt-12 rounded-xl border border-border/50 bg-muted/30 p-6">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-brand-500" />
                    <h3 className="text-sm font-semibold text-foreground">Trending searches</h3>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {[
                      "Electrician Mumbai",
                      "Site supervisor Bengaluru",
                      "Mason Pune",
                      "Welder Hyderabad",
                      "Plumber Delhi NCR",
                      "Foreman Chennai",
                      "Bar bender Ahmedabad",
                    ].map((term) => (
                      <Link
                        key={term}
                        href={`/jobs?q=${encodeURIComponent(term)}`}
                        className="inline-flex items-center gap-1 rounded-full border border-border bg-background px-3 py-1 text-xs text-foreground/70 hover:border-brand-200 hover:text-brand-600"
                      >
                        <Badge variant="secondary" className="bg-transparent px-0 text-xs">
                          {term}
                        </Badge>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

function FilterGroup({
  title,
  children,
  last,
}: {
  title: string;
  children: React.ReactNode;
  last?: boolean;
}) {
  return (
    <div className={`p-5 ${last ? "" : "border-b border-border/40"}`}>
      <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-foreground/60">
        {title}
      </h3>
      {children}
    </div>
  );
}