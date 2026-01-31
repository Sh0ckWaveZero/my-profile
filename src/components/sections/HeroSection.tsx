"use client";
import { motion } from "framer-motion";
import { Github, FileText, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

interface GitHubUser {
  public_repos: number;
  followers: number;
}

export function HeroSection({ initialStats }: { initialStats: GitHubUser | null }) {
  const [stats, setStats] = useState(initialStats);

  useEffect(() => {
    if (!stats) {
        // Hydrate or fetch if needed, but for now relying on passed props or effect if we want real-time
    }
  }, [stats]);

  const repoCount = stats?.public_repos ?? 137;
  const followerCount = stats?.followers ?? 28;

  return (
    <section className="relative z-10 w-full max-w-5xl mx-auto pt-20 pb-32 px-4 flex flex-col md:flex-row items-center justify-between gap-12">
      
      {/* Text Content */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex-1 text-center md:text-left space-y-6"
      >
        <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-4">
          Welcome to my digital space
        </div>
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient-x">
            MidSeeLee
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 font-light tracking-wide">
          (Sh0ckWaveZero)
        </p>
        <div className="text-lg text-gray-300/80 space-y-1 font-mono">
          <p>Full Stack Developer &lt;/&gt;</p>
          <p>Creative Builder 🚀</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center md:justify-start">
          <Link href="/blog">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-6 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all text-white flex items-center gap-2 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              <FileText className="w-4 h-4" />
              <span>Read Blog</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
          
          <a href="https://github.com/Sh0ckWaveZero" target="_blank" rel="noopener noreferrer">
            <motion.button
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               className="px-6 py-3 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 hover:border-white/30 transition-all text-gray-300 flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </motion.button>
          </a>
        </div>
      </motion.div>

      {/* Floating 3D Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
        transition={{ duration: 1, type: "spring" }}
        className="relative perspective-1000"
      >
        <motion.div
            animate={{ 
                y: [0, -20, 0],
                rotateX: [0, 5, 0],
            }}
            transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
            }}
            className="w-80 p-6 rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-white/10 shadow-2xl relative overflow-hidden group"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between">
                    <div className="h-3 w-3 rounded-full bg-red-500" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500" />
                    <div className="h-3 w-3 rounded-full bg-green-500" />
                </div>
                
                <h3 className="text-gray-400 font-mono text-xs uppercase tracking-[0.2em] border-b border-white/5 pb-2">
                   System Status
                </h3>

                <div className="grid grid-cols-2 gap-4">
                    <StatBox label="Repos" value={repoCount} color="text-green-400" />
                    <StatBox label="Followers" value={followerCount} color="text-purple-400" />
                    <StatBox label="Experience" value="5+ Yrs" color="text-blue-400" />
                    <StatBox label="Status" value="Online" color="text-orange-400" />
                </div>
            </div>
        </motion.div>
        
        {/* Glow behind card */}
        <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-3xl opacity-20 -z-10 animate-pulse" />
      </motion.div>
    </section>
  );
}

const StatBox = ({ label, value, color }: { label: string, value: string | number, color: string }) => (
    <div className="bg-black/20 rounded-lg p-3 border border-white/5 hover:border-white/10 transition-colors">
        <p className="text-gray-500 text-[10px] uppercase font-bold mb-1">{label}</p>
        <p className={`font-mono font-bold text-lg ${color}`}>{value}</p>
    </div>
);
