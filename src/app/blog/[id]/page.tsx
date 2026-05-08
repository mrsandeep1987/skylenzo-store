"use client";

import React from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, User } from "@/components/ui/Icons";

const blogPosts = [
  {
    id: "1",
    title: "How to Choose the Perfect Lamp for Your Living Room",
    excerpt: "Lighting is the most important element of any interior design. Learn how to balance ambiance and functionality...",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=1200&auto=format&fit=crop",
    date: "May 15, 2024",
    author: "Søren Jensen",
    readTime: "5 min read",
    category: "Interior Design",
    content: `
      Lighting is the unsung hero of interior design. A well-chosen lamp doesn't just illuminate your living room — it defines its mood, highlights its best features, and reflects your personal style.

      **Understanding Light Layers**

      Great lighting design uses three layers: ambient (overall room light), task (focused light for activities), and accent (decorative or highlighting light). A statement floor lamp from SkyLenzo can serve all three purposes simultaneously.

      **Choosing the Right Scale**

      The size of your lamp should be proportional to your furniture. A table lamp's shade should sit at eye level when you're seated, while a floor lamp should stand roughly 58-64 inches tall for optimal light spread.

      **Warm vs. Cool Light**

      For living rooms, warm white light (2700K-3000K) creates a cosy, inviting atmosphere. Avoid cool white or daylight bulbs which tend to feel clinical in a home setting.

      **Material Matters**

      At SkyLenzo, we craft our lamp bases from FSC-certified oak and recycled aluminum. These natural materials diffuse light beautifully and age with graceful character — key principles of Scandinavian design philosophy.

      **Placement Tips**

      - Place floor lamps in dark corners to expand the sense of space
      - Pair two matching table lamps on either side of a sofa for symmetry
      - Use dimmable bulbs to transition from daytime to evening effortlessly

      The right lamp is not just functional — it's a piece of art that tells your story.
    `,
  },
  {
    id: "2",
    title: "The Minimalist Home: Less is Always More",
    excerpt: "Decluttering your life starts with your environment. Discover the principles of Scandinavian minimalism...",
    image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=1200&auto=format&fit=crop",
    date: "May 10, 2024",
    author: "Elena Rossi",
    readTime: "8 min read",
    category: "Lifestyle",
    content: `
      The Scandinavian concept of "lagom" — meaning just the right amount — is the philosophical bedrock of minimalist living. It's not about deprivation; it's about intentionality.

      **Start with a Clean Slate**

      Before you can curate, you must declutter. Go through every room and ask: does this item serve a purpose, or does it bring me genuine joy? If the answer is no, let it go.

      **Quality Over Quantity**

      Minimalism isn't about having less furniture — it's about having better furniture. One beautifully crafted oak chair from SkyLenzo brings more satisfaction than five pieces of disposable flat-pack furniture.

      **The Power of Negative Space**

      In Scandinavian design, empty space is not wasted space. It's breathing room for the eye. Resist the urge to fill every surface and corner. Let your statement pieces speak for themselves.

      **A Neutral Palette**

      Build your base with whites, warm greys, and natural wood tones. These colours reflect light, make spaces feel larger, and never go out of style. Introduce texture through wool throws, linen cushions, and ceramics.

      **Nature as Decoration**

      A single branch in a ceramic vase, a bowl of pine cones, fresh greenery from the garden — these are the decorative elements that feel most at home in a minimalist Scandinavian interior.

      Minimalism is ultimately about freedom. When your home contains only what you love, every corner becomes a sanctuary.
    `,
  },
  {
    id: "3",
    title: "Eco-Friendly Materials in Modern Furniture",
    excerpt: "Why choosing sustainable materials is better for your home and the planet. From FSC wood to recycled aluminum...",
    image: "https://images.unsplash.com/photo-1581557991964-125469da3b8a?q=80&w=1200&auto=format&fit=crop",
    date: "May 05, 2024",
    author: "Marcus Nielsen",
    readTime: "6 min read",
    category: "Sustainability",
    content: `
      The furniture industry is one of the world's largest consumers of natural resources. At SkyLenzo, we believe that beautiful design and environmental responsibility are not mutually exclusive — they are inseparable.

      **FSC-Certified Wood**

      Every piece of wood in our collection carries the Forest Stewardship Council (FSC) certification. This guarantees it comes from forests that are managed to protect biodiversity, worker rights, and local communities.

      **Recycled Aluminium**

      Our metal components use 100% recycled aluminium, which requires only 5% of the energy needed to produce virgin aluminium. The quality is identical; the environmental cost is dramatically lower.

      **Natural Finishes**

      We reject toxic lacquers and synthetic varnishes in favour of plant-based oils and water-based finishes. These protect the wood beautifully while being safe for your family and the environment.

      **Longevity as Sustainability**

      The most sustainable piece of furniture is the one you buy once and keep for decades. We engineer our products for repair, not replacement. Every SkyLenzo item comes with a 2-year warranty and spare parts availability for 10 years.

      **Packaging**

      Our packaging is 100% recyclable, using FSC-certified cardboard and paper tape. We have eliminated all single-use plastic from our supply chain.

      Choosing eco-friendly furniture is an investment — in your home, in your values, and in the planet we share.
    `,
  },
];

