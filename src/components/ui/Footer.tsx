import { profile } from "@/data/profile";
export function Footer() {
  return (
    <footer className="site-footer shell">
      <p>
        <strong>Michael Yu</strong> <span className="mx-3">/</span> ©{" "}
        {new Date().getFullYear()}
      </p>
      <nav aria-label="Footer navigation">
        <a href="/projects/">Projects</a>
        <a href="/blog/">Writing</a>
        <a href={profile.github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="#main-content">Back to top ↑</a>
      </nav>
    </footer>
  );
}
