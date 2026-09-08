import Link from "next/link";
import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="hero shell" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">
          <span className="status-dot" /> Michael Yu · Software Engineer
        </p>
        <h1 id="hero-title">
          Thoughtful
          <br />
          software.
          <br />
          <span>Built end to end.</span>
        </h1>
        <p className="hero-description">
          I turn complex ideas into useful software — from native mobile
          experiences to AI tools and the systems behind them.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            Explore my work <ArrowDown size={18} />
          </a>
          <a className="text-link" href="#contact">
            Let’s talk <ArrowUpRight size={18} />
          </a>
        </div>
        <p className="hero-footnote">
          FULL-STACK DEVELOPMENT <span>/</span> MOBILE <span>/</span> AI SYSTEMS
        </p>
      </div>
      <Link
        href="/projects/budget-smart/"
        className="hero-feature"
        aria-label="Explore Budget Smart, a native iOS budgeting app"
      >
        <div className="feature-topline">
          <span>IN FOCUS / 01</span>
          <ArrowUpRight size={22} />
        </div>
        <div className="hero-phone">
          <Image
            src="/images/budget-smart/01-home.png"
            alt="Budget Smart dashboard with remaining monthly budget, daily allowance, income and expenses."
            width={1206}
            height={2622}
            priority
            sizes="(max-width: 640px) 230px, 260px"
          />
        </div>
        <div className="feature-bottomline">
          <div>
            <strong>Budget Smart</strong>
            <span>A little more clarity. Every day.</span>
          </div>
          <span className="feature-kind">iOS APP</span>
        </div>
      </Link>
    </section>
  );
}
