"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SizeGuidePage() {
  return (
    <div className="container-custom py-24 md:py-32">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-accent font-black text-[11px] tracking-[0.4em] uppercase mb-4 block">Support</span>
          <h1 className="text-5xl md:text-6xl font-black mb-16 tracking-tighter uppercase">Size Guide</h1>
          
          <div className="prose prose-slate max-w-none space-y-12">
            <section>
              <h2 className="text-2xl font-black uppercase tracking-tighter mb-6">Choosing the Right Size</h2>
              <p className="text-muted-foreground leading-relaxed">
                Measuring your space correctly is the most important step before purchasing furniture. 
                Consider not just the final placement, but also the path to get the piece into the room.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black uppercase tracking-tighter mb-6">Standard Measurements</h2>
              <div className="overflow-hidden rounded-2xl border border-gray-100">
                <table className="w-full text-sm text-left">
                  <thead className="bg-secondary text-primary font-black uppercase tracking-widest text-[10px]">
                    <tr>
                      <th className="p-4">Item Type</th>
                      <th className="p-4">Width Range</th>
                      <th className="p-4">Depth Range</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-t border-gray-100">
                      <td className="p-4 font-bold text-primary">Dining Tables</td>
                      <td className="p-4">120cm - 240cm</td>
                      <td className="p-4">80cm - 100cm</td>
                    </tr>
                    <tr className="border-t border-gray-100">
                      <td className="p-4 font-bold text-primary">Lounge Chairs</td>
                      <td className="p-4">60cm - 90cm</td>
                      <td className="p-4">70cm - 100cm</td>
                    </tr>
                    <tr className="border-t border-gray-100">
                      <td className="p-4 font-bold text-primary">Coffee Tables</td>
                      <td className="p-4">60cm - 120cm</td>
                      <td className="p-4">50cm - 80cm</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-black uppercase tracking-tighter mb-6">Measurement Tips</h2>
              <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
                <li>Measure doorways, stairways, and elevators to ensure access</li>
                <li>Use masking tape on the floor to visualize the footprint of a piece</li>
                <li>Leave at least 60-90cm of walking space around large items</li>
              </ul>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
