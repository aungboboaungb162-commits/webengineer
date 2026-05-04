import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from './components/Footer';
import Navbar from './components/Navbar'; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spring Star HVAC | Commercial & Industrial Solutions",
  description: "Professional HVAC and mechanical engineering solutions with over 15 years of experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true} className="scroll-smooth">
      <body className={`${inter.className} bg-slate-50`} suppressHydrationWarning={true}>
        
        {/* Navigation Bar - Floating & Sticky */}
        <Navbar />

        {/* pt-40 ကို ဖယ်လိုက်ပါပြီ၊ ဒါမှ photo က header အောက်ထဲ တိုးဝင်သွားမှာပါ */}
        <main className="min-h-screen pt-24">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}