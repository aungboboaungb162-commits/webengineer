'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 md:py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Column - Always Visible */}
          <div className="space-y-6 lg:col-span-2">
            <h2 className="text-white text-2xl font-black italic tracking-tighter uppercase">
              Spring Star <span className="text-blue-600">HVAC</span>
            </h2>
            <p className="text-sm leading-relaxed font-medium max-w-sm">
              Precision engineering and high-performance mechanical solutions tailored for regulated industries.
            </p>
          </div>

          {/* Quick Links - Hidden on Mobile to save space, visible on MD up */}
          <div className="hidden md:block space-y-6">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs">Navigation</h4>
            <ul className="space-y-4 text-sm font-semibold">
              <li><Link href="/" className="hover:text-blue-500 transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-blue-500 transition-colors">Services</Link></li>
              <li><Link href="/QuotePage" className="hover:text-blue-500 transition-colors">Request Quote</Link></li>
            </ul>
          </div>

          {/* Contact Info - Always Visible but simplified on mobile */}
          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs">Direct Contact</h4>
            <div className="space-y-4 text-[13px] md:text-sm font-medium">
              <a href="tel:+16264810222" className="flex items-center gap-3 hover:text-white transition-colors">
                <Phone size={14} className="text-blue-600" /> +1 (626) 481-0222
              </a>
              <a href="mailto:info@springstarhvac.com" className="flex items-center gap-3 hover:text-white transition-colors">
                <Mail size={14} className="text-blue-600" /> info@springstarhvac.com
              </a>
              {/* Address - Hidden on small mobile to keep it clean */}
              <div className="hidden sm:flex items-start gap-3">
                <MapPin size={14} className="text-blue-600 shrink-0" />
                <span>2388 Peck Rd, City of Industry, CA 90601</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-center md:text-left">
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© 2024 SPRING STAR HVAC. ALL RIGHTS RESERVED.</p>
            
            {/* Credits Section */}
            <p className="text-slate-500">
              Powered by{' '}
              <a 
                href="https://a2bfolio.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-400 transition-colors underline underline-offset-4"
              >
                A2B Website service
              </a>
            </p>
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-8 text-slate-500 border-t border-white/5 pt-6 md:border-none md:pt-0">
             <p>LICENSED MECHANICAL CONTRACTOR</p>
             <p>ENGINEERED IN CALIFORNIA</p>
          </div>
        </div>
      </div>
    </footer>
  );
}