# Michael Yu — Portfolio

Personal portfolio at **https://dyu55.github.io/**. Built with Next.js 14, TypeScript and Tailwind CSS; statically exported for the existing GitHub Pages workflow.

## Develop

```sh
npm ci
npm run dev
```

Development files use `.next-dev`; production builds use `.next`, so a build does not overwrite the active preview.

## Validate and publish

```sh
npm run build
```

The build checks TypeScript and ESLint, exports every route into `out/`, then creates the Pagefind article index. A push to `main` triggers `.github/workflows/deploy.yml`. GitHub Pages serves the exported site with directory-style URLs. The existing Playwright smoke suite is available through `npm test` when browser QA is requested.

## Edit the content

- `src/data/profile.ts`: public contact links.
- `src/data/projects.ts`: project names, concise descriptions and repository links.
- `src/data/project-details.ts`: case studies, screenshot captions and deferred projects.
- `public/images/`: sixteen original screenshots across Budget Smart, MyAgent and RAG Assistant. Screenshot context and demo boundaries are documented on each project page.
- `src/components/sections/`: homepage sections.
- `content/blog/`: existing MDX articles.

Budget Smart is presented as the rebuilt native SwiftUI app. SoleMate is identified as a team course project with simulated checkout. MyAgent and RAG Assistant include their completed v1.0 case studies and all nine supplied desktop/mobile screenshots. No unverified traffic, user-count, performance or benchmark claims are displayed.

The existing Formspree subscription destination is retained. Sending a real subscription is not part of build validation. Full-resolution screenshots open in a separate tab; no image-generation assets or external font requests are required.
