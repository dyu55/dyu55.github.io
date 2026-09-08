import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { projectDetails } from "@/data/project-details";

export function ProjectsSection() {
  const budget = projects.find((p) => p.slug === "budget-smart")!;
  return (
    <section
      id="projects"
      className="work-section projects-index shell"
      aria-labelledby="work-title"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">Selected work</p>
          <h1 id="work-title">Ideas, made real.</h1>
        </div>
        <p>
          A closer look at the products I build and the decisions behind them.
        </p>
      </div>
      <article className="project-feature">
        <Link
          href="/projects/budget-smart/"
          className="project-stage"
          aria-label="View Budget Smart project and app screenshots"
        >
          {projectDetails["budget-smart"].screens!.slice(0, 3).map((s) => (
            <Image
              key={s.src}
              src={s.src}
              alt={s.alt}
              width={1206}
              height={2622}
              sizes="(max-width: 760px) 30vw, 240px"
            />
          ))}
        </Link>
        <div className="project-info">
          <div>
            <p className="eyebrow">01 · NATIVE iOS APP</p>
            <h3>{budget.title}</h3>
            <p>
              A little more clarity.
              <br />
              Every day.
            </p>
          </div>
          <div>
            <p>{budget.description}</p>
            <div className="tag-list">
              {["SwiftUI", "On-device OCR", "Encrypted backup"].map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            <Link href="/projects/budget-smart/" className="text-link">
              Explore the project <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </article>
      <div className="project-list">
        <Link href="/projects/sneaker-store/" className="project-row">
          <span className="project-index">02</span>
          <div>
            <h3>SoleMate</h3>
            <span className="project-category">
              Full-stack web · E-commerce
            </span>
          </div>
          <p>
            A sneaker storefront, from product discovery to simulated checkout
            and inventory management.
          </p>
          <ArrowUpRight size={22} />
        </Link>
      </div>
      <div className="workbench-projects">
        {["myagent", "rag-assistant"].map((slug, index) => {
          const project = projects.find((entry) => entry.slug === slug)!;
          const detail = projectDetails[slug];
          const cover = detail.screens![0];
          return (
            <article key={slug} className="workbench-project">
              <Link
                href={`/projects/${slug}/`}
                className="workbench-cover"
                aria-label={`Explore ${project.title}`}
              >
                <Image
                  src={cover.src}
                  alt={cover.alt}
                  width={cover.width!}
                  height={cover.height!}
                  sizes="(max-width: 760px) 90vw, 600px"
                />
              </Link>
              <div className="workbench-info">
                <p className="eyebrow">
                  {String(index + 3).padStart(2, "0")} · {detail.category}
                </p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tag-list">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <Link href={`/projects/${slug}/`} className="text-link">
                  Explore the project <ArrowUpRight size={18} />
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
