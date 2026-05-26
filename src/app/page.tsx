import { Container } from '@/components/layout/Container';
import { SearchBar } from '@/components/ui/SearchBar';
import { JobCard } from '@/components/ui/JobCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Briefcase, Users, Building2, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { JOBS } from '@/data/jobs';
import { WORKER_CATEGORIES } from '@/data/services';
import { CLIENTS } from '@/data/clients';

export const metadata = {
  title: 'ConstructHire - Find Jobs, Hire Talent, Bid on Projects',
  description: 'India\'s leading construction workforce platform connecting workers, contractors, students, and companies',
};

export default function HomePage() {
  const featuredJobs = JOBS.filter((j) => j.featured).slice(0, 3);
  const allJobs = JOBS.slice(0, 6);
  const categories = WORKER_CATEGORIES.slice(0, 6);

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero dark:bg-gradient-to-br dark:from-brand-950/40 dark:via-background dark:to-background py-20 border-b border-border/30">
        <div className="absolute inset-0 grid-pattern-soft opacity-50" />
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <Badge className="mb-4 bg-brand-100 text-brand-700 dark:bg-brand-900/30 dark:text-brand-400">
                🚀 India's #1 Construction Platform
              </Badge>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
                Build. Hire. Grow.
              </h1>
              <p className="text-xl text-foreground/70 mb-8 max-w-xl leading-relaxed">
                Connect with thousands of verified construction professionals, find the right talent for your projects, or land your next opportunity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-brand-500 hover:bg-brand-600 text-white h-12 px-8 text-lg"
                  asChild
                >
                  <Link href="/jobs">
                    Browse Jobs <ArrowRight size={20} className="ml-2" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 px-8 text-lg"
                  asChild
                >
                  <Link href="/workers">
                    Find Workers
                  </Link>
                </Button>
              </div>
            </div>
            <div className="hidden lg:block relative h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-200 to-blue-200 dark:from-brand-900/40 dark:to-blue-900/40 rounded-2xl" />
              <div className="absolute inset-4 bg-background rounded-xl flex items-center justify-center">
                <span className="text-7xl">🏗️</span>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="mt-12">
            <SearchBar
              placeholder="Search jobs, skills, or trades..."
              action="jobs"
            />
          </div>
        </Container>
      </section>

      {/* Featured Companies */}
      <section className="py-16 border-b border-border/30">
        <Container>
          <p className="text-center text-foreground/60 mb-8">Trusted by leading companies</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center">
            {CLIENTS.slice(0, 6).map((client) => (
              <div
                key={client.id}
                className="flex items-center justify-center p-4 rounded-lg border border-border/30 bg-muted/30 hover:border-border/50 transition-all"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={120}
                  height={40}
                  className="max-w-full h-auto"
                />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Worker Categories */}
      <section className="py-20 border-b border-border/30">
        <Container>
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Popular Trades</h2>
            <p className="text-lg text-foreground/70 max-w-2xl">
              Find skilled professionals across all construction trades
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => {
              // FIX: assign to a capitalized variable so React renders it as a JSX element
              const Icon = category.icon;
              return (
                <Link
                  key={category.slug}
                  href={`/jobs?category=${category.slug}`}
                  className="group rounded-lg border border-border/50 bg-background p-4 text-center hover:border-brand-200 hover:shadow-card-hover transition-all"
                >
                  <div className="flex justify-center mb-3 group-hover:scale-110 transition-transform">
                    {/* FIX: was {category.icon} — must be <Icon /> to render as JSX */}
                    <Icon size={36} className="text-brand-600" />
                  </div>
                  <h3 className="font-semibold text-foreground group-hover:text-brand-600 transition-colors mb-1">
                    {/* FIX: was category.name (removed from type) — correct field is category.title */}
                    {category.title}
                  </h3>
                  <p className="text-xs text-foreground/60">{category.jobCount} jobs</p>
                </Link>
              );
            })}
          </div>
          <div className="mt-8 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/categories">
                View All 22+ Trades
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* Latest Jobs */}
      <section className="py-20 border-b border-border/30">
        <Container>
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Latest Job Opportunities</h2>
            <p className="text-lg text-foreground/70 max-w-2xl">
              Hundreds of companies posting new positions daily
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {allJobs.map((job) => (
              <JobCard key={job.id} job={job} variant="default" />
            ))}
          </div>
          <div className="text-center">
            <Button size="lg" className="bg-brand-500 hover:bg-brand-600 text-white h-12 px-8" asChild>
              <Link href="/jobs">
                View All Jobs
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-muted/30 border-b border-border/30">
        <Container>
          <h2 className="text-4xl font-bold text-foreground text-center mb-16">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Workers */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
                <Users size={28} className="text-brand-600" />
                For Workers
              </h3>
              <div className="space-y-6">
                {[
                  { num: 1, title: 'Create Profile', desc: 'Sign up and showcase your skills' },
                  { num: 2, title: 'Get Verified', desc: 'Earn certifications and ratings' },
                  { num: 3, title: 'Find Jobs', desc: 'Browse and apply to opportunities' },
                  { num: 4, title: 'Earn & Grow', desc: 'Build reputation and increase rates' },
                ].map((step) => (
                  <div key={step.num} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-brand-500 text-white flex items-center justify-center font-bold shrink-0">
                      {step.num}
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">{step.title}</h4>
                      <p className="text-foreground/70 text-sm">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Companies */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
                <Building2 size={28} className="text-brand-600" />
                For Companies
              </h3>
              <div className="space-y-6">
                {[
                  { num: 1, title: 'Post a Job', desc: 'List your opening with details' },
                  { num: 2, title: 'Receive Bids', desc: 'Get applications from verified workers' },
                  { num: 3, title: 'Hire Fast', desc: 'Choose and hire in hours' },
                  { num: 4, title: 'Manage Easy', desc: 'Track work and payments in one place' },
                ].map((step) => (
                  <div key={step.num} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-brand-500 text-white flex items-center justify-center font-bold shrink-0">
                      {step.num}
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">{step.title}</h4>
                      <p className="text-foreground/70 text-sm">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="py-20 border-b border-border/30">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '50K+', label: 'Active Workers' },
              { number: '10K+', label: 'Companies Hiring' },
              { number: '₹100Cr+', label: 'Wages Paid' },
              { number: '24/7', label: 'Support' },
            ].map((stat, idx) => (
              <div key={idx}>
                <h3 className="text-4xl md:text-5xl font-bold text-brand-600 dark:text-brand-400 mb-2">
                  {stat.number}
                </h3>
                <p className="text-foreground/70">{stat.label}</p>
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
              {
                name: 'Ramesh Kumar',
                role: 'Carpenter, Mumbai',
                text: 'ConstructHire helped me earn ₹3 lakhs last year. Fair pay, safe work, and excellent support.',
                avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=worker1',
              },
              {
                name: 'BuildCo Solutions',
                role: 'Company, Delhi',
                text: 'We reduced hiring time by 70% and found better quality workers. Highly recommended!',
                avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=company1',
              },
              {
                name: 'Priya Singh',
                role: 'Student, Bangalore',
                text: 'Got amazing internship experience and earned money. Perfect for career growth!',
                avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=student1',
              },
            ].map((testimonial, idx) => (
              <div key={idx} className="rounded-xl border border-border/50 bg-background p-8 hover:border-brand-200 hover:shadow-card-hover transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-12 h-12">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-foreground/60">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-foreground/80 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-brand-500 via-brand-600 to-brand-700 dark:from-brand-600 dark:to-brand-800">
        <Container className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Join thousands of workers, contractors, students, and companies on ConstructHire today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white hover:bg-gray-100 text-brand-600 font-bold h-12 px-8 text-lg"
              asChild
            >
              <Link href="/for-workers">For Workers</Link>
            </Button>
            <Button
              size="lg"
              className="bg-white hover:bg-gray-100 text-brand-600 font-bold h-12 px-8 text-lg"
              asChild
            >
              <Link href="/for-companies">For Companies</Link>
            </Button>
            <Button
              size="lg"
              className="bg-white hover:bg-gray-100 text-brand-600 font-bold h-12 px-8 text-lg"
              asChild
            >
              <Link href="/for-contractors">For Contractors</Link>
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}