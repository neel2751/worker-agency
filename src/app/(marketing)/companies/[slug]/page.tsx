import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Container } from '@/components/layout/Container';
import { JobCard } from '@/components/ui/JobCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MapPin, Globe, Users, Heart, Share2, Shield, Star, Building2, Briefcase } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { COMPANIES } from '@/data/companies';
import { getJobsByCompany } from '@/data/jobs';

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return COMPANIES.map((company) => ({
    slug: company.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const company = COMPANIES.find((c) => c.slug === params.slug);
  return {
    title: company ? `${company.name} - ConstructHire` : 'Company Profile - ConstructHire',
    description: company?.tagline ?? 'View company profile and job openings',
  };
}

export default function CompanyDetailPage({ params }: PageProps) {
  const company = COMPANIES.find((c) => c.slug === params.slug);

  if (!company) {
    notFound();
  }

  const companyJobs = getJobsByCompany(company.id).slice(0, 6);

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-brand-50 to-background dark:from-brand-950/20 dark:to-background border-b border-border/30 py-12">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-start gap-6 mb-6">
                <div className="relative w-32 h-32 bg-white rounded-lg shrink-0 flex items-center justify-center overflow-hidden border border-border">
                  <Image
                    src={company.logo}
                    alt={company.name}
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                      {company.name}
                    </h1>
                    {company.verified && (
                      <Shield size={24} className="text-green-600 dark:text-green-400 shrink-0" />
                    )}
                  </div>
                  <p className="text-base text-foreground/70 mb-1">{company.tagline}</p>
                  <p className="text-sm text-foreground/60 mb-3">
                    {company.companyType} • {company.industry.join(', ')}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                      {company.size} employees
                    </Badge>
                    <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                      {company.activeJobs} active jobs
                    </Badge>
                    <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400">
                      Since {company.founded}
                    </Badge>
                    {company.premium && (
                      <Badge className="bg-brand-100 text-brand-700 dark:bg-brand-900/30 dark:text-brand-400">
                        Premium
                      </Badge>
                    )}
                  </div>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < Math.round(company.rating) ? 'text-amber-400 fill-amber-400' : 'text-muted-foreground'}
                    />
                  ))}
                </div>
                <span className="font-semibold text-foreground">{company.rating}</span>
                <span className="text-sm text-foreground/60">({company.reviewCount} reviews)</span>
                <span className="text-sm text-foreground/60">• {company.followers.toLocaleString('en-IN')} followers</span>
              </div>
            </div>

            {/* Sidebar Card */}
            <div className="md:col-span-1">
              <div className="rounded-xl border border-border/50 bg-background p-6 space-y-4">
                <div className="flex items-center gap-2 text-foreground">
                  <MapPin size={16} className="text-brand-500 shrink-0" />
                  <span className="font-medium">
                    {company.headquarters.city}, {company.headquarters.state}
                  </span>
                </div>
                {company.branches && company.branches.length > 0 && (
                  <div>
                    <p className="text-xs text-foreground/60 mb-1">Also in</p>
                    <p className="text-sm text-foreground/80">
                      {company.branches.map((b) => b.city).join(' • ')}
                    </p>
                  </div>
                )}
                <Button className="w-full bg-brand-500 hover:bg-brand-600 text-white h-11">
                  Follow Company
                </Button>
                <Button variant="outline" className="w-full">
                  <Heart size={16} className="mr-2" />
                  Save
                </Button>
                {company.website && (
                  <Button variant="outline" className="w-full" asChild>
                    <a href={company.website} target="_blank" rel="noopener noreferrer">
                      <Globe size={16} className="mr-2" />
                      Visit Website
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Content */}
      <Container className="py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <Tabs defaultValue="about" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="jobs">
                Jobs ({companyJobs.length})
              </TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
              <TabsTrigger value="photos">Photos</TabsTrigger>
            </TabsList>

            {/* About Tab */}
            <TabsContent value="about" className="mt-6 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">About {company.name}</h2>
                <p className="text-foreground/80 leading-relaxed">{company.about}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-5 rounded-lg border border-border/50 bg-muted/30">
                  <p className="text-sm text-foreground/60 mb-1">Founded</p>
                  <p className="text-lg text-brand-600 dark:text-brand-400 font-semibold">
                    {company.founded}
                  </p>
                </div>
                <div className="p-5 rounded-lg border border-border/50 bg-muted/30">
                  <p className="text-sm text-foreground/60 mb-1">Company Size</p>
                  <p className="text-lg text-brand-600 dark:text-brand-400 font-semibold">
                    {company.size} employees
                  </p>
                </div>
                <div className="p-5 rounded-lg border border-border/50 bg-muted/30">
                  <p className="text-sm text-foreground/60 mb-1">Company Type</p>
                  <p className="text-lg text-brand-600 dark:text-brand-400 font-semibold">
                    {company.companyType}
                  </p>
                </div>
                <div className="p-5 rounded-lg border border-border/50 bg-muted/30">
                  <p className="text-sm text-foreground/60 mb-1">Total Hires</p>
                  <p className="text-lg text-brand-600 dark:text-brand-400 font-semibold">
                    {company.totalHires.toLocaleString('en-IN')}+
                  </p>
                </div>
              </div>

              {/* Specialties */}
              {company.specialties.length > 0 && (
                <div>
                  <h3 className="font-bold text-foreground mb-3">Specialties</h3>
                  <div className="flex flex-wrap gap-2">
                    {company.specialties.map((s) => (
                      <Badge key={s} variant="secondary">{s}</Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Certifications */}
              {company.certifications && company.certifications.length > 0 && (
                <div>
                  <h3 className="font-bold text-foreground mb-3">Certifications</h3>
                  <div className="flex flex-wrap gap-2">
                    {company.certifications.map((c) => (
                      <Badge key={c} className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                        {c}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Awards */}
              {company.awards && company.awards.length > 0 && (
                <div>
                  <h3 className="font-bold text-foreground mb-3">Awards</h3>
                  <ul className="space-y-2">
                    {company.awards.map((a) => (
                      <li key={a} className="flex items-center gap-2 text-foreground/80 text-sm">
                        <Star size={14} className="text-amber-400 fill-amber-400 shrink-0" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </TabsContent>

            {/* Jobs Tab */}
            <TabsContent value="jobs" className="mt-6 space-y-4">
              {companyJobs.length > 0 ? (
                <>
                  {companyJobs.map((job) => (
                    <JobCard key={job.id} job={job} variant="default" />
                  ))}
                  <div className="text-center pt-4">
                    <Button variant="outline" asChild>
                      <Link href={`/jobs?company=${company.id}`}>
                        View all {company.activeJobs} jobs
                      </Link>
                    </Button>
                  </div>
                </>
              ) : (
                <div className="text-center py-12">
                  <Briefcase size={40} className="mx-auto text-muted-foreground mb-3" />
                  <p className="text-foreground/60">No active jobs posted yet</p>
                </div>
              )}
            </TabsContent>

            {/* Reviews Tab */}
            <TabsContent value="reviews" className="mt-6 space-y-4">
              {[
                { rating: 5, role: 'Site Engineer', time: '2 months ago', text: 'Great company to work with. They prioritize safety and quality, and workers are treated fairly with competitive compensation.' },
                { rating: 4, role: 'Mason', time: '4 months ago', text: 'Accommodation and food is good. Payment is on time every month. Supervisors are experienced and helpful.' },
                { rating: 5, role: 'Civil Engineer', time: '6 months ago', text: 'Excellent projects and learning opportunities. The management is professional and supportive of career growth.' },
              ].map((review, idx) => (
                <div key={idx} className="border border-border/50 rounded-lg p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-foreground">{review.role}</h4>
                      <p className="text-sm text-foreground/60">{review.time}</p>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className={i < review.rating ? 'text-amber-400 fill-amber-400' : 'text-muted-foreground'}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-foreground/80 text-sm leading-relaxed">{review.text}</p>
                </div>
              ))}
            </TabsContent>

            {/* Photos Tab */}
            <TabsContent value="photos" className="mt-6">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  '1541888083',
                  '1590486905',
                  '1504307651',
                  '1565008576',
                  '1518709268',
                  '1486325212',
                ].map((photoId, idx) => (
                  <div
                    key={idx}
                    className="relative aspect-square rounded-lg overflow-hidden border border-border/50 hover:border-brand-300 transition-all group cursor-pointer"
                  >
                    <Image
                      src={`https://images.unsplash.com/photo-${photoId}?w=500&h=500&fit=crop`}
                      alt={`${company.name} photo ${idx + 1}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Sticky Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 space-y-6">
            {/* Stats Card */}
            <div className="rounded-xl border border-border/50 bg-background p-6">
              <h3 className="font-bold text-foreground mb-4">Company Stats</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-foreground/60">Active Jobs</span>
                  <span className="text-xl font-bold text-brand-600 dark:text-brand-400">
                    {company.activeJobs}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-foreground/60">Active Projects</span>
                  <span className="text-xl font-bold text-brand-600 dark:text-brand-400">
                    {company.activeProjects}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-foreground/60">Total Hires</span>
                  <span className="text-xl font-bold text-brand-600 dark:text-brand-400">
                    {company.totalHires.toLocaleString('en-IN')}+
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-foreground/60">Rating</span>
                  <span className="text-xl font-bold text-amber-500">
                    ★ {company.rating}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-foreground/60">Followers</span>
                  <span className="font-semibold text-foreground">
                    {company.followers.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="rounded-xl border border-border/50 bg-background p-6">
              <h3 className="font-bold text-foreground mb-4">Contact</h3>
              <div className="space-y-2 text-sm text-foreground/70 mb-4">
                <p>{company.email}</p>
                <p>{company.phone}</p>
              </div>
              <div className="space-y-2">
                {company.website && (
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href={company.website} target="_blank" rel="noopener noreferrer">
                      <Globe size={16} className="mr-2" />
                      Visit Website
                    </a>
                  </Button>
                )}
                <Button variant="outline" className="w-full justify-start">
                  <Share2 size={16} className="mr-2" />
                  Share Profile
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}