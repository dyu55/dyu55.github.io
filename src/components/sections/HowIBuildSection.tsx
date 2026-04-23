"use client";

import { useEffect, useState } from "react";

const capabilities = [
  {
    title: "Agentic Systems",
    description:
      "Building AI agents that plan, act, observe, and reflect. MCP integration for standardized tool use.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "RAG Pipelines",
    description:
      "Production RAG with hybrid search, reranking, and grounding verification. 10k+ queries/day.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
        />
      </svg>
    ),
  },
  {
    title: "Infrastructure",
    description:
      "Deploying AI systems to production with monitoring, observability, and graceful degradation.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
        />
      </svg>
    ),
  },
];

const stack = [
  { name: "TypeScript", category: "Language" },
  { name: "Next.js", category: "Framework" },
  { name: "Python", category: "Language" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Redis", category: "Cache" },
  { name: "Docker", category: "DevOps" },
  { name: "LangChain", category: "AI/ML" },
  { name: "Claude/GPT", category: "AI/ML" },
];

export function HowIBuildSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="capabilities"
      className="py-[var(--space-section)] px-4 sm:px-6 lg:px-8 bg-[var(--color-surface)]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-text)] mb-4">
            How I Build Them
          </h2>
          <p className="text-[var(--color-text-secondary)] max-w-2xl">
            From agentic loops to production infrastructure — the full stack of
            modern AI systems.
          </p>
        </div>

        {/* Capabilities grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {capabilities.map((cap, index) => (
            <div
              key={cap.title}
              className="p-6 rounded-xl bg-[var(--color-background)] border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-all duration-300"
              style={{
                transitionDelay: `${index * 50}ms`,
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(20px)",
              }}
            >
              <div className="w-12 h-12 rounded-lg bg-[var(--color-accent)]/10 text-[var(--color-accent)] flex items-center justify-center mb-4">
                {cap.icon}
              </div>
              <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">
                {cap.title}
              </h3>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                {cap.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stack */}
        <div
          className={`transition-all duration-500 delay-300 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <h3 className="text-sm font-medium text-[var(--color-muted-foreground)] uppercase tracking-wider mb-4">
            Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {stack.map((item) => (
              <span
                key={item.name}
                className="px-3 py-1.5 text-sm rounded-lg bg-[var(--color-background)] border border-[var(--color-border)] text-[var(--color-text)] hover:border-[var(--color-accent)] transition-colors"
              >
                {item.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}