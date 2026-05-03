import React from 'react';
import { notFound } from 'next/navigation';
import { ArrowLeft, CheckCircle2, Clock, ShieldCheck, Zap, ArrowRight } from 'lucide-react';
import Link from 'next/link';

// Updated HVAC & Mechanical Service Data
const serviceDetails: any = {
  "hvac-installation": {
    title: "Commercial & Industrial HVAC",
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
    title: "Energy Optimization",
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
    title: "Design & Project Services",
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
      {/* Header Image Section */}
      <div className="relative h-[500px] w-full">
        <img src={data.image} alt={data.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/70 to-slate-950 flex items-center justify-center text-center px-6">
          <div className="max-w-5xl">
            {/* Title Display */}
            <span className="text-blue-500 font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Professional Service</span>
            <h1 className="text-white text-5xl md:text-8xl font-black uppercase tracking-tighter mb-6 italic italic">
              {data.title}
            </h1>
            <div className="h-2 w-32 bg-blue-600 mx-auto rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-20 px-6">
        {/* Back Link */}
        <Link href="/services" className="group inline-flex items-center gap-2 text-slate-500 mb-12 font-bold hover:text-blue-600 transition-all uppercase text-xs tracking-widest">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to All Services
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <h2 className="text-4xl font-black text-slate-900 mb-8 uppercase italic">Service Overview</h2>
            <p className="text-xl text-slate-600 leading-relaxed mb-12 font-medium">
              {data.fullDesc}
            </p>

            <div className="mt-20">
              <h3 className="text-2xl font-black mb-10 text-slate-900 uppercase tracking-tight border-l-4 border-blue-600 pl-6">
                Technical <span className="text-blue-600">Capabilities</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {data.features.map((f: string, i: number) => (
                  <div key={i} className="flex items-center gap-5 p-6 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
                    <div className="bg-blue-50 p-2 rounded-lg group-hover:bg-blue-600 transition-colors">
                      <CheckCircle2 className="text-blue-600 group-hover:text-white shrink-0" size={20} />
                    </div>
                    <span className="font-bold text-slate-800 tracking-tight">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Area */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-8">
              <div className="bg-slate-900 p-10 rounded-[3rem] text-white shadow-2xl shadow-slate-300 relative overflow-hidden">
                <div className="relative z-10">
                  <h4 className="text-2xl font-black mb-8 italic uppercase">Why Choose Spring Star?</h4>
                  <ul className="space-y-6 mb-10">
                    <li className="flex gap-4 items-start">
                      <ShieldCheck className="text-blue-500 shrink-0" size={24} />
                      <div>
                        <p className="font-bold text-white">Engineering Led</p>
                        <p className="text-sm text-slate-400">15+ years of specialized HVAC experience.</p>
                      </div>
                    </li>
                    <li className="flex gap-4 items-start">
                      <Clock className="text-blue-500 shrink-0" size={24} />
                      <div>
                        <p className="font-bold text-white">Expert Reliability</p>
                        <p className="text-sm text-slate-400">Focused on facility uptime and safety.</p>
                      </div>
                    </li>
                    <li className="flex gap-4 items-start">
                      <Zap className="text-blue-500 shrink-0" size={24} />
                      <div>
                        <p className="font-bold text-white">Compliance Focused</p>
                        <p className="text-sm text-slate-400">Meeting strict regulatory requirements.</p>
                      </div>
                    </li>
                  </ul>
                  
                  {/* Updated Quote Link to QuotePage */}
                  <Link 
                    href="/QuotePage" 
                    className="group flex items-center justify-center gap-3 w-full bg-blue-600 hover:bg-white hover:text-blue-600 text-white py-5 rounded-2xl font-black transition-all shadow-lg uppercase tracking-widest text-xs"
                  >
                    Get a Free Quote <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
                {/* Decorative background element */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-600/20 blur-3xl rounded-full"></div>
              </div>

              <div className="p-8 border-2 border-dashed border-slate-200 rounded-[2.5rem] text-center">
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">Need Help Immediately?</p>
                <p className="text-slate-900 font-black text-lg">+1 (626) 481-0222</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}