'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* Brand Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            {/* Image ထဲက Logo အတိုင်း အဖြူရောင် box လေးနဲ့ ပြန်ဖော်ပြပေးထားပါတယ် */}
            <div className="bg-white p-1 rounded-lg w-16 h-16 flex items-center justify-center overflow-hidden">
                <Image 
                  src="/star.png" 
                  alt="Spring Star HVAC Logo" 
                  width={60} 
                  height={60} 
                  className="object-contain"
                />
            </div>
            <span className="text-xl font-black tracking-tighter uppercase italic text-white">
              SPRING<span className="text-blue-600">STAR</span>
            </span>
          </div>
          <p className="text-sm leading-relaxed font-medium">
            Professional engineering-led HVAC solutions for commercial, industrial, and regulated facilities. 
            Over 15 years of technical expertise in California.
          </p>
          
          {/* Social Icons */}
          <div className="flex gap-3">
            {[ 
              { name: 'Facebook', path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
              { name: 'LinkedIn', path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.205 24 24 23.227 24 22.271V1.729C24 .774 23.205 0 22.225 0z' }
            ].map((social) => (
              <a key={social.name} href="#" className="w-9 h-9 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all text-white">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d={social.path}/></svg>
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-black uppercase italic tracking-tighter text-lg mb-6">Company</h4>
          <ul className="space-y-4 text-sm font-bold uppercase tracking-wider">
            <li><Link href="/" className="hover:text-blue-500 transition">Home</Link></li>
            <li><Link href="/about" className="hover:text-blue-500 transition">Our Story</Link></li>
            <li><Link href="/services" className="hover:text-blue-500 transition">Services</Link></li>
            <li><Link href="/#contact" className="hover:text-blue-500 transition">Contact Us</Link></li>
          </ul>
        </div>

        {/* Expertise */}
        <div>
          <h4 className="text-white font-black uppercase italic tracking-tighter text-lg mb-6">Expertise</h4>
          <ul className="space-y-4 text-sm font-medium">
            <li className="hover:text-blue-500 cursor-pointer transition">Industrial HVAC Solutions</li>
            <li className="hover:text-blue-500 cursor-pointer transition">Commercial Mechanical Systems</li>
            <li className="hover:text-blue-500 cursor-pointer transition">Critical Environments</li>
            <li className="hover:text-blue-500 cursor-pointer transition">Energy Efficiency Audit</li>
            <li className="hover:text-blue-500 cursor-pointer transition">Regulated Facilities Care</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-black uppercase italic tracking-tighter text-lg mb-6">Get In Touch</h4>
          <ul className="space-y-4 text-sm font-medium">
            <li className="flex items-start gap-3">
              <MapPin className="text-blue-600 shrink-0" size={18} />
              <span className="leading-relaxed">2388 Peck Rd, <br />City of Industry, CA 90601</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="text-blue-600 shrink-0" size={18} />
              <a href="tel:+16264810222" className="hover:text-white transition">+1 (626) 481-0222</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="text-blue-600 shrink-0" size={18} />
              <a href="mailto:info@springstarhvac.com" className="hover:text-white transition">info@springstarhvac.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] font-bold uppercase tracking-[0.2em]">
        <p>© {new Date().getFullYear()} SPRING STAR HVAC. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-6">
          <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white transition">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}