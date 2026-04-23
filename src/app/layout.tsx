import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navigation } from "@/components/nav/Navigation";

export const metadata = {
  title: "Michael Yu — AI Systems Engineer",
  description:
    "AI Systems Engineer specializing in production AI systems, RAG pipelines, and agentic architectures. Building systems that work at scale.",
  openGraph: {
    title: "Michael Yu — AI Systems Engineer",
    description:
      "AI Systems Engineer specializing in production AI systems, RAG pipelines, and agentic architectures.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#121218" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
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