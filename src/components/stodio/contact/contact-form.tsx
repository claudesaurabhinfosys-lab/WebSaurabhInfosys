"use client";

import { useState } from "react";
import { toast } from "sonner";
import { COMPANY } from "@/lib/data";
import { StButton } from "../button";

const FALLBACK_ERROR = "Could not send your message. Please WhatsApp us instead.";

function openWhatsApp() {
  window.open(`https://wa.me/${COMPANY.whatsapp}`, "_blank", "noopener");
}

/**
 * Posts to /contact.php, which deploy.yml generates from
 * scripts/contact.php.template and which mails the enquiry over SMTP. The file
 * only exists on the server, so under `next dev` a submit ends on the error toast.
 */
export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending) return;
    setSending(true);

    try {
      const res = await fetch("/contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), email: email.trim(), message: message.trim() }),
      });
      const data: { ok?: boolean; message?: string; error?: string } = await res
        .json()
        .catch(() => ({}));

      if (data.ok) {
        toast.success(data.message ?? "Message sent! We will reply within 2 hours.");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        toast.error(data.error ?? FALLBACK_ERROR, {
          action: { label: "WhatsApp", onClick: openWhatsApp },
        });
      }
    } catch {
      toast.error("Network error. Please WhatsApp us instead.", {
        action: { label: "WhatsApp", onClick: openWhatsApp },
      });
    } finally {
      setSending(false);
    }
  }

  return (
    <form className="st-form" onSubmit={onSubmit}>
      <div className="st-form-row">
        <div className="st-field">
          <label className="st-field-label" htmlFor="contact-name">
            First name <span className="st-field-required">*</span>
          </label>
          <input
            id="contact-name"
            className="st-input"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </div>

        <div className="st-field">
          <label className="st-field-label" htmlFor="contact-email">
            Email <span className="st-field-required">*</span>
          </label>
          <input
            id="contact-email"
            className="st-input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
      </div>

      <div className="st-field">
        <label className="st-field-label" htmlFor="contact-message">
          Write message <span className="st-field-required">*</span>
        </label>
        <textarea
          id="contact-message"
          className="st-textarea"
          placeholder="How can we help? Tell us what you are building."
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          required
        />
      </div>

      <div className="st-form-submit">
        <StButton type="submit" variant="dark" disabled={sending} aria-busy={sending}>
          {sending ? "Sending…" : "Submit Message"}
        </StButton>
      </div>
    </form>
  );
}
