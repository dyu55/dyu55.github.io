import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { getAllPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://dyu55.github.io";
  return [
    { url: `${baseUrl}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/projects/`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/blog/`, changeFrequency: "weekly", priority: 0.8 },
    ...projects.map((project) => ({
      url: `${baseUrl}/projects/${project.slug}/`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...getAllPosts().map((post) => ({
      url: `${baseUrl}/blog/${post.slug}/`,
      lastModified: post.date,
      priority: 0.6,
    })),
  ];
}
