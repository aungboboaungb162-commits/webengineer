'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from "lucide-react";
import LinkNext from "next/link";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Route ပြောင်းရင် Menu အလိုအလျောက် ပိတ်ဖို့
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const getLinkStyles = (path: string, isMobile: boolean = false) => {
    const isActive = pathname === path;
    if (isMobile) {
      return `text-lg font-bold uppercase tracking-widest py-4 w-full text-center transition-colors block ${
        isActive ? 'text-blue-600 bg-blue-50/50' : 'text-slate-900 hover:bg-slate-50'
      }`;
    }
    return `text-[13px] font-black uppercase tracking-[0.15em] transition-all relative py-2 ${
      isActive 
        ? 'text-blue-600 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-blue-600' 
        : 'text-slate-700 hover:text-blue-600 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-blue-600 hover:after:w-full after:transition-all'
    }`;
  };

  return (
    <header 
      className={`fixed top-0 w-full z-[100] transition-all duration-300 h-28 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white'
      }`}
    >
      <div className="max-w-[1400px] w-full mx-auto flex items-center justify-between px-6 lg:px-10 h-full relative z-[120]">
        
        {/* 1. Logo */}
        <div className="flex items-center h-full py-2">
          <LinkNext href="/" className="h-full block">
            <div className="relative h-full aspect-[3/1] w-32 sm:w-48 lg:w-56 flex items-center">
              <Image 
                src="/starLogo_final.png" 
                alt="Spring Star HVAC" 
                fill
                className="object-contain object-left scale-125 sm:scale-150 transition-transform" 
                priority 
              />
            </div>
          </LinkNext>
        </div>

        {/* 2. Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {[
            { name: 'Home', path: '/' },
            { name: 'About', path: '/about' },
            { name: 'Services', path: '/services' },
            { name: 'Contact', path: '/#contact' }
          ].map((item) => (
            <LinkNext key={item.path} href={item.path} className={getLinkStyles(item.path)}>
              {item.name}
            </LinkNext>
          ))}
        </nav>

        {/* 3. Action Group */}
        <div className="flex items-center gap-4">
          <LinkNext href="/QuotePage" className="hidden sm:block">
            <button className="bg-slate-900 text-white px-7 py-3.5 rounded-sm font-bold uppercase text-[11px] tracking-[0.15em] hover:bg-blue-600 transition-all shadow-md">
              Get a Quote
            </button>
          </LinkNext>

          {/* Hamburger Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2.5 text-slate-900 bg-slate-100 rounded-md hover:bg-blue-50 transition-colors"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* 4. Dropdown Menu Box (Mobile) */}
      <div 
        className={`absolute left-0 right-0 bg-white border-t border-slate-100 shadow-xl transition-all duration-500 ease-in-out lg:hidden overflow-hidden ${
          isOpen ? 'top-28 opacity-100 translate-y-0' : 'top-28 opacity-0 -translate-y-5 pointer-events-none'
        }`}
      >
        <div className="p-4 flex flex-col space-y-1">
          {[
            { name: 'Home', path: '/' },
            { name: 'About Us', path: '/about' },
            { name: 'Services', path: '/services' },
            { name: 'Contact', path: '/#contact' }
          ].map((item) => (
            <LinkNext 
              key={item.name} 
              href={item.path} 
              className={getLinkStyles(item.path, true)}
            >
              {item.name}
            </LinkNext>
          ))}
          
          <div className="pt-4 pb-2">
            <LinkNext href="/QuotePage">
              <button className="w-full bg-blue-600 text-white py-4 rounded-md font-black uppercase tracking-widest text-sm shadow-lg">
                Request Site Visit
              </button>
            </LinkNext>
          </div>
        </div>
      </div>
    </header>
  );
}