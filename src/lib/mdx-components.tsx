import { Callout } from "@/components/mdx/Callout";
import { CodeBlock } from "@/components/mdx/CodeBlock";
import { ImageGallery } from "@/components/mdx/ImageGallery";
import { TweetEmbed } from "@/components/mdx/TweetEmbed";
import type { ComponentProps } from "react";

export const mdxComponents = {
  Callout,
  CodeBlock,
  ImageGallery,
  TweetEmbed,
  // Override default HTML elements with styled versions
  pre: (props: ComponentProps<"pre">) => (
    <pre {...props} className="not-prose" />
  ),
  code: (props: ComponentProps<"code">) => {
    // Inline code (not inside pre)
    if (!props.children?.toString().includes("\n")) {
      return (
        <code
          {...props}
          className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm"
        >
          {props.children}
        </code>
      );
    }
    // Code blocks are handled by CodeBlock component when using
    // ``` language syntax in MDX
    return <code {...props} />;
  },
};