"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Award, Users, Earth, Lightbulb } from "@/components/ui/Icons";

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-0">

      {/* ── HERO ── */}
      <section className="relative h-[calc(85vh+5rem)] min-h-[650px] flex items-end overflow-hidden -mt-20">
        {/* Background */}
        <img
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1600&auto=format&fit=crop"
          alt="SkyLenzo showroom"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220_30%_8%)] via-[hsl(220_30%_10%/0.6)] to-transparent" />

        {/* Content */}
        <div className="relative z-10 container-custom pb-20 md:pb-28">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-accent font-black text-[11px] tracking-[0.4em] uppercase mb-6 block">
              About Us
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-[1.05] max-w-3xl mb-8">
              Crafting <span className="text-accent">Minimalist</span><br />
              Living Spaces
            </h1>
            <p className="text-gray-400 text-lg font-medium max-w-xl leading-relaxed mb-10">
              Born in Copenhagen. Built for the world. SkyLenzo brings premium
              Scandinavian design to modern homes everywhere.
            </p>
            <Link
              href="/shop"
              className="btn btn-primary px-10 py-5 rounded-2xl inline-flex items-center gap-3 uppercase tracking-[0.2em] text-[11px] font-black group"
            >
              Explore Collection
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-2" />
            </Link>
          </motion.div>
        </div>

        {/* Bronze accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[hsl(35_25%_65%)] to-transparent opacity-60" />
      </section>

      {/* ── STATS STRIP ── */}
      <section className="bg-primary text-white">
        <div className="container-custom grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
          {[
            { value: "12+", label: "Years of Design" },
            { value: "50k+", label: "Satisfied Clients" },
            { value: "200+", label: "Products Crafted" },
            { value: "15", label: "Design Awards" },
          ].map((s) => (
            <div key={s.label} className="py-10 px-8 text-center">
              <p className="text-3xl md:text-4xl font-black text-accent mb-1">{s.value}</p>
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-gray-400">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── PHILOSOPHY ── */}
      <section className="py-24 md:py-32">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[580px] rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop"
                alt="Our Workshop"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-accent/5 hover:bg-transparent transition-all duration-700" />
            </div>
            <div className="space-y-8">
              <span className="text-accent font-black text-[11px] tracking-[0.4em] uppercase">Philosophy</span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter">
                The SkyLenzo<br />Philosophy
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We believe that less is more. Our designers focus on clean lines, natural
                materials, and functional elegance. Every piece in our collection is selected
                with the intent to bring harmony to your living environment.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                SkyLenzo was born out of a passion for Scandinavian design and the belief that
                beautiful, functional furniture should be accessible to everyone.
              </p>
              <Link href="/our-story" className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest border-b-2 border-primary pb-1 hover:text-accent hover:border-accent transition-all group">
                Read Our Full Story
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="py-24 bg-primary text-white">
        <div className="container-custom">
          <div className="text-center mb-20">
            <span className="text-accent font-black text-[11px] tracking-[0.4em] uppercase mb-4 block">What Drives Us</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: <Award size={32} />, title: "Quality First", desc: "We never compromise on the materials or craftsmanship of our pieces." },
              { icon: <Earth size={32} />, title: "Sustainability", desc: "Our wood is sourced from FSC-certified forests with eco-friendly finishes." },
              { icon: <Users size={32} />, title: "Community", desc: "We collaborate with local artisans and designers to foster creativity." },
              { icon: <Lightbulb size={32} />, title: "Innovation", desc: "Constantly evolving our designs to meet modern living needs." },
            ].map((item) => (
              <div key={item.title} className="text-center space-y-4 group">
                <div className="mx-auto w-16 h-16 bg-accent/10 group-hover:bg-accent/20 rounded-2xl flex items-center justify-center mb-6 transition-all text-accent">
                  {item.icon}
                </div>
                <h4 className="text-xl font-black uppercase tracking-tighter">{item.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="py-24">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="w-full lg:w-1/3 lg:sticky lg:top-32">
              <span className="text-accent font-black text-[11px] tracking-[0.4em] uppercase mb-6 block">The People</span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">Meet the Visionaries</h2>
              <p className="text-muted-foreground mb-10 leading-relaxed">
                Our diverse team of designers and craftsmen share a singular vision:
                to bring timeless Scandinavian design to homes across the globe.
              </p>
              <Link href="/careers" className="btn btn-outline border-2">Join Our Team</Link>
            </div>
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { name: "Søren Jensen", role: "Lead Designer", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop" },
                { name: "Elena Rossi", role: "Creative Director", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop" },
              ].map((m) => (
                <div key={m.name} className="group space-y-4">
                  <div className="aspect-[3/4] rounded-[2rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                    <img src={m.img} alt={m.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <div>
                    <h4 className="font-black text-lg uppercase tracking-tighter">{m.name}</h4>
                    <p className="text-sm text-muted-foreground font-bold uppercase tracking-widest">{m.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
