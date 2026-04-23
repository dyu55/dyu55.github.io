"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  featured?: boolean;
}

const projects: Project[] = [
  {
    slug: "myagent",
    title: "MyAgent",
    description:
      "CLI agent with MCP server integration, enabling AI systems to interact with files, Git, and web search.",
    tags: ["Agents", "MCP", "CLI"],
    featured: true,
  },
  {
    slug: "rag-assistant",
    title: "RAG Assistant",
    description:
      "Production RAG system handling 10k+ queries daily with 140+ tests, grounding verification, and hybrid search.",
    tags: ["RAG", "AI", "Production"],
  },
  {
    slug: "budget-smart",
    title: "Budget Smart",
    description:
      "Personal finance tracker with AI-powered categorization and spending insights for better money management.",
    tags: ["React", "AI", "Finance"],
  },
];

export function ProjectsSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="projects"
      className="py-[var(--space-section)] px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-text)] mb-4">
            Production AI Systems
          </h2>
          <p className="text-[var(--color-text-secondary)] max-w-2xl">
            Systems I&apos;ve built and shipped — from agentic frameworks to
            production RAG pipelines.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className={`group relative p-6 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-all duration-300 ${
                project.featured ? "md:col-span-2 lg:col-span-2" : ""
              }`}
              style={{
                transitionDelay: `${index * 50}ms`,
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(20px)",
              }}
            >
              {/* Featured indicator */}
              {project.featured && (
                <div className="absolute top-4 right-4 px-2 py-1 text-xs font-medium rounded bg-[var(--color-accent)] text-[var(--color-accent-foreground)]">
                  Featured
                </div>
              )}

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors">
                  {project.title}
                </h3>

                <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded bg-[var(--color-background)] border border-[var(--color-border)] text-[var(--color-muted-foreground)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Arrow indicator */}
                <div className="flex items-center gap-2 text-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm font-medium">View project</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Stats row */}
        <div
          className={`mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 transition-all duration-500 delay-300 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="p-4 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] text-center">
            <div className="text-2xl font-bold text-[var(--color-text)]">4</div>
            <div className="text-sm text-[var(--color-muted-foreground)]">
              Projects shipped
            </div>
          </div>
          <div className="p-4 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] text-center">
            <div className="text-2xl font-bold text-[var(--color-text)]">140+</div>
            <div className="text-sm text-[var(--color-muted-foreground)]">
              RAG tests
            </div>
          </div>
          <div className="p-4 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] text-center">
            <div className="text-2xl font-bold text-[var(--color-text)]">7k+</div>
            <div className="text-sm text-[var(--color-muted-foreground)]">
              Concurrent users
            </div>
          </div>
          <div className="p-4 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] text-center">
            <div className="text-2xl font-bold text-[var(--color-text)]">2yr</div>
            <div className="text-sm text-[var(--color-muted-foreground)]">
              AI/agent focus
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}