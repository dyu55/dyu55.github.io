import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function HeroSection() {
  return (
    <>
      <section className="apple-hero" aria-labelledby="hero-title">
        <div className="apple-hero-inner shell">
          <p className="apple-kicker">Michael Yu · Software engineer</p>
          <h1 id="hero-title">Software that feels simple.</h1>
          <p className="apple-hero-copy">I design and build native apps, full-stack products, and thoughtful tools for working with AI.</p>
          <div className="apple-hero-actions">
            <Link className="button button-primary" href="/projects/">Explore the work <ArrowUpRight size={17} /></Link>
            <a className="apple-text-link" href="#contact">Get in touch <ArrowUpRight size={17} /></a>
          </div>
        </div>
      </section>
      <section className="apple-signal" aria-label="What I build">
        <div className="shell apple-signal-grid">
          <p className="apple-signal-label">A considered approach</p>
          <div><p className="apple-signal-title">Clear by design.</p><p className="apple-signal-copy">From the first screen to the last API, every detail has a reason to be there.</p></div>
          <div className="apple-signal-list"><span>Native experiences</span><span>Full-stack systems</span><span>AI with boundaries</span></div>
        </div>
      </section>
    </>
  );
}
