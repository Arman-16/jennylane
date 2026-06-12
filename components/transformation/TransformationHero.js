import React from 'react';

export default function TransformationHero() {
  return (
    <section className="relative bg-brand-darkGreen text-white overflow-hidden min-h-[80vh] flex items-center">
      
      {/* Background Graphic Vignette Layout */}
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-32 pb-24 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 flex flex-col justify-center">
          <span className="text-[10px] font-bold tracking-widest uppercase text-brand-gold bg-brand-gold/10 border border-brand-gold/20 px-3 py-1.5 rounded-full inline-block self-start">
            Private High-Ticket Consulting Track
          </span>
          
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mt-4 leading-[1.12]">
            Break Through Your Invisible Income Ceiling. <br />
            <span className="text-brand-coral font-sans italic font-light">Without Trading More Hours.</span>
          </h1>
          
          <p className="mt-4 font-serif text-base sm:text-lg lg:text-xl text-brand-gold italic font-medium max-w-xl">
            Bespoke 1:1 infrastructure engineering to build a predictable, freedom-backed £100k+ coaching practice.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#apply" className="group inline-flex items-center space-x-3 rounded-xl bg-brand-coral px-8 py-4 text-xs font-bold uppercase tracking-wider text-white shadow-xl hover:bg-brand-coral/95 transition-all transform hover:translate-y-[-1px]">
              <span>Begin Your Application Process</span>
              <svg className="h-4 w-4 stroke-[2.5] transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
            <div className="text-left">
              <span className="text-xs font-bold block text-white/90">Takes less than 4 minutes</span>
              <span className="text-[11px] text-white/50 block">Strictly confidential vetting review</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}