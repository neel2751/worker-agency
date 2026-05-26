import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Zap, BarChart3, Users, CheckCircle, FileText, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'For Companies - ConstructHire',
  description: 'Hire verified construction professionals fast',
};

export default function ForCompaniesPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <div className="bg-gradient-to-br from-purple-50 via-brand-50 to-background dark:from-purple-950/30 dark:via-brand-950/20 dark:to-background py-20 border-b border-border/30">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400">
                For Companies
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                Hire Verified Talent Instantly
              </h1>
              <p className="text-xl text-foreground/70 mb-8 leading-relaxed">
                Access India's largest verified construction workforce. Post jobs, receive bids, and hire in hours, not weeks.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-brand-500 hover:bg-brand-600 text-white h-12 px-8 text-lg" asChild>
                  <Link href="/auth/register?type=company">
                    Get Started
                    <ArrowRight size={18} className="ml-2" />
                  </Link>
                </Button>
                <Button variant="outline" className="h-12 px-8 text-lg">
                  Book Demo
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-gradient-to-br from-purple-200 to-brand-200 dark:from-purple-900/40 dark:to-brand-900/40 rounded-2xl h-96 flex items-center justify-center">
                <span className="text-6xl">🏢</span>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Features */}
      <section className="py-20 border-b border-border/30">
        <Container>
          <h2 className="text-4xl font-bold text-foreground text-center mb-16">
            Streamline Your Hiring
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-xl border border-border/50 bg-background p-8 hover:border-brand-200 hover:shadow-card-hover transition-all">
              <Zap size={32} className="text-brand-600 dark:text-brand-400 mb-4" />
              <h3 className="font-bold text-foreground mb-2 text-xl">Fast Hiring</h3>
              <p className="text-foreground/70">Post a job and get verified bids within hours. Fill positions faster than ever.</p>
            </div>
            <div className="rounded-xl border border-border/50 bg-background p-8 hover:border-brand-200 hover:shadow-card-hover transition-all">
              <Users size={32} className="text-brand-600 dark:text-brand-400 mb-4" />
              <h3 className="font-bold text-foreground mb-2 text-xl">Verified Talent</h3>
              <p className="text-foreground/70">Access pre-vetted professionals with ratings, certifications, and work history.</p>
            </div>
            <div className="rounded-xl border border-border/50 bg-background p-8 hover:border-brand-200 hover:shadow-card-hover transition-all">
              <BarChart3 size={32} className="text-brand-600 dark:text-brand-400 mb-4" />
              <h3 className="font-bold text-foreground mb-2 text-xl">Real Analytics</h3>
              <p className="text-foreground/70">Track hiring metrics, manage budgets, and optimize your workforce planning.</p>
            </div>
            <div className="rounded-xl border border-border/50 bg-background p-8 hover:border-brand-200 hover:shadow-card-hover transition-all">
              <FileText size={32} className="text-brand-600 dark:text-brand-400 mb-4" />
              <h3 className="font-bold text-foreground mb-2 text-xl">Compliance Ready</h3>
              <p className="text-foreground/70">Automated documentation, compliance tracking, and legal protection.</p>
            </div>
            <div className="rounded-xl border border-border/50 bg-background p-8 hover:border-brand-200 hover:shadow-card-hover transition-all">
              <CheckCircle size={32} className="text-brand-600 dark:text-brand-400 mb-4" />
              <h3 className="font-bold text-foreground mb-2 text-xl">Quality Assurance</h3>
              <p className="text-foreground/70">Ratings and reviews ensure consistent quality across all hires.</p>
            </div>
            <div className="rounded-xl border border-border/50 bg-background p-8 hover:border-brand-200 hover:shadow-card-hover transition-all">
              <Users size={32} className="text-brand-600 dark:text-brand-400 mb-4" />
              <h3 className="font-bold text-foreground mb-2 text-xl">Dedicated Support</h3>
              <p className="text-foreground/70">24/7 support team to help you navigate hiring and project management.</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-muted/30 border-b border-border/30">
        <Container>
          <h2 className="text-4xl font-bold text-foreground text-center mb-16">
            Simple, Transparent Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { name: 'Starter', price: 'Free', jobs: '1 free job/month', features: ['Hire workers', 'Basic analytics', 'Job posting'] },
              { name: 'Pro', price: '₹2,999', jobs: '25 jobs/month', features: ['Everything in Starter', 'Advanced analytics', 'Priority support', 'Custom workflows'] },
              { name: 'Enterprise', price: 'Custom', jobs: 'Unlimited', features: ['Everything in Pro', 'Dedicated manager', 'Custom integrations', 'Team accounts'] },
            ].map((plan) => (
              <div key={plan.name} className="rounded-xl border border-border/50 bg-background p-8 hover:border-brand-200 hover:shadow-card-hover transition-all">
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-3xl font-bold text-brand-600 dark:text-brand-400 mb-2">{plan.price}</p>
                <p className="text-sm text-foreground/60 mb-6">{plan.jobs}</p>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-green-600" />
                      <span className="text-foreground/80">{feat}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-brand-500 hover:bg-brand-600 text-white">
                  Get Started
                </Button>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 border-b border-border/30">
        <Container>
          <h2 className="text-4xl font-bold text-foreground text-center mb-16">
            Trusted by Top Companies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { company: 'BuildCo India', text: 'Reduced hiring time from 3 weeks to 3 days. Game changer for our projects.' },
              { company: 'UrbanDevelopers', text: 'Access to verified talent saved us money and improved project quality significantly.' },
              { company: 'GreenBuild Solutions', text: 'Best platform for construction hiring. Transparent pricing, professional workers.' },
            ].map((t, idx) => (
              <div key={idx} className="rounded-xl border border-border/50 bg-background p-6">
                <p className="text-foreground/80 mb-4">"{t.text}"</p>
                <p className="font-bold text-foreground">{t.company}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-brand-500 to-brand-600">
        <Container className="text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Hire Better?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join 1000+ companies already using ConstructHire to build faster.
          </p>
          <Button
            size="lg"
            className="bg-white hover:bg-gray-100 text-brand-600 font-bold h-12 px-8 text-lg"
            asChild
          >
            <Link href="/auth/register?type=company">
              Start Hiring Now
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </Button>
        </Container>
      </section>
    </main>
  );
}