"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FormEvent, useState } from "react";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setIsSent(false);

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    const subject = encodeURIComponent(`Website inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    );

    window.location.href = `mailto:amarkdotdev@gmail.com?subject=${subject}&body=${body}`;

    setIsSubmitting(false);
    setIsSent(true);
    event.currentTarget.reset();
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <label className="block space-y-2">
        <span className="text-xs uppercase tracking-[0.18em] leading-relaxed text-zinc-300">Name</span>
        <input
          required
          name="name"
          type="text"
          className="min-h-11 w-full rounded-2xl border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-base text-zinc-100 outline-none transition focus-visible:border-cyan-200/70 focus-visible:bg-white/[0.06] focus-visible:ring-2 focus-visible:ring-cyan-200/55 active:border-cyan-200/50 active:bg-white/[0.07]"
        />
      </label>

      <label className="block space-y-2">
        <span className="text-xs uppercase tracking-[0.18em] leading-relaxed text-zinc-300">Email</span>
        <input
          required
          name="email"
          type="email"
          className="min-h-11 w-full rounded-2xl border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-base text-zinc-100 outline-none transition focus-visible:border-cyan-200/70 focus-visible:bg-white/[0.06] focus-visible:ring-2 focus-visible:ring-cyan-200/55 active:border-cyan-200/50 active:bg-white/[0.07]"
        />
      </label>

      <label className="block space-y-2">
        <span className="text-xs uppercase tracking-[0.18em] leading-relaxed text-zinc-300">Message</span>
        <textarea
          required
          name="message"
          rows={5}
          className="min-h-11 w-full resize-none rounded-2xl border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-base leading-[1.6] text-zinc-100 outline-none transition focus-visible:border-cyan-200/70 focus-visible:bg-white/[0.06] focus-visible:ring-2 focus-visible:ring-cyan-200/55 active:border-cyan-200/50 active:bg-white/[0.07]"
        />
      </label>

      <motion.button
        whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
        disabled={isSubmitting}
        type="submit"
        className="inline-flex min-h-11 w-full min-w-0 items-center justify-center rounded-full bg-cyan-300/95 px-6 py-3 text-sm font-semibold text-zinc-950 shadow-glow transition hover:bg-cyan-200 hover:shadow-glow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/60 focus-visible:ring-offset-2 focus-visible:ring-offset-site-bg active:bg-cyan-200 disabled:cursor-wait disabled:opacity-80 disabled:shadow-none sm:w-auto sm:min-w-48"
      >
        {isSubmitting ? "Transmitting..." : "Send Message"}
      </motion.button>

      <motion.p
        animate={
          prefersReducedMotion
            ? { opacity: isSent ? 1 : 0 }
            : { opacity: isSent ? 1 : 0, y: isSent ? 0 : 6 }
        }
        transition={prefersReducedMotion ? { duration: 0 } : undefined}
        className="text-sm text-cyan-100/80"
      >
        Your mail client opened with the message draft.
      </motion.p>
    </form>
  );
}
