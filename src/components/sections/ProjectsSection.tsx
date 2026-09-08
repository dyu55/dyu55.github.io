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
      className="work-section shell"
      aria-labelledby="work-title"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">
            <span className="section-number">01 /</span> Selected work
          </p>
          <h2 id="work-title">From idea to interaction.</h2>
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
        <Link href="/projects/myagent/" className="project-row">
          <span className="project-index">03</span>
          <div>
            <h3>MyAgent</h3>
            <span className="project-category">AI tools · In development</span>
          </div>
          <p>
            An open-source coding agent. A new version is currently in progress.
          </p>
          <ArrowUpRight size={22} />
        </Link>
        <Link href="/projects/rag-assistant/" className="project-row">
          <span className="project-index">04</span>
          <div>
            <h3>RAG Assistant</h3>
            <span className="project-category">
              Knowledge retrieval · In development
            </span>
          </div>
          <p>
            A document question-answering assistant. A new version is currently
            in progress.
          </p>
          <ArrowUpRight size={22} />
        </Link>
      </div>
    </section>
  );
}
