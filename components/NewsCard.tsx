import Link from "next/link";
import ImageSlot from "./ImageSlot";
import Placeholder from "./Placeholder";

type Props = {
  image: string | null;
  category: string | null;
  headline: string | null;
  excerpt: string | null;
  date: string | null;
  url: string | null;
};

export default function NewsCard({ image, category, headline, excerpt, date, url }: Props) {
  return (
    <article className="flex flex-col border border-warm-gray bg-white">
      <ImageSlot src={image} hint="News story image" className="aspect-[16/9]" />
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between gap-4">
          {category ? (
            <span className="bg-blue-action/10 px-2 py-1 font-mono text-xs font-bold uppercase tracking-wider text-blue-action">{category}</span>
          ) : (
            <span />
          )}
          <p className="font-mono text-xs text-navy-primary/60">{date ?? <Placeholder label="--" />}</p>
        </div>
        <h3 className="mt-4 text-2xl font-bold uppercase leading-tight text-navy-primary">{headline ?? <Placeholder label="DATA COMING SOON" />}</h3>
        <p className="mt-3 flex-1 leading-relaxed text-navy-primary/80">{excerpt ?? <Placeholder label="DATA COMING SOON" />}</p>
        {url && (
          <Link href={url} className="mt-6 font-display font-semibold uppercase tracking-wider text-blue-action hover:underline">
            Read More<span className="sr-only">: {headline}</span> →
          </Link>
        )}
      </div>
    </article>
  );
}
