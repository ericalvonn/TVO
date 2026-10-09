import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import ImageSlot from "@/components/ImageSlot";
import Placeholder from "@/components/Placeholder";
import StatBlock from "@/components/StatBlock";
import Section, { type Tone } from "@/components/Section";
import Icon from "@/components/Icon";
import { projects, type Project } from "@/lib/content";

export const metadata: Metadata = { title: "Projects" };

// Alternate treatments so no two adjacent initiatives look the same.
const tones: Tone[] = ["light", "data", "white", "navy", "light", "white"];

function Initiative({ p, index, tone }: { p: Project; index: number; tone: Tone }) {
  const dark = tone === "navy" || tone === "data";
  const header = (
    <>
      <p className="font-mono text-xs font-bold tracking-[0.2em] text-orange-acts">INITIATIVE {String(index + 1).padStart(2, "0")}</p>
      <h2 className="mt-2 text-4xl font-bold uppercase leading-tight md:text-5xl">{p.title}</h2>
      <p className={`mt-4 text-lg leading-relaxed ${dark ? "text-white/80" : "text-navy-primary/80"}`}>{p.body}</p>
      {p.link && (
        <Link href={p.link.href} className={`mt-6 inline-flex items-center gap-2 font-display font-semibold uppercase tracking-wider hover:underline ${dark ? "text-white" : "text-blue-action"}`}>
          {p.link.label} <Icon name="arrow" className="h-5 w-5" />
        </Link>
      )}
    </>
  );

  // Cooler Play Spaces: before / intervention / impact panels.
  if (p.panels) {
    return (
      <Section tone={tone} id={p.id}>
        <div className="max-w-3xl">{header}</div>
        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {p.panels.map((panel) => (
            <li key={panel.label} className={dark ? "bg-white/5" : "bg-white shadow-sm"}>
              <ImageSlot src={panel.image} hint={panel.imageHint} tone={dark ? "dark" : "light"} />
              <div className="border-t-4 border-orange-acts p-6">
                <p className="font-mono text-sm font-bold tracking-[0.2em]">{panel.label}</p>
                <p className={`mt-2 ${dark ? "text-white/80" : "text-navy-primary/80"}`}>
                  {panel.body ?? <Placeholder label="DATA COMING SOON" tone={dark ? "dark" : "light"} />}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Section>
    );
  }

  return (
    <Section tone={tone} id={p.id}>
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className={index % 2 ? "lg:order-2" : ""}>{header}</div>
        {p.stat ? (
          <div className="flex flex-col gap-8">
            <StatBlock value={p.stat.value} unit={p.stat.label} label="Pollinator garden · Holland Middle School" size="large" dark={dark} />
            <ImageSlot src={p.image} hint={p.imageHint} tone={dark ? "dark" : "light"} className="aspect-[16/9]" />
          </div>
        ) : (
          <ImageSlot src={p.image} hint={p.imageHint} tone={dark ? "dark" : "light"} />
        )}
      </div>
    </Section>
  );
}

export default function ProjectsPage() {
  return (
    <>
      <Hero compact eyebrow="Projects" headline={projects.heading} body={projects.intro} />
      <nav aria-label="Initiatives" className="border-b border-warm-gray bg-white">
        <ul className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 py-3 sm:px-6 lg:px-8">
          {projects.items.map((p) => (
            <li key={p.id} className="shrink-0">
              <a href={`#${p.id}`} className="block px-3 py-2 font-mono text-xs font-bold uppercase tracking-wider text-navy-primary/70 hover:text-blue-action">
                {p.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {projects.items.map((p, i) => (
        <Initiative key={p.id} p={p} index={i} tone={tones[i % tones.length]} />
      ))}
    </>
  );
}
