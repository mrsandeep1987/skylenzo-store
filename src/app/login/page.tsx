"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";
import { LogIn, UserPlus, Github, Mail, Lock, Eye, EyeOff } from "@/components/ui/Icons";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const registerSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type LoginFormValues = z.infer<typeof loginSchema>;
type RegisterFormValues = z.infer<typeof registerSchema>;

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { 
    register: loginRegister, 
    handleSubmit: handleLoginSubmit, 
    formState: { errors: loginErrors } 
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const { 
    register: registerRegister, 
    handleSubmit: handleRegisterSubmit, 
    formState: { errors: registerErrors } 
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
  });

  const onLogin = async (data: LoginFormValues) => {
    setIsSubmitting(true);
    await new Promise(r => setTimeout(r, 1500));
    console.log("Login:", data);
    toast.success("Welcome back to SkyLenzo Store!");
    setIsSubmitting(false);
  };

  const onRegister = async (data: RegisterFormValues) => {
    setIsSubmitting(true);
    await new Promise(r => setTimeout(r, 1500));
    console.log("Register:", data);
    toast.success("Account created successfully!");
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-20 bg-muted/30">
      <div className="w-full max-w-md p-8 md:p-12 bg-white rounded-3xl shadow-xl border border-gray-100">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold tracking-tighter mb-2">
            {isLogin ? "Welcome Back" : "Create Account"}
          </h1>
          <p className="text-gray-500 text-sm">
            {isLogin 
              ? "Enter your details to access your account" 
              : "Join our community of design enthusiasts"}
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex bg-secondary p-1 rounded-xl mb-8">
          <button
            onClick={() => setIsLogin(true)}
            className={`flex-1 py-3 text-sm font-bold rounded-lg transition-all ${
              isLogin ? "bg-white shadow-sm text-primary" : "text-gray-500 hover:text-primary"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`flex-1 py-3 text-sm font-bold rounded-lg transition-all ${
              !isLogin ? "bg-white shadow-sm text-primary" : "text-gray-500 hover:text-primary"
            }`}
          >
            Register
          </button>
        </div>

        <AnimatePresence mode="wait">
          {isLogin ? (
            <motion.form
              key="login"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              onSubmit={handleLoginSubmit(onLogin)}
              className="space-y-6"
            >
              <div className="space-y-4">
                <div className="relative">
                  <Mail className="absolute left-4 top-4 text-gray-400" size={18} />
                  <input
                    {...loginRegister("email")}
                    className="w-full bg-secondary border-none rounded-xl p-4 pl-12 text-sm focus:ring-accent"
                    placeholder="Email Address"
                  />
                  {loginErrors.email && <p className="text-red-500 text-[10px] mt-1 ml-2">{loginErrors.email.message}</p>}
                </div>
                <div className="relative">
                  <Lock className="absolute left-4 top-4 text-gray-400" size={18} />
                  <input
                    {...loginRegister("password")}
                    type={showPassword ? "text" : "password"}
                    className="w-full bg-secondary border-none rounded-xl p-4 pl-12 pr-12 text-sm focus:ring-accent"
                    placeholder="Password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-4 text-gray-400 hover:text-primary"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                  {loginErrors.password && <p className="text-red-500 text-[10px] mt-1 ml-2">{loginErrors.password.message}</p>}
                </div>
              </div>

              <div className="flex justify-end">
                <Link href="/forgot-password" data-oid="w9k:1f7" className="text-xs font-bold text-accent hover:underline">Forgot Password?</Link>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary w-full py-4 flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? "Logging in..." : <><LogIn size={20} /> Login</>}
              </button>
            </motion.form>
          ) : (
            <motion.form
              key="register"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              onSubmit={handleRegisterSubmit(onRegister)}
              className="space-y-6"
            >
              <div className="space-y-4">
                <div className="relative">
                  <Mail className="absolute left-4 top-4 text-gray-400" size={18} />
                  <input
                    {...registerRegister("name")}
                    className="w-full bg-secondary border-none rounded-xl p-4 pl-12 text-sm focus:ring-accent"
                    placeholder="Full Name"
                  />
                  {registerErrors.name && <p className="text-red-500 text-[10px] mt-1 ml-2">{registerErrors.name.message}</p>}
                </div>
                <div className="relative">
                  <Mail className="absolute left-4 top-4 text-gray-400" size={18} />
                  <input
                    {...registerRegister("email")}
                    className="w-full bg-secondary border-none rounded-xl p-4 pl-12 text-sm focus:ring-accent"
                    placeholder="Email Address"
                  />
                  {registerErrors.email && <p className="text-red-500 text-[10px] mt-1 ml-2">{registerErrors.email.message}</p>}
                </div>
                <div className="relative">
                  <Lock className="absolute left-4 top-4 text-gray-400" size={18} />
                  <input
                    {...registerRegister("password")}
                    type="password"
                    className="w-full bg-secondary border-none rounded-xl p-4 pl-12 text-sm focus:ring-accent"
                    placeholder="Password"
                  />
                  {registerErrors.password && <p className="text-red-500 text-[10px] mt-1 ml-2">{registerErrors.password.message}</p>}
                </div>
                <div className="relative">
                  <Lock className="absolute left-4 top-4 text-gray-400" size={18} />
                  <input
                    {...registerRegister("confirmPassword")}
                    type="password"
                    className="w-full bg-secondary border-none rounded-xl p-4 pl-12 text-sm focus:ring-accent"
                    placeholder="Confirm Password"
                  />
                  {registerErrors.confirmPassword && <p className="text-red-500 text-[10px] mt-1 ml-2">{registerErrors.confirmPassword.message}</p>}
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary w-full py-4 flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? "Creating account..." : <><UserPlus size={20} /> Create Account</>}
              </button>
            </motion.form>
          )}
        </AnimatePresence>

        <div className="relative my-10">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-100"></div>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-4 text-gray-400 font-bold tracking-widest">Or continue with</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button className="flex items-center justify-center gap-2 py-3 border rounded-xl hover:bg-gray-50 transition-all text-sm font-bold">
            <Github size={18} /> Github
          </button>
          <button className="flex items-center justify-center gap-2 py-3 border rounded-xl hover:bg-gray-50 transition-all text-sm font-bold">
            <Mail size={18} className="text-red-500" /> Google
          </button>
        </div>
      </div>
    </div>
  );
}
