import type { Metadata } from "next";
import Link from "next/link";
import {
  RefreshCw,
  Calendar,
  CheckCircle2,
  XCircle,
  Clock,
  CreditCard,
  AlertCircle,
  Mail,
  Receipt,
  Wallet,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Refund Policy | ConstructHire",
  description:
    "Our policy on subscription refunds — when refunds are eligible, how to request one, and how long processing takes.",
};

const LAST_UPDATED = "March 15, 2026";

const ELIGIBLE = [
  {
    title: "14-day money-back guarantee",
    description:
      "If you cancel a new monthly Basic or Premium subscription within 14 days of your first payment, you'll get a full refund — no questions asked.",
  },
  {
    title: "Annual plan refunds (within 30 days)",
    description:
      "Annual subscriptions can be refunded within 30 days of purchase, prorated for any days used at the monthly rate.",
  },
  {
    title: "Service downtime",
    description:
      "If the platform is down for more than 24 consecutive hours due to our infrastructure, we'll credit your account proportionally.",
  },
  {
    title: "Duplicate payments",
    description:
      "Accidentally charged twice for the same period? We'll refund the duplicate in full within 7 business days.",
  },
  {
    title: "Billing errors",
    description:
      "Charged the wrong plan, taxed incorrectly, or billed after cancellation? Let us know and we'll fix it.",
  },
];

const NOT_ELIGIBLE = [
  {
    title: "Renewal charges after the trial period",
    description:
      "Once you've passed the 14-day window on a monthly plan or 30-day window on an annual plan, subscription fees are non-refundable.",
  },
  {
    title: "Partial month refunds",
    description:
      "We don't prorate refunds for cancelling a monthly plan mid-cycle — you keep access until the end of the billing period.",
  },
  {
    title: "Accounts terminated for policy violations",
    description:
      "If we terminate your account for violating our Terms of Service, fees are non-refundable.",
  },
  {
    title: "Workers' wages or project payments",
    description:
      "Payments made directly between users (wages, project fees, deposits) are outside the platform and not refundable by ConstructHire. Take those disputes up with the other party.",
  },
  {
    title: "Failed hires or unfilled positions",
    description:
      "We don't refund subscriptions because a job wasn't filled, a candidate didn't respond, or a hire didn't work out. We're a marketplace, not a recruitment guarantee.",
  },
  {
    title: "Free plan features",
    description: "There's nothing to refund on the Free plan.",
  },
];

const STEPS = [
  {
    icon: Mail,
    title: "Submit a request",
    description:
      "Email refunds@constructhire.in with your account email, invoice number, and reason. Or use the in-app 'Request refund' button under Billing settings.",
  },
  {
    icon: Clock,
    title: "We review within 3 business days",
    description:
      "Our billing team checks eligibility and your account history. We'll respond by email — sometimes we'll ask for more details.",
  },
  {
    icon: CheckCircle2,
    title: "Approved refunds processed in 5–10 days",
    description:
      "Once approved, refunds go back to the original payment method. Credit and debit cards typically take 5–10 business days; UPI is usually faster.",
  },
  {
    icon: Receipt,
    title: "Confirmation & updated invoice",
    description:
      "You'll receive a refund confirmation email and a credit note for your records. GST adjustments are reflected automatically.",
  },
];

