import Placeholder from "./Placeholder";

type Props = {
  src?: string | null;
  alt?: string;
  /** Describes the photo that belongs in this slot until a real one is supplied. */
  hint?: string;
  className?: string;
  tone?: "light" | "dark";
};

/** Real community photography goes here; until supplied, renders a clearly-marked placeholder. */
export default function ImageSlot({ src, alt = "", hint, className = "aspect-[4/3]", tone = "light" }: Props) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {src ? (
        <img src={src} alt={alt} className="absolute inset-0 h-full w-full object-cover" />
      ) : (
        <Placeholder variant="block" label="DATA COMING SOON" hint={hint ? `Photo: ${hint}` : "Photo slot"} tone={tone} />
      )}
    </div>
  );
}
