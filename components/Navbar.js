'use client';

import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 pt-4 sm:px-6 lg:px-8 pointer-events-none">
      <header 
        className={`mx-auto max-w-7xl w-full rounded-xl transition-all duration-300 flex items-center justify-between px-6 py-4 pointer-events-auto ${
          scrolled 
            ? 'bg-brand-darkGreen/90 backdrop-blur-md border border-white/10 shadow-lg translate-y-2' 
            : 'bg-transparent border border-transparent translate-y-0'
        }`}
      >
        {/* Brand Identity */}
        <div className="flex items-center space-x-2 text-white">
          <span className="font-serif text-xl font-bold tracking-tight">JL</span>
          <span className="hidden text-[9px] font-bold tracking-widest uppercase sm:inline-block text-white/80">
            JENNY LANE
          </span>
        </div>

        {/* Navigation Core Paths */}
        <nav className="hidden md:flex items-center space-x-8 text-[11px] font-bold uppercase tracking-wider text-white/80">
          <a href="#" className="hover:text-brand-coral transition-colors duration-200">Home</a>
          <a href="#about" className="hover:text-brand-coral transition-colors duration-200">About Me</a>
          <a href="#how-it-works" className="hover:text-brand-coral transition-colors duration-200">How It Works</a>
          <a href="#programs" className="hover:text-brand-coral transition-colors duration-200">Programs</a>
          <a href="#stories" className="hover:text-brand-coral transition-colors duration-200">Success Stories</a>
        </nav>

        {/* Secondary High-Intent Action Target */}
        <div className="flex items-center space-x-4">
          <a 
            href="#booking" 
            className="group inline-flex items-center space-x-2 rounded-lg bg-brand-coral px-4 py-2.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-md transition-all duration-200 hover:bg-brand-coral/95 hover:scale-[1.02]"
          >
            <span>FREE STRATEGY CALL</span>
            <svg 
              className="h-3 w-3 stroke-[2.5] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </a>
        </div>
      </header>
    </div>
  );
}