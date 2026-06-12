'use client';

import React, { useState, useEffect } from 'react';

export default function Hero() {
  // 1. High-Velocity Testimonial Rotation Matrix Data
  const slideData = [
    { name: "Michelle L.", role: "Business Coach", text: "Jenny helped me attract premium clients and double my income in 3 months." },
    { name: "Sarah M.", role: "Health Coach", text: "I signed 4 new clients in 60 days and finally hit £7K/month. Jenny's system is a complete game changer." },
    { name: "Dana K.", role: "Wellness Coach", text: "For the first time, I have a repeatable business model that runs without me having to be online all day." }
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  // 2. Automate Slider Cycle Every 2 Seconds (2000ms)
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slideData.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [slideData.length]);

  return (
    <div className="relative w-full bg-brand-darkGreen overflow-hidden">
      
      {/* 
        3. PREMIUM IMMERSIVE GRAPHIC MASK 
        Fuses the graphic seamlessly into the dark panels using an absolute transparency mask
      */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-1/2 hidden lg:block z-0 pointer-events-none select-none">
        <div 
          className="w-full h-full bg-cover bg-no-repeat bg-[center_top] transition-opacity duration-700 opacity-30 mix-blend-luminosity"
          style={{ 
            backgroundImage: "url('/jenny-lane-portrait.jpg')", /* Target Jenny Lane Portrait layout graphic here */  
            maskImage: "linear-gradient(to left, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%)",
            WebkitMaskImage: "linear-gradient(to left, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%)"
          }} 
        />
        {/* Soft atmospheric gradient layer overlay to protect readability */}
        <div className="absolute inset-0 bg-radial-[at_70%_30%] from-transparent via-brand-darkGreen/50 to-brand-darkGreen" />
      </div>

      {/* Hero Section Blueprint Frame */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-36 pb-28 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[95vh]">
        
        {/* Left Side: Conversion Copy Rack */}
        <div className="lg:col-span-7 text-white mt-4 lg:mt-0">
          <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.12]">
            Build a Consistent <br />
            <span className="text-brand-coral font-sans italic font-light">£5K–£10K/Month</span> <br />
            Coaching Business
          </h1>
          <p className="mt-4 font-serif text-base sm:text-lg lg:text-xl text-white/95 italic font-medium">
            Without Posting Daily, Chasing Algorithms, or Burning Out
          </p>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/70 font-light">
            I help coaches sign 3–5 high-quality clients in the next 60–90 days using a simple, repeatable system built around clarity, connection, and conversion.
          </p>

          {/* Social Proof Flags */}
          <div className="mt-6 flex flex-wrap gap-4 text-[10px] font-bold uppercase tracking-wider text-white/80">
            {['Proven Framework', 'Real Clients', 'More Time Freedom'].map((item, i) => (
              <div key={i} className="flex items-center space-x-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
                <svg className="h-3.5 w-3.5 text-brand-coral fill-current" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l5-5z" clipRule="evenodd" /></svg>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <a href="#booking" className="group inline-flex items-center space-x-3 rounded-lg bg-brand-coral px-8 py-4 text-xs font-bold uppercase tracking-wider text-white shadow-xl transition-all hover:bg-brand-coral/95 hover:translate-y-[-1px]">
              <span>BOOK YOUR FREE STRATEGY CALL</span>
              <svg className="h-4 w-4 stroke-[2.5] transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
            </a>
          </div>
          <p className="mt-2.5 text-[11px] text-white/50 italic">No pressure. Just a clear plan tailored to your business.</p>
        </div>

        {/* 
          Right Side: High-Intent Automated Testimonial Slider Panel
          Cycles smoothly through social proof points right in the user's primary field of view
        */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end mt-12 lg:mt-0">
          <div className="bg-brand-darkGreen/80 backdrop-blur-md border border-white/10 p-6 rounded-xl w-full max-w-sm text-white shadow-2xl relative min-h-[170px] flex flex-col justify-between overflow-hidden">
            
            {/* Slide Content Track Layer */}
            <div className="relative w-full flex-1">
              {slideData.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-500 transform flex flex-col justify-between ${
                    index === activeSlide
                      ? 'opacity-100 translate-x-0 scale-100 pointer-events-auto'
                      : 'opacity-0 translate-x-4 scale-95 pointer-events-none'
                  }`}
                >
                  <p className="text-xs sm:text-sm italic font-light text-white/95 leading-relaxed">
                    &ldquo;{slide.text}&rdquo;
                  </p>
                  
                  <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-3">
                    <div>
                      <span className="text-[10px] font-bold text-brand-gold uppercase tracking-wider block">
                        {slide.name}
                      </span>
                      <span className="text-[9px] text-white/50 block font-medium mt-0.5">
                        {slide.role}
                      </span>
                    </div>
                    <div className="flex text-brand-gold space-x-0.5">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="h-2.5 w-2.5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Bullet Indicators Bar */}
            <div className="flex justify-start space-x-1.5 mt-4 relative z-20">
              {slideData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    index === activeSlide ? 'w-4 bg-brand-coral' : 'w-1 bg-white/20'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}