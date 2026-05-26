import { Mail, Phone, MapPin } from "lucide-react"

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Let's talk architecture.</h2>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Whether you need a complete Workday implementation or an emergency fix for a broken Studio integration, our elite team of architects is ready.
        </p>
      </div>

      <div className="space-y-6 pt-8 border-t">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-primary/10 rounded-xl text-primary shrink-0">
            <Mail className="h-6 w-6" />
          </div>
          <div>
            <h4 className="font-bold text-lg">Email Us</h4>
            <p className="text-muted-foreground mb-1">For general inquiries and project requests.</p>
            <a href="mailto:hello@northstream.com" className="text-primary font-semibold hover:underline">hello@northstream.com</a>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="p-3 bg-primary/10 rounded-xl text-primary shrink-0">
            <Phone className="h-6 w-6" />
          </div>
          <div>
            <h4 className="font-bold text-lg">Call Us</h4>
            <p className="text-muted-foreground mb-1">Available Mon-Fri, 9am-6pm EST.</p>
            <a href="tel:+18005550199" className="text-primary font-semibold hover:underline">+1 (800) 555-0199</a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="p-3 bg-primary/10 rounded-xl text-primary shrink-0">
            <MapPin className="h-6 w-6" />
          </div>
          <div>
            <h4 className="font-bold text-lg">Headquarters</h4>
            <p className="text-muted-foreground">100 Tech Square, Suite 400<br/>Cambridge, MA 02139</p>
          </div>
        </div>
      </div>
    </div>
  )
}
