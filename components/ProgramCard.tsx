import Link from "next/link";
import ImageSlot from "./ImageSlot";
import Icon from "./Icon";

type Props = {
  title: string;
  description: string;
  href: string;
  image?: string | null;
  imageHint?: string;
};

export default function ProgramCard({ title, description, href, image, imageHint }: Props) {
  return (
    <article className="group flex flex-col border border-warm-gray bg-white transition-shadow hover:shadow-lg">
      <ImageSlot src={image} alt="" hint={imageHint} className="aspect-[16/10]" />
      <div className="flex flex-1 flex-col border-t-4 border-orange-acts p-6">
        <h3 className="text-2xl font-bold uppercase leading-tight text-navy-primary">{title}</h3>
        <p className="mt-3 flex-1 leading-relaxed text-navy-primary/80">{description}</p>
        <Link
          href={href}
          className="mt-6 inline-flex items-center gap-2 font-display font-semibold uppercase tracking-wider text-blue-action hover:underline"
        >
          Learn More<span className="sr-only">: {title}</span>
          <Icon name="arrow" className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
