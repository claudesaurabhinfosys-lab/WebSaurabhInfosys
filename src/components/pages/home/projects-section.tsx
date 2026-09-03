import Link from "next/link";
import Image from "next/image";
import EmDashHeader from "@/components/shared/em-dash-header";
import PillButton from "@/components/ui/pill-button";
import { PORTFOLIO_PROJECTS } from "@/lib/data";

const FEATURED_SLUGS = ["ai-assist", "smart-theory-test", "macromate", "subrate"];
const FEATURED_IMAGES: Record<string, string> = {
  "ai-assist": "https://picsum.photos/id/60/800/600",
  "smart-theory-test": "https://picsum.photos/id/26/800/600",
  macromate: "https://picsum.photos/id/342/800/600",
  subrate: "https://picsum.photos/id/3/800/600",
};

export default function ProjectsSection() {
  const projects = FEATURED_SLUGS.map((slug) => PORTFOLIO_PROJECTS.find((p) => p.slug === slug)!);

  return (
    <section className="si-section">
      <div className="si-container flex flex-col si-stack-block">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-[38.95rem]">
            <div className="si-pb-stack">
              <EmDashHeader label="Project" />
            </div>
            <p className="si-body text-deep-gray-1">
              Each project is a real product we shipped — from AI education platforms to fintech tools already in
              daily use.
            </p>
          </div>
          <PillButton href="/portfolio" variant="outline" className="shrink-0">
            View All Work
          </PillButton>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:pb-32">
          {projects.map((project, index) => (
            <Link
              key={project.slug}
              href={`/portfolio/${project.slug}`}
              className={`group block ${index % 2 === 1 ? "md:translate-y-[21%]" : ""}`}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src={FEATURED_IMAGES[project.slug]}
                  alt={`${project.title} preview`}
                  fill
                  sizes="(min-width: 768px) 45vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="si-caption flex size-[6.25rem] items-center justify-center rounded-full bg-black/10 p-5 text-center font-semibold leading-tight text-white backdrop-blur-md">
                    View Full Project
                  </span>
                </div>
              </div>
              <div className="flex items-end justify-between pt-4">
                <div>
                  <p className="si-body font-bold text-black transition-colors duration-300 group-hover:text-primary">
                    {project.title}
                  </p>
                  <p className="si-body-xs text-deep-gray-1">{project.category}</p>
                </div>
                <span className="si-body-xs font-medium text-black">2025</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
