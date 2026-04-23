"use client";

import React from "react";
import { motion } from "framer-motion";

export default function FAQsPage() {
  const faqs = [
    {
      q: "Where do you ship from?",
      a: "All our products are shipped from our central warehouse in Copenhagen, Denmark, to ensure the highest quality control and authentic Scandinavian handling."
    },
    {
      q: "What materials do you use?",
      a: "We prioritize natural, sustainable materials such as FSC-certified wood, recycled metals, and organic textiles. Each product page has detailed material information."
    },
    {
      q: "Can I cancel my order?",
      a: "Orders can be cancelled within 12 hours of placement. After that, the order may have already been processed for shipping. Please contact us immediately if you need to cancel."
    },
    {
      q: "Do you offer international shipping?",
      a: "Yes, we ship to over 50 countries worldwide. Shipping rates and delivery times vary by location."
    }
  ];

  return (
    <div className="container-custom py-24 md:py-32">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-accent font-black text-[11px] tracking-[0.4em] uppercase mb-4 block">Support</span>
          <h1 className="text-5xl md:text-6xl font-black mb-16 tracking-tighter uppercase">Frequently Asked Questions</h1>
          
          <div className="space-y-12">
            {faqs.map((faq, index) => (
              <section key={index} className="pb-8 border-b border-gray-100">
                <h2 className="text-xl font-black uppercase tracking-tighter mb-4">{faq.q}</h2>
                <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
              </section>
            ))}
          </div>

          <div className="mt-20 p-10 bg-secondary rounded-[2rem] text-center">
            <h3 className="text-2xl font-black mb-4">Still have questions?</h3>
            <p className="text-muted-foreground mb-8">We're here to help you create your perfect space.</p>
            <a href="/contact" className="btn btn-primary px-10">Contact Support</a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
