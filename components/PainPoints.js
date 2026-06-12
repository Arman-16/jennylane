import React from 'react';

export default function PainPoints() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Decorative Transition Header Ribbon */}
      <div className="mb-16 bg-brand-coral py-4 text-center text-white rounded-xl font-medium text-xs sm:text-sm tracking-wide shadow-sm flex items-center justify-center space-x-2">
        <span>🤍</span>
        <span>You didn&apos;t start your coaching business to stay stuck at inconsistent income. <strong>It&apos;s time to build something that actually works.</strong></span>
        <span>🤍</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-12">
        {/* Left Side: Symptoms List */}
        <div className="lg:col-span-5">
          <span className="text-[10px] font-bold tracking-widest uppercase text-brand-coral block">The Problem</span>
          <h2 className="font-serif text-3xl font-bold mt-2 text-brand-darkGreen">This Is What I See <br />Every Single Time</h2>
          
          <ul className="mt-8 space-y-4 text-xs sm:text-sm font-medium text-brand-charcoal">
            {[
              "Posting constantly but not getting real clients",
              "Creating offers that no one buys",
              "Charging too little and overworking",
              "Trying to appeal to everyone... and connecting with no one",
              "Starting over again every month with no consistency"
            ].map((text, i) => (
              <li key={i} className="flex items-start space-x-3">
                <span className="h-4 w-4 rounded-full border border-brand-coral text-brand-coral flex items-center justify-center font-bold text-[9px] shrink-0 mt-0.5">✕</span>
                <span>{text}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-xs text-gray-500 leading-relaxed">
            It&apos;s exhausting. And confusing. <br />
            <span className="text-brand-coral font-bold block mt-1">And the worst part? It makes you feel like you&apos;re the problem.</span>
            <span className="text-brand-darkGreen font-bold block mt-1 text-sm">You&apos;re not.</span>
          </p>
        </div>

        {/* Right Side: Flowchart Model Block */}
        <div className="lg:col-span-7 bg-white p-8 rounded-2xl border border-gray-100 shadow-xs">
          <div className="text-center lg:text-left">
            <h3 className="font-serif text-2xl font-bold text-brand-coral italic">It&apos;s Not You. It&apos;s The Model.</h3>
            <p className="mt-3 text-xs text-gray-500 leading-relaxed">
              Most coaching advice is built for people with massive audiences, teams, and time you don&apos;t have. <br />So you stay stuck in:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 text-center">
            {[
              { label: "Content Overload", path: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
              { label: "Offer Confusion", path: "M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" },
              { label: "Inconsistent Income", path: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" }
            ].map((item, idx) => (
              <div key={idx} className="p-5 bg-brand-cream/40 rounded-xl border border-gray-50 flex flex-col items-center">
                <svg className="h-6 w-6 text-brand-darkGreen mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d={item.path} />
                </svg>
                <h4 className="font-bold text-xs text-brand-darkGreen tracking-tight">{item.label}</h4>
              </div>
            ))}
          </div>
          <p className="text-[11px] text-center text-gray-400 font-medium mt-6">But there&apos;s a simpler, more effective way to grow.</p>
        </div>
      </div>
    </section>
  );
}