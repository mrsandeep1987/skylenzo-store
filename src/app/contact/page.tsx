"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "react-hot-toast";
import { Mail, Phone, MapPin, Send, Facebook, Twitter, Instagram } from "@/components/ui/Icons";
import { motion } from "framer-motion";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    // Mock API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    console.log("Contact form submitted:", data);
    toast.success("Message sent! We'll get back to you soon.");
    reset();
    setIsSubmitting(false);
  };

  return (
    <div className="container-custom py-24">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold tracking-tighter mb-4">Get in Touch</h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Have questions about our products or need help with an order? 
            Our team is here to help you create your perfect space.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Contact Info */}
          <div className="space-y-12">
            <div className="space-y-8">
              <ContactInfoItem 
                icon={<Mail size={24} />} 
                title="Email Us" 
                detail="hello@skylenzo.com" 
                desc="We'll respond within 24 hours"
              />
              <ContactInfoItem 
                icon={<Phone size={24} />} 
                title="Call Us" 
                detail="+45 12 34 56 78" 
                desc="Mon-Fri, 9am - 6pm CET"
              />
              <ContactInfoItem 
                icon={<MapPin size={24} />} 
                title="Visit Our Studio" 
                detail="Design Street 123, Copenhagen" 
                desc="By appointment only"
              />
            </div>

            <div className="pt-12 border-t">
              <h4 className="font-bold mb-6">Follow Us</h4>
              <div className="flex space-x-4">
                <SocialLink icon={<Facebook size={20} />} />
                <SocialLink icon={<Twitter size={20} />} />
                <SocialLink icon={<Instagram size={20} />} />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-muted p-8 md:p-12 rounded-3xl">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                  <input
                    {...register("name")}
                    className="w-full bg-white border-none rounded-lg p-4 text-sm focus:ring-accent"
                    placeholder="Jane Doe"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                  <input
                    {...register("email")}
                    className="w-full bg-white border-none rounded-lg p-4 text-sm focus:ring-accent"
                    placeholder="jane@example.com"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Subject</label>
                <input
                  {...register("subject")}
                  className="w-full bg-white border-none rounded-lg p-4 text-sm focus:ring-accent"
                  placeholder="How can we help?"
                />
                {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                <textarea
                  {...register("message")}
                  rows={6}
                  className="w-full bg-white border-none rounded-lg p-4 text-sm focus:ring-accent resize-none"
                  placeholder="Tell us more about your inquiry..."
                />
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary w-full py-5 flex items-center justify-center gap-3 disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : <><Send size={20} /> Send Message</>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactInfoItem({ icon, title, detail, desc }: { icon: React.ReactNode, title: string, detail: string, desc: string }) {
  return (
    <div className="flex gap-6">
      <div className="bg-primary text-white p-4 rounded-2xl h-fit">
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-lg mb-1">{title}</h4>
        <p className="text-primary font-medium mb-1">{detail}</p>
        <p className="text-sm text-gray-500">{desc}</p>
      </div>
    </div>
  );
}

function SocialLink({ icon }: { icon: React.ReactNode }) {
  return (
    <a href="#" className="p-3 bg-white rounded-full hover:bg-accent hover:text-white transition-all shadow-sm">
      {icon}
    </a>
  );
}
