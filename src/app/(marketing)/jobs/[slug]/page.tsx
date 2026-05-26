import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Container } from '@/components/layout/Container';
import { JobCard } from '@/components/ui/JobCard';
import { Share2, Heart, MapPin, Users, CheckCircle, IndianRupee, Calendar, Building2 } from 'lucide-react';
import { JOBS, getJobsByCategory } from '@/data/jobs';
import { COMPANIES } from '@/data/companies';

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return JOBS.map((job) => ({
    slug: job.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const job = JOBS.find((j) => j.slug === params.slug);
  return {
    title: job ? `${job.title} at ${job.companyName} - ConstructHire` : 'Job Details - ConstructHire',
    description: job?.description ?? 'View detailed job information and apply now',
  };
}

function formatSalary(job: { salary: { min: number; max: number; period: string; currency: string } }): string {
  const { min, max, period } = job.salary;
  const fmt = (n: number) =>
    n >= 100000 ? `${(n / 100000).toFixed(1)}L` :
    n >= 1000 ? `${(n / 1000).toFixed(0)}K` : `${n}`;
  const periodLabel =
    period === 'monthly' ? '/month' :
    period === 'daily' ? '/day' :
    period === 'hourly' ? '/hour' : '/project';
  return `₹${fmt(min)} – ₹${fmt(max)} ${periodLabel}`;
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export default function JobDetailPage({ params }: PageProps) {
  const job = JOBS.find((j) => j.slug === params.slug);

  if (!job) {
    notFound();
  }

  const similarJobs = getJobsByCategory(job.category)
    .filter((j) => j.slug !== job.slug)
    .slice(0, 3);

  const company = COMPANIES.find((c) => c.id === job.companyId);
  const locationText = `${job.location.city}, ${job.location.state}`;
  const salaryText = formatSalary(job);

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-brand-50 to-background dark:from-brand-950/20 dark:to-background border-b border-border/30 py-12">
        <Container>
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <Badge className="bg-brand-100 text-brand-700 dark:bg-brand-900/30 dark:text-brand-400">
                {job.jobType}
              </Badge>
              <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                {job.experienceLevel}
              </Badge>
              {job.featured && (
                <Badge className="bg-brand-500 text-white">Featured</Badge>
              )}
              {job.urgent && (
                <Badge className="bg-yellow-400 text-yellow-900 dark:bg-yellow-500/30 dark:text-yellow-300 animate-pulse">
                  Urgent
                </Badge>
              )}
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              {job.title}
            </h1>
            <p className="text-xl text-foreground/70 mb-6">{job.companyName}</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>
                <p className="text-foreground/60 mb-1">Location</p>
                <div className="flex items-center gap-1.5 text-foreground font-semibold">
                  <MapPin size={15} className="shrink-0" />
                  {locationText}
                </div>
              </div>
              <div>
                <p className="text-foreground/60 mb-1">Salary</p>
                <div className="flex items-center gap-1.5 text-brand-600 dark:text-brand-400 font-bold">
                  <IndianRupee size={15} className="shrink-0" />
                  {salaryText}
                </div>
              </div>
              <div>
                <p className="text-foreground/60 mb-1">Openings</p>
                <div className="flex items-center gap-1.5 text-foreground font-semibold">
                  <Users size={15} className="shrink-0" />
                  {job.openings} position{job.openings !== 1 ? 's' : ''}
                </div>
              </div>
              <div>
                <p className="text-foreground/60 mb-1">Posted</p>
                <div className="flex items-center gap-1.5 text-foreground font-semibold">
                  <Calendar size={15} className="shrink-0" />
                  {formatDate(job.postedDate)}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Content */}
      <Container className="py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">

          {/* Description */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">About This Job</h2>
            <p className="text-foreground/80 leading-relaxed text-base">{job.description}</p>
          </section>

          {/* Responsibilities */}
          {job.responsibilities.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Responsibilities</h2>
              <ul className="space-y-3">
                {job.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-foreground/80">
                    <span className="text-brand-500 font-bold mt-1 shrink-0">•</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Requirements */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Requirements</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <CheckCircle size={18} className="text-green-600" />
                  Must Have
                </h3>
                <ul className="space-y-3">
                  {job.requirements.slice(0, Math.ceil(job.requirements.length / 2)).map((req, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-foreground/80">
                      <span className="text-brand-600 font-bold mt-1 shrink-0">•</span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Users size={18} className="text-blue-600" />
                  Nice to Have
                </h3>
                <ul className="space-y-3">
                  {job.requirements.slice(Math.ceil(job.requirements.length / 2)).map((req, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-foreground/80">
                      <span className="text-blue-600 font-bold mt-1 shrink-0">•</span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Benefits */}
          {job.benefits && job.benefits.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Benefits & Perks</h2>
              <div className="grid md:grid-cols-2 gap-3">
                {job.benefits.map((benefit, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-4 rounded-lg border border-border/50 bg-muted/30"
                  >
                    <CheckCircle size={18} className="text-green-600 shrink-0 mt-0.5" />
                    <span className="text-foreground/80 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Skills */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Key Skills</h2>
            <div className="flex flex-wrap gap-2">
              {job.skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="text-sm py-1.5 px-3">
                  {skill}
                </Badge>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 space-y-6">
            {/* Apply Card */}
            <div className="rounded-xl border border-border/50 bg-background p-6 space-y-4">
              <div>
                <p className="text-foreground/60 text-sm mb-1">Salary</p>
                <p className="text-xl font-bold text-brand-600 dark:text-brand-400">
                  {salaryText}
                </p>
              </div>

              {job.deadline && (
                <div>
                  <p className="text-foreground/60 text-sm mb-1">Apply Before</p>
                  <p className="font-semibold text-foreground">{formatDate(job.deadline)}</p>
                </div>
              )}

              <div>
                <p className="text-foreground/60 text-sm mb-1">Applicants</p>
                <p className="font-semibold text-foreground">{job.applicants} applied</p>
              </div>

              <Button className="w-full bg-brand-500 hover:bg-brand-600 text-white h-12 text-base">
                Apply Now
              </Button>

              <Button variant="outline" className="w-full">
                <Heart size={16} className="mr-2" />
                Save Job
              </Button>

              <div className="pt-4 border-t border-border/30">
                <p className="text-foreground/60 text-sm mb-3">Share this job</p>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    <Share2 size={15} />
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 text-xs">
                    LinkedIn
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 text-xs">
                    WhatsApp
                  </Button>
                </div>
              </div>
            </div>

            {/* Company Card */}
            {company && (
              <div className="rounded-xl border border-border/50 bg-background p-6">
                <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                  <Building2 size={18} className="text-brand-500" />
                  About the Company
                </h3>
                <p className="font-semibold text-foreground mb-1">{company.name}</p>
                <p className="text-sm text-foreground/60 mb-3">{company.tagline}</p>
                <div className="text-xs text-foreground/50 space-y-1 mb-4">
                  <p>{company.companyType} • {company.size} employees</p>
                  <p>{company.headquarters.city}, {company.headquarters.state}</p>
                </div>
                <Button variant="outline" className="w-full text-sm" asChild>
                  <a href={`/companies/${company.slug}`}>View Company Profile</a>
                </Button>
              </div>
            )}

            {/* Similar Jobs */}
            {similarJobs.length > 0 && (
              <div>
                <h3 className="text-lg font-bold text-foreground mb-4">Similar Jobs</h3>
                <div className="space-y-3">
                  {similarJobs.map((similarJob) => (
                    <JobCard key={similarJob.id} job={similarJob} variant="compact" />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </main>
  );
}