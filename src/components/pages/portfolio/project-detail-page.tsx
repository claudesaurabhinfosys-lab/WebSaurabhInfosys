import { notFound } from "next/navigation";
import { PORTFOLIO_PROJECTS } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";
import CtaSection from "@/components/pages/home/cta-section";
import { workImage } from "./work-images";

/** One label / value row in the spec table. */
function InfoRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <Reveal delay={0.1} className="work-v4-info-list">
      <div className="paragraph-m-01 work-v4-info-title">{label}</div>
      {children}
    </Reveal>
  );
}

/**
 * A titled prose block on the 832px right-hand measure.
 *
 * The reference sets these titles as plain divs; ours are real `h2`s
 * carrying the H6 size class, so the case study has a document outline
 * under its `h1` instead of one heading and a wall of divs.
 */
function DetailBlock({ title, body }: { title: string; body: React.ReactNode }) {
  return (
    <div className="work-v4-right-content">
      <div className="heading-wrap">
        <h2 className="h6-medium">{title}</h2>
      </div>
      <div className="subtitle-wrap">{body}</div>
    </div>
  );
}

export function ProjectDetailPage({ slug }: { slug: string }) {
  const project = PORTFOLIO_PROJECTS.find((p) => p.slug === slug);
  if (!project) notFound();

  const { title, category, description, tech, highlights } = project;
  const sections = project.sections ?? [];

  // one running counter, so the image pool cycles in page order no matter
  // which of the optional blocks render
  let slot = 0;
  const nextImage = () => workImage(project.images, project.id, slot++);

  const hero = nextImage();
  const afterOverview = nextImage();
  const betweenSections = sections.length > 0 ? nextImage() : null;
  const gridLeft = nextImage();
  const gridRight = nextImage();

  return (
    <div className="si-page">
      <section className="work-v4 ds-root">
        <div className="container">
          <div className="work-v4-wrap">
            <Reveal delay={0.1} className="work-v4-head-wrap">
              <div className="work-v4-head-left">
                <div className="hero-heading-wrap">
                  {/* the page heading, set at the H2 size the reference uses */}
                  <h1 className="h2">{title}</h1>
                </div>
              </div>
              <div className="work-v4-head-right">
                <div className="h6-medium work-v4-head-title">
                  {project.client ? "Client" : "Category"}
                </div>
                <div className="paragraph-m-01 text-gray">
                  {project.client ?? category}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2} className="work-v4-main-wrap">
              <div className="work-v4-left">
                <div className="work-v4-top-info">
                  <div className="paragraph-m-01 work-v4-info">{category}</div>
                  {project.year && (
                    <div className="paragraph-m-01 work-v4-info">{project.year}</div>
                  )}
                </div>
                <div className="work-v4-image-wrap">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={hero}
                    alt={`${title} project cover`}
                    className="fit-cover work-v4-image"
                  />
                </div>
              </div>

              <div className="work-v4-right">
                <div className="work-v4-info-list-wrap">
                  {project.client && (
                    <InfoRow label="Client">
                      <div className="paragraph-01 work-v4-info-details">
                        {project.client}
                      </div>
                    </InfoRow>
                  )}
                  <InfoRow label="Project">
                    <div className="paragraph-01 work-v4-info-details">{title}</div>
                  </InfoRow>
                  {project.location && (
                    <InfoRow label="Location">
                      <div className="paragraph-01 work-v4-info-details">
                        {project.location}
                      </div>
                    </InfoRow>
                  )}
                  <InfoRow label="Category">
                    <div className="paragraph-01 work-v4-info-details">{category}</div>
                  </InfoRow>
                  <InfoRow label="Services">
                    <div className="work-services-list">
                      {tech.map((item) => (
                        <div key={item} className="paragraph-01 work-v4-info-details">
                          {item}
                        </div>
                      ))}
                    </div>
                  </InfoRow>
                  {project.year && (
                    <InfoRow label="Year">
                      <div className="paragraph-01 work-v4-info-details">
                        {project.year}
                      </div>
                    </InfoRow>
                  )}
                </div>

                {project.url && (
                  <a
                    href={project.url}
                    className="work-view-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit website
                  </a>
                )}
              </div>
            </Reveal>

            <div className="work-v4-details-wrap">
              <Reveal delay={0.1} className="work-v4-row">
                <p className="h5 work-v4-overview">
                  {project.overview ?? description}
                </p>
              </Reveal>

              <Reveal delay={0.1} className="work-image-wrap">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={afterOverview} alt="" className="fit-cover" loading="lazy" />
              </Reveal>

              {sections[0] && betweenSections && (
                <>
                  <Reveal delay={0.1} className="work-v4-row">
                    <DetailBlock
                      title={sections[0].title}
                      body={<p className="h6 work-v4-details">{sections[0].body}</p>}
                    />
                  </Reveal>
                  <Reveal delay={0.1} className="work-image-wrap">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={betweenSections}
                      alt=""
                      className="fit-cover"
                      loading="lazy"
                    />
                  </Reveal>
                </>
              )}

              {sections[1] && (
                <Reveal delay={0.1} className="work-v4-row">
                  <DetailBlock
                    title={sections[1].title}
                    body={<p className="h6 work-v4-details">{sections[1].body}</p>}
                  />
                </Reveal>
              )}

              <Reveal delay={0.1} className="work-image-grid">
                {[gridLeft, gridRight].map((src, i) => (
                  <div key={i} className="work-image-wrap sm">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={src} alt="" className="fit-cover" loading="lazy" />
                  </div>
                ))}
              </Reveal>

              <div className="work-v4-row flex">
                {sections[2] && (
                  <>
                    <Reveal delay={0.1}>
                      <DetailBlock
                        title={sections[2].title}
                        body={
                          <p className="h6 work-v4-details">{sections[2].body}</p>
                        }
                      />
                    </Reveal>
                    <Reveal delay={0.1} className="work-v4-divider" />
                  </>
                )}

                <Reveal delay={0.1}>
                  <DetailBlock
                    title="What we built"
                    body={
                      <div className="work-v4-list">
                        <ul>
                          {highlights.map((item) => (
                            <li key={item} className="paragraph-01">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    }
                  />
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  );
}
