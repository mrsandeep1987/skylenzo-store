"use client";

import React from "react";
import { products } from "@/data/products";
import Link from "next/link";
import { ArrowRight } from "@/components/ui/Icons";
import { cn, formatPrice } from "@/lib/utils";
import { motion } from "framer-motion";

const FeaturedProducts = () => {
  const featured = products.filter((p) => p.isFeatured).slice(0, 4);

  return (
    <section className="py-32 bg-white">
      <div className="container-custom">
        <div className="text-center mb-24">
          <span className="text-muted-foreground font-bold text-[10px] tracking-[0.4em] uppercase mb-4 block">
            Trending Products
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase">
            Curated For You
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Large Item - Left */}
          <div className="md:col-span-7">
            <FeaturedItem 
              product={featured[0]} 
              className="aspect-[16/10]" 
              label="Best Seller"
              variant="accent"
            />
          </div>
          
          {/* Small Item - Right Top */}
          <div className="md:col-span-5 flex flex-col justify-end">
            <FeaturedItem 
              product={featured[1]} 
              className="aspect-square" 
              label="New Arrival"
            />
          </div>

          {/* Small Item - Left Bottom */}
          <div className="md:col-span-5">
            <FeaturedItem 
              product={featured[2]} 
              className="aspect-square" 
              label="Limited"
            />
          </div>

          {/* Large Item - Right Bottom */}
          <div className="md:col-span-7">
            <FeaturedItem 
              product={featured[3]} 
              className="aspect-[16/10]" 
              label="Editor's Choice"
              variant="dark"
            />
          </div>
        </div>

        <div className="mt-24 text-center">
          <Link href="/shop" className="group inline-flex items-center text-sm font-black tracking-widest uppercase border-b-2 border-primary pb-2 hover:text-accent hover:border-accent transition-all">
            View All Products <ArrowRight size={20} className="ml-3 transition-transform group-hover:translate-x-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

function FeaturedItem({ 
  product, 
  className, 
  label,
  variant = "default"
}: { 
  product: any, 
  className: string, 
  label: string,
  variant?: "default" | "accent" | "dark"
}) {
  if (!product) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={cn("group relative overflow-hidden rounded-[2rem]", className)}
    >
      <Link href={`/product/${product.id}`} className="block h-full w-full">
        <img 
          src={product.images[0]} 
          alt={product.name} 
          className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        
        {/* Overlay Decoration */}
        <div className={cn(
          "absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10",
          variant === "accent" ? "bg-accent/40" : variant === "dark" ? "bg-black/40" : "bg-white/40"
        )}>
          <div className="bg-white p-8 rounded-2xl shadow-2xl transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
            <span className="text-[10px] font-bold tracking-widest uppercase text-accent mb-2 block">{label}</span>
            <h3 className="text-xl font-black mb-2">{product.name}</h3>
            <p className="text-sm font-bold text-gray-500">{formatPrice(product.price)}</p>
          </div>
        </div>

        {/* Floating Label */}
        <div className="absolute top-8 left-8">
          <span className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-[10px] font-black tracking-widest uppercase shadow-sm">
            {product.category}
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

export default FeaturedProducts;
