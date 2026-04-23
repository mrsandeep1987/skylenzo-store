"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "@/components/ui/Icons";

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=1600&auto=format&fit=crop",
    eyebrow: "New Collection 2024",
    headline: ["Illuminate", "Your Space"],
    accent: 0, // which word gets accent colour
    body: "Curated Scandinavian lamps designed for both style and serenity.",
    cta: { label: "Shop Lighting", href: "/shop?category=Lighting" },
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1600&auto=format&fit=crop",
    eyebrow: "Timeless Comfort",
    headline: ["Live With", "Purpose"],
    accent: 1,
    body: "Furniture crafted with FSC-certified wood and an eye for enduring beauty.",
    cta: { label: "Shop Furniture", href: "/shop?category=Furniture" },
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop",
    eyebrow: "Premium Decor",
    headline: ["Design", "Your Haven"],
    accent: 0,
    body: "Every detail considered — from texture to tone, harmony to home.",
    cta: { label: "Shop Decor", href: "/shop?category=Decor" },
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1600&auto=format&fit=crop",
    eyebrow: "Scandinavian Style",
    headline: ["Minimal", "Mastery"],
    accent: 0,
    body: "Where less is more and every object earns its place in your home.",
    cta: { label: "Explore All", href: "/shop" },
  },
];

const AUTOPLAY_INTERVAL = 5000;

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const goTo = useCallback((index: number) => {
    setCurrent(index);
    setProgress(0);
  }, []);

  const next = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length);
  }, [current, goTo]);

  // Autoplay + progress bar
  useEffect(() => {
    if (paused) return;
    const tick = 50; // ms
    const steps = AUTOPLAY_INTERVAL / tick;

    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          next();
          return 0;
        }
        return p + 100 / steps;
      });
    }, tick);

    return () => clearInterval(interval);
  }, [paused, next]);

  const slide = slides[current];

  return (
    <section
      className="relative h-[calc(90vh+5rem)] min-h-[750px] overflow-hidden bg-[hsl(220_30%_8%)] -mt-20"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── Background images ── */}
      <AnimatePresence mode="sync">
        <motion.img
          key={slide.id}
          src={slide.image}
          alt={slide.headline.join(" ")}
          className="absolute inset-0 w-full h-full object-cover object-center"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />
      </AnimatePresence>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(220_30%_8%/0.85)] via-[hsl(220_30%_8%/0.45)] to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220_30%_8%/0.6)] to-transparent" />

      {/* ── Slide counter (top right) ── */}
      <div className="absolute top-8 right-8 z-20 hidden sm:flex items-center gap-3">
        <span className="text-accent font-black text-[11px] tracking-[0.3em] tabular-nums">
          0{current + 1}
        </span>
        <div className="w-px h-4 bg-white/30" />
        <span className="text-white/40 font-black text-[11px] tracking-[0.3em] tabular-nums">
          0{slides.length}
        </span>
      </div>

      {/* ── Decorative side label ── */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-4 z-20">
        <span
          className="text-[9px] font-black tracking-[0.35em] uppercase text-white/30"
          style={{ writingMode: "vertical-rl" }}
        >
          Scroll Down
        </span>
        <div className="w-px h-16 bg-white/20" />
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container-custom">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-2xl"
            >
              <motion.span
                className="inline-block text-accent font-black tracking-[0.35em] text-[11px] uppercase mb-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15, duration: 0.6 }}
              >
                {slide.eyebrow}
              </motion.span>

              <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[1.05] mb-8">
                {slide.headline.map((word, i) => (
                  <span key={i} className={i === slide.accent ? "text-accent" : ""}>
                    {word}
                    {i < slide.headline.length - 1 && <br />}
                  </span>
                ))}
              </h1>

              <p className="text-gray-300 text-lg font-medium mb-12 leading-relaxed max-w-md">
                {slide.body}
              </p>

              <div className="flex items-center gap-8">
                <Link
                  href={slide.cta.href}
                  className="btn btn-primary px-10 py-5 rounded-2xl inline-flex items-center gap-3 uppercase tracking-[0.2em] text-[11px] font-black group"
                >
                  {slide.cta.label}
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-2" />
                </Link>
                <Link
                  href="/about"
                  className="text-white/60 hover:text-white text-[11px] font-black uppercase tracking-[0.25em] transition-colors border-b border-white/20 hover:border-white pb-1"
                >
                  Our Story
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ── Bottom controls ── */}
      <div className="absolute bottom-10 left-0 right-0 z-20">
        <div className="container-custom flex items-end justify-between gap-8">

          {/* Progress bars / dot nav */}
          <div className="flex items-center gap-3">
            {slides.map((s, i) => (
              <button
                key={s.id}
                onClick={() => goTo(i)}
                className="relative h-0.5 rounded-full overflow-hidden transition-all duration-300 cursor-pointer"
                style={{ width: i === current ? 64 : 24, background: "rgba(255,255,255,0.2)" }}
                aria-label={`Go to slide ${i + 1}`}
              >
                {i === current && (
                  <motion.div
                    className="absolute inset-y-0 left-0 bg-accent rounded-full"
                    style={{ width: `${progress}%` }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Prev / Next arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/40 transition-all"
              aria-label="Previous slide"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/40 transition-all"
              aria-label="Next slide"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom bronze line */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[hsl(35_25%_65%)] to-transparent opacity-40" />
    </section>
  );
};

export default Hero;
