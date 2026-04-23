import { ArrowRight } from "lucide-react";

// Sample posts - will be replaced with real content
const posts = [
  {
    slug: "building-production-rag",
    title: "Building Production RAG Systems",
    date: "2026-04-15",
    excerpt: "Lessons from building a RAG system with 140+ tests. Grounding verification, citation tracking, and the edge cases nobody talks about.",
    tags: ["RAG", "LLM", "AI"],
  },
  {
    slug: "agent-loop-plan-act-reflect",
    title: "The Plan/Act/Reflect Loop",
    date: "2026-04-08",
    excerpt: "How I structured MyAgent's core architecture using the Plan/Act/Reflect pattern. Why this loop makes agents more reliable.",
    tags: ["Agents", "Architecture"],
  },
  {
    slug: "mcp-model-context-protocol",
    title: "Model Context Protocol in Practice",
    date: "2026-03-28",
    excerpt: "Using MCP to extend agent capabilities. The tool is only as good as its schema design.",
    tags: ["MCP", "Agents"],
  },
];

export function Writing() {
  return (
    <section id="writing" className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-text)]">
              Engineering Notes
            </h2>
            <p className="text-[var(--color-muted-foreground)] mt-2">
              Deep dives on AI systems and how I build them
            </p>
          </div>
          <a
            href="/blog"
            className="hidden sm:inline-flex items-center gap-1 text-sm text-[var(--color-muted-foreground)] hover:text-[var(--color-accent)] transition-colors"
          >
            View all
            <ArrowRight size={16} />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-4 lg:gap-6">
          {posts.map((post) => (
            <a
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group p-6 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-all"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs text-[var(--color-muted-foreground)]">
                  <time>{post.date}</time>
                  <span>·</span>
                  <span>{post.tags.join(", ")}</span>
                </div>
                <h3 className="text-base font-semibold text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)] line-clamp-3">
                  {post.excerpt}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-8 sm:hidden">
          <a
            href="/blog"
            className="inline-flex items-center gap-1 text-sm text-[var(--color-muted-foreground)] hover:text-[var(--color-accent)] transition-colors"
          >
            View all posts
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}