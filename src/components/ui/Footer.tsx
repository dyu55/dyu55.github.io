import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-[var(--color-border)]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo and copyright */}
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="font-semibold text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors"
            >
              Michael Yu
            </Link>
            <span className="text-sm text-[var(--color-muted-foreground)]">
              © {currentYear}
            </span>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-6">
            <Link
              href="/blog"
              className="text-sm text-[var(--color-muted-foreground)] hover:text-[var(--color-text)] transition-colors"
            >
              Writing
            </Link>
            <a
              href="https://github.com/dyu55"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--color-muted-foreground)] hover:text-[var(--color-text)] transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/michael-yu-614181388"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--color-muted-foreground)] hover:text-[var(--color-text)] transition-colors"
            >
              LinkedIn
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}