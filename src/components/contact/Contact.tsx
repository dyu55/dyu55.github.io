"use client";

import { useState } from "react";
import { Mail, ArrowRight, Check, AlertCircle } from "lucide-react";

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

export function Contact() {
  const [newsletterStatus, setNewsletterStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleNewsletterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = formData.get("email") as string; // eslint-disable-line @typescript-eslint/no-unused-vars

    setNewsletterStatus("loading");

    // Newsletter service placeholder - integrate ConvertKit/Buttondown in Phase 3
    // TODO: Replace with actual API call when newsletter service is integrated
    // const response = await fetch('/api/subscribe', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ email }),
    // });

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setNewsletterStatus("success");
    form.reset();
  };

  return (
    <section id="contact" className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-[var(--color-surface)]">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Newsletter Section */}
        <div className="text-center max-w-xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-bold text-[var(--color-text)] mb-3">
            Subscribe to Engineering Notes
          </h3>
          <p className="text-[var(--color-text-secondary)] mb-6">
            Deep dives on AI systems, production patterns, and lessons from building
            agentic architectures. No spam, unsubscribe anytime.
          </p>

          {newsletterStatus === "success" ? (
            <div className="flex items-center justify-center gap-2 text-green-500 p-4 bg-green-500/10 rounded-lg">
              <Check size={20} />
              <span>You&apos;re subscribed! Check your inbox for confirmation.</span>
            </div>
          ) : (
            <form
              onSubmit={handleNewsletterSubmit}
              className="flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                name="email"
                required
                placeholder="your@email.com"
                disabled={newsletterStatus === "loading"}
                className="flex-1 px-4 py-2.5 rounded-lg bg-[var(--color-background)] border border-[var(--color-border)] text-[var(--color-text)] placeholder-[var(--color-muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition-all disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={newsletterStatus === "loading"}
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg font-medium bg-[var(--color-accent)] text-[var(--color-accent-foreground)] hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {newsletterStatus === "loading" ? (
                  <span>Subscribing...</span>
                ) : (
                  <>
                    Subscribe
                    <ArrowRight size={16} />
                  </>
                )}
              </button>
            </form>
          )}

          {newsletterStatus === "error" && (
            <div className="flex items-center justify-center gap-2 text-red-500 mt-3 text-sm">
              <AlertCircle size={16} />
              <span>Something went wrong. Please try again.</span>
            </div>
          )}
        </div>

        {/* Divider */}
        <hr className="border-[var(--color-border)]" />

        {/* Contact Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-text)]">
              Work With Me
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              I&apos;m interested in AI systems engineering roles, especially at companies
              building production AI products. If you&apos;re working on interesting
              problems in this space, let&apos;s talk.
            </p>

            <div className="flex flex-col gap-3">
              <a
                href="mailto:hello@dyu55.dev"
                className="inline-flex items-center gap-3 text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
              >
                <Mail size={18} />
                <span>hello@dyu55.dev</span>
              </a>
              <a
                href="https://github.com/dyu55"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
              >
                <GitHubIcon />
                <span>github.com/dyu55</span>
              </a>
              <a
                href="https://linkedin.com/in/dyu55"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
              >
                <LinkedInIcon />
                <span>linkedin.com/in/dyu55</span>
              </a>
            </div>
          </div>

          {/* Right: Contact form */}
          <div className="p-6 rounded-xl bg-[var(--color-background)] border border-[var(--color-border)]">
            <form
              action="https://formspree.io/f/your-form-id"
              method="POST"
              className="space-y-4"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[var(--color-text-secondary)] mb-1.5"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2.5 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text)] placeholder-[var(--color-muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[var(--color-text-secondary)] mb-1.5"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2.5 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text)] placeholder-[var(--color-muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition-all"
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[var(--color-text-secondary)] mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-2.5 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text)] placeholder-[var(--color-muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition-all resize-none"
                  placeholder="What are you working on?"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium bg-[var(--color-accent)] text-[var(--color-accent-foreground)] hover:opacity-90 transition-opacity"
              >
                Send Message
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}