'use client';

import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactSection() {
  return (
    
    <section id="contact" className="py-24 bg-white scroll-mt-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Title and Description */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1.5 h-6 bg-blue-600"></div>
              <span className="text-blue-600 uppercase tracking-[0.2em] text-xs font-black italic">Contact Us</span>
            </div>
            
            <h3 className="text-4xl md:text-6xl text-slate-900 mb-8 leading-tight font-black uppercase italic tracking-tighter">
              Get In <span className="text-blue-600">Touch</span>
            </h3>
            
            <p className="text-lg text-slate-500 leading-relaxed font-medium max-w-xl">
              Whether you are looking for specialized mechanical engineering consultations or high-efficiency HVAC solutions for your facility, our team is here to assist with your technical requirements.
            </p>
          </div>

          {/* Right Column: Phone, Email, and Address */}
          <div className="space-y-6">
            <div className="flex items-center gap-6 p-6 bg-slate-50 rounded-[24px] border border-slate-100 hover:border-blue-200 transition-colors group">
              <div className="p-4 bg-white rounded-2xl text-blue-600 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest mb-1 font-bold">Phone</p>
                <p className="text-xl text-slate-900 font-black tracking-tight">+1 (626) 481-0222</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6 p-6 bg-slate-50 rounded-[24px] border border-slate-100 hover:border-blue-200 transition-colors group">
              <div className="p-4 bg-white rounded-2xl text-blue-600 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest mb-1 font-bold">Email</p>
                <p className="text-xl text-slate-900 font-black tracking-tight">info@springstarhvac.com</p>
              </div>
            </div>

            <div className="flex items-center gap-6 p-6 bg-slate-50 rounded-[24px] border border-slate-100 hover:border-blue-200 transition-colors group">
              <div className="p-4 bg-white rounded-2xl text-blue-600 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest mb-1 font-bold">Address</p>
                <p className="text-xl text-slate-900 font-black tracking-tight leading-tight">
                  2388 Peck Rd, <br/>City of Industry, CA 90601
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}