import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Lock, TrendingUp, BarChart3, Shield, Users, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'For Contractors - ConstructHire',
  description: 'Find projects and grow your contracting business',
};

export default function ForContractorsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <div className="bg-gradient-to-br from-amber-50 via-brand-50 to-background dark:from-amber-950/30 dark:via-brand-950/20 dark:to-background py-20 border-b border-border/30">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
                For Contractors
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                More Projects, Better Margins
              </h1>
              <p className="text-xl text-foreground/70 mb-8 leading-relaxed">
                Connect with clients directly, bid on projects, and grow your contracting business. Payment protection guaranteed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-brand-500 hover:bg-brand-600 text-white h-12 px-8 text-lg" asChild>
                  <Link href="/auth/register?type=contractor">
                    Find Projects
                    <ArrowRight size={18} className="ml-2" />
                  </Link>
                </Button>
                <Button variant="outline" className="h-12 px-8 text-lg">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-gradient-to-br from-amber-200 to-brand-200 dark:from-amber-900/40 dark:to-brand-900/40 rounded-2xl h-96 flex items-center justify-center">
                <span className="text-6xl">👷‍♂️</span>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Features */}
      <section className="py-20 border-b border-border/30">
        <Container>
          <h2 className="text-4xl font-bold text-foreground text-center mb-16">
            Why Contractors Love Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="rounded-xl border border-border/50 bg-background p-6 hover:border-brand-200 hover:shadow-card-hover transition-all">
              <Briefcase size={28} className="text-brand-600 dark:text-brand-400 mb-4" />
              <h3 className="font-bold text-foreground mb-2 text-lg">Project Pipeline</h3>
              <p className="text-foreground/70">Continuous flow of residential, commercial, and infrastructure projects.</p>
            </div>
            <div className="rounded-xl border border-border/50 bg-background p-6 hover:border-brand-200 hover:shadow-card-hover transition-all">
              <Lock size={28} className="text-brand-600 dark:text-brand-400 mb-4" />
              <h3 className="font-bold text-foreground mb-2 text-lg">Payment Protection</h3>
              <p className="text-foreground/70">Escrow system ensures payment on completion. No risk, no disputes.</p>
            </div>
            <div className="rounded-xl border border-border/50 bg-background p-6 hover:border-brand-200 hover:shadow-card-hover transition-all">
              <TrendingUp size={28} className="text-brand-600 dark:text-brand-400 mb-4" />
              <h3 className="font-bold text-foreground mb-2 text-lg">Grow Your Business</h3>
              <p className="text-foreground/70">Build reputation, get repeat clients, increase margins through platform.</p>
            </div>
            <div className="rounded-xl border border-border/50 bg-background p-6 hover:border-brand-200 hover:shadow-card-hover transition-all">
              <Shield size={28} className="text-brand-600 dark:text-brand-400 mb-4" />
              <h3 className="font-bold text-foreground mb-2 text-lg">Verified Clients</h3>
              <p className="text-foreground/70">Work only with verified, legitimate clients. Avoid scams and unreliable payers.</p>
            </div>
            <div className="rounded-xl border border-border/50 bg-background p-6 hover:border-brand-200 hover:shadow-card-hover transition-all">
              <Users size={28} className="text-brand-600 dark:text-brand-400 mb-4" />
              <h3 className="font-bold text-foreground mb-2 text-lg">Worker Network</h3>
              <p className="text-foreground/70">Access our network of vetted workers for your projects.</p>
            </div>
            <div className="rounded-xl border border-border/50 bg-background p-6 hover:border-brand-200 hover:shadow-card-hover transition-all">
              <BarChart3 size={28} className="text-brand-600 dark:text-brand-400 mb-4" />
              <h3 className="font-bold text-foreground mb-2 text-lg">Project Management</h3>
              <p className="text-foreground/70">Tools to manage timelines, budgets, and team communication.</p>
            </div>
          </div>
        </Container>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-muted/30 border-b border-border/30">
        <Container>
          <h2 className="text-4xl font-bold text-foreground text-center mb-16">
            Get Started in 4 Steps
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: 1, title: 'Create Profile', desc: 'Set up your contractor profile with portfolio' },
              { step: 2, title: 'Browse Projects', desc: 'Find projects that match your expertise' },
              { step: 3, title: 'Submit Bid', desc: 'Quote your price and timeline' },
              { step: 4, title: 'Win & Deliver', desc: 'Get selected and deliver quality work' },
            ].map((item) => (
              <div key={item.step}>
                <div className="w-14 h-14 rounded-full bg-brand-500 text-white flex items-center justify-center font-bold text-xl mx-auto mb-3">
                  {item.step}
                </div>
                <h3 className="font-bold text-foreground text-center mb-2">{item.title}</h3>
                <p className="text-foreground/70 text-sm text-center">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Project Types */}
      <section className="py-20 border-b border-border/30">
        <Container>
          <h2 className="text-4xl font-bold text-foreground text-center mb-16">
            Types of Projects Available
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {['Residential', 'Commercial', 'Infrastructure', 'Renovation', 'Civil Works', 'Electrical', 'Plumbing', 'Painting'].map((type) => (
              <div key={type} className="rounded-lg border border-border/50 bg-background p-6 text-center hover:border-brand-200 transition-all">
                <h4 className="font-semibold text-foreground">{type}</h4>
                <p className="text-sm text-foreground/60 mt-2">Many projects available</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="py-20 border-b border-border/30">
        <Container>
          <h2 className="text-4xl font-bold text-foreground text-center mb-16">
            Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Arjun Singh', text: 'Going from 2-3 projects/year to 10+. Revenue increased by 200%.' },
              { name: 'Pradeep Kumar', text: 'Love the payment protection. No more bad debts or payment delays.' },
              { name: 'Rajesh Contractor', text: 'Built my reputation through ConstructHire. Premium clients now seek me out.' },
            ].map((t, idx) => (
              <div key={idx} className="rounded-xl border border-border/50 bg-background p-6 hover:border-brand-200 transition-all">
                <p className="text-foreground/80 mb-4">"{t.text}"</p>
                <p className="font-bold text-foreground">{t.name}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-brand-500 to-brand-600">
        <Container className="text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join contractors earning 2x more through ConstructHire.
          </p>
          <Button
            size="lg"
            className="bg-white hover:bg-gray-100 text-brand-600 font-bold h-12 px-8 text-lg"
            asChild
          >
            <Link href="/auth/register?type=contractor">
              Register as Contractor
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </Button>
        </Container>
      </section>
    </main>
  );
}