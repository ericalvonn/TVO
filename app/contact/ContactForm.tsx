"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { site } from "@/lib/content";

/**
 * No form processor is configured, so submissions open the visitor's email client
 * addressed to ACTS. To use a form service later, replace `onSubmit` with a POST to it.
 */
export default function ContactForm() {
  const params = useSearchParams();
  const [subject, setSubject] = useState(params.get("subject") ?? "");
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = `${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`;
    window.location.href = `mailto:${site.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  const field = "mt-2 block min-h-12 w-full border-2 border-navy-primary/20 bg-white px-4 py-3 outline-none focus:border-blue-action";
  const label = "font-mono text-xs font-bold uppercase tracking-[0.2em] text-navy-primary/70";

  return (
    <form onSubmit={onSubmit} className="bg-white p-6 shadow-xl sm:p-10">
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block">
          <span className={label}>Name</span>
          <input name="name" required autoComplete="name" className={field} />
        </label>
        <label className="block">
          <span className={label}>Email</span>
          <input name="email" type="email" required autoComplete="email" className={field} />
        </label>
      </div>
      <label className="mt-6 block">
        <span className={label}>Subject</span>
        <input name="subject" required value={subject} onChange={(e) => setSubject(e.target.value)} className={field} />
      </label>
      <label className="mt-6 block">
        <span className={label}>Message</span>
        <textarea name="message" required rows={6} className={field} />
      </label>
      <button
        type="submit"
        className="mt-8 min-h-14 w-full bg-orange-acts font-display text-xl font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#c94600] sm:w-auto sm:px-10"
      >
        SEND MESSAGE
      </button>
      {sent && (
        <p role="status" className="mt-4 text-sm text-navy-primary/80">
          Your email app should open with your message. If it didn&apos;t, email us directly at{" "}
          <a className="text-blue-action underline" href={`mailto:${site.contact.email}`}>
            {site.contact.email}
          </a>
          .
        </p>
      )}
    </form>
  );
}
