
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { HeroSection } from "@/components/sections/HeroSection";
import { TechStack } from "@/components/sections/TechStack";

// Using the same fetch logic, simpler to include inline or extract. 
// For cleanliness, I'll inline the fetch helper here since I can't easily create another file in this single turn without overhead, 
// but wait, I can just use the same logic.

interface GitHubUser {
  public_repos: number;
  followers: number;
}

async function getStats(): Promise<GitHubUser | null> {
  try {
    const res = await fetch("https://api.github.com/users/Sh0ckWaveZero", {
      next: { revalidate: 86400 },
    });
    if (!res.ok) return null;
    return res.json();
  } catch (error) {
    console.error("Error fetching GitHub stats:", error);
    return null;
  }
}

export default async function Home() {
  const user = await getStats();

  return (
    <main className="min-h-screen w-full relative overflow-hidden bg-black text-white font-[family-name:var(--font-geist-sans)] selection:bg-purple-500/30">
      <BackgroundGradient />
      
      <div className="relative z-10 w-full">
        <HeroSection initialStats={user} />
        <TechStack />
        
        <footer className="w-full text-center py-8 text-gray-600 text-sm border-t border-white/5 mt-20">
            <p>© 2026 Sh0ckWaveZero. Built with Next.js & Framer Motion.</p>
        </footer>
      </div>
    </main>
  );
}

