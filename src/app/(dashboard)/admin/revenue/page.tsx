"use client"

import { TrendingUp, IndianRupee, CreditCard, Users, ArrowUp, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

const REVENUE_KPIS = [
  { label: "Total Revenue", value: "₹2.4Cr", change: "+18.5%", icon: IndianRupee },
  { label: "This Month", value: "₹48L", change: "+12.3%", icon: TrendingUp },
  { label: "Active Subscriptions", value: "847", change: "+8.7%", icon: Users },
  { label: "Avg Transaction", value: "₹56,720", change: "+5.2%", icon: CreditCard },
]

const REVENUE_BY_PLAN = [
  { plan: "Enterprise", customers: 142, revenue: 14200000, color: "bg-brand-500" },
  { plan: "Premium", customers: 387, revenue: 7740000, color: "bg-hiviz-500" },
  { plan: "Basic", customers: 318, revenue: 2862000, color: "bg-blue-500" },
]

const RECENT_TRANSACTIONS = [
  { id: "TXN-4521", customer: "L&T Construction", plan: "Enterprise", amount: 100000, date: "2 hours ago", status: "Success" },
  { id: "TXN-4520", customer: "Brigade Group", plan: "Premium", amount: 25000, date: "5 hours ago", status: "Success" },
  { id: "TXN-4519", customer: "Tata Projects", plan: "Enterprise", amount: 100000, date: "1 day ago", status: "Success" },
  { id: "TXN-4518", customer: "Patel Builders", plan: "Basic", amount: 9000, date: "1 day ago", status: "Pending" },
  { id: "TXN-4517", customer: "Lodha Group", plan: "Premium", amount: 25000, date: "2 days ago", status: "Success" },
  { id: "TXN-4516", customer: "DLF Limited", plan: "Enterprise", amount: 100000, date: "2 days ago", status: "Failed" },
]

const STATUS_COLORS: Record<string, string> = {
  Success: "bg-green-100 text-green-700",
  Pending: "bg-amber-100 text-amber-700",
  Failed: "bg-red-100 text-red-700",
}

const MONTHLY_REVENUE = [
  { month: "Jan", value: 28 },
  { month: "Feb", value: 32 },
  { month: "Mar", value: 35 },
  { month: "Apr", value: 38 },
  { month: "May", value: 42 },
  { month: "Jun", value: 45 },
  { month: "Jul", value: 48 },
]

function formatINR(amount: number) {
  if (amount >= 10000000) return `₹${(amount / 10000000).toFixed(1)}Cr`
  if (amount >= 100000) return `₹${(amount / 100000).toFixed(1)}L`
  return `₹${(amount / 1000).toFixed(0)}K`
}

export default function AdminRevenuePage() {
  const maxRevenue = Math.max(...MONTHLY_REVENUE.map((m) => m.value))
  const totalRevenue = REVENUE_BY_PLAN.reduce((sum, p) => sum + p.revenue, 0)

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">Revenue</h1>
          <p className="text-foreground/70">Financial overview and transactions</p>
        </div>
        <Button variant="outline" className="gap-2">
          <Download className="h-4 w-4" />
          Download Report
        </Button>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {REVENUE_KPIS.map((kpi) => {
          const Icon = kpi.icon
          return (
            <div key={kpi.label} className="rounded-xl border border-border/50 bg-background p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="h-12 w-12 rounded-lg bg-brand-50 dark:bg-brand-500/10 flex items-center justify-center">
                  <Icon className="h-6 w-6 text-brand-500" />
                </div>
                <span className="flex items-center gap-1 text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">
                  <ArrowUp className="h-3 w-3" />
                  {kpi.change}
                </span>
              </div>
              <p className="text-sm text-foreground/70 mb-1">{kpi.label}</p>
              <p className="text-3xl font-bold">{kpi.value}</p>
            </div>
          )
        })}
      </div>

      {/* Revenue Chart */}
      <div className="rounded-xl border border-border/50 bg-background p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">Monthly Revenue Trend</h2>
          <p className="text-sm text-foreground/60">in ₹ Lakhs</p>
        </div>

        <div className="flex items-end justify-between gap-3 h-64 mb-3">
          {MONTHLY_REVENUE.map((data) => (
            <div key={data.month} className="flex-1 flex flex-col items-center gap-2">
              <div className="w-full h-full flex items-end">
                <div
                  className="w-full bg-gradient-to-t from-brand-500 to-brand-400 rounded-t-lg transition-all hover:from-brand-600 hover:to-brand-500 cursor-pointer relative group"
                  style={{ height: `${(data.value / maxRevenue) * 100}%` }}
                >
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-steel-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    ₹{data.value}L
                  </span>
                </div>
              </div>
              <span className="text-xs text-foreground/60">{data.month}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Revenue by Plan */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {REVENUE_BY_PLAN.map((plan) => (
          <div key={plan.plan} className="rounded-xl border border-border/50 bg-background p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-bold uppercase tracking-wide text-foreground/60">{plan.plan}</span>
              <span className={`h-3 w-3 rounded-full ${plan.color}`} />
            </div>
            <p className="text-3xl font-bold mb-2">{formatINR(plan.revenue)}</p>
            <p className="text-sm text-foreground/60 mb-4">{plan.customers} customers</p>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div
                className={`h-full ${plan.color} rounded-full transition-all`}
                style={{ width: `${(plan.revenue / totalRevenue) * 100}%` }}
              />
            </div>
            <p className="text-xs text-foreground/50 mt-2">
              {Math.round((plan.revenue / totalRevenue) * 100)}% of total revenue
            </p>
          </div>
        ))}
      </div>

      {/* Recent Transactions */}
      <div className="rounded-xl border border-border/50 bg-background overflow-hidden">
        <div className="p-6 border-b border-border/30">
          <h2 className="text-xl font-bold">Recent Transactions</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left px-6 py-3 text-xs font-semibold uppercase text-foreground/70">Transaction ID</th>
                <th className="text-left px-6 py-3 text-xs font-semibold uppercase text-foreground/70">Customer</th>
                <th className="text-left px-6 py-3 text-xs font-semibold uppercase text-foreground/70 hidden md:table-cell">Plan</th>
                <th className="text-left px-6 py-3 text-xs font-semibold uppercase text-foreground/70">Amount</th>
                <th className="text-left px-6 py-3 text-xs font-semibold uppercase text-foreground/70 hidden lg:table-cell">Date</th>
                <th className="text-left px-6 py-3 text-xs font-semibold uppercase text-foreground/70">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/30">
              {RECENT_TRANSACTIONS.map((txn) => (
                <tr key={txn.id} className="hover:bg-muted/20">
                  <td className="px-6 py-4 font-mono text-sm">{txn.id}</td>
                  <td className="px-6 py-4 font-medium text-sm">{txn.customer}</td>
                  <td className="px-6 py-4 hidden md:table-cell">
                    <span className="px-2 py-1 bg-muted rounded-md text-xs font-medium">{txn.plan}</span>
                  </td>
                  <td className="px-6 py-4 font-bold text-sm">{formatINR(txn.amount)}</td>
                  <td className="px-6 py-4 hidden lg:table-cell text-sm text-foreground/60">{txn.date}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${STATUS_COLORS[txn.status]}`}>
                      {txn.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}