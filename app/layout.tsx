import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "vietnamese"], display: "swap" });

export const metadata: Metadata = {
  title: "Thái Nguyễn Bảo Luân | Software Engineer - Java, Spring Boot, React Native & AI",
  description:
    "Portfolio của Thái Nguyễn Bảo Luân - Kỹ sư phần mềm chuyên sâu về Java, Spring Boot, React Native, Microservices và tích hợp AI. Sinh viên Đại học CNTT-TT Việt - Hàn (VKU).",
  keywords: [
    "Thái Nguyễn Bảo Luân",
    "Bảo Luân",
    "Software Engineer",
    "Fullstack Developer",
    "Spring Boot",
    "Java Developer",
    "React Native",
    "FastAPI",
    "Microservices",
    "Da Nang Developer",
    "Portfolio",
  ],
  authors: [{ name: "Thái Nguyễn Bảo Luân" }],
  creator: "Thái Nguyễn Bảo Luân",
  openGraph: {
    title: "Thái Nguyễn Bảo Luân | Software Engineer Portfolio",
    description:
      "Kỹ sư phần mềm đam mê xây dựng hệ sinh thái web hiện đại, kiến trúc Microservices hiệu năng cao và tích hợp AI.",
    url: "https://github.com/luana2322",
    siteName: "Bảo Luân Portfolio",
    locale: "vi_VN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning className="scroll-smooth">
      <body className={`${inter.className} antialiased selection:bg-sky-500/30 selection:text-sky-400`}>
        {children}
      </body>
    </html>
  );
}