"use client";

import { useState } from "react";
import { toast } from "sonner";
import { COMPANY } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";

/**
 * contact-v1, the last section on about-03.
 *
 * The site is a static export with no form endpoint, so the enquiry is
 * composed and handed to WhatsApp — the same call every other form on
 * this site makes rather than posting into nothing. The product name
 * rides along so we know which one the enquiry is about.
 */
export function ProductContact({ productName }: { productName: string }) {
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
    const message = `Hi Saurabh Infosys, I'm ${first} ${last} (${email}) asking about ${productName}.\n\n${note}`;
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
              <h2 className="h3 contact-v1-heading">
                Want to see {productName} on your own data? Let&rsquo;s get in touch!
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.2} className="contact-v1-main-wrap">
            <form className="contact-form" onSubmit={onSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label className="paragraph-m-02 form-label" htmlFor="pd-first">
                    First name
                  </label>
                  <input
                    className="input-field"
                    id="pd-first"
                    name="first-name"
                    type="text"
                    autoComplete="given-name"
                    placeholder="Enter your first name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="paragraph-m-02 form-label" htmlFor="pd-last">
                    Last name
                  </label>
                  <input
                    className="input-field"
                    id="pd-last"
                    name="last-name"
                    type="text"
                    autoComplete="family-name"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="paragraph-m-02 form-label" htmlFor="pd-email">
                    Your email
                  </label>
                  <input
                    className="input-field"
                    id="pd-email"
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
                  <label className="paragraph-m-02 form-label" htmlFor="pd-note">
                    Drop note
                  </label>
                  <textarea
                    className="input-field textarea"
                    id="pd-note"
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
