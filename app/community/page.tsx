import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import MapCard from "@/components/MapCard";
import ProgramCard from "@/components/ProgramCard";
import Placeholder from "@/components/Placeholder";
import Section, { SectionHeading } from "@/components/Section";
import { home, programs, site } from "@/lib/content";

export const metadata: Metadata = { title: "Community" };

export default function CommunityPage() {
  return (
    <>
      <Hero
        compact
        eyebrow="Community"
        headline="Explore Our Community"
        body={`ACTS focuses its efforts on the near-port Eastside Houston communities of ${site.communities.slice(0, -1).join(", ")}, and ${site.communities.at(-1)}.`}
      />

      <Section tone="white" id="maps">
        <SectionHeading eyebrow="Maps" title="Community Maps" />
        <div className="grid gap-6 lg:grid-cols-3">
          {home.maps.items.map((m) => (
            <MapCard key={m.number} {...m} />
          ))}
        </div>
      </Section>

      <Section tone="light" id="resources">
        <SectionHeading eyebrow="Resources" title="Community Resources" intro={programs.community.resources.intro} />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {programs.community.resources.categories.map((c) => (
            <li key={c.title} className="bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold uppercase">{c.title}</h3>
              <p className="mt-3 text-navy-primary/80">
                {c.entries.length ? (
                  <span className="font-mono">{c.entries.length} listed</span>
                ) : (
                  <Placeholder label="DATA COMING SOON" />
                )}
              </p>
            </li>
          ))}
        </ul>
        <p className="mt-8">
          <Link href="/programs/community#food-resources" className="font-display font-semibold uppercase tracking-wider text-blue-action hover:underline">
            View the full resource directory →
          </Link>
        </p>
      </Section>

      <Section tone="navy">
        <SectionHeading eyebrow="Get involved" title="Programs for Residents" dark />
        <div className="grid gap-6 md:grid-cols-3">
          {programs.hub.items.map((item) => (
            <ProgramCard key={item.href} {...item} />
          ))}
        </div>
      </Section>
    </>
  );
}
