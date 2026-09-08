import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="home-hero shell" aria-labelledby="hero-title">
      <div className="home-introduction">
        <p className="eyebrow">
          <span className="status-dot" /> Software engineer · Curious builder
        </p>
        <h1 id="hero-title">
          Hi, I’m
          <br />
          <span>Michael Yu.</span>
        </h1>
        <p className="home-signature">Thoughtful software. Built end to end.</p>
      </div>
      <div className="home-summary">
        <p className="eyebrow">A little about me</p>
        <p className="home-summary-lead">
          I make complex ideas
          <br />
          feel simple to use.
        </p>
        <p>
          I build native apps, full-stack products and AI tools, with as much
          care for the experience as the systems behind it.
        </p>
        <div className="hero-actions">
          <Link className="button button-primary" href="/projects/">
            Explore my projects <ArrowUpRight size={18} />
          </Link>
          <a className="text-link" href="#contact">
            Let’s talk <ArrowUpRight size={18} />
          </a>
        </div>
        <p className="home-availability">
          Open to software engineering opportunities.
        </p>
      </div>
      <div className="home-focus">
        <span>THE WORK I ENJOY</span>
        <p>
          Mobile experiences <span>/</span> Full-stack development{" "}
          <span>/</span> AI systems
        </p>
      </div>
    </section>
  );
}
