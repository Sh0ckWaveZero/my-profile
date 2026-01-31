import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Blog | My Profile",
  description: "รวมบทความที่น่าสนใจเกี่ยวกับการเขียนโปรแกรมและ AI",
};

export default function BlogIndexPage() {
  const posts = [
    {
      slug: "antigravity-guide",
      title: "คู่มือการใช้งาน Antigravity AI",
      description: "เรียนรู้วิธีการใช้งาน Antigravity AI เพื่อเพิ่มประสิทธิภาพการทำงานของคุณ พร้อมเทคนิคการเขียนโค้ดและ SEO ขั้นเทพ",
      image: "/images/antigravity-hero.png",
      date: "2026-01-31",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto py-12 px-6 font-[family-name:var(--font-geist-sans)]">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-xl text-gray-400">บทความล่าสุด</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-600 transition-colors bg-white/5"
          >
            <div className="relative aspect-video w-full">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-500 mb-2">{post.date}</p>
              <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-400 line-clamp-2">{post.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
