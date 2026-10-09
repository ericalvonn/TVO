import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import EventsBrowser from "./EventsBrowser";
import { events } from "@/lib/content";

export const metadata: Metadata = { title: "Events" };

export default function EventsPage() {
  return (
    <>
      <Hero compact eyebrow="Events" headline="Upcoming Events" body="Workshops, classes, and community gatherings from ACTS." />
      <Section tone="light">
        <EventsBrowser categories={events.categories} events={events.events} />
      </Section>
    </>
  );
}
