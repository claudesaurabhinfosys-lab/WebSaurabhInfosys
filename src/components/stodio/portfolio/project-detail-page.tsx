import Image from "next/image";
import { notFound } from "next/navigation";
import Reveal from "../reveal";
import Tag from "../tag";
import CtaSection from "../cta-section";
import WorkCard from "../work-card";
import { StButtonLink } from "../button";
import { PORTFOLIO_PROJECTS } from "@/lib/data";
import { workImage } from "@/components/stodio/lib/work-images";

export default function ProjectDetailPage({ slug }: { slug: string }) {
  const index = PORTFOLIO_PROJECTS.findIndex((p) => p.slug === slug);
  const project = PORTFOLIO_PROJECTS[index];
  if (!project) notFound();

  const cover = workImage(project.images, index, 0);
  const banner = workImage(project.images, index, 1);
  const shotOne = workImage(project.images, index, 2);
  const shotTwo = workImage(project.images, index, 3);

  const others = PORTFOLIO_PROJECTS.filter((p) => p.slug !== slug)
    .slice(index + 1, index + 3)
    .concat(PORTFOLIO_PROJECTS.slice(0, 2))
    .slice(0, 2);

  const meta = [
    { label: "Year", value: project.year ?? "2025" },
    { label: "Client", value: project.client ?? "Confidential" },
    { label: "Services", value: project.category },
    { label: "Stack", value: project.tech.join(" · ") },
  ];

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <div className="st-header st-is-flush">
        <section className="st-project-hero">
          <div className="st-container">
            <div className="st-project-hero-content">
              <div className="st-project-hero-left">
                <Reveal className="st-tag-block">
                  <Tag>Our portfolio</Tag>
                </Reveal>
                <Reveal delay={100}>
                  <h1 className="st-h1" style={{ marginTop: "var(--st-gap-24)" }}>
                    {project.title}
                  </h1>
                </Reveal>

                <Reveal delay={200}>
                  <div className="st-project-meta">
                    {meta.map((item) => (
                      <div className="st-project-meta-item" key={item.label}>
                        <div className="st-project-meta-label">{item.label}</div>
                        <div className="st-text-l">{item.value}</div>
                      </div>
                    ))}
                  </div>
                </Reveal>
              </div>

              <Reveal delay={150} className="st-project-hero-right">
                <Image src={cover} alt={project.title} width={1080} height={763} priority />
                {project.url && (
                  <div className="st-project-preview">
                    <StButtonLink href={project.url} variant="dark">
                      Preview
                    </StButtonLink>
                  </div>
                )}
              </Reveal>
            </div>
          </div>
        </section>
      </div>

      {/* ── Cover ────────────────────────────────────────────────────────── */}
      <Reveal className="st-project-cover">
        <Image src={banner} alt="" width={1920} height={900} />
      </Reveal>

      {/* ── Challenge / solution ─────────────────────────────────────────── */}
      <section className="st-project-body-section">
        <div className="st-container">
          <div className="st-project-body">
            <Reveal className="st-project-body-left">
              <Tag>The brief</Tag>
            </Reveal>
            <Reveal delay={100} className="st-project-body-right">
              <div className="st-project-prose">
                <p className="st-text-l">{project.description}</p>
                {project.overview && project.overview !== project.description && (
                  <p className="st-text-l">{project.overview}</p>
                )}
              </div>
            </Reveal>
          </div>

          <div className="st-divider st-is-solid" style={{ marginTop: "var(--st-pad-xl)" }} />

          <div className="st-project-body" style={{ paddingTop: "var(--st-pad-xl)" }}>
            <Reveal className="st-project-body-left">
              <Tag>What we built</Tag>
            </Reveal>
            <Reveal delay={100} className="st-project-body-right">
              <div className="st-project-prose">
                <ul className="st-text-l">
                  {project.highlights.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <div className="st-project-gallery">
            <Reveal>
              <Image src={shotOne} alt="" width={900} height={640} />
            </Reveal>
            <Reveal delay={100}>
              <Image src={shotTwo} alt="" width={900} height={640} />
            </Reveal>
          </div>

          {project.sections?.length ? (
            <>
              <div className="st-divider st-is-solid" style={{ marginTop: "var(--st-pad-xl)" }} />
              <div className="st-project-body" style={{ paddingTop: "var(--st-pad-xl)" }}>
                <Reveal className="st-project-body-left">
                  <Tag>Results</Tag>
                </Reveal>
                <Reveal delay={100} className="st-project-body-right">
                  <div className="st-project-prose">
                    {project.sections.map((section) => (
                      <div key={section.title}>
                        <h2>{section.title}</h2>
                        <p className="st-text-l">{section.body}</p>
                      </div>
                    ))}
                  </div>
                </Reveal>
              </div>
            </>
          ) : null}
        </div>
      </section>

      {/* ── Other projects ───────────────────────────────────────────────── */}
      <section className="st-other-projects">
        <div className="st-container">
          <div className="st-markets-title-block">
            <div className="st-markets-title-left">
              <Reveal className="st-tag-block">
                <Tag>Projects</Tag>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="st-h2" style={{ marginTop: "var(--st-gap-24)" }}>
                  Other projects
                </h2>
              </Reveal>
            </div>
            <Reveal delay={200} className="st-markets-title-right">
              <p className="st-text-m st-secondary">
                A small, senior team embedded directly into your product.
              </p>
            </Reveal>
          </div>

          <div className="st-projects-grid" style={{ paddingTop: "var(--st-pad-4x)" }}>
            {others.map((other, position) => (
              <Reveal key={other.slug} delay={position * 90}>
                <WorkCard
                  href={`/portfolio/${other.slug}`}
                  title={other.title}
                  service={other.category}
                  image={workImage(
                    other.images,
                    PORTFOLIO_PROJECTS.findIndex((p) => p.slug === other.slug),
                    0,
                  )}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection eyebrow="Get started" heading="Ready to build yours?" ctaLabel="Book a Consultation" />
    </>
  );
}
