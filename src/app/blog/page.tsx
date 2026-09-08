import { getAllPosts, getAllTags } from "@/lib/blog";
import { BlogIndex } from "@/components/blog/BlogIndex";
import { Footer } from "@/components/ui/Footer";
export const metadata = {
  title: "Writing — Michael Yu",
  description:
    "Engineering notes on AI systems, software architecture and building useful products.",
  alternates: { canonical: "/blog/" },
};
export default function BlogPage() {
  return (
    <>
      <div className="detail shell">
        <header className="detail-header">
          <p className="eyebrow">Engineering notes</p>
          <h1>
            Notes from
            <br />
            the workbench.
          </h1>
          <p>
            Thoughts on AI systems, engineering decisions and the process of
            building software.
          </p>
        </header>
        <BlogIndex posts={getAllPosts()} tags={getAllTags()} />
      </div>
      <Footer />
    </>
  );
}
