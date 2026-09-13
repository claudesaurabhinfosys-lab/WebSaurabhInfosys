"use client";

import { useState } from "react";
import { toast } from "sonner";
import { COMPANY } from "@/lib/data";
import { StButton } from "../button";

/**
 * The static export has no form endpoint, so the submit composes the message
 * and hands it to WhatsApp — the channel the studio answers fastest on.
 */
export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const body = [
      `Hi Saurabh Infosys, I'm ${name.trim()}.`,
      message.trim(),
      `You can reach me at ${email.trim()}.`,
    ]
      .filter(Boolean)
      .join("\n\n");

    window.open(
      `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(body)}`,
      "_blank",
      "noopener",
    );
    toast.success("Opening WhatsApp — send the message and we will reply.");
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
          Write message
        </label>
        <textarea
          id="contact-message"
          className="st-textarea"
          placeholder="How can we help? Tell us what you are building."
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
      </div>

      <div className="st-form-submit">
        <StButton type="submit" variant="dark">
          Submit Message
        </StButton>
      </div>
    </form>
  );
}
