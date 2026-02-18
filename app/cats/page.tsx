"use client";

import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ArrowLeft, Heart, BookOpen, Sparkles, LogIn } from "lucide-react";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
};

interface CatBreed {
    name: string;
    nameEn: string;
    color: string;
    accent: string;
    description: string;
    traits: string[];
}

const cats: CatBreed[] = [
    {
        name: "ซีลพอยท์",
        nameEn: "Seal Point",
        color: "from-[#3E2C20] to-[#5C4033]",
        accent: "#3E2C20",
        description:
            "สีคลาสสิกดั้งเดิม ลำตัวสีครีมอ่อนตัดกับแต้มสีน้ำตาลเข้มเกือบดำ นัยน์ตาสีฟ้าสดใส",
        traits: ["ฉลาดมาก", "ชอบเล่น", "ขี้หึง"],
    },
    {
        name: "ช็อกโกแลตพอยท์",
        nameEn: "Chocolate Point",
        color: "from-[#6B4226] to-[#8B6914]",
        accent: "#6B4226",
        description:
            "ลำตัวสีงาช้าง แต้มสีช็อกโกแลตนม อ่อนโยนกว่าซีลพอยท์ ดูหวานน่ารัก",
        traits: ["อ่อนโยน", "เป็นมิตร", "เสียงเบา"],
    },
    {
        name: "บลูพอยท์",
        nameEn: "Blue Point",
        color: "from-[#6B7B8D] to-[#8FA4B8]",
        accent: "#6B7B8D",
        description:
            "ลำตัวสีขาวอมฟ้า แต้มสีเทาอมฟ้า สง่างามเหมือนท้องฟ้าในวันครึ้มฝน",
        traits: ["สงบเยือกเย็น", "รักเจ้าของ", "ละเอียดอ่อน"],
    },
    {
        name: "ไลแลคพอยท์",
        nameEn: "Lilac Point",
        color: "from-[#9B8F9E] to-[#C4B7C9]",
        accent: "#9B8F9E",
        description:
            "ลำตัวสีขาวนวล แต้มสีเทาอมชมพูอ่อน หายากที่สุดและสวยละมุนที่สุด",
        traits: ["ขี้อ้อน", "ติดคน", "เสียงไพเราะ"],
    },
];

