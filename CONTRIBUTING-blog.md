# Writing for the Blog

This guide explains how to use MDX components in blog posts.

## Frontmatter

Every blog post should have this frontmatter:

```yaml
---
title: "Your Post Title"
date: "2026-04-22"
tags: ["AI", "Systems"]
excerpt: "A brief description for the blog listing page and SEO"
coverImage: "/images/your-post-cover.jpg"
---
```

## MDX Components

### Callout

Use callouts to highlight important information:

```jsx
<Callout type="info">
  This is an informational note.
</Callout>

<Callout type="warning" title="Custom Title">
  This is a warning with a custom title.
</Callout>

<Callout type="tip">
  This is a helpful tip.
</Callout>

<Callout type="error">
  This is an error alert.
</Callout>
```

Types: `info`, `warning`, `tip`, `error`

### CodeBlock

Use CodeBlock for syntax-highlighted code with copy button:

```jsx
<CodeBlock lang="typescript" filename="example.ts">
{`const greeting = "hello world";
console.log(greeting);`}
</CodeBlock>
```

Props:
- `lang` - Language identifier (e.g., "typescript", "python", "bash")
- `filename` - Optional filename to display

### ImageGallery

Use ImageGallery for galleries with navigation dots:

```jsx
<ImageGallery images={[
  { src: "/images/screenshot1.png", alt: "Dashboard view", caption: "Main dashboard" },
  { src: "/images/screenshot2.png", alt: "Settings page" }
]} />
```

Props:
- `images` - Array of `{ src, alt, caption? }` objects

### TweetEmbed

Embed tweets by their ID:

```jsx
<TweetEmbed tweetId="1234567890" />
```

Get the tweet ID from the tweet URL: `https://twitter.com/x/status/1234567890`

## Tips

1. **Keep it scannable** - Use headings, lists, and code blocks to break up text
2. **Code examples** - Include runnable code where possible
3. **Images** - Use real screenshots from your projects
4. **Links** - Link to documentation, GitHub repos, and related posts
