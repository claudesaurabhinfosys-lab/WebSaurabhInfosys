import Image from "next/image";
import { StarBurst } from "./icons";
import { CLIENT_LOGOS } from "@/lib/data";

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
              {CLIENT_LOGOS.map((client) => (
                <div className="st-logo-item" key={`${copy}-${client.name}`}>
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={32}
                    height={32}
                    className="st-logo-mark"
                    unoptimized
                  />
                  {client.name}
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
