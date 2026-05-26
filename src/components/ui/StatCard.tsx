import { LucideIcon, TrendingUp, TrendingDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StatCardProps {
  icon: LucideIcon;
  label: string;
  value: string | number;
  change?: {
    value: number;
    trend: 'up' | 'down';
  };
  hint?: string;
}

export function StatCard({
  icon: Icon,
  label,
  value,
  change,
  hint,
}: StatCardProps) {
  return (
    <div className="rounded-xl border border-border/50 bg-background p-6 hover:border-brand-200 hover:shadow-card-hover transition-all">
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 rounded-lg bg-brand-100 dark:bg-brand-900/20">
          <Icon size={24} className="text-brand-600 dark:text-brand-400" />
        </div>
        {change && (
          <div
            className={cn(
              'flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-semibold',
              change.trend === 'up'
                ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
            )}
          >
            {change.trend === 'up' ? (
              <TrendingUp size={14} />
            ) : (
              <TrendingDown size={14} />
            )}
            {change.trend === 'up' ? '+' : '-'}
            {change.value}%
          </div>
        )}
      </div>

      <div className="mb-2">
        <p className="text-foreground/60 text-sm mb-1">{label}</p>
        <h3 className="text-3xl font-bold text-foreground">{value}</h3>
      </div>

      {hint && (
        <p className="text-xs text-foreground/50">{hint}</p>
      )}
    </div>
  );
}