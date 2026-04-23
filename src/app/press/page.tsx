"use client";

import React from "react";
import { motion } from "framer-motion";

export default function PressPage() {
  return (
    <div className="container-custom py-24 md:py-32">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-accent font-black text-[11px] tracking-[0.4em] uppercase mb-4 block">Company</span>
          <h1 className="text-5xl md:text-6xl font-black mb-16 tracking-tighter uppercase">Press Room</h1>
          
          <div className="prose prose-slate max-w-none space-y-12">
            <section>
              <h2 className="text-2xl font-black uppercase tracking-tighter mb-6">Media Assets</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Looking for high-resolution images, brand guidelines, or our latest press releases? 
                Download our comprehensive media kit below.
              </p>
              <button className="btn btn-outline border-primary px-10 py-5 w-full sm:w-auto">
                Download Media Kit (.ZIP)
              </button>
            </section>

            <section>
              <h2 className="text-2xl font-black uppercase tracking-tighter mb-6">Recent Press</h2>
              <div className="space-y-8">
                <blockquote className="border-l-4 border-accent pl-6 italic text-lg text-primary">
                  "SkyLenzo is redefining modern living with their uncompromising focus on quality 
                  and minimalist Scandinavian aesthetics."
                  <footer className="text-sm font-black uppercase tracking-widest mt-4 text-muted-foreground">— Architectural Digest</footer>
                </blockquote>
                <blockquote className="border-l-4 border-accent pl-6 italic text-lg text-primary">
                  "The most sustainable way to furnish your home in 2024."
                  <footer className="text-sm font-black uppercase tracking-widest mt-4 text-muted-foreground">— Vogue Living</footer>
                </blockquote>
              </div>
            </section>

            <section className="bg-secondary p-12 rounded-[2rem]">
               <h2 className="text-2xl font-black uppercase tracking-tighter mb-4">Press Inquiries</h2>
               <p className="text-muted-foreground mb-6">For all media, partnership, and influencer requests, please contact:</p>
               <a href="mailto:press@skylenzo.com" className="text-lg font-black text-primary hover:text-accent transition-colors">press@skylenzo.com</a>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
