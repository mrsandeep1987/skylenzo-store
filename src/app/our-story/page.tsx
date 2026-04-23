"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "@/components/ui/Icons";

const stats = [
  { value: "2014", label: "Founded" },
  { value: "50+", label: "Countries Shipped" },
  { value: "12K+", label: "Happy Customers" },
  { value: "100%", label: "Sustainably Sourced" },
];

const timeline = [
  {
    year: "2014",
    title: "The Beginning",
    body: "What started as a small Copenhagen workshop focused on handcrafted wooden furniture. Two designers with one mission: make beautiful things that last.",
  },
  {
    year: "2017",
    title: "Going Global",
    body: "After winning the Nordic Design Award, SkyLenzo began shipping internationally, bringing Scandinavian craft to homes across Europe and North America.",
  },
  {
    year: "2020",
    title: "Sustainability Pledge",
    body: "We committed to 100% FSC-certified sourcing and launched our carbon-offset shipping programme — because we believe great design should care for the planet.",
  },
  {
    year: "2024",
    title: "SkyLenzo Store",
    body: "Today our curated digital store reaches design lovers in over 50 countries, while our workshops in Copenhagen still hand-finish every piece that bears our name.",
  },
];

export default function OurStoryPage() {
  return (
    <div>
      {/* ── HERO ── */}
      <section className="relative h-[calc(85vh+5rem)] min-h-[650px] flex items-end overflow-hidden -mt-20">
        {/* Background image */}
        <img
          src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop"
          alt="SkyLenzo workshop"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220_30%_8%)] via-[hsl(220_30%_10%/0.55)] to-transparent" />

        {/* Hero content */}
        <div className="relative z-10 container-custom pb-20 md:pb-28">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-accent font-black text-[11px] tracking-[0.4em] uppercase mb-6 block">
              Company
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-[1.05] max-w-3xl mb-8">
              Crafted With{" "}
              <span className="text-accent">Purpose</span>,<br />
              Designed to Last
            </h1>
            <p className="text-gray-400 text-lg font-medium max-w-xl leading-relaxed">
              From a small Copenhagen workshop to homes in over 50 countries —
              this is the SkyLenzo story.
            </p>
          </motion.div>
        </div>

        {/* Decorative accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[hsl(35_25%_65%)] to-transparent opacity-60" />
      </section>

      {/* ── STATS STRIP ── */}
      <section className="bg-primary text-white">
        <div className="container-custom grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
          {stats.map((s) => (
            <div key={s.label} className="py-10 px-8 text-center">
              <p className="text-3xl md:text-4xl font-black text-accent mb-1">{s.value}</p>
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-gray-400">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── BRAND STORY ── */}
      <section className="container-custom py-24 md:py-32">
        <div className="max-w-3xl mx-auto">
          <p className="text-xl md:text-2xl text-primary font-medium leading-relaxed mb-20 border-l-4 border-accent pl-8">
            We believe that your environment directly shapes your well-being.
            Beauty and functionality should never be mutually exclusive.
          </p>

          {/* Timeline */}
          <div className="space-y-0">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex gap-10 pb-16 relative"
              >
                {/* Vertical line */}
                {i < timeline.length - 1 && (
                  <div className="absolute left-[3.25rem] top-14 bottom-0 w-px bg-gray-100" />
                )}

                {/* Year circle */}
                <div className="flex-shrink-0 w-26 text-right">
                  <span className="text-[10px] font-black uppercase tracking-[0.25em] text-accent">
                    {item.year}
                  </span>
                </div>

                {/* Dot */}
                <div className="flex-shrink-0 w-3 h-3 rounded-full bg-accent mt-1 ring-4 ring-white ring-offset-0" />

                {/* Content */}
                <div className="flex-1 pt-0 pb-4">
                  <h3 className="text-xl font-black uppercase tracking-tighter mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WORKSHOP IMAGE ── */}
      <section className="container-custom pb-24">
        <div className="relative aspect-[21/9] rounded-[2.5rem] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1600&auto=format&fit=crop"
            alt="Our Workshop"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-primary/20 hover:bg-transparent transition-all duration-700" />
          <div className="absolute bottom-10 left-10">
            <span className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full text-[10px] font-black tracking-[0.25em] uppercase shadow-sm">
              Copenhagen, DK — Est. 2014
            </span>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-secondary py-24">
        <div className="container-custom text-center max-w-xl mx-auto">
          <h2 className="text-4xl font-black uppercase tracking-tighter mb-6">
            Bring the Story Home
          </h2>
          <p className="text-muted-foreground mb-10 leading-relaxed">
            Explore our curated collection of premium Scandinavian furniture and decor.
          </p>
          <Link
            href="/shop"
            className="btn btn-primary px-12 py-5 rounded-2xl inline-flex items-center gap-3 uppercase tracking-[0.2em] text-[11px] font-black group"
          >
            Shop the Collection <ArrowRight size={18} className="transition-transform group-hover:translate-x-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
