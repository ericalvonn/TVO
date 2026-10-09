import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import Button from "@/components/Button";
import FunderCard from "@/components/FunderCard";
import Icon from "@/components/Icon";
import Placeholder from "@/components/Placeholder";
import StatBlock from "@/components/StatBlock";
import Section, { SectionHeading } from "@/components/Section";
import { funders, site } from "@/lib/content";

export const metadata: Metadata = { title: "For Funders" };

export default function FundersPage() {
  return (
    <>
      <Hero
        compact
        eyebrow="For Funders"
        headline="Invest in Community Resilience"
        body="Resources for foundations, corporate partners, and public agencies considering support for ACTS."
        primaryCta={{ label: "CONTACT THE ACTS TEAM", href: "/contact?subject=Funding%20inquiry" }}
        secondaryCta={{ label: "DOWNLOAD CENTER", href: "#downloads" }}
      />

      {/* 1. Organization Overview + 2. Capability Statement */}
      <Section tone="white" id="overview">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <SectionHeading eyebrow="01 · Overview" title={funders.overview.heading} />
            <dl className="divide-y divide-warm-gray border-y border-warm-gray">
              {[
                { k: "Organization", v: `${site.name} (${site.shortName})` },
                { k: "Mission", v: funders.overview.mission },
                { k: "Communities Served", v: `${site.communities.join(", ")} — Eastside Houston` },
                { k: "Focus Areas", v: funders.overview.focusAreas.join(" · ") },
                { k: "Contact", v: `${site.contact.phone} · ${site.contact.email}` },
              ].map((row) => (
                <div key={row.k} className="grid gap-2 py-4 sm:grid-cols-[12rem_1fr]">
                  <dt className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-navy-primary/60">{row.k}</dt>
                  <dd className="leading-relaxed">{row.v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <aside id="capability-statement" className="flex flex-col justify-between bg-navy-primary p-8 text-white">
            <div>
              <p className="font-mono text-xs font-bold tracking-[0.2em] text-orange-acts">02 · CAPABILITY STATEMENT</p>
              <Icon name="doc" className="mt-6 h-14 w-14 text-white/80" />
              <h2 className="mt-4 text-3xl font-bold uppercase leading-tight">ACTS Capability Statement</h2>
              <p className="mt-3 text-white/80">Our qualifications, core competencies, and program experience in one document.</p>
            </div>
            <div className="mt-8">
              {funders.capabilityStatementUrl ? (
                <Button href={funders.capabilityStatementUrl}>View / Download</Button>
              ) : (
                <Placeholder label="DATA COMING SOON" tone="dark" />
              )}
            </div>
          </aside>
        </div>
      </Section>

      {/* 3. Programs + Initiatives */}
      <Section tone="light" id="programs">
        <SectionHeading eyebrow="03 · Programs" title="Programs + Initiatives" />
        <ul className="grid gap-px bg-warm-gray sm:grid-cols-2 lg:grid-cols-5">
          {funders.programs.map((p) => (
            <li key={p.title} className="bg-white">
              <Link href={p.href} className="group flex h-full items-center justify-between gap-3 p-5 font-display text-lg font-semibold uppercase leading-tight hover:text-blue-action">
                {p.title}
                <Icon name="arrow" className="h-5 w-5 shrink-0 text-orange-acts transition-transform group-hover:translate-x-1" />
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      {/* 4. Community Impact */}
      <Section tone="data" id="impact">
        <SectionHeading eyebrow="04 · Impact" title="Community Impact" dark />
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {funders.impact.map((s) => (
            <StatBlock key={s.label} {...s} dark />
          ))}
        </div>
      </Section>

      {/* 5. Community Need */}
      <Section tone="white" id="need">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="05 · Need" title={funders.need.heading} />
            <div className="space-y-4 text-lg leading-relaxed text-navy-primary/80">
              {funders.need.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
          <ul className="grid content-start gap-3 sm:grid-cols-2">
            {funders.need.themes.map((t) => (
              <li key={t} className="border-l-4 border-orange-acts bg-warm-light px-4 py-4 font-display text-lg font-semibold uppercase">
                {t}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* 6. Funding Opportunities */}
      <Section tone="light" id="opportunities">
        <SectionHeading eyebrow="06 · Opportunities" title="Funding Opportunities" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {funders.opportunities.map((o) => (
            <FunderCard key={o.title} {...o} />
          ))}
        </div>
      </Section>

      {/* 7. Partnership Opportunities */}
      <Section tone="navy" id="partnerships">
        <SectionHeading eyebrow="07 · Partnerships" title="Partnership Opportunities" dark />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {funders.partnerships.map((p) => (
            <li key={p} className="flex items-center gap-3 border border-white/20 p-5 font-display text-lg uppercase">
              <span aria-hidden className="h-2 w-2 shrink-0 bg-orange-acts" />
              {p}
            </li>
          ))}
        </ul>
      </Section>

      {/* 8. Download Center */}
      <Section tone="white" id="downloads">
        <SectionHeading eyebrow="08 · Documents" title="Download Center" />
        <ul className="divide-y divide-warm-gray border-y border-warm-gray">
          {funders.documents.map((d) => (
            <li key={d.title} className="flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:justify-between">
              <span className="flex items-center gap-3 font-display text-xl uppercase">
                <Icon name="doc" className="h-6 w-6 text-blue-action" />
                {d.title}
              </span>
              {d.url ? (
                <a href={d.url} className="inline-flex items-center gap-2 font-mono text-sm font-bold uppercase text-blue-action hover:underline">
                  <Icon name="download" className="h-5 w-5" /> Download
                </a>
              ) : (
                <Placeholder label="DATA COMING SOON" />
              )}
            </li>
          ))}
        </ul>
      </Section>

      {/* 9. Contact CTA band */}
      <Section tone="orange" id="contact">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div>
            <p className="font-mono text-xs font-bold tracking-[0.2em] text-white/80">09 · CONTACT THE ACTS TEAM</p>
            <h2 className="mt-2 text-4xl font-bold uppercase leading-tight md:text-5xl">LET&apos;S BUILD A MORE RESILIENT COMMUNITY.</h2>
            <p className="mt-3 font-mono text-white/90">
              {site.contact.phone} · {site.contact.email}
            </p>
          </div>
          <Button href="/contact?subject=Funding%20inquiry" variant="outline-light" className="shrink-0">
            Contact Us
          </Button>
        </div>
      </Section>
    </>
  );
}
