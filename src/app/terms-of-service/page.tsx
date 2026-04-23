"use client";

import React from "react";
import { motion } from "framer-motion";

export default function TermsOfServicePage() {
  return (
    <div className="container-custom py-24 md:py-32">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-accent font-bold text-[11px] tracking-[0.3em] uppercase mb-4 block">Legal</span>
          <h1 className="text-5xl md:text-6xl font-black mb-16 tracking-tighter uppercase">Terms of Service</h1>
          
          <div className="prose prose-slate max-w-none space-y-12">
            <section>
              <h2 className="text-2xl font-black uppercase tracking-tighter mb-6">Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing or using SkyLenzo Store, you agree to be bound by these Terms of Service 
                 and all applicable laws and regulations. If you do not agree with any of these 
                 terms, you are prohibited from using or accessing this site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black uppercase tracking-tighter mb-6">Use License</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Permission is granted to temporarily download one copy of the materials (information or software) 
                on SkyLenzo Store's website for personal, non-commercial transitory viewing only.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black uppercase tracking-tighter mb-6">Purchase Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                All purchases through our site are subject to product availability. We may, in our 
                sole discretion, limit or cancel the quantities offered on our site or limit the 
                sales of our products or services to any person, household, geographic region or jurisdiction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black uppercase tracking-tighter mb-6">Returns & Refunds</h2>
              <p className="text-muted-foreground leading-relaxed">
                Please review our Returns Policy, which is incorporated into these Terms by reference. 
                Most products can be returned within 30 days of delivery if they are in their 
                original condition and packaging.
              </p>
            </section>

            <section className="pt-12 border-t">
              <p className="text-xs text-muted-foreground font-bold uppercase tracking-widest italic">
                Last Updated: October 2023
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
