'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  Eye, 
  Settings,
  Award,
  Building2,
  Activity,
  Microscope,
  ArrowUpRight
} from 'lucide-react';

// Data from Draft Content
const specializations = [
  "Pharmaceutical HVAC systems",
  "Commercial & industrial HVAC",
  "Utilities & critical systems",
  "Energy optimization",
  "Mechanical project management",
  "Facility reliability",
  "HVAC upgrading works"
];

const experienceLogos = [
  { name: "Aventis Pharma" },
  { name: "Takeda" },
  { name: "WuXi Biologics" }
];

export default function AboutPage() {
  const router = useRouter(); 

  // Build Error ပြင်ဆင်ပြီးသား Animation Variants
  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  } as const; // <--- as const ထည့်လိုက်ခြင်းဖြင့် TypeScript Error ကို ဖြေရှင်းပြီးသားဖြစ်သွားပါပြီ

  return (
    <main className="bg-white">
      {/* --- HERO HEADER --- */}
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
          <motion.div initial="hidden" animate="visible" variants={fadeInVariants}>
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.2em] text-blue-400 uppercase bg-blue-500/10 border border-blue-500/20 rounded-full">
              Engineering Experience
            </span>
            <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
              Engineering Experience with <br />
              <span className="text-blue-500 underline decoration-blue-500/30 underline-offset-8">Practical HVAC</span> Solutions
            </h1>
            <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
              Spring Star HVAC was established with a strong engineering foundation in pharmaceutical, industrial, commercial, and residential HVAC systems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- MAIN CONTENT SECTION --- */}
      <section className="py-24 relative overflow-hidden bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="mb-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInVariants}>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-xs">ABOUT US</span>
                  <div className="w-24 h-px bg-blue-200"></div>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-8">
                  Mechanical Engineer <br />
                  <span className="text-blue-600 italic font-serif">15+ Years Experience</span>
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed mb-8">
                  Our founder has over 15 years of experience as a Mechanical Engineer with international pharmaceutical companies.
                </p>
                
                <div className="space-y-4">
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    <Award size={16} /> International Pharmaceutical Companies:
                  </p>
                  <div className="flex flex-wrap gap-4">
                    {experienceLogos.map((logo, i) => (
                      <motion.span 
                        key={i} 
                        whileHover={{ scale: 1.05, borderColor: '#3b82f6' }}
                        className="px-5 py-2 bg-white border border-slate-200 rounded-xl shadow-sm text-slate-700 font-bold text-sm cursor-default transition-colors"
                      >
                        {logo.name}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInVariants} className="relative">
                <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-xl relative z-10">
                    <div className="flex items-center justify-between mb-8">
                        <h4 className="text-xl font-bold text-slate-900 flex items-center gap-3">
                            <Settings className="text-blue-600 animate-spin-slow" size={24} />
                            Specialized Experience Includes:
                        </h4>
                    </div>
                    <div className="grid grid-cols-1 gap-5">
                      {specializations.map((item, index) => (
                        <motion.div key={index} whileHover={{ x: 10 }} className="flex items-center gap-4 group">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                            <CheckCircle2 size={16} className="text-blue-600 group-hover:text-white" />
                          </div>
                          <span className="text-slate-700 font-medium group-hover:text-blue-600 transition-colors">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* --- VISION SECTION --- */}
          <div className="relative pt-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInVariants} className="lg:col-span-5 relative">
                <div className="relative rounded-[2.5rem] overflow-hidden h-[450px] shadow-2xl group">
                  <img 
                    src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&fit=crop" 
                    alt="Engineering Precision" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-blue-900/5 transition-colors" />
                </div>
                <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }} className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-2xl shadow-2xl max-w-[200px] z-20 border-4 border-white">
                    <Activity className="mb-3 text-blue-200" size={28} />
                    <p className="font-bold text-sm leading-tight uppercase tracking-wider">Reliability Standard</p>
                    <p className="text-blue-100 text-[11px] mt-2 italic font-light">15+ years of engineering excellence in critical systems.</p>
                </motion.div>
              </motion.div>

              <div className="lg:col-span-7">
                <motion.div 
                  initial="hidden" 
                  whileInView="visible" 
                  viewport={{ once: true }} 
                  variants={fadeInVariants} 
                  whileHover={{ y: -5 }}
                  className="bg-[#0f172a] text-white p-10 rounded-[2rem] shadow-xl border border-slate-800 relative overflow-hidden group transition-all"
                >
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                      <Eye size={120} />
                  </div>
                  <div className="flex items-center gap-5 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                      <Eye className="text-blue-400" size={24} />
                    </div>
                    <h4 className="text-3xl font-bold tracking-tight">OUR VISION</h4>
                  </div>
                  <p className="text-slate-300 text-xl leading-relaxed relative z-10">
                    To become a trusted one-stop HVAC and mechanical solutions provider for commercial, industrial, and critical facilities.
                  </p>
                  <div className="mt-8 flex items-center gap-2 text-blue-400 font-bold text-sm uppercase tracking-widest">
                      Quality Focused <ArrowUpRight size={16} />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* --- INDUSTRIES WE SERVE --- */}
          <div className="mt-32 pt-20 border-t border-slate-200">
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold text-slate-900">INDUSTRIES WE SERVE</h3>
              <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  icon: <Building2 />, 
                  title: "Commercial", 
                  desc: "Offices, Retail shops, Restaurants, Warehouses" 
                },
                { 
                  icon: <Microscope />, 
                  title: "Industrial & Regulated Facilities", 
                  desc: "Pharmaceutical, Laboratories, Manufacturing Plants, Cold Storage" 
                },
                { 
                  icon: <Activity />, 
                  title: "Residential", 
                  desc: "Houses, Apartments, Condominiums" 
                }
              ].map((feature, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  whileHover={{ y: -10 }}
                  className="p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-lg shadow-slate-200/50 text-center transition-all hover:border-blue-100 group"
                >
                  <div className="w-16 h-16 mx-auto mb-6 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {React.cloneElement(feature.icon as React.ReactElement<any>, { size: 32 })}
                  </div>
                  <h5 className="font-bold text-slate-900 mb-3 text-lg">{feature.title}</h5>
                  <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}