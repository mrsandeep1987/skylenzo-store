"use client";

import React, { useState } from "react";
import { toast } from "react-hot-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    // Mock API call
    toast.success("Thank you for subscribing to our newsletter!");
    setEmail("");
  };

  return (
    <section className="py-24 bg-primary text-white overflow-hidden relative">
      <div className="container-custom relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 tracking-tighter">Stay Inspired</h2>
          <p className="text-gray-300 mb-10 text-lg leading-relaxed">
            Subscribe to our newsletter and receive 10% off your first order, plus exclusive 
            access to new collections and home styling tips.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:border-white transition-colors"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className="bg-white text-primary px-8 py-4 rounded-md font-bold hover:bg-gray-100 transition-colors whitespace-nowrap">
              Subscribe Now
            </button>
          </form>
          
          <p className="mt-6 text-xs text-gray-400">
            By subscribing, you agree to our Privacy Policy and Terms of Service.
          </p>
        </div>
      </div>

      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/20 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
    </section>
  );
};

export default Newsletter;
