'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Briefcase, Shield, Heart, Star } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import type { Company } from '@/data/companies';

interface CompanyCardProps {
  company: Company;
}

const companyTypeColorMap: Record<string, string> = {
  'Developer': 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
  'Contractor': 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
  'EPC': 'bg-brand-100 text-brand-700 dark:bg-brand-900/30 dark:text-brand-400',
  'Infrastructure': 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
  'Consultancy': 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
};

export function CompanyCard({ company }: CompanyCardProps) {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollow = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFollowing(!isFollowing);
  };

  const locationText = `${company.headquarters.city}, ${company.headquarters.state}`;

  return (
    <Link href={`/companies/${company.slug}`}>
      <div className="rounded-xl border border-border/50 bg-background p-6 hover:border-brand-200 hover:shadow-card-hover transition-all cursor-pointer group h-full flex flex-col">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="relative w-20 h-20 bg-white rounded-lg shrink-0 flex items-center justify-center overflow-hidden border border-border/30">
            <Image
              src={company.logo}
              alt={company.name}
              fill
              className="object-contain p-2"
            />
          </div>
          <button
            onClick={handleFollow}
            className="shrink-0 p-2 rounded-lg border border-border/50 hover:border-brand-300 hover:bg-muted transition-all"
            aria-label={isFollowing ? 'Unfollow' : 'Follow'}
          >
            <Heart
              size={18}
              className={isFollowing ? 'fill-red-500 text-red-500' : 'text-foreground/60'}
            />
          </button>
        </div>

        <div className="mb-3">
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <h3 className="text-lg font-semibold text-foreground group-hover:text-brand-600 transition-colors">
              {company.name}
            </h3>
            {company.verified && (
              <Badge className="shrink-0 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 flex items-center gap-1">
                <Shield size={12} /> Verified
              </Badge>
            )}
            {company.premium && (
              <Badge className="shrink-0 bg-brand-100 text-brand-700 dark:bg-brand-900/30 dark:text-brand-400">
                Premium
              </Badge>
            )}
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <Badge className={companyTypeColorMap[company.companyType] ?? 'bg-muted text-foreground/70'}>
              {company.companyType}
            </Badge>
            <span className="text-xs text-foreground/50">
              {company.industry.slice(0, 2).join(', ')}
            </span>
          </div>
        </div>

        <p className="text-foreground/60 text-sm mb-4 line-clamp-2 flex-1">
          {company.tagline}
        </p>

        <div className="space-y-2 mb-4 text-sm">
          <div className="flex items-center gap-2 text-foreground/70">
            <MapPin size={15} className="shrink-0" />
            <span>{locationText}</span>
          </div>
          <div className="flex items-center gap-2 text-foreground/70">
            <Briefcase size={15} className="shrink-0" />
            <span>{company.activeJobs} active job{company.activeJobs !== 1 ? 's' : ''}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-foreground/60 text-xs">
              Founded {company.founded}
            </span>
            <div className="flex items-center gap-1 text-xs text-amber-500">
              <Star size={12} className="fill-amber-400" />
              <span className="font-medium">{company.rating}</span>
              <span className="text-foreground/50">({company.reviewCount})</span>
            </div>
          </div>
        </div>

        <div className="flex gap-2 mt-auto">
          <Button
            size="sm"
            className="flex-1 bg-brand-500 hover:bg-brand-600 text-white"
            asChild
          >
            <span>View Company</span>
          </Button>
          <Button
            size="sm"
            variant="outline"
            asChild
            onClick={(e) => e.stopPropagation()}
          >
            <Link href={`/jobs?company=${company.id}`}>
              Jobs
            </Link>
          </Button>
        </div>
      </div>
    </Link>
  );
}