"use client";

import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import {
    ArrowLeft,
    Utensils,
    HeartPulse,
    Scissors,
    Brain,
    GraduationCap,
    AlertTriangle,
    Cat,
    Sparkles,
    Droplets,
    ThermometerSun,
    ShieldCheck,
} from "lucide-react";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
};

type GuideSection = {
    icon: React.ReactNode;
    title: string;
    titleEn: string;
    color: string;
    bgColor: string;
    tips: { icon: React.ReactNode; text: string }[];
};

const guideSections: GuideSection[] = [
    {
        icon: <Utensils className="w-6 h-6" />,
        title: "อาหารและโภชนาการ",
        titleEn: "Nutrition",
        color: "text-amber-700",
        bgColor: "bg-amber-50 border-amber-200",
        tips: [
            { icon: <ShieldCheck className="w-4 h-4 text-amber-600" />, text: "เลือกอาหารเกรดพรีเมียมที่มีโปรตีนจากเนื้อสัตว์เป็นส่วนผสมหลัก (ไก่, ปลา, เนื้อวัว)" },
            { icon: <ShieldCheck className="w-4 h-4 text-amber-600" />, text: "ลูกแมว (0-12 เดือน) ให้อาหาร 3-4 มื้อต่อวัน, แมวโต 2 มื้อต่อวัน" },
            { icon: <ShieldCheck className="w-4 h-4 text-amber-600" />, text: "หลีกเลี่ยงอาหารที่มีธัญพืชเยอะ หรืออาหารคนที่มีเกลือ/เครื่องเทศ" },
            { icon: <ShieldCheck className="w-4 h-4 text-amber-600" />, text: "เสริมกรดไขมันโอเมก้า 3 เพื่อบำรุงขนและผิวหนัง" },
            { icon: <Droplets className="w-4 h-4 text-amber-600" />, text: "จัดน้ำสะอาดไว้ให้ตลอดเวลา แนะนำน้ำพุแมวเพื่อกระตุ้นการดื่ม" },
        ],
    },
    {
        icon: <HeartPulse className="w-6 h-6" />,
        title: "สุขภาพและการดูแลรักษา",
        titleEn: "Health Care",
        color: "text-rose-700",
        bgColor: "bg-rose-50 border-rose-200",
        tips: [
            { icon: <ShieldCheck className="w-4 h-4 text-rose-600" />, text: "พาไปพบสัตวแพทย์ตรวจสุขภาพอย่างน้อยปีละ 1-2 ครั้ง" },
            { icon: <ShieldCheck className="w-4 h-4 text-rose-600" />, text: "ฉีดวัคซีนครบตามกำหนด: วัคซีนรวม, วัคซีนพิษสุนัขบ้า" },
            { icon: <ShieldCheck className="w-4 h-4 text-rose-600" />, text: "ถ่ายพยาธิทุก 3 เดือน และหยดยาป้องกันเห็บหมัดทุกเดือน" },
            { icon: <ShieldCheck className="w-4 h-4 text-rose-600" />, text: "ระวังโรคที่พบบ่อย: โรคไต, โรคหัวใจ, ตาเหล่ (Strabismus)" },
            { icon: <ThermometerSun className="w-4 h-4 text-rose-600" />, text: "สังเกตพฤติกรรมผิดปกติ: เบื่ออาหาร, ซึม, น้ำหนักลดผิดปกติ" },
        ],
    },
    {
        icon: <Scissors className="w-6 h-6" />,
        title: "การดูแลขนและความสะอาด",
        titleEn: "Grooming",
        color: "text-sky-700",
        bgColor: "bg-sky-50 border-sky-200",
        tips: [
            { icon: <ShieldCheck className="w-4 h-4 text-sky-600" />, text: "แปรงขนสัปดาห์ละ 1-2 ครั้ง ขนสั้นจึงไม่ต้องดูแลเยอะ" },
            { icon: <ShieldCheck className="w-4 h-4 text-sky-600" />, text: "อาบน้ำเดือนละ 1 ครั้ง ใช้แชมพูสูตรอ่อนโยนสำหรับแมว" },
            { icon: <ShieldCheck className="w-4 h-4 text-sky-600" />, text: "ตัดเล็บทุก 2-3 สัปดาห์ ทำความสะอาดหูทุกสัปดาห์" },
            { icon: <ShieldCheck className="w-4 h-4 text-sky-600" />, text: "แปรงฟันด้วยยาสีฟันสำหรับแมว สัปดาห์ละ 2-3 ครั้ง" },
            { icon: <Droplets className="w-4 h-4 text-sky-600" />, text: "เช็ดตาด้วยสำลีชุบน้ำอุ่นเมื่อมีคราบเปื้อน" },
        ],
    },
    {
        icon: <Brain className="w-6 h-6" />,
        title: "นิสัยและพฤติกรรม",
        titleEn: "Personality",
        color: "text-violet-700",
        bgColor: "bg-violet-50 border-violet-200",
        tips: [
            { icon: <ShieldCheck className="w-4 h-4 text-violet-600" />, text: "วิเชียรมาศเป็นแมวที่ \"พูดเก่ง\" ชอบส่งเสียงร้องสื่อสาร" },
            { icon: <ShieldCheck className="w-4 h-4 text-violet-600" />, text: "ฉลาดมาก เรียนรู้ได้เร็ว สามารถฝึกให้ทำกิจกรรมต่างๆ ได้" },
            { icon: <ShieldCheck className="w-4 h-4 text-violet-600" />, text: "ต้องการความสนใจสูง ไม่ควรปล่อยให้อยู่คนเดียวนานๆ" },
            { icon: <ShieldCheck className="w-4 h-4 text-violet-600" />, text: "เข้ากับคนได้ดี เป็นมิตร รักเจ้าของ ติดคนมาก" },
            { icon: <Cat className="w-4 h-4 text-violet-600" />, text: "ชอบเล่น ซุกซน มีพลังงานเยอะ ต้องมีของเล่นให้เพียงพอ" },
        ],
    },
    {
        icon: <GraduationCap className="w-6 h-6" />,
        title: "การฝึกและกิจกรรม",
        titleEn: "Training",
        color: "text-emerald-700",
        bgColor: "bg-emerald-50 border-emerald-200",
        tips: [
            { icon: <ShieldCheck className="w-4 h-4 text-emerald-600" />, text: "ฝึกใช้กระบะทรายตั้งแต่ลูกแมว วางในที่สงบ ทำความสะอาดทุกวัน" },
            { icon: <ShieldCheck className="w-4 h-4 text-emerald-600" />, text: "ใช้ Clicker Training ร่วมกับขนมเพื่อสอนพฤติกรรมที่ต้องการ" },
            { icon: <ShieldCheck className="w-4 h-4 text-emerald-600" />, text: "จัดเวลาเล่นด้วยอย่างน้อย 30 นาทีต่อวัน (ไม้ตกแมว, ลูกบอล)" },
            { icon: <ShieldCheck className="w-4 h-4 text-emerald-600" />, text: "ติดตั้งเสาลับเล็บและคอนโดแมวเพื่อการออกกำลังกาย" },
            { icon: <Sparkles className="w-4 h-4 text-emerald-600" />, text: "ฝึกสังคมตั้งแต่เด็ก ให้คุ้นเคยกับคน สัตว์เลี้ยงอื่น และสิ่งแวดล้อม" },
        ],
    },
    {
        icon: <AlertTriangle className="w-6 h-6" />,
        title: "สิ่งที่ควรระวัง",
        titleEn: "Cautions",
        color: "text-orange-700",
        bgColor: "bg-orange-50 border-orange-200",
        tips: [
            { icon: <AlertTriangle className="w-4 h-4 text-orange-600" />, text: "อาหารอันตราย: ช็อกโกแลต, หัวหอม, กระเทียม, องุ่น, ลูกเกด" },
            { icon: <AlertTriangle className="w-4 h-4 text-orange-600" />, text: "ต้นไม้มีพิษ: ลิลลี่, ว่านหางจระเข้, พลูด่าง (Pothos)" },
            { icon: <AlertTriangle className="w-4 h-4 text-orange-600" />, text: "ระวังหน้าต่างสูง! ติดตาข่ายนิรภัยป้องกันแมวตกจากที่สูง" },
            { icon: <AlertTriangle className="w-4 h-4 text-orange-600" />, text: "เก็บยาและสารเคมีให้มิดชิด แมวอาจกินโดยไม่ตั้งใจ" },
            { icon: <AlertTriangle className="w-4 h-4 text-orange-600" />, text: "ไม่ควรให้นมวัว แมวหลายตัวย่อยแลคโตสไม่ได้" },
        ],
    },
];

