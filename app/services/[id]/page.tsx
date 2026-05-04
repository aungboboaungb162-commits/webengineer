import React from 'react';
import { notFound } from 'next/navigation';
import { ArrowLeft, CheckCircle2, Clock, ShieldCheck, Zap, ArrowRight } from 'lucide-react';
import Link from 'next/link';

// Updated HVAC & Mechanical Service Data
const serviceDetails: any = {
  "hvac-installation": {
    category: "HVAC Services",
    title: "Commercial & Industrial HVAC Solutions",
    fullDesc: "We provide end-to-end HVAC solutions for large-scale facilities, pharmaceutical labs, and industrial plants. Our engineering team ensures that every system is designed for maximum uptime and strict environmental control.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1200",
    features: [
      "HVAC Installation & Retrofitting",
      "Chiller & Boiler Maintenance",
      "AHU & Filtration Upgrades",
      "Ventilation Systems",
      "Preventive Maintenance Programs",
      "Emergency Repair Response"
    ]
  },
  "energy-optimization": {
    category: "Efficiency",
    title: "Energy Optimization & Utility Audits",
    fullDesc: "Our energy optimization services help facilities reduce their carbon footprint and utility costs. Through advanced auditing and high-efficiency upgrades, we transform legacy systems into modern, cost-effective infrastructure.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1200",
    features: [
      "Energy-Saving Upgrades",
      "HVAC Efficiency Improvement",
      "Utility Audits",
      "Operational Optimization",
      "Facility Energy Reduction",
      "Smart Building Integration"
    ]
  },
  "project-management": {
    category: "Management",
    title: "Design & Project Services Engineering",
    fullDesc: "From initial concept to final commissioning, our project management team handles the complexities of mechanical engineering. We coordinate between stakeholders to ensure projects are delivered on time and within budget.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200",
    features: [
      "HVAC Design Support",
      "Mechanical Coordination",
      "Project Management",
      "Testing & Commissioning",
      "Utility System Support",
      "As-Built Documentation"
    ]
  }
};

export default async function DetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const data = serviceDetails[id];

  if (!data) return notFound();

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header Image Section - Updated to match provided Image Vibe */}
      <div className="relative h-[450px] w-full overflow-hidden">
        <img src={data.image} alt={data.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-slate-900/70 flex items-center justify-center text-center px-6">
          <div className="max-w-4xl">
            {/* Title Display - Updated Typography & Highlight */}
            <h1 className="text-white text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
              {data.title.split(' ').slice(0, -2).join(' ')} <span className="text-blue-500 relative">
                {data.title.split(' ').slice(-2).join(' ')}
                <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-500/30 -mb-1"></span>
              </span>
            </h1>
            <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
              Providing expert {data.category.toLowerCase()} with a strong engineering foundation for industrial and commercial systems.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-16 px-6">
        {/* Back Link */}
        <Link href="/services" className="group inline-flex items-center gap-2 text-slate-500 mb-12 font-semibold hover:text-blue-600 transition-all text-sm uppercase tracking-wider">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to All Services
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-blue-600"></div>
                <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">Service Overview</span>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-8 leading-snug">
              Specialized Engineering Experience in {data.category}
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-12">
              {data.fullDesc}
            </p>

            <div className="mt-16">
              <h3 className="text-xl font-bold mb-8 text-slate-900 border-l-4 border-blue-600 pl-6">
                Technical Capabilities Includes:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {data.features.map((f: string, i: number) => (
                  <div key={i} className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm group hover:border-blue-100 transition-all">
                    <CheckCircle2 className="text-blue-600 shrink-0" size={18} />
                    <span className="font-semibold text-slate-700">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Area */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-8">
              <div className="bg-slate-900 p-10 rounded-[2.5rem] text-white shadow-xl relative overflow-hidden">
                <div className="relative z-10">
                  <h4 className="text-xl font-bold mb-8">Why Spring Star HVAC?</h4>
                  <ul className="space-y-6 mb-10">
                    <li className="flex gap-4 items-start">
                      <ShieldCheck className="text-blue-500 shrink-0 mt-1" size={20} />
                      <div>
                        <p className="font-semibold text-white">Engineering Led</p>
                        <p className="text-xs text-slate-400 mt-1">15+ years of specialized HVAC experience.</p>
                      </div>
                    </li>
                    <li className="flex gap-4 items-start">
                      <Clock className="text-blue-500 shrink-0 mt-1" size={20} />
                      <div>
                        <p className="font-semibold text-white">Expert Reliability</p>
                        <p className="text-xs text-slate-400 mt-1">Focused on facility uptime and safety.</p>
                      </div>
                    </li>
                    <li className="flex gap-4 items-start">
                      <Zap className="text-blue-500 shrink-0 mt-1" size={20} />
                      <div>
                        <p className="font-semibold text-white">Compliance Focused</p>
                        <p className="text-xs text-slate-400 mt-1">Meeting strict regulatory requirements.</p>
                      </div>
                    </li>
                  </ul>
                  
                  <Link 
                    href="/QuotePage" 
                    className="group flex items-center justify-center gap-3 w-full bg-blue-600 hover:bg-white hover:text-blue-600 text-white py-4 rounded-xl font-bold transition-all text-sm uppercase tracking-widest"
                  >
                    Get a Free Quote <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              <div className="p-8 bg-blue-50/50 border border-blue-100 rounded-[2rem] text-center">
                <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-2">Need Immediate Support?</p>
                <p className="text-blue-600 font-bold text-xl">+1 (626) 481-0222</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}