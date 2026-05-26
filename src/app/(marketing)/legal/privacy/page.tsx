import type { Metadata } from "next";
import Link from "next/link";
import {
  Shield,
  Database,
  Share2,
  UserCheck,
  Lock,
  Cookie,
  Globe,
  AlertCircle,
  Mail,
  FileText,
  ScrollText,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Privacy Policy | ConstructHire",
  description:
    "How ConstructHire collects, uses, shares, and protects your personal information. Compliant with India's Digital Personal Data Protection Act, 2023.",
};

const LAST_UPDATED = "March 15, 2026";
const EFFECTIVE_DATE = "April 1, 2026";

type Section = {
  id: string;
  icon: typeof Shield;
  title: string;
};

const TOC: Section[] = [
  { id: "introduction", icon: Shield, title: "1. Introduction" },
  { id: "data-we-collect", icon: Database, title: "2. Data we collect" },
  { id: "how-we-use", icon: UserCheck, title: "3. How we use your data" },
  { id: "data-sharing", icon: Share2, title: "4. When we share data" },
  { id: "your-rights", icon: ScrollText, title: "5. Your rights (DPDP Act)" },
  { id: "data-security", icon: Lock, title: "6. How we keep data safe" },
  { id: "cookies", icon: Cookie, title: "7. Cookies & tracking" },
  { id: "international", icon: Globe, title: "8. International transfers" },
  { id: "children", icon: AlertCircle, title: "9. Children's privacy" },
  { id: "changes", icon: FileText, title: "10. Changes to this policy" },
  { id: "contact", icon: Mail, title: "11. Contact us" },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="border-b border-border/50 bg-muted/30">
        <Container>
          <div className="mx-auto max-w-3xl py-12 md:py-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-background px-4 py-1.5 text-xs font-medium text-foreground/70">
              <Shield className="h-3.5 w-3.5" />
              Legal
            </div>
            <h1 className="mt-5 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Privacy Policy
            </h1>
            <p className="mt-4 text-base text-foreground/70 md:text-lg">
              We take your privacy seriously. This policy explains what data we collect, why we
              collect it, and the rights you have under India&apos;s Digital Personal Data
              Protection Act, 2023.
            </p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-foreground/60">
              <span>
                <span className="font-medium text-foreground/80">Last updated:</span>{" "}
                {LAST_UPDATED}
              </span>
              <span>
                <span className="font-medium text-foreground/80">Effective:</span>{" "}
                {EFFECTIVE_DATE}
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Body */}
      <section className="py-12 md:py-16">
        <Container>
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[260px_1fr]">
            {/* TOC */}
            <aside className="lg:sticky lg:top-24 lg:self-start">
              <h2 className="text-xs font-semibold uppercase tracking-wide text-foreground/60">
                On this page
              </h2>
              <nav className="mt-3">
                <ul className="space-y-1">
                  {TOC.map((item) => {
                    const Icon = item.icon;
                    return (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          className="flex items-start gap-2 rounded-lg px-3 py-2 text-sm text-foreground/70 transition-colors hover:bg-muted hover:text-foreground focus:outline-none focus:ring-2 focus:ring-brand-500"
                        >
                          <Icon className="mt-0.5 h-4 w-4 flex-shrink-0 text-foreground/40" />
                          <span>{item.title}</span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </aside>

            {/* Content */}
            <article className="prose-policy max-w-none text-foreground">
              <Section id="introduction" title="1. Introduction">
                <p>
                  ConstructHire Technologies Private Limited (&quot;ConstructHire,&quot;
                  &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates the website at{" "}
                  <Link href="/" className="text-brand-600 hover:underline">
                    constructhire.in
                  </Link>{" "}
                  and our mobile applications (together, the &quot;Platform&quot;). We connect
                  construction workers, students, contractors, and companies across India.
                </p>
                <p>
                  This Privacy Policy describes how we collect, use, share, and protect personal
                  information when you use the Platform. By using ConstructHire, you agree to the
                  practices described below.
                </p>
                <p>
                  We comply with India&apos;s Digital Personal Data Protection Act, 2023 (the
                  &quot;DPDP Act&quot;) and the Information Technology Act, 2000.
                </p>
              </Section>

              <Section id="data-we-collect" title="2. Data we collect">
                <h3>Information you give us</h3>
                <ul>
                  <li>
                    <strong>Account details:</strong> name, mobile number, email address,
                    password, date of birth, gender.
                  </li>
                  <li>
                    <strong>Worker profile:</strong> trade, years of experience, skills,
                    certifications, portfolio photos, work history, expected wages, availability,
                    languages spoken.
                  </li>
                  <li>
                    <strong>Student profile:</strong> institution, course, year of study,
                    internship preferences.
                  </li>
                  <li>
                    <strong>Company profile:</strong> business name, GSTIN, industry, team size,
                    address, authorised signatory details.
                  </li>
                  <li>
                    <strong>Verification documents:</strong> Aadhaar (last 4 digits only), PAN,
                    skill certificates, trade licences, bank details for payments.
                  </li>
                  <li>
                    <strong>Communications:</strong> messages, job applications, reviews, and
                    support tickets you send through the Platform.
                  </li>
                </ul>

                <h3>Information we collect automatically</h3>
                <ul>
                  <li>
                    <strong>Device data:</strong> device type, operating system, browser, IP
                    address, language preference.
                  </li>
                  <li>
                    <strong>Usage data:</strong> pages viewed, searches performed, jobs applied
                    to, time spent, click patterns.
                  </li>
                  <li>
                    <strong>Location:</strong> approximate location from your IP, or precise
                    location if you grant permission (used for nearby job matching only).
                  </li>
                  <li>
                    <strong>Cookies and similar technologies:</strong> see section 7 below.
                  </li>
                </ul>

                <h3>Information from third parties</h3>
                <ul>
                  <li>
                    Identity verification providers (DigiLocker, NSDC) when you opt in to verified
                    badges.
                  </li>
                  <li>Payment processors (Razorpay, Cashfree) for transaction records.</li>
                  <li>
                    Social login providers (Google, Truecaller) if you sign in with those
                    accounts.
                  </li>
                </ul>
              </Section>

              <Section id="how-we-use" title="3. How we use your data">
                <p>We use your personal information to:</p>
                <ul>
                  <li>
                    Create and operate your account, including matching workers to relevant jobs
                    and showing companies relevant candidates.
                  </li>
                  <li>
                    Verify your identity, skills, and credentials to maintain trust on the
                    Platform.
                  </li>
                  <li>
                    Process payments, subscription fees, and payouts; issue GST invoices and
                    receipts.
                  </li>
                  <li>
                    Send transactional messages (job alerts, application updates, payment
                    confirmations) via SMS, WhatsApp, email, and push notifications.
                  </li>
                  <li>
                    Send marketing communications, with your consent, about new features, career
                    tips, and offers. You can unsubscribe at any time.
                  </li>
                  <li>
                    Detect fraud, abuse, and policy violations; investigate complaints; enforce
                    our Terms of Service.
                  </li>
                  <li>
                    Analyse usage to improve the Platform, develop new features, and conduct
                    research on India&apos;s construction workforce (in aggregated, anonymised
                    form).
                  </li>
                  <li>Comply with legal obligations, court orders, and regulatory requests.</li>
                </ul>
                <p>
                  We process your data on the basis of: (a) your consent, (b) the contract between
                  us when you use the Platform, (c) legitimate business interests where they do
                  not override your rights, and (d) legal obligations.
                </p>
              </Section>

              <Section id="data-sharing" title="4. When we share data">
                <p>We never sell your personal data. We share it only in these situations:</p>
                <ul>
                  <li>
                    <strong>With other users:</strong> profile information you mark as public is
                    visible to other users — for example, workers see jobs posted by companies,
                    and companies see profiles of workers who apply.
                  </li>
                  <li>
                    <strong>With service providers:</strong> cloud hosting (AWS Mumbai region),
                    payment processors, SMS and WhatsApp gateways, email services, analytics, and
                    customer support tools. These providers are contractually bound to protect
                    your data and may use it only to deliver services to us.
                  </li>
                  <li>
                    <strong>With verification partners:</strong> when you opt in to identity or
                    skill verification, we share necessary details with DigiLocker, NSDC, or
                    similar authorised partners.
                  </li>
                  <li>
                    <strong>For legal reasons:</strong> if required by law, court order, or to
                    protect the rights, safety, or property of ConstructHire, our users, or the
                    public.
                  </li>
                  <li>
                    <strong>In a business transfer:</strong> if we are acquired, merged, or
                    restructured, your data may transfer to the new entity. You will be notified
                    in advance.
                  </li>
                </ul>
              </Section>

              <Section id="your-rights" title="5. Your rights under the DPDP Act">
                <p>
                  As a Data Principal under the DPDP Act, 2023, you have the following rights:
                </p>
                <ul>
                  <li>
                    <strong>Right to access:</strong> request a summary of the personal data we
                    hold about you and how we process it.
                  </li>
                  <li>
                    <strong>Right to correction:</strong> ask us to correct or update inaccurate,
                    incomplete, or outdated information.
                  </li>
                  <li>
                    <strong>Right to erasure:</strong> request deletion of your personal data,
                    subject to legal retention requirements.
                  </li>
                  <li>
                    <strong>Right to withdraw consent:</strong> withdraw consent for any
                    processing based on consent, at any time.
                  </li>
                  <li>
                    <strong>Right to nominate:</strong> nominate another individual to exercise
                    your rights in case of death or incapacity.
                  </li>
                  <li>
                    <strong>Right to grievance redressal:</strong> raise a complaint with our
                    Grievance Officer (details in section 11) or escalate to the Data Protection
                    Board of India.
                  </li>
                </ul>
                <p>
                  To exercise these rights, email{" "}
                  <a href="mailto:privacy@constructhire.in" className="text-brand-600 hover:underline">
                    privacy@constructhire.in
                  </a>{" "}
                  or use the in-app &quot;Privacy controls&quot; in your account settings. We will
                  respond within 30 days.
                </p>
              </Section>

              <Section id="data-security" title="6. How we keep data safe">
                <p>We use industry-standard safeguards to protect your data:</p>
                <ul>
                  <li>TLS 1.3 encryption for all data in transit.</li>
                  <li>AES-256 encryption for sensitive data at rest, including ID documents.</li>
                  <li>
                    Access controls — only authorised employees can view personal data, and only
                    when needed to do their jobs.
                  </li>
                  <li>Regular security audits, penetration testing, and vulnerability scans.</li>
                  <li>Multi-factor authentication available on all accounts.</li>
                  <li>Data hosted in AWS Mumbai (ap-south-1) region.</li>
                </ul>
                <p>
                  If we ever experience a personal data breach that affects you, we will notify
                  you and the Data Protection Board of India as required by law.
                </p>
                <p>
                  <strong>Data retention:</strong> we keep your account data for as long as your
                  account is active. After you delete your account, we retain certain records for
                  up to 7 years to comply with tax, accounting, and legal obligations. Anonymised
                  analytics data may be kept indefinitely.
                </p>
              </Section>

              <Section id="cookies" title="7. Cookies & tracking">
                <p>
                  We use cookies and similar technologies to keep you logged in, remember your
                  preferences, understand how the Platform is used, and personalise content. You
                  can manage cookie preferences at any time on our{" "}
                  <Link href="/legal/cookies" className="text-brand-600 hover:underline">
                    Cookie Policy
                  </Link>{" "}
                  page or through your browser settings.
                </p>
              </Section>

              <Section id="international" title="8. International transfers">
                <p>
                  Your personal data is stored in India (AWS Mumbai region). In limited cases,
                  some service providers may process data outside India — for example, certain
                  analytics or customer support tools. We only transfer data to jurisdictions that
                  the Government of India has not restricted under the DPDP Act, and we ensure
                  contractual safeguards are in place.
                </p>
              </Section>

              <Section id="children" title="9. Children's privacy">
                <p>
                  ConstructHire is intended for users aged 18 and above. We do not knowingly
                  collect personal data from anyone under 18. The student-focused features of our
                  Platform are designed for college and ITI students who are 18 or older.
                </p>
                <p>
                  If we discover that we have collected data from someone under 18 without
                  verifiable parental consent, we will delete it promptly. If you believe a minor
                  has provided us with personal data, please contact us at{" "}
                  <a href="mailto:privacy@constructhire.in" className="text-brand-600 hover:underline">
                    privacy@constructhire.in
                  </a>
                  .
                </p>
              </Section>

              <Section id="changes" title="10. Changes to this policy">
                <p>
                  We may update this Privacy Policy from time to time. When we make material
                  changes, we will notify you by email or in-app notice at least 14 days before
                  the changes take effect. The &quot;Last updated&quot; date at the top of this
                  page always reflects the most recent revision.
                </p>
                <p>
                  Continued use of the Platform after changes take effect means you accept the
                  updated policy.
                </p>
              </Section>

              <Section id="contact" title="11. Contact us">
                <p>
                  For any privacy-related questions, requests, or complaints, please contact our
                  Grievance Officer:
                </p>
                <div className="not-prose my-6 rounded-xl border border-border/50 bg-muted/30 p-6">
                  <p className="font-semibold text-foreground">Grievance Officer</p>
                  <p className="mt-3 text-sm text-foreground/80">
                    Priya Mehta
                    <br />
                    ConstructHire Technologies Private Limited
                    <br />
                    4th Floor, Prestige Atlanta, 80 Feet Road
                    <br />
                    Koramangala, Bengaluru — 560034, Karnataka, India
                  </p>
                  <p className="mt-3 text-sm">
                    <span className="text-foreground/60">Email: </span>
                    <a href="mailto:grievance@constructhire.in" className="text-brand-600 hover:underline">
                      grievance@constructhire.in
                    </a>
                  </p>
                  <p className="text-sm">
                    <span className="text-foreground/60">Privacy queries: </span>
                    <a href="mailto:privacy@constructhire.in" className="text-brand-600 hover:underline">
                      privacy@constructhire.in
                    </a>
                  </p>
                </div>
                <p>
                  If you are not satisfied with our response, you may escalate your complaint to
                  the Data Protection Board of India under the DPDP Act, 2023.
                </p>
              </Section>

              {/* Bottom CTA */}
              <div className="not-prose mt-12 flex flex-col gap-3 rounded-xl border border-border/50 bg-muted/30 p-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-base font-semibold text-foreground">
                    Related legal documents
                  </h3>
                  <p className="mt-1 text-sm text-foreground/70">
                    Read our Terms, Cookie Policy, and Refund Policy.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button asChild variant="outline" size="sm">
                    <Link href="/legal/terms">Terms</Link>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/legal/cookies">Cookies</Link>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/legal/refund">Refunds</Link>
                  </Button>
                </div>
              </div>
            </article>
          </div>
        </Container>
      </section>
    </div>
  );
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 border-b border-border/30 py-8 first:pt-0 last:border-0">
      <h2 className="text-xl font-bold text-foreground md:text-2xl">{title}</h2>
      <div className="prose-policy mt-4 space-y-4 text-sm leading-relaxed text-foreground/80 md:text-base [&_h3]:mt-6 [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-foreground [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_strong]:font-semibold [&_strong]:text-foreground">
        {children}
      </div>
    </section>
  );
}