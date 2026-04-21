import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PORTFOLIO_PROJECTS, COMPANY } from "@/lib/data";

export async function generateStaticParams() {
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
  AI:           "bg-purple-100 text-purple-700",
  Education:    "bg-yellow-100 text-yellow-700",
  Health:       "bg-green-100 text-green-700",
  Fintech:      "bg-emerald-100 text-emerald-700",
  Gig:          "bg-orange-100 text-orange-700",
  Transport:    "bg-indigo-100 text-indigo-700",
  NGO:          "bg-teal-100 text-teal-700",
  SaaS:         "bg-violet-100 text-violet-700",
  "Custom Dev": "bg-slate-100 text-slate-700",
};

export default function PortfolioSlugPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = PORTFOLIO_PROJECTS.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const waText = encodeURIComponent(
    `Hi, I saw the ${project.title} project on your portfolio and I'd like to discuss a similar project.`
  );

  return (
    <main className="font-dm bg-bg text-ink">
      {/* Hero */}
      <section className="bg-ink pt-28 pb-16 px-4 sm:px-6">
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

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className={`text-xs font-semibold px-3 py-1.5 rounded-full ${CATEGORY_COLORS[project.category] ?? "bg-white/10 text-white"}`}>
              {project.category}
            </span>
            <span className="text-white/40 text-xs font-mono">
              #{String(project.id).padStart(2, "0")}
            </span>
          </div>

          <h1 className="font-syne font-bold text-4xl sm:text-5xl md:text-6xl text-white leading-tight mb-6">
            {project.title}
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl leading-relaxed">
            {project.description}
          </p>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="bg-bg py-12 px-4 sm:px-6 border-b border-ink/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-syne font-bold text-sm uppercase tracking-widest text-ink/60 mb-4">
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.tech.map((t) => (
              <span key={t} className="px-4 py-2 bg-accent/10 text-accent font-mono text-sm rounded-lg font-semibold">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-bg py-14 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-syne font-bold text-2xl sm:text-3xl text-ink mb-8">
            Project Highlights
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {project.highlights.map((h, i) => (
              <div key={i} className="flex items-start gap-4 bg-white rounded-2xl p-6 border border-ink/8 shadow-sm">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-syne font-bold text-sm">
                  {i + 1}
                </span>
                <p className="text-ink/80 text-sm leading-relaxed">{h}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-syne font-bold text-3xl sm:text-4xl text-white mb-4">
            Want something similar?
          </h2>
          <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
            Tell us about your idea. We reply within 2 hours on WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`https://wa.me/${COMPANY.whatsapp}?text=${waText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent text-white font-syne font-semibold px-8 py-4 rounded-xl hover:bg-accent/90 transition-colors"
            >
              Start a Similar Project
            </a>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 border-2 border-white/20 text-white font-syne font-semibold px-8 py-4 rounded-xl hover:border-white/50 transition-colors"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
