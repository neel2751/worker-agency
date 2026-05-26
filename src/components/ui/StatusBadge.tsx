import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

type StatusVariant = 'default' | 'subtle' | 'outline';

interface StatusBadgeProps {
  status: string;
  variant?: StatusVariant;
}

const STATUS_CONFIG: Record<string, Record<StatusVariant, string>> = {
  // Active/Approved states
  'Active': {
    default: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
    subtle: 'bg-green-50 text-green-700 dark:bg-green-900/10 dark:text-green-400',
    outline: 'border-green-300 text-green-700 dark:border-green-400 dark:text-green-400',
  },
  'Approved': {
    default: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
    subtle: 'bg-green-50 text-green-700 dark:bg-green-900/10 dark:text-green-400',
    outline: 'border-green-300 text-green-700 dark:border-green-400 dark:text-green-400',
  },
  'Hired': {
    default: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
    subtle: 'bg-green-50 text-green-700 dark:bg-green-900/10 dark:text-green-400',
    outline: 'border-green-300 text-green-700 dark:border-green-400 dark:text-green-400',
  },
  'Paid': {
    default: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
    subtle: 'bg-green-50 text-green-700 dark:bg-green-900/10 dark:text-green-400',
    outline: 'border-green-300 text-green-700 dark:border-green-400 dark:text-green-400',
  },

  // Pending/Review states
  'Pending': {
    default: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
    subtle: 'bg-amber-50 text-amber-700 dark:bg-amber-900/10 dark:text-amber-400',
    outline: 'border-amber-300 text-amber-700 dark:border-amber-400 dark:text-amber-400',
  },
  'In-Review': {
    default: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
    subtle: 'bg-amber-50 text-amber-700 dark:bg-amber-900/10 dark:text-amber-400',
    outline: 'border-amber-300 text-amber-700 dark:border-amber-400 dark:text-amber-400',
  },

  // Rejected/Failed states
  'Rejected': {
    default: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
    subtle: 'bg-red-50 text-red-700 dark:bg-red-900/10 dark:text-red-400',
    outline: 'border-red-300 text-red-700 dark:border-red-400 dark:text-red-400',
  },
  'Cancelled': {
    default: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
    subtle: 'bg-red-50 text-red-700 dark:bg-red-900/10 dark:text-red-400',
    outline: 'border-red-300 text-red-700 dark:border-red-400 dark:text-red-400',
  },
  'Failed': {
    default: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
    subtle: 'bg-red-50 text-red-700 dark:bg-red-900/10 dark:text-red-400',
    outline: 'border-red-300 text-red-700 dark:border-red-400 dark:text-red-400',
  },

  // Draft/New states
  'Draft': {
    default: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
    subtle: 'bg-blue-50 text-blue-700 dark:bg-blue-900/10 dark:text-blue-400',
    outline: 'border-blue-300 text-blue-700 dark:border-blue-400 dark:text-blue-400',
  },
  'New': {
    default: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
    subtle: 'bg-blue-50 text-blue-700 dark:bg-blue-900/10 dark:text-blue-400',
    outline: 'border-blue-300 text-blue-700 dark:border-blue-400 dark:text-blue-400',
  },

  // Urgent state
  'Urgent': {
    default: 'bg-yellow-400 text-yellow-900 dark:bg-yellow-500/30 dark:text-yellow-300 animate-pulse',
    subtle: 'bg-yellow-50 text-yellow-900 dark:bg-yellow-900/10 dark:text-yellow-300',
    outline: 'border-yellow-400 text-yellow-900 dark:border-yellow-400 dark:text-yellow-300',
  },

  // Featured state
  'Featured': {
    default: 'bg-brand-100 text-brand-700 dark:bg-brand-900/30 dark:text-brand-400',
    subtle: 'bg-brand-50 text-brand-700 dark:bg-brand-900/10 dark:text-brand-400',
    outline: 'border-brand-300 text-brand-700 dark:border-brand-400 dark:text-brand-400',
  },
};

export function StatusBadge({
  status,
  variant = 'default',
}: StatusBadgeProps) {
  const config = STATUS_CONFIG[status];
  const className = config
    ? config[variant]
    : 'bg-muted text-foreground/70 dark:bg-muted dark:text-foreground/60';

  return (
    <Badge
      className={cn(
        variant === 'outline' && 'border',
        className
      )}
    >
      {status}
    </Badge>
  );
}