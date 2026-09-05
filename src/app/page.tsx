import { HeroSection } from "@/components/sections/HeroSection";
import { TechStack } from "@/components/sections/TechStack";
import { Projects } from "@/components/sections/Projects";
import { ContactStrip } from "@/components/sections/ContactStrip";
import { getGitHubData, getLangStats } from "@/lib/github";

export default async function Home() {
  const { user, repos } = await getGitHubData();
  const langStats = getLangStats(repos);

  return (
    <main
      className="min-h-screen w-full font-[family-name:var(--font-geist-sans)]"
      style={{ background: "var(--hud-paper)", color: "var(--hud-ink)" }}
    >
      <div className="hud-grid" aria-hidden="true" />
      <div className="hud-frame" aria-hidden="true" />

      <div className="relative" style={{ zIndex: 10 }}>
        <HeroSection user={user} />
        <TechStack langStats={langStats} />
        <Projects repos={repos} />
        <ContactStrip blog={user?.blog ?? null} />

        <footer className="mx-auto w-full max-w-6xl px-8 pb-10 md:px-12">
          <div
            className="flex flex-col gap-2 border-t pt-6 sm:flex-row sm:items-center sm:justify-between"
            style={{
              borderColor: "var(--hud-line)",
              fontFamily: "var(--font-geist-mono)",
            }}
          >
            <p style={{ fontSize: "0.75rem", color: "var(--hud-ink-3)", letterSpacing: "0.12em" }}>
              SH0CKWAVEZERO.DEV · BKK
            </p>
            <p style={{ fontSize: "0.75rem", color: "var(--hud-ink-3)", letterSpacing: "0.08em" }}>
              © 2026 MIDSEELEE · BUILT WITH NEXT.JS
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}
