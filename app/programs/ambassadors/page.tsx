import type { Metadata } from "next";
import Hero from "@/components/Hero";
import PillarGrid from "@/components/PillarGrid";
import ProcessFlow from "@/components/ProcessFlow";
import Section, { SectionHeading } from "@/components/Section";
import { programs } from "@/lib/content";

export const metadata: Metadata = { title: "Neighborhood Environmental Ambassadors" };

export default function AmbassadorsPage() {
  const a = programs.ambassadors;
  return (
    <>
      <Hero
        compact
        eyebrow={a.subhead}
        headline={a.heading}
        body={a.body}
        primaryCta={{ label: "BECOME AN AMBASSADOR", href: "/contact?subject=Neighborhood%20Environmental%20Ambassadors" }}
      />

      <Section tone="light">
        <SectionHeading eyebrow="What ambassadors do" title="Program Activities" />
        <PillarGrid items={a.activities} columns={4} />
      </Section>

      <Section tone="white">
        <SectionHeading eyebrow="The pathway" title="From learning to advocacy" />
        <ProcessFlow steps={a.flow} />
      </Section>

      <section className="bg-navy-primary text-white">
        <div className="data-grid">
          <p className="mx-auto max-w-6xl px-4 py-20 text-center font-display text-4xl font-bold uppercase leading-tight sm:px-6 md:py-28 md:text-6xl lg:px-8">
            {a.closing.split(". ").map((line, i, arr) => (
              <span key={i} className={i === arr.length - 1 ? "block text-orange-acts" : "block"}>
                {line}
                {i < arr.length - 1 ? "." : ""}
              </span>
            ))}
          </p>
        </div>
      </section>
    </>
  );
}
