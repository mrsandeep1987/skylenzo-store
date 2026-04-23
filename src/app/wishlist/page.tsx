"use client";

import React from "react";
import { useStore } from "@/store/useStore";
import ProductCard from "@/components/products/ProductCard";
import Link from "next/link";
import { Heart, ShoppingBag, ArrowLeft } from "@/components/ui/Icons";
import { motion, AnimatePresence } from "framer-motion";

export default function WishlistPage() {
  const wishlist = useStore((state) => state.wishlist);

  return (
    <div className="container-custom py-12 min-h-[70vh]">
      <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-3 mb-2 text-accent">
            <Heart size={20} fill="currentColor" />
            <span className="font-bold tracking-widest text-xs uppercase">Your Collection</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tighter">My Wishlist</h1>
        </div>
        <Link href="/shop" className="btn btn-outline flex items-center gap-2">
          <ArrowLeft size={18} /> Continue Shopping
        </Link>
      </div>

      <AnimatePresence mode="popLayout">
        {wishlist.length > 0 ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {wishlist.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-32 glass-card rounded-3xl max-w-2xl mx-auto"
          >
            <div className="bg-secondary w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
              <Heart size={32} className="text-gray-300" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Your wishlist is empty</h2>
            <p className="text-muted-foreground mb-10 max-w-md mx-auto leading-relaxed">
              Save items you love to your wishlist and they will appear here. 
              Find your next favorite piece for your modern home.
            </p>
            <Link href="/shop" className="btn btn-primary px-10">
              <ShoppingBag size={20} className="mr-2" /> Start Shopping
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Suggested for you */}
      {wishlist.length > 0 && (
        <div className="mt-32 pt-24 border-t">
          <h2 className="text-2xl font-bold mb-12 tracking-tighter text-center">People also loved</h2>
          {/* This would normally be a carousel of recommended products */}
          <p className="text-center text-muted-foreground italic">Add more items to see personalized recommendations.</p>
        </div>
      )}
    </div>
  );
}
