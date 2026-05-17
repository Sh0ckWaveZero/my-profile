"use client";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

export function ContactStrip() {
  return (
    <section id="contact" className="w-full max-w-6xl mx-auto px-8 md:px-12 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease }}
        style={{ borderTop: "1px solid oklch(0.20 0.01 200 / 0.5)", paddingTop: "3rem" }}
      >
        <p
          style={{
            fontFamily: "var(--font-geist-mono)",
            fontSize: "0.7rem",
            color: "oklch(0.40 0.09 185)",
            letterSpacing: "0.12em",
            marginBottom: "2rem",
          }}
        >
          {"> contact"}
        </p>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <a
            href="https://github.com/Sh0ckWaveZero"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-geist-mono)",
              fontSize: "0.8rem",
              color: "oklch(0.52 0.015 200)",
              letterSpacing: "0.03em",
              textDecoration: "none",
              transition: "color 0.15s ease",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "oklch(0.78 0.012 200)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "oklch(0.52 0.015 200)")
            }
          >
            github.com/Sh0ckWaveZero ↗
          </a>

          <span
            style={{
              fontFamily: "var(--font-geist-mono)",
              fontSize: "0.65rem",
              color: "oklch(0.65 0.14 185)",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              flexShrink: 0,
            }}
          >
            ◉ OPEN TO CONTRACTS
          </span>
        </div>
      </motion.div>
    </section>
  );
}
