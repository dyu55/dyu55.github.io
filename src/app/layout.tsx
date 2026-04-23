import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navigation } from "@/components/nav/Navigation";

export const metadata = {
  title: "Michael Yu — AI Systems Engineer",
  description:
    "AI Systems Engineer specializing in production AI systems, RAG pipelines, and agentic architectures. Building systems that work at scale.",
  metadataBase: new URL("https://dyu55.github.io"),
  openGraph: {
    title: "Michael Yu — AI Systems Engineer",
    description:
      "AI Systems Engineer specializing in production AI systems, RAG pipelines, and agentic architectures.",
    type: "website",
    url: "https://dyu55.github.io",
    siteName: "Michael Yu",
  },
  twitter: {
    card: "summary",
    title: "Michael Yu — AI Systems Engineer",
    description:
      "AI Systems Engineer specializing in production AI systems, RAG pipelines, and agentic architectures.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Michael Yu",
    url: "https://dyu55.github.io",
    jobTitle: "AI Systems Engineer",
    description:
      "AI Systems Engineer specializing in production AI systems, RAG pipelines, and agentic architectures.",
    sameAs: [
      "https://github.com/dyu55",
      "https://linkedin.com/in/dyu55",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#121218" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          <Navigation />
          <main className="pt-16">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}