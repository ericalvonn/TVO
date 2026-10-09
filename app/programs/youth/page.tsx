import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Button from "@/components/Button";
import ImageSlot from "@/components/ImageSlot";
import Placeholder from "@/components/Placeholder";
import Section, { SectionHeading } from "@/components/Section";
import { programs } from "@/lib/content";

export const metadata: Metadata = { title: "4-H, STEAM + Robotics" };

export default function YouthProgramPage() {
  const { fourH, steam } = programs.youth;
  const fields: { label: string; value: string | null }[] = [
    { label: "Program Description", value: fourH.description },
    { label: "Age Range", value: fourH.ageRange },
    { label: "Activities", value: fourH.activities },
    { label: "Schedule", value: fourH.schedule },
    { label: "Outcomes", value: fourH.outcomes },
  ];

  return (
    <>
      <Hero
        compact
        eyebrow="Youth Programs"
        headline="4-H, STEAM + Robotics"
        body="Real-world learning that builds creative problem-solvers, innovators, critical thinkers, and future leaders."
      />

      <Section tone="light" id="four-h">
        <SectionHeading eyebrow="Youth development" title={fourH.heading} />
        <dl className="grid gap-px bg-warm-gray md:grid-cols-2">
          {fields.map((f) => (
            <div key={f.label} className="bg-white p-6">
              <dt className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-navy-primary/60">{f.label}</dt>
              <dd className="mt-2 text-lg">{f.value ?? <Placeholder label="DATA COMING SOON" />}</dd>
            </div>
          ))}
          <div className="bg-white p-6">
            <dt className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-navy-primary/60">Registration</dt>
            <dd className="mt-2">
              {fourH.registrationUrl ? (
                <Button href={fourH.registrationUrl}>Register for 4-H</Button>
              ) : (
                <Placeholder label="[INSERT PROGRAM REGISTRATION LINK]" />
              )}
            </dd>
          </div>
        </dl>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {(fourH.photos.length ? fourH.photos : [null, null, null]).map((src, i) => (
            <ImageSlot key={i} src={src} hint="4-H activity" />
          ))}
        </div>
      </Section>

      <Section tone="navy" id="steam">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Build. Code. Create." title={steam.heading} intro={steam.body} dark />
            <ul className="grid grid-cols-2 gap-3">
              {steam.outcomes.map((o) => (
                <li key={o} className="border-2 border-orange-acts px-4 py-3 font-display text-lg font-semibold uppercase">
                  {o}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {steam.images.map((img, i) => (
              <ImageSlot key={img.hint} src={img.src} hint={img.hint} tone="dark" className={i === 0 ? "col-span-2 aspect-[16/9]" : "aspect-square"} />
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
