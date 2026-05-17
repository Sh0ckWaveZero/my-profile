"use client";
import { motion } from "framer-motion";

const stacks = [
  {
    code: "[FE]",
    label: "Frontend",
    color: "oklch(0.65 0.14 185)",
    skills: ["TypeScript", "React 19", "Next.js", "TanStack Start", "TanStack Router", "Tailwind CSS", "Framer Motion"],
  },
  {
    code: "[BE]",
    label: "Backend",
    color: "oklch(0.62 0.12 160)",
    skills: ["Go", "Bun", "Node.js", "Prisma", "PostgreSQL", "Supabase", "tRPC"],
  },
  {
    code: "[SYS]",
    label: "Systems",
    color: "oklch(0.60 0.10 60)",
    skills: ["Rust", "Zig", "C++", "ESP32", "BLE", "UART"],
  },
  {
    code: "[AI]",
    label: "AI / Automation",
    color: "oklch(0.58 0.10 290)",
    skills: ["Claude API", "Agent Skills", "MCP", "Prompt Engineering", "Cronjob Automation"],
  },
  {
    code: "[OPS]",
    label: "Infra / Tooling",
    color: "oklch(0.52 0.06 220)",
    skills: ["Docker", "GitHub Actions", "MinIO", "Supabase Storage", "Vercel", "Linux"],
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

export function TechStack() {
  return (
    <section id="stack" className="w-full max-w-6xl mx-auto px-8 md:px-12 py-16">
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
          {"> stack"}
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
          Technologies
        </h2>
      </motion.div>

      <div>
        {stacks.map((stack, idx) => (
          <motion.div
            key={stack.code}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.38, delay: idx * 0.05, ease }}
            className="flex flex-col sm:flex-row sm:items-baseline gap-3 sm:gap-8 py-4"
            style={{ borderBottom: "1px solid oklch(0.16 0.01 200 / 0.5)" }}
          >
            <span
              style={{
                fontFamily: "var(--font-geist-mono)",
                fontSize: "0.7rem",
                color: stack.color,
                letterSpacing: "0.1em",
                minWidth: "3.75rem",
                flexShrink: 0,
              }}
            >
              {stack.code}
            </span>
            <p
              style={{
                fontFamily: "var(--font-geist-mono)",
                fontSize: "0.78rem",
                color: "oklch(0.52 0.012 200)",
                lineHeight: 1.7,
              }}
            >
              {stack.skills.join(" · ")}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
