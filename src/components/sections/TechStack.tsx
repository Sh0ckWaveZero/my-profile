"use client";
import { motion } from "framer-motion";

const skills = [
  { category: "Frontend", color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20", items: ["React", "Next.js", "Angular", "TailwindCSS", "Framer Motion", "Three.js"] },
  { category: "Backend", color: "text-green-400", bg: "bg-green-500/10", border: "border-green-500/20", items: ["Node.js", "NestJS", "Express", "Python", "Go", "Docker"] },
  { category: "Database", color: "text-orange-400", bg: "bg-orange-500/10", border: "border-orange-500/20", items: ["PostgreSQL", "MongoDB", "Prisma", "Redis", "Supabase"] },
  { category: "Mobile & Tools", color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20", items: ["Flutter", "React Native", "Git", "Figma", "Vercel"] },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function TechStack() {
  return (
    <section className="relative z-10 w-full max-w-6xl mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-500 mb-4">
          Technologies
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          The arsenal I use to craft digital experiences.
        </p>
      </motion.div>

      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            variants={item}
            whileHover={{ y: -5 }}
            className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.05] backdrop-blur-sm hover:bg-white/[0.06] hover:border-white/10 transition-all duration-300"
          >
            <h3 className={`text-lg font-semibold mb-4 ${skill.color}`}>{skill.category}</h3>
            <div className="flex flex-wrap gap-2">
              {skill.items.map((tech) => (
                <span 
                    key={tech} 
                    className={`px-2.5 py-1 rounded-md text-xs font-medium border bg-opacity-20 ${skill.color} ${skill.bg} ${skill.border}`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
