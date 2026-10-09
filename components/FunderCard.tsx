import Button from "./Button";

type Props = { title: string; description: string };

export default function FunderCard({ title, description }: Props) {
  return (
    <article className="flex flex-col border-t-4 border-orange-acts bg-white p-6 text-navy-primary shadow-sm">
      <h3 className="text-2xl font-bold uppercase leading-tight">{title}</h3>
      <p className="mt-3 flex-1 leading-relaxed text-navy-primary/80">{description}</p>
      <div className="mt-6">
        <Button href={`/contact?subject=${encodeURIComponent(`Funding: ${title}`)}`} variant="outline-dark">
          Discuss Funding
        </Button>
      </div>
    </article>
  );
}
