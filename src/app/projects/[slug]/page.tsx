import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { deferredProjects, projectDetails } from "@/data/project-details";
import { Footer } from "@/components/ui/Footer";
interface PageProps {
  params: { slug: string };
}
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
export function generateMetadata({ params }: PageProps) {
  const p = projects.find((p) => p.slug === params.slug);
  if (!p) return { title: "Project not found" };
  const description = deferredProjects.has(p.slug)
    ? `${p.title} by Michael Yu. A new version is in development.`
    : p.tagline;
  return {
    title: `${p.title} — Michael Yu`,
    description,
    alternates: { canonical: `/projects/${p.slug}/` },
    openGraph: {
      title: `${p.title} — Michael Yu`,
      description,
      url: `https://dyu55.github.io/projects/${p.slug}/`,
      images: [],
    },
    twitter: {
      card: "summary",
      title: `${p.title} — Michael Yu`,
      description,
      images: [],
    },
  };
}
export default function ProjectPage({ params }: PageProps) {
  const p = projects.find((p) => p.slug === params.slug);
  if (!p) notFound();
  const detail = projectDetails[p.slug];
  const deferred = deferredProjects.has(p.slug);
  return (
    <>
      <article className="detail shell">
        <Link href="/#projects" className="text-link">
          <ArrowLeft size={17} /> Back to projects
        </Link>
        <header className="detail-header">
          <p className="eyebrow">
            {detail?.category || "AI tools · In development"}
          </p>
          <h1>{p.title}</h1>
          <p>
            {detail?.summary ||
              (deferred
                ? "A new version is currently in development. More project details will follow."
                : p.tagline)}
          </p>
          {!deferred && (
            <div className="tag-list">
              {p.tags.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          )}
          <div className="detail-actions">
            {p.githubUrl && (
              <a
                href={p.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="button button-primary"
              >
                View on GitHub <ArrowUpRight size={18} />
              </a>
            )}
            {detail?.screens && (
              <a href="#screens" className="button button-primary">
                Explore the app screens <ArrowUpRight size={18} />
              </a>
            )}
          </div>
        </header>
        {detail && (
          <>
            <div className="case-body">
              <aside>
                <h2>Project context</h2>
                <p>{detail.role}</p>
                <div className="tag-list">
                  {p.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </aside>
              <div>
                {detail.sections.map((s) => (
                  <section key={s.title}>
                    <h2>{s.title}</h2>
                    <p>{s.body}</p>
                    {s.bullets && (
                      <ul>
                        {s.bullets.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                    )}
                    <div className="h-8" />
                  </section>
                ))}
              </div>
            </div>
            {detail.screens && (
              <section className="screen-gallery" id="screens">
                <div className="section-heading">
                  <div>
                    <p className="eyebrow">Inside the app</p>
                    <h2>Every screen, a clear purpose.</h2>
                  </div>
                </div>
                <p className="gallery-note">{detail.screenNote}</p>
                <div className="screen-grid">
                  {detail.screens.map((s, i) => (
                    <figure key={s.src}>
                      <a
                        href={s.src}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open full-resolution image: ${s.caption}`}
                      >
                        <Image
                          src={s.src}
                          alt={s.alt}
                          width={1206}
                          height={2622}
                          sizes="(max-width: 760px) 44vw, 350px"
                        />
                      </a>
                      <figcaption>
                        {s.caption}
                        <span>SCREEN {String(i + 1).padStart(2, "0")}</span>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </section>
            )}
          </>
        )}
      </article>
      <Footer />
    </>
  );
}
