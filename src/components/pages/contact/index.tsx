import { CONTACT, COMPANY } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";
import { SocialIcon } from "@/components/ui/accordion-icons";
import CtaSection from "@/components/pages/home/cta-section";
import { ContactForm } from "./contact-form";

/** Where each channel actually goes. */
const HREF: Record<string, string> = {
  whatsapp: `https://wa.me/${COMPANY.whatsapp}`,
  email: `mailto:${COMPANY.email}`,
  phone: `tel:${COMPANY.phone.replace(/\s/g, "")}`,
};

const VALUE: Record<string, string> = {
  whatsapp: COMPANY.phone,
  email: COMPANY.email,
  phone: COMPANY.phone,
};

/**
 * /contact, ported from the reference contact page: one centred 914px
 * column with the heading, a line of subtitle and the form, then the CTA.
 *
 * The channel row and map are ours. The reference page carries neither,
 * but they are the reason someone opens a contact page.
 */
export function ContactPage() {
  return (
    <div className="si-page">
      <section className="contact ds-root">
        <div className="container">
          <div className="contact-wrap">
            <Reveal delay={0.1}>
              <div className="hero-heading-wrap">
                <h1>{CONTACT.heading}</h1>
              </div>
            </Reveal>

            <Reveal delay={0.2} className="contact-main-wrap">
              <div className="h6-medium contact-subtitle">{CONTACT.subtitle}</div>

              <ContactForm />

              <div className="contact-channels">
                {CONTACT.channels.map((channel) => (
                  <a
                    key={channel.kind}
                    href={HREF[channel.kind]}
                    className="contact-channel"
                    target={channel.kind === "whatsapp" ? "_blank" : undefined}
                    rel={channel.kind === "whatsapp" ? "noopener noreferrer" : undefined}
                  >
                    <SocialIcon name={channel.kind} />
                    <div className="paragraph-m-02">{channel.name}</div>
                    <div className="paragraph-02 text-gray">{VALUE[channel.kind]}</div>
                    <div className="caption text-gray">{channel.detail}</div>
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="contact-map">
            <iframe
              src={CONTACT.mapUrl}
              title="Saurabh Infosys — Ahmedabad office"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </Reveal>
        </div>
      </section>

      <CtaSection />
    </div>
  );
}
