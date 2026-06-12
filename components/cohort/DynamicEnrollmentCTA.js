import React from 'react';

export default function DynamicEnrollmentCTA() {
  return (
    <section className="py-20 px-4 text-center max-w-3xl mx-auto" id="enroll">
      <span className="text-[10px] font-bold tracking-widest uppercase text-brand-coral block">Cohort Enrollment Open</span>
      <h2 className="font-serif text-3xl sm:text-4xl font-bold mt-2 text-brand-darkGreen">
        Secure Your Program Seat Baseline
      </h2>
      <p className="text-xs sm:text-sm text-gray-500 mt-2 max-w-md mx-auto font-medium">
        Enrollment closes immediately once all 15 cohort slots are allocated. Review the onboarding roadmap directly upon registration.
      </p>

      <div className="mt-10 bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-lg text-left">
        <div className="bg-brand-cream/60 p-4 rounded-xl border border-gray-50 mb-6 grid grid-cols-2 gap-4 text-center">
          <div>
            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">Remaining Roster Seats</span>
            <span className="text-sm font-bold text-brand-darkGreen block mt-0.5">2 Open Slots</span>
          </div>
          <div>
            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">Program Launch Date</span>
            <span className="text-sm font-bold text-brand-coral block mt-0.5">Monday Onboarding</span>
          </div>
        </div>
        
        <button className="w-full bg-brand-coral hover:bg-brand-coral/95 text-white text-xs font-bold uppercase tracking-widest py-4 rounded-xl shadow-md transition duration-200">
          Complete Program Enrollment Workflow →
        </button>
        <span className="text-[10px] text-gray-400 italic text-center block mt-3.5 font-medium">
          🔒 Secure encrypted transaction link. 14-day implementation milestone tracking applies.
        </span>
      </div>
    </section>
  );
}