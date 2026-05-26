import type { Metadata } from "next";
import Link from "next/link";
import {
  FileText,
  UserCheck,
  Briefcase,
  CreditCard,
  ShieldAlert,
  Ban,
  Scale,
  AlertTriangle,
  Gavel,
  RefreshCw,
  Mail,
  ScrollText,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Terms of Service | ConstructHire",
  description:
    "The terms governing your use of ConstructHire — the platform connecting India's construction workforce with employers.",
};

const LAST_UPDATED = "March 15, 2026";
const EFFECTIVE_DATE = "April 1, 2026";

type Section = {
  id: string;
  icon: typeof FileText;
  title: string;
};

const TOC: Section[] = [
  { id: "acceptance", icon: FileText, title: "1. Acceptance of terms" },
  { id: "accounts", icon: UserCheck, title: "2. Your account" },
  { id: "platform-use", icon: Briefcase, title: "3. Using the platform" },
  { id: "payments", icon: CreditCard, title: "4. Payments & subscriptions" },
  { id: "content", icon: ScrollText, title: "5. Your content" },
  { id: "prohibited", icon: Ban, title: "6. Prohibited conduct" },
  { id: "third-party", icon: ShieldAlert, title: "7. Third-party services" },
  { id: "termination", icon: AlertTriangle, title: "8. Suspension & termination" },
  { id: "disclaimers", icon: Scale, title: "9. Disclaimers & liability" },
  { id: "governing", icon: Gavel, title: "10. Governing law & disputes" },
  { id: "changes", icon: RefreshCw, title: "11. Changes to these terms" },
  { id: "contact", icon: Mail, title: "12. Contact us" },
];