export default function GuidePage() {
    return (
        <main className="min-h-screen bg-[#FDFCF5] text-[#3E2C20] font-serif overflow-x-hidden selection:bg-[#8FB8DE] selection:text-white">
            {/* -------- TOP NAV -------- */}
            <nav className="fixed top-0 left-0 w-full z-50 bg-[#FDFCF5]/80 backdrop-blur-md border-b border-[#3E2C20]/5">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <Link
                        href="/cats"
                        className="flex items-center gap-2 text-[#6D5A4B] hover:text-[#3E2C20] transition-colors group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        <span className="text-sm font-medium">กลับหน้าเลือกแมว</span>
                    </Link>
                    <div className="flex items-center gap-2 text-[#8FB8DE]">
                        <Cat className="w-5 h-5" />
                        <span className="text-sm font-bold tracking-wider">CARE GUIDE</span>
                    </div>
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
                        Complete Care Guide
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                        คู่มือการเลี้ยง
                    </h1>
                    <p className="text-lg text-[#6D5A4B] max-w-xl mx-auto leading-relaxed font-light">
                        ทุกสิ่งที่คุณต้องรู้เพื่อดูแลแมววิเชียรมาศให้มีความสุขและสุขภาพดี ตั้งแต่อาหาร สุขภาพ ไปจนถึงการฝึก
                    </p>
                </motion.div>

                {/* Decorative blur */}
                <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-[#8FB8DE] rounded-full opacity-[0.06] blur-3xl -z-10" />
            </section>

            {/* -------- QUICK STATS -------- */}
            <section className="pb-12 px-6">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4"
                >
                    {[
                        { label: "อายุขัย", value: "15-20 ปี" },
                        { label: "น้ำหนัก", value: "3-5 กก." },
                        { label: "นิสัย", value: "ร่าเริง" },
                        { label: "ดูแล", value: "ง่าย" },
                    ].map((stat) => (
                        <motion.div
                            key={stat.label}
                            variants={fadeInUp}
                            className="text-center p-5 bg-white rounded-2xl border border-[#3E2C20]/5 shadow-sm"
                        >
                            <p className="text-2xl font-bold text-[#3E2C20]">{stat.value}</p>
                            <p className="text-xs text-[#8FB8DE] font-medium tracking-wider uppercase mt-1">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* -------- GUIDE SECTIONS -------- */}
            <section className="pb-24 px-6">
                <motion.div
                    className="max-w-4xl mx-auto space-y-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.05 }}
                    variants={staggerContainer}
                >
                    {guideSections.map((section) => (
                        <motion.div
                            key={section.titleEn}
                            variants={fadeInUp}
                            className={`rounded-3xl border ${section.bgColor} p-8 shadow-sm hover:shadow-md transition-shadow duration-300`}
                        >
                            {/* Header */}
                            <div className="flex items-center gap-4 mb-6">
                                <div
                                    className={`w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center ${section.color}`}
                                >
                                    {section.icon}
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold">{section.title}</h2>
                                    <p className="text-xs text-[#6D5A4B]/60 tracking-widest uppercase font-medium">
                                        {section.titleEn}
                                    </p>
                                </div>
                            </div>

                            {/* Tips list */}
                            <ul className="space-y-4">
                                {section.tips.map((tip, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="mt-0.5 shrink-0">{tip.icon}</span>
                                        <p className="text-[#3E2C20]/80 leading-relaxed text-sm font-light">
                                            {tip.text}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* -------- BOTTOM CTA -------- */}
            <section className="py-20 px-6 bg-[#3E2C20] text-[#FDFCF5]">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="max-w-3xl mx-auto text-center"
                >
                    <Cat className="w-10 h-10 mx-auto mb-4 text-[#8FB8DE]" />
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        พร้อมต้อนรับสมาชิกใหม่แล้ว!
                    </h2>
                    <p className="text-[#8FB8DE] mb-8 font-light text-lg">
                        กลับไปเลือกดูแมวสีที่ชอบ แล้วเริ่มต้นชีวิตใหม่กับวิเชียรมาศ
                    </p>
                    <Link
                        href="/cats"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-[#8FB8DE] text-[#3E2C20] rounded-full font-bold hover:bg-white transition-colors duration-300 shadow-lg"
                    >
                        <Sparkles className="w-5 h-5" />
                        กลับไปเลือกดูแมว
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
