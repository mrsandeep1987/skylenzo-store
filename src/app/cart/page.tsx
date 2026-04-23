"use client";

import React from "react";
import { useStore } from "@/store/useStore";
import Link from "next/link";
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from "@/components/ui/Icons";
import { formatPrice } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useStore();

  const subtotal = cart.reduce((acc, item) => acc + (item.salePrice || item.price) * item.quantity, 0);
  const shipping = subtotal > 200 ? 0 : 25;
  const total = subtotal + shipping;

  return (
    <div className="container-custom py-12 md:py-24 min-h-[70vh]">
      <div className="flex flex-col lg:flex-row gap-16">
        {/* Cart Items */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-12 pb-6 border-b border-gray-100">
            <h1 className="text-4xl font-black tracking-tighter uppercase">Your Shopping Cart</h1>
            <span className="text-muted-foreground font-bold text-sm tracking-widest uppercase">
              {cart.length} {cart.length === 1 ? "Item" : "Items"}
            </span>
          </div>

          <AnimatePresence mode="popLayout">
            {cart.length > 0 ? (
              <div className="space-y-8">
                {cart.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col sm:flex-row items-center gap-6 p-6 glass-card rounded-3xl"
                  >
                    <div className="w-full sm:w-32 aspect-square rounded-2xl overflow-hidden bg-muted">
                      <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    
                    <div className="flex-1 text-center sm:text-left">
                      <h3 className="text-lg font-black mb-1">{item.name}</h3>
                      <p className="text-xs text-muted-foreground font-bold uppercase tracking-widest mb-4">{item.category}</p>
                      <div className="flex items-center justify-center sm:justify-start gap-4">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="font-black text-sm w-4 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>

                    <div className="flex flex-col items-center sm:items-end gap-4">
                      <span className="text-lg font-black">
                        {formatPrice((item.salePrice || item.price) * item.quantity)}
                      </span>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-muted-foreground hover:text-red-500 transition-colors p-2"
                        title="Remove item"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-24 bg-muted/30 rounded-[3rem]">
                <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm">
                  <ShoppingBag size={32} className="text-gray-300" />
                </div>
                <h2 className="text-2xl font-black mb-4">Your cart is empty</h2>
                <p className="text-muted-foreground mb-10 max-w-sm mx-auto leading-relaxed">
                  Looks like you haven't added anything to your cart yet. 
                  Explore our premium Scandinavian collection.
                </p>
                <Link href="/shop" className="btn btn-primary px-10 py-4 uppercase tracking-widest text-xs font-black">
                  Start Shopping
                </Link>
              </div>
            )}
          </AnimatePresence>
        </div>

        {/* Order Summary */}
        {cart.length > 0 && (
          <div className="w-full lg:w-[400px]">
            <div className="glass-card rounded-[2.5rem] p-10 sticky top-32">
              <h2 className="text-2xl font-black mb-8 tracking-tighter uppercase border-b pb-6">Order Summary</h2>
              
              <div className="space-y-6 mb-10">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground font-bold uppercase tracking-widest">Subtotal</span>
                  <span className="font-black">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground font-bold uppercase tracking-widest">Shipping</span>
                  <span className="font-black">
                    {shipping === 0 ? <span className="text-green-500 uppercase">Free</span> : formatPrice(shipping)}
                  </span>
                </div>
                {shipping > 0 && (
                  <p className="text-[10px] text-muted-foreground italic">
                    Add {formatPrice(200 - subtotal)} more for free shipping!
                  </p>
                )}
                <div className="pt-6 border-t border-gray-100 flex justify-between items-center">
                  <span className="text-lg font-black uppercase tracking-tighter">Total</span>
                  <span className="text-2xl font-black">{formatPrice(total)}</span>
                </div>
              </div>

              <Link 
                href="/checkout" 
                className="btn btn-primary w-full py-5 rounded-2xl flex items-center justify-center gap-3 uppercase tracking-[0.2em] text-[11px] font-black group"
              >
                Checkout Now <ArrowRight size={18} className="transition-transform group-hover:translate-x-2" />
              </Link>
              
              <p className="mt-8 text-center text-[10px] text-muted-foreground font-bold uppercase tracking-widest flex items-center justify-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Secure Checkout Powered by Stripe
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
