"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    ArrowLeft,
    Mail,
    Lock,
    Eye,
    EyeOff,
    UserPlus,
    Sparkles,
    User,
    Phone,
} from "lucide-react";

export default function RegisterPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        confirm: "",
    });

    const update = (key: string, value: string) =>
        setForm((prev) => ({ ...prev, [key]: value }));

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (form.password !== form.confirm) {
            alert("รหัสผ่านไม่ตรงกัน กรุณาลองใหม่");
            return;
        }
        alert("สมัครสมาชิกสำเร็จ! ยินดีต้อนรับสู่ Siamese Legacy 🐱 (Demo)");
    };

    return (
        <main className="min-h-screen bg-[#FDFCF5] text-[#3E2C20] font-serif flex items-center justify-center relative overflow-hidden py-12">
            {/* --- Decorative Background --- */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#8FB8DE] rounded-full opacity-[0.05] blur-3xl -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#3E2C20] rounded-full opacity-[0.03] blur-3xl translate-y-1/3 translate-x-1/4" />

            {/* --- Back Button --- */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="fixed top-6 left-6 z-50"
            >
                <Link
                    href="/"
                    className="group flex items-center gap-2.5 px-5 py-3 bg-white/90 backdrop-blur-xl border border-[#3E2C20]/10 rounded-full shadow-lg shadow-[#3E2C20]/10 hover:bg-[#3E2C20] hover:text-white hover:shadow-xl hover:shadow-[#3E2C20]/25 hover:scale-105 active:scale-95 transition-all duration-300 ring-1 ring-[#3E2C20]/5 hover:ring-[#3E2C20]/50"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1.5 transition-transform duration-300" />
                    <span className="text-sm font-semibold tracking-wide">
                        กลับหน้าหลัก
                    </span>
                </Link>
            </motion.div>

            {/* --- Register Card --- */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 w-full max-w-lg mx-6"
            >
                <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl shadow-[#3E2C20]/10 border border-[#3E2C20]/5 p-8 md:p-10">
                    {/* Header */}
                    <div className="text-center mb-8">
                        {/* Cat Icon */}
                        <div className="w-16 h-16 mx-auto mb-5 bg-gradient-to-br from-[#3E2C20] to-[#5C4033] rounded-2xl flex items-center justify-center shadow-lg shadow-[#3E2C20]/20">
                            <svg viewBox="0 0 40 40" className="w-8 h-8 fill-white">
                                <ellipse cx="20" cy="24" rx="11" ry="13" />
                                <ellipse cx="20" cy="15" rx="8" ry="7" />
                                <ellipse
                                    cx="14"
                                    cy="12"
                                    rx="2.5"
                                    ry="4"
                                    transform="rotate(-15 14 12)"
                                />
                                <ellipse
                                    cx="26"
                                    cy="12"
                                    rx="2.5"
                                    ry="4"
                                    transform="rotate(15 26 12)"
                                />
                                <circle cx="17" cy="14.5" r="1.2" className="fill-[#3E2C20]" />
                                <circle cx="23" cy="14.5" r="1.2" className="fill-[#3E2C20]" />
                            </svg>
                        </div>

                        <h1 className="text-3xl font-bold mb-2">สมัครสมาชิก</h1>
                        <p className="text-[#6D5A4B] font-light text-sm">
                            เข้าร่วม Siamese Legacy
                            เพื่อรับข้อมูลและคู่มือการเลี้ยงแมวพิเศษ
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Name */}
                        <div>
                            <label className="block text-xs font-semibold mb-1.5 text-[#3E2C20] tracking-wide">
                                ชื่อ-นามสกุล
                            </label>
                            <div className="relative">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6D5A4B]/40" />
                                <input
                                    type="text"
                                    value={form.name}
                                    onChange={(e) => update("name", e.target.value)}
                                    placeholder="วิเชียร มาศงาม"
                                    className="w-full pl-11 pr-4 py-3.5 bg-[#F5F2EA] border border-[#3E2C20]/10 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#8FB8DE] focus:border-transparent transition-all placeholder:text-[#6D5A4B]/30"
                                    required
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-xs font-semibold mb-1.5 text-[#3E2C20] tracking-wide">
                                อีเมล
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6D5A4B]/40" />
                                <input
                                    type="email"
                                    value={form.email}
                                    onChange={(e) => update("email", e.target.value)}
                                    placeholder="your@email.com"
                                    className="w-full pl-11 pr-4 py-3.5 bg-[#F5F2EA] border border-[#3E2C20]/10 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#8FB8DE] focus:border-transparent transition-all placeholder:text-[#6D5A4B]/30"
                                    required
                                />
                            </div>
                        </div>

                        {/* Phone */}
                        <div>
                            <label className="block text-xs font-semibold mb-1.5 text-[#3E2C20] tracking-wide">
                                เบอร์โทรศัพท์
                            </label>
                            <div className="relative">
                                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6D5A4B]/40" />
                                <input
                                    type="tel"
                                    value={form.phone}
                                    onChange={(e) => update("phone", e.target.value)}
                                    placeholder="08X-XXX-XXXX"
                                    className="w-full pl-11 pr-4 py-3.5 bg-[#F5F2EA] border border-[#3E2C20]/10 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#8FB8DE] focus:border-transparent transition-all placeholder:text-[#6D5A4B]/30"
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-xs font-semibold mb-1.5 text-[#3E2C20] tracking-wide">
                                รหัสผ่าน
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6D5A4B]/40" />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={form.password}
                                    onChange={(e) => update("password", e.target.value)}
                                    placeholder="อย่างน้อย 8 ตัวอักษร"
                                    className="w-full pl-11 pr-12 py-3.5 bg-[#F5F2EA] border border-[#3E2C20]/10 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#8FB8DE] focus:border-transparent transition-all placeholder:text-[#6D5A4B]/30"
                                    required
                                    minLength={8}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6D5A4B]/40 hover:text-[#3E2C20] transition-colors"
                                >
                                    {showPassword ? (
                                        <EyeOff className="w-4 h-4" />
                                    ) : (
                                        <Eye className="w-4 h-4" />
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Confirm Password */}
                        <div>
                            <label className="block text-xs font-semibold mb-1.5 text-[#3E2C20] tracking-wide">
                                ยืนยันรหัสผ่าน
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6D5A4B]/40" />
                                <input
                                    type={showConfirm ? "text" : "password"}
                                    value={form.confirm}
                                    onChange={(e) => update("confirm", e.target.value)}
                                    placeholder="ยืนยันรหัสผ่านอีกครั้ง"
                                    className="w-full pl-11 pr-12 py-3.5 bg-[#F5F2EA] border border-[#3E2C20]/10 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#8FB8DE] focus:border-transparent transition-all placeholder:text-[#6D5A4B]/30"
                                    required
                                    minLength={8}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirm(!showConfirm)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6D5A4B]/40 hover:text-[#3E2C20] transition-colors"
                                >
                                    {showConfirm ? (
                                        <EyeOff className="w-4 h-4" />
                                    ) : (
                                        <Eye className="w-4 h-4" />
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Terms */}
                        <div className="flex items-start gap-3 pt-2">
                            <input
                                type="checkbox"
                                id="terms"
                                required
                                className="mt-1 w-4 h-4 rounded border-[#3E2C20]/20 text-[#3E2C20] accent-[#3E2C20] focus:ring-[#8FB8DE]"
                            />
                            <label
                                htmlFor="terms"
                                className="text-xs text-[#6D5A4B] font-light leading-relaxed"
                            >
                                ข้าพเจ้ายอมรับ{" "}
                                <span className="text-[#3E2C20] font-semibold cursor-pointer hover:text-[#8FB8DE] transition-colors">
                                    ข้อกำหนดการใช้งาน
                                </span>{" "}
                                และ{" "}
                                <span className="text-[#3E2C20] font-semibold cursor-pointer hover:text-[#8FB8DE] transition-colors">
                                    นโยบายความเป็นส่วนตัว
                                </span>
                            </label>
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="group relative w-full py-4 mt-2 bg-gradient-to-r from-[#3E2C20] via-[#5C4033] to-[#3E2C20] text-white rounded-xl font-bold text-sm tracking-wide hover:shadow-xl hover:shadow-[#3E2C20]/30 active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2.5 shadow-lg ring-1 ring-white/10 hover:ring-white/20 overflow-hidden"
                        >
                            <UserPlus className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                            สร้างบัญชีใหม่
                            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="flex items-center gap-4 my-6">
                        <div className="flex-1 h-px bg-[#3E2C20]/10" />
                        <span className="text-xs text-[#6D5A4B]/40 font-light">หรือ</span>
                        <div className="flex-1 h-px bg-[#3E2C20]/10" />
                    </div>

                    {/* Login CTA */}
                    <div className="text-center">
                        <p className="text-sm text-[#6D5A4B] font-light">
                            มีบัญชีอยู่แล้ว?{" "}
                            <Link
                                href="/login"
                                className="relative text-[#3E2C20] font-bold hover:text-[#8FB8DE] transition-colors group"
                            >
                                เข้าสู่ระบบ
                                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-[#8FB8DE] group-hover:w-full transition-all duration-300" />
                            </Link>
                        </p>
                    </div>
                </div>

                {/* Bottom Branding */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-center mt-6 flex items-center justify-center gap-2 text-[#6D5A4B]/40 text-xs"
                >
                    <Sparkles className="w-3 h-3" />
                    <span>Siamese Legacy — อัญมณีแห่งสยาม</span>
                </motion.div>
            </motion.div>
        </main>
    );
}
