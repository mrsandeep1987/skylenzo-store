"use client";

import React from "react";
import { motion } from "framer-motion";

export default function PrivacyPolicyPage() {
  return (
    <div className="container-custom py-24 md:py-32">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-accent font-bold text-[11px] tracking-[0.3em] uppercase mb-4 block">Legal</span>
          <h1 className="text-5xl md:text-6xl font-black mb-16 tracking-tighter uppercase">Privacy Policy</h1>
          
          <div className="prose prose-slate max-w-none space-y-12">
            <section>
              <h2 className="text-2xl font-black uppercase tracking-tighter mb-6">Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                At SkyLenzo Store, we take your privacy seriously. This policy describes how we collect, 
                use, and protect your personal information when you use our website and services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black uppercase tracking-tighter mb-6">Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We collect information that you provide directly to us, such as when you:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
                <li>Create an account</li>
                <li>Make a purchase</li>
                <li>Sign up for our newsletter</li>
                <li>Contact our customer support team</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-black uppercase tracking-tighter mb-6">How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use the information we collect to provide, maintain, and improve our services, 
                to process your transactions, to send you technical notices and support messages, 
                and to communicate with you about products, services, and events.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black uppercase tracking-tighter mb-6">Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate technical and organizational measures to protect the security 
                of your personal information. However, please note that no method of transmission 
                over the Internet is 100% secure.
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
