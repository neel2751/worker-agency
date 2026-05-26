import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, MapPin, Clock, Shield } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface Worker {
  id: string;
  slug: string;
  name: string;
  // FIX: trade is not on the data model — derived externally and passed in
  trade: string;
  // FIX: experience is { years, level } in data — accept both shapes
  experience: number | { years: number; level: string };
  // FIX: location is { city, state, willingToRelocate } in data — accept both shapes
  location: string | { city: string; state: string; willingToRelocate: boolean };
  rating: number;
  reviewCount: number;
  avatar: string;
  // FIX: availability has more values in data than the original union
  availability: string;
  skills: string[];
  // FIX: certifications are objects in data, not strings
  certifications: Array<string | { name: string; issuer: string; year: number; verified: boolean }>;
  portfolio?: Array<string | { title: string; image: string; description: string }>;
  hourlyRate?: number;
  isVerified?: boolean;
  verified?: boolean; // data uses `verified`, card uses `isVerified` — accept both
}

interface WorkerCardProps {
  worker: Worker;
  variant?: 'compact' | 'default';
}

const availabilityColorMap: Record<string, string> = {
  'Available Now':    'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
  'Available':        'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
  'Busy':             'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
  'On Project':       'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
  'Available in 15 days': 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
  'Available in 30 days': 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
  'Not Available':    'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
};

// Helper: normalise experience to a plain number
function getExperienceYears(exp: Worker['experience']): number {
  return typeof exp === 'number' ? exp : exp.years;
}

// Helper: normalise location to a display string
function getLocationString(loc: Worker['location']): string {
  return typeof loc === 'string' ? loc : `${loc.city}, ${loc.state}`;
}

// Helper: count certifications regardless of shape
function getCertCount(certs: Worker['certifications']): number {
  return certs.length;
}

export function WorkerCard({ worker, variant = 'default' }: WorkerCardProps) {
  const displayedSkills = worker.skills.slice(0, 3);
  const hiddenSkillsCount = Math.max(0, worker.skills.length - 3);
  const isVerified = worker.isVerified ?? worker.verified ?? false;
  const experienceYears = getExperienceYears(worker.experience);
  const locationString = getLocationString(worker.location);
  const certCount = getCertCount(worker.certifications);

  if (variant === 'compact') {
    return (
      <Link href={`/workers/${worker.slug}`}>
        <div className="rounded-lg border border-border/50 bg-background p-4 hover:border-brand-200 hover:shadow-card-hover transition-all cursor-pointer group">
          <div className="flex items-start gap-3 mb-3">
            <div className="relative w-12 h-12 shrink-0">
              <Image
                src={worker.avatar}
                alt={worker.name}
                fill
                className="rounded-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <h3 className="font-semibold text-foreground group-hover:text-brand-600 transition-colors truncate">
                  {worker.name}
                </h3>
                {isVerified && (
                  <Shield size={14} className="text-green-600 dark:text-green-400 shrink-0" />
                )}
              </div>
              <p className="text-xs text-foreground/60">{worker.trade}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm mb-2">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className={i < Math.floor(worker.rating) ? 'fill-amber-400 text-amber-400' : 'text-foreground/30'}
                />
              ))}
            </div>
            <span className="text-xs text-foreground/60">({worker.reviewCount})</span>
          </div>
          <div className="text-xs text-foreground/50 flex items-center gap-1">
            <MapPin size={12} /> {locationString}
          </div>
        </div>
      </Link>
    );
  }

  // Default variant
  return (
    <Link href={`/workers/${worker.slug}`}>
      <div className="rounded-xl border border-border/50 bg-background p-6 hover:border-brand-200 hover:shadow-card-hover transition-all cursor-pointer group">
        <div className="flex items-start gap-4 mb-4">
          <div className="relative w-20 h-20 shrink-0">
            <Image
              src={worker.avatar}
              alt={worker.name}
              fill
              className="rounded-full object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2 mb-2">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-brand-600 transition-colors">
                    {worker.name}
                  </h3>
                  {isVerified && (
                    <Badge className="shrink-0 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 flex items-center gap-1">
                      <Shield size={14} /> Verified
                    </Badge>
                  )}
                </div>
                <p className="text-foreground/70 font-medium">{worker.trade}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 mb-3">
              <div className="flex items-center gap-1.5">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < Math.floor(worker.rating) ? 'fill-amber-400 text-amber-400' : 'text-foreground/30'}
                    />
                  ))}
                </div>
                <span className="text-sm font-medium text-foreground">
                  {worker.rating.toFixed(1)}
                </span>
              </div>
              <span className="text-xs text-foreground/60">
                ({worker.reviewCount} reviews)
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-3 mb-4">
          <div className="flex items-center gap-2 text-sm text-foreground/70">
            <Clock size={16} className="shrink-0" />
            <span>{experienceYears}+ years experience</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-foreground/70">
            <MapPin size={16} className="shrink-0" />
            <span>{locationString}</span>
          </div>
        </div>

        <div className="mb-4 flex items-center gap-2">
          <Badge className={cn('text-xs', availabilityColorMap[worker.availability] ?? 'bg-muted text-muted-foreground')}>
            {worker.availability}
          </Badge>
          {worker.hourlyRate && (
            <span className="text-sm font-semibold text-brand-600 dark:text-brand-400">
              ₹{worker.hourlyRate}/hr
            </span>
          )}
        </div>

        <div className="mb-4">
          <p className="text-xs text-foreground/60 font-medium mb-2">Skills</p>
          <div className="flex flex-wrap gap-1.5">
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
                +{hiddenSkillsCount}
              </span>
            )}
          </div>
        </div>

        {certCount > 0 && (
          <div className="mb-4">
            <p className="text-xs text-foreground/60 font-medium mb-2">
              {certCount} Certification{certCount !== 1 ? 's' : ''}
            </p>
          </div>
        )}

        <Button className="w-full bg-brand-500 hover:bg-brand-600 text-white">
          View Profile
        </Button>
      </div>
    </Link>
  );
}