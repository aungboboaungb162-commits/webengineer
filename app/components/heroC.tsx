'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroC() {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] as any } 
    }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-white px-6 py-12">
      <div className="absolute inset-0 z-0 bg-white" />

      <motion.div 
        className="relative z-20 max-w-7xl mx-auto text-center flex flex-col items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        
        {/* --- [1] LOGO GROUP --- */}
        <motion.div 
            variants={fadeInUp} 
            className="w-full flex justify-center z-10" 
        >
            <div className="relative w-full h-[400px] md:h-[650px] lg:h-[750px]">
                <Image 
                    src="/starLogo_final.png" 
                    alt="Spring Star HVAC" 
                    fill
                    className="object-contain"
                    priority
                />
            </div>
        </motion.div>

       {/* --- [2] TEXT GROUP (Strictly 2 rows by increasing width) --- */}
        <motion.div 
            variants={fadeInUp} 
            className="-mt-16 md:-mt-28 lg:-mt-36 relative z-20 space-y-12 flex flex-col items-center"
        >
            <div className="space-y-10 w-full max-w-[1200px] mx-auto px-4">
                {/* Headline: Exactly 2 lines on desktop */}
                <p className="text-xl md:text-3xl lg:text-4xl text-slate-800 font-bold leading-[1.3] max-w-[1100px] mx-auto">
                    Spring Star HVAC provides professional HVAC, mechanical, and utility solutions for 
                    <span className="text-blue-600"> residential, commercial, industrial, and regulated facilities.</span>
                </p>

                {/* Subtext: Also stays within 2 rows */}
                <p className="text-base md:text-lg lg:text-xl text-slate-500 font-medium leading-relaxed max-w-[1000px] mx-auto opacity-90">
                    With over <span className="text-slate-900 font-extrabold">15 years</span> of engineering experience in pharmaceutical and industrial environments, we deliver reliable, energy-efficient, and quality-focused services tailored to both <span className="text-slate-700 font-semibold">everyday comfort and mission-critical operations.</span>
                </p>
            </div>

            {/* --- [3] TWO CTA BUTTONS --- */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 pt-6">
                <Link href="/QuotePage" className="w-full sm:w-auto"> 
                    <button className="group bg-blue-600 hover:bg-blue-700 text-white px-12 py-5 rounded-sm font-black text-[12px] uppercase tracking-[0.2em] transition-all shadow-xl flex items-center justify-center gap-3 w-full">
                    Request a Site Visit
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </Link>

                <Link href="/services" className="w-full sm:w-auto">
                    <button className="text-slate-900 border-2 border-slate-200 hover:bg-slate-50 px-12 py-5 rounded-sm font-black text-[12px] uppercase tracking-[0.2em] transition-all flex items-center justify-center w-full min-w-[240px]">
                    Explore Services
                    </button>
                </Link>
            </div>
        </motion.div>
      </motion.div> {/* <--- ဒီအပိတ် tag ကျန်ခဲ့လို့ error တက်နေတာပါ */}

      {/* --- [4] SCROLL INDICATOR (Increased Space) --- */}
      <div className="mt-24 mb-6">
          <motion.button 
            onClick={scrollToContent}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ delay: 2, duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-slate-300 hover:text-blue-500 transition-colors z-20"
          >
            <ChevronDown size={40} strokeWidth={1} />
          </motion.button>
      </div>
    </section>
  );
}