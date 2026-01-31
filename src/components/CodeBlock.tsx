'use client';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export function CodeBlock({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  const match = /language-(\w+)/.exec(className || '');
  const language = match ? match[1] : '';

  // If it's a code block (has language), use SyntaxHighlighter
  if (language) {
    return (
      <SyntaxHighlighter
        style={vscDarkPlus}
        language={language}
        PreTag="div"
        className="rounded-xl !my-6"
        customStyle={{
          padding: '1.5rem',
          borderRadius: '0.75rem',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    );
  }

  // Inline code
  return (
    <code className="bg-gray-800 text-gray-200 rounded px-1.5 py-0.5 text-sm font-mono">
      {children}
    </code>
  );
}
