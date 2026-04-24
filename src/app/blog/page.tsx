import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAllPosts, getAllTags } from "@/lib/blog";
import { BlogSearch } from "@/components/blog/BlogSearch";

export const metadata = {
  title: "Writing — Michael Yu",
  description: "Thoughts on AI systems, engineering, and building in public.",
};

export default function BlogPage() {
  const posts = getAllPosts();
  const allTags = getAllTags();

  return (
    <main className="min-h-screen bg-[var(--color-background)] text-[var(--color-text)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">
            Writing
          </h1>
          <p className="text-lg text-[var(--color-muted-foreground)]">
            Thoughts on AI systems, engineering, and building in public.
          </p>
        </header>

        {/* Search */}
        <div className="mb-8">
          <BlogSearch />
        </div>

        {/* Tag filter pills */}
        {allTags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8" role="navigation" aria-label="Filter by tag">
            {allTags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm rounded-full border border-[var(--color-border)] text-[var(--color-muted-foreground)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {posts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-[var(--color-muted-foreground)] text-lg">
              No posts yet. Check back soon.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block p-6 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-all group"
              >
                <article className="space-y-3">
                  <div className="flex items-center gap-3 text-sm text-[var(--color-muted-foreground)]">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                    <span className="w-1 h-1 rounded-full bg-[var(--color-border)]" />
                    <span>{post.readingTime} min read</span>
                    <span className="w-1 h-1 rounded-full bg-[var(--color-border)]" />
                    <span className="uppercase tracking-wide text-xs">
                      {post.tags[0]}
                    </span>
                  </div>

                  <h2 className="text-xl font-semibold text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-[var(--color-text-secondary)]">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-2 text-sm text-[var(--color-accent)] group-hover:underline">
                    Read more
                    <ArrowRight size={16} />
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}