"use client";

import React from "react";
import { categories } from "@/data/products";
import { cn } from "@/lib/utils";

interface FilterSidebarProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  selectedCategory,
  setSelectedCategory,
  priceRange,
  setPriceRange,
  sortBy,
  setSortBy,
}) => {
  return (
    <aside className="w-full lg:w-64 flex-shrink-0 space-y-10">
      {/* Categories */}
      <div>
        <h3 className="text-lg font-bold mb-6 tracking-tight">Categories</h3>
        <ul className="space-y-3">
          {categories.map((category) => (
            <li key={category}>
              <button
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  "text-sm transition-all duration-300 flex items-center justify-between w-full group py-1",
                  selectedCategory === category ? "text-accent font-black tracking-wide" : "text-gray-500 hover:text-accent"
                )}
              >
                {category}
                <span className={cn(
                  "text-[9px] px-2 py-0.5 rounded-full transition-colors",
                  selectedCategory === category ? "bg-accent text-white" : "bg-gray-100 text-gray-400 group-hover:bg-accent/10 group-hover:text-accent"
                )}>
                  {category === "All" ? "12" : "3"}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="text-lg font-bold mb-6 tracking-tight">Price Range</h3>
        <div className="px-2">
          <input
            type="range"
            min="0"
            max="500"
            step="10"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
            className="w-full accent-accent"
          />
          <div className="flex justify-between mt-4 text-sm font-medium text-gray-500">
            <span>$0</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>
      </div>

      {/* Sort By */}
      <div>
        <h3 className="text-lg font-bold mb-6 tracking-tight">Sort By</h3>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="w-full bg-secondary border-none rounded-lg p-3 text-sm focus:ring-accent"
        >
          <option value="newest">Newest First</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Top Rated</option>
        </select>
      </div>

      {/* Promotions */}
      <div className="bg-primary p-6 rounded-2xl text-white">
        <h4 className="font-bold mb-2">Summer Sale</h4>
        <p className="text-xs text-gray-400 mb-4">Up to 40% off on selected furniture</p>
        <button className="text-sm font-bold text-white border-b border-white pb-1 hover:text-accent hover:border-accent transition-all">
          Explore Now
        </button>
      </div>
    </aside>
  );
};

export default FilterSidebar;
