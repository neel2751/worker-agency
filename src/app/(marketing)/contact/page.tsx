"use client"

import { useState } from "react"
import { Container } from "@/components/layout/Container"
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, Headphones, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SITE_CONFIG } from "@/config/site"
import { OFFICES } from "@/lib/constants"

const CONTACT_TYPES = [
  { icon: Users, title: "Sales Inquiry", description: "Talk to our sales team about plans & pricing", email: "sales@buildforce.com" },
  { icon: Headphones, title: "Support", description: "Get help with your account or any issues", email: "support@buildforce.com" },
  { icon: MessageSquare, title: "Partnerships", description: "Discuss partnership opportunities", email: "partners@buildforce.com" },
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    type: "general",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="max-w-md text-center p-8">
          <div className="h-20 w-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="h-10 w-10 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Message Sent!</h1>
          <p className="text-foreground/70 mb-8">
            Thanks for reaching out. Our team will get back to you within 24 hours.
          </p>
          <Button onClick={() => setSubmitted(false)} className="bg-brand-500 hover:bg-brand-600 text-white">
            Send Another Message
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="py-20 gradient-hero">
        <Container className="text-center">
          <h1 className="text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Choose how you'd like to reach us.
          </p>
        </Container>
      </section>

      <Container className="py-16 -mt-12 relative z-10">
        {/* Contact Type Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {CONTACT_TYPES.map((type) => {
            const Icon = type.icon
            return (
              <a
                key={type.title}
                href={`mailto:${type.email}`}
                className="rounded-xl border border-border/50 bg-background p-6 hover:border-brand-200 hover:shadow-card-hover transition-all group"
              >
                <div className="h-12 w-12 rounded-xl bg-brand-50 dark:bg-brand-500/10 text-brand-600 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-bold mb-2">{type.title}</h3>
                <p className="text-sm text-foreground/60 mb-3">{type.description}</p>
                <p className="text-sm font-semibold text-brand-600 group-hover:text-brand-700">{type.email}</p>
              </a>
            )
          })}
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2 rounded-2xl border border-border/50 bg-background p-8">
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Your Name *</label>
                  <input
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-brand-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email *</label>
                  <input
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-brand-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Phone</label>
                  <input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-brand-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Inquiry Type</label>
                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-brand-500"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="sales">Sales</option>
                    <option value="support">Support</option>
                    <option value="partnership">Partnership</option>
                    <option value="press">Press / Media</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Subject *</label>
                <input
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-brand-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Message *</label>
                <textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  placeholder="Tell us more about your inquiry..."
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-brand-500 resize-none"
                />
              </div>

              <Button type="submit" className="bg-brand-500 hover:bg-brand-600 text-white gap-2 h-12 px-8">
                Send Message
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-border/50 bg-background p-6">
              <h3 className="font-bold mb-4">Get in Touch</h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-brand-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <a href={`mailto:${SITE_CONFIG.email}`} className="text-foreground/70 hover:text-brand-600">
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-brand-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1">Phone</p>
                    <a href={`tel:${SITE_CONFIG.phone}`} className="text-foreground/70 hover:text-brand-600">
                      {SITE_CONFIG.phone}
                    </a>
                    <p className="text-xs text-foreground/50 mt-1">Mon-Sat, 9 AM - 7 PM IST</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border/50 bg-background p-6">
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-brand-500" />
                Our Offices
              </h3>
              <div className="space-y-4">
                {OFFICES.map((office) => (
                  <div key={office.city} className="pb-4 border-b border-border/30 last:border-0 last:pb-0">
                    <p className="font-semibold text-sm mb-1">{office.city}</p>
                    <p className="text-xs text-foreground/60">{office.address}</p>
                    <p className="text-xs text-foreground/60">{office.state}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}