import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { AlertCircle, CheckCircle, AlertTriangle } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface MissingSection {
  label: string;
  href: string;
}

interface ProfileCompletionBarProps {
  percentage: number;
  missingSections: MissingSection[];
}

export function ProfileCompletionBar({
  percentage,
  missingSections,
}: ProfileCompletionBarProps) {
  const getStatusColor = (percent: number) => {
    if (percent < 40) return { bg: 'bg-red-100', border: 'border-red-200', text: 'text-red-700', icon: AlertCircle };
    if (percent < 70) return { bg: 'bg-amber-100', border: 'border-amber-200', text: 'text-amber-700', icon: AlertTriangle };
    return { bg: 'bg-green-100', border: 'border-green-200', text: 'text-green-700', icon: CheckCircle };
  };

  const status = getStatusColor(percentage);
  const StatusIcon = status.icon;

  return (
    <div className={cn(
      'rounded-xl border p-6',
      status.bg,
      status.border,
      status.text
    )}>
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex items-center gap-3">
          <StatusIcon size={24} />
          <div>
            <h3 className="font-semibold text-lg">Complete Your Profile</h3>
            <p className="text-sm opacity-80">
              {percentage === 100
                ? 'Your profile is complete!'
                : `${100 - percentage}% profile remaining`}
            </p>
          </div>
        </div>
        <span className="text-2xl font-bold">{percentage}%</span>
      </div>

      <div className="mb-4">
        <Progress value={percentage} className="h-2" />
      </div>

      {missingSections.length > 0 && (
        <div className="space-y-2">
          <p className="text-sm font-medium mb-3">Missing sections:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {missingSections.map((section) => (
              <Link
                key={section.label}
                href={section.href}
                className="group flex items-center justify-between px-3 py-2 rounded-lg bg-white/50 hover:bg-white/80 transition-colors"
              >
                <span className="text-sm font-medium">{section.label}</span>
                <span className="text-xs opacity-60 group-hover:opacity-100 transition-opacity">
                  Complete →
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}