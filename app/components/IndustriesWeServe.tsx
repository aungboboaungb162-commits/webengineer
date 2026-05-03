'use client';

import { ArrowRight, PhoneCall } from 'lucide-react';
import Link from 'next/link';

export default function IndustriesWeServe() {
  const industries = [
    {
      title: "Industrial & Regulated",
      desc: "Specialized HVAC for Pharmaceutical Facilities, Laboratories, and Food & Beverage Plants requiring strict compliance.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000",
      theme: "navy"
    },
    {
      title: "Commercial Sectors",
      desc: "Comprehensive solutions for Corporate Offices, Retail shops, Restaurants, and large-scale Warehouses.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000",
      theme: "white"
    },
    {
      title: "Residential Complexes",
      desc: "Professional mechanical and utility solutions tailored for modern Apartments and high-rise Condominiums.",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000",
      theme: "navy"
    }
  ];

  return (
    <section className="relative py-24 text-white overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2000" 
          className="w-full h-full object-cover" 
          alt="Industrial Engineering Background"
        />
        <div className="absolute inset-0 bg-slate-950/70" /> 
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1.5 h-6 bg-blue-600"></div>
              <p className="text-blue-400 font-bold uppercase tracking-widest text-[10px]">
                Engineering Versatility
              </p>
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-white uppercase italic">
              Industries <span className="text-blue-500">We Serve</span>
            </h2>
            <p className="text-slate-200 text-sm md:text-base leading-relaxed max-w-xl font-medium">
              Spring Star HVAC provides high-performance mechanical solutions across 
              regulated industrial facilities, commercial spaces, and premium residential complexes.
            </p>
          </div>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {industries.map((item, idx) => (
            <div key={idx} className="group flex flex-col shadow-2xl transition-all duration-500 hover:-translate-y-3">
              
              <div className={`p-10 min-h-[280px] flex flex-col justify-between transition-all duration-500 ${
                item.theme === 'navy' ? 'bg-slate-900' : 'bg-white'
              }`}>
                <div>
                  <h4 className={`text-2xl font-black mb-4 leading-tight uppercase italic ${
                    item.theme === 'navy' ? 'text-white' : 'text-slate-900'
                  }`}>
                    {item.title}
                  </h4>
                  <p className={`text-[13px] leading-relaxed mb-8 font-medium ${
                    item.theme === 'navy' ? 'text-slate-400' : 'text-slate-500'
                  }`}>
                    {item.desc}
                  </p>
                </div>

                {/* Single Primary Action: Directs to Services */}
                <Link 
                  href="/services" 
                  className={`flex items-center justify-center transition-all rounded-sm py-4 px-6 font-black text-[11px] w-full shadow-md tracking-widest ${
                    item.theme === 'white' 
                    ? 'bg-slate-900 text-white hover:bg-blue-600' 
                    : 'bg-blue-600 text-white hover:bg-white hover:text-blue-600'
                  }`}
                >
                  VIEW SERVICES
                  <ArrowRight size={14} className="ml-2" />
                </Link>
              </div>

              {/* Bottom Image Area */}
              <div className="relative h-[220px] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Main CTA Section: Directs to Quote/Contact Page */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-10 rounded-2xl bg-slate-900/60 backdrop-blur-md border border-white/10">
          <div>
            <h4 className="text-2xl font-black mb-2 uppercase italic text-white">Ready for a Technical Consultation?</h4>
            <p className="text-slate-300 text-sm font-medium">Connect with our engineering team to secure your facility's reliability.</p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Link 
              href="tel:+16264810222" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-black text-xs uppercase flex items-center gap-2 transition-all shadow-[0_10px_20px_rgba(37,99,235,0.3)] hover:scale-105"
            >
              <PhoneCall size={18} />
              Call +1 (626) 481-0222
            </Link>
            
            <Link 
              href="/QoutePage" 
              className="bg-white text-slate-900 hover:bg-blue-50 px-8 py-4 rounded-full font-black text-xs uppercase flex items-center transition-all shadow-xl"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}