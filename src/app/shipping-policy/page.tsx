"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ShippingPolicyPage() {
  return (
    <div className="container-custom py-24 md:py-32">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-accent font-black text-[11px] tracking-[0.4em] uppercase mb-4 block">Support</span>
          <h1 className="text-5xl md:text-6xl font-black mb-16 tracking-tighter uppercase">Shipping Policy</h1>
          
          <div className="prose prose-slate max-w-none space-y-12">
            <section>
              <h2 className="text-2xl font-black uppercase tracking-tighter mb-6">Delivery Times</h2>
              <p className="text-muted-foreground leading-relaxed">
                We strive to deliver your orders as quickly as possible. Standard shipping typically takes 
                3-5 business days within the continental US. International shipping can take 7-14 business days.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black uppercase tracking-tighter mb-6">Shipping Rates</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We offer free standard shipping on all orders over $200. For orders under $200, 
                a flat rate of $25 will be applied at checkout.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black uppercase tracking-tighter mb-6">Order Tracking</h2>
              <p className="text-muted-foreground leading-relaxed">
                Once your order has shipped, you will receive a confirmation email with a tracking number 
                so you can monitor its progress.
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
