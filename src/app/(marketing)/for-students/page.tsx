import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Briefcase, TrendingUp, Award, Users, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'For Students - ConstructHire',
  description: 'Internships and training opportunities for construction students',
};

export default function ForStudentsPage() {
  const features = [
    {
      icon: Briefcase,
      title: 'Real Project Internships',
      description: 'Work on actual construction projects with experienced teams',
    },
    {
      icon: TrendingUp,
      title: 'Skill Development',
      description: 'Learn industry-standard practices and tools hands-on',
    },
    {
      icon: Award,
      title: 'Certifications',
      description: 'Earn recognized certifications while gaining experience',
    },
    {
      icon: Users,
      title: 'Mentorship',
      description: 'Get guidance from experienced construction professionals',
    },
  ];

  const faqs = [
    {
      question: 'How do I register as a student?',
      answer: 'Visit our registration page, select "Student", and fill in your details. Verify your institution and you\'re ready to apply for internships.',
    },
    {
      question: 'Are there paid internships?',
      answer: 'Yes! Many companies offer paid internships (₹200-500/day). Some also offer hostel accommodation for on-site projects.',
    },
    {
      question: 'Can I intern while studying?',
      answer: 'Absolutely. Most internships are 2-6 months, summer breaks are ideal. We also have flexible options for shorter durations.',
    },
    {
      question: 'What if I have no prior experience?',
      answer: 'No problem! Many companies are looking for enthusiastic learners. We match you with projects and mentors suited to your level.',
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <div className="bg-gradient-to-br from-blue-50 via-brand-50 to-background dark:from-blue-950/30 dark:via-brand-950/20 dark:to-background py-20 border-b border-border/30">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                For Students
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                Build Your Construction Career
              </h1>
              <p className="text-xl text-foreground/70 mb-8 leading-relaxed">
                Gain real-world experience through paid internships, mentorship, and skill certifications on actual construction projects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-brand-500 hover:bg-brand-600 text-white h-12 px-8 text-lg" asChild>
                  <Link href="/auth/register?type=student">
                    Start Internship
                    <ArrowRight size={18} className="ml-2" />
                  </Link>
                </Button>
                <Button variant="outline" className="h-12 px-8 text-lg">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-gradient-to-br from-blue-200 to-brand-200 dark:from-blue-900/40 dark:to-brand-900/40 rounded-2xl h-96 flex items-center justify-center">
                <span className="text-6xl">👨‍🎓</span>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Features */}
      <section className="py-20 border-b border-border/30">
        <Container>
          <h2 className="text-4xl font-bold text-foreground text-center mb-16">
            Why Choose ConstructHire?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="rounded-xl border border-border/50 bg-background p-6 hover:border-brand-200 hover:shadow-card-hover transition-all"
                >
                  <div className="w-12 h-12 rounded-lg bg-brand-100 dark:bg-brand-900/20 flex items-center justify-center mb-4">
                    <Icon size={24} className="text-brand-600 dark:text-brand-400" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-foreground/70 text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-muted/30 border-b border-border/30">
        <Container>
          <h2 className="text-4xl font-bold text-foreground text-center mb-16">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { step: 1, title: 'Register', desc: 'Create your student profile' },
              { step: 2, title: 'Complete Skills', desc: 'Tell us about yourself' },
              { step: 3, title: 'Apply', desc: 'Browse and apply for internships' },
              { step: 4, title: 'Work', desc: 'Gain real experience and earn' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-brand-500 text-white flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-foreground/70 text-sm">{item.desc}</p>
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
                name: 'Raj Kumar',
                role: 'Student, IITB',
                text: 'Got a great internship with ₹400/day stipend. Learned more in 2 months than in a year of college!',
              },
              {
                name: 'Priya Singh',
                role: 'Student, Delhi Institute of Architecture',
                text: 'The mentorship I received was invaluable. Now I have a job offer from my internship company.',
              },
              {
                name: 'Akshay Patel',
                role: 'Student, NIT Surat',
                text: 'Real projects, real responsibility, real learning. ConstructHire made my education practical.',
              },
            ].map((testimonial, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-border/50 bg-background p-8 hover:border-brand-200 transition-all"
              >
                <p className="text-foreground/80 mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div>
                  <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-foreground/60">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQs */}
      <section className="py-20 border-b border-border/30">
        <Container>
          <h2 className="text-4xl font-bold text-foreground text-center mb-16">
            Common Questions
          </h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, idx) => (
                <AccordionItem
                  key={idx}
                  value={`faq-${idx}`}
                  className="rounded-lg border border-border/50 px-6 data-[state=open]:bg-muted/30"
                >
                  <AccordionTrigger className="py-4 text-left font-bold text-foreground hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/70 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-brand-500 to-brand-600 dark:from-brand-600 dark:to-brand-700">
        <Container className="text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of students earning while learning on real construction projects.
          </p>
          <Button
            size="lg"
            className="bg-white hover:bg-gray-100 text-brand-600 font-bold h-12 px-8 text-lg"
            asChild
          >
            <Link href="/auth/register?type=student">
              Register as Student
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </Button>
        </Container>
      </section>
    </main>
  );
}