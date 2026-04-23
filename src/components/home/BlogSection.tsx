"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const blogPosts = [
  {
    id: 1,
    title: "Minimalist Living: How to Declutter Your Space",
    date: "15 Oct",
    category: "Interior Design",
    excerpt: "Discover the secrets of Scandinavian minimalist living and how to transform your home into a sanctuary of calm."
  },
  {
    id: 2,
    title: "The Art of Lighting: Choosing the Perfect Lamp",
    date: "12 Oct",
    category: "Decor Tips",
    excerpt: "Lighting is the most important element in any room. Learn how to choose the right lamp for every corner."
  }
];

const BlogSection = () => {
  return (
    <section className="py-32 bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-black mb-12 tracking-tighter uppercase">Blog & News from SkyLenzo</h2>
            <div className="space-y-12">
              {blogPosts.map((post) => (
                <motion.div 
                  key={post.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex gap-8 group cursor-pointer"
                >
                  <div className="flex flex-col items-center">
                    <span className="text-3xl font-black text-primary">{post.date.split(' ')[0]}</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{post.date.split(' ')[1]}</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent mb-2 block">{post.category}</span>
                    <h3 className="text-xl font-black group-hover:text-accent transition-colors mb-4">{post.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">{post.excerpt}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="w-full md:w-1/2 bg-[#f4f7f9] p-12 md:p-20 rounded-[3rem]">
            <span className="text-accent font-bold text-[11px] tracking-[0.3em] uppercase mb-4 block">
              Join Our Community
            </span>
            <h2 className="text-4xl font-black mb-8 tracking-tighter uppercase">Get Discount 20% Off</h2>
            <p className="text-muted-foreground mb-12 leading-relaxed">
              Subscribe to our newsletter and get 20% discount for your first purchase. 
              Be the first to know about new arrivals and exclusive offers.
            </p>
            
            <form className="relative">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-white rounded-full py-5 px-8 pr-32 text-sm focus:outline-none shadow-sm"
              />
              <button 
                type="submit" 
                className="absolute right-2 top-2 bottom-2 bg-primary text-white rounded-full px-8 text-xs font-bold tracking-widest uppercase hover:bg-accent transition-all"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
