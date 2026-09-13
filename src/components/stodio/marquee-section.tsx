import { ClientMark, StarBurst } from "./icons";

const LOGOS = [
  "Modern Dental Lab",
  "ATCC Australia",
  "CapriCurves",
  "Digital Retail Display",
  "Washry",
  "Exotics Now",
  "Meowcademy",
  "Edify Easy",
];

type Props = {
  /** Mono line on the left of the rail. */
  intro?: string;
  className?: string;
};

/**
 * Client rail. Two identical rows slide left forever; the second one covers
 * the gap the first leaves behind, so the loop has no seam.
 */
export default function MarqueeSection({
  intro = "We have shipped 150+ products for teams on four continents.",
  className = "",
}: Props) {
  return (
    <section className={`st-marquee-section${className ? ` ${className}` : ""}`}>
      <div className="st-marquee-content">
        <div className="st-marquee-intro">
          <StarBurst className="st-marquee-icon" />
          <div className="st-marquee-intro-text st-text-s">{intro}</div>
        </div>

        <div className="st-logo-container">
          <div className="st-logos-gradient" />
          {[0, 1].map((copy) => (
            <div className="st-logos-row" key={copy} aria-hidden={copy === 1}>
              {LOGOS.map((name) => (
                <div className="st-logo-item" key={`${copy}-${name}`}>
                  <ClientMark className="st-logo-mark" />
                  {name}
                </div>
              ))}
            </div>
          ))}
          <div className="st-logos-gradient st-is-right" />
        </div>
      </div>
    </section>
  );
}
