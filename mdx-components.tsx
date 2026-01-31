import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import Link from "next/link";
import { CodeBlock } from '@/components/CodeBlock';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-4xl md:text-5xl font-extrabold mt-12 mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4 text-white border-b border-gray-800 pb-2">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl md:text-2xl font-semibold mt-8 mb-3 text-gray-200">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="text-lg text-gray-400 leading-relaxed mb-6">
        {children}
      </p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-outside ml-6 space-y-2 text-gray-300 mb-6">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-outside ml-6 space-y-2 text-gray-300 mb-6">
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li className="pl-2">
        {children}
      </li>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-purple-500 pl-4 py-2 my-6 italic text-gray-400 bg-white/5 rounded-r-lg">
        {children}
      </blockquote>
    ),
    code: CodeBlock,
    pre: ({ children }: { children: React.ReactNode }) => {
      // Return the children directly if it's already a SyntaxHighlighter
      return <>{children}</>;
    },
    img: (props) => (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        {...props}
        className="rounded-2xl shadow-2xl w-full border border-white/10 my-8"
        alt={props.alt || "Blog Image"}
      />
    ),
    a: ({ href, children }) => (
      <Link href={href || "#"} className="text-blue-400 hover:text-blue-300 underline underline-offset-4 transition-colors">
        {children}
      </Link>
    ),
    ...components,
  };
}
