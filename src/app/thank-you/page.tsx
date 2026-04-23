"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, ShoppingBag, ArrowRight, Instagram, Facebook, Twitter } from "@/components/ui/Icons";

export default function ThankYouPage() {
  const orderNumber = "SL-" + Math.floor(100000 + Math.random() * 900000);

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-20 bg-[#f9f9f9]">
      <div className="container-custom max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-[3rem] p-12 md:p-20 shadow-xl border border-gray-100"
        >
          <div className="w-24 h-24 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-10">
            <CheckCircle2 size={48} strokeWidth={2.5} />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-6">
            Thank You for <br /> Your Order!
          </h1>
          
          <p className="text-muted-foreground text-lg mb-10 leading-relaxed font-medium">
            Your order <span className="text-primary font-black">#{orderNumber}</span> has been 
            placed successfully. We've sent a confirmation email to your inbox.
          </p>

          <div className="bg-muted/30 rounded-2xl p-6 mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-left">
              <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">Status</p>
              <p className="text-sm font-black uppercase tracking-tighter">Processing Order</p>
            </div>
            <div className="text-left">
              <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">Expected Delivery</p>
              <p className="text-sm font-black uppercase tracking-tighter">3 - 5 Business Days</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/shop" className="btn btn-primary px-10 py-5 rounded-2xl uppercase tracking-[0.2em] text-[11px] font-black group">
              <ShoppingBag size={18} className="mr-3" /> Continue Shopping
            </Link>
          </div>

          <div className="pt-12 border-t">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-6">Share your find</p>
            <div className="flex justify-center gap-6">
              <a href="#" className="text-primary hover:text-accent transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-primary hover:text-accent transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-primary hover:text-accent transition-colors"><Twitter size={20} /></a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
