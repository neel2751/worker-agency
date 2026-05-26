"use client"

import { useState } from "react"
import { Edit2, Plus, MapPin, Globe, Phone, Mail, Users, Building2, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CompanyProfilePage() {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <div className="space-y-8">
      {/* Profile Header */}
      <div className="rounded-xl border border-border/50 bg-background overflow-hidden">
        <div className="h-40 bg-gradient-to-r from-steel-800 to-steel-900 relative">
          <div className="absolute inset-0 blueprint-pattern opacity-20" />
        </div>

        <div className="relative px-6 pb-6">
          <div className="flex items-end gap-6 -mt-16 mb-6">
            <div className="h-32 w-32 rounded-2xl bg-white border-4 border-background shadow-elev-2 flex items-center justify-center">
              <Building2 className="h-16 w-16 text-steel-700" />
            </div>
            <div className="flex-1 pb-2">
              <div className="flex items-center gap-3 mb-1">
                <h1 className="text-3xl font-bold">L&T Construction</h1>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">✓ Verified</span>
                <span className="px-3 py-1 bg-brand-100 text-brand-700 rounded-full text-xs font-semibold">Premium</span>
              </div>
              <p className="text-foreground/70">India's Largest Construction & EPC Conglomerate</p>
            </div>
            <Button onClick={() => setIsEditing(!isEditing)} variant="outline" className="h-11">
              <Edit2 className="h-4 w-4 mr-2" />
              {isEditing ? "Save" : "Edit Profile"}
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Active Jobs", value: "142" },
              { label: "Total Hires", value: "8,420" },
              { label: "Rating", value: "4.6★" },
              { label: "Followers", value: "18.4K" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center p-4 bg-muted/30 rounded-lg">
                <p className="text-2xl font-bold text-brand-600">{stat.value}</p>
                <p className="text-sm text-foreground/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Sidebar */}
        <div className="space-y-6">
          <div className="rounded-xl border border-border/50 bg-background p-6">
            <h3 className="font-bold mb-4">Company Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-foreground/70">
                <Building2 className="h-4 w-4 flex-shrink-0" />
                <span>EPC Company</span>
              </div>
              <div className="flex items-center gap-2 text-foreground/70">
                <Users className="h-4 w-4 flex-shrink-0" />
                <span>5000+ Employees</span>
              </div>
              <div className="flex items-center gap-2 text-foreground/70">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span>Mumbai, Maharashtra</span>
              </div>
              <div className="flex items-center gap-2 text-foreground/70">
                <Globe className="h-4 w-4 flex-shrink-0" />
                <a href="#" className="text-brand-600 hover:underline">ltconstruction.com</a>
              </div>
              <div className="flex items-center gap-2 text-foreground/70">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+91 22 6752 5656</span>
              </div>
              <div className="flex items-center gap-2 text-foreground/70">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>careers@ltconstruction.com</span>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-border/50 bg-background p-6">
            <h3 className="font-bold mb-4">Specialties</h3>
            <div className="flex flex-wrap gap-2">
              {["Mega Infrastructure", "Metro Rail", "Highways", "Heavy Civil", "Power Transmission"].map((s) => (
                <span key={s} className="px-3 py-1 bg-brand-50 dark:bg-brand-500/10 text-brand-700 dark:text-brand-400 rounded-full text-xs font-medium">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          <div className="rounded-xl border border-border/50 bg-background p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold">About Company</h3>
              <Button size="sm" variant="ghost"><Edit2 className="h-4 w-4" /></Button>
            </div>
            <p className="text-foreground/70 leading-relaxed">
              L&T Construction is India's largest construction services provider with over 8 decades of experience. We deliver integrated EPC solutions across buildings, infrastructure, heavy civil, power, and metallurgical sectors across India and 30+ countries.
            </p>
          </div>

          <div className="rounded-xl border border-border/50 bg-background p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold">Branch Offices</h3>
              <Button size="sm" variant="ghost"><Plus className="h-4 w-4" /></Button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {["Chennai", "Delhi", "Bengaluru", "Hyderabad", "Ahmedabad"].map((city) => (
                <div key={city} className="flex items-center gap-2 p-3 border border-border/30 rounded-lg text-sm">
                  <MapPin className="h-4 w-4 text-brand-500" />
                  <span>{city}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-border/50 bg-background p-6">
            <h3 className="text-lg font-bold mb-4">Certifications & Awards</h3>
            <div className="space-y-3">
              {["ISO 9001:2015", "ISO 14001:2015", "ISO 45001:2018", "Best Infrastructure Company - ICC 2024"].map((cert) => (
                <div key={cert} className="flex items-center gap-3 p-3 border border-border/30 rounded-lg">
                  <Star className="h-4 w-4 text-hiviz-500 flex-shrink-0" />
                  <span className="text-sm font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}