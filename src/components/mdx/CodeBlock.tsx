interface CodeBlockProps {
  lang?: string;
  filename?: string;
  children: string;
}

export function CodeBlock({
  lang = "text",
  filename,
  children,
}: CodeBlockProps) {
  return (
    <div className="my-6 overflow-hidden rounded-lg border border-border/50">
      <div className="flex items-center justify-between border-b border-border/50 bg-card px-4 py-2">
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-muted-foreground">
            {lang.toUpperCase()}
          </span>
          {filename && (
            <>
              <span className="text-border/50">|</span>
              <span className="text-xs text-muted-foreground">{filename}</span>
            </>
          )}
        </div>
        <button
          onClick={() => navigator.clipboard.writeText(children)}
          className="rounded px-2 py-1 text-xs text-muted-foreground hover:bg-accent hover:text-foreground"
          title="Copy code"
        >
          Copy
        </button>
      </div>
      <pre className="bg-card p-4 overflow-x-auto">
        <code className="text-sm font-mono text-foreground">{children}</code>
      </pre>
    </div>
  );
}