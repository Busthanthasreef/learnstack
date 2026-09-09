import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "../../utils";

interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
}

export function CodeBlock({ code, language, className }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy code: ", err);
    }
  };

  return (
    <div className={cn("relative my-4 rounded-lg bg-zinc-950 dark:bg-zinc-900 border border-border overflow-hidden", className)}>
      <div className="flex items-center justify-between bg-zinc-900 px-4 py-2 text-xs text-zinc-400 dark:bg-zinc-950 border-b border-zinc-800">
        <span className="font-semibold uppercase tracking-wider">{language || "Code"}</span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1 hover:text-zinc-100 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400 rounded px-1"
          aria-label="Copy code"
        >
          {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
          <span>{copied ? "Copied!" : "Copy"}</span>
        </button>
      </div>
      <div className="overflow-x-auto p-4 text-sm text-zinc-50 font-mono">
        <pre>
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}
