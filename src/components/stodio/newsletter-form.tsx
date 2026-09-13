"use client";

import { useState } from "react";
import { toast } from "sonner";
import { COMPANY } from "@/lib/data";
import { ArrowUpRight } from "./icons";

/**
 * There is no newsletter backend on the static export, so the form hands the
 * address straight to WhatsApp — the channel the studio actually answers on.
 */
export default function NewsletterForm() {
  const [email, setEmail] = useState("");

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const value = email.trim();
    if (!value) return;

    const message = encodeURIComponent(
      `Hi Saurabh Infosys — please add ${value} to your updates list.`,
    );
    window.open(`https://wa.me/${COMPANY.whatsapp}?text=${message}`, "_blank", "noopener");
    toast.success("Opening WhatsApp — send the message and you are on the list.");
    setEmail("");
  }

  return (
    <div className="st-footer-form-block">
      <form className="st-footer-form" onSubmit={onSubmit}>
        <label className="st-sr-only" htmlFor="newsletter-email">
          Your email address
        </label>
        <input
          id="newsletter-email"
          className="st-footer-input"
          type="email"
          name="email"
          placeholder="Enter your email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <button className="st-footer-form-button" type="submit" aria-label="Subscribe">
          <span className="st-footer-button">
            <ArrowUpRight className="st-button-icon" />
          </span>
        </button>
      </form>
    </div>
  );
}
