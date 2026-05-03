'use client';

import React from 'react';
import { Mail, Phone, MapPin, Send, ChevronDown, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function QuotePage() {
  const bgImageUrl = "https://images.unsplash.com/photo-1517362302400-873b4e30f5c0?q=80&w=2070&auto=format&fit=crop";

  const services = [
    "Residential HVAC Service",
    "Commercial Maintenance",
    "System Upgrades & Retrofits",
    "Engineering Consultation",
    "Energy Optimization Audit",
    "Industrial Chiller/Boiler Service"
  ];

  return (
    <div className="bg-white min-h-screen font-sans antialiased text-slate-900 overflow-x-hidden">
      
      {/* --- Section 1: Header --- */}
      <section className="relative pt-40 pb-32 text-center overflow-hidden border-b-4 border-blue-600 text-white">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <img src={bgImageUrl} alt="Engineering" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-slate-950/60 z-10"></div>
        </motion.div>

        <div className="max-w-5xl mx-auto px-6 relative z-20">
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-8xl font-black tracking-tighter mb-6 italic drop-shadow-2xl"
          >
            GET A <span className="text-blue-500 italic">QUOTE</span>
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-slate-200 text-lg md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed drop-shadow-lg"
          >
            {"Expert engineering and HVAC solutions tailored for your specific needs. Fill out the form below to start your project."}
          </motion.p>
        </div>
      </section>

      {/* --- Section 2: Contact & Form Section --- */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT SIDE */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-4 space-y-6"
          >
            <h2 className="text-2xl font-black uppercase tracking-widest text-slate-400 mb-8 italic">Contact Details</h2>
            
            {[
              { icon: <Phone size={22} />, label: "Phone", val: "+1 (626) 481-0222" },
              { icon: <Mail size={22} />, label: "Email", val: "info@springstarhvac.com" },
              { icon: <MapPin size={22} />, label: "Address", val: "2388 Peck Rd, CA 90601" }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ x: 10 }}
                className="flex items-center gap-6 bg-slate-50 p-6 rounded-[2rem] border border-slate-100 cursor-pointer transition-colors hover:bg-blue-50 group"
              >
                <div className="w-14 h-14 bg-white text-blue-600 rounded-2xl flex items-center justify-center shrink-0 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-500 mb-1">{item.label}</p>
                  <p className="font-bold text-lg text-slate-800">{item.val}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* RIGHT SIDE: Animated Inquiry Form */}
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-8"
          >
            <div className="bg-white p-8 md:p-14 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-[5rem] -z-10 opacity-50"></div>
              
              <form className="space-y-7">
                {/* Row 1: Name & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[11px] font-black uppercase tracking-widest text-blue-600 ml-1">Full Name</label>
                    <input type="text" placeholder="John Doe" className="w-full p-5 bg-slate-50 border-2 border-transparent rounded-2xl focus:border-blue-500 focus:bg-white transition-all outline-none font-bold text-slate-800 shadow-sm" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-black uppercase tracking-widest text-blue-600 ml-1">Email Address</label>
                    <input type="email" placeholder="john@example.com" className="w-full p-5 bg-slate-50 border-2 border-transparent rounded-2xl focus:border-blue-500 focus:bg-white transition-all outline-none font-bold text-slate-800 shadow-sm" />
                  </div>
                </div>

                {/* Row 2: Phone & Subject */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[11px] font-black uppercase tracking-widest text-blue-600 ml-1">Phone Number</label>
                    <input type="tel" placeholder="+1 (626) 000-0000" className="w-full p-5 bg-slate-50 border-2 border-transparent rounded-2xl focus:border-blue-500 focus:bg-white transition-all outline-none font-bold text-slate-800 shadow-sm" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-black uppercase tracking-widest text-blue-600 ml-1">Subject / Subtitle</label>
                    <input type="text" placeholder="How can we help?" className="w-full p-5 bg-slate-50 border-2 border-transparent rounded-2xl focus:border-blue-500 focus:bg-white transition-all outline-none font-bold text-slate-800 shadow-sm" />
                  </div>
                </div>

                <div className="space-y-2 relative">
                  <label className="text-[11px] font-black uppercase tracking-widest text-blue-600 ml-1">Required Service</label>
                  <div className="relative">
                    <select className="w-full p-5 bg-slate-50 border-2 border-transparent rounded-2xl focus:border-blue-500 focus:bg-white transition-all outline-none font-bold text-slate-800 appearance-none cursor-pointer shadow-sm">
                      <option value="">Select a service...</option>
                      {services.map((s, i) => <option key={i} value={s}>{s}</option>)}
                    </select>
                    <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={20} />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-black uppercase tracking-widest text-blue-600 ml-1">Message</label>
                  <textarea rows={4} placeholder="Tell us about your project..." className="w-full p-6 bg-slate-50 border-2 border-transparent rounded-3xl focus:border-blue-500 focus:bg-white transition-all outline-none font-bold text-slate-800 shadow-sm"></textarea>
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02, backgroundColor: "#0f172a" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-6 bg-blue-600 text-white font-black rounded-2xl transition-all flex items-center justify-center gap-4 uppercase tracking-[0.2em] text-xs shadow-xl shadow-blue-200"
                >
                  Submit Inquiry <Send size={18} />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- Section 3: Why Choose Us --- */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl font-black uppercase italic tracking-tight">
              Why Work With <span className="text-blue-600">Us?</span>
            </h2>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Expert Engineering", 
                desc: "Licensed professionals with decades of mechanical experience." 
              },
              { 
                title: "Quick Response", 
                desc: "Expect a detailed quote within 24-48 business hours." 
              },
              { 
                title: "Quality Assured", 
                desc: "Top-tier components and rigorous safety standards." 
              }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -15, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 cursor-default hover:shadow-2xl transition-all duration-300"
              >
                <CheckCircle2 className="text-blue-600 mx-auto mb-6 group-hover:scale-110 transition-transform" size={44} />
                <h3 className="font-black text-xl mb-4 uppercase italic tracking-tight group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-500 font-medium leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}