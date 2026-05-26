import { Mail, Phone, ShieldCheck, MapPin } from "lucide-react"
import { CONTACT_EMAIL, PHONE } from "@/lib/constants"
import { Container } from "./Container"

export function TopBar() {
  return (
    <div className="hidden bg-steel-950 text-steel-100 py-2 md:block border-b border-steel-800">
      <Container className="flex items-center justify-between text-xs font-medium">
        <div className="flex items-center gap-6">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="flex items-center gap-2 hover:text-brand-400 transition-colors"
          >
            <Mail className="h-3 w-3" />
            {CONTACT_EMAIL}
          </a>
          <a
            href={`tel:${PHONE}`}
            className="flex items-center gap-2 hover:text-brand-400 transition-colors"
          >
            <Phone className="h-3 w-3" />
            {PHONE}
          </a>
          <span className="hidden lg:flex items-center gap-2 text-steel-300">
            <MapPin className="h-3 w-3" />
            Ahmedabad · Mumbai · Bengaluru
          </span>
        </div>
        <div className="flex items-center gap-2 text-brand-400">
          <ShieldCheck className="h-3 w-3" />
          <span>India's Trusted Construction Recruitment Platform</span>
        </div>
      </Container>
    </div>
  )
}