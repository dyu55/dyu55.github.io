import Link from "next/link";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

export function Projects() {
  return (
    <section id="projects" className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-text)]">
            Featured Work
          </h2>
          <p className="text-[var(--color-muted-foreground)] mt-2">
            Production systems, not side projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className={`group relative p-6 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-all ${
                project.featured ? "md:col-span-2 md:aspect-[2/1]" : ""
              }`}
            >
              {project.featured && (
                <div className="absolute top-4 right-4 px-2 py-1 text-xs font-medium rounded bg-[var(--color-accent)] text-[var(--color-accent-foreground)]">
                  Featured
                </div>
              )}
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[var(--color-muted-foreground)] mt-1">
                    {project.tagline}
                  </p>
                </div>

                <p className="text-sm text-[var(--color-text-secondary)] line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded-md bg-[var(--color-background)] text-[var(--color-muted-foreground)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg text-[var(--color-muted-foreground)] hover:text-[var(--color-text)] hover:bg-[var(--color-background)] transition-colors"
                      aria-label="View on GitHub"
                    >
                      <GitHubIcon />
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg text-[var(--color-muted-foreground)] hover:text-[var(--color-text)] hover:bg-[var(--color-background)] transition-colors"
                      aria-label="View demo"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                  <span className="ml-auto p-2 rounded-lg text-[var(--color-muted-foreground)] group-hover:text-[var(--color-accent)] group-hover:bg-[var(--color-background)] transition-colors">
                    <ArrowUpRight size={18} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}