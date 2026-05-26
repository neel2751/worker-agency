import Link from "next/link"
import { Container } from "./Container"
import { NewsletterForm } from "@/components/common/NewsletterForm"
import { SITE_CONFIG } from "@/config/site"
import { FOOTER_NAV } from "@/data/navigation"
import {
  SOCIAL_LINKS,
  COMPANY_NAME,
  CONTACT_EMAIL,
  PHONE,
  OFFICES,
} from "@/lib/constants"
import {
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  HardHat,
  ShieldCheck,
  Award,
  Users,
} from "lucide-react"

// Trust badges (replacing old CERTIFICATIONS data)
const TRUST_BADGES = [
  { name: "ISO 9001:2015 Certified", icon: ShieldCheck },
  { name: "Verified by NSDC", icon: Award },
  { name: "Skill India Partner", icon: Users },
  { name: "MSME Registered", icon: ShieldCheck },
  { name: "Startup India Recognized", icon: Award },
  { name: "Data Privacy Compliant", icon: ShieldCheck },
]

const SOCIAL_ITEMS = [
  { Icon: Linkedin, href: SOCIAL_LINKS.linkedin, label: "LinkedIn" },
  { Icon: Twitter, href: SOCIAL_LINKS.twitter, label: "Twitter" },
  { Icon: Facebook, href: SOCIAL_LINKS.facebook, label: "Facebook" },
  { Icon: Instagram, href: SOCIAL_LINKS.instagram, label: "Instagram" },
  { Icon: Youtube, href: SOCIAL_LINKS.youtube, label: "YouTube" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative mt-auto overflow-hidden bg-steel-950 text-steel-100">
      {/* Hazard stripe top border */}
      <div className="divider-hazard" />

      {/* Blueprint pattern overlay */}
      <div className="blueprint-pattern absolute inset-0 opacity-[0.15] pointer-events-none" />

      {/* Soft brand glow at top */}
      <div className="absolute inset-x-0 top-1 h-px bg-gradient-to-r from-transparent via-brand-500/60 to-transparent" />

      <Container className="relative">
        {/* ===== TOP GRID ===== */}
        <div className="grid grid-cols-1 gap-12 pt-20 pb-14 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand column */}
          <div className="space-y-6 lg:col-span-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-500 text-white shadow-brand-glow">
                <HardHat className="h-6 w-6" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">
                {SITE_CONFIG.shortName}
              </span>
            </Link>

            <p className="max-w-sm text-sm leading-relaxed text-steel-300">
              India's leading construction recruitment and workforce management
              platform. Connecting students, skilled workers, and construction
              companies in one trusted ecosystem.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {SOCIAL_ITEMS.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-steel-700 text-steel-300 transition-all hover:border-brand-500/60 hover:bg-brand-500/10 hover:text-brand-400"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>

            {/* Contact info */}
            <div className="space-y-2 text-sm">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex items-center gap-2 text-steel-300 hover:text-brand-400 transition-colors"
              >
                <Mail className="h-4 w-4 flex-shrink-0" />
                {CONTACT_EMAIL}
              </a>
              <a
                href={`tel:${PHONE}`}
                className="flex items-center gap-2 text-steel-300 hover:text-brand-400 transition-colors"
              >
                <Phone className="h-4 w-4 flex-shrink-0" />
                {PHONE}
              </a>
              <div className="flex items-start gap-2 text-steel-300">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <span>
                  {OFFICES[0].address}, {OFFICES[0].city}, {OFFICES[0].state}
                </span>
              </div>
            </div>
          </div>

          {/* Platform links */}
          <div className="lg:col-span-2">
            <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-steel-400">
              {FOOTER_NAV.platform.title}
            </h4>
            <ul className="space-y-3 text-sm">
              {FOOTER_NAV.platform.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-steel-300 transition-colors hover:text-brand-400"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* For Users links */}
          <div className="lg:col-span-2">
            <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-steel-400">
              {FOOTER_NAV.forUsers.title}
            </h4>
            <ul className="space-y-3 text-sm">
              {FOOTER_NAV.forUsers.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-steel-300 transition-colors hover:text-brand-400"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div className="lg:col-span-2">
            <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-steel-400">
              {FOOTER_NAV.company.title}
            </h4>
            <ul className="space-y-3 text-sm">
              {FOOTER_NAV.company.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-steel-300 transition-colors hover:text-brand-400"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter column */}
          <div className="space-y-5 lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-steel-400">
              Stay Updated
            </h4>
            <p className="text-sm text-steel-300">
              Get the latest construction jobs, projects & industry insights
              every week.
            </p>
            <NewsletterForm variant="footer" />
          </div>
        </div>

        {/* ===== TRUST BADGES ===== */}
        <div className="border-t border-steel-800 py-8">
          <div className="flex flex-nowrap gap-3 overflow-x-auto md:flex-wrap md:justify-center">
            {TRUST_BADGES.map((badge) => {
              const Icon = badge.icon
              return (
                <span
                  key={badge.name}
                  className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-steel-700 bg-steel-900/60 px-4 py-1.5 text-xs font-semibold text-steel-300"
                >
                  <Icon className="h-3.5 w-3.5 text-brand-400" />
                  {badge.name}
                </span>
              )
            })}
          </div>
        </div>

        {/* ===== BOTTOM BAR ===== */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-steel-800 py-8 text-xs text-steel-400 md:flex-row">
          <p>
            © {currentYear} {COMPANY_NAME}. All rights reserved. Made in India 🇮🇳
          </p>
          <div className="flex gap-6">
            {FOOTER_NAV.legal.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-brand-400 transition-colors"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  )
}