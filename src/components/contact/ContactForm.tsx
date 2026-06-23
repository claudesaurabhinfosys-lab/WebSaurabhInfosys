"use client";

import { useState, FormEvent } from "react";
import { COMPANY } from "@/lib/data";

const BUDGET_OPTIONS = [
  "Under ₹50K",
  "₹50K–₹2L",
  "₹2L–₹5L",
  "₹5L+",
  "Let's discuss",
];

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const fd = new FormData(e.currentTarget);
    const payload = {
      name:    fd.get("name"),
      email:   fd.get("email"),
      message: fd.get("message"),
      budget:  fd.get("budget") || "Not specified",
    };

    try {
      const res = await fetch("/contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data.ok) {
        setStatus("success");
      } else {
        setErrorMsg(data.error || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please WhatsApp us instead.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-card rounded-2xl p-10 border border-ink/5 flex flex-col items-center justify-center text-center min-h-[420px]">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
          <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-syne text-2xl font-bold text-ink mb-3">Message sent!</h3>
        <p className="text-ink-light text-base max-w-xs leading-relaxed">
          We&apos;ve received your enquiry and will reply within 2 hours on business days.
        </p>
        <a
          href={`https://wa.me/${COMPANY.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-syne font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
        >
          Also chat on WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-card rounded-2xl p-8 border border-ink/5 space-y-6"
    >
      <div>
        <label htmlFor="name" className="block text-ink/70 text-sm font-medium mb-2">
          Your name <span className="text-accent">*</span>
        </label>
        <input
          type="text" id="name" name="name" required
          placeholder="Rahul Sharma"
          className="w-full bg-bg border border-ink/10 rounded-xl px-4 py-3 text-ink placeholder-ink/30 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-ink/70 text-sm font-medium mb-2">
          Email address <span className="text-accent">*</span>
        </label>
        <input
          type="email" id="email" name="email" required
          placeholder="rahul@company.com"
          className="w-full bg-bg border border-ink/10 rounded-xl px-4 py-3 text-ink placeholder-ink/30 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-ink/70 text-sm font-medium mb-2">
          Tell us about your project <span className="text-accent">*</span>
        </label>
        <textarea
          id="message" name="message" required rows={5}
          placeholder="I need a Flutter app that does X, Y, Z. My timeline is..."
          className="w-full bg-bg border border-ink/10 rounded-xl px-4 py-3 text-ink placeholder-ink/30 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"
        />
      </div>

      <div>
        <label htmlFor="budget" className="block text-ink/70 text-sm font-medium mb-2">
          Budget range
        </label>
        <select
          id="budget" name="budget"
          className="w-full bg-bg border border-ink/10 rounded-xl px-4 py-3 text-ink text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors appearance-none cursor-pointer"
        >
          <option value="">Select a range…</option>
          {BUDGET_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>

      {status === "error" && (
        <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-red-700 text-sm">
          {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-accent hover:bg-accent/90 disabled:opacity-60 disabled:cursor-not-allowed text-white font-syne font-semibold px-6 py-4 rounded-xl transition-colors text-base flex items-center justify-center gap-2"
      >
        {status === "loading" ? (
          <>
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending…
          </>
        ) : "Send Message"}
      </button>

      <p className="text-ink/30 text-xs text-center">
        Or just WhatsApp us — it&apos;s faster.
      </p>
    </form>
  );
}