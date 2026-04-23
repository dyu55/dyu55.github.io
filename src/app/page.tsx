import { Hero } from "@/components/hero/Hero";
import { Projects } from "@/components/projects/Projects";
import { Skills } from "@/components/skills/Skills";
import { Writing } from "@/components/blog/BlogSection";
import { Contact } from "@/components/contact/Contact";
import { Footer } from "@/components/ui/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <Writing />
      <Contact />
      <Footer />
    </>
  );
}
