import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { Footer } from "@/components/ui/Footer";

export const metadata = {
  title: "Projects — Michael Yu",
  description:
    "Explore Michael Yu’s native apps, full-stack products and AI tools through project stories and real interface screenshots.",
  alternates: { canonical: "/projects/" },
  openGraph: {
    title: "Projects — Michael Yu",
    description:
      "Native apps, full-stack products and AI tools. Explore the work and the decisions behind it.",
    url: "https://dyu55.github.io/projects/",
  },
};
export default function ProjectsPage() {
  return (
    <>
      <ProjectsSection />
      <Footer />
    </>
  );
}
