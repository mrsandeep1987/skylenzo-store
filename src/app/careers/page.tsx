"use client";

import React from "react";
import { motion } from "framer-motion";

export default function CareersPage() {
  const positions = [
    { title: "Senior UI Designer", dept: "Creative", location: "Copenhagen / Remote" },
    { title: "Supply Chain Manager", dept: "Operations", location: "Copenhagen" },
    { title: "Full Stack Engineer", dept: "Technology", location: "Remote" },
    { title: "Content Strategist", dept: "Marketing", location: "New York" }
  ];

  return (
    <div className="container-custom py-24 md:py-32">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-accent font-black text-[11px] tracking-[0.4em] uppercase mb-4 block">Company</span>
          <h1 className="text-5xl md:text-6xl font-black mb-16 tracking-tighter uppercase">Join the Team</h1>
          
          <div className="prose prose-slate max-w-none space-y-12">
            <p className="text-xl text-primary font-medium leading-relaxed">
              We're looking for passionate individuals who believe in the power of design to 
              shape better living experiences.
            </p>

            <section>
              <h2 className="text-2xl font-black uppercase tracking-tighter mb-8">Open Positions</h2>
              <div className="space-y-4">
                {positions.map((pos, i) => (
                  <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-8 bg-secondary rounded-2xl group hover:bg-primary hover:text-white transition-all cursor-pointer">
                    <div>
                      <h3 className="font-black uppercase tracking-tighter text-lg">{pos.title}</h3>
                      <p className="text-sm text-muted-foreground group-hover:text-gray-400">{pos.dept}</p>
                    </div>
                    <div className="mt-4 sm:mt-0 text-sm font-bold uppercase tracking-widest opacity-60">
                      {pos.location}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-black uppercase tracking-tighter mb-6">Why SkyLenzo?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm text-muted-foreground">
                <p>Flexible working hours and remote-first culture for most roles.</p>
                <p>Generous employee discount on all SkyLenzo products.</p>
                <p>Health & wellness stipends and professional development budget.</p>
                <p>Bi-annual team retreats in Scandinavia.</p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
