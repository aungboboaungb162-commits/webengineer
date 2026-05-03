'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, Menu, X } from "lucide-react";
import LinkNext from "next/link";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const getLinkStyles = (path: string, isMobile: boolean = false) => {
    const isActive = pathname === path;
    if (isMobile) {
      return `text-lg font-bold uppercase tracking-widest py-4 border-b border-slate-100 w-full text-center ${
        isActive ? 'text-blue-600' : 'text-slate-900'
      }`;
    }
    return `text-[13px] font-extrabold uppercase tracking-tight transition-all pb-1 border-b-2 ${
      isActive 
        ? 'text-blue-700 border-blue-700' 
        : 'text-slate-900 border-transparent hover:text-blue-700 hover:border-blue-700'
    }`;
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/#contact' },
  ];

  return (
    <header className="fixed w-full z-50 top-0 left-0 right-0">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6 lg:px-8 py-4 lg:py-6">
        
        {/* 1. Logo - Mobile မှာ ဖျောက်ထားပါတယ် (hidden lg:flex) */}
        <div className="hidden lg:flex bg-white p-0 rounded-xl shadow-2xl overflow-hidden items-center justify-center border border-slate-100 w-[115px] h-[115px]">
          <LinkNext href="/" className="relative w-full h-full block">
            <Image 
              src="/star.png" 
              alt="Spring Star HVAC" 
              fill
              className="object-contain scale-[1.3]" 
              priority 
            />
          </LinkNext>
        </div>

        {/* 2. Desktop Capsule Menu (Center) */}
        <div className="flex-1 hidden lg:flex justify-center">
          <nav className="flex items-center bg-white px-10 py-5 rounded-full shadow-2xl gap-10 border border-slate-100">
            {navLinks.map((link) => (
              <LinkNext key={link.name} href={link.path} className={getLinkStyles(link.path)}>
                {link.name}
              </LinkNext>
            ))}
          </nav>
        </div>

        {/* 3. Desktop Get Quote Button - Mobile မှာ ဖျောက်ထားပါတယ် (hidden lg:flex) */}
        <div className="hidden lg:flex items-center">
          <LinkNext href="/QuotePage">
            <button className="relative group overflow-hidden bg-blue-600 text-white pl-8 pr-2 py-2.5 rounded-full font-bold uppercase text-[12px] tracking-widest hover:bg-blue-700 transition-all duration-300 flex items-center gap-5 shadow-lg active:scale-95 border border-white/10">
              <span className="relative z-10">Get Quote</span>
              <div className="bg-white text-blue-600 p-2.5 rounded-full shadow-md group-hover:rotate-45 transition-transform duration-300 ease-out">
                <ArrowUpRight size={18} strokeWidth={3} />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </button>
          </LinkNext>
        </div>

        {/* 4. Mobile Hamburger Button - Desktop မှာ ဖျောက်ထားပါတယ် (lg:hidden) */}
        <div className="lg:hidden w-full flex justify-end">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="bg-white p-4 rounded-full shadow-xl border border-slate-100 text-blue-600"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* 5. Mobile Sidebar Menu */}
      <div className={`fixed inset-0 bg-white z-[60] transform transition-transform duration-500 ease-in-out lg:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full p-8">
          <div className="flex justify-end mb-12">
            <button onClick={() => setIsOpen(false)} className="p-2 text-slate-500">
              <X size={32} />
            </button>
          </div>
          
          <nav className="flex flex-col items-center gap-2">
            {navLinks.map((link) => (
              <LinkNext 
                key={link.name} 
                href={link.path} 
                onClick={() => setIsOpen(false)}
                className={getLinkStyles(link.path, true)}
              >
                {link.name}
              </LinkNext>
            ))}
            <LinkNext href="/QuotePage" onClick={() => setIsOpen(false)} className="mt-8 w-full">
                <button className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black uppercase tracking-[0.2em] shadow-xl italic">
                    Get Quote Now
                </button>
            </LinkNext>
          </nav>

          <div className="mt-auto text-center text-slate-400 text-xs font-bold tracking-widest uppercase">
            © {new Date().getFullYear()} Spring Star HVAC
          </div>
        </div>
      </div>
    </header>
  );
}