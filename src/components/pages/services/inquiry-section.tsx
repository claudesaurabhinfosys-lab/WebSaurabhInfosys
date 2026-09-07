"use client";

import { useState } from "react";
import { toast } from "sonner";
import { CLIENTS, COMPANY } from "@/lib/data";
import { SectionBadge } from "@/components/ui/section-badge";
import { Reveal } from "@/components/ui/reveal";

/**
 * The site is a static export with no form endpoint, so the form composes
 * the enquiry and hands it to WhatsApp — the channel we actually answer
 * fastest — rather than posting into nothing.
 */
export default function InquirySection() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const subject = String(data.get("subject") ?? "").trim();

    setSending(true);
    const message = `Hi Saurabh Infosys, I'm ${name} (${email}).\n\n${subject}`;
    window.open(
      `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
    toast.success("Opening WhatsApp with your enquiry — we reply within 2 hours.");
    form.reset();
    setSending(false);
  };

  return (
    <section className="inquiry ds-root">
      <div className="container">
        <Reveal className="inquiry-wrap">
          <div className="inquiry-left">
            <div className="inquiry-head-wrap">
              <SectionBadge label="Inquiry" />
              <h2 className="inquiry-heading">Let&rsquo;s start a project</h2>
            </div>

            <form className="inquiry-form" onSubmit={onSubmit}>
              <div className="inquiry-form-row">
                <div className="inquiry-field">
                  <label className="sr-only" htmlFor="inquiry-name">
                    Your name
                  </label>
                  <input
                    id="inquiry-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    placeholder="Enter your name"
                    className="inquiry-form-field"
                  />
                </div>
                <div className="inquiry-field">
                  <label className="sr-only" htmlFor="inquiry-email">
                    Your email
                  </label>
                  <input
                    id="inquiry-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="Enter your email"
                    className="inquiry-form-field"
                  />
                </div>
              </div>
              <div className="inquiry-form-row">
                <div className="inquiry-field">
                  <label className="sr-only" htmlFor="inquiry-subject">
                    What you need built
                  </label>
                  <input
                    id="inquiry-subject"
                    name="subject"
                    type="text"
                    required
                    placeholder="What do you need built?"
                    className="inquiry-form-field"
                  />
                </div>
              </div>
              <button type="submit" className="submit-button sm">
                {sending ? "Sending" : "Send now"}
              </button>
            </form>
          </div>

          <div className="inquiry-right">
            <div className="inquiry-top-wrap">
              <h2 className="inquiry-heading">Our clients</h2>
              <div className="inquiry-client-wrap">
                {CLIENTS.slice(0, 4).map((client) => (
                  <div className="paragraph-01 inquiry-client" key={client.name}>
                    {client.name}
                  </div>
                ))}
              </div>
            </div>

            <p className="paragraph-01 inquiry-subtitle">
              Every engagement starts with the number that has to move, and ends
              with software your team can run without us in the room.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
