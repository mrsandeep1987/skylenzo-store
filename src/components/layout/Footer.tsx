"use client";

import React from "react";
import Link from "next/link";
import { 
  Truck, 
  ShieldCheck, 
  Clock, 
  RefreshCcw, 
  Facebook, 
  Twitter, 
  Instagram 
} from "@/components/ui/Icons";

const FeatureItem = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
  <div className="flex items-center gap-4 group cursor-default">
    <div className="text-primary group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <div>
      <h4 className="text-[10px] font-black uppercase tracking-[0.1em]">{title}</h4>
      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">{desc}</p>
    </div>
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-white pt-24 pb-12">
      <div className="container-custom">
        {/* Features Icons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 border-t border-b border-gray-100 mb-20">
          <FeatureItem icon={<Truck size={24} />} title="Creative Design" desc="Free Delivery" />
          <FeatureItem icon={<ShieldCheck size={24} />} title="Free Shipping" desc="On All Orders" />
          <FeatureItem icon={<Clock size={24} />} title="Support Customer" desc="24/7 Service" />
          <FeatureItem icon={<RefreshCcw size={24} />} title="Secure Payment" desc="100% Secure" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-3xl font-black tracking-[-0.05em] text-primary lowercase mb-8 block">
              skylenzo
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-8">
              Premium Scandinavian furniture and home decor designed for the modern lifestyle. 
              Quality craftsmanship meets minimalist elegance.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"><Facebook size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"><Twitter size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"><Instagram size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-8">Products</h4>
            <ul className="space-y-4">
              {[
                { label: "Furniture", href: "/shop?category=Furniture" },
                { label: "Decor", href: "/shop?category=Decor" },
                { label: "Lighting", href: "/shop?category=Lighting" },
                { label: "Textiles", href: "/shop?category=Textiles" },
                { label: "New Arrivals", href: "/shop" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-8">Support</h4>
            <ul className="space-y-4">
              {[
                { label: "Shipping Policy", href: "/shipping-policy" },
                { label: "Returns & Refunds", href: "/returns-refunds" },
                { label: "FAQs", href: "/faqs" },
                { label: "Size Guide", href: "/size-guide" },
                { label: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-8">Company</h4>
            <ul className="space-y-4">
              {[
                { label: "Our Story", href: "/our-story" },
                { label: "Sustainability", href: "/sustainability" },
                { label: "Careers", href: "/careers" },
                { label: "Press", href: "/press" },
                { label: "Terms of Service", href: "/terms-of-service" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-12 pt-12 border-t border-gray-100">
          <div className="flex items-center space-x-8 order-2 md:order-1">
            <Link href="/privacy-policy" className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link>
          </div>

          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-300 order-1 md:order-2">
            © {new Date().getFullYear()} SkyLenzo Store. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
