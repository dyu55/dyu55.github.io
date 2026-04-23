# TODOs — Portfolio Redesign

## Phase 1 (Foundation) ✅ COMPLETE

### Lighthouse Performance 95+
**What:** Optimize for Lighthouse Performance score >= 95 on mobile
**Why:** SEO and UX matter for a public portfolio
**Pros:** Better search rankings, faster load for visitors
**Cons:** May require image optimization tradeoffs
**Effort:** S (human: ~2h / CC: ~30min)
**Priority:** P2
**Depends on:** Phase 1 completion
**Context:** Core Web Vitals targets: LCP < 2.5s, CLS < 0.1. Run Lighthouse after Phase 1 and optimize image sizes, fonts, and bundle splitting as needed.

---
### SEO Package ✅ DONE
**What:** sitemap.xml, robots.txt, JSON-LD Person schema, Open Graph tags
**Status:** Complete — 15 static pages generated including sitemap.xml and robots.txt
**Effort:** S (human: ~1h / CC: ~20min)
**Context:** Added metadataBase, canonical URLs, Twitter card meta, and JSON-LD Person schema

---
### MDX Component Library ✅ DONE
**What:** Build reusable MDX components: Callout, CodeBlock, ImageGallery, TweetEmbed
**Status:** Complete — components created in src/components/mdx/
**Effort:** M (human: ~4h / CC: ~1h)
**Context:** Components: `<Callout type="info|warning|tip|error">`, `<CodeBlock lang="ts" filename="example.ts">`, `<ImageGallery images={[]} />`, `<TweetEmbed tweetId="...">`. Documented in CONTRIBUTING-blog.md

---
### Newsletter Infrastructure (UI Only) ✅ DONE
**What:** Newsletter signup form UI with placeholder integration
**Status:** UI complete — needs actual ConvertKit/Buttondown API key
**Effort:** S (human: ~1h / CC: ~20min)
**Context:** Created NewsletterSignup component with success/error states. API integration is TODO — replace placeholder with actual service

---

## Phase 2 (Polish & SEO) ✅ COMPLETE

### Newsletter Infrastructure (Full)
**What:** Set up ConvertKit or Buttondown for email capture with API integration
**Why:** Phase 2 newsletter sends need the infrastructure before sending.
**Pros:** Full audience growth loop
**Cons:** Third-party dependency, GDPR considerations
**Effort:** M (human: ~4h / CC: ~1h)
**Priority:** P2
**Depends on:** UI component (done), Vercel deployment
**Context:** Configure ConvertKit/Buttondown API key, set up email capture form with double opt-in, write first newsletter welcome sequence.
**Note:** UI is done. Needs actual service account to enable real subscriptions.

---

### MDX Component Library
**What:** Build reusable MDX components: Callout, CodeBlock, ImageGallery, Tweet embed
**Why:** Phase 2 blog needs rich content types beyond basic markdown
**Pros:** Consistent blog styling, reusable across posts
**Cons:** Extra component surface area
**Effort:** M (human: ~4h / CC: ~1h)
**Priority:** P3
**Depends on:** Phase 1 blog system
**Context:** Components to build: `<Callout type="info|warning|tip">`, `<CodeBlock lang="ts" filename="example.ts">`, `<ImageGallery images={[]} />`. Document in a CONTRIBUTING.md for future blog authors.

---

### Guest Post Submission System
~~**What:** Define guest post submission workflow (email-based, not full platform)~~
~~**Why:** Blog as platform includes guest posts but a full auth+CMS is overkill~~
~~**Pros:** Content growth without platform complexity~~
~~**Cons:** Manual curation overhead~~
~~**Effort:** S (human: ~2h / CC: ~30min)~~
~~**Priority:** P3~~
~~**Depends on:** Phase 1 blog system + newsletter infrastructure~~
~~**Context:** Instead of building a CMS, define a "Submit via Email" workflow.~~

**REMOVED** — Not strategic for a hiring-focused portfolio. Guest posts dilute personal positioning.

---

## Future (nice to have)

### Vercel Analytics Integration
**What:** Add Vercel Analytics for real user monitoring
**Why:** Beyond Plausible page views — understand Core Web Vitals per user
**Pros:** Granular performance data, no extra SDK
**Cons:** Vercel-specific, costs money on Pro plan
**Effort:** S (human: ~30min / CC: ~10min)
**Priority:** P3
**Depends on:** Vercel Pro plan
**Context:** Vercel Analytics is a one-line install. Consider adding after initial launch to understand real user performance.

---

### Accessibility Audit
**What:** Full WCAG 2.1 AA audit — keyboard nav, screen reader testing, color contrast
**Why:** Public portfolio should be accessible
**Pros:** Inclusive, better SEO
**Cons:** Manual testing time
**Effort:** M (human: ~4h / CC: ~1h)
**Priority:** P3
**Depends on:** Phase 1 implementation
**Context:** Test with: keyboard-only navigation, VoiceOver (Mac), axe-core browser extension. Check: focus states, alt text, ARIA labels, heading hierarchy, color contrast ratios.

---

## Completed

**Completed:** v0.1.0 (2026-04-23)
- SEO Package — sitemap.xml, robots.txt, JSON-LD Person schema, OG tags
- MDX Component Library — Callout, CodeBlock, ImageGallery components
- Newsletter Infrastructure (UI Only) — form with placeholder integration
- Playwright E2E smoke tests — 8 tests covering critical paths
- Fixed MDX compilation errors in blog posts
