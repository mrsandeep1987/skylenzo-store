"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Calendar, User, Clock } from "@/components/ui/Icons";

const blogPosts = [
  {
    id: 1,
    title: "How to Choose the Perfect Lamp for Your Living Room",
    excerpt: "Lighting is the most important element of any interior design. Learn how to balance ambiance and functionality...",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=800&auto=format&fit=crop",
    date: "May 15, 2024",
    author: "Søren Jensen",
    readTime: "5 min read",
    category: "Interior Design"
  },
  {
    id: 2,
    title: "The Minimalist Home: Less is Always More",
    excerpt: "Decluttering your life starts with your environment. Discover the principles of Scandinavian minimalism...",
    image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=800&auto=format&fit=crop",
    date: "May 10, 2024",
    author: "Elena Rossi",
    readTime: "8 min read",
    category: "Lifestyle"
  },
  {
    id: 3,
    title: "Eco-Friendly Materials in Modern Furniture",
    excerpt: "Why choosing sustainable materials is better for your home and the planet. From FSC wood to recycled aluminum...",
    image: "https://images.unsplash.com/photo-1581557991964-125469da3b8a?q=80&w=800&auto=format&fit=crop",
    date: "May 05, 2024",
    author: "Marcus Nielsen",
    readTime: "6 min read",
    category: "Sustainability"
  }
];

export default function BlogPage() {
  return (
    <div className="container-custom py-24">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold tracking-tighter mb-4">Journal</h1>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
          Insights on interior design, sustainability, and the minimalist lifestyle.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {blogPosts.map((post) => (
          <article key={post.id} className="group cursor-pointer">
            <Link href={`/blog/${post.id}`}>
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6 shadow-md">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm uppercase tracking-widest">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-6 text-xs text-gray-500 font-medium">
                  <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                  <span className="flex items-center gap-1"><Clock size={14} /> {post.readTime}</span>
                </div>
                
                <h2 className="text-2xl font-bold tracking-tight group-hover:text-accent transition-colors leading-snug">
                  {post.title}
                </h2>
                
                <p className="text-gray-600 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="pt-4 flex items-center justify-between border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-primary font-bold text-[10px]">
                      {post.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span className="text-xs font-bold text-gray-700">{post.author}</span>
                  </div>
                  <span className="text-sm font-bold text-primary inline-flex items-center gap-1 group-hover:translate-x-2 transition-transform">
                    Read More <ArrowRight size={16} />
                  </span>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>

      {/* Newsletter Placeholder */}
      <div className="mt-24 bg-muted rounded-3xl p-12 md:p-24 flex flex-col items-center text-center">
        <h2 className="text-4xl font-bold mb-6 tracking-tighter">Never Miss an Update</h2>
        <p className="text-gray-500 mb-10 max-w-xl mx-auto text-lg">
          Join our community of design enthusiasts and get the latest articles 
          delivered straight to your inbox.
        </p>
        <form className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
          <input 
            type="email" 
            placeholder="Your email address" 
            className="flex-1 px-6 py-4 rounded-xl bg-white border-none shadow-sm focus:ring-accent"
          />
          <button className="btn btn-primary px-8 py-4">Subscribe</button>
        </form>
      </div>
    </div>
  );
}
