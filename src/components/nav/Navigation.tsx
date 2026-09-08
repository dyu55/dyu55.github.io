"use client";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { Menu, X, Sun, Moon } from "lucide-react";
const links = [
  { href: "/", label: "Home" },
  { href: "/projects/", label: "Projects" },
  { href: "/#capabilities", label: "About" },
  { href: "/blog/", label: "Writing" },
  { href: "/#contact", label: "Contact" },
];
export function Navigation() {
  const pathname = usePathname();
  const isCurrent = (href: string) =>
    href === "/"
      ? pathname === "/"
      : !href.includes("#") && pathname.startsWith(href.replace(/\/$/, ""));
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const menuButton = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    setMounted(true);
  }, []);
  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [open]);
  const isDark = mounted && resolvedTheme === "dark";
  const toggle = () => setTheme(isDark ? "light" : "dark");
  return (
    <header className="site-header">
      <div className="shell nav-inner">
        <a href="/" className="brand">
          <span className="brand-mark" aria-hidden="true">
            MY
          </span>
          Michael Yu<span className="sr-only"> — Home</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((l) => (
            <a
              href={l.href}
              key={l.href}
              aria-current={isCurrent(l.href) ? "page" : undefined}
            >
              {l.label}
            </a>
          ))}
          <button
            className="theme-button"
            onClick={toggle}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </nav>
        <button
          ref={menuButton}
          className="menu-button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav
          id="mobile-navigation"
          className="mobile-nav shell"
          aria-label="Mobile navigation"
        >
          {links.map((l) => (
            <a
              href={l.href}
              key={l.href}
              onClick={() => setOpen(false)}
              aria-current={isCurrent(l.href) ? "page" : undefined}
            >
              {l.label}
            </a>
          ))}
          <button onClick={toggle}>
            {isDark ? <Sun size={18} /> : <Moon size={18} />}Switch to{" "}
            {isDark ? "light" : "dark"} mode
          </button>
        </nav>
      )}
    </header>
  );
}
