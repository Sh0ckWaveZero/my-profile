import { FileText } from "lucide-react";
import Link from "next/link";
import { HudClock } from "@/components/HudClock";
import type { GitHubUser } from "@/lib/github";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export function HeroSection({ user }: { user: GitHubUser | null }) {
  const infoRows: { key: string; val: string; highlight?: true }[] = [
    { key: "USER", val: user?.name ?? "MidSeeLee" },
    { key: "HANDLE", val: user ? `@${user.login}` : "@Sh0ckWaveZero" },
    { key: "ROLE", val: user?.bio?.trim() || "Full Stack Developer" },
    { key: "LOC", val: user?.location ?? "Bangkok, TH" },
    { key: "CO.", val: user?.company ?? "MEDcury" },
    { key: "STATUS", val: "◉ OPEN", highlight: true },
  ];

  const repos = user ? String(user.public_repos) : "—";
  const followers = user ? String(user.followers) : "—";
  const joinYear = user?.created_at ? new Date(user.created_at).getFullYear() : 2015;

  return (
    <section id="hero" className="flex min-h-[92dvh] w-full flex-col">
      {/* Telemetry strip */}
      <div
        className="hud-fade mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-8 pt-6 pb-4 md:px-12"
        style={{
          fontFamily: "var(--font-geist-mono)",
          borderBottom: "1px solid var(--hud-line-soft)",
        }}
      >
        <span
          className="hidden min-[420px]:block"
          style={{ fontSize: "0.75rem", letterSpacing: "0.16em", color: "var(--hud-ink-3)" }}
        >
          SYS://SH0CKWAVEZERO
        </span>
        <span
          className="hidden sm:block"
          style={{ fontSize: "0.75rem", letterSpacing: "0.16em", color: "var(--hud-ink-3)" }}
        >
          13.7563°N 100.5018°E
        </span>
        <HudClock />
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center gap-14 px-8 py-20 md:flex-row md:items-end md:gap-16 md:px-12">
        {/* Identity */}
        <div className="min-w-0 flex-1">
          <p
            className="hero-prompt"
            style={{
              fontFamily: "var(--font-geist-mono)",
              fontSize: "0.75rem",
              color: "var(--hud-phosphor-dim)",
              letterSpacing: "0.12em",
              marginBottom: "1.5rem",
            }}
          >
            {"> whoami"}
          </p>

          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(3.25rem, 12vw, 9.5rem)",
              fontWeight: 700,
              color: "var(--hud-phosphor)",
              letterSpacing: "-0.01em",
              lineHeight: 0.92,
              textTransform: "uppercase",
              overflowWrap: "anywhere",
              minWidth: 0,
            }}
          >
            {(["SH0CK", "WAVE", "ZERO"] as const).map((word, i) => (
              <span
                key={word}
                className="hud-boot"
                style={{ display: "block", "--i": i } as React.CSSProperties}
              >
                {word}
              </span>
            ))}
          </h1>

          <div
            className="hud-rise"
            style={
              {
                marginTop: "1.75rem",
                borderTop: "1px solid var(--hud-line)",
                paddingTop: "1.1rem",
                "--d": "0.65s",
              } as React.CSSProperties
            }
          >
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(0.95rem, 2.2vw, 1.3rem)",
                color: "var(--hud-ink)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontWeight: 600,
              }}
            >
              Full Stack Developer
            </p>
            <p
              style={{
                fontFamily: "var(--font-geist-mono)",
                fontSize: "0.75rem",
                color: "var(--hud-ink-3)",
                letterSpacing: "0.14em",
                marginTop: "0.55rem",
              }}
            >
              BKK · UTC+7 · SINCE {joinYear}
            </p>
          </div>

          <div
            className="hud-rise mt-9 flex flex-wrap items-center gap-3"
            style={{ "--d": "0.8s" } as React.CSSProperties}
          >
            <Link href="/blog" className="hud-btn">
              <FileText size={12} aria-hidden />
              /blog
            </Link>
            <a
              href="https://github.com/Sh0ckWaveZero"
              target="_blank"
              rel="noopener noreferrer"
              className="hud-btn hud-btn--ghost"
            >
              <GithubIcon className="h-3 w-3" />
              github ↗
            </a>
          </div>
        </div>

        {/* System readout — live from GitHub profile */}
        <aside
          className="hud-slide hud-panel w-full shrink-0 md:w-72"
          style={{ fontFamily: "var(--font-geist-mono)", padding: "1.25rem 1.35rem" }}
        >
          <p
            style={{
              fontSize: "0.75rem",
              color: "var(--hud-ink-3)",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              marginBottom: "1rem",
              paddingBottom: "0.7rem",
              borderBottom: "1px solid var(--hud-line-soft)",
            }}
          >
            SYSTEM INFO
          </p>

          <div className="space-y-2">
            {infoRows.map(({ key, val, highlight }) => (
              <div key={key} className="flex items-start gap-3">
                <span
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--hud-ink-3)",
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
                    fontSize: "0.75rem",
                    color: highlight ? "var(--hud-signal)" : "var(--hud-ink-2)",
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
              marginTop: "1rem",
              paddingTop: "0.7rem",
              borderTop: "1px solid var(--hud-line-soft)",
              display: "flex",
              justifyContent: "space-between",
              gap: "1rem",
              fontVariantNumeric: "tabular-nums",
            }}
          >
            <span style={{ fontSize: "0.75rem", color: "var(--hud-ink-3)", letterSpacing: "0.1em" }}>
              REPOS {repos}
            </span>
            <span style={{ fontSize: "0.75rem", color: "var(--hud-ink-3)", letterSpacing: "0.1em" }}>
              FOLLOWERS {followers}
            </span>
          </div>
        </aside>
      </div>

      {/* Fold divider */}
      <div className="mx-auto w-full max-w-6xl px-8 pb-5 md:px-12">
        <div style={{ borderBottom: "2px solid var(--hud-line)" }} />
      </div>
    </section>
  );
}
