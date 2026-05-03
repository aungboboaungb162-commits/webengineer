'use client';

import React, { useState } from 'react';
import { ShieldCheck, Target, Award, CheckCircle2 } from 'lucide-react';

const WhyChooseUs = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

  const reasons = [
    {
      title: "SPECIALIZED EXPERIENCE",
      desc: "Extensive expertise in pharmaceutical labs and high-tech industrial HVAC systems with a career spanning over 15 years.",
      icon: Award,
      tag: "ENGINEERING PEDIGREE",
    },
    {
      title: "MISSION-CRITICAL FOCUS",
      desc: "We ensure your operations never stop by adhering to strict international pharmaceutical, safety, and reliability standards.",
      icon: Target,
      tag: "ZERO DOWNTIME",
    },
    {
      title: "RELIABILITY & QUALITY",
      desc: "Combining high-quality mechanical components with expert engineering to deliver peak system performance and longevity.",
      icon: ShieldCheck,
      tag: "BUILT TO LAST",
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* LEFT SIDE Content */}
          <div className="space-y-8 pt-4">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-[#2563eb] font-extrabold uppercase tracking-[0.15em] text-[13px]">
                  WHY CHOOSE SPRING STAR
                </span>
                <div className="w-16 h-[1px] bg-slate-200"></div>
              </div>
              
              <h2 className="text-[48px] md:text-[64px] leading-[1.05] font-black text-[#1e293b] tracking-tight">
                ENGINEERING-LED <br /> 
                <span className="text-[#2563eb] italic font-serif tracking-normal lowercase first-letter:uppercase">Reliability</span> YOU CAN <br />
                TRUST
              </h2>
            </div>

            <p className="text-[18px] text-slate-500 font-medium leading-relaxed max-w-lg">
              Spring Star HVAC is built on a rigorous engineering foundation. We specialize in the complex requirements of regulated facilities, industrial plants, and high-end commercial properties.
            </p>

            <div className="space-y-4 pt-4">
              {["QUALITY-DRIVEN PROCESS", "EXPERT ENGINEERING SUPPORT", "COMPLIANCE WITH INDUSTRY STANDARDS"].map((text, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center border border-blue-100">
                    <CheckCircle2 className="text-[#2563eb] w-3.5 h-3.5" strokeWidth={3} />
                  </div>
                  <span className="font-semibold text-[#1e293b] text-[16px]">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE Feature Cards */}
          <div className="space-y-5">
            {reasons.map((reason, index) => {
              const isHovered = hoveredIndex === index;
              const Icon = reason.icon;

              return (
                <div 
                  key={index} 
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`group p-10 rounded-[40px] transition-all duration-300 border cursor-default
                    ${isHovered 
                      ? 'bg-white border-slate-100 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.06)] scale-[1.02]' 
                      : 'bg-[#f8fafc]/50 border-transparent hover:border-slate-100 shadow-none'
                    }`}
                >
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className={`p-4 rounded-2xl transition-colors duration-300
                      ${isHovered ? 'bg-[#2563eb]' : 'bg-blue-50'}`}>
                      <Icon className={`w-6 h-6 ${isHovered ? 'text-white' : 'text-[#2563eb]'}`} />
                    </div>
                    
                    <div className="space-y-2">
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#2563eb]">
                        {reason.tag}
                      </span>
                      <h3 className="text-[22px] font-bold text-[#1e293b] tracking-tight">
                        {reason.title}
                      </h3>
                      <p className="text-slate-500 text-[15px] font-medium leading-relaxed">
                        {reason.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;