'use client';

import React from 'react';
import { ArrowRight, Settings, Zap, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

const allServices = [
  { 
    // ID updated to match serviceData keys
    id: "hvac-installation", 
    title: "Commercial & Industrial HVAC", 
    icon: <Settings className="w-6 h-6" />,
    img: "https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=2070",
    desc: "Specialized solutions for pharmaceutical, industrial, and regulated facilities including AHU upgrades and chiller maintenance.",
    active: false
  },
  { 
  id: "project-management", 
  title: "Design & Project Services", 
  icon: <ShieldCheck className="w-6 h-6" />,
  // Updated to a highly reliable construction/engineering management image
  img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070",
  desc: "Expert coordination and management for mission-critical mechanical projects, from design support to commissioning.",
  active: true
},
   
  { 
    // ID updated to match serviceData keys
    id: "energy-optimization", 
    title: "Energy Optimization", 
    icon: <Zap className="w-6 h-6" />,
    img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070",
    desc: "Facility utility audits and efficiency improvements to reduce operational costs and environmental impact.",
    active: false
  },
];

export default function ServiceShort() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      
      {/* 1. TOP SECTION: HERO AREA */}
      <div className="relative pt-24 pb-56 bg-slate-950">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070" 
            alt="Spring Star HVAC Background"
            className="w-full h-full object-cover opacity-40" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 to-slate-950"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-5 bg-blue-600"></div>
                <h2 className="text-blue-500 font-bold uppercase tracking-widest text-sm">
                   Our Core Services
                </h2>
              </div>
              <h3 className="text-4xl md:text-6xl font-black leading-tight tracking-tight mb-8">
                Engineering-Led <br /> 
                Mechanical & Utility Solutions
              </h3>
              
              <p className="text-slate-200 text-lg md:text-xl leading-relaxed max-w-3xl drop-shadow-sm font-medium">
                {"Delivering quality-focused HVAC services for residential, commercial, and industrial facilities with over 15 years of specialized engineering experience."}
              </p>
            </div>
            
            <div className="flex-shrink-0">
              <Link 
                href="/services" 
                className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold hover:bg-blue-700 transition-all shadow-xl text-sm uppercase tracking-wider inline-block"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 2. CARD SECTION: SERVICES GRID */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 -mt-32"> 
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {allServices.map((service, index) => (
            <div 
              key={index} 
              className={`flex flex-col transition-all duration-500 group rounded-[2.5rem] overflow-hidden shadow-2xl 
                ${service.active 
                  ? 'bg-blue-950 text-white md:scale-105 z-30 ring-8 ring-blue-600/10' 
                  : 'bg-white text-slate-900 border border-slate-100 hover:-translate-y-4 hover:shadow-blue-100'
                }`}
            >
              {/* Image Container */}
              <div className="h-[260px] overflow-hidden relative">
                <div className={`absolute inset-0 z-10 transition-opacity ${service.active ? 'bg-blue-900/20' : 'bg-slate-900/10 group-hover:opacity-0'}`} />
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-6 left-6 z-20 bg-white/90 backdrop-blur-sm p-3 rounded-2xl text-blue-600 shadow-lg">
                  {service.icon}
                </div>
              </div>

              {/* Content Container */}
              <div className="p-10 flex flex-col flex-grow min-h-[320px]">
                <h4 className="text-2xl font-black mb-4 tracking-tight group-hover:text-blue-600 transition-colors">
                    {service.title}
                </h4>
                <p className={`leading-relaxed mb-8 flex-grow transition-opacity font-medium ${service.active ? 'text-white/70' : 'text-slate-500'}`}>
                  {service.desc}
                </p>

                <div className="mt-auto">
                  {/* Updated Link Paths to /services/[id] */}
                  {service.active ? (
                    <Link 
                      href={`/services/${service.id}`}
                      className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-white hover:text-blue-600 transition-all group/btn w-full justify-center"
                    >
                      Explore Details <ArrowRight size={20} className="group-hover/btn:translate-x-2 transition-transform" />
                    </Link>
                  ) : (
                    <Link 
                      href={`/services/${service.id}`}
                      className="inline-flex items-center justify-center w-14 h-14 bg-slate-50 text-blue-600 rounded-2xl shadow-sm border border-slate-100 group-hover:bg-blue-600 group-hover:text-white group-hover:w-full group-hover:justify-between group-hover:px-8 transition-all duration-300 overflow-hidden"
                    >
                      <span className="hidden group-hover:block font-bold">Learn More</span>
                      <ArrowRight size={22} className="group-hover:rotate-0 transition-transform" />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. INDUSTRIES STRIP */}
      <div className="py-20 bg-white text-center">
        <p className="text-slate-400 font-bold uppercase tracking-[0.3em] text-xs mb-10">Trusted Across Industries</p>
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 opacity-60 grayscale px-6">
           <span className="font-black text-xl text-slate-800 tracking-tighter">PHARMACEUTICAL</span>
           <span className="font-black text-xl text-slate-800 tracking-tighter">LABORATORIES</span>
           <span className="font-black text-xl text-slate-800 tracking-tighter">MANUFACTURING</span>
           <span className="font-black text-xl text-slate-800 tracking-tighter">FOOD & BEVERAGE</span>
           <span className="font-black text-xl text-slate-800 tracking-tighter">COMMERCIAL OFFICES</span>
        </div>
      </div>
    </section>
  );
}