const skillGroups = [
  {
    category: "AI / Agents",
    skills: ["RAG Systems", "LLM Orchestration", "Model Context Protocol", "Grounding Verification", "Agentic AI"],
  },
  {
    category: "Languages",
    skills: ["TypeScript", "Python", "Java", "SQL"],
  },
  {
    category: "Infrastructure",
    skills: ["AWS", "Docker", "PostgreSQL", "Redis", "Ollama"],
  },
  {
    category: "Frontend",
    skills: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-[var(--color-surface)]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-text)]">
            Skills & Tools
          </h2>
          <p className="text-[var(--color-muted-foreground)] mt-2">
            The stack I use to build production systems
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="p-6 rounded-xl bg-[var(--color-background)] border border-[var(--color-border)]"
            >
              <h3 className="text-sm font-medium text-[var(--color-accent)] uppercase tracking-wider mb-4">
                {group.category}
              </h3>
              <ul className="space-y-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-sm text-[var(--color-text-secondary)]"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}