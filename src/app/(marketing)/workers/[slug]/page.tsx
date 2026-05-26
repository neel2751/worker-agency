import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Container } from '@/components/layout/Container';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Star, MapPin, Award, Heart, MessageSquare, Phone, Mail, Shield } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { WORKERS } from '@/data/workers';

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return WORKERS.map((worker) => ({
    slug: worker.slug,
  }));
}

export const metadata = {
  title: 'Worker Profile - ConstructHire',
  description: 'View worker profile and hire them',
};

export default function WorkerDetailPage({ params }: PageProps) {
  const worker = WORKERS.find((w) => w.slug === params.slug);

  if (!worker) {
    notFound();
  }

  const tradeLabel = worker.skills?.[0] ?? 'Construction Worker';

  const similarWorkers = WORKERS.filter(
    (w) => w.skills?.[0] === tradeLabel && w.slug !== worker.slug
  ).slice(0, 3);

  const isAvailableNow = worker.availability === 'Available Now';

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-brand-50 to-background dark:from-brand-950/20 dark:to-background border-b border-border/30 py-12">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Profile Card */}
            <div className="md:col-span-2">
              <div className="flex items-start gap-6 mb-6">
                <div className="relative w-32 h-32 shrink-0">
                  <Image
                    src={worker.avatar}
                    alt={worker.name}
                    fill
                    className="rounded-full object-cover border-4 border-brand-200 dark:border-brand-800"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-4xl font-bold text-foreground">{worker.name}</h1>
                    {worker.verified && (
                      <Shield size={28} className="text-green-600 dark:text-green-400" />
                    )}
                  </div>
                  {/* FIX: was worker.trade (doesn't exist) → derived tradeLabel */}
                  <p className="text-2xl text-brand-600 dark:text-brand-400 font-semibold mb-3">
                    {tradeLabel}
                  </p>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={18}
                            className={
                              i < Math.floor(worker.rating)
                                ? 'fill-amber-400 text-amber-400'
                                : 'text-foreground/30'
                            }
                          />
                        ))}
                      </div>
                      <span className="text-lg font-bold text-foreground">
                        {worker.rating.toFixed(1)}
                      </span>
                      <span className="text-sm text-foreground/60">
                        ({worker.reviewCount} reviews)
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {/* FIX: was worker.experience (object) → worker.experience.years */}
                    <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                      {worker.experience.years}+ years exp
                    </Badge>
                    {/* FIX: availability is now a longer string, check for "Available Now" */}
                    <Badge
                      className={
                        isAvailableNow
                          ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                          : 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
                      }
                    >
                      {worker.availability}
                    </Badge>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar Info */}
            <div className="md:col-span-1">
              <div className="rounded-xl border border-border/50 bg-background p-6 space-y-4">
                {/* FIX: worker.hourlyRate doesn't exist → use worker.hourlyRate if present, else omit safely */}
                {'hourlyRate' in worker && (
                  <div>
                    <p className="text-foreground/60 text-sm mb-2">Hourly Rate</p>
                    <p className="text-3xl font-bold text-brand-600 dark:text-brand-400">
                      ₹{(worker as any).hourlyRate}/hr
                    </p>
                  </div>
                )}
                <div>
                  <p className="text-foreground/60 text-sm mb-2">Location</p>
                  {/* FIX: worker.location is an object { city, state, willingToRelocate } */}
                  <p className="flex items-center gap-2 text-foreground font-semibold">
                    <MapPin size={16} />
                    {worker.location.city}, {worker.location.state}
                  </p>
                  {worker.location.willingToRelocate && (
                    <p className="text-xs text-foreground/50 mt-1">Willing to relocate</p>
                  )}
                </div>
                <Button className="w-full bg-brand-500 hover:bg-brand-600 text-white h-12">
                  <Phone size={18} className="mr-2" />
                  Hire Now
                </Button>
                <Button variant="outline" className="w-full">
                  <MessageSquare size={18} className="mr-2" />
                  Message
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Content Tabs */}
      <Container className="py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <Tabs defaultValue="about" className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
              <TabsTrigger value="certifications">Certs</TabsTrigger>
              <TabsTrigger value="history">History</TabsTrigger>
            </TabsList>

            <TabsContent value="about" className="mt-6 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">About</h2>
                <p className="text-foreground/80 leading-relaxed">
                  Experienced {tradeLabel} with {worker.experience.years}+ years of hands-on
                  experience in residential and commercial construction projects. Specialized in
                  quality work with attention to detail and customer satisfaction.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-foreground mb-4">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>Hindi</Badge>
                  <Badge>English</Badge>
                  <Badge>Gujarati</Badge>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-foreground mb-4">Tools &amp; Equipment</h3>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex items-center gap-2">
                    <span className="text-brand-600">•</span> Hand tools (hammer, drill, etc.)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-brand-600">•</span> Power tools
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-brand-600">•</span> Safety equipment (PPE)
                  </li>
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="portfolio" className="mt-6">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map((idx) => (
                  <div
                    key={idx}
                    className="relative aspect-square rounded-lg overflow-hidden border border-border/50 hover:border-brand-300 transition-all group cursor-pointer"
                  >
                    <Image
                      src={`https://images.unsplash.com/photo-${1500000000000 + idx}?w=500&h=500&fit=crop`}
                      alt={`Portfolio ${idx}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform"
                    />
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="reviews" className="mt-6 space-y-4">
              {[1, 2, 3].map((idx) => (
                <div key={idx} className="border border-border/50 rounded-lg p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-foreground">Client {idx}</h4>
                      <p className="text-sm text-foreground/60">2 weeks ago</p>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-foreground/80">
                    Excellent work! {worker.name} completed the project on time and within budget.
                    Very professional and reliable.
                  </p>
                </div>
              ))}
            </TabsContent>

            <TabsContent value="certifications" className="mt-6 space-y-4">
              {/* FIX: certifications is array of objects { name, issuer, year, verified } not strings */}
              {worker.certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-4 border border-border/50 rounded-lg"
                >
                  <Award size={24} className="text-brand-600 shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">{cert.name}</h4>
                    <p className="text-sm text-foreground/60">
                      {cert.issuer} · {cert.year}
                      {cert.verified && (
                        <span className="ml-2 text-green-600 dark:text-green-400">✓ Verified</span>
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </TabsContent>

            <TabsContent value="history" className="mt-6 space-y-4">
              <div className="space-y-4">
                {[1, 2, 3].map((idx) => (
                  <div key={idx} className="flex gap-4 p-4 border border-border/50 rounded-lg">
                    <div className="w-1 bg-brand-500 rounded-full shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Project {idx}</h4>
                      <p className="text-sm text-foreground/60">Completed • 3 months ago</p>
                      <p className="text-sm text-foreground/80 mt-2">
                        Residential renovation project involving carpentry and finishing work.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 rounded-xl border border-border/50 bg-background p-6 space-y-6">
            <div>
              <h3 className="font-bold text-foreground mb-3">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {worker.skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-border/30">
              <h3 className="font-bold text-foreground mb-3">Contact</h3>
              <Button variant="outline" className="w-full mb-2">
                <Mail size={16} className="mr-2" />
                Email
              </Button>
              <Button variant="outline" className="w-full">
                <Phone size={16} className="mr-2" />
                Call
              </Button>
            </div>
          </div>

          {/* Similar Workers */}
          <div className="mt-8">
            <h3 className="text-lg font-bold text-foreground mb-4">Similar Workers</h3>
            <div className="space-y-4">
              {similarWorkers.slice(0, 2).map((w) => (
                <Link key={w.id} href={`/workers/${w.slug}`}>
                  <div className="flex gap-3 p-4 rounded-lg border border-border/50 hover:border-brand-200 transition-all cursor-pointer group">
                    <div className="relative w-12 h-12 shrink-0">
                      <Image
                        src={w.avatar}
                        alt={w.name}
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-foreground group-hover:text-brand-600 truncate">
                        {w.name}
                      </p>
                      <div className="flex items-center gap-1 mt-1">
                        <Star size={12} className="fill-amber-400 text-amber-400" />
                        <span className="text-xs text-foreground/60">{w.rating}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}