"use client";

import React, { useState } from "react";
import { useStore } from "@/store/useStore";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { formatPrice } from "@/lib/utils";
import { motion } from "framer-motion";
import { CreditCard, Truck, ShieldCheck, CheckCircle2, ChevronRight, Lock } from "@/components/ui/Icons";
import { useRouter } from "next/navigation";

const checkoutSchema = z.object({
  email: z.string().email("Invalid email address"),
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  address: z.string().min(5, "Address is required"),
  city: z.string().min(2, "City is required"),
  zipCode: z.string().min(5, "Valid ZIP code is required"),
  cardNumber: z.string().min(16, "Invalid card number").max(16),
  expiry: z.string().regex(/^(0[1-9]|1[0-2])\/([0-9]{2})$/, "MM/YY format required"),
  cvc: z.string().min(3, "CVC required").max(4),
});

type CheckoutFormValues = z.infer<typeof checkoutSchema>;

export default function CheckoutPage() {
  const { cart, clearCart } = useStore();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const subtotal = cart.reduce((acc, item) => acc + (item.salePrice || item.price) * item.quantity, 0);
  const shipping = subtotal > 200 ? 0 : 25;
  const total = subtotal + shipping;

  const { register, handleSubmit, formState: { errors } } = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutSchema),
  });

  const onSubmit = async (data: CheckoutFormValues) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(r => setTimeout(r, 2000));
    console.log("Order submitted:", data, cart);
    clearCart();
    router.push("/thank-you");
  };

  if (cart.length === 0) {
    router.push("/cart");
    return null;
  }

  return (
    <div className="container-custom py-12 md:py-24">
      <div className="flex flex-col lg:flex-row gap-16">
        {/* Checkout Form */}
        <div className="flex-1">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-12">
            {/* Contact Information */}
            <section>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-black">1</div>
                <h2 className="text-2xl font-black uppercase tracking-tighter">Contact Information</h2>
              </div>
              <div className="grid grid-cols-1 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-4">Email Address</label>
                  <input 
                    {...register("email")}
                    className="w-full bg-secondary border-none rounded-2xl p-4 text-sm focus:ring-accent" 
                    placeholder="you@example.com"
                  />
                  {errors.email && <p className="text-red-500 text-[10px] ml-4">{errors.email.message}</p>}
                </div>
              </div>
            </section>

            {/* Shipping Address */}
            <section>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-black">2</div>
                <h2 className="text-2xl font-black uppercase tracking-tighter">Shipping Address</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-4">First Name</label>
                  <input {...register("firstName")} className="w-full bg-secondary border-none rounded-2xl p-4 text-sm focus:ring-accent" placeholder="John" />
                  {errors.firstName && <p className="text-red-500 text-[10px] ml-4">{errors.firstName.message}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-4">Last Name</label>
                  <input {...register("lastName")} className="w-full bg-secondary border-none rounded-2xl p-4 text-sm focus:ring-accent" placeholder="Doe" />
                  {errors.lastName && <p className="text-red-500 text-[10px] ml-4">{errors.lastName.message}</p>}
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-4">Street Address</label>
                  <input {...register("address")} className="w-full bg-secondary border-none rounded-2xl p-4 text-sm focus:ring-accent" placeholder="123 Nordic Way" />
                  {errors.address && <p className="text-red-500 text-[10px] ml-4">{errors.address.message}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-4">City</label>
                  <input {...register("city")} className="w-full bg-secondary border-none rounded-2xl p-4 text-sm focus:ring-accent" placeholder="Copenhagen" />
                  {errors.city && <p className="text-red-500 text-[10px] ml-4">{errors.city.message}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-4">ZIP / Postal Code</label>
                  <input {...register("zipCode")} className="w-full bg-secondary border-none rounded-2xl p-4 text-sm focus:ring-accent" placeholder="12345" />
                  {errors.zipCode && <p className="text-red-500 text-[10px] ml-4">{errors.zipCode.message}</p>}
                </div>
              </div>
            </section>

            {/* Payment Details */}
            <section>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-black">3</div>
                <h2 className="text-2xl font-black uppercase tracking-tighter">Payment Details</h2>
              </div>
              <div className="bg-muted/30 p-8 rounded-[2rem] space-y-6">
                <div className="flex items-center gap-4 mb-4">
                  <CreditCard size={24} className="text-accent" />
                  <span className="font-black text-sm uppercase tracking-widest">Credit or Debit Card</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="md:col-span-4 space-y-2">
                    <input {...register("cardNumber")} className="w-full bg-white border-none rounded-xl p-4 text-sm focus:ring-accent" placeholder="Card Number (16 digits)" />
                    {errors.cardNumber && <p className="text-red-500 text-[10px] ml-4">{errors.cardNumber.message}</p>}
                  </div>
                  <div className="md:col-span-3 space-y-2">
                    <input {...register("expiry")} className="w-full bg-white border-none rounded-xl p-4 text-sm focus:ring-accent" placeholder="MM/YY" />
                    {errors.expiry && <p className="text-red-500 text-[10px] ml-4">{errors.expiry.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <input {...register("cvc")} className="w-full bg-white border-none rounded-xl p-4 text-sm focus:ring-accent" placeholder="CVC" />
                    {errors.cvc && <p className="text-red-500 text-[10px] ml-4">{errors.cvc.message}</p>}
                  </div>
                </div>
              </div>
            </section>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary w-full py-6 rounded-3xl flex items-center justify-center gap-4 uppercase tracking-[0.3em] text-[12px] font-black group disabled:opacity-50"
            >
              {isSubmitting ? "Processing..." : <>Complete Purchase <Lock size={18} /></>}
            </button>
          </form>
        </div>

        {/* Order Review Side */}
        <div className="w-full lg:w-[450px]">
          <div className="glass-card rounded-[3rem] p-10 sticky top-32">
            <h2 className="text-2xl font-black mb-10 tracking-tighter uppercase border-b pb-6">Your Order</h2>
            
            <div className="space-y-6 mb-10 max-h-[400px] overflow-auto pr-4 scrollbar-thin">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden bg-muted flex-shrink-0">
                    <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-black line-clamp-1">{item.name}</h4>
                    <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest mt-1">Qty: {item.quantity}</p>
                    <p className="text-sm font-black mt-2">{formatPrice((item.salePrice || item.price) * item.quantity)}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4 border-t pt-8">
              <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-muted-foreground">
                <span>Subtotal</span>
                <span className="text-primary">{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-muted-foreground">
                <span>Shipping</span>
                <span className="text-primary">{shipping === 0 ? "FREE" : formatPrice(shipping)}</span>
              </div>
              <div className="pt-6 border-t flex justify-between items-center">
                <span className="text-xl font-black uppercase tracking-tighter">Total</span>
                <span className="text-3xl font-black">{formatPrice(total)}</span>
              </div>
            </div>

            <div className="mt-12 space-y-4">
              <div className="flex items-center gap-3 text-xs font-bold text-muted-foreground">
                <Truck size={16} />
                <span>Standard Delivery (3-5 business days)</span>
              </div>
              <div className="flex items-center gap-3 text-xs font-bold text-muted-foreground">
                <ShieldCheck size={16} />
                <span>30-Day Money Back Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
