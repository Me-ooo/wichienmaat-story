"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, Variants, AnimatePresence } from "framer-motion";
import {
    ArrowLeft,
    Heart,
    BookOpen,
    Sparkles,
    LogIn,
    X,
    UtensilsCrossed,
    Home,
    Stethoscope,
    ThermometerSun,
} from "lucide-react";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

const stagger: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
};

interface CatBreed {
    name: string;
    nameEn: string;
    color: string;
    accent: string;
    image: string;
    description: string;
    traits: string[];
    careTips: {
        food: string;
        environment: string;
        health: string;
        temperature: string;
    };
}

const cats: CatBreed[] = [
    {
        name: "ซีลพอยท์",
        nameEn: "Seal Point",
        color: "from-[#3E2C20] to-[#5C4033]",
        accent: "#3E2C20",
        image:
            "https://images.unsplash.com/photo-1568152950566-c1bf43f4ab28?w=600&h=400&fit=crop&crop=faces",
        description:
            "สีคลาสสิกดั้งเดิม ลำตัวสีครีมอ่อนตัดกับแต้มสีน้ำตาลเข้มเกือบดำ นัยน์ตาสีฟ้าสดใส เป็นสีที่พบมากที่สุดและเป็นที่รู้จักมากที่สุด",
        traits: ["ฉลาดมาก", "ชอบเล่น", "ขี้หึง", "เสียงดัง"],
        careTips: {
            food: "ต้องการโปรตีนสูง เพราะเป็นแมวที่ใช้พลังงานมาก ให้อาหารเกรดพรีเมียม 2-3 มื้อต่อวัน",
            environment:
                "ต้องการพื้นที่วิ่งเล่นกว้าง จัดของเล่นปริศนาให้ เพราะเป็นสายพันธุ์ที่ฉลาดและเบื่อง่าย",
            health:
                "ระวังโรคอ้วนเพราะกินเก่ง ตรวจสุขภาพฟันเป็นประจำ มีแนวโน้มเป็นโรคจมูกอักเสบ",
            temperature:
                "สีแต้มจะเข้มขึ้นในอากาศเย็น ควรรักษาอุณหภูมิห้อง 22-26°C",
        },
    },
    {
        name: "ช็อกโกแลตพอยท์",
        nameEn: "Chocolate Point",
        color: "from-[#6B4226] to-[#8B6914]",
        accent: "#6B4226",
        image:
            "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?w=600&h=400&fit=crop&crop=faces",
        description:
            "ลำตัวสีงาช้าง แต้มสีช็อกโกแลตนม อ่อนโยนกว่าซีลพอยท์ ดูหวานน่ารัก สีแต้มจะไม่เข้มเท่าซีลพอยท์",
        traits: ["อ่อนโยน", "เป็นมิตร", "เสียงเบา", "ขี้เล่น"],
        careTips: {
            food: "ชอบอาหารหลากหลาย หมุนเวียนรสชาติได้ ให้อาหารเปียกสลับแห้ง เสริมทอรีนจากปลา",
            environment:
                "ชอบอยู่ใกล้ชิดคน จัดที่นอนใกล้เจ้าของ ชอบมีเพื่อนเล่น อาจต้องเลี้ยงคู่กัน",
            health:
                "มีแนวโน้มเรื่องฟันผุ ควรแปรงฟันสัปดาห์ละ 2-3 ครั้ง ระวังน้ำหนักเกิน",
            temperature:
                "สีจะค่อยๆ เข้มขึ้นช้ากว่าซีลพอยท์ ลูกแมวจะขาวนานกว่าก่อนสีจะปรากฏ",
        },
    },
    {
        name: "บลูพอยท์",
        nameEn: "Blue Point",
        color: "from-[#6B7B8D] to-[#8FA4B8]",
        accent: "#6B7B8D",
        image:
            "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=600&h=400&fit=crop&crop=faces",
        description:
            "ลำตัวสีขาวอมฟ้า แต้มสีเทาอมฟ้า สง่างามเหมือนท้องฟ้าในวันครึ้มฝน เป็นสีที่ได้รับความนิยมอันดับ 2",
        traits: ["สงบเยือกเย็น", "รักเจ้าของ", "ละเอียดอ่อน", "สุขุม"],
        careTips: {
            food: "ชอบกินน้อยแต่บ่อย แบ่งอาหารเป็น 3-4 มื้อเล็กๆ เสริมน้ำมันปลาเพื่อขนสวย",
            environment:
                "ชอบความสงบ ไม่ชอบเสียงดัง จัดมุมเงียบสงบให้พักผ่อน ชอบปีนที่สูงมองวิว",
            health:
                "ระวังเรื่องไตเพราะเป็นสายพันธุ์ที่มีแนวโน้ม ให้ดื่มน้ำมากๆ โดยใช้น้ำพุแมว",
            temperature:
                "สีจะเปลี่ยนตามฤดูกาลชัดเจน ฤดูหนาวสีจะเข้มกว่าฤดูร้อนมาก",
        },
    },
    {
        name: "ไลแลคพอยท์",
        nameEn: "Lilac Point",
        color: "from-[#9B8F9E] to-[#C4B7C9]",
        accent: "#9B8F9E",
        image:
            "https://images.unsplash.com/photo-1513245543132-31f507417b26?w=600&h=400&fit=crop&crop=faces",
        description:
            "ลำตัวสีขาวนวล แต้มสีเทาอมชมพูอ่อน หายากที่สุดและสวยละมุนที่สุด สีแต้มเบาบางอย่างน่าหลงใหล",
        traits: ["ขี้อ้อน", "ติดคน", "เสียงไพเราะ", "ใจดี"],
        careTips: {
            food: "มีท้องบอบบาง เลือกอาหารที่ย่อยง่าย หลีกเลี่ยงอาหารที่มีสีผสมและสารกันบูด",
            environment:
                "ต้องการความรักมากเป็นพิเศษ ไม่ควรปล่อยให้อยู่คนเดียวนาน จัดของเล่นนุ่มๆ ให้กอด",
            health:
                "สายพันธุ์หายาก ควรตรวจสุขภาพถี่กว่าปกติ ระวังเรื่องตาและหูเป็นพิเศษ",
            temperature:
                "สีอ่อนมากจนบางตัวดูเกือบขาวทั้งตัว จะเห็นสีชัดเมื่ออายุ 1-2 ปี",
        },
    },
    {
        name: "เฟลมพอยท์",
        nameEn: "Flame Point",
        color: "from-[#C75B39] to-[#E8945A]",
        accent: "#C75B39",
        image:
            "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=600&h=400&fit=crop&crop=faces",
        description:
            "ลำตัวสีครีมขาว แต้มสีส้มอมแดงเหมือนเปลวไฟ หายากและโดดเด่น มักมีนิสัยสนุกสนานร่าเริงกว่าสีอื่น",
        traits: ["ร่าเริง", "ซุกซน", "กล้าหาญ", "ชอบผจญภัย"],
        careTips: {
            food: "ใช้พลังงานมาก ให้อาหารที่มีแคลอรี่สูงกว่าสีอื่น เสริมวิตามินบำรุงขน",
            environment:
                "ต้องการพื้นที่เล่นมากที่สุดในทุกสี ชอบของเล่นที่เคลื่อนไหว ล่าเหยื่อ",
            health:
                "ผิวหนังบริเวณจมูกและหูมีแนวโน้มไหม้แดดง่าย ควรป้องกันแสงแดดจัด",
            temperature:
                "สีแต้มจะจางมากตอนเด็ก บางตัวเกือบมองไม่เห็น สีจะเข้มขึ้นเมื่อโต",
        },
    },
    {
        name: "ทอร์ตี้พอยท์",
        nameEn: "Tortie Point",
        color: "from-[#8B4513] to-[#CD853F]",
        accent: "#8B4513",
        image:
            "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=600&h=400&fit=crop&crop=faces",
        description:
            "ลำตัวสีครีม แต้มเป็นลายผสมระหว่างน้ำตาลเข้มและส้มแดง แต่ละตัวมีลวดลายไม่ซ้ำกัน ส่วนใหญ่เป็นตัวเมีย",
        traits: ["มีบุคลิก", "อิสระ", "แสนรู้", "ขี้งอน"],
        careTips: {
            food: "ชอบเลือกอาหาร อาจต้องลองหลายยี่ห้อ ให้อาหารสดเสริมเป็นครั้งคราว",
            environment:
                "ต้องการพื้นที่ส่วนตัว จัดมุมซ่อนตัวให้ ชอบมีทางเลือกหลายจุดในการพัก",
            health:
                "ส่วนใหญ่เป็นตัวเมีย (เพราะยีนสีอยู่บนโครโมโซม X) ควรทำหมันตามคำแนะนำสัตวแพทย์",
            temperature:
                "ลวดลายจะเปลี่ยนแปลงตลอดชีวิต ไม่มีตัวไหนเหมือนกัน — ทุกตัวมีเอกลักษณ์",
        },
    },
];

