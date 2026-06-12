import React from 'react';

export default function CohortHero() {
  return (
    <section className="relative px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Copy System Container */}
        <div className="lg:col-span-7 z-10">
          <span className="text-[10px] font-bold tracking-widest uppercase text-brand-coral bg-brand-coral/5 border border-brand-coral/10 px-3 py-1.5 rounded-full inline-block">
            The 12-Week Implementation Group
          </span>
          <h1 className="font-serif text-4xl font-bold tracking-tight text-brand-darkGreen sm:text-5xl lg:text-6xl leading-[1.12] mt-4">
            The System to Turn Your Coaching Expertise Into <br />
            <span className="text-brand-coral font-sans italic font-light">Predictable Income.</span>
          </h1>
          <p className="mt-4 text-base text-gray-600 max-w-xl leading-relaxed">
            Stop guessing your weekly strategy. Join an interactive peer cohort to build your signature offer, establish your messaging, and launch a predictable client acquisition pipeline.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
            <a href="#enroll" className="group inline-flex items-center space-x-2 rounded-xl bg-brand-coral px-8 py-4 text-xs font-bold uppercase tracking-wider text-white shadow-xl transition hover:bg-brand-coral/95">
              <span>Secure Your Cohort Seat</span>
              <svg className="h-4 w-4 stroke-[2.5] transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
            <div className="text-left border-l border-gray-200 pl-4">
              <span className="text-xs font-bold text-brand-darkGreen block">Cohort Price: £1,297</span>
              <span className="text-[11px] text-gray-400 block font-medium">Split-payment plans available</span>
            </div>
          </div>
        </div>

        {/* Masked Portrait Component */}
        <div className="lg:col-span-5 relative flex justify-center z-0">
          <div className="relative w-full max-w-sm aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-brand-darkGreen">
            <div 
              className="w-full h-full bg-cover bg-no-repeat bg-center opacity-80 mix-blend-luminosity"
              style={{ 
                backgroundImage: "url('/jenny-lane-portrait.jpg')", /* Target Jenny Lane Portrait layout graphic here */
                maskImage: "linear-gradient(to top, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)",
                WebkitMaskImage: "linear-gradient(to top, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)"
              }} 
            />
            {/* Contextual Floating Mini-Card */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-xs p-3.5 rounded-xl border border-gray-100 text-brand-darkGreen text-left shadow-lg">
              <span className="text-[9px] font-bold uppercase tracking-widest text-brand-coral block">Cohort Feature</span>
              <p className="text-xs font-medium mt-0.5 text-gray-700">Weekly live group review labs directly with Jenny Lane.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}