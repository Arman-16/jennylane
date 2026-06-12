import React from 'react';

export default function CurrentStateContext() {
  const frictionPoints = [
    { bold: "Your calendar is full,", light: "but your monthly recurring revenue has plateaued because you are stuck trading time for money." },
    { bold: "You are constantly creating content,", light: "relying on vanity metrics instead of a predictable, conversion-focused client pipeline." },
    { bold: "You offer too many packages,", light: "which confuses high-intent buyers and complicates your backend operations." }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Direct Diagnosis Copy */}
        <div className="lg:col-span-7">
          <span className="text-[10px] font-bold tracking-widest uppercase text-brand-coral block">The Diagnosis</span>
          <h2 className="font-serif text-3xl font-bold mt-2 text-brand-darkGreen">
            The Hard Truth About <br />
            <span className="text-brand-coral font-sans italic font-light">Scaling to Multi-6 Figures</span>
          </h2>
          
          <p className="mt-4 text-xs sm:text-sm text-gray-600 leading-relaxed font-medium">
            Most coaches believe that breaking past their income ceiling requires putting more hours into their schedule or launching complicated marketing funnels. This approach is incorrect.
          </p>

          <div className="mt-8 space-y-4">
            {frictionPoints.map((point, i) => (
              <div key={i} className="flex space-x-3 items-start bg-white p-4 rounded-xl border border-gray-50 shadow-2xs">
                <span className="text-brand-coral font-bold text-sm shrink-0 mt-0.5">✕</span>
                <p className="text-xs sm:text-sm text-brand-charcoal font-medium">
                  <strong>{point.bold}</strong> {point.light}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Editorial Focus Image Block */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="w-full max-w-xs aspect-[4/5] bg-gray-100 rounded-2xl overflow-hidden shadow-xl border border-gray-100">
            <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('/jenny-lane-portrait.jpg')" }} />
          </div>
          <p className="mt-4 text-[11px] text-gray-400 italic text-center max-w-xs">
            &ldquo;We don&apos;t add more hours. We restructure the way your business generates cash flows.&rdquo; — Jenny Lane
          </p>
        </div>

      </div>
    </section>
  );
}