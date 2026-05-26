"use client"

import { useState } from "react"
import { Plus, Trash2, FileCheck, Upload, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const CERTIFICATIONS = [
  {
    id: 1,
    name: "Skill India Certified Mason - Level 4",
    issuer: "NSDC",
    year: 2022,
    verified: true,
    fileUrl: "#",
  },
  {
    id: 2,
    name: "Safety Training Certificate",
    issuer: "L&T Institute",
    year: 2023,
    verified: true,
    fileUrl: "#",
  },
]

export default function WorkerCertificationsPage() {
  const [certifications, setCertifications] = useState(CERTIFICATIONS)
  const [isAdding, setIsAdding] = useState(false)
  const [newCert, setNewCert] = useState({ name: "", issuer: "", year: "" })

  const addCertification = () => {
    if (!newCert.name || !newCert.issuer) return
    setCertifications((prev) => [
      ...prev,
      { id: Date.now(), ...newCert, year: Number(newCert.year), verified: false, fileUrl: "#" },
    ])
    setNewCert({ name: "", issuer: "", year: "" })
    setIsAdding(false)
  }

  const removeCertification = (id: number) => {
    setCertifications((prev) => prev.filter((c) => c.id !== id))
  }

  return (
    <div className="space-y-8 max-w-3xl">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Certifications</h1>
          <p className="text-foreground/70">Upload and manage your trade certifications</p>
        </div>
        <Button
          onClick={() => setIsAdding(!isAdding)}
          className="bg-brand-500 hover:bg-brand-600 text-white gap-2"
        >
          <Plus className="h-4 w-4" />
          Add Certificate
        </Button>
      </div>

      {/* Add New Form */}
      {isAdding && (
        <div className="rounded-xl border-2 border-brand-200 bg-brand-50/30 dark:bg-brand-500/5 p-6">
          <h3 className="font-bold mb-4">New Certification</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="md:col-span-3">
              <label className="block text-sm font-semibold mb-2">Certificate Name</label>
              <input
                type="text"
                placeholder="e.g. Skill India Certified Electrician"
                value={newCert.name}
                onChange={(e) => setNewCert({ ...newCert, name: e.target.value })}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-brand-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Issued By</label>
              <input
                type="text"
                placeholder="e.g. NSDC"
                value={newCert.issuer}
                onChange={(e) => setNewCert({ ...newCert, issuer: e.target.value })}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-brand-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Year</label>
              <input
                type="number"
                placeholder="2024"
                value={newCert.year}
                onChange={(e) => setNewCert({ ...newCert, year: e.target.value })}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-brand-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Upload File</label>
              <div className="border-2 border-dashed border-border rounded-lg p-3 text-center cursor-pointer hover:border-brand-300 transition-colors">
                <Upload className="h-5 w-5 mx-auto text-muted-foreground mb-1" />
                <p className="text-xs text-foreground/60">PDF or Image</p>
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <Button onClick={addCertification} className="bg-brand-500 hover:bg-brand-600 text-white">
              Save
            </Button>
            <Button variant="outline" onClick={() => setIsAdding(false)}>
              Cancel
            </Button>
          </div>
        </div>
      )}

      {/* Certifications List */}
      <div className="space-y-4">
        {certifications.map((cert) => (
          <div
            key={cert.id}
            className="rounded-xl border border-border/50 bg-background p-6 flex items-center gap-4 hover:border-brand-200 transition-all"
          >
            <div className="h-14 w-14 rounded-xl bg-brand-50 dark:bg-brand-500/10 flex items-center justify-center flex-shrink-0">
              <FileCheck className="h-7 w-7 text-brand-600" />
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-bold">{cert.name}</h3>
                {cert.verified && (
                  <span className="flex items-center gap-1 px-2 py-0.5 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                    <CheckCircle2 className="h-3 w-3" />
                    Verified
                  </span>
                )}
              </div>
              <p className="text-sm text-foreground/70">
                {cert.issuer} • {cert.year}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <Button size="sm" variant="outline">
                View
              </Button>
              <button
                onClick={() => removeCertification(cert.id)}
                className="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-lg transition-colors"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {certifications.length === 0 && (
        <div className="text-center py-12 rounded-xl border border-border/50 bg-background">
          <FileCheck className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
          <h3 className="text-xl font-bold mb-2">No Certifications Yet</h3>
          <p className="text-foreground/60 mb-6">
            Add your trade certifications to stand out to employers
          </p>
        </div>
      )}
    </div>
  )
}