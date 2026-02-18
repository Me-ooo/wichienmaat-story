"use client";

import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ArrowLeft, BookOpen, Sparkles, Heart } from "lucide-react";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const staggerContainer: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariant: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

type CatBreed = {
    name: string;
    nameEn: string;
    desc: string;
    gradient: string;
    pointColor: string;
    emoji: string;
    badge: string;
    badgeColor: string;
};

const catBreeds: CatBreed[] = [
    {
        name: "ซีลพอยท์",
        nameEn: "Seal Point",
        desc: "แต้มสีน้ำตาลเข้มเกือบดำ คลาสสิกดั้งเดิมที่สุด หายากและงดงาม",
        gradient: "from-[#8B6914] via-[#3E2C20] to-[#1a0f09]",
        pointColor: "#3E2C20",
        emoji: "🐱",
        badge: "ดั้งเดิม",
        badgeColor: "bg-amber-900/20 text-amber-800",
    },
    {
        name: "บลูพอยท์",
        nameEn: "Blue Point",
        desc: "แต้มสีเทาอมฟ้าเย็นตา อ่อนโยนดุจแสงจันทร์ยามค่ำคืน",
        gradient: "from-[#7B9EB8] via-[#5A7A94] to-[#3D5A73]",
        pointColor: "#5A7A94",
        emoji: "🐾",
        badge: "นิยม",
        badgeColor: "bg-blue-100 text-blue-700",
    },
    {
        name: "ช็อกโกแลตพอยท์",
        nameEn: "Chocolate Point",
        desc: "แต้มสีช็อกโกแลตนม อบอุ่นนุ่มนวลราวกับขนมหวาน",
        gradient: "from-[#D2A679] via-[#8B6242] to-[#5C3A1E]",
        pointColor: "#8B6242",
        emoji: "🍫",
        badge: "หายาก",
        badgeColor: "bg-orange-100 text-orange-700",
    },
    {
        name: "ไลแลคพอยท์",
        nameEn: "Lilac Point",
        desc: "แต้มสีชมพูอมเทาอ่อน ละมุนละไมที่สุดในกลุ่ม",
        gradient: "from-[#D4B8C9] via-[#A88FA0] to-[#7D6877]",
        pointColor: "#A88FA0",
        emoji: "🌸",
        badge: "หายากมาก",
        badgeColor: "bg-pink-100 text-pink-700",
    },
    {
        name: "เรดพอยท์",
        nameEn: "Red / Flame Point",
        desc: "แต้มสีส้มแดงอมทอง อุ่นและสดใสเหมือนเปลวเทียน",
        gradient: "from-[#F0A868] via-[#D4764E] to-[#A85030]",
        pointColor: "#D4764E",
        emoji: "🔥",
        badge: "แปลกตา",
        badgeColor: "bg-red-100 text-red-700",
    },
    {
        name: "ครีมพอยท์",
        nameEn: "Cream Point",
        desc: "แต้มสีครีมอ่อนนวล นุ่มนวลดั่งผ้าไหมไทย",
        gradient: "from-[#F5E6D3] via-[#E8CDB5] to-[#D4B498]",
        pointColor: "#D4B498",
        emoji: "🤍",
        badge: "น่ารัก",
        badgeColor: "bg-yellow-50 text-yellow-700",
    },
];

