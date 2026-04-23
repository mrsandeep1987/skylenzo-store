"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SustainabilityPage() {
  return (
    <div className="container-custom py-24 md:py-32">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-accent font-black text-[11px] tracking-[0.4em] uppercase mb-4 block">Company</span>
          <h1 className="text-5xl md:text-6xl font-black mb-16 tracking-tighter uppercase">Sustainability</h1>
          
          <div className="prose prose-slate max-w-none space-y-12">
            <section>
              <h2 className="text-2xl font-black uppercase tracking-tighter mb-6">Our Commitment</h2>
              <p className="text-muted-foreground leading-relaxed">
                At SkyLenzo, we believe that beautiful design shouldn't come at the cost of our planet. 
                Sustainability is integrated into every stage of our process, from material sourcing 
                to final delivery.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black uppercase tracking-tighter mb-6">Eco-Friendly Materials</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="bg-secondary p-8 rounded-2xl">
                  <h3 className="font-black uppercase tracking-tighter mb-2">Certified Wood</h3>
                  <p className="text-sm text-muted-foreground">We exclusively use FSC-certified wood from responsibly managed forests.</p>
                </div>
                <div className="bg-secondary p-8 rounded-2xl">
                  <h3 className="font-black uppercase tracking-tighter mb-2">Recycled Metals</h3>
                  <p className="text-sm text-muted-foreground">Our metal components are sourced from 100% recycled aluminum and steel.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-black uppercase tracking-tighter mb-6">Ethical Production</h2>
              <p className="text-muted-foreground leading-relaxed">
                We maintain long-term partnerships with factories that provide fair wages, safe 
                working conditions, and support for local communities. Transparency is key 
                to our ethical manufacturing standards.
              </p>
            </section>

            <section className="bg-primary p-12 rounded-[2rem] text-white">
               <h2 className="text-3xl font-black uppercase tracking-tighter mb-6">2030 Goal</h2>
               <p className="text-lg text-gray-400">
                 Our goal is to be carbon neutral by 2030, through investments in renewable 
                 energy and reforestation projects.
               </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
