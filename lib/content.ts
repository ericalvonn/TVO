/**
 * Typed access to the editable JSON files in /content.
 * Any value that is `null` (or an empty list) renders as a <Placeholder>,
 * so editors only ever need to fill in real, verified values.
 */
import siteJson from "@/content/site.json";
import homeJson from "@/content/home.json";
import donationJson from "@/content/donation.json";
import aboutJson from "@/content/about.json";
import programsJson from "@/content/programs.json";
import projectsJson from "@/content/projects.json";
import airQualityJson from "@/content/air-quality.json";
import eventsJson from "@/content/events.json";
import newsJson from "@/content/news.json";
import fundersJson from "@/content/funders.json";

export type Link = { label: string; href: string };
export type Stat = { label: string; value: string | null; unit?: string | null };
export type Pillar = { icon: string; label: string; description: string };
export type CardItem = {
  title: string;
  description: string;
  href: string;
  image: string | null;
  imageHint?: string;
};
export type MapItem = {
  number: string;
  title: string;
  description: string;
  embedSrc: string | null;
  href: string | null;
};
export type ResourceEntry = { name: string; description?: string; url?: string; phone?: string; address?: string };
export type DocLink = { title: string; url: string | null };

export type EventItem = {
  id: string;
  date: string;
  type: string;
  title: string;
  location: string;
  description: string;
  registrationUrl: string | null;
};

export type NewsItem = {
  id: string;
  category: string;
  headline: string;
  excerpt: string;
  date: string;
  image: string | null;
  url: string | null;
};

export const site = siteJson as Omit<typeof siteJson, "social"> & { social: Link[] };
export const home = homeJson as Omit<typeof homeJson, "hero" | "areas" | "impact" | "maps"> & {
  hero: Omit<typeof homeJson.hero, "image"> & { image: string | null };
  areas: { heading: string; items: CardItem[] };
  impact: { heading: string; stats: Stat[] };
  maps: { heading: string; items: MapItem[] };
};
export const donation = donationJson as { amounts: number[]; processorUrl: string | null };
export const about = aboutJson as Omit<typeof aboutJson, "whyWeExist"> & {
  whyWeExist: Omit<typeof aboutJson.whyWeExist, "image"> & { image: string | null };
};

type ProgramsShape = {
  hub: { heading: string; intro: string; items: CardItem[] };
  community: {
    garden: { heading: string; body: string; focus: string[]; image: string | null; imageHint: string };
    classes: { heading: string; body: string; registrationUrl: string | null };
    resources: { heading: string; intro: string; categories: { title: string; entries: ResourceEntry[] }[] };
  };
  youth: {
    fourH: {
      heading: string;
      description: string | null;
      ageRange: string | null;
      activities: string | null;
      schedule: string | null;
      registrationUrl: string | null;
      outcomes: string | null;
      photos: string[];
    };
    steam: {
      heading: string;
      body: string;
      outcomes: string[];
      images: { src: string | null; hint: string }[];
    };
  };
  ambassadors: {
    heading: string;
    subhead: string;
    body: string;
    activities: Pillar[];
    flow: string[];
    closing: string;
  };
};
export const programs = programsJson as ProgramsShape;

export type Project = {
  id: string;
  title: string;
  body: string;
  link?: Link;
  image?: string | null;
  imageHint?: string;
  stat?: { value: string; label: string };
  panels?: { label: string; body: string | null; image: string | null; imageHint: string }[];
};
export const projects = projectsJson as { heading: string; intro: string; items: Project[] };

export const airQuality = airQualityJson as Omit<
  typeof airQualityJson,
  "dashboard" | "stations" | "mapEmbedSrc" | "chartEmbedSrc" | "communitySummary" | "resources" | "explainer"
> & {
  dashboard: {
    pm25: string | null;
    no2: string | null;
    stations: string | null;
    community: string | null;
    lastUpdated: string | null;
  };
  mapEmbedSrc: string | null;
  chartEmbedSrc: string | null;
  stations: { name: string; community?: string; status?: string }[];
  communitySummary: string | null;
  resources: DocLink[];
  explainer: {
    heading: string;
    intro: string;
    blocks: { id: string; title: string; body: string | null; items: string[] }[];
    faq: { q: string; a: string }[];
  };
};

export const events = eventsJson as { categories: string[]; events: EventItem[] };
export const news = newsJson as { heading: string; categories: string[]; articles: NewsItem[] };

export const funders = fundersJson as Omit<typeof fundersJson, "impact" | "documents" | "capabilityStatementUrl"> & {
  capabilityStatementUrl: string | null;
  impact: Stat[];
  documents: DocLink[];
};
