import { ABOUT, COMPANY } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";
import { Odometer } from "@/components/ui/odometer";

/* The reference puts a founder quote here. We have none on record, so the
   block states what we actually run — our own three SaaS products — and
   keeps the four counters underneath, which are real numbers. */
const STATS = [
  { value: COMPANY.stats.clients.replace("+", ""), suffix: "+", label: "Clients across six markets" },
  { value: COMPANY.stats.projects.replace("+", ""), suffix: "+", label: "Projects, platforms, and systems delivered" },
  { value: COMPANY.stats.saasProducts, suffix: "", label: "Live SaaS products we build and run" },
  { value: COMPANY.stats.years.replace("+", ""), suffix: "+", label: "Years shipping from Ahmedabad" },
];

export default function AboutIntroSection() {
  return (
    <section className="intro-v1 ds-root">
      <div className="container">
        <div className="intro-v1-wrap">
          <Reveal delay={0.1} className="intro-v1-content">
            <div className="intro-v1-details-wrap">
              <div className="heading-wrap">
                <h2 className="h3 intro-v1-heading">{ABOUT.introHeading}</h2>
              </div>
              <div className="intro-v1-info">
                <div className="paragraph-m-01 align-center">{ABOUT.introAuthor}</div>
                <div className="caption author-tagline">{ABOUT.introAuthorRole}</div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2} className="intro-v1-statistics-wrap">
            {STATS.map((stat) => (
              <div key={stat.label} className="intro-v1-statistics-list">
                <Odometer value={stat.value} suffix={stat.suffix} size="h1" />
                <div className="paragraph-m-01 intro-v1-statistics-title">{stat.label}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
