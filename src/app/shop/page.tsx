"use client";

import React, { useState, useMemo } from "react";
import FilterSidebar from "@/components/shop/FilterSidebar";
import ProductCard from "@/components/products/ProductCard";
import { products } from "@/data/products";
import { motion, AnimatePresence } from "framer-motion";
import { SlidersHorizontal, X } from "@/components/ui/Icons";

import { useSearchParams } from "next/navigation";

export default function ShopPage() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "All";
  
  const [selectedCategory, setSelectedCategory] = React.useState(initialCategory);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);
  const [sortBy, setSortBy] = useState("newest");
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  // Update selectedCategory if URL param changes
  React.useEffect(() => {
    const category = searchParams.get("category");
    if (category) {
      setSelectedCategory(category);
    }
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by Category
    if (selectedCategory !== "All") {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Filter by Price
    result = result.filter((p) => p.price <= priceRange[1]);

    // Sort
    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // Assume newest (id based for mock)
        result.sort((a, b) => parseInt(b.id) - parseInt(a.id));
    }

    return result;
  }, [selectedCategory, priceRange, sortBy]);

  return (
    <div className="container-custom py-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h1 className="text-4xl font-bold tracking-tighter mb-2">Shop Categories</h1>
          <p className="text-gray-500">Discover our curated collection of Scandinavian design.</p>
        </div>
        
        <div className="flex items-center gap-4">
          <p className="text-sm font-medium text-gray-500">
            Showing <span className="text-primary font-bold">{filteredProducts.length}</span> Products
          </p>
          <button 
            className="lg:hidden flex items-center gap-2 btn-outline px-4 py-2 text-sm"
            onClick={() => setIsMobileFiltersOpen(true)}
          >
            <SlidersHorizontal size={16} /> Filters
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block">
          <FilterSidebar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            sortBy={sortBy}
            setSortBy={setSortBy}
          />
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </AnimatePresence>
            </div>
          ) : (
            <div className="text-center py-20 bg-muted rounded-2xl">
              <h3 className="text-xl font-bold mb-2">No products found</h3>
              <p className="text-gray-500 mb-8">Try adjusting your filters or search criteria.</p>
              <button 
                onClick={() => {
                  setSelectedCategory("All");
                  setPriceRange([0, 500]);
                }}
                className="btn btn-primary"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Filters Drawer */}
      <AnimatePresence>
        {isMobileFiltersOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-[60]"
              onClick={() => setIsMobileFiltersOpen(false)}
            />
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed bottom-0 left-0 right-0 h-[80vh] bg-white z-[70] p-6 rounded-t-3xl shadow-xl overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold">Filters</h3>
                <button onClick={() => setIsMobileFiltersOpen(false)}>
                  <X size={24} />
                </button>
              </div>
              <FilterSidebar
                selectedCategory={selectedCategory}
                setSelectedCategory={(cat) => {
                  setSelectedCategory(cat);
                  setIsMobileFiltersOpen(false);
                }}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                sortBy={sortBy}
                setSortBy={setSortBy}
              />
              <div className="mt-10">
                <button 
                  className="btn btn-primary w-full"
                  onClick={() => setIsMobileFiltersOpen(false)}
                >
                  Show Results
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