export default function BlogDetailPage() {
  const params = useParams();
  const router = useRouter();
  const postId = params.id as string;
  const post = blogPosts.find((p) => p.id === postId);

  if (!post) {
    return (
      <div className="container-custom py-24 text-center min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold mb-4">Post Not Found</h2>
        <p className="text-gray-500 mb-8">This article doesn&apos;t exist or has been moved.</p>
        <Link href="/blog" className="btn btn-primary">Back to Blog</Link>
      </div>
    );
  }

  const relatedPosts = blogPosts.filter((p) => p.id !== postId).slice(0, 2);

  return (
    <div className="container-custom py-12 md:py-24 max-w-4xl mx-auto">
      {/* Back link */}
      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-accent transition-colors mb-12 group"
        >
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
          Back to Journal
        </Link>
      </motion.div>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="aspect-[16/7] rounded-3xl overflow-hidden mb-12 shadow-lg"
      >
        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
      </motion.div>

      {/* Meta */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <span className="inline-block bg-accent/10 text-accent text-[10px] font-black tracking-[0.3em] uppercase px-4 py-2 rounded-full mb-6">
          {post.category}
        </span>

        <h1 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight mb-8">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground font-medium pb-10 border-b mb-12">
          <span className="flex items-center gap-2"><User size={14} /> {post.author}</span>
          <span className="flex items-center gap-2"><Calendar size={14} /> {post.date}</span>
          <span className="flex items-center gap-2"><Clock size={14} /> {post.readTime}</span>
        </div>

        {/* Content */}
        <div className="prose prose-slate max-w-none space-y-6 text-gray-700 leading-relaxed">
          {post.content.trim().split("\n\n").map((paragraph, idx) => {
            const trimmed = paragraph.trim();
            if (!trimmed) return null;
            if (trimmed.startsWith("**") && trimmed.endsWith("**")) {
              return (
                <h2 key={idx} className="text-2xl font-black tracking-tighter text-primary mt-10 mb-4">
                  {trimmed.replace(/\*\*/g, "")}
                </h2>
              );
            }
            if (trimmed.startsWith("- ")) {
              return (
                <ul key={idx} className="list-disc pl-6 space-y-2">
                  {trimmed.split("\n").map((li, i) => (
                    <li key={i}>{li.replace("- ", "")}</li>
                  ))}
                </ul>
              );
            }
            return <p key={idx}>{trimmed}</p>;
          })}
        </div>
      </motion.div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="mt-24 pt-16 border-t">
          <h2 className="text-2xl font-black tracking-tighter mb-12">You May Also Enjoy</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedPosts.map((rp) => (
              <Link key={rp.id} href={`/blog/${rp.id}`} className="group block">
                <div className="aspect-[16/9] rounded-2xl overflow-hidden mb-4">
                  <img
                    src={rp.image}
                    alt={rp.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <span className="text-[10px] font-black tracking-widest uppercase text-accent">{rp.category}</span>
                <h3 className="font-black text-lg mt-2 group-hover:text-accent transition-colors leading-snug">
                  {rp.title}
                </h3>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
