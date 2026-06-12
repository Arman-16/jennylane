import React from 'react';

export default function AlignmentFilter() {
  return (
    <section className="py-16 bg-[#FAF6F0] px-4 sm:px-6 lg:px-8 border-y border-brand-darkGreen/5">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-[10px] font-bold tracking-widest uppercase text-brand-coral block">Strict Vetting Matrix</span>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold mt-1 text-brand-darkGreen">Are You Eligible to Apply?</h3>
          <p className="text-xs text-gray-400 mt-1">We run an intensive 1:1 advisory track. We only partner with clients who meet these baseline criteria:</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Green Pass Box */}
          <div className="bg-white p-6 sm:p-8 rounded-xl border border-emerald-100 shadow-3xs">
            <h4 className="font-serif text-sm font-bold text-emerald-900 uppercase tracking-wider flex items-center space-x-2">
              <span className="text-emerald-600 font-bold text-base">✓</span> 
              <span>Apply If You Are...</span>
            </h4>
            <ul className="mt-5 space-y-3.5 text-xs sm:text-sm font-medium text-brand-charcoal">
              <li className="flex items-start space-x-2">
                <span className="text-emerald-600 font-bold">•</span>
                <span>Generating at least £2k–£3k/month with existing coaching offers.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-emerald-600 font-bold">•</span>
                <span>Ready to remove low-margin, high-touch fatigue from your calendar.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-emerald-600 font-bold">•</span>
                <span>Fully committed to executing structural and operational changes.</span>
              </li>
            </ul>
          </div>

          {/* Red Rejection Box */}
          <div className="bg-white p-6 sm:p-8 rounded-xl border border-rose-100 shadow-3xs opacity-95">
            <h4 className="font-serif text-sm font-bold text-rose-900 uppercase tracking-wider flex items-center space-x-2">
              <span className="text-brand-coral font-bold text-base">✕</span> 
              <span>Do NOT Apply If You Are...</span>
            </h4>
            <ul className="mt-5 space-y-3.5 text-xs sm:text-sm font-medium text-brand-charcoal">
              <li className="flex items-start space-x-2">
                <span className="text-brand-coral font-bold">•</span>
                <span>Looking for overnight results, automated hacks, or quick tactics.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-brand-coral font-bold">•</span>
                <span>Not currently working with any active coaching clients.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-brand-coral font-bold">•</span>
                <span>Unwilling to invest time and focus into your business backend.</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}