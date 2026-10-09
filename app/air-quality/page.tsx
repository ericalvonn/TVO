import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import Icon from "@/components/Icon";
import Placeholder from "@/components/Placeholder";
import Section, { SectionHeading } from "@/components/Section";
import { airQuality } from "@/lib/content";

export const metadata: Metadata = { title: "Air Quality + Data Center" };

export default function AirQualityPage() {
  const d = airQuality.dashboard;
  const fields: { label: string; value: string | null; unit?: string; fallback: "--" | "DATA COMING SOON" }[] = [
    { label: "PM2.5", value: d.pm25, unit: "µg/m³", fallback: "--" },
    { label: "NO₂", value: d.no2, unit: "ppb", fallback: "--" },
    { label: "Monitoring Stations", value: d.stations, fallback: "--" },
    { label: "Community", value: d.community, fallback: "DATA COMING SOON" },
    { label: "Last Updated", value: d.lastUpdated, fallback: "--" },
  ];

  return (
    <>
      <Hero compact {...airQuality.hero} primaryCta={{ label: "HOW TO READ THE DATA", href: "/air-quality/explainer" }} />

      {/* Dashboard */}
      <Section tone="data" id="dashboard">
        <SectionHeading eyebrow="Live dashboard" title="Current Readings" dark />
        <dl className="grid gap-px bg-white/15 sm:grid-cols-2 lg:grid-cols-5">
          {fields.map((f) => (
            <div key={f.label} className="bg-navy-primary p-6">
              <dt className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-white/60">{f.label}</dt>
              <dd className="mt-3 font-mono text-4xl font-bold text-white">
                {f.value ?? <Placeholder label={f.fallback} tone="dark" className="text-2xl" />}
                {f.value && f.unit && <span className="ml-2 text-base text-white/60">{f.unit}</span>}
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      {/* Map + chart */}
      <Section tone="white">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-bold uppercase">Monitoring Map</h2>
            <div className="aspect-[4/3] bg-warm-light">
              {airQuality.mapEmbedSrc ? (
                <iframe src={airQuality.mapEmbedSrc} title="Air monitoring map" loading="lazy" className="h-full w-full border-0" allowFullScreen />
              ) : (
                <Placeholder variant="block" label="[INSERT MAP EMBED]" />
              )}
            </div>
          </div>
          <div>
            <h2 className="mb-4 text-2xl font-bold uppercase">Trends</h2>
            <div className="aspect-[4/3] bg-warm-light">
              {airQuality.chartEmbedSrc ? (
                <iframe src={airQuality.chartEmbedSrc} title="Air quality chart" loading="lazy" className="h-full w-full border-0" />
              ) : (
                <Placeholder variant="block" label="DATA COMING SOON" hint="Graph / chart slot" />
              )}
            </div>
          </div>
        </div>
      </Section>

      {/* Stations + explanation + summary */}
      <Section tone="light">
        <div className="grid gap-12 lg:grid-cols-3">
          <div>
            <h2 className="mb-4 text-2xl font-bold uppercase">Monitoring Stations</h2>
            {airQuality.stations.length === 0 ? (
              <Placeholder label="DATA COMING SOON" />
            ) : (
              <ul className="divide-y divide-warm-gray bg-white">
                {airQuality.stations.map((s) => (
                  <li key={s.name} className="flex justify-between gap-4 p-4 font-mono text-sm">
                    <span>{s.name}</span>
                    <span className="text-navy-primary/60">{s.community}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div>
            <h2 className="mb-4 text-2xl font-bold uppercase">What the Data Means</h2>
            <p className="leading-relaxed text-navy-primary/80">{airQuality.explanation}</p>
            <Link href="/air-quality/explainer" className="mt-4 inline-flex items-center gap-2 font-display font-semibold uppercase tracking-wider text-blue-action hover:underline">
              Read the explainer <Icon name="arrow" className="h-5 w-5" />
            </Link>
          </div>
          <div>
            <h2 className="mb-4 text-2xl font-bold uppercase">Community Summary</h2>
            {airQuality.communitySummary ? (
              <p className="leading-relaxed text-navy-primary/80">{airQuality.communitySummary}</p>
            ) : (
              <Placeholder label="DATA COMING SOON" />
            )}
          </div>
        </div>
      </Section>

      {/* Resources */}
      <Section tone="navy" id="resources">
        <SectionHeading eyebrow="Downloads" title="Data + Resources" dark />
        <ul className="grid gap-4 md:grid-cols-3">
          {airQuality.resources.map((r) => (
            <li key={r.title} className="flex items-center justify-between gap-4 border border-white/20 p-6">
              <span className="flex items-center gap-3">
                <Icon name="doc" className="h-6 w-6 text-orange-acts" />
                <span className="font-display text-lg uppercase">{r.title}</span>
              </span>
              {r.url ? (
                <a href={r.url} className="text-white hover:text-orange-acts" aria-label={`Download ${r.title}`}>
                  <Icon name="download" />
                </a>
              ) : (
                <Placeholder label="DATA COMING SOON" tone="dark" />
              )}
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
