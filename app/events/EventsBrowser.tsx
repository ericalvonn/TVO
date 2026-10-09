"use client";

import { useState } from "react";
import EventCard from "@/components/EventCard";
import FilterBar from "@/components/FilterBar";
import type { EventItem } from "@/lib/content";

export default function EventsBrowser({ categories, events }: { categories: string[]; events: EventItem[] }) {
  const [filter, setFilter] = useState<string | null>(null);
  const shown = filter ? events.filter((e) => e.type === filter) : events;

  return (
    <>
      <FilterBar label="Filter events" options={categories} value={filter} onChange={setFilter} />
      {shown.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {shown.map((e) => (
            <EventCard key={e.id} {...e} />
          ))}
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col justify-center border-2 border-dashed border-navy-primary/20 p-8">
            <p className="font-display text-2xl font-bold uppercase">No events posted yet</p>
            <p className="mt-2 text-navy-primary/70">
              {filter ? `There are no ${filter} events listed right now.` : "Check back soon for upcoming ACTS events."}
            </p>
          </div>
          <EventCard date={null} type={filter} title={null} location={null} description={null} registrationUrl={null} />
        </div>
      )}
    </>
  );
}
