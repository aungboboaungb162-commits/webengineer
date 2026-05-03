'use client';

import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function AboutShort() {
  return (
    <section className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* --- LEFT SIDE: VISUALS --- */}
        <div className="relative group">
          
          {/* Decorative Blur Background */}
          <div className="absolute -top-10 -left-10 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-60" />
          
          <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100">
            <img 
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070" 
              alt="Spring Star HVAC Engineering" 
              className="w-full h-[550px] object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>

          {/* Experience Badge - Updated to 15+ Years based on data */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 w-40 rounded-2xl shadow-[0_15px_35px_rgba(37,99,235,0.4)] z-20 text-center"
          >
            <p className="text-4xl font-black mb-1 leading-none">15+</p>
            <p className="text-[10px] font-bold uppercase tracking-wider leading-tight opacity-95">
              Years of Engineering <br/>Expertise
            </p>
          </motion.div>
        </div>

        {/* --- RIGHT SIDE: CONTENT --- */}
        <div className="space-y-10">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="h-[2px] w-12 bg-blue-600 inline-block"></span>
              <h2 className="text-blue-600 font-bold tracking-[0.3em] uppercase text-xs">
                About Spring Star HVAC
              </h2>
            </div>
            
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.15] tracking-tight">
              Engineering Excellence with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">Practical HVAC Solutions</span>
            </h3>
          </div>
          
          <p className="text-lg text-slate-600 leading-relaxed font-medium">
            {"Spring Star HVAC was established with a strong engineering foundation in pharmaceutical, industrial, and commercial environments. We deliver reliable, energy-efficient services tailored to mission-critical operations."}
          </p>

          {/* Specialized Experience List based on your data */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8 py-4">
            {[
              { title: 'Pharmaceutical HVAC', desc: 'Critical environment experts' },
              { title: 'Energy Optimization', desc: 'Efficiency & cost reduction' },
              { title: 'Utilities Systems', desc: 'Boilers, Chillers & AHUs' },
              { title: 'Design & Management', desc: 'Full project lifecycle support' }
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4 group">
                <div className="mt-1 bg-blue-50 p-1 rounded-md group-hover:bg-blue-600 transition-colors duration-300 shadow-sm">
                  <CheckCircle2 className="text-blue-600 group-hover:text-white" size={18} />
                </div>
                <div>
                   <h4 className="font-bold text-slate-800 text-sm">{item.title}</h4>
                   <p className="text-xs text-slate-500 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4">
            <Link 
              href="/about" 
              className="inline-flex items-center gap-4 bg-slate-900 text-white px-10 py-5 rounded-full font-bold hover:bg-blue-600 transition-all shadow-xl group"
            >
              Discover Our Expertise
              <div className="bg-white/20 p-1 rounded-full group-hover:translate-x-2 transition-transform">
                <ArrowRight size={18} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}