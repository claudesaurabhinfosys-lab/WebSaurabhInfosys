"use client";

import { useState } from "react";
import { toast } from "sonner";
import { ABOUT, COMPANY } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";

/**
 * contact-v1. The reference posts to a Webflow form endpoint.
 *
 * The site is a static export with no form endpoint, so this composes the
 * enquiry and hands it to WhatsApp — the same call services/inquiry-section
 * already makes, rather than posting into nothing.
 */
export default function ContactSection() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const first = String(data.get("first-name") ?? "").trim();
    const last = String(data.get("last-name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const note = String(data.get("note") ?? "").trim();

    setSending(true);
    const message = `Hi Saurabh Infosys, I'm ${first} ${last} (${email}).\n\n${note}`;
    window.open(
      `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
    toast.success("Opening WhatsApp with your enquiry — we reply within 2 hours.");
    form.reset();
    setSending(false);
  };

  return (
    <section className="contact-v1 ds-root">
      <div className="container">
        <div className="contact-v1-wrap">
          <Reveal delay={0.1} className="contact-v1-head-wrap">
            <div className="heading-wrap">
              <h2 className="h3 contact-v1-heading">{ABOUT.contactHeading}</h2>
            </div>
          </Reveal>

          <Reveal delay={0.2} className="contact-v1-main-wrap">
            <form className="contact-form" onSubmit={onSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label className="paragraph-m-02 form-label" htmlFor="first-name">
                    First name
                  </label>
                  <input
                    className="input-field"
                    id="first-name"
                    name="first-name"
                    type="text"
                    autoComplete="given-name"
                    placeholder="Enter your first name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="paragraph-m-02 form-label" htmlFor="last-name">
                    Last name
                  </label>
                  <input
                    className="input-field"
                    id="last-name"
                    name="last-name"
                    type="text"
                    autoComplete="family-name"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="paragraph-m-02 form-label" htmlFor="email">
                    Your email
                  </label>
                  <input
                    className="input-field"
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Enter your email address"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="paragraph-m-02 form-label" htmlFor="note">
                    Drop note
                  </label>
                  <textarea
                    className="input-field textarea"
                    id="note"
                    name="note"
                    placeholder="Enter your message"
                    required
                  />
                </div>
              </div>

              <button className="submit-button" type="submit" disabled={sending}>
                {sending ? "Opening WhatsApp…" : "Send now"}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
