"use client";

import { useState } from "react";
import { toast } from "sonner";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      toast.error("Enter a valid email address.");
      return;
    }
    toast.success("Thanks for subscribing!");
    setEmail("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-md items-center rounded-full border border-white/20 bg-black p-1.5 transition-colors focus-within:border-primary"
    >
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="flex-1 bg-transparent px-4 font-manrope text-xs text-white outline-none placeholder:text-white/40 md:text-sm"
      />
      <button
        type="submit"
        className="rounded-full bg-primary px-6 py-2.5 font-manrope text-xs font-semibold text-white transition-colors hover:bg-primary-hover"
      >
        Subscribe
      </button>
    </form>
  );
}
