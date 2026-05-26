"use client"

import { useState } from "react"
import { Plus, Edit2, Check, X, Star, Users, CreditCard, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const PLANS = [
  {
    id: 1,
    name: "Free",
    price: 0,
    period: "forever",
    customers: 2840,
    features: [
      { text: "Up to 3 active job posts", included: true },
      { text: "Basic candidate filters", included: true },
      { text: "Email support", included: true },
      { text: "Resume database access", included: false },
      { text: "Analytics dashboard", included: false },
      { text: "Priority support", included: false },
    ],
    color: "border-steel-200",
    popular: false,
  },
  {
    id: 2,
    name: "Basic",
    price: 9000,
    period: "month",
    customers: 318,
    features: [
      { text: "Up to 15 active job posts", included: true },
      { text: "Advanced candidate filters", included: true },
      { text: "Email & chat support", included: true },
      { text: "Resume database access", included: true },
      { text: "Basic analytics", included: true },
      { text: "Priority support", included: false },
    ],
    color: "border-blue-500",
    popular: false,
  },
  {
    id: 3,
    name: "Premium",
    price: 25000,
    period: "month",
    customers: 387,
    features: [
      { text: "Unlimited job posts", included: true },
      { text: "All filters + AI matching", included: true },
      { text: "24/7 priority support", included: true },
      { text: "Full resume database", included: true },
      { text: "Advanced analytics", included: true },
      { text: "Branded job posts", included: true },
    ],
    color: "border-brand-500",
    popular: true,
  },
  {
    id: 4,
    name: "Enterprise",
    price: 100000,
    period: "month",
    customers: 142,
    features: [
      { text: "Everything in Premium", included: true },
      { text: "Dedicated account manager", included: true },
      { text: "Custom integrations & API", included: true },
      { text: "White-label options", included: true },
      { text: "Bulk hiring tools", included: true },
      { text: "Custom contracts & SLA", included: true },
    ],
    color: "border-steel-900",
    popular: false,
  },
]

const SUBSCRIPTION_STATS = [
  { label: "Total Subscribers", value: "847", icon: Users, change: "+12.5%" },
  { label: "MRR", value: "₹48L", icon: CreditCard, change: "+18.2%" },
  { label: "Churn Rate", value: "2.4%", icon: TrendingUp, change: "-0.8%" },
  { label: "Avg Plan Value", value: "₹56K", icon: Star, change: "+5.1%" },
]

function formatINR(amount: number) {
  if (amount >= 100000) return `₹${(amount / 100000).toFixed(1)}L`
  return `₹${amount.toLocaleString()}`
}

export default function AdminSubscriptionsPage() {
  const [editingId, setEditingId] = useState<number | null>(null)

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">Subscription Plans</h1>
          <p className="text-foreground/70">Manage pricing tiers and customer subscriptions</p>
        </div>
        <Button className="bg-brand-500 hover:bg-brand-600 text-white gap-2">
          <Plus className="h-4 w-4" />
          Create Plan
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SUBSCRIPTION_STATS.map((stat) => {
          const Icon = stat.icon
          return (
            <div key={stat.label} className="rounded-xl border border-border/50 bg-background p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="h-12 w-12 rounded-lg bg-brand-50 dark:bg-brand-500/10 flex items-center justify-center">
                  <Icon className="h-6 w-6 text-brand-500" />
                </div>
                <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">{stat.change}</span>
              </div>
              <p className="text-sm text-foreground/70 mb-1">{stat.label}</p>
              <p className="text-3xl font-bold">{stat.value}</p>
            </div>
          )
        })}
      </div>

      {/* Plans Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {PLANS.map((plan) => (
          <div
            key={plan.id}
            className={cn(
              "rounded-2xl border-2 bg-background p-6 relative",
              plan.color,
              plan.popular && "shadow-card-hover"
            )}
          >
            {plan.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-brand-500 text-white text-xs font-bold rounded-full">
                MOST POPULAR
              </span>
            )}

            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl font-bold">{plan.name}</h3>
              <button
                onClick={() => setEditingId(editingId === plan.id ? null : plan.id)}
                className="p-1.5 hover:bg-muted rounded-lg transition-colors"
              >
                <Edit2 className="h-4 w-4 text-foreground/60" />
              </button>
            </div>

            <div className="mb-6">
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold">{plan.price === 0 ? "Free" : formatINR(plan.price)}</span>
                {plan.price > 0 && <span className="text-sm text-foreground/60">/{plan.period}</span>}
              </div>
              <p className="text-xs text-foreground/60 mt-2">
                {plan.customers.toLocaleString()} active customers
              </p>
            </div>

            <div className="space-y-2 mb-6 min-h-[180px]">
              {plan.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2 text-sm">
                  {feature.included ? (
                    <Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                  ) : (
                    <X className="h-4 w-4 text-foreground/30 flex-shrink-0 mt-0.5" />
                  )}
                  <span className={feature.included ? "" : "text-foreground/50 line-through"}>
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            <Button
              variant={plan.popular ? "default" : "outline"}
              className={cn("w-full", plan.popular && "bg-brand-500 hover:bg-brand-600 text-white")}
            >
              Manage Plan
            </Button>
          </div>
        ))}
      </div>

      {/* Revenue Distribution */}
      <div className="rounded-xl border border-border/50 bg-background p-6">
        <h2 className="text-xl font-bold mb-6">Revenue Distribution by Plan</h2>
        <div className="space-y-4">
          {PLANS.filter((p) => p.price > 0).map((plan) => {
            const revenue = plan.price * plan.customers
            const maxRevenue = Math.max(...PLANS.filter((p) => p.price > 0).map((p) => p.price * p.customers))
            return (
              <div key={plan.id}>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="font-semibold">{plan.name}</span>
                  <span className="text-foreground/60">
                    {formatINR(revenue)} ({plan.customers} customers)
                  </span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div
                    className={cn(
                      "h-full rounded-full transition-all",
                      plan.name === "Premium"
                        ? "bg-brand-500"
                        : plan.name === "Enterprise"
                          ? "bg-steel-800"
                          : "bg-blue-500"
                    )}
                    style={{ width: `${(revenue / maxRevenue) * 100}%` }}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}