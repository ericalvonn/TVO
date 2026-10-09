import Link from "next/link";

/** Text wordmark until the final ACTS logo file is supplied (drop it in /public and swap this out). */
export default function Logo({ dark = true }: { dark?: boolean }) {
  return (
    <Link href="/" className="group flex shrink-0 items-center gap-2" aria-label="ACTS home">
      <span className="flex h-9 w-9 items-center justify-center bg-orange-acts font-display text-lg font-bold text-white">A</span>
      <span className="leading-none">
        <span className={`block font-display text-2xl font-bold tracking-wider ${dark ? "text-white" : "text-navy-primary"}`}>ACTS</span>
        <span className={`hidden font-mono text-[0.6rem] uppercase tracking-widest sm:block xl:hidden 2xl:block ${dark ? "text-white/60" : "text-navy-primary/60"}`}>
          Achieving Community Tasks Successfully
        </span>
      </span>
    </Link>
  );
}
