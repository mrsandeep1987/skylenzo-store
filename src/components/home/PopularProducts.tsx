"use client";

import React, { useState } from "react";
import { products, categories } from "@/data/products";
import ProductCard from "@/components/products/ProductCard";
import { motion, AnimatePresence } from "framer-motion";

const PopularProducts = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredProducts = products.filter(
    (p) => activeCategory === "All" || p.category === activeCategory
  ).slice(0, 8);

  return (
    <section className="py-32 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase mb-8">
            Popular Products
          </h2>
          
          <div className="flex flex-wrap justify-center gap-8 mb-16">
            {categories.slice(0, 5).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-[10px] font-black uppercase tracking-[0.3em] pb-2 border-b-2 transition-all ${
                  activeCategory === cat ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
