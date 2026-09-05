import type { GitHubRepo } from "@/lib/github";
import { selectTopRepos } from "@/lib/github";

type ProjectRow = {
  name: string;
  url: string;
  desc: string;
  tags: string[];
  stars: number;
};

/* Curated snapshot of real repos — the fallback when the GitHub API
   is unreachable at request time. */
const FALLBACK_ROWS: ProjectRow[] = [
  {
    name: "nktc-app",
    url: "https://github.com/Sh0ckWaveZero/nktc-app",
    desc: "College student support system: attendance tracking, role-based access, file storage",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Supabase", "MUI v5"],
    stars: 6,
  },
  {
    name: "bun-line-t3",
    url: "https://github.com/Sh0ckWaveZero/bun-line-t3",
    desc: "LINE bot platform with attendance management, crypto tracking, and air quality monitoring",
    tags: ["Bun", "TanStack Start", "React 19", "Prisma", "TypeScript"],
    stars: 1,
  },
  {
    name: "esp32-claude-buddy",
    url: "https://github.com/Sh0ckWaveZero/esp32-claude-buddy",
    desc: "ESP32 hardware agent wired to Claude API: embedded AI on a microcontroller",
    tags: ["C++", "ESP32", "Claude API", "IoT"],
    stars: 0,
  },
];

function toRow(repo: GitHubRepo): ProjectRow {
  const tags = [repo.language, ...(repo.topics ?? [])]
    .filter((tag): tag is string => Boolean(tag))
    .slice(0, 4);
  return {
    name: repo.name,
    url: repo.html_url,
    desc: repo.description ?? "No description yet",
    tags,
    stars: repo.stargazers_count,
  };
}

export function Projects({ repos = [] }: { repos?: GitHubRepo[] }) {
  const liveRows = selectTopRepos(repos).map(toRow);
  const rows = liveRows.length > 0 ? liveRows : FALLBACK_ROWS;

  return (
    <section id="projects" className="mx-auto w-full max-w-6xl px-8 pb-20 md:px-12">
      <header className="mb-8" style={{ borderTop: "1px solid var(--hud-line)", paddingTop: "2.5rem" }}>
        <p
          style={{
            fontFamily: "var(--font-geist-mono)",
            fontSize: "0.75rem",
            color: "var(--hud-phosphor-dim)",
            letterSpacing: "0.12em",
            marginBottom: "0.6rem",
          }}
        >
          {"> projects"}
        </p>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.2rem, 2.6vw, 1.5rem)",
            fontWeight: 600,
            color: "var(--hud-ink)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          Selected Work
        </h2>
      </header>

      <div>
        {rows.map((project, idx) => (
          <a
            key={project.url}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hud-row group flex items-start gap-6 border-b py-7 md:gap-10"
            style={{
              borderColor: "var(--hud-line-soft)",
              textDecoration: "none",
            }}
          >
            <span
              className="hud-idx"
              style={{
                fontFamily: "var(--font-geist-mono)",
                fontSize: "0.75rem",
                color: "var(--hud-ink-3)",
                letterSpacing: "0.08em",
                minWidth: "2.25rem",
                paddingTop: "0.25rem",
                flexShrink: 0,
              }}
            >
              {String(idx + 1).padStart(3, "0")}
            </span>

            <div className="min-w-0 flex-1">
              <div className="mb-1.5 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <span
                  className="hud-name"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.05rem",
                    fontWeight: 600,
                    color: "var(--hud-ink-2)",
                    letterSpacing: "0.04em",
                  }}
                >
                  {project.name}
                </span>
                {project.stars > 0 && (
                  <span
                    style={{
                      fontFamily: "var(--font-geist-mono)",
                      fontSize: "0.75rem",
                      color: "var(--hud-phosphor-dim)",
                      letterSpacing: "0.1em",
                      flexShrink: 0,
                    }}
                  >
                    ★ {project.stars}
                  </span>
                )}
              </div>
              <p
                style={{
                  fontFamily: "var(--font-geist-sans)",
                  fontSize: "0.8rem",
                  color: "var(--hud-ink-3)",
                  lineHeight: 1.6,
                  marginBottom: "0.85rem",
                  maxWidth: "58ch",
                }}
              >
                {project.desc}
              </p>
              {project.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontFamily: "var(--font-geist-mono)",
                        fontSize: "0.75rem",
                        color: "var(--hud-ink-3)",
                        letterSpacing: "0.06em",
                        padding: "0.22rem 0.6rem",
                        border: "1px solid var(--hud-line-soft)",
                        background: "var(--hud-panel)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <span
              className="hud-arrow hidden sm:block"
              style={{
                fontFamily: "var(--font-geist-mono)",
                fontSize: "0.75rem",
                color: "var(--hud-ink-3)",
                paddingTop: "0.15rem",
                flexShrink: 0,
              }}
            >
              ↗
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
