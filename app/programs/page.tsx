import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ProgramCard from "@/components/ProgramCard";
import Section from "@/components/Section";
import { programs } from "@/lib/content";

export const metadata: Metadata = { title: "Programs" };

export default function ProgramsPage() {
  return (
    <>
      <Hero
        compact
        eyebrow="Programs"
        headline="Learn. Grow. Lead."
        body={programs.hub.intro}
        primaryCta={{ label: "GET INVOLVED", href: "/contact" }}
      />
      <Section tone="light">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {programs.hub.items.map((item) => (
            <ProgramCard key={item.href} {...item} />
          ))}
        </div>
      </Section>
    </>
  );
}
