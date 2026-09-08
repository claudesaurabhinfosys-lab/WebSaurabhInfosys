import { ABOUT, ABOUT_MARKETS } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";
import { SectionBadge } from "@/components/ui/section-badge";
import { workImage } from "@/components/pages/portfolio/work-images";

/**
 * team-v1, carrying the markets.
 *
 * The reference fills this grid with six team photographs. We publish no
 * team page and have no headshots, so the grid takes the five regions we
 * actually sell into — same three-column shape, real content.
 */
export default function MarketsSection() {
  return (
    <section className="team-v1 ds-root">
      <div className="container">
        <div className="team-v1-wrap">
          <Reveal delay={0.1} className="team-v1-head-wrap">
            <SectionBadge label={ABOUT.marketsBadge} />
            <div className="heading-wrap">
              <h2 className="align-center">{ABOUT.marketsHeading}</h2>
            </div>
          </Reveal>

          <Reveal delay={0.2} className="team-v1-main-wrap">
            {ABOUT_MARKETS.map((market, i) => (
              <div key={market.name} className="team-v1-list">
                <div className="team-v1-image-wrap">
                  {/* TODO: real imagery per market */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={workImage(undefined, i, 0)}
                    alt={`${market.name} — ${market.tagline}`}
                    className="fit-cover team-v1-image"
                    loading="lazy"
                  />
                </div>
                <div className="team-v1-info">
                  <div className="paragraph-03 name">
                    {market.flags} {market.name}
                  </div>
                  <div className="paragraph-02 team-tagline">{market.tagline}</div>
                </div>
                <p className="paragraph-02 text-gray">{market.desc}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
