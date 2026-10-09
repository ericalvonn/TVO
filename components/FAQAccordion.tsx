type Props = { items: { q: string; a: string }[] };

/** Expandable Q&A built on native <details> — accessible and works without JavaScript. */
export default function FAQAccordion({ items }: Props) {
  return (
    <div className="divide-y divide-warm-gray border-y border-warm-gray">
      {items.map((item) => (
        <details key={item.q} className="group">
          <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 font-display text-xl font-semibold uppercase tracking-wide text-navy-primary [&::-webkit-details-marker]:hidden">
            {item.q}
            <span aria-hidden className="font-mono text-2xl text-orange-acts transition-transform group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="pb-6 leading-relaxed text-navy-primary/80">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
