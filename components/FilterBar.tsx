"use client";

type Props = {
  label: string;
  options: string[];
  value: string | null;
  onChange: (value: string | null) => void;
};

/** Category filter pills used on Events and News. */
export default function FilterBar({ label, options, value, onChange }: Props) {
  const pill = (active: boolean) =>
    `min-h-11 px-4 font-mono text-xs font-bold uppercase tracking-wider transition-colors ${
      active ? "bg-navy-primary text-white" : "border border-navy-primary/20 bg-white text-navy-primary hover:border-blue-action hover:text-blue-action"
    }`;
  return (
    <div role="group" aria-label={label} className="mb-10 flex flex-wrap gap-2">
      <button type="button" aria-pressed={value === null} className={pill(value === null)} onClick={() => onChange(null)}>
        All
      </button>
      {options.map((o) => (
        <button key={o} type="button" aria-pressed={value === o} className={pill(value === o)} onClick={() => onChange(o)}>
          {o}
        </button>
      ))}
    </div>
  );
}
