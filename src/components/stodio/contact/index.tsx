import Image from "next/image";
import Reveal from "../reveal";
import Tag from "../tag";
import ContactForm from "./contact-form";
import CtaSection from "../cta-section";
import { ABOUT_MARKETS, COMPANY, CONTACT } from "@/lib/data";

export default function ContactPage() {
  return (
    <>
      <section className="st-contact-section">
        <div className="st-container">
          <div className="st-contact-block">
            <div>
              <Reveal className="st-tag-block">
                <Tag>Since 2021</Tag>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="st-h1" style={{ marginTop: "var(--st-gap-24)" }}>
                  {CONTACT.heading}
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="st-text-l st-secondary" style={{ marginTop: "var(--st-gap-24)" }}>
                  {CONTACT.subtitle} Tell us what you are building and we will come
                  back with an honest view of scope, timeline and cost.
                </p>
              </Reveal>

              <Reveal delay={300}>
                <div className="st-contact-details">
                  <div className="st-contact-detail">
                    <div className="st-contact-detail-label">Address</div>
                    <div className="st-contact-detail-value">{COMPANY.location}</div>
                  </div>
                  <div className="st-contact-detail">
                    <div className="st-contact-detail-label">Email</div>
                    <a className="st-contact-detail-value" href={`mailto:${COMPANY.email}`}>
                      {COMPANY.email}
                    </a>
                  </div>
                  <div className="st-contact-detail">
                    <div className="st-contact-detail-label">Phone</div>
                    <a className="st-contact-detail-value" href={`tel:${COMPANY.phone}`}>
                      {COMPANY.phone}
                    </a>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={380}>
                <ContactForm />
              </Reveal>
            </div>

            <Reveal delay={200} className="st-contact-media">
              <Image
                src="/images/hero/contact-card.webp"
                alt="Saurabh Infosys studio"
                width={900}
                height={1100}
                priority
              />
            </Reveal>
          </div>

          <Reveal className="st-contact-map">
            <iframe
              src={CONTACT.mapUrl}
              title="Saurabh Infosys on Google Maps"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
        </div>
      </section>

      {/* ── Where we work ────────────────────────────────────────────────── */}
      <section className="st-locations-section">
        <div className="st-container">
          <Reveal className="st-tag-block">
            <Tag on="dark">Where we work</Tag>
          </Reveal>

          <div className="st-location-list">
            {ABOUT_MARKETS.map((market, index) => (
              <Reveal className="st-location-row" key={market.slug} delay={index * 70}>
                <div className="st-location-left">
                  <Image
                    className="st-location-thumb"
                    src={`/images/about/market-${market.slug}.webp`}
                    alt=""
                    width={80}
                    height={60}
                  />
                  <div className="st-location-name">{market.name}</div>
                </div>
                <p className="st-location-address st-text-m">{market.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        eyebrow="Prefer to talk?"
        heading="Message us on WhatsApp"
        ctaLabel="Open WhatsApp"
        ctaHref={`https://wa.me/${COMPANY.whatsapp}`}
      />
    </>
  );
}
