"use client"

import { useState } from "react"
import { Container } from "@/components/layout/Container"
import { ChevronDown, Search, HelpCircle } from "lucide-react"
import { cn } from "@/lib/utils"

const FAQ_CATEGORIES = ["All", "General", "Workers", "Students", "Companies", "Payments", "Account"]

const FAQS = [
  {
    category: "General",
    question: "What is BuildForce?",
    answer:
      "BuildForce is India's leading construction recruitment and workforce management platform. We connect skilled construction workers, students, contractors, and companies in one trusted ecosystem.",
  },
  {
    category: "General",
    question: "Is BuildForce free to use?",
    answer:
      "Yes! BuildForce is completely free for workers and students. Companies have a free tier with optional paid plans (Basic, Premium, Enterprise) for advanced features like unlimited job posts and analytics.",
  },
  {
    category: "Workers",
    question: "How do I get verified as a worker?",
    answer:
      "Upload your government ID (Aadhaar/PAN), trade certifications (ITI/Skill India), and a profile photo. Our team reviews and verifies your profile within 24-48 hours. Verified workers get a green checkmark and 3x more visibility.",
  },
  {
    category: "Workers",
    question: "How do I find jobs near me?",
    answer:
      "Use the location filter on our Jobs page to find opportunities in your city or nearby areas. You can also set up job alerts to get notified instantly when matching jobs are posted.",
  },
  {
    category: "Workers",
    question: "Will companies pay me on time?",
    answer:
      "All companies on BuildForce are verified for payment history. Our review system flags companies with bad payment records. We also offer dispute resolution support if you face payment issues.",
  },
  {
    category: "Students",
    question: "Can I find internships through BuildForce?",
    answer:
      "Absolutely! We have dedicated internship listings for civil engineering, architecture, and construction management students. Many top firms like L&T, Tata Projects, and Brigade Group post internships here.",
  },
  {
    category: "Students",
    question: "Are training resources really free?",
    answer:
      "Yes. Through our partnership with NSDC and other institutions, students can access free training in AutoCAD, Revit, BIM, safety certifications, and more. Many courses come with certificates upon completion.",
  },
  {
    category: "Companies",
    question: "How does company verification work?",
    answer:
      "Companies submit GST certificate, company registration, and authorized signatory details. Our team verifies these documents against government databases. Verified companies get a badge and access to all features.",
  },
  {
    category: "Companies",
    question: "What are the pricing plans?",
    answer:
      "We offer Free (3 jobs/month), Basic (₹9,000/mo for 15 jobs), Premium (₹25,000/mo unlimited + analytics), and Enterprise (₹1L/mo with dedicated support). Visit our Pricing page for details.",
  },
  {
    category: "Companies",
    question: "Can I post bulk jobs at once?",
    answer:
      "Yes. Premium and Enterprise plans support bulk job uploads via CSV. You can also schedule recurring job posts for ongoing hiring needs.",
  },
  {
    category: "Payments",
    question: "How do I pay for a subscription?",
    answer:
      "We accept all major payment methods: UPI, credit/debit cards, net banking, and bank transfers. For Enterprise plans, we also support invoicing and bank transfers via NEFT/RTGS.",
  },
  {
    category: "Payments",
    question: "Can I get a refund?",
    answer:
      "Yes, we offer a 7-day no-questions-asked refund on all subscriptions. After that, refunds are evaluated on a case-by-case basis. Contact support@buildforce.com for refund requests.",
  },
  {
    category: "Account",
    question: "How do I reset my password?",
    answer:
      "Click 'Forgot Password' on the login page, enter your registered email or phone, and we'll send you a reset link. The link is valid for 30 minutes for security.",
  },
  {
    category: "Account",
    question: "Can I delete my account?",
    answer:
      "Yes. Go to Settings → Account → Delete Account. Your data will be permanently deleted within 30 days as per our Privacy Policy and DPDP Act 2023 compliance.",
  },
  {
    category: "Account",
    question: "How do I report a scam or fake job post?",
    answer:
      "Click the 'Report' button on any job or profile. Our moderation team reviews all reports within 4 hours. Confirmed scams result in immediate account bans.",
  },
]

export default function FAQPage() {
  const [search, setSearch] = useState("")
  const [activeCategory, setActiveCategory] = useState("All")
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const filtered = FAQS.filter((f) => {
    const matchesSearch =
      f.question.toLowerCase().includes(search.toLowerCase()) ||
      f.answer.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = activeCategory === "All" || f.category === activeCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="py-20 gradient-hero">
        <Container className="text-center">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-500 text-white mb-6">
            <HelpCircle className="h-8 w-8" />
          </div>
          <h1 className="text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Find answers to common questions. Can't find what you're looking for?{" "}
            <a href="/contact" className="text-brand-600 hover:underline font-semibold">
              Contact us
            </a>
            .
          </p>
        </Container>
      </section>

      <Container className="py-16">
        {/* Search */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search FAQs..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 border border-border rounded-xl bg-background shadow-sm focus:outline-none focus:border-brand-500"
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {FAQ_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-semibold transition-colors",
                activeCategory === cat
                  ? "bg-brand-500 text-white"
                  : "bg-muted hover:bg-muted/70 text-foreground/70"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-3">
          {filtered.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-border/50 bg-background overflow-hidden transition-all hover:border-brand-200"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
              >
                <div className="flex-1">
                  <span className="text-xs font-semibold text-brand-600 uppercase tracking-wide mb-1 block">
                    {faq.category}
                  </span>
                  <h3 className="font-semibold">{faq.question}</h3>
                </div>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 text-foreground/60 flex-shrink-0 transition-transform",
                    openIndex === idx && "rotate-180 text-brand-500"
                  )}
                />
              </button>

              {openIndex === idx && (
                <div className="px-5 pb-5 text-foreground/70 leading-relaxed animate-fade-in">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}

          {filtered.length === 0 && (
            <div className="text-center py-12">
              <HelpCircle className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <p className="text-foreground/60">No FAQs match your search. Try different keywords.</p>
            </div>
          )}
        </div>
      </Container>
    </div>
  )
}