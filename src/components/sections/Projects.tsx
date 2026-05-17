"use client";
import { motion } from "framer-motion";

const projects = [
  {
    id: "001",
    name: "nktc-app",
    url: "https://github.com/Sh0ckWaveZero/nktc-app",
    desc: "College student support system — attendance tracking, role-based access, file storage",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Supabase", "MUI v5"],
    stars: 6,
  },
  {
    id: "002",
    name: "bun-line-t3",
    url: "https://github.com/Sh0ckWaveZero/bun-line-t3",
    desc: "LINE bot platform with attendance management, crypto tracking, and air quality monitoring",
    tags: ["Bun", "TanStack Start", "React 19", "Prisma", "TypeScript"],
    stars: 1,
  },
  {
    id: "003",
    name: "esp32-claude-buddy",
    url: "https://github.com/Sh0ckWaveZero/esp32-claude-buddy",
    desc: "ESP32 hardware agent wired to Claude API — embedded AI on a microcontroller",
    tags: ["C++", "ESP32", "Claude API", "IoT"],
    stars: 0,
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

export function Projects() {
  return (
    <section id="projects" className="w-full max-w-6xl mx-auto px-8 md:px-12 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease }}
        className="mb-10"
        style={{ borderTop: "1px solid oklch(0.20 0.01 200 / 0.5)", paddingTop: "3rem" }}
      >
        <p
          style={{
            fontFamily: "var(--font-geist-mono)",
            fontSize: "0.7rem",
            color: "oklch(0.40 0.09 185)",
            letterSpacing: "0.12em",
            marginBottom: "0.5rem",
          }}
        >
          {"> projects"}
        </p>
        <h2
          style={{
            fontFamily: "var(--font-sg)",
            fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
            fontWeight: 700,
            color: "oklch(0.82 0.008 75)",
            letterSpacing: "0.04em",
            textTransform: "uppercase",
          }}
        >
          Selected Work
        </h2>
      </motion.div>

      <div>
        {projects.map((project, idx) => (
          <motion.a
            key={project.id}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.38, delay: idx * 0.07, ease }}
            className="flex items-start gap-6 md:gap-10 py-6 group"
            style={{
              borderBottom: "1px solid oklch(0.16 0.01 200 / 0.5)",
              textDecoration: "none",
            }}
          >
            {/* Index */}
            <span
              style={{
                fontFamily: "var(--font-geist-mono)",
                fontSize: "0.68rem",
                color: "oklch(0.25 0.008 200)",
                letterSpacing: "0.08em",
                minWidth: "2.25rem",
                paddingTop: "0.15rem",
                flexShrink: 0,
                transition: "color 0.15s ease",
              }}
              className="group-hover:!text-[oklch(0.40_0.09_185)]"
            >
              {project.id}
            </span>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                <p
                  style={{
                    fontFamily: "var(--font-geist-mono)",
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    color: "oklch(0.78 0.010 200)",
                    letterSpacing: "0.02em",
                    transition: "color 0.15s ease",
                  }}
                  className="group-hover:!text-[oklch(0.88_0.005_75)]"
                >
                  {project.name}
                </p>
                {project.stars > 0 && (
                  <span
                    style={{
                      fontFamily: "var(--font-geist-mono)",
                      fontSize: "0.6rem",
                      color: "oklch(0.40 0.09 185)",
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
                  color: "oklch(0.42 0.01 200)",
                  lineHeight: 1.55,
                  marginBottom: "0.75rem",
                  maxWidth: "55ch",
                }}
              >
                {project.desc}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: "var(--font-geist-mono)",
                      fontSize: "0.6rem",
                      color: "oklch(0.38 0.01 200)",
                      letterSpacing: "0.06em",
                      padding: "0.2rem 0.55rem",
                      border: "1px solid oklch(0.20 0.01 200 / 0.55)",
                      background: "oklch(0.11 0.008 210 / 0.6)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Arrow */}
            <span
              style={{
                fontFamily: "var(--font-geist-mono)",
                fontSize: "0.75rem",
                color: "oklch(0.22 0.008 200)",
                paddingTop: "0.1rem",
                flexShrink: 0,
                transition: "color 0.15s ease, transform 0.15s ease",
              }}
              className="group-hover:!text-[oklch(0.65_0.14_185)] group-hover:translate-x-0.5 hidden sm:block"
            >
              ↗
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
