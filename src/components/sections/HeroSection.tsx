"use client";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import Link from "next/link";

const MotionLink = motion.create(Link);
const ease = [0.16, 1, 0.3, 1] as const;

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const INFO_ROWS: { key: string; val: string; highlight?: true }[] = [
  { key: "USER", val: "MidSeeLee" },
  { key: "HANDLE", val: "@Sh0ckWaveZero" },
  { key: "ROLE", val: "Full Stack Developer" },
  { key: "LOC", val: "Bangkok, TH" },
  { key: "CO.", val: "MEDcury" },
  { key: "STATUS", val: "◉ OPEN", highlight: true },
];

export function HeroSection({
  initialStats,
}: {
  initialStats: { public_repos: number; followers: number } | null;
}) {
  const repos = initialStats?.public_repos ?? 148;

  return (
    <section id="hero" className="w-full max-w-6xl mx-auto px-8 md:px-12 pt-24 pb-20">
      {/* Prompt — CSS typewriter, no Framer Motion needed */}
      <p
        className="hero-prompt"
        style={{
          fontFamily: "var(--font-geist-mono)",
          fontSize: "0.7rem",
          color: "oklch(0.40 0.09 185)",
          letterSpacing: "0.12em",
          marginBottom: "1.75rem",
        }}
      >
        {"> whoami"}
      </p>

      <div className="flex flex-col md:flex-row items-start gap-12 md:gap-16">
        {/* Left: name + role + CTAs */}
        <div className="flex-1 min-w-0">
          <h1
            style={{
              fontFamily: "var(--font-geist-mono)",
              fontSize: "clamp(3rem, 10vw, 7rem)",
              fontWeight: 700,
              color: "oklch(0.65 0.14 185)",
              letterSpacing: "-0.03em",
              lineHeight: "0.88",
              textTransform: "uppercase",
            }}
          >
            {(["SH0CK", "WAVE", "ZERO"] as const).map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, x: -16, filter: "brightness(3) blur(2px)" }}
                animate={{ opacity: 1, x: 0, filter: "brightness(1) blur(0px)" }}
                transition={{
                  duration: 0.55,
                  delay: 0.28 + i * 0.14,
                  ease,
                  filter: { duration: 0.35, delay: 0.28 + i * 0.14, ease: "easeOut" },
                }}
                style={{ display: "block" }}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.75, ease }}
            style={{
              marginTop: "1.5rem",
              borderTop: "1px solid oklch(0.25 0.06 185 / 0.3)",
              paddingTop: "1rem",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-sg)",
                fontSize: "clamp(0.9rem, 2.2vw, 1.2rem)",
                color: "oklch(0.68 0.015 200)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                fontWeight: 600,
              }}
            >
              Full Stack Developer
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.92, ease }}
            className="flex items-center flex-wrap gap-3 mt-8"
          >
            <MotionLink
              href="/blog"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.12 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-widest"
              style={{
                fontFamily: "var(--font-geist-mono)",
                border: "1px solid oklch(0.65 0.14 185 / 0.5)",
                color: "oklch(0.65 0.14 185)",
                background: "transparent",
                transition: "background 0.15s ease, color 0.15s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "oklch(0.65 0.14 185)";
                (e.currentTarget as HTMLElement).style.color = "oklch(0.08 0.008 210)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
                (e.currentTarget as HTMLElement).style.color = "oklch(0.65 0.14 185)";
              }}
            >
              <FileText size={12} />
              /blog
            </MotionLink>

            <motion.a
              href="https://github.com/Sh0ckWaveZero"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.12 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-widest"
              style={{
                fontFamily: "var(--font-geist-mono)",
                border: "1px solid oklch(0.28 0.01 200 / 0.6)",
                color: "oklch(0.52 0.015 200)",
                background: "transparent",
                transition: "border-color 0.15s ease, color 0.15s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "oklch(0.78 0.012 200)";
                (e.currentTarget as HTMLElement).style.borderColor = "oklch(0.52 0.015 200 / 0.8)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "oklch(0.52 0.015 200)";
                (e.currentTarget as HTMLElement).style.borderColor = "oklch(0.28 0.01 200 / 0.6)";
              }}
            >
              <GithubIcon className="w-3 h-3" />
              github ↗
            </motion.a>
          </motion.div>
        </div>

        {/* Right: system info panel */}
        <motion.aside
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.45, ease }}
          className="w-full md:w-64 shrink-0"
          style={{
            fontFamily: "var(--font-geist-mono)",
            border: "1px solid oklch(0.20 0.01 200 / 0.55)",
            padding: "1.125rem 1.25rem",
          }}
        >
          <p
            style={{
              fontSize: "0.58rem",
              color: "oklch(0.32 0.01 200)",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: "0.875rem",
              paddingBottom: "0.625rem",
              borderBottom: "1px solid oklch(0.18 0.01 200 / 0.5)",
            }}
          >
            SYSTEM INFO
          </p>

          <div className="space-y-2">
            {INFO_ROWS.map(({ key, val, highlight }) => (
              <div key={key} className="flex items-start gap-3">
                <span
                  style={{
                    fontSize: "0.58rem",
                    color: "oklch(0.30 0.01 200)",
                    letterSpacing: "0.1em",
                    minWidth: "3.75rem",
                    paddingTop: "0.06rem",
                    flexShrink: 0,
                  }}
                >
                  {key}
                </span>
                <span
                  style={{
                    fontSize: "0.68rem",
                    color: highlight
                      ? "oklch(0.65 0.14 185)"
                      : "oklch(0.70 0.012 200)",
                    letterSpacing: "0.02em",
                  }}
                >
                  {val}
                </span>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: "0.875rem",
              paddingTop: "0.625rem",
              borderTop: "1px solid oklch(0.18 0.01 200 / 0.4)",
            }}
          >
            <p
              style={{
                fontSize: "0.58rem",
                color: "oklch(0.28 0.01 200)",
                letterSpacing: "0.08em",
              }}
            >
              {repos} repos · since 2015
            </p>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
