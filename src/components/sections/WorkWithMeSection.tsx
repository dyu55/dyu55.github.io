"use client";

import { useEffect, useState } from "react";

export function WorkWithMeSection() {
  const [mounted, setMounted] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // Formspree integration for static site
    const formspreeUrl =
      "https://formspree.io/f/xwkgpqpv";

    try {
      const response = await fetch(formspreeUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setSubmitted(true);
      }
    } catch {
      // Handle error silently - user can try again
    }
  };

  return (
    <section
      id="contact"
      className="py-[var(--space-section)] px-4 sm:px-6 lg:px-8 bg-[var(--color-surface)]"
    >
      <div className="max-w-2xl mx-auto text-center">
        <div
          className={`transition-all duration-500 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-text)] mb-4">
            Get In Touch
          </h2>

          <p className="text-[var(--color-text-secondary)] mb-8">
            Building AI systems that need someone who actually understands the
            stack? I&apos;m currently open to opportunities in AI/ML engineering,
            agentic systems, and production infrastructure.
          </p>

          {/* Contact options */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="mailto:dyu55@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium bg-[var(--color-accent)] text-[var(--color-accent-foreground)] hover:opacity-90 transition-opacity"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Email me
            </a>
            <a
              href="https://linkedin.com/in/dyu55"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium border border-[var(--color-border)] text-[var(--color-text)] hover:bg-[var(--color-background)] transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </div>

          {/* Divider */}
          <div className="relative my-12">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[var(--color-border)]" />
            </div>
            <div className="relative flex justify-center">
              <span className="px-4 text-sm text-[var(--color-muted-foreground)] bg-[var(--color-surface)]">
                or subscribe for updates
              </span>
            </div>
          </div>

          {/* Newsletter form */}
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 px-4 py-3 rounded-lg bg-[var(--color-background)] border border-[var(--color-border)] text-[var(--color-text)] placeholder:text-[var(--color-muted-foreground)] focus:outline-none focus:border-[var(--color-accent)] transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-lg font-medium bg-[var(--color-accent)] text-[var(--color-accent-foreground)] hover:opacity-90 transition-opacity whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          ) : (
            <p className="text-[var(--color-accent)]">
              Thanks! I&apos;ll be in touch.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}