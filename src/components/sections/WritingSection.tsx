import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
interface BlogPostMeta {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  readingTime: number;
}
export function WritingSection({ posts }: { posts: BlogPostMeta[] }) {
  if (!posts.length) return null;
  return (
    <section id="writing" className="writing shell">
      <div className="section-heading">
        <div>
          <p className="eyebrow">
            <span className="section-number">03 /</span> Engineering notes
          </p>
          <h2>Notes from the workbench.</h2>
        </div>
        <Link className="text-link" href="/blog/">
          All writing <ArrowUpRight size={18} />
        </Link>
      </div>
      {posts.map((post) => (
        <Link
          key={post.slug}
          href={`/blog/${post.slug}/`}
          className="writing-row"
        >
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
              timeZone: "UTC",
            })}
          </time>
          <div>
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
          </div>
          <ArrowUpRight size={22} />
        </Link>
      ))}
    </section>
  );
}
