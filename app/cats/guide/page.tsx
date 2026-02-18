"use client";

import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import {
    ArrowLeft,
    UtensilsCrossed,
    Home,
    Stethoscope,
    Heart,
    Droplets,
    Scissors,
    ThermometerSun,
    ShieldCheck,
    Sparkles,
    CheckCircle2,
    PawPrint,
    UserPlus,
} from "lucide-react";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
};

interface GuideSection {
    icon: React.ReactNode;
    title: string;
    subtitle: string;
    color: string;
    tips: string[];
}

const guideSections: GuideSection[] = [
    {
        icon: <UtensilsCrossed className="w-6 h-6" />,
        title: "อาหาร",
        subtitle: "เลือกสิ่งที่ดีที่สุดให้น้อง",
        color: "bg-amber-50 text-amber-700 border-amber-200",
        tips: [
            "เลือกอาหารเกรดพรีเมียมที่มีโปรตีนจากเนื้อสัตว์เป็นส่วนผสมหลัก",
            "ให้อาหารวันละ 2-3 มื้อ ตามน้ำหนักตัว อย่าให้กินเกินไป",
            "เตรียมน้ำสะอาดไว้ให้ตลอดเวลา เปลี่ยนทุกวัน",
            "หลีกเลี่ยง: ช็อกโกแลต หัวหอม กระเทียม องุ่น",
        ],
    },
    {
        icon: <Home className="w-6 h-6" />,
        title: "สิ่งแวดล้อม",
        subtitle: "จัดบ้านให้น้องสบาย",
        color: "bg-emerald-50 text-emerald-700 border-emerald-200",
        tips: [
            "จัดพื้นที่สูงให้ปีนป่าย — แมววิเชียรมาศชอบอยู่ที่สูง",
            "เตรียมเสาลับเล็บไว้หลายจุด ป้องกันเฟอร์นิเจอร์เสียหาย",
            "จัดห้องน้ำแมวในที่เงียบสงบ เปลี่ยนทรายอย่างน้อยวันละครั้ง",
            "เตรียมของเล่นหลากหลาย — แมวสายพันธุ์นี้ฉลาดและเบื่อง่าย",
        ],
    },
    {
        icon: <Stethoscope className="w-6 h-6" />,
        title: "สุขภาพ",
        subtitle: "ดูแลให้แข็งแรง",
        color: "bg-blue-50 text-blue-700 border-blue-200",
        tips: [
            "พาไปตรวจสุขภาพประจำปี อย่างน้อยปีละ 1 ครั้ง",
            "ฉีดวัคซีนครบตามกำหนด ทั้งวัคซีนหลักและเสริม",
            "ระวังโรคที่พบบ่อย: ต้อกระจก, โรคหัวใจ, โรคไต",
            "ทำหมันเพื่อสุขภาพที่ดีและลดพฤติกรรมก้าวร้าว",
        ],
    },
    {
        icon: <Heart className="w-6 h-6" />,
        title: "อารมณ์ & นิสัย",
        subtitle: "เข้าใจหัวใจน้อง",
        color: "bg-rose-50 text-rose-700 border-rose-200",
        tips: [
            "แมววิเชียรมาศเป็นแมวที่ \"พูดเก่ง\" — ชอบส่งเสียงร้องสื่อสาร",
            "ติดเจ้าของมาก อย่าปล่อยให้อยู่คนเดียวนานเกินไป",
            "ฉลาดและเรียนรู้เร็ว สามารถฝึกได้เหมือนสุนัข",
            "ให้ความรักและเวลา — นี่คือสิ่งที่น้องต้องการมากที่สุด",
        ],
    },
    {
        icon: <Droplets className="w-6 h-6" />,
        title: "การอาบน้ำ",
        subtitle: "สะอาดหมดจด",
        color: "bg-sky-50 text-sky-700 border-sky-200",
        tips: [
            "อาบน้ำเดือนละ 1-2 ครั้ง หรือเมื่อจำเป็น",
            "ใช้แชมพูสำหรับแมวโดยเฉพาะ ห้ามใช้สบู่คน",
            "เช็ดหูทุกสัปดาห์ด้วยน้ำยาล้างหูแมว",
            "เป่าขนให้แห้งสนิทหลังอาบน้ำ ป้องกันเชื้อรา",
        ],
    },
    {
        icon: <Scissors className="w-6 h-6" />,
        title: "การดูแลขน",
        subtitle: "ขนสวยเงางาม",
        color: "bg-violet-50 text-violet-700 border-violet-200",
        tips: [
            "แปรงขนสัปดาห์ละ 2-3 ครั้ง ลดขนร่วงในบ้าน",
            "ขนวิเชียรมาศสั้นดูแลง่าย ไม่ต้องตัดเป็นทรง",
            "สังเกตขนเปลี่ยนสี — อุณหภูมิมีผลต่อสีแต้ม",
            "ตัดเล็บทุก 2 สัปดาห์ ระวังอย่าตัดถึกเส้นเลือด",
        ],
    },
];

