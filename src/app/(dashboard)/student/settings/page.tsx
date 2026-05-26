"use client"

import { useState } from "react"
import { Save, Bell, Lock, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function StudentSettingsPage() {
  const [preferences, setPreferences] = useState({
    emailNotifications: true,
    smsNotifications: false,
    jobAlerts: true,
    applicationUpdates: true,
    marketingEmails: false,
    showProfilePublic: true,
    showSalaryExpectation: false,
    language: "en",
  })

  const [profileVisibility, setProfileVisibility] = useState("public")
  const [isSaved, setIsSaved] = useState(false)

  const handleSave = () => {
    setIsSaved(true)
    setTimeout(() => setIsSaved(false), 2000)
  }

  return (
    <div className="space-y-8 max-w-2xl">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold mb-2">Settings</h1>
        <p className="text-foreground/70">
          Manage your account preferences and notifications
        </p>
      </div>

      {/* Notification Settings */}
      <div className="rounded-xl border border-border/50 bg-background p-6">
        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
          <Bell className="h-5 w-5 text-brand-500" />
          Notification Preferences
        </h2>

        <div className="space-y-4">
          {[
            {
              id: "emailNotifications",
              label: "Email Notifications",
              description: "Receive job alerts and updates via email",
            },
            {
              id: "smsNotifications",
              label: "SMS Notifications",
              description: "Get urgent updates via text message",
            },
            {
              id: "jobAlerts",
              label: "Job Alerts",
              description: "Daily jobs matching your profile",
            },
            {
              id: "applicationUpdates",
              label: "Application Updates",
              description: "Status changes on your applications",
            },
            {
              id: "marketingEmails",
              label: "Marketing Emails",
              description: "News, tips, and promotional offers",
            },
          ].map((setting) => (
            <label
              key={setting.id}
              className="flex items-start gap-4 p-4 rounded-lg border border-border/30 hover:border-brand-200 cursor-pointer transition-colors"
            >
              <input
                type="checkbox"
                checked={
                  preferences[setting.id as keyof typeof preferences] as boolean
                }
                onChange={(e) =>
                  setPreferences({
                    ...preferences,
                    [setting.id]: e.target.checked,
                  })
                }
                className="h-5 w-5 rounded border-border accent-brand-500 mt-0.5 flex-shrink-0"
              />
              <div className="flex-1">
                <p className="font-semibold text-foreground">{setting.label}</p>
                <p className="text-sm text-foreground/70">
                  {setting.description}
                </p>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Privacy Settings */}
      <div className="rounded-xl border border-border/50 bg-background p-6">
        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
          <Eye className="h-5 w-5 text-brand-500" />
          Privacy Settings
        </h2>

        <div className="space-y-4">
          <div className="p-4 rounded-lg border border-border/30">
            <p className="font-semibold mb-3">Profile Visibility</p>
            <div className="space-y-2">
              {[
                { value: "public", label: "Public - Visible to all companies" },
                { value: "private", label: "Private - Not visible to anyone" },
                {
                  value: "limited",
                  label: "Limited - Visible to companies you apply to",
                },
              ].map((option) => (
                <label
                  key={option.value}
                  className="flex items-center gap-3 p-3 rounded-lg border border-border/20 hover:border-brand-200 cursor-pointer transition-colors"
                >
                  <input
                    type="radio"
                    name="visibility"
                    value={option.value}
                    checked={profileVisibility === option.value}
                    onChange={(e) => setProfileVisibility(e.target.value)}
                    className="h-4 w-4 accent-brand-500"
                  />
                  <span className="text-sm font-medium">{option.label}</span>
                </label>
              ))}
            </div>
          </div>

          <label className="flex items-start gap-4 p-4 rounded-lg border border-border/30 hover:border-brand-200 cursor-pointer transition-colors">
            <input
              type="checkbox"
              checked={preferences.showSalaryExpectation}
              onChange={(e) =>
                setPreferences({
                  ...preferences,
                  showSalaryExpectation: e.target.checked,
                })
              }
              className="h-5 w-5 rounded border-border accent-brand-500 mt-0.5 flex-shrink-0"
            />
            <div className="flex-1">
              <p className="font-semibold text-foreground">
                Show Salary Expectation
              </p>
              <p className="text-sm text-foreground/70">
                Let companies see your expected salary range
              </p>
            </div>
          </label>
        </div>
      </div>

      {/* Account Security */}
      <div className="rounded-xl border border-border/50 bg-background p-6">
        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
          <Lock className="h-5 w-5 text-brand-500" />
          Account Security
        </h2>

        <div className="space-y-3">
          <Button variant="outline" className="w-full">
            Change Password
          </Button>
          <Button variant="outline" className="w-full">
            Two-Factor Authentication
          </Button>
          <Button variant="outline" className="w-full">
            Connected Devices
          </Button>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex items-center gap-4">
        <Button
          onClick={handleSave}
          className="bg-brand-500 hover:bg-brand-600 text-white gap-2"
        >
          <Save className="h-4 w-4" />
          Save Changes
        </Button>
        {isSaved && (
          <span className="text-green-600 font-semibold animate-fade-in">
            ✓ Changes saved
          </span>
        )}
      </div>

      {/* Danger Zone */}
      <div className="rounded-xl border-2 border-red-200 dark:border-red-900/30 bg-red-50 dark:bg-red-500/5 p-6">
        <h2 className="text-lg font-bold text-red-600 mb-3">Danger Zone</h2>
        <p className="text-sm text-red-700 dark:text-red-400 mb-4">
          These actions cannot be undone. Please be careful.
        </p>
        <Button className="bg-red-600 hover:bg-red-700 text-white">
          Delete Account
        </Button>
      </div>
    </div>
  )
}