import { CLIENTS, HOME_CLIENTS } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";

/**
 * brand-v3. A grid of the clients we have shipped for.
 *
 * This replaces the 300vh sticky colour-wipe section. That runway spent
 * three viewports of scroll to say "we have clients" and then showed the
 * same names this grid shows in one screen.
 *
 * The reference alternates each cell between snow white and white, which
 * keeps a long row of logo boxes from reading as one flat band. Same here,
 * on the index rather than hand-authored per cell.
 *
 * We have no client logo files, so each cell is the name set in type with
 * its market — the call DESIGN.md already makes for the old client row.
 * The grid takes its column count from how many clients there are, so four
 * names fill four columns rather than leaving two empty.
 */
export default function ClientsSection() {
  const columns = Math.min(CLIENTS.length, 5);

  return (
    <section className="brand-v3 ds-root">
      <div className="container">
        <div className="brand-v3-wrap">
          <Reveal delay={0.1}>
            <div className="paragraph-03 brand-v3-heading text-gray">
              {HOME_CLIENTS.heading}
            </div>
          </Reveal>

          <Reveal
            delay={0.2}
            className="brand-v3-grid"
            style={{ ["--brand-v3-columns" as string]: columns }}
          >
            {CLIENTS.map((client, i) => (
              <div
                key={client.name}
                className={`brand-v3-item${i % 2 === 1 ? " white" : ""}`}
              >
                <div className="brand-v1-logo">{client.name}</div>
                <div className="brand-v1-country">
                  {client.flag} {client.country}
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
