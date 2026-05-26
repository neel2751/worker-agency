"use client"

import Link from "next/link"
import { ArrowRight, Search, Users, Briefcase, Hammer } from "lucide-react"
import { HERO_STATS } from "@/data/stats"
import { cn } from "@/lib/utils"

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 pb-16">
      {/* Background gradient with construction theme */}
      <div className="absolute inset-0 gradient-hero pointer-events-none" />

      {/* Animated grid pattern background */}
      <div className="absolute inset-0 grid-pattern-soft pointer-events-none opacity-40" />

      {/* Top-right accent glow */}
      <div className="absolute -right-1/4 -top-1/4 h-96 w-96 rounded-full bg-brand-500/20 blur-3xl pointer-events-none" />

      {/* Bottom-left accent glow */}
      <div className="absolute -left-1/4 bottom-0 h-96 w-96 rounded-full bg-hiviz-400/10 blur-3xl pointer-events-none" />

      {/* Content container */}
      <div className="container relative z-10 max-w-5xl">
        {/* Badge */}
        <div className="flex justify-center mb-8 animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-2 text-sm font-medium text-brand-700">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500" />
            </span>
            Now Hiring Across India
          </div>
        </div>

        {/* Main heading */}
        <div className="text-center mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
            <span className="text-gradient-brand">Construction Careers</span>
            <br />
            Made Simple
          </h1>
          <p className="text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Connect with thousands of construction jobs, projects, and skilled workers. Whether you're a student, worker, contractor, or company — find your next opportunity in India's fastest-growing construction recruitment platform.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <Link
            href="/jobs"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold bg-brand-500 hover:bg-brand-600 text-white rounded-xl transition-all hover:shadow-brand-glow hover:-translate-y-0.5"
          >
            Find Jobs
            <ArrowRight className="h-5 w-5" />
          </Link>
          <Link
            href="/for-companies"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold border-2 border-brand-500 text-brand-600 hover:bg-brand-50 rounded-xl transition-all"
          >
            <Hammer className="h-5 w-5" />
            Hire Workers
          </Link>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-20 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <div className="relative">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-brand-500/20 to-hiviz-400/10 blur-xl pointer-events-none" />
            <div className="relative bg-white dark:bg-steel-900 rounded-2xl shadow-elev-3 p-2 border border-brand-200/50 dark:border-steel-700">
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Job title, skill, or project..."
                    className="w-full pl-12 pr-4 py-3 text-base bg-transparent focus:outline-none"
                  />
                </div>
                <button className="px-6 py-3 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-lg transition-colors">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          {HERO_STATS.map((stat, idx) => {
            const Icon = stat.icon
            return (
              <div
                key={idx}
                className="bg-white dark:bg-steel-900/60 rounded-xl p-6 border border-border/50 dark:border-steel-800 text-center hover:shadow-elev-2 transition-shadow"
              >
                {Icon && (
                  <div className={cn("h-10 w-10 rounded-lg flex items-center justify-center mx-auto mb-3", `bg-${stat.color?.split('-')[1]}-50`)}>
                    <Icon className={cn("h-6 w-6", stat.color)} />
                  </div>
                )}
                <div className={cn("text-3xl font-bold mb-1", stat.color)}>
                  {stat.value}
                </div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}