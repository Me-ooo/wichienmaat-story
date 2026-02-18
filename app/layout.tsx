import type { Metadata } from "next";
import { Noto_Serif_Thai } from "next/font/google"; // Import ฟอนต์ไทยแบบมีหัว
import "./globals.css";

const sarabun = Noto_Serif_Thai({ 
  subsets: ["thai", "latin"],
  weight: ["300", "400", "600", "700"],
  variable: '--font-thai'
});

export const metadata: Metadata = {
  title: "ตำนานแมววิเชียรมาศ | อัญมณีแห่งสยาม",
  description: "ย้อนเวลาสู่สมัยอยุธยา เปิดตำนานแมวมงคลไทย",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body className={`${sarabun.variable} font-serif antialiased bg-[#FDFBF7] text-[#4A4036]`}>
        {children}
      </body>
    </html>
  );
}