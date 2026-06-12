import React from 'react';

export default function ProcessTimeline() {
  const nodes = [
    { num: "1", name: "Clarify Your ONE Offer", desc: "We define a clear, high-value offer people actually want to buy — not 5 confusing ones." },
    { num: "2", name: "Fix Your Message", desc: "You&apos;ll learn how to communicate your value so the right clients instantly &ldquo;get it.&rdquo;" },
    { num: "3", name: "Build a Simple Conversion Path", desc: "No complex funnels. Just a clean path from interest → conversation → client." },
    { num: "4", name: "Master Client Conversations", desc: "You&apos;ll know exactly how to turn interest into paying clients without feeling pushy." },
    { num: "5", name: "Create Consistent Momentum", desc: "You stop starting over every month and start building predictable income." }
  ];

  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 border-y border-gray-100" id="how-it-works">
      <div className="max-w-7xl mx-auto text-center">
        <span className="text-[10px] font-bold tracking-widest uppercase text-brand-coral block">The Solution</span>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold mt-2 text-brand-darkGreen">The Simple Client Conversion System</h2>
        <p className="text-xs text-gray-400 mt-1">Instead of doing more... we simplify everything.</p>

        {/* Horizontal Desktop Axis Timeline */}
        <div className="relative mt-16 hidden lg:flex items-start justify-between gap-4">
          <div className="absolute top-7 left-12 right-12 h-[1px] bg-gray-200 z-0" />
          
          {nodes.map((node, i) => (
            <div key={i} className="relative z-10 flex-1 flex flex-col items-center px-2">
              <div className="h-14 w-14 rounded-full bg-white text-brand-darkGreen font-bold flex items-center justify-center border-2 border-brand-darkGreen shadow-xs font-serif text-base">
                {node.num}
              </div>
              <h4 className="font-bold text-xs text-brand-darkGreen mt-4 tracking-tight uppercase">{node.name}</h4>
              <p className="text-[11px] text-gray-500 mt-2 leading-relaxed max-w-[170px] mx-auto">{node.desc}</p>
            </div>
          ))}
        </div>

        {/* Responsive Mobile Layout */}
        <div className="mt-12 space-y-8 text-left max-w-md mx-auto lg:hidden">
          {nodes.map((node, i) => (
            <div key={i} className="flex space-x-4 items-start">
              <div className="h-10 w-10 rounded-full bg-brand-darkGreen text-white font-bold flex items-center justify-center shrink-0 shadow-xs font-serif text-xs">
                {node.num}
              </div>
              <div>
                <h4 className="font-bold text-sm text-brand-darkGreen uppercase tracking-wide">{node.name}</h4>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">{node.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-xs font-bold text-brand-coral uppercase bg-brand-pinkHighlight/60 py-3.5 rounded-lg max-w-2xl mx-auto tracking-wide">
          This is how you go from &ldquo;trying everything&rdquo; → to a system that actually works.
        </div>
      </div>
    </section>
  );
}