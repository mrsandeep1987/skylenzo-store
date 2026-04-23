"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";
import { Mail, ArrowLeft, Send } from "@/components/ui/Icons";
import Link from "next/link";

const forgotPasswordSchema = z.object({
  email: z.string().email("Invalid email address"),
});

type ForgotPasswordValues = z.infer<typeof forgotPasswordSchema>;

export default function ForgotPasswordPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm<ForgotPasswordValues>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit = async (data: ForgotPasswordValues) => {
    setIsSubmitting(true);
    await new Promise(r => setTimeout(r, 1500));
    console.log("Forgot Password for:", data.email);
    setIsSent(true);
    toast.success("Reset link sent to your email!");
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-20 bg-muted/30">
      <div className="w-full max-w-md p-8 md:p-12 bg-white rounded-3xl shadow-xl border border-gray-100 text-center">
        {!isSent ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="mb-10">
              <h1 className="text-3xl font-bold tracking-tighter mb-4">Forgot Password?</h1>
              <p className="text-gray-500 text-sm leading-relaxed">
                Enter your email address and we'll send you a link <br className="hidden md:block" /> 
                to reset your password.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <div className="relative text-left">
                <Mail className="absolute left-4 top-4 text-gray-400" size={18} />
                <input
                  {...register("email")}
                  className="w-full bg-secondary border-none rounded-xl p-4 pl-12 text-sm focus:ring-accent transition-all"
                  placeholder="Email Address"
                />
                {errors.email && <p className="text-red-500 text-[10px] mt-1 ml-2">{errors.email.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary w-full py-4 flex items-center justify-center gap-3 disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : <><Send size={18} /> Send Reset Link</>}
              </button>
            </form>

            <div className="mt-10">
              <Link 
                href="/login" 
                className="inline-flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-primary transition-colors"
              >
                <ArrowLeft size={16} /> Back to Login
              </Link>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="py-10"
          >
            <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
              <Send size={32} />
            </div>
            <h2 className="text-2xl font-bold mb-4">Check Your Email</h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-10">
              We've sent a password reset link to your email. <br />
              Please check your inbox and follow the instructions.
            </p>
            <Link href="/login" className="btn btn-primary px-10 py-4">
              Back to Login
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  );
}
