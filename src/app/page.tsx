import { HeroSection } from "@/components/sections/HeroSection";
import { TechStack } from "@/components/sections/TechStack";
import { Projects } from "@/components/sections/Projects";
import { ContactStrip } from "@/components/sections/ContactStrip";

async function getStats(): Promise<{ public_repos: number; followers: number } | null> {
  try {
    const res = await fetch("https://api.github.com/users/Sh0ckWaveZero", {
      next: { revalidate: 86400 },
    });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export default async function Home() {
  const user = await getStats();

  return (
    <main
      className="min-h-screen w-full font-[family-name:var(--font-geist-sans)]"
      style={{ background: "oklch(0.08 0.008 210)", color: "oklch(0.92 0.005 70)" }}
    >
      <HeroSection initialStats={user} />
      <TechStack />
      <Projects />
      <ContactStrip />

      <footer
        className="w-full max-w-6xl mx-auto px-8 md:px-12 py-8"
        style={{
          borderTop: "1px solid oklch(0.16 0.01 200 / 0.4)",
          fontFamily: "var(--font-geist-mono)",
        }}
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p style={{ fontSize: "0.6rem", color: "oklch(0.28 0.01 200)", letterSpacing: "0.1em" }}>
            SH0CKWAVEZERO.DEV
          </p>
          <p style={{ fontSize: "0.6rem", color: "oklch(0.22 0.008 200)", letterSpacing: "0.08em" }}>
            © 2026 MidSeeLee. Built with Next.js &amp; Framer Motion.
          </p>
        </div>
      </footer>
    </main>
  );
}
