'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Wind, 
  Zap, 
  ShieldCheck, 
  CheckCircle2, 
  Eye, 
  Target,
  Settings,
  Award,
  Building2,
  Activity
} from 'lucide-react';

const specializations = [
  "Pharmaceutical HVAC systems",
  "Commercial & industrial HVAC",
  "Utilities & critical systems",
  "Energy optimization",
  "Mechanical project management",
  "Facility reliability",
  "HVAC upgrading works"
];

// Partner/Experience data for visual branding
const experienceLogos = [
  { name: "Aventis Pharma", color: "text-blue-700" },
  { name: "Takeda", color: "text-red-700" },
  { name: "WuXi Biologics", color: "text-emerald-700" }
];

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* --- HERO HEADER SECTION --- */}
      <section className="relative h-[50vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070" 
            alt="Engineering Header" 
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 to-slate-900/70 backdrop-blur-[1px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.2em] text-blue-400 uppercase bg-blue-500/10 border border-blue-500/20 rounded-full">
              Engineering Excellence
            </span>
            <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
              Our Legacy & <span className="text-blue-500 underline decoration-blue-500/30 underline-offset-8">Engineering</span>
            </h1>
            <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
              Bringing over 15 years of specialized mechanical engineering experience from international pharmaceutical giants to your local facility.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- MAIN CONTENT SECTION --- */}
      <section className="py-24 relative overflow-hidden bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Experience Section */}
          <div className="mb-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-xs">About Spring Star</span>
                  <div className="w-24 h-px bg-blue-200"></div>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-8">
                  Engineering Practical <br />
                  <span className="text-blue-600 italic font-serif">HVAC Solutions</span>
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed mb-8">
                  Spring Star HVAC was established with a strong engineering foundation. We don't just fix units; we optimize environments for maximum efficiency and regulatory compliance.
                </p>
                
                {/* Founding Expertise Badges */}
                <div className="space-y-4">
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    <Award size={16} /> Founder's Background Includes:
                  </p>
                  <div className="flex flex-wrap gap-4">
                    {experienceLogos.map((logo, i) => (
                      <span key={i} className="px-5 py-2 bg-white border border-slate-200 rounded-xl shadow-sm text-slate-700 font-bold text-sm hover:border-blue-300 transition-colors">
                        {logo.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-600/5 rounded-full blur-3xl" />
                <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-xl relative z-10">
                    <div className="flex items-center justify-between mb-8">
                        <h4 className="text-xl font-bold text-slate-900 flex items-center gap-3">
                            <Settings className="text-blue-600 animate-spin-slow" size={24} />
                            Specialized Focus
                        </h4>
                        <span className="text-blue-600 font-black text-2xl">15+ <span className="text-xs uppercase text-slate-400 block tracking-tighter">Years</span></span>
                    </div>
                    <div className="grid grid-cols-1 gap-5">
                      {specializations.map((item, index) => (
                        <motion.div 
                          key={index} 
                          whileHover={{ x: 5 }}
                          className="flex items-center gap-4 group cursor-default"
                        >
                          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                            <CheckCircle2 size={16} className="text-blue-600 group-hover:text-white" />
                          </div>
                          <span className="text-slate-700 font-medium group-hover:text-blue-600 transition-colors">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                </div>
              </div>
            </div>
          </div>

          {/* --- VISION & MISSION SECTION --- */}
          <div className="relative pt-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Photo Section */}
              <div className="lg:col-span-5 relative">
                <div className="relative p-3 bg-white border border-slate-200 rounded-[3rem] shadow-2xl overflow-hidden group">
                  <div className="relative rounded-[2.5rem] overflow-hidden h-[550px]">
                    <img 
                    src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop" 
                    alt="Engineering Precision" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                    <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-blue-900/10 transition-colors" />
                  </div>
                </div>
                
                {/* Float Card */}
                <div className="absolute -bottom-10 -right-8 bg-blue-600 text-white p-8 rounded-3xl shadow-2xl max-w-[240px] hidden md:block">
                    <Activity className="mb-4" />
                    <p className="font-bold text-lg leading-tight">Reliability is our standard.</p>
                    <p className="text-blue-100 text-xs mt-2 italic">Optimizing critical environments since day one.</p>
                </div>
              </div>

              {/* Text Cards Section */}
              <div className="lg:col-span-7 space-y-6">
                <div className="mb-10 lg:pl-12">
                   <h3 className="text-4xl font-bold text-slate-900 mb-4">A Clear Vision, <br/>Defined Mission</h3>
                   <p className="text-slate-500 max-w-md">Driven by engineering innovation and a commitment to sustainable mechanical infrastructure.</p>
                </div>

                <div className="space-y-6 lg:pl-12">
                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="bg-[#0f172a] text-white p-10 rounded-[2rem] shadow-xl border border-slate-800 relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 p-8 opacity-5">
                        <Target size={120} />
                    </div>
                    <div className="flex items-center gap-5 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                        <Target className="text-blue-400" size={24} />
                      </div>
                      <h4 className="text-2xl font-bold tracking-tight">Our Mission</h4>
                    </div>
                    <p className="text-slate-400 leading-relaxed">
                      To deliver high-quality, energy-efficient HVAC systems through expert engineering and practical management, ensuring optimal facility performance across industrial sectors. We focus on 100% reliability and precision.
                    </p>
                  </motion.div>

                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="bg-white text-slate-900 p-10 rounded-[2rem] shadow-xl border border-slate-100 relative overflow-hidden"
                  >
                    <div className="flex items-center gap-5 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center border border-blue-100">
                        <Eye className="text-blue-600" size={24} />
                      </div>
                      <h4 className="text-2xl font-bold tracking-tight text-slate-900">Our Vision</h4>
                    </div>
                    <p className="text-slate-500 leading-relaxed">
                      To be a leading force in delivering sustainable mechanical solutions that empower global industrial growth. We aim to set the regional benchmark for engineering excellence in HVAC and Utility systems.
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

          {/* --- BOTTOM FEATURE BAR --- */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-32 pt-20 border-t border-slate-200">
            <div className="p-8 rounded-3xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-slate-100">
              <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-6 shadow-lg shadow-blue-200">
                <Building2 size={24} />
              </div>
              <h5 className="font-bold text-slate-900 mb-3 text-lg">Industrial Focus</h5>
              <p className="text-slate-500 text-sm leading-relaxed">Specialized in regulated environments like Pharma, Food, and Medical device plants.</p>
            </div>
            
            <div className="p-8 rounded-3xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-slate-100">
              <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-6 shadow-lg shadow-blue-200">
                <Zap size={24} />
              </div>
              <h5 className="font-bold text-slate-900 mb-3 text-lg">Energy Saving</h5>
              <p className="text-slate-500 text-sm leading-relaxed">Implementing energy-efficient upgrades that reduce operational costs and carbon footprint.</p>
            </div>

            <div className="p-8 rounded-3xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-slate-100">
              <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-6 shadow-lg shadow-blue-200">
                <ShieldCheck size={24} />
              </div>
              <h5 className="font-bold text-slate-900 mb-3 text-lg">Proven Reliability</h5>
              <p className="text-slate-500 text-sm leading-relaxed">Leveraging 15+ years of project management expertise to ensure zero downtime.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}