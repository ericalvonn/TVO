import Button from "./Button";
import Placeholder from "./Placeholder";

type Props = {
  number?: string;
  title: string;
  description: string;
  /** iframe src for the embedded map. Leave null until ACTS supplies a URL. */
  embedSrc?: string | null;
  /** Link to the full-screen map. */
  href?: string | null;
  className?: string;
};

export default function MapCard({ number, title, description, embedSrc, href, className = "" }: Props) {
  return (
    <article className={`flex flex-col border border-white/15 bg-navy-primary text-white ${className}`}>
      <div className="aspect-[4/3] bg-navy-secondary">
        {embedSrc ? (
          <iframe src={embedSrc} title={title} loading="lazy" className="h-full w-full border-0" allowFullScreen />
        ) : (
          <Placeholder variant="block" label="[INSERT MAP EMBED]" tone="dark" />
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        {number && <p className="font-mono text-xs font-bold tracking-[0.2em] text-orange-acts">{number}</p>}
        <h3 className="mt-2 text-2xl font-bold uppercase leading-tight">{title}</h3>
        <p className="mt-3 flex-1 text-white/80">{description}</p>
        <div className="mt-6">
          <Button href={href ?? embedSrc} variant="blue">
            Explore Map
          </Button>
        </div>
      </div>
    </article>
  );
}
