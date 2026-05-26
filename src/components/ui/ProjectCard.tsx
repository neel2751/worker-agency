import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Calendar, Users, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface Project {
  id: string;
  slug: string;
  title: string;
  budget: string;
  timeline: string;
  bidsCount: number;
  location: string;
  category: string;
  description: string;
  postedBy: string;
}

interface ProjectCardProps {
  project: Project;
}

const categoryColorMap: Record<string, string> = {
  'Residential': 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
  'Commercial': 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
  'Infrastructure': 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
  'Industrial': 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400',
  'Renovation': 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <div className="rounded-xl border border-border/50 bg-background p-6 hover:border-brand-200 hover:shadow-card-hover transition-all cursor-pointer group">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="text-lg font-semibold text-foreground group-hover:text-brand-600 transition-colors flex-1">
            {project.title}
          </h3>
          <Badge className={cn('text-xs shrink-0', categoryColorMap[project.category] || 'bg-muted text-foreground/70')}>
            {project.category}
          </Badge>
        </div>

        <p className="text-foreground/70 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="space-y-1">
            <p className="text-xs text-foreground/60 font-medium">Budget</p>
            <p className="text-lg font-bold text-brand-600 dark:text-brand-400">
              {project.budget}
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-xs text-foreground/60 font-medium">Timeline</p>
            <p className="font-semibold text-foreground">{project.timeline}</p>
          </div>
        </div>

        <div className="space-y-2 mb-4 text-sm">
          <div className="flex items-center gap-2 text-foreground/70">
            <MapPin size={16} className="shrink-0" />
            <span>{project.location}</span>
          </div>
          <div className="flex items-center gap-2 text-foreground/70">
            <Users size={16} className="shrink-0" />
            <span>{project.bidsCount} bid{project.bidsCount !== 1 ? 's' : ''}</span>
          </div>
          <div className="text-xs text-foreground/60">
            Posted by {project.postedBy}
          </div>
        </div>

        <Button className="w-full bg-brand-500 hover:bg-brand-600 text-white">
          View & Bid
        </Button>
      </div>
    </Link>
  );
}