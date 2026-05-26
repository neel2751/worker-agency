"use client"

interface CodeBlockProps {
  code: string
  language?: string
}

export function CodeBlock({ code, language }: CodeBlockProps) {
  return (
    <div className="relative rounded-xl overflow-hidden border border-border/70 bg-muted/50">
      {language && (
        <div className="px-4 py-2 text-xs font-semibold text-muted-foreground border-b border-border/70 bg-muted/80">
          {language}
        </div>
      )}
      <pre className="overflow-x-auto p-4 text-sm leading-relaxed">
        <code className="text-foreground/90 font-mono">{code}</code>
      </pre>
    </div>
  )
}