"use client";

import React from "react";
import Hero from "@/components/home/Hero";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import DealOfTheDay from "@/components/home/DealOfTheDay";
import PopularProducts from "@/components/home/PopularProducts";
import Testimonials from "@/components/home/Testimonials";
import BlogSection from "@/components/home/BlogSection";
import { Truck, ShieldCheck, Clock, RefreshCcw } from "@/components/ui/Icons";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      
      {/* Features Bar */}
      <div className="bg-white py-20 border-b border-gray-100">
        <div className="container-custom grid grid-cols-2 lg:grid-cols-4 gap-12">
          <FeatureItem 
            icon={<Truck size={24} />} 
            title="Creative Design" 
            desc="Free Delivery" 
          />
          <FeatureItem 
            icon={<ShieldCheck size={24} />} 
            title="Free Shipping" 
            desc="On All Orders" 
          />
          <FeatureItem 
            icon={<Clock size={24} />} 
            title="Support Customer" 
            desc="24/7 Service" 
          />
          <FeatureItem 
            icon={<RefreshCcw size={24} />} 
            title="Secure Payment" 
            desc="100% Secure" 
          />
        </div>
      </div>

      <FeaturedProducts />
      
      <DealOfTheDay />
      
      <PopularProducts />
      
      <Testimonials />
      
      <BlogSection />
    </div>
  );
}

function FeatureItem({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="flex items-center space-x-6 group cursor-default">
      <div className="text-primary group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <div>
        <h4 className="text-[10px] font-black uppercase tracking-[0.1em] mb-1">{title}</h4>
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">{desc}</p>
      </div>
    </div>
  );
}
