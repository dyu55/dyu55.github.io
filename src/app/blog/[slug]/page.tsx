import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { serialize } from "next-mdx-remote/serialize";
import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/lib/blog";
import { MdxContent } from "@/components/mdx/MdxContent";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.meta.title} — Michael Yu`,
    description: post.meta.excerpt,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Serialize MDX content for client-side rendering
  const mdxSource = await serialize(post.content);

  const relatedPosts = getRelatedPosts(slug, post.meta.tags);

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
              <time dateTime={post.meta.date}>
                {new Date(post.meta.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span className="w-1 h-1 rounded-full bg-[var(--color-border)]" />
              <span>{post.meta.readingTime} min read</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-[var(--color-text)]">
              {post.meta.title}
            </h1>

            <div className="flex gap-2">
              {post.meta.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs rounded bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-muted-foreground)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </header>

          <div className="prose prose-invert max-w-none pt-8 border-t border-[var(--color-border)]">
            <MdxContent source={mdxSource} />
          </div>

          {/* Author card */}
          <div className="mt-12 pt-8 border-t border-[var(--color-border)]">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center text-[var(--color-accent-foreground)] font-semibold">
                MY
              </div>
              <div>
                <p className="font-medium text-[var(--color-text)]">Michael Yu</p>
                <p className="text-sm text-[var(--color-muted-foreground)]">AI Systems Engineer</p>
              </div>
            </div>
          </div>

          {/* Related posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-8 pt-8 border-t border-[var(--color-border)]">
              <h2 className="text-lg font-semibold text-[var(--color-text)] mb-4">
                Related posts
              </h2>
              <div className="grid gap-4">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    className="block p-4 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-colors"
                  >
                    <h3 className="font-medium text-[var(--color-text)]">
                      {related.title}
                    </h3>
                    <p className="text-sm text-[var(--color-muted-foreground)] mt-1">
                      {related.readingTime} min read
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>
      </div>
    </main>
  );
}