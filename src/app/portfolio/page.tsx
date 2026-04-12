"use client";

import { useState } from "react";
import Link from "next/link";
import { PORTFOLIO_PROJECTS, PORTFOLIO_CATEGORIES } from "@/lib/data";

const CATEGORY_COLORS: Record<string, string> = {
  AI: "bg-purple-500/20 text-purple-300 border border-purple-500/30",
  GPS: "bg-blue-500/20 text-blue-300 border border-blue-500/30",
  Education: "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30",
  Health: "bg-green-500/20 text-green-300 border border-green-500/30",
  Fintech: "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30",
  Gig: "bg-orange-500/20 text-orange-300 border border-orange-500/30",
  "Real Estate": "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30",
  Retail: "bg-pink-500/20 text-pink-300 border border-pink-500/30",
  Transport: "bg-indigo-500/20 text-indigo-300 border border-indigo-500/30",
  NGO: "bg-teal-500/20 text-teal-300 border border-teal-500/30",
  Marketing: "bg-rose-500/20 text-rose-300 border border-rose-500/30",
  SaaS: "bg-violet-500/20 text-violet-300 border border-violet-500/30",
  "Custom Dev": "bg-slate-500/20 text-slate-300 border border-slate-500/30",
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
      <section className="bg-ink py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="text-accent font-syne font-semibold text-sm uppercase tracking-widest mb-3">
                Our Work
              </p>
              <h1 className="font-syne text-4xl md:text-6xl font-bold text-bg leading-tight">
                Our Portfolio
              </h1>
              <p className="mt-4 text-bg/60 text-lg max-w-xl">
                38 projects across 13 verticals — from AI agents to GPS systems,
                SaaS platforms to mobile apps.
              </p>
            </div>
            {/* Clutch rating badge */}
            <div className="flex-shrink-0 bg-bg/10 border border-bg/20 rounded-2xl px-6 py-4 flex items-center gap-4">
              <div>
                <div className="flex items-center gap-1 mb-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg
                      key={s}
                      className="w-4 h-4 text-accent fill-accent"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-bg font-syne font-bold text-xl leading-none">
                  4.9 / 5.0
                </p>
                <p className="text-bg/50 text-xs mt-1">33 reviews on Clutch</p>
              </div>
              <div className="w-px h-12 bg-bg/20" />
              <div className="text-center">
                <p className="text-bg font-syne font-bold text-2xl leading-none">
                  38
                </p>
                <p className="text-bg/50 text-xs mt-1">Projects</p>
              </div>
            </div>
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
              <article
                key={project.id}
                className="bg-card rounded-2xl p-6 flex flex-col gap-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 border border-ink/5"
              >
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
                  <h3 className="font-syne font-bold text-ink text-lg leading-snug mb-2">
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
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-ink/40 text-lg">
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
