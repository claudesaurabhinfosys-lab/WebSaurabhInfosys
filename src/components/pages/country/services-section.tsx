import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  AiBrain01Icon,
  AiChat01Icon,
  AiProgrammingIcon,
  AiSchedulingIcon,
  AiSearchIcon,
  MobileProgramming01Icon,
  Rocket01Icon,
  Store01Icon,
} from "@hugeicons/core-free-icons";
import type { CountryPageData } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";
import { SectionBadge } from "@/components/ui/section-badge";
import { ArrowIcon } from "@/components/ui/icons";

/**
 * Which glyph a service gets, matched on its title rather than its
 * position — the service order differs from market to market, and an
 * index map would put a brain on a booking app.
 */
const ICON_RULES: [RegExp, typeof AiChat01Icon][] = [
  [/chatbot|chat|agent/i, AiChat01Icon],
  [/booking|appointment/i, AiSchedulingIcon],
  [/integrat/i, AiBrain01Icon],
  [/flutter|mobile/i, MobileProgramming01Icon],
  [/saas|mvp/i, Rocket01Icon],
  [/marketplace|on-demand/i, Store01Icon],
  [/rag|search|knowledge/i, AiSearchIcon],
];

const iconFor = (title: string) =>
  ICON_RULES.find(([pattern]) => pattern.test(title))?.[1] ?? AiProgrammingIcon;

/** Three to a row, so the hover widen has room to work. */
const ROW_SIZE = 3;

function chunk<T>(items: T[], size: number) {
  const rows: T[][] = [];
  for (let i = 0; i < items.length; i += size) rows.push(items.slice(i, i + size));
  return rows;
}

/**
 * services-v6. Snow-white cards that invert to black on hover while the
 * hovered card widens from 33.3% to 45% and its neighbours give up the
 * room (a-46 / a-47, 400ms ease).
 *
 * The widen is a flex-basis transition, so each row of three is its own
 * flex container — a wrapped single container would shrink rather than
 * trade width.
 */
export default function CountryServices({ page }: { page: CountryPageData }) {
  const rows = chunk(page.services, ROW_SIZE);
  let position = 0;

  return (
    <section className="services-v6 ds-root">
      <div className="container">
        <div className="services-v6-wrap">
          <Reveal>
            <SectionBadge label={`Services in ${page.country}`} />
          </Reveal>

          {rows.map((row, rowIndex) => (
            <div className="services-v6-main-wrap" key={rowIndex}>
              {row.map((service) => {
                position += 1;
                return (
                  <Reveal
                    key={service.title}
                    index={position - 1}
                    className="services-v6-list-wrap"
                  >
                    <Link href="/services" className="services-v6-link">
                      <div className="services-v6-top">
                        <div className="services-v6-icons">
                          <span className="services-icon services-icon-white">
                            <HugeiconsIcon
                              icon={iconFor(service.title)}
                              size={26}
                              strokeWidth={1.5}
                            />
                          </span>
                          <span className="services-icon services-icon-pink">
                            <HugeiconsIcon
                              icon={iconFor(service.title)}
                              size={26}
                              strokeWidth={1.5}
                            />
                          </span>
                        </div>
                        <div className="paragraph-02 text-gray">
                          //{String(position).padStart(2, "0")}
                        </div>
                      </div>

                      <div className="services-v6-bottom">
                        <p className="paragraph-02 services-v6-subtitle">{service.desc}</p>
                        <div className="services-v6-content">
                          {/* a div, not a heading: the section carries no h2 of its
                              own, so six h3s here would break the outline */}
                          <div className="h6 services-v6-title">{service.title}</div>
                          <div className="awards-v1-link v4">
                            {/* flex-end in a 38px box parks the second
                                glyph on screen: dark at rest on the white
                                pill, the light one sliding in over accent */}
                            <div className="awards-v1-icons">
                              <ArrowIcon tone="light" />
                              <ArrowIcon tone="dark" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </Reveal>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
