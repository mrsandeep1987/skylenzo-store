"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { products } from "@/data/products";
import { useStore } from "@/store/useStore";
import { formatPrice, cn } from "@/lib/utils";
import { ShoppingCart, Heart, Star, Minus, Plus, Share2, ShieldCheck, Truck } from "@/components/ui/Icons";
import { toast } from "react-hot-toast";
import ProductCard from "@/components/products/ProductCard";
import { motion } from "framer-motion";

export default function ProductDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const productId = params.id as string;
  
  const product = products.find((p) => p.id === productId);
  const addToCart = useStore((state) => state.addToCart);
  const toggleWishlist = useStore((state) => state.toggleWishlist);
  const wishlist = useStore((state) => state.wishlist);
  
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  if (!product) {
    return (
      <div className="container-custom py-24 text-center">
        <h2 className="text-3xl font-bold mb-4">Product Not Found</h2>
        <button onClick={() => router.push("/shop")} className="btn btn-primary">
          Back to Shop
        </button>
      </div>
    );
  }

  const isWishlisted = wishlist.some((item) => item.id === product.id);

  const handleAddToCart = () => {
    // We add 'quantity' times
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    toast.success(`${quantity} x ${product.name} added to cart`);
  };

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="container-custom py-12">
      <div className="flex flex-col lg:flex-row gap-16">
        {/* Image Gallery */}
        <div className="w-full lg:w-1/2 space-y-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="aspect-square bg-gray-100 rounded-2xl overflow-hidden"
          >
            <img
              src={product.images[activeImage]}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
          </motion.div>
          
          <div className="flex gap-4">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImage(idx)}
                className={cn(
                  "w-24 h-24 rounded-lg overflow-hidden border-2 transition-all",
                  activeImage === idx ? "border-accent" : "border-transparent opacity-60 hover:opacity-100"
                )}
              >
                <img src={img} alt={`${product.name} ${idx}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="w-full lg:w-1/2">
          <div className="mb-8">
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
              <span>Home</span>
              <span>/</span>
              <span>{product.category}</span>
              <span>/</span>
              <span className="text-primary font-medium">{product.name}</span>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tighter mb-4">{product.name}</h1>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} />
                ))}
              </div>
              <span className="text-sm text-gray-500">({product.reviewsCount} Customer Reviews)</span>
            </div>

            <div className="text-3xl font-bold text-primary mb-6">
              {product.onSale && product.salePrice ? (
                <div className="flex items-center gap-4">
                  <span className="text-accent">{formatPrice(product.salePrice)}</span>
                  <span className="text-xl text-gray-400 line-through font-normal">{formatPrice(product.price)}</span>
                </div>
              ) : (
                formatPrice(product.price)
              )}
            </div>

            <p className="text-gray-600 mb-8 leading-relaxed">
              {product.description}
            </p>

            <div className="flex items-center gap-8 mb-8">
              <div className="flex items-center border rounded-lg overflow-hidden">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-gray-100 transition-colors"
                >
                  <Minus size={18} />
                </button>
                <span className="w-12 text-center font-bold">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-gray-100 transition-colors"
                >
                  <Plus size={18} />
                </button>
              </div>
              <span className="text-sm text-gray-500">{product.stock} items in stock</span>
            </div>

            <div className="flex gap-4 mb-10">
              <button 
                onClick={handleAddToCart}
                className="flex-1 btn btn-primary py-4 flex items-center justify-center gap-2"
              >
                <ShoppingCart size={20} /> Add to Cart
              </button>
              <button 
                onClick={() => {
                  toggleWishlist(product);
                  toast.success(isWishlisted ? "Removed from wishlist" : "Added to wishlist");
                }}
                className={cn(
                  "p-4 border rounded-lg transition-all",
                  isWishlisted ? "bg-red-50 text-red-500 border-red-200" : "hover:bg-gray-50"
                )}
              >
                <Heart size={20} fill={isWishlisted ? "currentColor" : "none"} />
              </button>
              <button className="p-4 border rounded-lg hover:bg-gray-50 transition-all">
                <Share2 size={20} />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-8 border-t">
              <div className="flex items-center gap-3">
                <Truck className="text-accent" size={20} />
                <div className="text-xs">
                  <p className="font-bold">Fast Delivery</p>
                  <p className="text-gray-500">2-4 Business Days</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="text-accent" size={20} />
                <div className="text-xs">
                  <p className="font-bold">2 Year Warranty</p>
                  <p className="text-gray-500">Full Coverage</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-24 border-b">
        <div className="flex gap-12">
          <button className="pb-4 border-b-2 border-primary font-bold">Description</button>
          <button className="pb-4 border-b-2 border-transparent text-gray-500 hover:text-primary transition-all">Reviews ({product.reviewsCount})</button>
          <button className="pb-4 border-b-2 border-transparent text-gray-500 hover:text-primary transition-all">Shipping Information</button>
        </div>
      </div>
      <div className="py-12 text-gray-600 leading-relaxed max-w-4xl">
        <p className="mb-6">
          This premium {product.name} is a testament to our commitment to quality and minimalist design. 
          Each piece is carefully inspected to ensure it meets our rigorous standards for durability and aesthetic appeal.
        </p>
        <p>
          Materials: Solid Oak Wood, Recycled Aluminum, Eco-friendly Fabrics. <br />
          Dimensions: 45cm x 45cm x 60cm <br />
          Weight: 2.5kg
        </p>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="mt-24">
          <h2 className="text-3xl font-bold mb-12 tracking-tighter text-center">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
