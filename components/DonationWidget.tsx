"use client";

import { useState } from "react";
import { donation, site } from "@/lib/content";

/**
 * Visual donation widget. No payment processor is wired up until ACTS supplies one:
 * set `processorUrl` in content/donation.json and "Give Now" will forward
 * `amount` and `recurring` as query parameters to it.
 */
export default function DonationWidget() {
  const [amount, setAmount] = useState<number | "custom">(donation.amounts[1] ?? donation.amounts[0]);
  const [custom, setCustom] = useState("");
  const [monthly, setMonthly] = useState(false);
  const [notice, setNotice] = useState(false);

  const value = amount === "custom" ? Number(custom) : amount;
  const valid = Number.isFinite(value) && value > 0;

  function give() {
    if (!valid) return;
    if (!donation.processorUrl) {
      setNotice(true);
      return;
    }
    const url = new URL(donation.processorUrl);
    url.searchParams.set("amount", String(value));
    url.searchParams.set("recurring", monthly ? "monthly" : "once");
    window.location.href = url.toString();
  }

  const option = (selected: boolean) =>
    `min-h-14 border-2 font-mono text-lg font-bold transition-colors ${
      selected ? "border-orange-acts bg-orange-acts text-white" : "border-navy-primary/20 bg-white text-navy-primary hover:border-blue-action"
    }`;

  return (
    <div className="bg-white p-6 text-navy-primary shadow-xl sm:p-8">
      <fieldset>
        <legend className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-navy-primary/70">Choose an amount</legend>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {donation.amounts.map((a) => (
            <button key={a} type="button" aria-pressed={amount === a} className={option(amount === a)} onClick={() => setAmount(a)}>
              ${a}
            </button>
          ))}
          <button type="button" aria-pressed={amount === "custom"} className={option(amount === "custom")} onClick={() => setAmount("custom")}>
            Custom
          </button>
        </div>
      </fieldset>

      {amount === "custom" && (
        <label className="mt-4 block">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-navy-primary/70">Custom amount (USD)</span>
          <span className="mt-2 flex items-center border-2 border-navy-primary/20 focus-within:border-blue-action">
            <span className="px-3 font-mono text-lg">$</span>
            <input
              type="number"
              min={1}
              inputMode="decimal"
              value={custom}
              onChange={(e) => setCustom(e.target.value)}
              className="min-h-12 w-full bg-transparent pr-3 font-mono text-lg outline-none"
              placeholder="0"
            />
          </span>
        </label>
      )}

      <label className="mt-6 flex cursor-pointer items-center justify-between gap-4">
        <span className="font-display text-lg font-semibold uppercase tracking-wide">Make it monthly</span>
        <span className="relative inline-flex">
          <input type="checkbox" role="switch" checked={monthly} onChange={(e) => setMonthly(e.target.checked)} className="peer sr-only" />
          <span className="h-8 w-14 bg-warm-gray transition-colors peer-checked:bg-blue-action peer-focus-visible:outline peer-focus-visible:outline-3 peer-focus-visible:outline-blue-action" />
          <span className="absolute left-1 top-1 h-6 w-6 bg-white shadow transition-transform peer-checked:translate-x-6" />
        </span>
      </label>

      <button
        type="button"
        onClick={give}
        disabled={!valid}
        className="mt-8 min-h-14 w-full bg-orange-acts font-display text-xl font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#c94600] disabled:cursor-not-allowed disabled:opacity-50"
      >
        Give Now{valid ? ` — $${value}${monthly ? "/mo" : ""}` : ""}
      </button>

      {notice && (
        <p role="status" className="mt-4 border-l-4 border-blue-action bg-warm-light p-4 text-sm leading-relaxed">
          Online giving is not connected yet. To give today, contact ACTS at{" "}
          <a className="font-mono text-blue-action underline" href={site.contact.phoneHref}>
            {site.contact.phone}
          </a>{" "}
          or{" "}
          <a className="text-blue-action underline" href={`mailto:${site.contact.email}`}>
            {site.contact.email}
          </a>
          .
        </p>
      )}
    </div>
  );
}