export default function CatsPage() {
    return (
        <main className="min-h-screen bg-[#FDFCF5] text-[#3E2C20] font-serif overflow-x-hidden selection:bg-[#8FB8DE] selection:text-white">
            {/* -------- TOP NAV -------- */}
            <nav className="fixed top-0 left-0 w-full z-50 bg-[#FDFCF5]/80 backdrop-blur-md border-b border-[#3E2C20]/5">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-[#6D5A4B] hover:text-[#3E2C20] transition-colors group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        <span className="text-sm font-medium">กลับหน้าหลัก</span>
                    </Link>
                    <Link
                        href="/cats/guide"
                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#3E2C20] text-white text-sm font-bold hover:bg-[#8FB8DE] transition-colors shadow-md"
                    >
                        <BookOpen className="w-4 h-4" />
                        คู่มือการเลี้ยง
                    </Link>
                </div>
            </nav>

            {/* -------- HERO -------- */}
            <section className="pt-32 pb-16 px-6 text-center relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl mx-auto"
                >
                    <span className="text-[#8FB8DE] tracking-[0.4em] uppercase text-xs font-bold mb-4 block">
                        Discover Siamese Colors
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                        สีสันแห่งวิเชียรมาศ
                    </h1>
                    <p className="text-lg text-[#6D5A4B] max-w-xl mx-auto leading-relaxed font-light">
                        แมววิเชียรมาศมีหลากหลายสีแต้ม แต่ละแบบมีเสน่ห์เฉพาะตัว เลือกชมความงามของแต่ละสายพันธุ์ได้ที่นี่
                    </p>
                </motion.div>

                {/* Decorative blur */}
                <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-[#8FB8DE] rounded-full opacity-[0.06] blur-3xl -z-10" />
            </section>

            {/* -------- BREED CARDS -------- */}
            <section className="pb-24 px-6">
                <motion.div
                    className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={staggerContainer}
                >
                    {catBreeds.map((cat) => (
                        <motion.div
                            key={cat.nameEn}
                            variants={cardVariant}
                            className="group relative bg-white rounded-3xl overflow-hidden shadow-lg shadow-[#3E2C20]/5 hover:shadow-2xl hover:shadow-[#3E2C20]/10 transition-all duration-500 hover:-translate-y-2"
                        >
                            {/* Image Area with Gradient */}
                            <div
                                className={`relative h-56 bg-gradient-to-br ${cat.gradient} flex items-center justify-center overflow-hidden`}
                            >
                                <span className="text-7xl group-hover:scale-110 transition-transform duration-500 drop-shadow-lg">
                                    {cat.emoji}
                                </span>

                                {/* Decorative circles */}
                                <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-white/10 blur-xl" />
                                <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full bg-white/5 blur-lg" />

                                {/* Badge */}
                                <span
                                    className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold ${cat.badgeColor} backdrop-blur-sm`}
                                >
                                    {cat.badge}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                {/* Point color dot + name */}
                                <div className="flex items-center gap-3 mb-3">
                                    <div
                                        className="w-4 h-4 rounded-full ring-2 ring-offset-2 ring-[#3E2C20]/10"
                                        style={{ backgroundColor: cat.pointColor }}
                                    />
                                    <div>
                                        <h3 className="text-xl font-bold leading-tight">{cat.name}</h3>
                                        <p className="text-xs text-[#8FB8DE] font-medium tracking-wider uppercase">
                                            {cat.nameEn}
                                        </p>
                                    </div>
                                </div>

                                <p className="text-[#6D5A4B] text-sm leading-relaxed font-light">
                                    {cat.desc}
                                </p>

                                {/* Hover indicator */}
                                <div className="mt-4 flex items-center gap-2 text-[#8FB8DE] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <Heart className="w-4 h-4" />
                                    <span className="text-xs font-medium">น่าเลี้ยง!</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* -------- CTA SECTION -------- */}
            <section className="py-20 px-6 bg-[#F5F2EA]">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="max-w-3xl mx-auto text-center"
                >
                    <Sparkles className="w-8 h-8 mx-auto mb-4 text-[#8FB8DE]" />
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        พร้อมจะเริ่มเลี้ยงวิเชียรมาศแล้วไหม?
                    </h2>
                    <p className="text-[#6D5A4B] mb-8 font-light text-lg">
                        อ่านคู่มือฉบับสมบูรณ์เพื่อเตรียมพร้อมดูแลน้องแมวอย่างดีที่สุด
                    </p>
                    <Link
                        href="/cats/guide"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-[#3E2C20] text-white rounded-full font-bold hover:bg-[#8FB8DE] transition-colors duration-300 shadow-lg hover:shadow-xl"
                    >
                        <BookOpen className="w-5 h-5" />
                        เปิดคู่มือการเลี้ยง
                    </Link>
                </motion.div>
            </section>

            {/* -------- FOOTER -------- */}
            <footer className="py-8 text-center bg-[#FDFCF5] border-t border-[#3E2C20]/10 text-[#6D5A4B] text-sm">
                <p>© 2026 Siamese Legacy. Designed with Thai Heritage in mind.</p>
            </footer>
        </main>
    );
}
