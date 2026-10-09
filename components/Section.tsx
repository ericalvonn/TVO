/**
 * Section wrapper enforcing the alternating background treatments (spec §1):
 * navy / light / gray / data. Pages pick tones so no two adjacent sections match.
 */
export type Tone = "navy" | "light" | "white" | "data" | "orange";

const tones: Record<Tone, string> = {
  navy: "bg-navy-primary text-white",
  data: "bg-navy-secondary text-white data-grid",
  light: "bg-warm-light text-navy-primary",
  white: "bg-white text-navy-primary",
  orange: "bg-orange-acts text-white",
};

type Props = {
  tone?: Tone;
  id?: string;
  className?: string;
  children: React.ReactNode;
};

export default function Section({ tone = "white", id, className = "", children }: Props) {
  return (
    <section id={id} className={`${tones[tone]} ${className}`}>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">{children}</div>
    </section>
  );
}

export const isDark = (tone: Tone) => tone === "navy" || tone === "data" || tone === "orange";

type HeadingProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
  dark?: boolean;
  center?: boolean;
  as?: "h1" | "h2";
};

/** Section heading: orange mono eyebrow marker + condensed display heading. */
export function SectionHeading({ eyebrow, title, intro, dark = false, center = false, as: Tag = "h2" }: HeadingProps) {
  return (
    <div className={`mb-10 max-w-3xl md:mb-14 ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p className={`mb-3 flex items-center gap-3 font-mono text-xs font-bold uppercase tracking-[0.2em] text-orange-acts ${center ? "justify-center" : ""}`}>
          <span aria-hidden className="inline-block h-0.5 w-8 bg-orange-acts" />
          {eyebrow}
        </p>
      )}
      <Tag className={`text-3xl font-bold uppercase leading-tight sm:text-4xl md:text-5xl ${dark ? "text-white" : "text-navy-primary"}`}>
        {title}
      </Tag>
      {intro && <p className={`mt-4 text-lg leading-relaxed ${dark ? "text-white/80" : "text-navy-primary/80"}`}>{intro}</p>}
    </div>
  );
}
