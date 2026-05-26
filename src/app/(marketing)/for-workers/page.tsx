import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Shield, TrendingUp, Clock, DollarSign, Users, MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'For Workers - ConstructHire',
  description: 'Find verified construction jobs and grow your career',
};

export default function ForWorkersPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <div className="bg-gradient-to-br from-green-50 via-brand-50 to-background dark:from-green-950/30 dark:via-brand-950/20 dark:to-background py-20 border-b border-border/30">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                For Workers
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                सही काम, उचित कीमत
              </h1>
              <p className="text-xl text-foreground/70 mb-8 leading-relaxed">
                Find verified construction jobs, build your reputation, and grow your earnings. Payment protection guaranteed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-brand-500 hover:bg-brand-600 text-white h-12 px-8 text-lg" asChild>
                  <Link href="/auth/register?type=worker">
                    Find Jobs Now
                    <ArrowRight size={18} className="ml-2" />
                  </Link>
                </Button>
                <Button variant="outline" className="h-12 px-8 text-lg">
                  Download App
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-gradient-to-br from-green-200 to-brand-200 dark:from-green-900/40 dark:to-brand-900/40 rounded-2xl h-96 flex items-center justify-center">
                <span className="text-6xl">👷</span>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Features Grid */}
      <section className="py-20 border-b border-border/30">
        <Container>
          <h2 className="text-4xl font-bold text-foreground text-center mb-16">
            Why Workers Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="rounded-xl border border-border/50 bg-background p-6 hover:border-brand-200 hover:shadow-card-hover transition-all">
              <Shield size={28} className="text-green-600 dark:text-green-400 mb-4" />
              <h3 className="font-bold text-foreground mb-2 text-lg">Verified Jobs Only</h3>
              <p className="text-foreground/70">100% verified clients and safe, genuine work. No scams.</p>
            </div>
            <div className="rounded-xl border border-border/50 bg-background p-6 hover:border-brand-200 hover:shadow-card-hover transition-all">
              <DollarSign size={28} className="text-green-600 dark:text-green-400 mb-4" />
              <h3 className="font-bold text-foreground mb-2 text-lg">Fast Payments</h3>
              <p className="text-foreground/70">Get paid within 24 hours. No delays, no hassles.</p>
            </div>
            <div className="rounded-xl border border-border/50 bg-background p-6 hover:border-brand-200 hover:shadow-card-hover transition-all">
              <TrendingUp size={28} className="text-green-600 dark:text-green-400 mb-4" />
              <h3 className="font-bold text-foreground mb-2 text-lg">Build Your Reputation</h3>
              <p className="text-foreground/70">Earn ratings and get more high-paying jobs over time.</p>
            </div>
            <div className="rounded-xl border border-border/50 bg-background p-6 hover:border-brand-200 hover:shadow-card-hover transition-all">
              <Clock size={28} className="text-green-600 dark:text-green-400 mb-4" />
              <h3 className="font-bold text-foreground mb-2 text-lg">Flexible Scheduling</h3>
              <p className="text-foreground/70">Choose jobs that fit your availability. Work your way.</p>
            </div>
            <div className="rounded-xl border border-border/50 bg-background p-6 hover:border-brand-200 hover:shadow-card-hover transition-all">
              <Users size={28} className="text-green-600 dark:text-green-400 mb-4" />
              <h3 className="font-bold text-foreground mb-2 text-lg">Skill Verification</h3>
              <p className="text-foreground/70">Get certified and earn higher rates. Stand out from others.</p>
            </div>
            <div className="rounded-xl border border-border/50 bg-background p-6 hover:border-brand-200 hover:shadow-card-hover transition-all">
              <MapPin size={28} className="text-green-600 dark:text-green-400 mb-4" />
              <h3 className="font-bold text-foreground mb-2 text-lg">Jobs Near You</h3>
              <p className="text-foreground/70">Find work in your location. Less commute, more earnings.</p>
            </div>
          </div>
        </Container>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-muted/30 border-b border-border/30">
        <Container>
          <h2 className="text-4xl font-bold text-foreground text-center mb-16">
            Get Started in 3 Steps
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: 1, title: 'Create Profile', desc: 'Add your trade, experience, and availability' },
              { step: 2, title: 'Get Verified', desc: 'Complete skill verification for better jobs' },
              { step: 3, title: 'Start Earning', desc: 'Apply for jobs and get paid fast' },
            ].map((item) => (
              <div key={item.step}>
                <div className="w-16 h-16 rounded-full bg-brand-500 text-white flex items-center justify-center font-bold text-2xl mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-foreground text-center mb-2 text-lg">{item.title}</h3>
                <p className="text-foreground/70 text-center">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* App Download */}
      <section className="py-20 border-b border-border/30">
        <Container>
          <h2 className="text-4xl font-bold text-foreground text-center mb-6">
            Download ConstructHire App
          </h2>
          <p className="text-lg text-foreground/70 text-center max-w-2xl mx-auto mb-12">
            Find and manage jobs on the go. Available on iOS and Android.
          </p>
          <div className="flex justify-center gap-4">
            <Button className="bg-black text-white hover:bg-black/90 h-12 px-6" size="lg">
              📱 Google Play
            </Button>
            <Button className="bg-black text-white hover:bg-black/90 h-12 px-6" size="lg">
              🍎 App Store
            </Button>
          </div>
        </Container>
      </section>

      {/* Worker Testimonials */}
      <section className="py-20 border-b border-border/30">
        <Container>
          <h2 className="text-4xl font-bold text-foreground text-center mb-16">
            Trusted by 10,000+ Workers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Ramesh', location: 'Mumbai', text: 'अब मुझे महीने में ₹80,000 तक कमाने को मिलता है। काम सुरक्षित है।' },
              { name: 'Vikram', location: 'Delhi', text: 'Payment on time, work is verified, clients are professional. Best platform!' },
              { name: 'Suresh', location: 'Bangalore', text: 'Finally a platform that respects workers. Fair pay, safe jobs, great support.' },
            ].map((t, idx) => (
              <div key={idx} className="rounded-xl border border-border/50 bg-background p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-amber-400">★</span>
                  ))}
                </div>
                <p className="text-foreground/80 mb-4">"{t.text}"</p>
                <div className="pt-4 border-t border-border/30">
                  <p className="font-bold text-foreground">{t.name}</p>
                  <p className="text-sm text-foreground/60">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-brand-500 to-brand-600">
        <Container className="text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Start Earning Today
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Thousands of workers are already earning through ConstructHire. Join them now!
          </p>
          <Button
            size="lg"
            className="bg-white hover:bg-gray-100 text-brand-600 font-bold h-12 px-8 text-lg"
            asChild
          >
            <Link href="/auth/register?type=worker">
              Register as Worker
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </Button>
        </Container>
      </section>
    </main>
  );
}