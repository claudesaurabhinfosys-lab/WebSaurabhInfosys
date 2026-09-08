import { ABOUT, CLIENTS } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";
import { SectionBadge } from "@/components/ui/section-badge";

const MAX_COLUMNS = 6;

/* The reference drops blank cells into a full six-column grid to break the
   rhythm. That only reads as deliberate when the grid is otherwise full —
   with four named clients it reads as missing logos, so the blanks only
   appear once there are more clients than columns. */
const BLANK_AT = new Set([1, 6]);

/**
 * brand-v1. The reference fills these cells with client logotypes.
 * We have no logo files, so each cell is the client name set in type with
 * its market underneath — the same call the homepage client row already
 * makes rather than faking marks we do not have.
 */
export default function BrandSection() {
  const useBlanks = CLIENTS.length > MAX_COLUMNS;
  const columns = Math.min(useBlanks ? MAX_COLUMNS : CLIENTS.length, MAX_COLUMNS);

  const cells: (typeof CLIENTS[number] | null)[] = [];
  if (useBlanks) {
    let next = 0;
    for (let cell = 0; next < CLIENTS.length; cell++) {
      cells.push(BLANK_AT.has(cell) ? null : CLIENTS[next++]);
    }
  } else {
    cells.push(...CLIENTS);
  }

  return (
    <section className="brand-v1 ds-root">
      <div className="container">
        <div className="brand-v1-wrap">
          <Reveal delay={0.1}>
            <SectionBadge label={ABOUT.brandBadge} />
          </Reveal>

          <Reveal
            delay={0.2}
            className="brand-v1-grid"
            /* a custom property, not an inline grid-template-columns —
               the latter would outrank the responsive column counts */
            style={{ marginTop: 40, ["--brand-columns" as string]: columns }}
          >
            {cells.map((client, index) =>
              client ? (
                <div key={client.name} className="brand-item">
                  <div className="brand-v1-logo">{client.name}</div>
                  <div className="brand-v1-country">
                    {client.flag} {client.country}
                  </div>
                </div>
              ) : (
                <div key={`blank-${index}`} className="brand-item blank" aria-hidden="true" />
              )
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
