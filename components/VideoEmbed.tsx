import Placeholder from "./Placeholder";

type Props = {
  /** YouTube video ID (the part after `watch?v=`). Null renders a placeholder. */
  youtubeId: string | null;
  title: string;
};

/** Responsive 16:9 YouTube embed using the privacy-enhanced (no-cookie) player. */
export default function VideoEmbed({ youtubeId, title }: Props) {
  return (
    <div className="aspect-video w-full bg-navy-primary shadow-xl">
      {youtubeId ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${encodeURIComponent(youtubeId)}?rel=0`}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="h-full w-full border-0"
        />
      ) : (
        <Placeholder variant="block" label="DATA COMING SOON" hint="Video slot" tone="dark" />
      )}
    </div>
  );
}