export default function CatsPage() {
    return (
        <main className="min-h-screen bg-[#FDFCF5] text-[#3E2C20] font-serif">
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
                    <span className="text-sm font-semibold tracking-wide">กลับหน้าหลัก</span>
                </Link>
            </motion.div>

            {/* --- Login Button --- */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="fixed top-6 right-6 z-50"
            >
                <Link
                    href="/login"
                    className="group relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#3E2C20] to-[#5C4033] text-white rounded-full text-sm font-semibold tracking-wide shadow-lg shadow-[#3E2C20]/25 hover:shadow-xl hover:shadow-[#3E2C20]/40 hover:scale-105 active:scale-95 transition-all duration-300 ring-1 ring-white/10 hover:ring-white/25 overflow-hidden"
                >
                    <LogIn className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                    เข้าสู่ระบบ
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Link>
            </motion.div>

            {/* --- Header --- */}
            <section className="pt-28 pb-16 px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-[#8FB8DE] tracking-[0.4em] uppercase text-xs font-bold mb-4 block">
                        Cat Collection
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                        สายพันธุ์วิเชียรมาศ
                    </h1>
                    <p className="text-lg text-[#6D5A4B] max-w-xl mx-auto leading-relaxed font-light">
                        ค้นพบความงดงามของแมววิเชียรมาศทั้ง 4 สี เรียนรู้ลักษณะเฉพาะตัวของแต่ละแบบ
                    </p>
                </motion.div>
            </section>

            {/* --- Cat Grid --- */}
            <section className="px-6 md:px-16 pb-12">
                <motion.div
                    className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={stagger}
                >
                    {cats.map((cat, i) => (
                        <motion.div
                            key={i}
                            variants={fadeInUp}
                            className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500 border border-[#3E2C20]/5"
                        >
                            {/* Image Area with gradient placeholder */}
                            <div
                                className={`relative h-64 bg-gradient-to-br ${cat.color} flex items-center justify-center overflow-hidden`}
                            >
                                {/* Decorative cat silhouette */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                                    <svg viewBox="0 0 200 200" className="w-48 h-48 fill-white">
                                        <ellipse cx="100" cy="120" rx="55" ry="65" />
                                        <ellipse cx="100" cy="70" rx="35" ry="30" />
                                        <ellipse cx="80" cy="65" rx="8" ry="12" transform="rotate(-20 80 65)" />
                                        <ellipse cx="120" cy="65" rx="8" ry="12" transform="rotate(20 120 65)" />
                                        <circle cx="88" cy="68" r="5" className="fill-current opacity-50" />
                                        <circle cx="112" cy="68" r="5" className="fill-current opacity-50" />
                                        <path d="M 45 140 Q 20 160 15 180" stroke="white" strokeWidth="6" fill="none" strokeLinecap="round" />
                                    </svg>
                                </div>

                                {/* Floating label */}
                                <div className="relative z-10 text-white text-center">
                                    <p className="text-sm tracking-[0.3em] uppercase font-light opacity-80 mb-1">
                                        {cat.nameEn}
                                    </p>
                                    <h2 className="text-3xl font-bold">{cat.name}</h2>
                                </div>

                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                            </div>

                            {/* Content Area */}
                            <div className="p-8">
                                <p className="text-[#6D5A4B] leading-relaxed mb-6 font-light">
                                    {cat.description}
                                </p>

                                {/* Traits */}
                                <div className="flex flex-wrap gap-2">
                                    {cat.traits.map((trait, j) => (
                                        <span
                                            key={j}
                                            className="px-3 py-1.5 text-xs font-semibold rounded-full border border-[#3E2C20]/15 text-[#3E2C20]/80 bg-[#F5F2EA]"
                                        >
                                            {trait}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Heart icon */}
                            <div className="absolute top-6 right-6">
                                <Heart className="w-5 h-5 text-white/60 group-hover:text-white group-hover:fill-white/30 transition-all duration-300" />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* --- CTA: Guide --- */}
            <section className="py-20 px-6 bg-[#F5F2EA]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-2xl mx-auto text-center"
                >
                    <Sparkles className="w-8 h-8 mx-auto mb-4 text-[#8FB8DE]" />
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">พร้อมเลี้ยงแล้วหรือยัง?</h2>
                    <p className="text-[#6D5A4B] mb-10 font-light text-lg leading-relaxed">
                        อ่านคู่มือการเลี้ยงวิเชียรมาศฉบับเข้าใจง่าย เพื่อเตรียมตัวต้อนรับสมาชิกใหม่ของครอบครัว
                    </p>
                    <Link
                        href="/cats/guide"
                        className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#3E2C20] via-[#5C4033] to-[#3E2C20] text-white rounded-full font-bold text-lg shadow-xl shadow-[#3E2C20]/30 hover:shadow-2xl hover:shadow-[#8FB8DE]/40 hover:scale-105 active:scale-95 transition-all duration-300 ring-1 ring-white/10 hover:ring-[#8FB8DE]/50 overflow-hidden"
                    >
                        <BookOpen className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                        คู่มือการเลี้ยง
                        <Sparkles className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    </Link>
                </motion.div>
            </section>

            {/* --- Footer --- */}
            <footer className="py-8 text-center bg-[#FDFCF5] border-t border-[#3E2C20]/10 text-[#6D5A4B] text-sm">
                <p>© 2026 Siamese Legacy. Designed with Thai Heritage in mind.</p>
            </footer>
        </main>
    );
}
