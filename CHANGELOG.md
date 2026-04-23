# Changelog

All notable changes to this project will be documented in this file.

## [0.1.0] - 2026-04-23

### Added
- Next.js 14 portfolio with 5 sections (Hero, Production AI Systems, How I Build Them, Engineering Notes, Work With Me)
- MDX blog system with 3 initial posts (MCP Deep Dive, LLM Orchestration Patterns, Building a Production RAG System)
- Project detail pages for 4 projects with generateStaticParams
- SEO infrastructure (sitemap.xml, robots.txt, OG tags, JSON-LD Person schema)
- MDX component library (Callout, CodeBlock)
- Dark mode toggle with system preference detection and localStorage persistence
- Mobile navigation (hamburger menu → slide-out drawer)
- Animation polish (entrance animations, hover micro-interactions, reduced-motion support)
- Custom 404 page with navigation links
- Contact section with newsletter signup and social links
- Strict CSP via meta tag

### Fixed
- MDX compilation errors in blog posts
- ESLint unused variable warning in Contact.tsx

### Infrastructure
- Playwright E2E smoke tests (8 passing)
- GitHub Pages static export deployment