export default function RefundPolicyPage() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="border-b border-border/50 bg-muted/30">
        <Container>
          <div className="mx-auto max-w-3xl py-12 md:py-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-background px-4 py-1.5 text-xs font-medium text-foreground/70">
              <RefreshCw className="h-3.5 w-3.5" />
              Legal
            </div>
            <h1 className="mt-5 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Refund Policy
            </h1>
            <p className="mt-4 text-base text-foreground/70 md:text-lg">
              Straightforward refund rules, written in plain English. If something&apos;s off
              with your billing, we want to make it right.
            </p>
            <p className="mt-4 text-sm text-foreground/60">
              <span className="font-medium text-foreground/80">Last updated:</span> {LAST_UPDATED}
            </p>
          </div>
        </Container>
      </section>

      {/* Quick summary */}
      <section className="py-12 md:py-16">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="rounded-2xl border border-brand-200 bg-gradient-to-br from-brand-50 to-background p-6 dark:border-brand-500/30 dark:from-brand-500/10 md:p-8">
              <div className="grid gap-6 md:grid-cols-3">
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-500 text-white">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-sm font-semibold text-foreground">
                    14 days for monthly
                  </h3>
                  <p className="mt-1.5 text-sm text-foreground/70">
                    Full refund on new monthly subscriptions within 14 days.
                  </p>
                </div>
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-500 text-white">
                    <CreditCard className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-sm font-semibold text-foreground">
                    30 days for annual
                  </h3>
                  <p className="mt-1.5 text-sm text-foreground/70">
                    Annual plans refundable within 30 days, prorated.
                  </p>
                </div>
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-500 text-white">
                    <Wallet className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-sm font-semibold text-foreground">
                    5–10 day processing
                  </h3>
                  <p className="mt-1.5 text-sm text-foreground/70">
                    Approved refunds reach your account in 5–10 business days.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Eligible / Not eligible */}
      <section className="border-t border-border/50 bg-muted/30 py-12 md:py-16">
        <Container>
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-6 md:grid-cols-2">
              {/* Eligible */}
              <div className="rounded-xl border border-border/50 bg-background p-6 md:p-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-300">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <h2 className="text-xl font-bold text-foreground">What&apos;s refundable</h2>
                </div>
                <ul className="mt-6 space-y-5">
                  {ELIGIBLE.map((item) => (
                    <li key={item.title} className="flex gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-500" />
                      <div>
                        <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                        <p className="mt-1 text-sm text-foreground/70">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Not eligible */}
              <div className="rounded-xl border border-border/50 bg-background p-6 md:p-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-300">
                    <XCircle className="h-5 w-5" />
                  </div>
                  <h2 className="text-xl font-bold text-foreground">What&apos;s not refundable</h2>
                </div>
                <ul className="mt-6 space-y-5">
                  {NOT_ELIGIBLE.map((item) => (
                    <li key={item.title} className="flex gap-3">
                      <XCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-rose-500" />
                      <div>
                        <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                        <p className="mt-1 text-sm text-foreground/70">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* How to request */}
      <section className="py-12 md:py-16">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                How to request a refund
              </h2>
              <p className="mt-3 text-foreground/70">
                Four simple steps. Most refunds are resolved within 10 business days end-to-end.
              </p>
            </div>

            <div className="mt-12 space-y-4">
              {STEPS.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.title}
                    className="flex gap-5 rounded-xl border border-border/50 bg-background p-6 transition-all hover:border-brand-200 hover:shadow-card-hover"
                  >
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-300">
                          <Icon className="h-6 w-6" />
                        </div>
                        <div className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand-500 text-[10px] font-bold text-white">
                          {idx + 1}
                        </div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base font-semibold text-foreground">{step.title}</h3>
                      <p className="mt-1.5 text-sm text-foreground/70">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* Important notes */}
      <section className="border-t border-border/50 bg-muted/30 py-12 md:py-16">
        <Container>
          <div className="mx-auto max-w-3xl space-y-8">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-300">
                  <AlertCircle className="h-5 w-5" />
                </div>
                <h2 className="text-xl font-bold text-foreground md:text-2xl">
                  A few things to keep in mind
                </h2>
              </div>

              <div className="mt-6 space-y-5 text-sm leading-relaxed text-foreground/80 md:text-base">
                <div>
                  <h3 className="font-semibold text-foreground">Refunds go to the original method</h3>
                  <p className="mt-1.5 text-foreground/70">
                    We can&apos;t refund to a different card or bank account. If the original
                    method is closed, we&apos;ll work with you to find an alternative — usually a
                    bank transfer.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">GST is refunded too</h3>
                  <p className="mt-1.5 text-foreground/70">
                    When we issue a refund, the 18% GST you paid is included. A credit note will
                    be sent for your accounting records and reflected in your GSTR-2A.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Chargebacks</h3>
                  <p className="mt-1.5 text-foreground/70">
                    Please contact us first before initiating a chargeback with your bank.
                    Disputed charges can usually be resolved faster directly with us. Repeated
                    unjustified chargebacks may result in account suspension.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Enterprise contracts</h3>
                  <p className="mt-1.5 text-foreground/70">
                    Enterprise plans are governed by your individual contract, which may have
                    different refund terms. Refer to your agreement or contact your account
                    manager.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16">
        <Container>
          <div className="mx-auto max-w-3xl rounded-2xl border border-brand-200 bg-gradient-to-br from-brand-50 to-background p-8 text-center dark:border-brand-500/30 dark:from-brand-500/10 md:p-12">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-500 text-white">
              <Mail className="h-6 w-6" />
            </div>
            <h2 className="mt-5 text-2xl font-bold text-foreground md:text-3xl">
              Need to request a refund?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-foreground/70">
              Drop us a note with your account email and invoice number. We aim to respond within
              3 business days.
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-brand-500 text-white hover:bg-brand-600">
                <Link href="mailto:refunds@constructhire.in">Email refunds team</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/help">Visit help center</Link>
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-2 border-t border-border/40 pt-6">
              <span className="text-xs text-foreground/60">Related:</span>
              <Link
                href="/legal/terms"
                className="text-xs font-medium text-brand-600 hover:underline"
              >
                Terms of Service
              </Link>
              <span className="text-xs text-foreground/40">·</span>
              <Link
                href="/legal/privacy"
                className="text-xs font-medium text-brand-600 hover:underline"
              >
                Privacy Policy
              </Link>
              <span className="text-xs text-foreground/40">·</span>
              <Link
                href="/pricing"
                className="text-xs font-medium text-brand-600 hover:underline"
              >
                Pricing
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}