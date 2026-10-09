"use client";

import { useState } from "react";
import FilterBar from "@/components/FilterBar";
import NewsCard from "@/components/NewsCard";
import type { NewsItem } from "@/lib/content";

export default function NewsBrowser({ categories, articles }: { categories: string[]; articles: NewsItem[] }) {
  const [filter, setFilter] = useState<string | null>(null);
  const shown = filter ? articles.filter((a) => a.category === filter) : articles;

  return (
    <>
      <FilterBar label="Filter news by category" options={categories} value={filter} onChange={setFilter} />
      {shown.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {shown.map((a) => (
            <NewsCard key={a.id} {...a} />
          ))}
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col justify-center border-2 border-dashed border-navy-primary/20 p-8">
            <p className="font-display text-2xl font-bold uppercase">No stories posted yet</p>
            <p className="mt-2 text-navy-primary/70">
              {filter ? `There are no ${filter} stories right now.` : "Community news will appear here soon."}
            </p>
          </div>
          <NewsCard image={null} category={filter} headline={null} excerpt={null} date={null} url={null} />
        </div>
      )}
    </>
  );
}
