import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ImageSlot from "@/components/ImageSlot";
import PillarGrid from "@/components/PillarGrid";
import Section, { SectionHeading } from "@/components/Section";
import { about } from "@/lib/content";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <Hero compact eyebrow="About ACTS" headline={about.whoWeAre.heading} body={about.whoWeAre.body} />

      <Section tone="light">
        <SectionHeading eyebrow="Our approach" title={about.whatWeDo.heading} intro={about.whatWeDo.body} />
        <PillarGrid items={about.whatWeDo.pillars} />
      </Section>

      <Section tone="white">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <ImageSlot src={about.whyWeExist.image} hint={about.whyWeExist.imageHint} className="aspect-[4/3]" />
          <div>
            <p className="mb-3 font-mono text-xs font-bold uppercase tracking-[0.2em] text-orange-acts">Why ACTS exists</p>
            <h2 className="text-3xl font-bold uppercase leading-tight sm:text-4xl md:text-5xl">{about.whyWeExist.heading}</h2>
            <p className="mt-6 text-lg leading-relaxed text-navy-primary/80">{about.whyWeExist.body}</p>
          </div>
        </div>
      </Section>

      <Section tone="navy">
        <SectionHeading eyebrow="What sets us apart" title={about.differentiators.heading} dark />
        <PillarGrid items={about.differentiators.items} columns={4} dark />
      </Section>

      <Section tone="light">
        <SectionHeading eyebrow="Capabilities" title={about.competencies.heading} />
        <PillarGrid items={about.competencies.items} columns={5} />
      </Section>
    </>
  );
}
