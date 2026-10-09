import Placeholder from "./Placeholder";

type Props = {
  label: string;
  value: string | null;
  unit?: string | null;
  dark?: boolean;
  /** "large" for feature stats like 1.3 ACRES. */
  size?: "default" | "large";
};

/** Big mono-font number + label. Unverified (null) values render a Placeholder — never a guess. */
export default function StatBlock({ label, value, unit, dark = false, size = "default" }: Props) {
  return (
    <div className={`border-l-4 border-orange-acts py-2 pl-5 ${dark ? "text-white" : "text-navy-primary"}`}>
      {value === null ? (
        <div className="min-h-[3.5rem] py-2">
          <Placeholder label="[INSERT VERIFIED IMPACT STATISTIC]" tone={dark ? "dark" : "light"} />
        </div>
      ) : (
        <p className={`font-mono font-bold leading-none ${size === "large" ? "text-7xl md:text-8xl" : "text-5xl md:text-6xl"}`}>
          {value}
          {unit && <span className="ml-2 text-2xl md:text-3xl">{unit}</span>}
        </p>
      )}
      <p className={`mt-3 font-mono text-sm font-bold uppercase tracking-[0.15em] ${dark ? "text-white/75" : "text-navy-primary/70"}`}>
        {label}
      </p>
    </div>
  );
}
