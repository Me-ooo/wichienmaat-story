"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Mail, Lock, Eye, EyeOff, LogIn, Sparkles } from "lucide-react";

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("ยินดีต้อนรับ! (Demo — ไม่มี Backend จริง)");
    };

    return (
        <main className="min-h-screen bg-[#FDFCF5] text-[#3E2C20] font-serif flex items-center justify-center relative overflow-hidden">
            {/* --- Decorative Background --- */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#8FB8DE] rounded-full opacity-[0.06] blur-3xl -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#3E2C20] rounded-full opacity-[0.04] blur-3xl translate-y-1/2 -translate-x-1/3" />

            {/* --- Back Button --- */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="fixed top-6 left-6 z-50"
            >
                <Link
                    href="/"
                    className="group flex items-center gap-2 px-4 py-2.5 bg-white/80 backdrop-blur-md border border-[#3E2C20]/10 rounded-full shadow-lg hover:bg-[#3E2C20] hover:text-white transition-all duration-300"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    <span className="text-sm font-semibold tracking-wide">กลับหน้าหลัก</span>
                </Link>
            </motion.div>

            {/* --- Login Card --- */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 w-full max-w-md mx-6"
            >
                <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl shadow-[#3E2C20]/10 border border-[#3E2C20]/5 p-10">
                    {/* Header */}
                    <div className="text-center mb-10">
                        {/* Cat Icon */}
                        <div className="w-16 h-16 mx-auto mb-6 bg-[#3E2C20] rounded-2xl flex items-center justify-center shadow-lg">
                            <svg viewBox="0 0 40 40" className="w-8 h-8 fill-white">
                                <ellipse cx="20" cy="24" rx="11" ry="13" />
                                <ellipse cx="20" cy="15" rx="8" ry="7" />
                                <ellipse cx="14" cy="12" rx="2.5" ry="4" transform="rotate(-15 14 12)" />
                                <ellipse cx="26" cy="12" rx="2.5" ry="4" transform="rotate(15 26 12)" />
                                <circle cx="17" cy="14.5" r="1.2" className="fill-[#3E2C20]" />
                                <circle cx="23" cy="14.5" r="1.2" className="fill-[#3E2C20]" />
                            </svg>
                        </div>

                        <h1 className="text-3xl font-bold mb-2">ยินดีต้อนรับ</h1>
                        <p className="text-[#6D5A4B] font-light text-sm">
                            เข้าสู่ระบบเพื่อเข้าถึงเนื้อหาพิเศษของ Siamese Legacy
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Email */}
                        <div>
                            <label className="block text-sm font-semibold mb-2 text-[#3E2C20]">
                                อีเมล
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6D5A4B]/50" />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="your@email.com"
                                    className="w-full pl-11 pr-4 py-3.5 bg-[#F5F2EA] border border-[#3E2C20]/10 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#8FB8DE] focus:border-transparent transition-all placeholder:text-[#6D5A4B]/40"
                                    required
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-sm font-semibold mb-2 text-[#3E2C20]">
                                รหัสผ่าน
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6D5A4B]/50" />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    className="w-full pl-11 pr-12 py-3.5 bg-[#F5F2EA] border border-[#3E2C20]/10 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#8FB8DE] focus:border-transparent transition-all placeholder:text-[#6D5A4B]/40"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6D5A4B]/50 hover:text-[#3E2C20] transition-colors"
                                >
                                    {showPassword ? (
                                        <EyeOff className="w-4 h-4" />
                                    ) : (
                                        <Eye className="w-4 h-4" />
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Forgot Password */}
                        <div className="text-right">
                            <button
                                type="button"
                                className="text-xs text-[#8FB8DE] hover:text-[#3E2C20] font-semibold transition-colors"
                            >
                                ลืมรหัสผ่าน?
                            </button>
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="w-full py-4 bg-[#3E2C20] text-white rounded-xl font-bold text-sm tracking-wide hover:bg-[#5C4033] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 shadow-lg"
                        >
                            <LogIn className="w-4 h-4" />
                            เข้าสู่ระบบ
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="flex items-center gap-4 my-8">
                        <div className="flex-1 h-px bg-[#3E2C20]/10" />
                        <span className="text-xs text-[#6D5A4B]/50 font-light">หรือ</span>
                        <div className="flex-1 h-px bg-[#3E2C20]/10" />
                    </div>

                    {/* Register CTA */}
                    <div className="text-center">
                        <p className="text-sm text-[#6D5A4B] font-light">
                            ยังไม่มีบัญชี?{" "}
                            <button className="text-[#3E2C20] font-bold hover:text-[#8FB8DE] transition-colors">
                                สมัครสมาชิก
                            </button>
                        </p>
                    </div>
                </div>

                {/* Bottom Branding */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-center mt-8 flex items-center justify-center gap-2 text-[#6D5A4B]/40 text-xs"
                >
                    <Sparkles className="w-3 h-3" />
                    <span>Siamese Legacy — อัญมณีแห่งสยาม</span>
                </motion.div>
            </motion.div>
        </main>
    );
}
