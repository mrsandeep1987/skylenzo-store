"use client";

import React from "react";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <section className="py-32 bg-[#f9f9f9]">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="flex justify-center mb-12">
              <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop" 
                  alt="Customer" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <p className="text-2xl md:text-3xl font-medium leading-relaxed text-primary mb-12 italic tracking-tight">
              " I have bought many products from SkyLenzo and I must say the quality 
              is always top notch. Their minimalist designs are exactly what my 
              modern apartment needed. Best customer service too! "
            </p>
            <div>
              <h4 className="font-black text-sm uppercase tracking-[0.2em] mb-2">Alexandra Smith</h4>
              <p className="text-muted-foreground text-xs font-bold uppercase tracking-[0.1em]">Verified Customer, London</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
