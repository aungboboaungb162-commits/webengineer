'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-slate-950">
      {/* --- BACKGROUND LAYER --- */}
      <div className="absolute inset-0 z-0">
        <img 
          // New high-quality Industrial HVAC/Mechanical system photo
          src="https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=2070" 
          alt="Spring Star Industrial HVAC Systems" 
          className="w-full h-full object-cover grayscale brightness-[0.8]"
        />
        {/* 50% Black Overlay for text legibility */}
        <div className="absolute inset-0 bg-black/50 z-10" />
      </div>

      {/* --- CONTENT LAYER --- */}
      <motion.div 
        className="relative z-20 max-w-6xl mx-auto px-6 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Specialization Tagline */}
        <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center gap-3 md:gap-6 mb-8">
          <span className="text-blue-400 text-[10px] md:text-xs font-black uppercase tracking-[0.3em]">Commercial</span>
          <div className="w-1 h-1 rounded-full bg-white/30 hidden md:block"></div>
          <span className="text-blue-400 text-[10px] md:text-xs font-black uppercase tracking-[0.3em]">Industrial</span>
          <div className="w-1 h-1 rounded-full bg-white/30 hidden md:block"></div>
          <span className="text-blue-400 text-[10px] md:text-xs font-black uppercase tracking-[0.3em]">Critical Environments</span>
        </motion.div>

        {/* Engineering Headline */}
        <motion.h1 
          variants={fadeInUp}
          className="text-5xl md:text-7xl lg:text-[90px] font-black text-white mb-8 leading-[0.95] tracking-tighter uppercase"
        >
          Engineering Practical <br /> 
          <span className="text-[#2563eb] italic font-serif lowercase first-letter:uppercase tracking-normal pt-2 block">
            HVAC Solutions
          </span>
        </motion.h1>

        {/* Experience-based Description */}
        <motion.p 
          variants={fadeInUp}
          className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-12 font-medium leading-relaxed"
        >
          Leveraging <span className="text-white font-bold">15+ years of mechanical engineering expertise</span> from pharmaceutical giants to deliver quality-focused HVAC and utility solutions tailored to your facility.
        </motion.p>

        {/* CTAs */}
        <motion.div 
          variants={fadeInUp}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <Link href="/QuotePage" className="w-full sm:w-auto"> 
            <button className="bg-[#2563eb] hover:bg-blue-700 text-white px-10 py-5 rounded-sm font-black text-xs uppercase tracking-widest transition-all shadow-lg flex items-center justify-center gap-3 w-full">
              Request a Site Visit
              <ArrowRight size={16} />
            </button>
          </Link>

          <Link href="/services" className="w-full sm:w-auto">
            <button className="text-white border-2 border-white/30 px-10 py-5 rounded-sm font-black text-xs uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all w-full backdrop-blur-sm">
              Schedule Consultation
            </button>
          </Link>
        </motion.div>
      </motion.div>

      {/* --- SCROLL INDICATOR --- */}
      <motion.button 
        onClick={scrollToContent}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 group flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-black uppercase tracking-widest group-hover:text-blue-400 transition-colors">Discover Efficiency</span>
        <ChevronDown size={20} className="group-hover:text-blue-400" />
      </motion.button>
    </section>
  );
}