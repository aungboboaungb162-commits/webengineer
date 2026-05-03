'use client';

import React from 'react';
import { 
  Zap, 
  Layout, 
  ArrowRight, 
  ThermometerSnowflake, 
  CheckCircle2,
  Cog
} from 'lucide-react';
import Link from 'next/link';

// Updated Service Data with correct IDs for dynamic routing
const serviceCategories = [
  { 
    id: "hvac-installation",
    category: "Commercial & Industrial HVAC",
    icon: <ThermometerSnowflake size={28} />,
    description: "Specialized solutions for large-scale facilities and regulated environments.",
    services: [
      "HVAC Installation & Retrofitting",
      "Chiller & Boiler Maintenance",
      "AHU & Filtration Upgrades",
      "Ventilation Systems",
      "Preventive Maintenance Programs",
      "Emergency Repair Response"
    ]
  },
  {
    id: "energy-optimization",
    category: "Energy Optimization",
    icon: <Zap size={28} />,
    description: "Reducing operational costs through engineering-led efficiency improvements.",
    services: [
      "Energy-Saving Upgrades",
      "HVAC Efficiency Improvement",
      "Utility Audits",
      "Operational Optimization",
      "Facility Energy Reduction"
    ]
  },
  {
    id: "project-management", // ID ကို 'project-management' လို့ မှန်အောင် ပြင်လိုက်ပါတယ်
    category: "Design & Project Services",
    icon: <Layout size={28} />,
    description: "Expert coordination and management for mission-critical mechanical projects.",
    services: [
      "HVAC Design Support",
      "Mechanical Coordination",
      "Project Management",
      "Testing & Commissioning",
      "Utility System Support"
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* --- Header Section (With 50% Background Photo Overlay) --- */}
      <section className="bg-slate-900 pt-40 pb-28 text-center text-white relative overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070" 
            alt="Engineering Background"
            className="w-full h-full object-cover opacity-50" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/50 to-slate-900/95"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tight drop-shadow-lg">
            Our <span className="text-blue-500">Expertise</span>
          </h1>
          <p className="text-lg md:text-xl text-white max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-md">
            High-performance HVAC and mechanical engineering solutions designed for reliability and efficiency.
          </p>
        </div>
      </section>

      {/* --- Individual Vertical Cards Grid --- */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((cat, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-[2.5rem] border border-slate-200 p-8 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col group"
            >
              <div className="mb-8">
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                  {cat.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-blue-600 transition-colors">
                  {cat.category}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {cat.description}
                </p>
              </div>

              <div className="space-y-4 mb-10 flex-grow">
                {cat.services.map((service, sIdx) => (
                  <div key={sIdx} className="flex items-start gap-3 group/item">
                    <CheckCircle2 size={18} className="text-blue-600 mt-0.5 shrink-0" />
                    <span className="text-slate-700 text-[14px] font-medium group-hover/item:text-slate-900 transition-colors">{service}</span>
                  </div>
                ))}
              </div>

              {/* Link ကို Dynamic ဖြစ်အောင် /services/[id] ပုံစံ ပြောင်းထားပါတယ် */}
              <Link 
                href={`/services/${cat.id}`} 
                className="mt-auto flex items-center justify-between w-full p-4 bg-slate-50 rounded-2xl text-slate-900 font-bold hover:bg-blue-600 hover:text-white transition-all group/btn"
              >
                Learn More
                <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* --- Industries Served Section --- */}
      <section className="pb-24 max-w-7xl mx-auto px-6">
        <div className="bg-slate-950 rounded-[3rem] p-10 md:p-16 relative overflow-hidden shadow-2xl">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                    <span className="text-blue-500 font-bold tracking-widest uppercase text-xs mb-4 block">Sector Excellence</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Industries We Serve</h2>
                    <p className="text-slate-400 mb-10 text-lg font-light">From sterile pharmaceutical labs to heavy industrial plants, we provide the technical precision your facility requires.</p>
                    <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                        {['Pharmaceutical', 'Laboratories', 'Food & Beverage', 'Data Centers', 'Manufacturing', 'Retail/Offices'].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 text-slate-300 text-sm hover:text-white transition-colors">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                                {item}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative group">
                    <div className="relative z-10 rounded-[2rem] overflow-hidden h-[400px] border border-slate-800 shadow-2xl">
                        <img 
                          src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070" 
                          alt="Industrial Facility"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors"></div>
                    </div>
                    <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-2xl shadow-2xl z-20 hidden md:block animate-bounce-slow">
                        <p className="text-2xl font-black italic">100%</p>
                        <p className="text-[10px] uppercase font-bold tracking-tighter">Compliance</p>
                    </div>
                </div>
            </div>
            <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/5 blur-3xl rounded-full translate-x-1/2"></div>
        </div>
      </section>

      {/* --- Footer CTA --- */}
      <section className="pb-24 text-center">
        <h4 className="text-xl font-bold text-slate-900 mb-8">Ready to start your next engineering project?</h4>
        <Link 
          href="/QuotePage" 
          className="inline-flex items-center gap-3 bg-blue-600 text-white px-12 py-5 rounded-full font-bold shadow-xl shadow-blue-200 hover:bg-blue-700 hover:scale-105 transition-all"
        >
          Get a Free Quote <ArrowRight size={20} />
        </Link>
      </section>
    </div>
  );
}