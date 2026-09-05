export function ContactStrip({ blog = null }: { blog?: string | null }) {
  return (
    <section id="contact" className="mx-auto w-full max-w-6xl px-8 pb-24 md:px-12">
      <div style={{ borderTop: "1px solid var(--hud-line)", paddingTop: "2.5rem" }}>
        <p
          style={{
            fontFamily: "var(--font-geist-mono)",
            fontSize: "0.75rem",
            color: "var(--hud-phosphor-dim)",
            letterSpacing: "0.12em",
            marginBottom: "1.75rem",
          }}
        >
          {"> contact"}
        </p>

        <a
          href="https://github.com/Sh0ckWaveZero"
          target="_blank"
          rel="noopener noreferrer"
          className="hud-link-xl"
        >
          github.com/Sh0ckWaveZero
          <span className="hud-arrow-xl" aria-hidden="true">
            ↗
          </span>
        </a>

        <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span
              style={{
                fontFamily: "var(--font-geist-mono)",
                fontSize: "0.75rem",
                color: "var(--hud-ink-3)",
                letterSpacing: "0.16em",
              }}
            >
              CHAN://GITHUB
            </span>
            {blog && (
              <a href={blog} target="_blank" rel="noopener noreferrer" className="hud-channel">
                {blog.replace(/^https?:\/\//, "")} ↗
              </a>
            )}
          </div>
          <span
            style={{
              fontFamily: "var(--font-geist-mono)",
              fontSize: "0.75rem",
              color: "var(--hud-signal)",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
            }}
          >
            ◉ OPEN TO CONTRACTS
          </span>
        </div>
      </div>
    </section>
  );
}
