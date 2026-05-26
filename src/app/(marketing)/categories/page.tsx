import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { WORKER_CATEGORIES, CATEGORY_STATS } from '@/data/services';

export const metadata = {
  title: 'Worker Categories - ConstructHire',
  description: 'Browse all construction worker categories and trades',
};

export default function CategoriesPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-br from-brand-50 to-background dark:from-brand-950/20 dark:to-background border-b border-border/30 py-16">
        <Container>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            All Worker Categories
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl">
            Explore all available construction trades and find the right professional for your project
          </p>
        </Container>
      </div>

      {/* Categories Grid */}
      <Container className="py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WORKER_CATEGORIES.map((category) => {
            const Icon = category.icon
            return (
              <Link
                key={category.slug}
                href={`/jobs?category=${category.slug}`}
                className="group rounded-xl border border-border/50 bg-background p-8 hover:border-brand-200 hover:shadow-card-hover transition-all h-full flex flex-col"
              >
                {/* Icon */}
                <div className={`mb-6 w-16 h-16 rounded-xl flex items-center justify-center transition-colors ${category.color}`}>
                  <Icon size={28} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground group-hover:text-brand-600 transition-colors mb-2">
                  {category.title}
                </h3>

                <p className="text-foreground/70 text-sm mb-4 flex-1">
                  {category.description}
                </p>

                {/* Stats */}
                <div className="flex items-center justify-between pt-4 border-t border-border/30 mb-4">
                  <Badge variant="secondary">
                    {category.jobCount.toLocaleString('en-IN')} jobs
                  </Badge>
                  <Badge
                    variant="outline"
                    className={
                      category.demandLevel === 'High'
                        ? 'border-green-500 text-green-600'
                        : category.demandLevel === 'Medium'
                        ? 'border-amber-500 text-amber-600'
                        : 'border-muted text-muted-foreground'
                    }
                  >
                    {category.demandLevel} Demand
                  </Badge>
                </div>

                {/* Avg Salary */}
                <p className="text-xs text-muted-foreground mb-4">
                  Avg: {category.avgSalary} / month
                </p>

                {/* CTA */}
                <Button
                  className="w-full bg-brand-500 hover:bg-brand-600 text-white"
                  size="sm"
                >
                  View Jobs
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
            )
          })}
        </div>
      </Container>

      {/* Info Section */}
      <section className="bg-muted/30 border-y border-border/30 py-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-3xl font-bold text-brand-600 dark:text-brand-400 mb-2">
                {CATEGORY_STATS.totalCategories}+
              </h3>
              <p className="text-foreground/70">Skilled trades available</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-brand-600 dark:text-brand-400 mb-2">
                10K+
              </h3>
              <p className="text-foreground/70">Verified professionals</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-brand-600 dark:text-brand-400 mb-2">
                24/7
              </h3>
              <p className="text-foreground/70">Hiring available</p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}