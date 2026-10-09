/**
 * The single source of fallback text for any value ACTS has not yet supplied (spec §0).
 * Never hardcode filler copy elsewhere — render <Placeholder label="..."> instead.
 */
export type PlaceholderLabel =
  | "DATA COMING SOON"
  | "[INSERT VERIFIED IMPACT STATISTIC]"
  | "[INSERT MAP EMBED]"
  | "[INSERT PROGRAM REGISTRATION LINK]"
  | "--";

type Props = {
  label: PlaceholderLabel;
  /** Optional note for editors describing what belongs here (e.g. the intended photo). */
  hint?: string;
  /** "inline" sits within text; "block" fills its container (image/embed slots). */
  variant?: "inline" | "block";
  tone?: "light" | "dark";
  className?: string;
};

export default function Placeholder({ label, hint, variant = "inline", tone = "light", className = "" }: Props) {
  const toneClass =
    tone === "dark"
      ? "border-white/40 bg-white/5 text-white/70"
      : "border-navy-primary/30 bg-warm-gray/60 text-navy-primary/60";

  if (variant === "block") {
    return (
      <div
        data-placeholder
        className={`flex h-full w-full flex-col items-center justify-center gap-1 border-2 border-dashed p-4 text-center font-mono text-xs uppercase tracking-wider ${toneClass} ${className}`}
      >
        <span>{label}</span>
        {hint && <span className="normal-case tracking-normal opacity-80">{hint}</span>}
      </div>
    );
  }

  return (
    <span
      data-placeholder
      title={hint}
      className={`inline-block border border-dashed px-1.5 py-0.5 font-mono text-[0.8em] tracking-wide ${toneClass} ${className}`}
    >
      {label}
    </span>
  );
}