export default function CatsPage() {
    const [selectedCat, setSelectedCat] = useState<CatBreed | null>(null);

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
                    <span className="text-sm font-semibold tracking-wide">
                        กลับหน้าหลัก
                    </span>
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
                        ค้นพบความงดงามของแมววิเชียรมาศทั้ง 6 สี
                        คลิกที่การ์ดเพื่อดูวิธีเลี้ยงเฉพาะของแต่ละสี
                    </p>
                </motion.div>
            </section>

            {/* --- Cat Grid --- */}
            <section className="px-6 md:px-16 pb-12">
                <motion.div
                    className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={stagger}
                >
                    {cats.map((cat, i) => (
                        <motion.div
                            key={i}
                            variants={fadeInUp}
                            onClick={() => setSelectedCat(cat)}
                            className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#3E2C20]/5 cursor-pointer hover:scale-[1.02]"
                        >
                            {/* Image Area */}
                            <div className="relative h-56 overflow-hidden">
                                <img
                                    src={cat.image}
                                    alt={`แมววิเชียรมาศ ${cat.name}`}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                {/* Gradient overlay */}
                                <div
                                    className={`absolute inset-0 bg-gradient-to-t ${cat.color} opacity-40 group-hover:opacity-50 transition-opacity duration-300`}
                                />

                                {/* Floating label */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                    <p className="text-xs tracking-[0.3em] uppercase font-light opacity-80 mb-1">
                                        {cat.nameEn}
                                    </p>
                                    <h2 className="text-2xl font-bold">{cat.name}</h2>
                                </div>

                                {/* Heart icon */}
                                <div className="absolute top-4 right-4">
                                    <Heart className="w-5 h-5 text-white/60 group-hover:text-white group-hover:fill-white/30 transition-all duration-300" />
                                </div>
                            </div>

                            {/* Content Area */}
                            <div className="p-6">
                                <p className="text-[#6D5A4B] leading-relaxed mb-4 font-light text-sm">
                                    {cat.description}
                                </p>

                                {/* Traits */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {cat.traits.map((trait, j) => (
                                        <span
                                            key={j}
                                            className="px-3 py-1 text-xs font-semibold rounded-full border border-[#3E2C20]/15 text-[#3E2C20]/80 bg-[#F5F2EA]"
                                        >
                                            {trait}
                                        </span>
                                    ))}
                                </div>

                                {/* CTA hint */}
                                <div className="flex items-center gap-2 text-[#8FB8DE] text-xs font-semibold tracking-wide group-hover:translate-x-1 transition-transform duration-300">
                                    <BookOpen className="w-3.5 h-3.5" />
                                    คลิกเพื่อดูวิธีเลี้ยง
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* --- Care Detail Modal --- */}
            <AnimatePresence>
                {selectedCat && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
                        onClick={() => setSelectedCat(null)}
                    >
                        {/* Backdrop */}
                        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

                        {/* Modal Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 40, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 40, scale: 0.95 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="relative bg-[#FDFCF5] rounded-3xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Modal Header Image */}
                            <div className="relative h-48 md:h-56 overflow-hidden rounded-t-3xl">
                                <img
                                    src={selectedCat.image}
                                    alt={selectedCat.name}
                                    className="w-full h-full object-cover"
                                />
                                <div
                                    className={`absolute inset-0 bg-gradient-to-t ${selectedCat.color} opacity-50`}
                                />
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                    <p className="text-xs tracking-[0.3em] uppercase opacity-80 mb-1">
                                        {selectedCat.nameEn} — Care Guide
                                    </p>
                                    <h2 className="text-3xl font-bold">
                                        วิธีเลี้ยง{selectedCat.name}
                                    </h2>
                                </div>

                                {/* Close button */}
                                <button
                                    onClick={() => setSelectedCat(null)}
                                    className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Modal Body — Care Tips */}
                            <div className="p-6 md:p-8 space-y-6">
                                {/* Food */}
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center shrink-0 border border-amber-200">
                                        <UtensilsCrossed className="w-5 h-5 text-amber-700" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-sm mb-1">🍽️ อาหาร</h3>
                                        <p className="text-[#6D5A4B] text-sm leading-relaxed font-light">
                                            {selectedCat.careTips.food}
                                        </p>
                                    </div>
                                </div>

                                {/* Environment */}
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center shrink-0 border border-emerald-200">
                                        <Home className="w-5 h-5 text-emerald-700" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-sm mb-1">🏠 สิ่งแวดล้อม</h3>
                                        <p className="text-[#6D5A4B] text-sm leading-relaxed font-light">
                                            {selectedCat.careTips.environment}
                                        </p>
                                    </div>
                                </div>

                                {/* Health */}
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center shrink-0 border border-blue-200">
                                        <Stethoscope className="w-5 h-5 text-blue-700" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-sm mb-1">🩺 สุขภาพ</h3>
                                        <p className="text-[#6D5A4B] text-sm leading-relaxed font-light">
                                            {selectedCat.careTips.health}
                                        </p>
                                    </div>
                                </div>

                                {/* Temperature */}
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 bg-rose-50 rounded-xl flex items-center justify-center shrink-0 border border-rose-200">
                                        <ThermometerSun className="w-5 h-5 text-rose-700" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-sm mb-1">🌡️ อุณหภูมิ & สี</h3>
                                        <p className="text-[#6D5A4B] text-sm leading-relaxed font-light">
                                            {selectedCat.careTips.temperature}
                                        </p>
                                    </div>
                                </div>

                                {/* Divider */}
                                <div className="h-px bg-[#3E2C20]/10" />

                                {/* Traits in modal */}
                                <div>
                                    <h3 className="font-bold text-sm mb-3">
                                        ✨ นิสัยเฉพาะตัว
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedCat.traits.map((trait, j) => (
                                            <span
                                                key={j}
                                                className="px-4 py-2 text-xs font-semibold rounded-full border border-[#3E2C20]/15 text-[#3E2C20]/80 bg-[#F5F2EA]"
                                            >
                                                {trait}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

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
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        พร้อมเลี้ยงแล้วหรือยัง?
                    </h2>
                    <p className="text-[#6D5A4B] mb-10 font-light text-lg leading-relaxed">
                        อ่านคู่มือการเลี้ยงวิเชียรมาศฉบับเข้าใจง่าย
                        เพื่อเตรียมตัวต้อนรับสมาชิกใหม่ของครอบครัว
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
