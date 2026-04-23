"use client";

import React, { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { products } from "@/data/products";
import ProductCard from "@/components/products/ProductCard";
import { Search as SearchIcon, Frown } from "@/components/ui/Icons";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  
  const searchResults = useMemo(() => {
    if (!query) return [];
    const lowerQuery = query.toLowerCase();
    return products.filter(
      (p) => 
        p.name.toLowerCase().includes(lowerQuery) || 
        p.category.toLowerCase().includes(lowerQuery) ||
        p.description.toLowerCase().includes(lowerQuery)
    );
  }, [query]);

  return (
    <div className="container-custom py-12">
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-secondary p-3 rounded-full">
            <SearchIcon size={24} className="text-accent" />
          </div>
          <h1 className="text-4xl font-bold tracking-tighter">
            Search Results
          </h1>
        </div>
        <p className="text-gray-500">
          {searchResults.length} results found for &quot;<span className="text-primary font-bold">{query}</span>&quot;
        </p>
      </div>

      {searchResults.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {searchResults.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-32 bg-muted rounded-3xl">
          <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm">
            <Frown size={32} className="text-gray-400" />
          </div>
          <h2 className="text-2xl font-bold mb-4">No matching products</h2>
          <p className="text-gray-500 mb-10 max-w-md mx-auto leading-relaxed">
            We couldn&apos;t find anything matching your search. Try different keywords or 
            browse our categories to find what you&apos;re looking for.
          </p>
          <a href="/shop" className="btn btn-primary px-10 py-4">
            Browse All Products
          </a>
        </div>
      )}

      {/* Popular Suggestions */}
      <div className="mt-24 pt-24 border-t">
        <h2 className="text-2xl font-bold mb-8 tracking-tighter text-center">Popular Searches</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {["Wooden Chairs", "Table Lamps", "Minimalist Sofa", "Vases", "Scandinavian Decor"].map((tag) => (
            <a 
              key={tag} 
              href={`/search?q=${tag}`}
              className="px-6 py-2 bg-secondary rounded-full text-sm font-medium hover:bg-accent hover:text-white transition-all"
            >
              {tag}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
