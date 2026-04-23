"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Search } from "@/components/ui/Icons";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center py-20 bg-white">
      <div className="container-custom max-w-2xl text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative mb-12">
            <h1 className="text-[12rem] md:text-[18rem] font-black text-secondary leading-none select-none tracking-tighter">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-[-0.05em] bg-white px-8 py-4 shadow-2xl rounded-3xl transform -rotate-3">
                Page Not Found
              </h2>
            </div>
          </div>
          
          <p className="text-muted-foreground text-lg mb-12 max-w-md mx-auto leading-relaxed font-medium">
            The piece you're looking for seems to have been misplaced. 
            Don't worry, even the best designers lose their way sometimes.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/" className="btn btn-primary px-10 py-5 rounded-2xl flex items-center gap-3 uppercase tracking-[0.2em] text-[11px] font-black group w-full sm:w-auto">
              <Home size={18} /> Back to Home
            </Link>
            <Link href="/shop" className="text-sm font-bold tracking-widest uppercase border-b-2 border-primary pb-1 hover:text-accent hover:border-accent transition-all">
              Browse Collection
            </Link>
          </div>

          <div className="mt-20 pt-12 border-t max-w-xs mx-auto">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-6">Need help finding something?</p>
            <form className="relative">
              <input 
                type="text" 
                placeholder="Search..." 
                className="w-full bg-secondary rounded-full py-4 px-6 text-sm focus:outline-none"
              />
              <button type="submit" className="absolute right-4 top-1/2 -translate-y-1/2 text-primary">
                <Search size={18} />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
