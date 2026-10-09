import Button from "./Button";
import Placeholder from "./Placeholder";

type Props = {
  date: string | null;
  type: string | null;
  title: string | null;
  location: string | null;
  description: string | null;
  registrationUrl: string | null;
};

const or = (v: string | null, node: React.ReactNode = <Placeholder label="DATA COMING SOON" />) => v ?? node;

export default function EventCard({ date, type, title, location, description, registrationUrl }: Props) {
  return (
    <article className="flex flex-col border border-warm-gray bg-white">
      <div className="flex items-center justify-between gap-4 bg-navy-primary px-6 py-4 text-white">
        <p className="font-mono text-sm font-bold uppercase tracking-wider">{or(date, <Placeholder label="--" tone="dark" />)}</p>
        {type && <span className="bg-orange-acts px-2 py-1 font-mono text-xs font-bold uppercase tracking-wider">{type}</span>}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-2xl font-bold uppercase leading-tight text-navy-primary">{or(title)}</h3>
        <p className="mt-2 font-mono text-sm text-navy-primary/70">{or(location)}</p>
        <p className="mt-4 flex-1 leading-relaxed text-navy-primary/80">{or(description)}</p>
        <div className="mt-6">
          {registrationUrl ? (
            <Button href={registrationUrl} variant="blue">
              Register
            </Button>
          ) : (
            <Placeholder label="[INSERT PROGRAM REGISTRATION LINK]" />
          )}
        </div>
      </div>
    </article>
  );
}
