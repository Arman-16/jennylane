import React from 'react';

export default function ClosingCTA() {
  return (
    /* Pink highlight background tracking component */
    <section className="bg-brand-coral text-white py-20 px-4 sm:px-6 lg:px-8 text-center">
      <div className="max-w-4xl mx-auto">
        <span className="text-[10px] font-bold tracking-widest uppercase text-white/80 block">
          Your Next Strategic Move
        </span>
        
        {/* The Exact Headline You Are Looking For */}
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 text-white leading-tight">
          Ready to Build a Coaching Business <br className="hidden sm:inline" />
          <span className="font-sans italic font-light text-brand-darkGreen">That Actually Pays You?</span>
        </h2>
        
        <p className="text-xs sm:text-sm text-white/90 mt-4 max-w-xl mx-auto leading-relaxed font-medium">
          Stop wasting hours on messy tech setups and low-ticket client pipelines. Let&apos;s engineer a streamlined system built intentionally around your life and financial targets.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <a 
            href="#booking" 
            className="w-full sm:w-auto bg-brand-darkGreen hover:bg-brand-darkGreen/90 text-white text-xs font-bold uppercase tracking-widest px-8 py-4 rounded-xl shadow-xl transition-all duration-200"
          >
            Book Your Free Growth Audit →
          </a>
          <a 
            href="#programs" 
            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-widest px-8 py-4 rounded-xl border border-white/20 transition-all duration-200"
          >
            Review Program Tiers
          </a>
        </div>

        <span className="text-[10px] text-white/60 block mt-6 font-medium italic">
          ⚡ No high-pressure sales loops. Just clean operational engineering metrics tailored to your current roster.
        </span>
      </div>
    </section>
  );
}