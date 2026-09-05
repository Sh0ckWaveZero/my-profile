const stacks = [
  {
    code: "[FE]",
    label: "Frontend",
    skills: ["TypeScript", "React 19", "Next.js", "TanStack Start", "TanStack Router", "Tailwind CSS", "Framer Motion"],
  },
  {
    code: "[BE]",
    label: "Backend",
    skills: ["Go", "Bun", "Node.js", "Prisma", "PostgreSQL", "Supabase", "tRPC"],
  },
  {
    code: "[SYS]",
    label: "Systems",
    skills: ["Rust", "Zig", "C++", "ESP32", "BLE", "UART"],
  },
  {
    code: "[AI]",
    label: "AI / Automation",
    skills: ["Claude API", "Agent Skills", "MCP", "Prompt Engineering", "Cronjob Automation"],
  },
  {
    code: "[OPS]",
    label: "Infra / Tooling",
    skills: ["Docker", "GitHub Actions", "MinIO", "Supabase Storage", "Vercel", "Linux"],
  },
];

export function TechStack({ langStats = [] }: { langStats?: string[] }) {
  return (
    <section id="stack" className="mx-auto w-full max-w-6xl px-8 py-20 md:px-12">
      <header className="mb-10" style={{ borderTop: "1px solid var(--hud-line)", paddingTop: "2.5rem" }}>
        <p
          style={{
            fontFamily: "var(--font-geist-mono)",
            fontSize: "0.75rem",
            color: "var(--hud-phosphor-dim)",
            letterSpacing: "0.12em",
            marginBottom: "0.6rem",
          }}
        >
          {"> stack"}
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
          Technologies
        </h2>
        {langStats.length > 0 && (
          <p
            style={{
              fontFamily: "var(--font-geist-mono)",
              fontSize: "0.75rem",
              color: "var(--hud-ink-3)",
              letterSpacing: "0.12em",
              marginTop: "0.8rem",
              fontVariantNumeric: "tabular-nums",
            }}
          >
            LANG TELEMETRY · {langStats.join(" · ")}
          </p>
        )}
      </header>

      <ul className="m-0 list-none p-0">
        {stacks.map((stack) => (
          <li
            key={stack.code}
            className="hud-row grid gap-2 border-b py-5 sm:grid-cols-[4.5rem_9.5rem_1fr] sm:items-baseline sm:gap-6"
            style={{ borderColor: "var(--hud-line-soft)" }}
          >
            <span
              style={{
                fontFamily: "var(--font-geist-mono)",
                fontSize: "0.75rem",
                color: "var(--hud-phosphor-dim)",
                letterSpacing: "0.1em",
              }}
            >
              {stack.code}
            </span>
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "0.82rem",
                fontWeight: 500,
                color: "var(--hud-ink-2)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              {stack.label}
            </span>
            <p
              style={{
                fontFamily: "var(--font-geist-mono)",
                fontSize: "0.76rem",
                color: "var(--hud-ink-3)",
                lineHeight: 1.75,
              }}
            >
              {stack.skills.join(" · ")}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
