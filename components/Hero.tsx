import Button from "./Button";
import ImageSlot from "./ImageSlot";
import type { Link } from "@/lib/content";

type Props = {
  eyebrow?: string;
  headline: string;
  subhead?: string;
  body?: string;
  primaryCta?: Link;
  secondaryCta?: Link;
  image?: string | null;
  imageHint?: string;
  /** Interior pages use a compact hero without the image column. */
  compact?: boolean;
};

export default function Hero({ eyebrow, headline, subhead, body, primaryCta, secondaryCta, image, imageHint, compact = false }: Props) {
  return (
    <section className="relative overflow-hidden bg-navy-primary text-white">
      {/* Community photo as background (when supplied) under a navy wash + subtle data grid. */}
      {image && (
        <div aria-hidden className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url(${image})` }} />
      )}
      <div aria-hidden className="data-grid absolute inset-0" />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-navy-primary via-navy-primary/90 to-navy-primary/40" />

      <div
        className={`relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:px-8 ${
          compact ? "py-16 md:py-20" : "py-20 md:py-28 lg:grid-cols-[1.2fr_1fr]"
        }`}
      >
        <div className="max-w-3xl">
          {eyebrow && (
            <p className="mb-4 flex items-center gap-3 font-mono text-xs font-bold uppercase tracking-[0.25em] text-orange-acts sm:text-sm">
              <span aria-hidden className="inline-block h-0.5 w-10 bg-orange-acts" />
              {eyebrow}
            </p>
          )}
          <h1
            className={`font-bold uppercase leading-[0.95] ${
              compact ? "text-4xl sm:text-5xl md:text-6xl" : "text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
            }`}
          >
            {headline}
          </h1>
          {subhead && <p className="mt-6 font-mono text-sm uppercase tracking-wider text-white/80 sm:text-base">{subhead}</p>}
          {body && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85 md:text-xl">{body}</p>}
          {(primaryCta || secondaryCta) && (
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              {primaryCta && <Button href={primaryCta.href}>{primaryCta.label}</Button>}
              {secondaryCta && (
                <Button href={secondaryCta.href} variant="outline-light">
                  {secondaryCta.label}
                </Button>
              )}
            </div>
          )}
        </div>

        {!compact && !image && (
          <ImageSlot hint={imageHint} tone="dark" className="hidden aspect-[4/5] lg:block" />
        )}
      </div>
    </section>
  );
}
