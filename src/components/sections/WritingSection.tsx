"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";

interface BlogPostMeta {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  readingTime: number;
}

interface WritingSectionProps {
  posts: BlogPostMeta[];
}

export function WritingSection({ posts }: WritingSectionProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (posts.length === 0) {
    return (
      <section
        id="writing"
        className="py-[var(--space-section)] px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-text)] mb-4">
              Engineering Notes
            </h2>
            <p className="text-[var(--color-text-secondary)] max-w-2xl">
              Thinking out loud on AI systems, agent architectures, and what
              makes production systems reliable.
            </p>
          </div>

          {/* Empty state */}
          <div className="text-center py-12">
            <p className="text-[var(--color-muted-foreground)]">
              No posts yet. Check back soon.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="writing"
      className="py-[var(--space-section)] px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-text)] mb-4">
              Engineering Notes
            </h2>
            <p className="text-[var(--color-text-secondary)] max-w-2xl">
              Thinking out loud on AI systems, agent architectures, and what
              makes production systems reliable.
            </p>
          </div>
          <Link
            href="/blog"
            className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-[var(--color-accent)] hover:opacity-80 transition-opacity"
          >
            All posts
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Blog cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block p-6 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-accent)] hover:-translate-y-1 transition-all duration-300"
              style={{
                transitionDelay: `${index * 50}ms`,
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(20px)",
              }}
            >
              <div className="space-y-4">
                {/* Meta with reading time badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-xs text-[var(--color-muted-foreground)]">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </time>
                  </div>
                  {/* Reading time badge */}
                  <span className="inline-flex items-center gap-1 text-xs text-[var(--color-accent)]">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readingTime} min
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-[var(--color-text-secondary)] line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded bg-[var(--color-background)] border border-[var(--color-border)] text-[var(--color-muted-foreground)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-8 md:hidden text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-accent)]"
          >
            View all posts
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}