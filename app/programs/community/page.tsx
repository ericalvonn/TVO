import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Button from "@/components/Button";
import ImageSlot from "@/components/ImageSlot";
import Placeholder from "@/components/Placeholder";
import Section, { SectionHeading } from "@/components/Section";
import { programs } from "@/lib/content";

export const metadata: Metadata = { title: "Community Garden + Food Resources" };

export default function CommunityProgramPage() {
  const { garden, classes, resources } = programs.community;
  return (
    <>
      <Hero compact eyebrow="Programs" headline="Community Garden + Food Resources" body={garden.body} />

      <Section tone="white" id="garden">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Grow together" title={garden.heading} />
            <ul className="grid gap-3 sm:grid-cols-2">
              {garden.focus.map((f) => (
                <li key={f} className="border-l-4 border-orange-acts bg-warm-light px-4 py-3 font-display text-lg font-semibold uppercase">
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <ImageSlot src={garden.image} hint={garden.imageHint} />
        </div>

        <aside className="mt-16 grid gap-6 bg-navy-primary p-8 text-white md:grid-cols-[1fr_auto] md:items-center md:p-12">
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-orange-acts">Callout</p>
            <h3 className="mt-2 text-3xl font-bold uppercase">{classes.heading}</h3>
            <p className="mt-3 max-w-2xl text-lg text-white/80">{classes.body}</p>
          </div>
          {classes.registrationUrl ? (
            <Button href={classes.registrationUrl}>Register</Button>
          ) : (
            <Placeholder label="[INSERT PROGRAM REGISTRATION LINK]" tone="dark" />
          )}
        </aside>
      </Section>

      <Section tone="light" id="food-resources">
        <SectionHeading eyebrow="Resource directory" title={resources.heading} intro={resources.intro} />
        <div className="grid gap-6 md:grid-cols-2">
          {resources.categories.map((cat) => (
            <div key={cat.title} className="bg-white p-6 shadow-sm">
              <h3 className="border-b-2 border-warm-gray pb-3 text-2xl font-bold uppercase">{cat.title}</h3>
              {cat.entries.length === 0 ? (
                <div className="pt-4">
                  <Placeholder label="DATA COMING SOON" />
                </div>
              ) : (
                <ul className="divide-y divide-warm-gray">
                  {cat.entries.map((e) => (
                    <li key={e.name} className="py-4">
                      <p className="font-semibold">
                        {e.url ? (
                          <a href={e.url} target="_blank" rel="noopener noreferrer" className="text-blue-action hover:underline">
                            {e.name}
                          </a>
                        ) : (
                          e.name
                        )}
                      </p>
                      {e.description && <p className="mt-1 text-navy-primary/80">{e.description}</p>}
                      {(e.phone || e.address) && (
                        <p className="mt-1 font-mono text-sm text-navy-primary/70">{[e.phone, e.address].filter(Boolean).join(" · ")}</p>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
