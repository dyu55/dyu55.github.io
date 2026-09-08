import { HeroSection } from "@/components/sections/HeroSection";
import { HowIBuildSection } from "@/components/sections/HowIBuildSection";
import { WritingSection } from "@/components/sections/WritingSection";
import { WorkWithMeSection } from "@/components/sections/WorkWithMeSection";
import { Footer } from "@/components/ui/Footer";
import { getAllPosts } from "@/lib/blog";

export default function Home() {
  const posts = getAllPosts()
    .slice(0, 3)
    .map((post) => ({
      slug: post.slug,
      title: post.title,
      date: post.date,
      tags: post.tags,
      excerpt: post.excerpt,
      readingTime: post.readingTime,
    }));

  return (
    <>
      <HeroSection />
      <HowIBuildSection />
      <WritingSection posts={posts} />
      <WorkWithMeSection />
      <Footer />
    </>
  );
}
