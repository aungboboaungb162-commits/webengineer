'use client';

import React from 'react';

export default function PartnerLogos() {
  // Data updated based on founder's background from Screenshot 2569-05-03 at 11.46.41 PM.jpg
  const partners = [
    "Aventis Pharma", "Takeda", "WuXi Biologics", "Engineering", "Precision", 
    "Mechanical", "PharmaCare", "Industrial", "Compliance", "Reliability"
  ];
  
  return (
    <section className="py-20 bg-slate-100 border-y border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Updated Typography to match the 'About Spring Star' Vibe */}
        <p className="text-center text-[#2563eb] font-black uppercase tracking-[0.3em] text-[12px] mb-14">
          ENGINEERING PEDIGREE & INDUSTRY LEADERS
        </p>
        
        <div className="relative flex overflow-hidden">
          <div className="animate-infinite-scroll flex items-center">
            {/* First Set */}
            {partners.map((name, i) => (
              <div key={`set1-${i}`} className="flex items-center justify-center mx-12 md:mx-16 bg-transparent">
                <span className="text-2xl md:text-3xl font-black text-slate-800 hover:text-[#2563eb] transition-all duration-300 cursor-default uppercase italic tracking-tighter">
                  {name}
                </span>
              </div>
            ))}
            
            {/* Second Set for Loop */}
            {partners.map((name, i) => (
              <div key={`set2-${i}`} className="flex items-center justify-center mx-12 md:mx-16 bg-transparent">
                <span className="text-2xl md:text-3xl font-black text-slate-800 hover:text-[#2563eb] transition-all duration-300 cursor-default uppercase italic tracking-tighter">
                  {name}
                </span>
              </div>
            ))}
          </div>

          {/* Fading gradient matched to the slate-100 background */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-slate-100 via-transparent to-slate-100 z-10" />
        </div>
      </div>
    </section>
  );
}