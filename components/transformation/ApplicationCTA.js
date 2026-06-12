import React from 'react';

export default function ApplicationCTA() {
  return (
    <section className="py-20 px-4 text-center max-w-3xl mx-auto" id="apply">
      <span className="text-[10px] font-bold tracking-widest uppercase text-brand-coral block font-bold">Secure Your Seat Allocation</span>
      <h2 className="font-serif text-3xl sm:text-4xl font-bold mt-2 text-brand-darkGreen">
        Submit Your Application Confidential Portfolio
      </h2>
      <p className="text-xs sm:text-sm text-gray-500 mt-2 max-w-md mx-auto font-medium">
        Review processes are managed within 24 business hours. If approved, you will secure a direct link to book your 1:1 strategy onboarding call.
      </p>

      {/* High-Converting Form Card Container Grid */}
      <div className="mt-10 bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-md text-left">
        <div className="bg-brand-cream/60 p-4 rounded-xl border border-gray-50 mb-6 grid grid-cols-2 gap-4 text-center">
          <div>
            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">Active Capacity</span>
            <span className="text-sm font-bold text-brand-darkGreen block mt-0.5">1 Spot Available</span>
          </div>
          <div>
            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">Next Cohort Window</span>
            <span className="text-sm font-bold text-brand-coral block mt-0.5">Immediate Launch</span>
          </div>
        </div>
        
        <button className="w-full bg-brand-coral hover:bg-brand-coral/95 text-white text-xs font-bold uppercase tracking-widest py-4.5 rounded-xl shadow-lg transition duration-200 transform hover:scale-[1.005]">
          Proceed To Private Application Form →
        </button>
        <span className="text-[10px] text-gray-400 italic text-center block mt-3.5 font-medium">
          🔒 Secure SSL encrypted submission link. Your records are strictly confidential.
        </span>
      </div>
    </section>
  );
}