export default function TermsPage() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="border-b border-border/50 bg-muted/30">
        <Container>
          <div className="mx-auto max-w-3xl py-12 md:py-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-background px-4 py-1.5 text-xs font-medium text-foreground/70">
              <Scale className="h-3.5 w-3.5" />
              Legal
            </div>
            <h1 className="mt-5 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Terms of Service
            </h1>
            <p className="mt-4 text-base text-foreground/70 md:text-lg">
              These terms govern your access to and use of ConstructHire. Please read them
              carefully — by using the platform, you agree to be bound by them.
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

            <article className="max-w-none text-foreground">
              <Section id="acceptance" title="1. Acceptance of terms">
                <p>
                  Welcome to ConstructHire. These Terms of Service (&quot;Terms&quot;) are a
                  binding agreement between you and ConstructHire Technologies Private Limited
                  (&quot;ConstructHire,&quot; &quot;we,&quot; &quot;our&quot;), a company
                  incorporated in India with its registered office at 4th Floor, Prestige Atlanta,
                  80 Feet Road, Koramangala, Bengaluru — 560034.
                </p>
                <p>
                  By creating an account, accessing, or using our website at{" "}
                  <Link href="/" className="text-brand-600 hover:underline">
                    constructhire.in
                  </Link>{" "}
                  or our mobile applications (together, the &quot;Platform&quot;), you confirm
                  that you have read, understood, and agreed to these Terms and our{" "}
                  <Link href="/legal/privacy" className="text-brand-600 hover:underline">
                    Privacy Policy
                  </Link>
                  .
                </p>
                <p>
                  If you do not agree, you must not use the Platform. You must be at least 18
                  years old to use ConstructHire.
                </p>
              </Section>

              <Section id="accounts" title="2. Your account">
                <h3>Account creation</h3>
                <p>
                  You may register as a worker, student, contractor, or company. You agree to
                  provide accurate, current, and complete information during registration and to
                  keep it updated.
                </p>

                <h3>Account security</h3>
                <p>
                  You are responsible for keeping your password confidential and for all activity
                  that occurs under your account. Notify us immediately at{" "}
                  <a href="mailto:security@constructhire.in" className="text-brand-600 hover:underline">
                    security@constructhire.in
                  </a>{" "}
                  if you suspect unauthorised access.
                </p>

                <h3>One account per person or organisation</h3>
                <p>
                  Each individual or registered business entity may hold one account of each type.
                  Creating multiple accounts to circumvent restrictions, manipulate ratings, or
                  evade payment is prohibited.
                </p>

                <h3>Verification</h3>
                <p>
                  We may verify your identity, skills, business registration, or other details
                  using third-party providers. Verified status is not a guarantee of quality,
                  performance, or fitness — exercise your own judgment when engaging with other
                  users.
                </p>
              </Section>

              <Section id="platform-use" title="3. Using the platform">
                <h3>What we provide</h3>
                <p>
                  ConstructHire is a marketplace that helps workers, students, contractors, and
                  companies discover each other. We are not a party to any employment, contract,
                  or service arrangement formed between users.
                </p>

                <h3>Independent relationships</h3>
                <p>
                  Any engagement — including hiring, wages, working conditions, project terms, and
                  performance — is a direct relationship between the parties involved.
                  ConstructHire is not an employer, agent, recruiter, or contractor in that
                  relationship.
                </p>

                <h3>Compliance with laws</h3>
                <p>You are responsible for complying with all applicable laws, including:</p>
                <ul>
                  <li>Labour laws, minimum wage laws, and workplace safety regulations.</li>
                  <li>Contract Labour (Regulation & Abolition) Act, 1970, where applicable.</li>
                  <li>Building and Other Construction Workers Act, 1996.</li>
                  <li>EPF, ESIC, professional tax, and other statutory obligations.</li>
                  <li>GST registration and invoicing where required.</li>
                </ul>

                <h3>Worker safety</h3>
                <p>
                  Employers and contractors must provide a safe working environment, appropriate
                  PPE, insurance, and lawful working conditions to anyone hired through the
                  Platform.
                </p>
              </Section>

              <Section id="payments" title="4. Payments & subscriptions">
                <h3>Subscription fees</h3>
                <p>
                  Paid plans are billed in advance on a monthly or annual basis, in Indian Rupees.
                  All prices are exclusive of 18% GST, which will be added to your invoice.
                </p>

                <h3>Auto-renewal</h3>
                <p>
                  Subscriptions automatically renew at the end of each billing cycle unless you
                  cancel before the renewal date. You can cancel anytime from your billing
                  settings.
                </p>

                <h3>Free trials</h3>
                <p>
                  We may offer free trials for paid plans. At the end of the trial, your account
                  will convert to the paid plan and you will be charged unless you cancel before
                  the trial ends.
                </p>

                <h3>Payments to and from workers</h3>
                <p>
                  Payments for actual work performed are made directly between the hiring party
                  and the worker, outside the Platform unless an explicit escrow or payroll
                  feature is used. ConstructHire is not responsible for the payment, non-payment,
                  delay, or dispute of any such amount.
                </p>

                <h3>Refunds</h3>
                <p>
                  Subscription refunds are governed by our{" "}
                  <Link href="/legal/refund" className="text-brand-600 hover:underline">
                    Refund Policy
                  </Link>
                  .
                </p>

                <h3>Taxes</h3>
                <p>
                  You are responsible for any taxes you owe arising from your use of the Platform
                  or income earned through it, including income tax and GST where applicable.
                </p>
              </Section>

              <Section id="content" title="5. Your content">
                <h3>Ownership</h3>
                <p>
                  You retain ownership of all content you submit to the Platform — profile
                  details, photos, portfolio items, job posts, messages, reviews
                  (&quot;Content&quot;).
                </p>

                <h3>Licence to ConstructHire</h3>
                <p>
                  By submitting Content, you grant ConstructHire a worldwide, non-exclusive,
                  royalty-free, transferable, sublicensable licence to host, store, reproduce,
                  display, modify (for formatting), and distribute the Content as needed to
                  operate, promote, and improve the Platform.
                </p>

                <h3>Accuracy & responsibility</h3>
                <p>
                  You represent that your Content is accurate, lawful, does not infringe any
                  third-party rights, and complies with these Terms. You are solely responsible
                  for your Content and the consequences of submitting it.
                </p>

                <h3>Moderation</h3>
                <p>
                  We may, but are not obligated to, review, edit, or remove Content that violates
                  these Terms or that we consider inappropriate. We are not responsible for
                  Content submitted by users.
                </p>
              </Section>

              <Section id="prohibited" title="6. Prohibited conduct">
                <p>You agree not to:</p>
                <ul>
                  <li>
                    Use the Platform for any illegal, fraudulent, or unauthorised purpose, or to
                    facilitate any such activity.
                  </li>
                  <li>
                    Post false, misleading, or discriminatory job listings, including
                    discrimination on the basis of caste, religion, gender, region, or disability.
                  </li>
                  <li>
                    Impersonate any person or entity, or misrepresent your affiliation,
                    qualifications, or experience.
                  </li>
                  <li>
                    Harass, threaten, defame, abuse, or otherwise harm any user or worker.
                  </li>
                  <li>
                    Circumvent the Platform to avoid fees — for example, soliciting users to
                    transact off-platform after they were introduced through ConstructHire, in
                    violation of subscription terms.
                  </li>
                  <li>
                    Collect, scrape, or harvest user data using automated means, including bots,
                    crawlers, or screen-scrapers.
                  </li>
                  <li>
                    Upload viruses, malware, or any code intended to disrupt or compromise the
                    Platform.
                  </li>
                  <li>
                    Attempt to gain unauthorised access to other accounts, systems, or networks
                    connected to ConstructHire.
                  </li>
                  <li>
                    Use the Platform to send spam, unsolicited marketing, or chain messages.
                  </li>
                  <li>
                    Manipulate ratings, reviews, or rankings — including fake reviews, paid
                    reviews, or review trading.
                  </li>
                  <li>
                    Engage in any form of bonded labour, child labour, or exploitation.
                  </li>
                </ul>
              </Section>

              <Section id="third-party" title="7. Third-party services">
                <p>
                  The Platform may include links to or integrate with third-party services —
                  payment processors, verification providers, communication tools, and others.
                  Your use of those services is governed by their own terms and privacy policies.
                  ConstructHire is not responsible for third-party services.
                </p>
              </Section>

              <Section id="termination" title="8. Suspension & termination">
                <h3>By you</h3>
                <p>
                  You may close your account at any time through your account settings. Some
                  obligations (payment of outstanding fees, indemnities, dispute resolution)
                  survive termination.
                </p>

                <h3>By us</h3>
                <p>
                  We may suspend or terminate your account, with or without notice, if we believe
                  you have violated these Terms, engaged in fraud, posed a risk to other users, or
                  if required by law. We may also discontinue all or part of the Platform at any
                  time.
                </p>

                <h3>Effect of termination</h3>
                <p>
                  On termination, your right to use the Platform ends immediately. We may retain
                  certain data as required by law or as set out in our Privacy Policy.
                </p>
              </Section>

              <Section id="disclaimers" title="9. Disclaimers & limitation of liability">
                <h3>As-is service</h3>
                <p>
                  The Platform is provided on an &quot;as is&quot; and &quot;as available&quot;
                  basis without warranties of any kind, express or implied. We do not warrant that
                  the Platform will be uninterrupted, error-free, or secure.
                </p>

                <h3>No guarantee of outcomes</h3>
                <p>
                  We do not guarantee that workers will find jobs, that employers will find
                  suitable candidates, that any engagement will succeed, or that any payment will
                  be made. We do not endorse or vouch for any user.
                </p>

                <h3>Limitation of liability</h3>
                <p>
                  To the maximum extent permitted by law, ConstructHire and its officers,
                  directors, employees, and agents shall not be liable for any indirect,
                  incidental, special, consequential, or punitive damages, including loss of
                  profits, data, business, or goodwill.
                </p>
                <p>
                  Our total aggregate liability arising out of or related to these Terms or your
                  use of the Platform shall not exceed the greater of (a) the amount you paid us
                  in the 12 months preceding the claim, or (b) ₹10,000.
                </p>

                <h3>Indemnification</h3>
                <p>
                  You agree to indemnify and hold ConstructHire harmless from any claims, losses,
                  damages, or expenses (including legal fees) arising from your Content, your use
                  of the Platform, your violation of these Terms, or your violation of any
                  third-party rights.
                </p>
              </Section>

              <Section id="governing" title="10. Governing law & dispute resolution">
                <p>
                  These Terms are governed by the laws of India. Any dispute arising out of or in
                  connection with these Terms shall be resolved as follows:
                </p>
                <ol className="list-decimal space-y-2 pl-6">
                  <li>
                    First, by good-faith negotiation. Contact us at{" "}
                    <a href="mailto:legal@constructhire.in" className="text-brand-600 hover:underline">
                      legal@constructhire.in
                    </a>{" "}
                    and we will respond within 30 days.
                  </li>
                  <li>
                    If unresolved within 60 days, the dispute shall be referred to arbitration
                    under the Arbitration and Conciliation Act, 1996. The seat of arbitration
                    shall be Bengaluru, and proceedings shall be in English.
                  </li>
                  <li>
                    Subject to arbitration, the courts at Bengaluru, Karnataka, shall have
                    exclusive jurisdiction.
                  </li>
                </ol>
              </Section>

              <Section id="changes" title="11. Changes to these terms">
                <p>
                  We may update these Terms from time to time. When we make material changes, we
                  will notify you by email or in-app notice at least 14 days before the changes
                  take effect. Continued use of the Platform after that date constitutes
                  acceptance.
                </p>
                <p>
                  If you do not agree to updated Terms, you must stop using the Platform and may
                  close your account.
                </p>
              </Section>

              <Section id="contact" title="12. Contact us">
                <p>For questions about these Terms, please contact us:</p>
                <div className="my-6 rounded-xl border border-border/50 bg-muted/30 p-6">
                  <p className="font-semibold text-foreground">Legal & Compliance Team</p>
                  <p className="mt-3 text-sm text-foreground/80">
                    ConstructHire Technologies Private Limited
                    <br />
                    4th Floor, Prestige Atlanta, 80 Feet Road
                    <br />
                    Koramangala, Bengaluru — 560034, Karnataka, India
                    <br />
                    CIN: U72900KA2023PTC189456
                  </p>
                  <p className="mt-3 text-sm">
                    <span className="text-foreground/60">Email: </span>
                    <a href="mailto:legal@constructhire.in" className="text-brand-600 hover:underline">
                      legal@constructhire.in
                    </a>
                  </p>
                </div>
              </Section>

              <div className="mt-12 flex flex-col gap-3 rounded-xl border border-border/50 bg-muted/30 p-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-base font-semibold text-foreground">
                    Related legal documents
                  </h3>
                  <p className="mt-1 text-sm text-foreground/70">
                    Read our Privacy Policy, Cookie Policy, and Refund Policy.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button asChild variant="outline" size="sm">
                    <Link href="/legal/privacy">Privacy</Link>
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
      <div className="mt-4 space-y-4 text-sm leading-relaxed text-foreground/80 md:text-base [&_h3]:mt-6 [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-foreground [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_strong]:font-semibold [&_strong]:text-foreground">
        {children}
      </div>
    </section>
  );
}