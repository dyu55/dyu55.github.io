interface CalloutProps {
  type?: "info" | "warning" | "tip" | "error";
  title?: string;
  children: React.ReactNode;
}

const calloutStyles = {
  info: {
    border: "border-blue-500/30",
    bg: "bg-blue-500/10",
    icon: "💡",
    iconBg: "bg-blue-500/20",
  },
  warning: {
    border: "border-yellow-500/30",
    bg: "bg-yellow-500/10",
    icon: "⚠️",
    iconBg: "bg-yellow-500/20",
  },
  tip: {
    border: "border-green-500/30",
    bg: "bg-green-500/10",
    icon: "✨",
    iconBg: "bg-green-500/20",
  },
  error: {
    border: "border-red-500/30",
    bg: "bg-red-500/10",
    icon: "🚨",
    iconBg: "bg-red-500/20",
  },
};

export function Callout({ type = "info", title, children }: CalloutProps) {
  const styles = calloutStyles[type];
  const defaultTitles = {
    info: "Note",
    warning: "Warning",
    tip: "Tip",
    error: "Error",
  };

  return (
    <div
      className={`my-6 rounded-lg border ${styles.border} ${styles.bg} p-4`}
    >
      <div className="flex items-start gap-3">
        <span
          className={`mt-0.5 flex h-6 w-6 items-center justify-center rounded-full text-sm ${styles.iconBg}`}
        >
          {styles.icon}
        </span>
        <div className="flex-1">
          {title && (
            <p className="mb-1 font-semibold text-foreground">{title}</p>
          )}
          {!title && (
            <p className="mb-1 font-semibold text-foreground">
              {defaultTitles[type]}
            </p>
          )}
          <div className="text-sm text-muted-foreground [&>p]:mt-0">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}