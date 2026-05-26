import { Button } from '@/components/ui/button';
import { LucideIcon } from 'lucide-react';

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description: string;
  action?: {
    label: string;
    href?: string;
    onClick?: () => void;
  };
}

export function EmptyState({
  icon: Icon,
  title,
  description,
  action,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4">
      <div className="mb-6 p-4 rounded-full bg-muted/50">
        <Icon size={48} className="text-foreground/40" />
      </div>

      <h3 className="text-2xl font-semibold text-foreground mb-2 text-center">
        {title}
      </h3>

      <p className="text-foreground/60 text-center max-w-md mb-8">
        {description}
      </p>

      {action && (
        <Button
          className="bg-brand-500 hover:bg-brand-600 text-white"
          onClick={action.onClick}
          asChild={!!action.href}
        >
          {action.href ? (
            <a href={action.href}>{action.label}</a>
          ) : (
            action.label
          )}
        </Button>
      )}
    </div>
  );
}