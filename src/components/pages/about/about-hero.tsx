import { ABOUT, COMPANY } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";
import { PrimaryButton } from "@/components/ui/ds-button";
import { Odometer } from "@/components/ui/odometer";

const SOCIALS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/saurabh-infosys/" },
  { label: "WhatsApp", href: `https://wa.me/${COMPANY.whatsapp}` },
  { label: "Email", href: `mailto:${COMPANY.email}` },
  { label: "Clutch", href: "https://clutch.co/" },
];

/**
 * about-v1. Two tinted cards over a full-width panel.
 *
 * The reference runs a background showreel in that panel with a play/pause
 * control. We have no footage, so the panel is ink and carries the same
 * copy and social row it did over the video — a black frame reads as a
 * deliberate surface, where an empty video well reads as a broken one.
 */
export default function AboutHero() {
  return (
    <section className="about-v1 ds-root">
      <div className="container">
        <div className="about-v1-wrap">
          <Reveal delay={0.1}>
            <div className="paragraph-03 about-v1-note uppercase-label">
              — {ABOUT.note}
            </div>
          </Reveal>

          <Reveal delay={0.2} className="about-v1-main-wrap">
            <div className="about-v1-grid-wrap">
              <div className="about-v1-grid-column">
                <div className="about-v1-badge-wrap">
                  <div className="badge-dot" />
                  <div className="paragraph-02">{ABOUT.badgeLabel}</div>
                </div>
                <div className="about-v1-statistics-wrap">
                  <Odometer
                    value={ABOUT.heroStat.value}
                    suffix={ABOUT.heroStat.suffix}
                    size="h1"
                  />
                  <div className="paragraph-02">{ABOUT.heroStatCaption}</div>
                </div>
              </div>

              <div className="about-v1-grid-column i2">
                <h1 className="h5 about-v1-title">{ABOUT.heroTitle}</h1>
                <div className="about-v1-link-wrap">
                  <div className="paragraph-02 about-v1-brand">{COMPANY.name}</div>
                  <PrimaryButton href="/contact" label="Work with us" className="full" />
                </div>
              </div>
            </div>

            <div className="about-v1-video-wrap">
              {/* stands in for the reference's showreel — see
                  public/images/about/studio-panel.webp */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/about/studio-panel.webp"
                alt=""
                className="fit-cover about-v1-panel-image"
              />
              <div className="about-v1-panel-scrim" />
              <div className="about-v1-video-content">
                <p className="paragraph-01 about-v1-video-details">{ABOUT.panelCopy}</p>
                <div className="about-v1-social-wrap">
                  {SOCIALS.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="about-v1-social-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
