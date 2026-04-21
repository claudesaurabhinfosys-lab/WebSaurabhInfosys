"use client";

import { useState } from "react";
import Link from "next/link";
import { PORTFOLIO_PROJECTS, PORTFOLIO_CATEGORIES } from "@/lib/data";

const CATEGORY_COLORS: Record<string, string> = {
  AI:           "bg-purple-100 text-purple-700 border border-purple-200",
  Education:    "bg-yellow-100 text-yellow-700 border border-yellow-200",
  Health:       "bg-green-100 text-green-700 border border-green-200",
  Fintech:      "bg-emerald-100 text-emerald-700 border border-emerald-200",
  Gig:          "bg-orange-100 text-orange-700 border border-orange-200",
  Transport:    "bg-indigo-100 text-indigo-700 border border-indigo-200",
  NGO:          "bg-teal-100 text-teal-700 border border-teal-200",
  SaaS:         "bg-violet-100 text-violet-700 border border-violet-200",
  "Custom Dev": "bg-slate-100 text-slate-600 border border-slate-200",
};

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <main className="font-dm">
      {/* Hero / Header */}
      <section className="bg-ink pt-28 pb-0 relative overflow-hidden">
        {/* Dot-grid background */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "28px 28px" }}
        />
        {/* Accent glow */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Label */}
          <p className="text-accent font-syne font-semibold text-sm uppercase tracking-widest mb-5">
            Our Work
          </p>

          {/* Headline */}
          <h1 className="font-syne text-5xl md:text-7xl font-bold text-white leading-[1.05] mb-5">
            38 Projects.<br />
            <span className="text-white/35">Real Results.</span>
          </h1>

          <p className="text-white/50 text-lg max-w-2xl mb-14 leading-relaxed">
            From AI agents and Flutter apps to SaaS platforms and GPS systems — built
            for clients across India, the UK, the US, Australia, and Hong Kong.
          </p>

          {/* Client flags */}
          <div className="flex flex-wrap items-center gap-3 mb-14">
            {["🇮🇳 India", "🇬🇧 UK", "🇺🇸 USA", "🇦🇺 Australia", "🇭🇰 Hong Kong"].map((f) => (
              <span key={f} className="text-white/50 text-sm bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
                {f}
              </span>
            ))}
          </div>

          {/* Stats bar — sits at the bottom of the hero */}
          <div className="grid grid-cols-2 md:grid-cols-4 border-t border-white/10">
            {[
              { value: "38",   label: "Projects delivered" },
              { value: "80+",  label: "Happy clients" },
              { value: "4.9",  label: "Rating on Clutch" },
              { value: "4+",   label: "Years building" },
            ].map((s) => (
              <div key={s.label} className="py-7 px-2 md:px-6 first:pl-0 border-r border-white/10 last:border-r-0">
                <p className="font-syne font-bold text-3xl md:text-4xl text-white mb-1">{s.value}</p>
                <p className="text-white/40 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters */}
      <div className="bg-ink border-b border-bg/10 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 overflow-x-auto py-4 scrollbar-hide no-scrollbar">
            {PORTFOLIO_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-accent text-white"
                    : "bg-bg/10 text-bg/70 hover:bg-bg/20 hover:text-bg"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <section className="bg-bg py-12 md:py-16 min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Showing count */}
          <p className="text-ink/50 text-sm font-dm mb-8">
            Showing{" "}
            <span className="text-ink font-semibold">{filtered.length}</span>{" "}
            project{filtered.length !== 1 ? "s" : ""}
            {activeCategory !== "All" ? ` in ${activeCategory}` : ""}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => (
              <Link
                key={project.id}
                href={`/portfolio/${project.slug}`}
                className="block group"
              >
                <article className="bg-card rounded-2xl p-6 flex flex-col gap-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 border border-ink/5 h-full">
                  {/* Category badge */}
                  <div className="flex items-start justify-between gap-2">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                        CATEGORY_COLORS[project.category] ??
                        "bg-ink/10 text-ink/60"
                      }`}
                    >
                      {project.category}
                    </span>
                    <span className="text-ink/30 text-xs font-mono">
                      #{String(project.id).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Title + description */}
                  <div className="flex-1">
                    <h3 className="font-syne font-bold text-ink text-lg leading-snug mb-2 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-ink/60 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 bg-ink/5 text-ink/50 text-xs rounded-md font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="inline-flex items-center gap-1.5 text-accent font-syne font-semibold text-sm group-hover:gap-2.5 transition-all mt-auto pt-2">
                    View Case Study
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-ink/60 text-lg">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-ink py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-syne text-3xl md:text-5xl font-bold text-bg mb-6">
            Your project could be{" "}
            <span className="text-accent">next on this list</span>
          </h2>
          <p className="text-bg/60 text-lg mb-10 max-w-2xl mx-auto">
            Whether you need an AI agent, a mobile app, or a full SaaS platform
            — we&apos;ve built it before and we&apos;ll build it right.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-block bg-accent text-white font-syne font-semibold px-8 py-4 rounded-xl hover:bg-accent/90 transition-colors text-base"
            >
              Start a Project
            </Link>
            <Link
              href="/services"
              className="inline-block bg-bg/10 text-bg font-syne font-semibold px-8 py-4 rounded-xl hover:bg-bg/20 transition-colors text-base border border-bg/20"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
