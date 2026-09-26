import Link from "next/link";
import Reveal from "../reveal";
import Tag from "../tag";
import WorkCard from "../work-card";
import { ArrowRight } from "../icons";
import { PORTFOLIO_PROJECTS } from "@/lib/data";
import { workImage } from "@/components/stodio/lib/work-images";

type Featured = { href: string; title: string; service: string; image: string };

/** A portfolio case study by slug. `service` overrides the category label
    where the category is a client grouping rather than a kind of work. */
function project(slug: string, service?: string): Featured {
  const index = PORTFOLIO_PROJECTS.findIndex((p) => p.slug === slug);
  const item = PORTFOLIO_PROJECTS[index];
  if (!item) throw new Error(`Featured project "${slug}" is not in PORTFOLIO_PROJECTS`);
  return {
    href: `/portfolio/${item.slug}`,
    title: item.title,
    service: service ?? item.category,
    image: workImage(item.images, index, 0),
  };
}

/** Five featured projects, laid out 2 / 1 / 2 the way the reference stacks them. */
const FEATURED: Featured[] = [
  project("le-meow", "On-demand Services"),
  {
    href: "/products/mysampark",
    title: "MySampark",
    service: "Our Product",
    image: "/images/products/mysampark/01.webp",
  },
  project("curvd"),
  project("exotic-now"),
  project("drd"),
];

export default function WorkSection() {
  const [one, two, three, four, five] = FEATURED;

  return (
    <section className="st-work-section">
      <div className="st-container">
        <div className="st-work-title-block">
          <Reveal className="st-tag-block st-is-center">
            <Tag>Selected work</Tag>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="st-h2 st-work-title">Featured projects &amp; creative works</h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="st-text-m st-work-subtitle">
              We do not just build software; we build systems that hold up under
              real users and keep paying back after launch.
            </p>
          </Reveal>
        </div>

        <div className="st-projects-item">
          <div className="st-projects-row st-is-01">
            <div className="st-projects-col st-is-wide">
              <WorkCard {...one} priority />
            </div>
            <div className="st-projects-col st-is-narrow">
              <WorkCard {...two} />
            </div>
          </div>

          <div className="st-projects-row st-is-02">
            <div className="st-projects-col st-is-wide">
              <WorkCard {...three} />
            </div>
          </div>

          <div className="st-projects-row st-is-03">
            <div className="st-projects-col st-is-wide">
              <WorkCard {...four} />
            </div>
            <div className="st-projects-col st-is-narrow">
              <WorkCard {...five} />
            </div>
          </div>
        </div>
      </div>

      <Link className="st-all-projects" href="/portfolio">
        <ArrowRight className="st-view-all-icon" />
        <span className="st-h4">All Cases</span>
        <span className="st-text-m st-all-projects-count">
          ({String(PORTFOLIO_PROJECTS.length).padStart(2, "0")})
        </span>
      </Link>
    </section>
  );
}
