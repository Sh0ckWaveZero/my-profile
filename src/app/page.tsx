import Image from "next/image";
import Link from "next/link";

interface GitHubUser {
  public_repos: number;
  followers: number;
}

async function getGitHubStats(): Promise<GitHubUser | null> {
  try {
    const res = await fetch("https://api.github.com/users/Sh0ckWaveZero", {
      next: { revalidate: 86400 }, // 24 hours (Daily update)
    });
    if (!res.ok) return null;
    return res.json();
  } catch (error) {
    console.error("Error fetching GitHub stats:", error);
    return null;
  }
}

export default async function Home() {
  const user = await getGitHubStats();
  const repoCount = user?.public_repos ?? 137; // Fallback to current known count
  const followerCount = user?.followers ?? 28;

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start max-w-4xl w-full">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row gap-8 items-center w-full">
            <div className="flex-1 space-y-4 text-center md:text-left">
                <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                    Hi, I'm MidSeeLee
                </h1>
                <p className="text-xl md:text-2xl text-gray-400 font-medium">
                    (Sh0ckWaveZero)
                </p>
                <div className="text-lg text-gray-300 space-y-2">
                    <p>👨🏻‍💻 Full Stack Developer</p>
                    <p>🦉 Night Owl</p>
                </div>
                
                <div className="flex gap-4 items-center justify-center md:justify-start pt-4">
                    <Link
                        href="/blog"
                        className="rounded-full bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-6 flex items-center justify-center transition-colors font-medium"
                    >
                        Read Blog
                    </Link>
                    <a
                        href="https://github.com/Sh0ckWaveZero"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-solid border-white/[.145] hover:bg-white/[.05] transition-colors text-sm sm:text-base h-10 sm:h-12 px-6 flex items-center justify-center"
                    >
                        GitHub
                    </a>
                </div>
            </div>
            {/* Stats Card - Simulated based on profile */}
            <div className="bg-[#111] border border-gray-800 p-6 rounded-2xl shadow-xl w-full md:w-auto min-w-[300px]">
                <h3 className="text-gray-400 mb-4 font-mono text-sm uppercase tracking-wider">GitHub Stats</h3>
                <div className="space-y-3 font-mono">
                    <div className="flex justify-between">
                        <span>📦 Repos</span>
                        <span className="text-green-400">{repoCount}+</span>
                    </div>
                     <div className="flex justify-between">
                        <span>👥 Followers</span>
                        <span className="text-purple-400">{followerCount}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>⏱️ Code Time</span>
                        <span className="text-blue-400">3,758 hrs</span>
                    </div>
                     <div className="flex justify-between">
                        <span>🔥 Streak</span>
                        <span className="text-orange-400">Active</span>
                    </div>
                </div>
            </div>
        </div>

        {/* Skills Section */}
        <div className="w-full mt-12">
            <h2 className="text-3xl font-bold mb-8 text-center md:text-left">Tech Stack</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl border border-gray-800 bg-white/[0.02]">
                    <h3 className="text-xl font-semibold mb-4 text-blue-400">Frontend</h3>
                    <div className="flex flex-wrap gap-2">
                        {["React", "Next.js", "Angular", "TailwindCSS"].map(skill => (
                            <span key={skill} className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 text-sm border border-blue-500/20">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="p-6 rounded-xl border border-gray-800 bg-white/[0.02]">
                    <h3 className="text-xl font-semibold mb-4 text-green-400">Backend</h3>
                    <div className="flex flex-wrap gap-2">
                        {["Node.js", "NestJS", "Express", "Meteor", "Python (Flask)", "Java (Spring Boot)"].map(skill => (
                            <span key={skill} className="px-3 py-1 rounded-full bg-green-500/10 text-green-300 text-sm border border-green-500/20">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="p-6 rounded-xl border border-gray-800 bg-white/[0.02]">
                    <h3 className="text-xl font-semibold mb-4 text-purple-400">Mobile</h3>
                    <div className="flex flex-wrap gap-2">
                        {["Flutter", "Dart"].map(skill => (
                            <span key={skill} className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 text-sm border border-purple-500/20">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
                 <div className="p-6 rounded-xl border border-gray-800 bg-white/[0.02]">
                    <h3 className="text-xl font-semibold mb-4 text-orange-400">Database</h3>
                    <div className="flex flex-wrap gap-2">
                        {["MySQL", "Postgres", "MongoDB", "Prisma"].map(skill => (
                            <span key={skill} className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-300 text-sm border border-orange-500/20">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>

      </main>
      
      <footer className="row-start-3 text-sm text-gray-500">
        © 2026 Sh0ckWaveZero.
      </footer>
    </div>
  );
}
