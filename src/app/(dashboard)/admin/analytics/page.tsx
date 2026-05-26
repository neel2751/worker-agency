"use client"

import { TrendingUp, Users, Briefcase, Building2, ArrowUp, ArrowDown } from "lucide-react"

const KPIS = [
  { label: "Total Users", value: "78,432", change: "+12.4%", trend: "up", icon: Users },
  { label: "Active Jobs", value: "15,847", change: "+8.2%", trend: "up", icon: Briefcase },
  { label: "Companies", value: "2,547", change: "+15.1%", trend: "up", icon: Building2 },
  { label: "Placements", value: "1,234", change: "-2.3%", trend: "down", icon: TrendingUp },
]

const MONTHLY_DATA = [
  { month: "Jan", users: 45000, jobs: 8200 },
  { month: "Feb", users: 48500, jobs: 9100 },
  { month: "Mar", users: 52300, jobs: 10400 },
  { month: "Apr", users: 58200, jobs: 11800 },
  { month: "May", users: 64100, jobs: 13200 },
  { month: "Jun", users: 71200, jobs: 14500 },
  { month: "Jul", users: 78432, jobs: 15847 },
]

const TOP_CATEGORIES = [
  { category: "Mason", jobs: 2856, percent: 18 },
  { category: "Electrician", jobs: 2412, percent: 15 },
  { category: "Site Engineer", jobs: 1987, percent: 13 },
  { category: "Welder", jobs: 1654, percent: 10 },
  { category: "Plumber", jobs: 1432, percent: 9 },
  { category: "Carpenter", jobs: 1198, percent: 8 },
]

const TOP_CITIES = [
  { city: "Mumbai", users: 12340, percent: 16 },
  { city: "Delhi", users: 10854, percent: 14 },
  { city: "Bengaluru", users: 9432, percent: 12 },
  { city: "Ahmedabad", users: 8121, percent: 10 },
  { city: "Hyderabad", users: 7654, percent: 10 },
  { city: "Pune", users: 6890, percent: 9 },
]

export default function AdminAnalyticsPage() {
  const maxUsers = Math.max(...MONTHLY_DATA.map((d) => d.users))
  const maxJobs = Math.max(...MONTHLY_DATA.map((d) => d.jobs))

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Analytics</h1>
        <p className="text-foreground/70">Platform-wide insights and metrics</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {KPIS.map((kpi) => {
          const Icon = kpi.icon
          return (
            <div key={kpi.label} className="rounded-xl border border-border/50 bg-background p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="h-12 w-12 rounded-lg bg-brand-50 dark:bg-brand-500/10 flex items-center justify-center">
                  <Icon className="h-6 w-6 text-brand-500" />
                </div>
                <span
                  className={`flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-full ${
                    kpi.trend === "up"
                      ? "text-green-600 bg-green-50"
                      : "text-red-600 bg-red-50"
                  }`}
                >
                  {kpi.trend === "up" ? <ArrowUp className="h-3 w-3" /> : <ArrowDown className="h-3 w-3" />}
                  {kpi.change}
                </span>
              </div>
              <p className="text-sm text-foreground/70 mb-1">{kpi.label}</p>
              <p className="text-3xl font-bold">{kpi.value}</p>
            </div>
          )
        })}
      </div>

      {/* Growth Chart */}
      <div className="rounded-xl border border-border/50 bg-background p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">Platform Growth</h2>
          <div className="flex gap-3 text-xs">
            <span className="flex items-center gap-1.5">
              <span className="h-3 w-3 rounded-sm bg-brand-500" /> Users
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-3 w-3 rounded-sm bg-hiviz-500" /> Jobs
            </span>
          </div>
        </div>

        <div className="flex items-end justify-between gap-3 h-64 mb-3">
          {MONTHLY_DATA.map((data) => (
            <div key={data.month} className="flex-1 flex flex-col items-center gap-1.5">
              <div className="w-full flex gap-1 items-end h-full">
                <div
                  className="flex-1 bg-brand-500 rounded-t-lg transition-all hover:bg-brand-600 cursor-pointer relative group"
                  style={{ height: `${(data.users / maxUsers) * 100}%` }}
                >
                  <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-steel-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {data.users.toLocaleString()}
                  </span>
                </div>
                <div
                  className="flex-1 bg-hiviz-500 rounded-t-lg transition-all hover:bg-hiviz-600 cursor-pointer relative group"
                  style={{ height: `${(data.jobs / maxJobs) * 100}%` }}
                >
                  <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-steel-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {data.jobs.toLocaleString()}
                  </span>
                </div>
              </div>
              <span className="text-xs text-foreground/60">{data.month}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Two Column */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Categories */}
        <div className="rounded-xl border border-border/50 bg-background p-6">
          <h3 className="font-bold mb-6">Top Job Categories</h3>
          <div className="space-y-4">
            {TOP_CATEGORIES.map((cat) => (
              <div key={cat.category}>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="font-medium">{cat.category}</span>
                  <span className="text-foreground/60">{cat.jobs.toLocaleString()} jobs</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-brand-500 rounded-full transition-all"
                    style={{ width: `${cat.percent * 5}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Cities */}
        <div className="rounded-xl border border-border/50 bg-background p-6">
          <h3 className="font-bold mb-6">Top Cities</h3>
          <div className="space-y-4">
            {TOP_CITIES.map((city) => (
              <div key={city.city}>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="font-medium">{city.city}</span>
                  <span className="text-foreground/60">{city.users.toLocaleString()} users</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-hiviz-500 rounded-full transition-all"
                    style={{ width: `${city.percent * 5}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}