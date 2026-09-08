"use client";

import { useState } from "react";
import { toast } from "sonner";
import { COMPANY } from "@/lib/data";

type Status = "idle" | "sending" | "sent" | "failed";

/**
 * The contact form, in the reference's markup.
 *
 * It still posts to /contact.php, which is what the old form did and what
 * actually delivers email — this is a restyle, not a change of plumbing.
 * If that post fails the error state offers WhatsApp rather than leaving
 * someone with a dead form and a message they have retyped once already.
 */
export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: `${String(data.get("first-name") ?? "").trim()} ${String(
        data.get("last-name") ?? ""
      ).trim()}`.trim(),
      email: String(data.get("email") ?? "").trim(),
      message: String(data.get("note") ?? "").trim(),
    };

    setStatus("sending");
    try {
      const res = await fetch("/contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!json.ok) throw new Error(json.error ?? "send failed");
      setStatus("sent");
      toast.success("Message sent — we reply within 24 hours.");
      form.reset();
    } catch {
      setStatus("failed");
      toast.error("Could not send that. WhatsApp is the fastest way through.");
    }
  }

  if (status === "sent") {
    return (
      <div className="success-message">
        <p className="paragraph-01">
          Thank you — your message has been received. We reply within 24 hours on
          business days.
        </p>
      </div>
    );
  }

  return (
    <div className="form-block">
      <form className="contact-form" onSubmit={onSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label className="paragraph-m-02 form-label" htmlFor="c-first">
              First name
            </label>
            <input
              className="input-field"
              id="c-first"
              name="first-name"
              type="text"
              autoComplete="given-name"
              placeholder="Enter your first name"
              required
            />
          </div>
          <div className="form-group">
            <label className="paragraph-m-02 form-label" htmlFor="c-last">
              Last name
            </label>
            <input
              className="input-field"
              id="c-last"
              name="last-name"
              type="text"
              autoComplete="family-name"
              placeholder="Enter your last name"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label className="paragraph-m-02 form-label" htmlFor="c-email">
              Your email
            </label>
            <input
              className="input-field"
              id="c-email"
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
            <label className="paragraph-m-02 form-label" htmlFor="c-note">
              Drop note
            </label>
            <textarea
              className="input-field textarea"
              id="c-note"
              name="note"
              placeholder="Enter your message"
              required
            />
          </div>
        </div>

        <button className="submit-button" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send now"}
        </button>
      </form>

      {status === "failed" && (
        <div className="error-message" role="alert" style={{ marginTop: 16 }}>
          <p className="paragraph-02">
            That did not go through.{" "}
            <a href={`https://wa.me/${COMPANY.whatsapp}`} className="work-view-link">
              Message us on WhatsApp
            </a>{" "}
            and we will pick it up straight away.
          </p>
        </div>
      )}
    </div>
  );
}
