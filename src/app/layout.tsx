import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navigation } from "@/components/nav/Navigation";

export const metadata = {
  title: "Michael Yu — Software Engineer",
  description:
    "Software engineer building native mobile apps, full-stack products and AI tools.",
  metadataBase: new URL("https://dyu55.github.io"),
  openGraph: {
    title: "Michael Yu — Software Engineer",
    description:
      "Native mobile apps, full-stack products and AI tools by Michael Yu.",
    type: "website",
    url: "https://dyu55.github.io",
    siteName: "Michael Yu",
  },
  twitter: {
    card: "summary",
    title: "Michael Yu — Software Engineer",
    description:
      "Native mobile apps, full-stack products and AI tools by Michael Yu.",
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
    jobTitle: "Software Engineer",
    description:
      "Native mobile apps, full-stack products and AI tools by Michael Yu.",
    sameAs: [
      "https://github.com/dyu55",
      "https://www.linkedin.com/in/michael-yu-614181388",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="theme-color"
          content="#101d2a"
          media="(prefers-color-scheme: dark)"
        />
        <meta
          name="theme-color"
          content="#f6f9fc"
          media="(prefers-color-scheme: light)"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          <a className="skip-link" href="#main-content">
            Skip to content
          </a>
          <Navigation />
          <main id="main-content">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
