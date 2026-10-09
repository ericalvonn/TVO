import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import NewsBrowser from "./NewsBrowser";
import { news } from "@/lib/content";

export const metadata: Metadata = { title: "News" };

export default function NewsPage() {
  return (
    <>
      <Hero compact eyebrow="Community Corner" headline={news.heading} />
      <Section tone="light">
        <NewsBrowser categories={news.categories} articles={news.articles} />
      </Section>
    </>
  );
}
