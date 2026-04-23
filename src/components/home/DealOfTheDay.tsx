"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { products } from "@/data/products";
import { formatPrice } from "@/lib/utils";
import { ArrowRight } from "@/components/ui/Icons";

const DealOfTheDay = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 6,
    hours: 4,
    minutes: 43,
    seconds: 22,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const dealProduct = products[4]; // Minimalist Sofa or similar

  return (
    <section className="py-32 bg-[#f4f7f9] overflow-hidden">
      <div className="container-custom">
        <div className="relative flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 z-10 py-12">
            <span className="text-accent font-bold text-[11px] tracking-[0.3em] uppercase mb-4 block">
              Limited Edition
            </span>
            <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tighter uppercase text-primary">
              Deal of the day
            </h2>
            
            <div className="mb-10">
              <p className="text-3xl font-black text-primary mb-2">
                {formatPrice(399.00)}
              </p>
              <p className="text-muted-foreground font-medium">
                From {dealProduct.name}
              </p>
            </div>

            <div className="flex items-center gap-6 mb-12">
              {Object.entries(timeLeft).map(([label, value], idx) => (
                <React.Fragment key={label}>
                  <div className="text-left">
                    <div className="text-4xl font-black text-primary mb-1">
                      {value.toString().padStart(2, '0')}
                      <span className="text-sm font-bold text-muted-foreground ml-1">{label[0]}</span>
                    </div>
                  </div>
                  {idx < 3 && <div className="text-2xl font-black text-gray-300">:</div>}
                </React.Fragment>
              ))}
            </div>

            <Link href={`/product/${dealProduct.id}`} className="group inline-flex items-center text-sm font-black tracking-widest uppercase border-b-2 border-primary pb-2 hover:text-accent hover:border-accent transition-all">
              Grab it now <ArrowRight size={20} className="ml-3 transition-transform group-hover:translate-x-2" />
            </Link>
          </div>
          
          <div className="w-full lg:w-1/2 relative lg:absolute lg:right-[-10%] lg:top-1/2 lg:-translate-y-1/2">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1000&auto=format&fit=crop" 
                alt="Deal Product" 
                className="w-full h-auto object-cover rounded-[3rem] shadow-2xl"
              />
              <div className="absolute -bottom-10 -right-10 text-[10rem] font-black text-white/40 select-none pointer-events-none uppercase italic">
                Deal
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealOfTheDay;
