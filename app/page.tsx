"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Scroll, Sparkles, Crown, ArrowDown, Play, BookOpen } from 'lucide-react';

// Animation Variants (ใส่ Type กันแดง)
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const imageReveal: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeOut" } }
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FDFCF5] text-[#3E2C20] font-serif overflow-x-hidden selection:bg-[#8FB8DE] selection:text-white">
      
      {/* ---------------- HERO SECTION (Minimal) ---------------- */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-3xl z-10"
        >
          <span className="text-[#8FB8DE] tracking-[0.4em] uppercase text-sm font-bold mb-6 block">
            The Siamese Legend
          </span>
          <h1 className="text-6xl md:text-9xl font-bold mb-6 tracking-tight text-[#3E2C20]">
            วิเชียรมาศ
          </h1>
          <p className="text-lg md:text-xl text-[#6D5A4B] max-w-lg mx-auto leading-relaxed">
            อัญมณีแห่งสยาม แมวมงคลที่มาพร้อมกับเนตรสีฟ้าและแต้มสีเข้ม 9 แห่ง
          </p>
        </motion.div>

        {/* Decorative Circle (Eye Color) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[#8FB8DE] rounded-full opacity-10 blur-3xl -z-0"></div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 animate-bounce text-[#3E2C20]/50"
        >
          <ArrowDown className="w-6 h-6" />
        </motion.div>
      </section>

      {/* ---------------- CHAPTER 1: รูปภาพ + เนื้อหา ---------------- */}
      <section className="py-24 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* ส่วนรูปภาพ (Image) */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={imageReveal}
            className="relative h-[500px] rounded-[2rem] overflow-hidden shadow-2xl shadow-[#3E2C20]/10"
          >
            {/* ใส่รูปจริงตรง src นี้ */}
            <img 
              src="https://images.unsplash.com/photo-1567225591450-06036b3392a6?q=80&w=2070&auto=format&fit=crop" 
              alt="แมววิเชียรมาศ" 
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-6 left-6 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold tracking-wider text-[#3E2C20]">
              FIG 1. SIAMESE CAT
            </div>
          </motion.div>

          {/* ส่วนเนื้อหา */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={fadeInUp}
          >
            <div className="flex items-center gap-3 mb-6 text-[#8FB8DE]">
              <Scroll className="w-5 h-5" />
              <span className="font-bold tracking-widest uppercase text-sm">Chapter 1</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">ความลับใน<br/>สมุดข่อย</h2>
            <p className="text-lg leading-loose text-[#6D5A4B] mb-8 font-light">
              ท่ามกลางแสงเทียนในหอไตรสมัยอยุธยา บรรพบุรุษได้จารึกเรื่องราวลงใน 
              <strong className="text-[#3E2C20] font-medium border-b-2 border-[#8FB8DE]/50 mx-1">สมุดข่อย</strong> 
              แบ่งแมวเป็นฝ่ายให้คุณและโทษ วิเชียรมาศคือหนึ่งในแมวมงคลที่ถูกยกย่องสูงสุด
            </p>
            <blockquote className="border-l-2 border-[#3E2C20] pl-6 italic text-[#6D5A4B]">
              "ผู้ใดเลี้ยงไว้ จักได้เป็นเศรษฐี มีทรัพย์สมบัติงอกเงย"
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* ---------------- VIDEO SECTION ---------------- */}
      <section className="py-24 bg-[#3E2C20] text-[#FDFCF5] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
           <motion.div 
             initial={{ opacity: 0, y: 20 }} 
             whileInView={{ opacity: 1, y: 0 }} 
             viewport={{ once: true }}
             className="mb-12"
           >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">ท่วงท่าแห่งชนชั้นสูง</h2>
              <p className="text-[#8FB8DE] font-light">The Elegant Movement</p>
           </motion.div>

           {/* Video Container */}
           <motion.div 
             initial={{ opacity: 0, scale: 0.9 }} 
             whileInView={{ opacity: 1, scale: 1 }} 
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="relative aspect-video w-full rounded-xl overflow-hidden shadow-2xl bg-black"
           >
             {/* ใส่ Video File ตรงนี้ */}
             <video 
               className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
               autoPlay 
               loop 
               muted 
               playsInline
             >
               <source src="https://videos.pexels.com/video-files/5657859/5657859-hd_1920_1080_30fps.mp4" type="video/mp4" />
               Your browser does not support the video tag.
             </video>
             
             {/* Overlay Play Icon (Decorative) */}
             <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-20 h-20 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm">
                  <Play className="w-8 h-8 text-white fill-white" />
                </div>
             </div>
           </motion.div>
        </div>
      </section>

      {/* ---------------- CHAPTER 2: ลักษณะ (Grid Minimal) ---------------- */}
      <section className="py-32 px-6 bg-[#FDFCF5]">
        <div className="max-w-5xl mx-auto">
          <motion.div 
             initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
             className="text-center mb-20"
          >
            <h2 className="text-4xl font-bold mb-4">เพชรแห่งดวงจันทร์</h2>
            <div className="w-20 h-1 bg-[#3E2C20] mx-auto mt-6"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
             {[
               { icon: <Sparkles/>, title: "ขนขาวบริสุทธิ์", desc: "ขาวนวลเหมือนดวงจันทร์ ตัดกับแต้มสีเข้มอย่างชัดเจน" },
               { icon: <Crown/>, title: "แต้ม 9 แห่ง", desc: "หน้ากาก หู เท้า หาง และอวัยวะเพศ ครบสูตรตามตำรา" },
               { icon: <ArrowDown className="rotate-45"/>, title: "นัยน์ตาฟ้า", desc: "ตาสีฟ้าสดใสเหมือนแก้วมณี หรือเกสรดอกบัว" }
             ].map((item, index) => (
               <motion.div 
                 key={index}
                 initial={{ opacity: 0, y: 30 }} 
                 whileInView={{ opacity: 1, y: 0 }} 
                 viewport={{ once: true }}
                 transition={{ delay: index * 0.2 }}
                 className="group p-8 border border-[#3E2C20]/10 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300"
               >
                 <div className="w-12 h-12 bg-[#8FB8DE]/20 rounded-full flex items-center justify-center mb-6 text-[#3E2C20] group-hover:bg-[#8FB8DE] group-hover:text-white transition-colors">
                   {item.icon}
                 </div>
                 <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                 <p className="text-[#6D5A4B] font-light leading-relaxed">{item.desc}</p>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* ---------------- CONCLUSION ---------------- */}
      <section className="py-24 px-6 md:px-20 bg-[#F5F2EA]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <BookOpen className="w-10 h-10 mx-auto mb-6 text-[#3E2C20]" />
            <h2 className="text-3xl md:text-5xl font-bold mb-8">จากอยุธยา... สู่อ้อมกอดคุณ</h2>
            <p className="text-lg md:text-xl text-[#6D5A4B] leading-relaxed mb-12">
              แม้กาลเวลาจะผ่านไปหลายร้อยปี แต่เสน่ห์ของแมววิเชียรมาศยังคงเป็น "อมตะ" <br/>
              นี่คือมรดกทางวัฒนธรรมที่มีชีวิต ที่รอให้คุณได้สัมผัส
            </p>
            <button className="px-8 py-4 bg-[#3E2C20] text-white rounded-full font-bold hover:bg-[#8FB8DE] transition-colors duration-300 shadow-lg">
              เริ่มต้นเลี้ยงวิเชียรมาศ
            </button>
          </motion.div>
        </div>
      </section>

      {/* ---------------- FOOTER ---------------- */}
      <footer className="py-8 text-center bg-[#FDFCF5] border-t border-[#3E2C20]/10 text-[#6D5A4B] text-sm">
        <p>© 2026 Siamese Legacy. Designed with Thai Heritage in mind.</p>
      </footer>

    </main>
  );
}