import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Rahul Kumar Mutcherla - Backend Developer & Go Engineer",
  description:
    "Full-stack developer specializing in Go microservices, gRPC APIs, and modern web applications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body
        className={`${inter.className} bg-[#080c16] text-slate-200 min-h-screen antialiased`}
      >
        {/* Fixed background layers */}
        <div className="fixed inset-0 grid-bg pointer-events-none -z-10" />
        <div className="fixed top-1/4 -left-32 w-[600px] h-[600px] bg-blue-600/[0.035] rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="fixed bottom-1/4 -right-32 w-[500px] h-[500px] bg-violet-600/[0.035] rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="fixed top-3/4 left-1/2 w-[300px] h-[300px] bg-emerald-600/[0.02] rounded-full blur-3xl pointer-events-none -z-10" />

        <Navbar />
        {children}
      </body>
    </html>
  );
}
