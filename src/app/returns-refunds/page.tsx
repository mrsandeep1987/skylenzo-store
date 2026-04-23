"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ReturnsRefundsPage() {
  return (
    <div className="container-custom py-24 md:py-32">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-accent font-black text-[11px] tracking-[0.4em] uppercase mb-4 block">Support</span>
          <h1 className="text-5xl md:text-6xl font-black mb-16 tracking-tighter uppercase">Returns & Refunds</h1>
          
          <div className="prose prose-slate max-w-none space-y-12">
            <section>
              <h2 className="text-2xl font-black uppercase tracking-tighter mb-6">Our 30-Day Guarantee</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you're not completely satisfied with your purchase, you can return your items 
                within 30 days of delivery for a full refund or exchange.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black uppercase tracking-tighter mb-6">Return Conditions</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                To be eligible for a return, your item must be:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
                <li>Unused and in the same condition that you received it</li>
                <li>In its original packaging</li>
                <li>Accompanied by a proof of purchase</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-black uppercase tracking-tighter mb-6">How to Return</h2>
              <p className="text-muted-foreground leading-relaxed">
                To initiate a return, please contact our support team at hello@skylenzo.com. 
                We will provide you with a return shipping label and further instructions.
              </p>
            </section>

            <section className="pt-12 border-t">
              <p className="text-xs text-muted-foreground font-black uppercase tracking-[0.2em] italic">
                Last Updated: October 2023
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
