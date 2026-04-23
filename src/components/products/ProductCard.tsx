"use client";

import React from "react";
import Link from "next/link";
import { ShoppingCart, Heart, Eye } from "@/components/ui/Icons";
import { Product } from "@/data/products";
import { useStore } from "@/store/useStore";
import { cn, formatPrice } from "@/lib/utils";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const addToCart = useStore((state) => state.addToCart);
  const toggleWishlist = useStore((state) => state.toggleWishlist);
  const wishlist = useStore((state) => state.wishlist);
  
  const isWishlisted = wishlist.some((item) => item.id === product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    toast.success(`${product.name} added to cart`);
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
    if (isWishlisted) {
      toast.error(`${product.name} removed from wishlist`);
    } else {
      toast.success(`${product.name} added to wishlist`);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative"
    >
      <Link href={`/product/${product.id}`}>
        <div className="relative aspect-square overflow-hidden bg-gray-100 rounded-lg">
          <img
            src={product.images[0]}
            alt={product.name}
            className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {product.isNew && (
              <span className="bg-primary text-white text-[9px] font-black tracking-widest px-2 py-1 rounded-sm shadow-sm">NEW</span>
            )}
            {product.onSale && (
              <span className="bg-accent text-white text-[9px] font-black tracking-widest px-2 py-1 rounded-sm shadow-sm">SALE</span>
            )}
          </div>

          {/* Action Overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100">
            <button
              onClick={handleAddToCart}
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary hover:bg-accent hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0"
              title="Add to Cart"
            >
              <ShoppingCart size={18} />
            </button>
            <button
              onClick={handleToggleWishlist}
              className={cn(
                "w-10 h-10 bg-white rounded-full flex items-center justify-center transition-all transform translate-y-4 group-hover:translate-y-0 delay-75",
                isWishlisted ? "text-red-500" : "text-primary hover:text-red-500"
              )}
              title="Wishlist"
            >
              <Heart size={18} fill={isWishlisted ? "currentColor" : "none"} />
            </button>
            <button
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary hover:bg-accent hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 delay-150"
              title="Quick View"
            >
              <Eye size={18} />
            </button>
          </div>
        </div>

        <div className="mt-4 flex justify-between items-start">
          <div>
            <h3 className="text-sm font-medium text-gray-700">{product.name}</h3>
            <p className="mt-1 text-xs text-gray-500">{product.category}</p>
          </div>
          <div className="text-right">
            {product.onSale && product.salePrice ? (
              <>
                <p className="text-sm font-black text-accent">{formatPrice(product.salePrice)}</p>
                <p className="text-[10px] text-gray-400 line-through font-medium tracking-tighter">{formatPrice(product.price)}</p>
              </>
            ) : (
              <p className="text-sm font-black text-primary">{formatPrice(product.price)}</p>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
