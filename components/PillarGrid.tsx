import Icon from "./Icon";
import type { Pillar } from "@/lib/content";

type Props = { items: Pillar[]; dark?: boolean; columns?: 3 | 4 | 5 };

const cols = {
  3: "md:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
  5: "sm:grid-cols-2 lg:grid-cols-5",
};

/** Icon + label + description grid (Education/Engagement/Action, differentiators, competencies). */
export default function PillarGrid({ items, dark = false, columns = 3 }: Props) {
  return (
    <ul className={`grid gap-6 ${cols[columns]}`}>
      {items.map((item) => (
        <li
          key={item.label}
          className={`flex flex-col border-t-4 border-orange-acts p-6 ${dark ? "bg-white/5 text-white" : "bg-white text-navy-primary shadow-sm"}`}
        >
          <span className={`mb-4 inline-flex h-12 w-12 items-center justify-center ${dark ? "bg-blue-action text-white" : "bg-blue-action/10 text-blue-action"}`}>
            <Icon name={item.icon} className="h-7 w-7" />
          </span>
          <h3 className="text-xl font-bold uppercase leading-tight">{item.label}</h3>
          {item.description && <p className={`mt-2 leading-relaxed ${dark ? "text-white/80" : "text-navy-primary/80"}`}>{item.description}</p>}
        </li>
      ))}
    </ul>
  );
}
