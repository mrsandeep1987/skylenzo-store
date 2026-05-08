"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingCart, Heart, Search, Menu, X, User } from "@/components/ui/Icons";
import { useStore } from "@/store/useStore";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  
  const pathname = usePathname();
  const cart = useStore((state) => state.cart);
  const wishlist = useStore((state) => state.wishlist);
  
  const cartItemsCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  // Only use transparent/white-text style on the homepage
  const isHomePage = pathname === "/";
  // Use transparent hero style only when on home AND not yet scrolled
  const isTransparent = isHomePage && !isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 text-[10px] font-black tracking-[0.3em] uppercase text-center">
        Free shipping on all orders over $200 • 30-day return policy
      </div>
      
      <nav 
        className={cn(
          "transition-all duration-500 border-b border-transparent",
          isTransparent ? "bg-transparent py-8" : "bg-white/90 backdrop-blur-md shadow-sm py-4 border-gray-100"
        )}
      >
        <div className="container-custom flex items-center">
          {/* Desktop Navigation - Left */}
          <ul className="hidden lg:flex items-center space-x-10 flex-1">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={cn(
                    "text-[11px] font-black tracking-widest uppercase transition-all duration-300 relative group",
                    pathname === link.href
                      ? "text-accent"
                      : isTransparent
                      ? "text-white/90 hover:text-accent"
                      : "text-primary hover:text-accent"
                  )}
                >
                  {link.name}
                  <span className={cn(
                    "absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full",
                    pathname === link.href && "w-full"
                  )} />
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Toggle */}
          <button
            className={cn("lg:hidden p-2 flex-1 flex justify-start transition-colors", isTransparent ? "text-white" : "text-primary")}
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>

          <Link
            href="/"
            className={cn(
              "text-3xl font-black tracking-[-0.05em] flex-1 flex justify-center lowercase transition-colors duration-300",
              isTransparent ? "text-white" : "text-primary"
            )}
          >
            skylenzo
          </Link>

          {/* Icons - Right */}
          <div className="flex items-center justify-end space-x-2 sm:space-x-4 flex-1">
            <button
              className={cn("p-2 hover:text-accent transition-all duration-300 hover:scale-110", isTransparent ? "text-white" : "text-primary")}
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search size={18} strokeWidth={2.5} />
            </button>

            <Link href="/wishlist" className={cn("p-2 hover:text-accent transition-all duration-300 hover:scale-110 relative", isTransparent ? "text-white" : "text-primary")}>
              <Heart size={18} strokeWidth={2.5} />
              {wishlist.length > 0 && (
                <span className="absolute top-1 right-1 bg-accent text-white text-[8px] w-3.5 h-3.5 flex items-center justify-center rounded-full font-black">
                  {wishlist.length}
                </span>
              )}
            </Link>

            <Link href="/cart" className={cn("p-2 hover:text-accent transition-all duration-300 hover:scale-110 relative", isTransparent ? "text-white" : "text-primary")}>
              <ShoppingCart size={18} strokeWidth={2.5} />
              {cartItemsCount > 0 && (
                <span className="absolute top-1 right-1 bg-accent text-white text-[8px] w-3.5 h-3.5 flex items-center justify-center rounded-full font-black">
                  {cartItemsCount}
                </span>
              )}
            </Link>

            <Link href="/login" className={cn("hidden sm:block p-2 hover:text-accent transition-all duration-300 hover:scale-110", isTransparent ? "text-white" : "text-primary")}>
              <User size={18} strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </nav>

      {/* Search Bar Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-t p-4 shadow-lg"
          >
            <div className="container-custom flex items-center">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full py-2 bg-transparent border-b border-gray-200 focus:outline-none focus:border-accent text-lg"
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    window.location.href = `/search?q=${searchQuery}`;
                  }
                }}
              />
              <button 
                className="ml-4 p-2"
                onClick={() => setIsSearchOpen(false)}
              >
                <X size={24} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Sidebar */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-[60]"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-80 bg-white z-[70] p-6 shadow-xl"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="text-2xl font-bold uppercase tracking-tighter">SkyLenzo</span>
                <button onClick={() => setIsMobileMenuOpen(false)}>
                  <X size={24} />
                </button>
              </div>
              <ul className="space-y-6">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-xl font-medium block"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/login"
                    className="text-xl font-medium block"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    My Account
                  </Link>
                </li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
