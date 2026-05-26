import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Briefcase, IndianRupee } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import type { Job } from '@/data/jobs';

interface JobCardProps {
  job: Job;
  variant?: 'compact' | 'default' | 'featured';
}

const jobTypeColorMap: Record<string, string> = {
  'Full-time': 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
  'Part-time': 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
  'Contract': 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
  'Daily Wage': 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
  'Project-based': 'bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400',
  'Internship': 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400',
  'Apprenticeship': 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400',
};

const experienceColorMap: Record<string, string> = {
  'Fresher': 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
  'Entry Level': 'bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400',
  'Mid Level': 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
  'Senior Level': 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
  'Expert': 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400',
};

function formatSalary(job: Job): string {
  const { min, max, period, currency } = job.salary;
  const fmt = (n: number) =>
    n >= 100000
      ? `${(n / 100000).toFixed(1)}L`
      : n >= 1000
      ? `${(n / 1000).toFixed(0)}K`
      : `${n}`;
  const periodLabel =
    period === 'monthly' ? '/mo' :
    period === 'daily' ? '/day' :
    period === 'hourly' ? '/hr' : '/project';
  return `₹${fmt(min)} – ₹${fmt(max)}${periodLabel}`;
}

function formatPostedDate(dateStr: string): string {
  const posted = new Date(dateStr);
  const now = new Date();
  const diffDays = Math.floor((now.getTime() - posted.getTime()) / (1000 * 60 * 60 * 24));
  if (diffDays === 0) return 'Today';
  if (diffDays === 1) return 'Yesterday';
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)}w ago`;
  return `${Math.floor(diffDays / 30)}mo ago`;
}

export function JobCard({ job, variant = 'default' }: JobCardProps) {
  const displayedSkills = job.skills.slice(0, 4);
  const hiddenSkillsCount = Math.max(0, job.skills.length - 4);
  const salaryText = formatSalary(job);
  const postedText = formatPostedDate(job.postedDate);
  const locationText = `${job.location.city}, ${job.location.state}`;

  if (variant === 'compact') {
    return (
      <Link href={`/jobs/${job.slug}`}>
        <div className="group rounded-lg border border-border/50 bg-background p-4 hover:border-brand-200 hover:shadow-card-hover transition-all cursor-pointer">
          <div className="flex items-start justify-between gap-3 mb-2">
            <h3 className="font-semibold text-foreground group-hover:text-brand-600 transition-colors flex-1 line-clamp-1">
              {job.title}
            </h3>
            {job.urgent && (
              <Badge className="shrink-0 bg-yellow-400 text-yellow-900 dark:bg-yellow-500/30 dark:text-yellow-300">
                Urgent
              </Badge>
            )}
          </div>
          <p className="text-sm text-foreground/60 mb-2">{job.companyName}</p>
          <div className="flex flex-wrap gap-2 items-center text-xs text-foreground/50">
            <span className="flex items-center gap-1">
              <MapPin size={12} /> {locationText}
            </span>
            <span>•</span>
            <span>{job.jobType}</span>
            <span>•</span>
            <span>{salaryText}</span>
          </div>
        </div>
      </Link>
    );
  }

  if (variant === 'featured') {
    return (
      <Link href={`/jobs/${job.slug}`}>
        <div className={cn(
          'rounded-xl border-2 bg-gradient-to-br from-brand-50 to-background p-6 hover:border-brand-300 hover:shadow-lg transition-all cursor-pointer dark:from-brand-950/20 dark:to-background',
          job.featured ? 'border-brand-300' : 'border-border'
        )}>
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <h3 className="text-lg font-bold text-foreground">{job.title}</h3>
                {job.featured && (
                  <Badge className="bg-brand-500 text-white dark:bg-brand-600">Featured</Badge>
                )}
                {job.urgent && (
                  <Badge className="bg-yellow-400 text-yellow-900 dark:bg-yellow-500/30 dark:text-yellow-300">
                    Urgent
                  </Badge>
                )}
              </div>
              <p className="text-foreground/70 font-medium">{job.companyName}</p>
            </div>
            <div className="text-right shrink-0">
              <p className="text-xs text-foreground/60 mb-1">Salary</p>
              <p className="text-base font-bold text-brand-600 dark:text-brand-400">{salaryText}</p>
            </div>
          </div>

          <p className="text-foreground/70 text-sm mb-4 line-clamp-2">{job.description}</p>

          <div className="flex flex-wrap gap-4 mb-4 text-sm text-foreground/60">
            <span className="flex items-center gap-1.5">
              <MapPin size={15} /> {locationText}
            </span>
            <span className="flex items-center gap-1.5">
              <Briefcase size={15} /> {job.jobType}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={15} /> {job.experienceLevel}
            </span>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {displayedSkills.map((skill) => (
              <Badge key={skill} variant="secondary" className="text-xs">{skill}</Badge>
            ))}
            {hiddenSkillsCount > 0 && (
              <Badge variant="outline" className="text-xs">+{hiddenSkillsCount} more</Badge>
            )}
          </div>

          <Button className="w-full bg-brand-500 hover:bg-brand-600 text-white">
            View & Apply
          </Button>
        </div>
      </Link>
    );
  }

  // Default variant
  return (
    <Link href={`/jobs/${job.slug}`}>
      <div className="rounded-xl border border-border/50 bg-background p-6 hover:border-brand-200 hover:shadow-card-hover transition-all cursor-pointer group">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-foreground group-hover:text-brand-600 transition-colors mb-1 line-clamp-1">
              {job.title}
            </h3>
            <p className="text-foreground/70">{job.companyName}</p>
          </div>
          <div className="flex flex-col items-end gap-1.5 shrink-0">
            {job.urgent && (
              <Badge className="bg-yellow-400 text-yellow-900 dark:bg-yellow-500/30 dark:text-yellow-300 animate-pulse">
                Urgent
              </Badge>
            )}
            {job.featured && (
              <Badge className="bg-brand-100 text-brand-700 dark:bg-brand-900/30 dark:text-brand-400">
                Featured
              </Badge>
            )}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-3">
          <Badge className={cn('text-xs', jobTypeColorMap[job.jobType] ?? 'bg-muted text-foreground/70')}>
            {job.jobType}
          </Badge>
          <Badge className={cn('text-xs', experienceColorMap[job.experienceLevel] ?? 'bg-muted text-foreground/70')}>
            {job.experienceLevel}
          </Badge>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
          <div className="flex items-center gap-2 text-foreground/60">
            <MapPin size={15} className="shrink-0" />
            <span className="truncate">{locationText}</span>
          </div>
          <div className="flex items-center gap-2 text-foreground/60 font-medium">
            <IndianRupee size={15} className="shrink-0" />
            <span className="truncate">{salaryText}</span>
          </div>
        </div>

        <p className="text-foreground/70 text-sm mb-4 line-clamp-2">{job.description}</p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {displayedSkills.map((skill) => (
            <span
              key={skill}
              className="inline-flex items-center px-2.5 py-0.5 rounded-md bg-muted/50 text-xs text-foreground/70 border border-border/30"
            >
              {skill}
            </span>
          ))}
          {hiddenSkillsCount > 0 && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs text-foreground/60">
              +{hiddenSkillsCount} more
            </span>
          )}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-border/30">
          <div className="flex items-center gap-3 text-xs text-foreground/50">
            <span>{postedText}</span>
            {job.openings > 1 && (
              <span>{job.openings} openings</span>
            )}
          </div>
          <Button size="sm" className="bg-brand-500 hover:bg-brand-600 text-white" asChild>
            <span>Apply Now</span>
          </Button>
        </div>
      </div>
    </Link>
  );
}