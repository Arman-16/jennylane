import React from 'react';

export default function InvestmentInvestment() {
  const inclusions = [
    { title: "12 Weeks of Private 1:1 Strategic Alignment", focus: "Bespoke scaling calls" },
    { title: "Direct Private Access for Real-time Execution Reviews", focus: "WhatsApp support" },
    { title: "6 Full Structural Milestone Audits", focus: "Funnel, offer, and messaging reviews" },
    { title: "Custom Client Acquisition System Design", focus: "Done-with-you installation" },
    { title: "Premium Conversion Script Library", focus: "Sales & application assets" }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Specific List Inventory */}
        <div className="lg:col-span-7">
          <span className="text-[10px] font-bold tracking-widest uppercase text-brand-coral block">What Is Included</span>
          <h2 className="font-serif text-3xl font-bold mt-1 text-brand-darkGreen">The Program Architecture</h2>
          
          <div className="mt-6 space-y-3.5">
            {inclusions.map((item, i) => (
              <div key={i} className="flex items-start space-x-3">
                <span className="text-brand-coral font-bold text-base shrink-0 mt-0.5">✓</span>
                <div>
                  <h5 className="text-xs sm:text-sm font-bold text-brand-darkGreen">{item.title}</h5>
                  <span className="text-[11px] text-gray-400 font-medium block mt-0.5">— Includes {item.focus}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Explicit Financial Justification Zone */}
          <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <span className="text-[10px] font-bold text-gray-400 uppercase block tracking-wider">Premium Package Investment</span>
              <span className="font-serif text-3xl font-bold text-brand-darkGreen mt-1 block">£1,497</span>
              <span className="text-[11px] text-gray-400 font-medium block mt-0.5">Single seat payment block allocation</span>
            </div>
            <div className="bg-brand-coral/5 p-4 rounded-xl border border-brand-coral/10 self-center">
              <span className="text-xs font-bold text-brand-coral block">ROI Projection Architecture:</span>
              <p className="text-[11px] text-gray-600 mt-1 leading-relaxed font-medium">
                Signing just <strong>one single high-ticket client</strong> at your restructured price point completely clears your program investment.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Visual Asset Layout */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="w-full max-w-xs aspect-[3/4] bg-brand-darkGreen text-white p-8 rounded-2xl flex flex-col justify-between border border-white/5 shadow-2xl relative">
            <div>
              <span className="text-[9px] font-bold text-brand-gold uppercase tracking-widest block">The Contract Guarantee</span>
              <h4 className="font-serif text-xl font-bold mt-2 text-white leading-tight">Risk Reversal Agreement</h4>
              <p className="text-xs text-gray-300 mt-4 leading-relaxed font-light">
                We work alongside your platform structure with dedicated attention. Your strategy roadmap is documented during week 1 to ensure a clear pathway to conversions.
              </p>
            </div>
            <div className="border-t border-white/5 pt-4 mt-6">
              <span className="text-[10px] text-brand-gold font-bold tracking-wider uppercase block">Secure Verification Asset</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}