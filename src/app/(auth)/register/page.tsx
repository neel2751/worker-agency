"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { Mail, Lock, Eye, EyeOff, ArrowRight, HardHat, Building2, GraduationCap, Hammer } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { USER_ROLES, ROLE_LABELS } from "@/lib/constants"
import { cn } from "@/lib/utils"

const ROLE_OPTIONS = [
  {
    value: USER_ROLES.STUDENT,
    label: ROLE_LABELS.student,
    icon: GraduationCap,
    description: "Find internships & jobs",
  },
  {
    value: USER_ROLES.WORKER,
    label: ROLE_LABELS.worker,
    icon: HardHat,
    description: "Get hired for projects",
  },
  {
    value: USER_ROLES.COMPANY,
    label: ROLE_LABELS.company,
    icon: Building2,
    description: "Hire skilled workers",
  },
  {
    value: USER_ROLES.ADMIN,
    label: ROLE_LABELS.admin,
    icon: Hammer,
    description: "Manage the platform",
  },
]

export default function RegisterPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const roleParam = searchParams.get("role")

  const [step, setStep] = useState<"role" | "details">(roleParam ? "details" : "role")
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const [formData, setFormData] = useState({
    role: roleParam || "",
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    acceptedTerms: false,
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleRoleSelect = (role: string) => {
    setFormData((prev) => ({ ...prev, role }))
    setStep("details")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required"
    if (!formData.email.includes("@")) newErrors.email = "Valid email is required"
    if (!formData.phone || formData.phone.length < 10)
      newErrors.phone = "Valid phone number is required"
    if (formData.password.length < 8)
      newErrors.password = "Password must be at least 8 characters"
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match"
    if (!formData.acceptedTerms)
      newErrors.acceptedTerms = "You must accept the terms"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      // Redirect to appropriate dashboard
      if (formData.role === USER_ROLES.STUDENT) {
        router.push("/student/dashboard")
      } else if (formData.role === USER_ROLES.WORKER) {
        router.push("/worker/dashboard")
      } else if (formData.role === USER_ROLES.COMPANY) {
        router.push("/company/dashboard")
      } else {
        router.push("/admin/dashboard")
      }
    }, 1000)
  }

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-md">
        {/* Back to home */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-brand-600 hover:text-brand-700 font-semibold mb-8 group"
        >
          <ArrowRight className="h-5 w-5 rotate-180 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        {/* Card */}
        <div className="bg-white dark:bg-steel-900 rounded-2xl border border-border/50 p-8 shadow-elev-3">
          {step === "role" ? (
            <>
              {/* Role Selection */}
              <div className="mb-8">
                <h1 className="text-3xl font-bold mb-2">Join BuildForce</h1>
                <p className="text-foreground/60">Choose your role to get started</p>
              </div>

              <div className="space-y-3">
                {ROLE_OPTIONS.map((option) => {
                  const Icon = option.icon
                  return (
                    <button
                      key={option.value}
                      onClick={() => handleRoleSelect(option.value)}
                      className="w-full flex items-start gap-4 p-4 rounded-xl border-2 border-border hover:border-brand-500 hover:bg-brand-50 dark:hover:bg-brand-500/10 transition-all text-left group"
                    >
                      <div className="h-12 w-12 rounded-lg bg-brand-100 dark:bg-brand-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-200 dark:group-hover:bg-brand-500/30 transition-colors">
                        <Icon className="h-6 w-6 text-brand-600" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-foreground">
                          {option.label}
                        </p>
                        <p className="text-sm text-foreground/60">
                          {option.description}
                        </p>
                      </div>
                      <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-brand-600 group-hover:translate-x-1 transition-all" />
                    </button>
                  )
                })}
              </div>

              {/* Login link */}
              <p className="text-center text-foreground/60 mt-8">
                Already have an account?{" "}
                <Link href="/login" className="text-brand-600 hover:text-brand-700 font-semibold">
                  Sign in
                </Link>
              </p>
            </>
          ) : (
            <>
              {/* Details Form */}
              <div className="mb-6 flex items-center gap-3">
                <button
                  onClick={() => setStep("role")}
                  className="text-brand-600 hover:text-brand-700"
                >
                  <ArrowRight className="h-5 w-5 rotate-180" />
                </button>
                <div>
                  <h1 className="text-2xl font-bold">Create Your Account</h1>
                  <p className="text-sm text-foreground/60">
                    Role: <span className="font-semibold">{ROLE_LABELS[formData.role as keyof typeof ROLE_LABELS]}</span>
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-semibold mb-2">Full Name</label>
                  <Input
                    type="text"
                    name="fullName"
                    placeholder="Your full name"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={cn("h-11", errors.fullName && "border-red-500")}
                  />
                  {errors.fullName && (
                    <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <Input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={cn("h-11", errors.email && "border-red-500")}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-600 mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold mb-2">Phone</label>
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="+91 XXXXX XXXXX"
                    value={formData.phone}
                    onChange={handleChange}
                    className={cn("h-11", errors.phone && "border-red-500")}
                  />
                  {errors.phone && (
                    <p className="text-xs text-red-600 mt-1">{errors.phone}</p>
                  )}
                </div>

                {/* Password */}
                <div>
                  <label className="block text-sm font-semibold mb-2">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Min 8 characters"
                      value={formData.password}
                      onChange={handleChange}
                      className={cn("pl-10 pr-10 h-11", errors.password && "border-red-500")}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="text-xs text-red-600 mt-1">{errors.password}</p>
                  )}
                </div>

                {/* Confirm Password */}
                <div>
                  <label className="block text-sm font-semibold mb-2">Confirm Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      placeholder="Re-enter your password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className={cn("pl-10 pr-10 h-11", errors.confirmPassword && "border-red-500")}
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                  {errors.confirmPassword && (
                    <p className="text-xs text-red-600 mt-1">{errors.confirmPassword}</p>
                  )}
                </div>

                {/* Terms */}
                <div className="flex items-start gap-3 pt-2">
                  <input
                    type="checkbox"
                    id="terms"
                    name="acceptedTerms"
                    checked={formData.acceptedTerms}
                    onChange={handleChange}
                    className="h-4 w-4 rounded border-border accent-brand-500 mt-1"
                  />
                  <label htmlFor="terms" className="text-sm text-foreground/70">
                    I agree to the{" "}
                    <Link href="/legal/terms" className="text-brand-600 hover:underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/legal/privacy" className="text-brand-600 hover:underline">
                      Privacy Policy
                    </Link>
                  </label>
                </div>
                {errors.acceptedTerms && (
                  <p className="text-xs text-red-600">{errors.acceptedTerms}</p>
                )}

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full h-11 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-lg transition-all mt-6"
                >
                  {isLoading ? "Creating account..." : "Create Account"}
                </Button>
              </form>

              {/* Login link */}
              <p className="text-center text-foreground/60 mt-6 text-sm">
                Already have an account?{" "}
                <Link href="/login" className="text-brand-600 hover:text-brand-700 font-semibold">
                  Sign in
                </Link>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}