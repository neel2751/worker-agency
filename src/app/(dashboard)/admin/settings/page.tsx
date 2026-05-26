"use client"

import { useState } from "react"
import { Save, Bell, Lock, Globe, Mail, Database, Shield, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const TABS = [
  { id: "general", label: "General", icon: Globe },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "security", label: "Security", icon: Lock },
  { id: "email", label: "Email", icon: Mail },
  { id: "permissions", label: "Permissions", icon: Users },
  { id: "data", label: "Data & Privacy", icon: Database },
]

export default function AdminSettingsPage() {
  const [activeTab, setActiveTab] = useState("general")
  const [saved, setSaved] = useState(false)

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Platform Settings</h1>
        <p className="text-foreground/70">Configure platform-wide settings and preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar Tabs */}
        <div className="space-y-1">
          {TABS.map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors text-left",
                  activeTab === tab.id
                    ? "bg-brand-500 text-white"
                    : "hover:bg-muted text-foreground/70"
                )}
              >
                <Icon className="h-4 w-4" />
                {tab.label}
              </button>
            )
          })}
        </div>

        {/* Content */}
        <div className="lg:col-span-3 space-y-6">
          {activeTab === "general" && (
            <div className="rounded-xl border border-border/50 bg-background p-6 space-y-6">
              <h2 className="text-xl font-bold">General Settings</h2>

              <div>
                <label className="block text-sm font-semibold mb-2">Platform Name</label>
                <input
                  type="text"
                  defaultValue="BuildForce"
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-brand-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Platform URL</label>
                <input
                  type="text"
                  defaultValue="https://buildforce.com"
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-brand-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Default Language</label>
                <select className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-brand-500">
                  <option>English</option>
                  <option>Hindi</option>
                  <option>Gujarati</option>
                  <option>Marathi</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Default Currency</label>
                <select className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-brand-500">
                  <option>INR (₹)</option>
                </select>
              </div>
              <div className="flex items-center gap-3">
                <input type="checkbox" id="maintenance" className="h-4 w-4 rounded accent-brand-500" />
                <label htmlFor="maintenance" className="text-sm font-medium">
                  Enable Maintenance Mode
                </label>
              </div>
            </div>
          )}

          {activeTab === "notifications" && (
            <div className="rounded-xl border border-border/50 bg-background p-6 space-y-4">
              <h2 className="text-xl font-bold mb-4">Notification Settings</h2>
              {[
                "New user registrations",
                "Company verification requests",
                "Worker verification requests",
                "Flagged content reports",
                "Payment failures",
                "System errors",
                "Daily revenue summary",
                "Weekly platform report",
              ].map((item) => (
                <div key={item} className="flex items-center justify-between p-3 border border-border/30 rounded-lg">
                  <p className="text-sm font-medium">{item}</p>
                  <input type="checkbox" defaultChecked className="h-4 w-4 rounded accent-brand-500" />
                </div>
              ))}
            </div>
          )}

          {activeTab === "security" && (
            <div className="rounded-xl border border-border/50 bg-background p-6 space-y-6">
              <h2 className="text-xl font-bold">Security Settings</h2>
              <div className="space-y-4">
                {[
                  { label: "Two-factor Authentication", desc: "Require 2FA for all admin accounts" },
                  { label: "IP Whitelisting", desc: "Restrict admin access by IP" },
                  { label: "Session Timeout", desc: "Auto-logout after 30 min inactivity" },
                  { label: "Password Complexity", desc: "Enforce strong passwords" },
                  { label: "Login Attempt Limit", desc: "Lock account after 5 failed attempts" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between p-4 border border-border/30 rounded-lg">
                    <div>
                      <p className="font-semibold text-sm">{item.label}</p>
                      <p className="text-xs text-foreground/60">{item.desc}</p>
                    </div>
                    <input type="checkbox" defaultChecked className="h-4 w-4 rounded accent-brand-500" />
                  </div>
                ))}
              </div>
              <div className="pt-4 border-t border-border/30">
                <Button variant="outline" className="gap-2">
                  <Shield className="h-4 w-4" />
                  View Security Audit Log
                </Button>
              </div>
            </div>
          )}

          {activeTab === "email" && (
            <div className="rounded-xl border border-border/50 bg-background p-6 space-y-6">
              <h2 className="text-xl font-bold">Email Configuration</h2>
              <div>
                <label className="block text-sm font-semibold mb-2">From Email</label>
                <input
                  type="email"
                  defaultValue="no-reply@buildforce.com"
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-brand-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Support Email</label>
                <input
                  type="email"
                  defaultValue="support@buildforce.com"
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-brand-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">SMTP Provider</label>
                <select className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-brand-500">
                  <option>SendGrid</option>
                  <option>Mailgun</option>
                  <option>AWS SES</option>
                  <option>Postmark</option>
                </select>
              </div>
            </div>
          )}

          {activeTab === "permissions" && (
            <div className="rounded-xl border border-border/50 bg-background p-6 space-y-4">
              <h2 className="text-xl font-bold mb-4">Admin Permissions</h2>
              {[
                { role: "Super Admin", count: 2, color: "bg-red-100 text-red-700" },
                { role: "Admin", count: 5, color: "bg-brand-100 text-brand-700" },
                { role: "Moderator", count: 8, color: "bg-blue-100 text-blue-700" },
                { role: "Support Agent", count: 12, color: "bg-green-100 text-green-700" },
              ].map((item) => (
                <div key={item.role} className="flex items-center justify-between p-4 border border-border/30 rounded-lg">
                  <div className="flex items-center gap-3">
                    <span className={cn("px-3 py-1 rounded-full text-xs font-semibold", item.color)}>
                      {item.role}
                    </span>
                    <span className="text-sm text-foreground/60">{item.count} users</span>
                  </div>
                  <Button size="sm" variant="outline">
                    Manage
                  </Button>
                </div>
              ))}
            </div>
          )}

          {activeTab === "data" && (
            <div className="rounded-xl border border-border/50 bg-background p-6 space-y-6">
              <h2 className="text-xl font-bold">Data & Privacy</h2>
              <div className="space-y-4">
                {[
                  { label: "GDPR Compliance", desc: "Enable GDPR-compliant data handling" },
                  { label: "DPDP Act 2023", desc: "Indian data protection act compliance" },
                  { label: "Auto-delete inactive accounts", desc: "After 2 years of inactivity" },
                  { label: "Data export tool", desc: "Allow users to export their data" },
                  { label: "Anonymized analytics", desc: "Don't track personal info" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between p-4 border border-border/30 rounded-lg">
                    <div>
                      <p className="font-semibold text-sm">{item.label}</p>
                      <p className="text-xs text-foreground/60">{item.desc}</p>
                    </div>
                    <input type="checkbox" defaultChecked className="h-4 w-4 rounded accent-brand-500" />
                  </div>
                ))}
              </div>
              <div className="pt-4 border-t border-border/30 flex gap-3">
                <Button variant="outline">Download All Data</Button>
                <Button variant="outline" className="text-red-600 border-red-200 hover:bg-red-50">
                  Purge Old Records
                </Button>
              </div>
            </div>
          )}

          <div className="flex items-center gap-4">
            <Button onClick={handleSave} className="bg-brand-500 hover:bg-brand-600 text-white gap-2">
              <Save className="h-4 w-4" />
              Save Changes
            </Button>
            {saved && <span className="text-green-600 font-semibold animate-fade-in">✓ Saved</span>}
          </div>
        </div>
      </div>
    </div>
  )
}