import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

// This would normally fetch from MDX files
// For now, we'll use placeholder data
const posts: Record<string, {
  title: string;
  date: string;
  tags: string[];
  content: string;
}> = {
  "building-production-rag": {
    title: "Building a Production RAG System",
    date: "2026-04-20",
    tags: ["RAG", "AI", "Production"],
    content: `Building a RAG system is deceptively simple. Embed your documents, query the vector store, stuff the results into an LLM prompt. Done.

But production? That's where it gets interesting.

## The Grounding Problem

The biggest issue we faced was hallucination. The LLM would confidently state things that weren't in the retrieved documents. Our solution was grounding verification.

Every answer gets checked against the source documents. If the key claims aren't supported by the retrieved context, we either:
1. Flag it as unverified
2. Try a different retrieval strategy
3. Fall back to a more conservative response

## Testing at Scale

We wrote 140+ tests covering:
- Retrieval quality metrics
- Grounding verification accuracy
- Answer relevance scoring
- Latency under load

The test suite runs on every PR. It's caught regressions multiple times.

## Key Learnings

1. Chunking strategy matters more than embedding model choice
2. Hybrid search (dense + sparse) outperforms either alone
3. Reranking significantly improves final results
4. Don't forget about metadata filtering

Happy to dive deeper into any of these in future posts.`,
  },
  "llm-orchestration-patterns": {
    title: "LLM Orchestration Patterns",
    date: "2026-04-15",
    tags: ["LLM", "Architecture"],
    content: `LLM applications range from simple prompt-response chains to complex multi-agent systems. Here's a breakdown of the patterns I've used.

## Chain

The simplest pattern: prompt → LLM → response. Good for single-turn tasks.

## Chain of Thought

Add "think step by step" or similar instructions to get the LLM to reason through problems. Works surprisingly well for many tasks.

## Retrieval Augmented Generation (RAG)

Hybrid search over documents + LLM synthesis. The industry standard for knowledge-intensive tasks.

## Tool Use

Give the LLM access to external tools (code execution, API calls, search). Requires careful prompt engineering and error handling.

## Agents

Full agentic loops: plan → act → observe → reflect. This is where MyAgent lives. The complexity is higher but the capabilities are significantly greater.

## Which to Use?

- Single question, knowledge base available → RAG
- Multi-step reasoning → Chain of Thought
- Need external data/actions → Tool Use
- Open-ended tasks requiring planning → Agents`,
  },
  "mcp-deep-dive": {
    title: "MCP Deep Dive",
    date: "2026-04-10",
    tags: ["MCP", "Agents"],
    content: `The Model Context Protocol (MCP) is how AI agents interact with tools. Here's how it works.

## What is MCP?

MCP provides a standardized way for AI systems to:
- Discover available tools
- Invoke tools with structured parameters
- Handle tool responses
- Manage tool state

## The Protocol

1. **Discovery**: The agent queries for available tools
2. **Invocation**: Agent calls a tool with JSON parameters
3. **Response**: Tool returns structured data
4. **Integration**: Response is incorporated into context

## Why MCP Matters

Without a standard protocol, every agent-tool integration is custom. MCP enables:
- Reusable tool implementations
- Tool composability
- Agent portability across tool ecosystems

## MyAgent's MCP Integration

MyAgent uses MCP servers for:
- File system operations
- Git interactions
- Web search
- Custom skill execution

The skills system loads MCP-compatible tool definitions and executes them in a sandboxed environment.

More details on the specific MCP implementation in MyAgent's GitHub repo.`,
  },
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} — Michael Yu`,
    description: post.content.split("\n")[0],
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    notFound();
  }

  // Simple markdown-ish rendering
  const contentHtml = post.content
    .split("\n\n")
    .map((paragraph) => {
      if (paragraph.startsWith("## ")) {
        return `<h2 class="text-2xl font-bold text-[var(--color-text)] mt-8 mb-4">${paragraph.slice(3)}</h2>`;
      }
      if (paragraph.startsWith("## ")) {
        return `<h3 class="text-xl font-semibold text-[var(--color-text)] mt-6 mb-3">${paragraph.slice(3)}</h3>`;
      }
      if (paragraph.startsWith("- ")) {
        const items = paragraph.split("\n").map((item) => `<li class="ml-4">${item.slice(2)}</li>`).join("");
        return `<ul class="list-disc list-inside space-y-1 text-[var(--color-text-secondary)]">${items}</ul>`;
      }
      if (paragraph.match(/^\d+\. /)) {
        const items = paragraph.split("\n").map((item) => `<li class="ml-4">${item.replace(/^\d+\. /, "")}</li>`).join("");
        return `<ol class="list-decimal list-inside space-y-1 text-[var(--color-text-secondary)]">${items}</ol>`;
      }
      return `<p class="text-[var(--color-text-secondary)] leading-relaxed mb-4">${paragraph}</p>`;
    })
    .join("");

  return (
    <main className="min-h-screen bg-[var(--color-background)] text-[var(--color-text)]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-[var(--color-muted-foreground)] hover:text-[var(--color-text)] transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Back to writing
        </Link>

        <article className="space-y-6">
          <header className="space-y-4">
            <div className="flex items-center gap-3 text-sm text-[var(--color-muted-foreground)]">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-[var(--color-text)]">
              {post.title}
            </h1>

            <div className="flex gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs rounded bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-muted-foreground)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </header>

          <div
            className="prose prose-invert max-w-none pt-8 border-t border-[var(--color-border)]"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </article>
      </div>
    </main>
  );
}
