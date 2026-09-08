import Link from "next/link";
import type { CountryClient, CountryPageData } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";
import { SectionBadge } from "@/components/ui/section-badge";
import { PrimaryButton } from "@/components/ui/ds-button";
import { ArrowIcon } from "@/components/ui/icons";
import { workImage } from "@/components/pages/portfolio/work-images";

/**
 * work-v3. Alternating rows: a wide 790px card, then a 558px card pushed
 * to the right edge, and so on down the column. The last row carries the
 * All projects button beside its card.
 *
 * The reference scrubs a white cover off each card on scroll. We drop it
 * — `<Reveal>` is the one entrance on this site, and a second reveal on
 * the same element reads as a stutter.
 */
function WorkCard({
  client,
  index,
  small,
}: {
  client: CountryClient;
  index: number;
  small: boolean;
}) {
  return (
    <Link href="/portfolio" className="work-link">
      <div className="work-v1-card">
        <div className={`work-v1-image-wrap ${small ? "v3-sm" : "v3"}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={workImage(undefined, index, 0)}
            alt={`${client.name} — ${client.service}`}
            className="fit-cover work-v1-image"
            loading={index === 0 ? undefined : "lazy"}
          />
          <div className="work-button-wrap">
            <div className="work-button">
              <div className="work-btn-text-wrap">
                <div className="primary-btn-mask">
                  <div className="primary-btn-text-group">
                    <div className="paragraph-02 btn-text-01">View project</div>
                    <div className="paragraph-02 btn-text-02" aria-hidden="true">
                      View project
                    </div>
                  </div>
                </div>
              </div>
              <div className="work-arrow-wrap">
                <div className="primary-btn-arrow-mask">
                  <ArrowIcon tone="light" />
                  <ArrowIcon tone="dark" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="work-v1-content-wrap">
          <div className="work-v1-details">
            <div className="paragraph-m-02 work-v3-title">{client.name}</div>
            <div className="paragraph-m-02 work-v3-tag">{client.industry}</div>
          </div>
          <div className="paragraph-m-02 work-v3-tag">{client.service}</div>
        </div>
      </div>
    </Link>
  );
}

export default function CountryWork({ page }: { page: CountryPageData }) {
  const clients = page.clients;
  const lastIndex = clients.length - 1;

  return (
    <section className="work-v3 ds-root">
      <div className="container">
        <div className="work-v3-wrap">
          <div className="work-v3-head-wrap">
            <Reveal>
              <SectionBadge label="Projects" />
            </Reveal>
            <Reveal index={1}>
              <h2 className="align-center">{page.workHeading}</h2>
            </Reveal>
          </div>

          <div className="work-v3-main-wrap">
            {clients.map((client, i) => {
              /* the last row shares its line with the button, so it always
                 takes the wide card whatever the alternation says */
              const isLast = i === lastIndex;
              const small = i % 2 === 1 && !isLast;
              /* the reference drops the second row at 479 to keep the
                 column from running long on a phone */
              const rowClass = [
                "work-v3-row",
                isLast ? "flex" : "",
                i === 1 ? "hide" : "",
              ]
                .filter(Boolean)
                .join(" ");

              return (
                <div className={rowClass} key={client.name}>
                  <Reveal className={`work-v3-item${small ? " sm" : ""}`}>
                    <WorkCard client={client} index={i} small={small} />
                  </Reveal>

                  {isLast && (
                    <Reveal index={1} className="work-v3-btn">
                      <PrimaryButton href="/portfolio" label="All projects" />
                    </Reveal>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