const quickChecklist = [
    "ถาดทรายแมว + ทรายแมวคุณภาพดี",
    "ชามอาหารและชามน้ำ (สแตนเลสหรือเซรามิก)",
    "อาหารแมวเกรดพรีเมียม",
    "เสาลับเล็บ",
    "ของเล่นอย่างน้อย 3-4 ชิ้น",
    "กล่องหรือเตียงสำหรับนอน",
    "กรงเดินทาง",
    "นัดพบสัตวแพทย์ภายในสัปดาห์แรก",
];

export default function GuidePage() {
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
                    href="/cats"
                    className="group flex items-center gap-2.5 px-5 py-3 bg-white/90 backdrop-blur-xl border border-[#3E2C20]/10 rounded-full shadow-lg shadow-[#3E2C20]/10 hover:bg-[#3E2C20] hover:text-white hover:shadow-xl hover:shadow-[#3E2C20]/25 hover:scale-105 active:scale-95 transition-all duration-300 ring-1 ring-[#3E2C20]/5 hover:ring-[#3E2C20]/50"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1.5 transition-transform duration-300" />
                    <span className="text-sm font-semibold tracking-wide">กลับดูแมว</span>
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
                        Care Guide
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                        คู่มือการเลี้ยง
                    </h1>
                    <p className="text-lg text-[#6D5A4B] max-w-xl mx-auto leading-relaxed font-light">
                        ทุกสิ่งที่คุณต้องรู้เพื่อเลี้ยงวิเชียรมาศให้มีความสุข แข็งแรง และอายุยืน
                    </p>
                </motion.div>
            </section>

            {/* --- Guide Grid --- */}
            <section className="px-6 md:px-16 pb-16">
                <motion.div
                    className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={stagger}
                >
                    {guideSections.map((section, i) => (
                        <motion.div
                            key={i}
                            variants={fadeInUp}
                            className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl border border-[#3E2C20]/5 transition-shadow duration-500"
                        >
                            {/* Icon + Title */}
                            <div
                                className={`inline-flex items-center gap-3 px-4 py-2 rounded-full text-sm font-bold mb-6 border ${section.color}`}
                            >
                                {section.icon}
                                {section.title}
                            </div>
                            <p className="text-[#6D5A4B] text-sm mb-5 font-light">{section.subtitle}</p>

                            {/* Tips list */}
                            <ul className="space-y-3">
                                {section.tips.map((tip, j) => (
                                    <li
                                        key={j}
                                        className="flex items-start gap-3 text-sm leading-relaxed text-[#4A4036]"
                                    >
                                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#8FB8DE] shrink-0" />
                                        {tip}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* --- Quick Checklist --- */}
            <section className="py-20 px-6 bg-[#F5F2EA]">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="max-w-2xl mx-auto"
                >
                    <div className="text-center mb-12">
                        <ShieldCheck className="w-8 h-8 mx-auto mb-4 text-[#3E2C20]" />
                        <h2 className="text-3xl font-bold mb-3">เช็คลิสต์ก่อนรับน้องกลับบ้าน</h2>
                        <p className="text-[#6D5A4B] font-light">สิ่งที่ต้องเตรียมให้พร้อมก่อนน้องมาถึง</p>
                    </div>

                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#3E2C20]/5">
                        <motion.ul className="space-y-4" variants={stagger}>
                            {quickChecklist.map((item, i) => (
                                <motion.li
                                    key={i}
                                    variants={fadeInUp}
                                    className="flex items-center gap-4 text-[#4A4036]"
                                >
                                    <CheckCircle2 className="w-5 h-5 text-[#8FB8DE] shrink-0" />
                                    <span className="font-light">{item}</span>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </div>
                </motion.div>
            </section>

            {/* --- Temperature Section --- */}
            <section className="py-20 px-6 bg-[#3E2C20] text-[#FDFCF5]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <ThermometerSun className="w-8 h-8 mx-auto mb-6 text-[#8FB8DE]" />
                    <h2 className="text-3xl font-bold mb-6">รู้หรือไม่?</h2>
                    <p className="text-lg leading-relaxed opacity-80 mb-4 font-light">
                        สีแต้มของแมววิเชียรมาศเปลี่ยนแปลงตามอุณหภูมิ! ยีนที่ควบคุมสีขนของแมววิเชียรมาศเป็น
                        <strong className="text-[#8FB8DE] font-semibold"> ยีนที่ไวต่ออุณหภูมิ </strong>
                        ทำให้บริเวณที่เย็นกว่า (หู จมูก เท้า หาง) จะมีสีเข้มกว่าส่วนอื่นของร่างกาย
                    </p>
                    <p className="text-sm opacity-50 font-light">
                        ลูกแมววิเชียรมาศจะเกิดมาตัวขาวทั้งหมด แล้วค่อยๆ เข้มขึ้นตามอายุ
                    </p>
                </motion.div>
            </section>

            {/* --- CTA --- */}
            <section className="py-20 px-6 bg-[#FDFCF5] text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <Sparkles className="w-8 h-8 mx-auto mb-4 text-[#8FB8DE]" />
                    <h2 className="text-3xl font-bold mb-4">พร้อมแล้ว!</h2>
                    <p className="text-[#6D5A4B] mb-10 max-w-lg mx-auto font-light text-lg">
                        เมื่ออ่านจบแล้ว คุณก็พร้อมที่จะต้อนรับน้องวิเชียรมาศเข้าสู่ครอบครัว
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                        <Link
                            href="/cats"
                            className="group relative inline-flex items-center gap-3 px-9 py-4.5 bg-gradient-to-r from-[#3E2C20] via-[#5C4033] to-[#3E2C20] text-white rounded-full font-bold shadow-xl shadow-[#3E2C20]/30 hover:shadow-2xl hover:shadow-[#8FB8DE]/40 hover:scale-105 active:scale-95 transition-all duration-300 ring-1 ring-white/10 hover:ring-[#8FB8DE]/50 overflow-hidden"
                        >
                            <PawPrint className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                            กลับดูสายพันธุ์
                            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                        </Link>
                        <Link
                            href="/login"
                            className="group relative inline-flex items-center gap-3 px-9 py-4.5 border-2 border-[#3E2C20] text-[#3E2C20] rounded-full font-bold hover:bg-[#3E2C20] hover:text-white hover:scale-105 active:scale-95 transition-all duration-300 hover:shadow-xl hover:shadow-[#3E2C20]/20 overflow-hidden"
                        >
                            <UserPlus className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                            สมัครสมาชิก
                            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-[#3E2C20]/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                        </Link>
                    </div>
                </motion.div>
            </section>

            {/* --- Footer --- */}
            <footer className="py-8 text-center bg-[#FDFCF5] border-t border-[#3E2C20]/10 text-[#6D5A4B] text-sm">
                <p>© 2026 Siamese Legacy. Designed with Thai Heritage in mind.</p>
            </footer>
        </main>
    );
}
