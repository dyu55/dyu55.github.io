"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { BlogPostMeta } from "@/lib/blog";
import { BlogSearch } from "./BlogSearch";
export function BlogIndex({
  posts,
  tags,
}: {
  posts: BlogPostMeta[];
  tags: string[];
}) {
  const [tag, setTag] = useState("All");
  const visible =
    tag === "All" ? posts : posts.filter((p) => p.tags.includes(tag));
  return (
    <>
      <BlogSearch />
      <div
        className="blog-filters"
        role="group"
        aria-label="Filter articles by topic"
      >
        {["All", ...tags].map((t) => (
          <button key={t} onClick={() => setTag(t)} aria-pressed={tag === t}>
            {t}
          </button>
        ))}
      </div>
      <p className="sr-only" role="status">
        {visible.length} articles
      </p>
      <div>
        {visible.map((p) => (
          <Link className="writing-row" href={`/blog/${p.slug}/`} key={p.slug}>
            <time dateTime={p.date}>
              {new Date(p.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
                timeZone: "UTC",
              })}
              <span className="block mt-2">{p.readingTime} min read</span>
            </time>
            <div>
              <h2 className="text-xl">{p.title}</h2>
              <p>{p.excerpt}</p>
            </div>
            <ArrowUpRight size={20} />
          </Link>
        ))}
      </div>
    </>
  );
}
