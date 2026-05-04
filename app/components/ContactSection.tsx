'use client';

import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-white scroll-mt-32">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header - Consistent with Why Choose Us / Industries pages */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1.5 h-6 bg-blue-600"></div>
            <span className="text-blue-600 uppercase tracking-[0.2em] text-[13px] font-black italic">
              Contact Details
            </span>
          </div>
          <h3 className="text-[48px] md:text-[64px] text-slate-900 leading-[1.05] font-black uppercase italic tracking-tighter">
            Get In <span className="text-blue-600">Touch</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          {/* Left Column: Info Cards (Matched to Screenshot Style) */}
          <div className="space-y-4">
            {[
              { 
                label: "Phone", 
                value: "+1 (626) 481-0222", 
                icon: <Phone size={20} />, 
                href: "tel:+16264810222" 
              },
              { 
                label: "Email", 
                value: "info@springstarhvac.com", 
                icon: <Mail size={20} />, 
                href: "mailto:info@springstarhvac.com" 
              },
              { 
                label: "Address", 
                value: "2388 Peck Rd, CA 90601", 
                icon: <MapPin size={20} />, 
                href: "https://maps.google.com" 
              }
            ].map((item, idx) => (
              <a 
                key={idx}
                href={item.href}
                className="flex items-center gap-6 p-5 bg-[#f8fafc]/50 rounded-[32px] border border-slate-100 hover:border-blue-200 hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 group"
              >
                <div className="flex-shrink-0 w-14 h-14 bg-white rounded-2xl text-blue-600 shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-slate-50">
                  {item.icon}
                </div>
                <div>
                  <p className="text-[11px] text-blue-600 uppercase tracking-[0.15em] mb-1 font-black">
                    {item.label}
                  </p>
                  <p className="text-[17px] md:text-[19px] text-slate-900 font-bold tracking-tight">
                    {item.value}
                  </p>
                </div>
              </a>
            ))}
            
            <p className="pt-6 text-slate-500 font-medium leading-relaxed max-w-md">
              Whether you are looking for specialized mechanical engineering consultations or high-efficiency HVAC solutions, our team is here to assist.
            </p>
          </div>

          {/* Right Column: Placeholder for the Form in the screenshot */}
          <div className="bg-[#f8fafc]/50 border border-slate-100 rounded-[40px] p-8 md:p-12 shadow-2xl shadow-slate-200/50">
            <div className="space-y-6 text-center">
              <div className="inline-flex p-4 bg-blue-50 rounded-full text-blue-600 mb-4">
                <Mail size={32} />
              </div>
              <h4 className="text-2xl font-black text-slate-900 uppercase italic">Send us a message</h4>
              <p className="text-slate-500 font-medium">
                Our technical team typically responds within 24 business hours.
              </p>
              
              {/* Link ချိတ်ဆက်ထားသော Button */}
              <Link 
                href="/QuotePage" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-2xl font-black uppercase tracking-widest text-sm transition-all shadow-lg shadow-blue-600/20 active:scale-[0.98] inline-block text-center"
              >
                Open Inquiry Form
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}