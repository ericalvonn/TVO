type Props = { steps: string[]; dark?: boolean };

/** Step sequence with arrows: horizontal on desktop, vertical on mobile. */
export default function ProcessFlow({ steps, dark = false }: Props) {
  return (
    <ol className="flex flex-col items-stretch gap-2 md:flex-row md:items-center md:gap-0">
      {steps.map((step, i) => (
        <li key={step} className="flex flex-col items-center md:flex-1 md:flex-row">
          <div
            className={`flex w-full flex-col items-center justify-center border-2 px-4 py-6 text-center ${
              i === steps.length - 1
                ? "border-orange-acts bg-orange-acts text-white"
                : dark
                  ? "border-white/30 text-white"
                  : "border-navy-primary text-navy-primary"
            }`}
          >
            <span className={`font-mono text-xs ${i === steps.length - 1 ? "text-white/80" : dark ? "text-white/60" : "text-blue-action"}`}>
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="mt-1 font-display text-xl font-bold tracking-wider lg:text-2xl">{step}</span>
          </div>
          {i < steps.length - 1 && (
            <svg
              viewBox="0 0 24 24"
              aria-hidden
              className="h-8 w-8 shrink-0 rotate-90 text-orange-acts md:mx-1 md:rotate-0"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path d="M5 12h14m-6-6 6 6-6 6" />
            </svg>
          )}
        </li>
      ))}
    </ol>
  );
}
