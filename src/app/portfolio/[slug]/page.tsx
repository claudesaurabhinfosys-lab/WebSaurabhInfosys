import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PORTFOLIO_PROJECTS, COMPANY } from "@/lib/data";

export function generateStaticParams() {
  return PORTFOLIO_PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const project = PORTFOLIO_PROJECTS.find((p) => p.slug === params.slug);
  if (!project) return {};
  return {
    title: `${project.title} — Case Study | Saurabh Infosys`,
    description: project.description,
    alternates: { canonical: `https://saurabhinfosys.com/portfolio/${project.slug}` },
    openGraph: {
      title: `${project.title} | Saurabh Infosys Portfolio`,
      description: project.description,
      url: `https://saurabhinfosys.com/portfolio/${project.slug}`,
      type: "website",
    },
  };
}

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

export default function CaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = PORTFOLIO_PROJECTS.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const waLink = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(
    `Hi, I saw your ${project.title} project and want something similar`
  )}`;

  return (
    <main className="bg-bg text-ink font-dm">

      {/* ── Hero ── */}
      <section className="bg-ink pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm mb-8 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Back to Portfolio
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className={`text-xs font-semibold px-3 py-1 rounded-full ${CATEGORY_COLORS[project.category] ?? "bg-white/10 text-white"}`}>
              {project.category}
            </span>
            <span className="text-white/30 text-xs font-mono">
              #{String(project.id).padStart(2, "0")}
            </span>
          </div>

          <h1 className="font-syne font-bold text-4xl sm:text-5xl md:text-6xl leading-tight text-white mb-5">
            {project.title}
          </h1>
          <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
            {project.description}
          </p>
        </div>
      </section>

      {/* ── Content ── */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-12">

          {/* Main column */}
          <div className="md:col-span-2 space-y-12">

            {/* Key Highlights */}
            <div>
              <h2 className="font-syne font-bold text-xl text-ink mb-6">
                Key Features &amp; Highlights
              </h2>
              <ul className="space-y-3">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-accent/15 text-accent flex items-center justify-center">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-ink/75 leading-relaxed">{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div>
              <h2 className="font-syne font-bold text-xl text-ink mb-6">
                Technologies Used
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-4 py-2 bg-ink/5 border border-ink/10 text-ink/70 text-sm rounded-xl font-mono font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-card border border-ink/8 rounded-2xl p-6 space-y-4">
              <h3 className="font-syne font-bold text-base text-ink">
                Build Something Similar
              </h3>
              <p className="text-ink/60 text-sm leading-relaxed">
                Interested in a project like {project.title}? We&apos;ve done it before — let&apos;s talk about your vision.
              </p>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-accent text-white font-syne font-semibold px-5 py-3 rounded-xl hover:bg-accent-dark transition-colors text-sm"
              >
                Chat on WhatsApp
              </a>
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 w-full border border-ink/15 text-ink font-syne font-semibold px-5 py-3 rounded-xl hover:border-accent hover:text-accent transition-colors text-sm"
              >
                Send a Brief
              </Link>
            </div>

            <div className="bg-card border border-ink/8 rounded-2xl p-6 space-y-3">
              <h3 className="font-syne font-bold text-base text-ink">Category</h3>
              <span className={`inline-block text-xs font-semibold px-3 py-1.5 rounded-full ${CATEGORY_COLORS[project.category] ?? "bg-ink/10 text-ink/60"}`}>
                {project.category}
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* ── More Projects ── */}
      <section className="bg-card border-t border-ink/6 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-syne font-bold text-2xl text-ink mb-8">More Projects</h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {PORTFOLIO_PROJECTS.filter((p) => p.slug !== project.slug && p.category === project.category)
              .slice(0, 3)
              .concat(
                PORTFOLIO_PROJECTS.filter((p) => p.slug !== project.slug && p.category !== project.category).slice(0, Math.max(0, 3 - PORTFOLIO_PROJECTS.filter((p) => p.slug !== project.slug && p.category === project.category).slice(0, 3).length))
              )
              .slice(0, 3)
              .map((p) => (
                <Link key={p.slug} href={`/portfolio/${p.slug}`} className="group block bg-bg border border-ink/8 rounded-2xl p-5 hover:border-accent/30 hover:-translate-y-1 transition-all">
                  <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-3 ${CATEGORY_COLORS[p.category] ?? "bg-ink/10 text-ink/60"}`}>
                    {p.category}
                  </span>
                  <h3 className="font-syne font-bold text-sm text-ink group-hover:text-accent transition-colors mb-1">{p.title}</h3>
                  <p className="text-ink/50 text-xs leading-relaxed line-clamp-2">{p.description}</p>
                </Link>
              ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 border border-ink/15 text-ink font-syne font-semibold px-6 py-3 rounded-full hover:border-accent hover:text-accent transition-colors text-sm"
            >
              View All 38 Projects
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
