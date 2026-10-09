import type { Metadata } from "next";
import Hero from "@/components/Hero";
import FAQAccordion from "@/components/FAQAccordion";
import Placeholder from "@/components/Placeholder";
import Section, { SectionHeading } from "@/components/Section";
import { airQuality } from "@/lib/content";

export const metadata: Metadata = { title: "Data Should Be Understandable" };

/** Simple diagrams (not dense scientific charts) — one per explainer block. */
function Diagram({ id }: { id: string }) {
  const common = { viewBox: "0 0 120 80", className: "h-28 w-full", "aria-hidden": true } as const;
  if (id === "measure")
    return (
      <svg {...common}>
        <rect x="45" y="20" width="30" height="50" fill="none" stroke="#0B1F4D" strokeWidth="2" />
        <circle cx="60" cy="35" r="6" fill="#0056E9" />
        {[[20, 20], [28, 40], [15, 55], [95, 25], [100, 50], [90, 62]].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={i % 2 ? 2 : 3} fill="#EE5300" />
        ))}
      </svg>
    );
  if (id === "matters")
    return (
      <svg {...common}>
        {[0, 1, 2].map((i) => (
          <g key={i}>
            <circle cx={25 + i * 35} cy="40" r="14" fill="none" stroke={i === 1 ? "#EE5300" : "#0B1F4D"} strokeWidth="2" />
            {i < 2 && <path d={`M${41 + i * 35} 40h6`} stroke="#0056E9" strokeWidth="2" />}
          </g>
        ))}
      </svg>
    );
  return (
    <svg {...common}>
      <path d="M20 65h80M30 65V45M50 65V35M70 65V25M90 65V15" stroke="#0B1F4D" strokeWidth="6" />
      <path d="M85 15l5-8 5 8" fill="none" stroke="#EE5300" strokeWidth="2" />
    </svg>
  );
}

export default function ExplainerPage() {
  const e = airQuality.explainer;
  return (
    <>
      <Hero compact eyebrow="Air Quality + Data" headline={e.heading} body={e.intro} primaryCta={{ label: "VIEW THE DASHBOARD", href: "/air-quality" }} />

      <Section tone="light">
        <ol className="grid gap-6 md:grid-cols-3">
          {e.blocks.map((b, i) => (
            <li key={b.id} id={b.id} className="flex flex-col bg-white p-6 shadow-sm">
              <Diagram id={b.id} />
              <p className="mt-4 font-mono text-xs font-bold tracking-[0.2em] text-orange-acts">{String(i + 1).padStart(2, "0")}</p>
              <h2 className="mt-1 text-3xl font-bold uppercase">{b.title}</h2>
              <p className="mt-3 leading-relaxed text-navy-primary/80">{b.body ?? <Placeholder label="DATA COMING SOON" />}</p>
              {b.items.length > 0 && (
                <ul className="mt-4 space-y-2">
                  {b.items.map((item) => (
                    <li key={item} className="border-l-4 border-blue-action pl-3 font-mono text-sm">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="white">
        <SectionHeading eyebrow="Plain language" title="Common Questions" />
        <div className="max-w-3xl">
          <FAQAccordion items={e.faq} />
        </div>
      </Section>
    </>
  );
}
