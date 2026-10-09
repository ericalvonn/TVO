import Hero from "@/components/Hero";
import ProcessFlow from "@/components/ProcessFlow";
import ProgramCard from "@/components/ProgramCard";
import StatBlock from "@/components/StatBlock";
import MapCard from "@/components/MapCard";
import DonationWidget from "@/components/DonationWidget";
import Section, { SectionHeading } from "@/components/Section";
import { home } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <Hero {...home.hero} />

      {/* white */}
      <Section tone="white">
        <SectionHeading eyebrow="How we work" title={home.processFlow.heading} />
        <ProcessFlow steps={home.processFlow.steps} />
      </Section>

      {/* light / photo-heavy */}
      <Section tone="light">
        <SectionHeading eyebrow="What we do" title={home.areas.heading} />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {home.areas.items.map((item) => (
            <ProgramCard key={item.title} {...item} />
          ))}
        </div>
      </Section>

      {/* data-styled */}
      <Section tone="data">
        <SectionHeading eyebrow="By the numbers" title={home.impact.heading} dark />
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {home.impact.stats.map((s) => (
            <StatBlock key={s.label} {...s} dark />
          ))}
        </div>
      </Section>

      {/* white */}
      <Section tone="white" id="maps">
        <SectionHeading eyebrow="Maps" title={home.maps.heading} />
        <div className="grid gap-6 lg:grid-cols-3">
          {home.maps.items.map((m) => (
            <MapCard key={m.number} {...m} />
          ))}
        </div>
      </Section>

      {/* navy CTA */}
      <Section tone="navy" id="donate">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 font-mono text-xs font-bold uppercase tracking-[0.2em] text-orange-acts">Support ACTS</p>
            <h2 className="text-4xl font-bold uppercase leading-tight sm:text-5xl md:text-6xl">{home.donation.headline}</h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">{home.donation.body}</p>
          </div>
          <DonationWidget />
        </div>
      </Section>
    </>
  );
}
