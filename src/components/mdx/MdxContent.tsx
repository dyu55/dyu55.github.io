"use client";

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { Callout } from "@/components/mdx/Callout";
import { CodeBlock } from "@/components/mdx/CodeBlock";
import { ImageGallery } from "@/components/mdx/ImageGallery";
import { TweetEmbed } from "@/components/mdx/TweetEmbed";
import type { ComponentProps } from "react";

interface MdxContentProps {
  source: MDXRemoteSerializeResult;
}

const mdxComponents = {
  Callout,
  CodeBlock,
  ImageGallery,
  TweetEmbed,
  pre: (props: ComponentProps<"pre">) => (
    <pre {...props} className="not-prose" />
  ),
  code: (props: ComponentProps<"code">) => {
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
    return <code {...props} />;
  },
};

export function MdxContent({ source }: MdxContentProps) {
  return <MDXRemote {...source} components={mdxComponents} />;
}