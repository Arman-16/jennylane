// import React from 'react';

// export default function OfferGrid() {
//   const pathways = [
//     { title: "The Practice Fix", sub: "(Foundation)", desc: "Build a clear offer, attract better clients, and create momentum.", marker: "Best if you're stuck and not getting clients." },
//     { title: "The Business Turnaround", sub: "(Growth)", desc: "Scale to consistent income with a proven system.", marker: "Best if you're already coaching but inconsistent.", highlight: true },
//     { title: "The Jenny Lane Letter", sub: "(Ongoing Support)", desc: "Simple strategies delivered monthly to help you stay focused and growing.", marker: "Stay on track and never start over again." },
//     { title: "The Book", sub: "(Coming Soon)", desc: "A step-by-step roadmap to building your coaching business that lasts.", marker: "Be the first to know when it launches." }
//   ];

//   return (
//     <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="programs">
//       <div className="text-center">
//         <span className="text-[10px] font-bold tracking-widest uppercase text-brand-coral block">Ways To Work With Me</span>
//         <h2 className="font-serif text-3xl sm:text-4xl font-bold mt-2 text-brand-darkGreen">Choose The Path That Fits You</h2>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
//         {pathways.map((card, i) => (
//           <div 
//             key={i} 
//             className={`p-6 rounded-xl flex flex-col justify-between transition-all duration-300 bg-white border shadow-2xs ${
//               card.highlight 
//                 ? 'border-brand-coral ring-2 ring-brand-coral/20 lg:scale-105 z-10' 
//                 : 'border-gray-100'
//             }`}
//           >
//             <div className="text-center flex flex-col items-center">
//               <div className="h-1 bg-brand-darkGreen w-6 rounded-full mb-4" />
//               <h3 className="font-serif text-lg font-bold text-brand-darkGreen leading-tight">{card.title}</h3>
//               <span className="text-[11px] text-gray-400 font-medium block mt-0.5">{card.sub}</span>
//               <p className="text-xs text-gray-500 mt-4 leading-relaxed font-medium min-h-[48px]">{card.desc}</p>
//             </div>

//             <div className="mt-6 pt-4 border-t border-gray-50 text-center">
//               <span className="text-[11px] font-bold text-brand-coral block uppercase tracking-wide mb-4">
//                 {card.marker}
//               </span>
//               <button className={`w-full py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
//                 card.highlight 
//                   ? 'bg-brand-coral text-white hover:bg-brand-coral/95' 
//                   : 'bg-brand-darkGreen text-white hover:bg-brand-darkGreen/95'
//               }`}>
//                 {card.highlight ? 'Apply Now' : 'Learn More'}
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="mt-8 max-w-4xl mx-auto">
//         <a href="#booking" className="w-full bg-brand-coral text-white font-bold text-xs uppercase tracking-widest py-4 rounded-xl text-center block shadow-md transition hover:bg-brand-coral/95">
//           NOT SURE WHAT YOU NEED? LET&apos;S FIGURE IT OUT TOGETHER →
//         </a>
//       </div>
//     </section>
//   );
// }



'use client';

import React, { useTransition } from 'react';
import { useRouter } from 'next/navigation';

export default function OfferGrid() {
  const router = useRouter();
  const [, startTransition] = useTransition();

  // Primary High-Ticket Focus Matrix
  const primaryPrograms = [
    {
      badge: "Level 1: Foundational Framework",
      title: "The Practice Fix",
      subtitle: "12-Week Guided Group Cohort",
      price: "£1,297 / Launch Entry",
      forWho: "Best for ambitious coaches making under £5k/mo who need the exact step-by-step system setup, messaging validation, and a predictable client engine.",
      ctaText: "Explore Cohort System →",
      targetUrl: "/cohort",
      highlight: false
    },
    {
      badge: "Level 2: High-Ticket Private Peak",
      title: "The Business Transformation",
      subtitle: "Bespoke 1:1 Private Mentorship",
      price: "£1,497 / Flagship Allocation",
      forWho: "Best for established coaches making £5k–£10k+/mo who are capped on capacity, experiencing burnout, and need custom backend engineering and 1:1 advisory.",
      ctaText: "Apply For Private 1:1 →",
      targetUrl: "/transformation",
      highlight: true
    }
  ];

  // Secondary Micro-Offers & Long-Term Nurture Layer
  const secondaryOffers = [
    {
      type: "The Blueprint Asset",
      title: "The Book",
      availability: "Coming Soon — Free Entry Access",
      desc: "The ultimate step-by-step roadmap to building an unshakeable, systems-driven coaching practice that operates with absolute financial clarity.",
      ctaText: "Join The Waitlist",
      isReleased: false
    },
    {
      type: "The Weekly Strategy Insiders",
      title: "The Jenny Lane Letter",
      availability: "Coming Soon — £27 / Month",
      desc: "Direct, raw tactical breakdowns, backend templates, and direct-response psychology insights delivered straight to your inbox once a week.",
      ctaText: "Get First Access",
      isReleased: false
    }
  ];

  const handleRouteSelection = (url) => {
    startTransition(() => {
      router.push(url);
    });
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100" id="programs">
      <div className="max-w-6xl mx-auto">
        
        {/* Core Header Typography */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] font-bold tracking-widest uppercase text-brand-coral block">
            The Value Ladder Ecosystem
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mt-2 text-brand-darkGreen">
            Choose The Path That Fits Your Current Scale
          </h2>
          <p className="text-xs text-gray-500 mt-2 max-w-md mx-auto leading-relaxed">
            Please review the profile markers below to self-select into the exact ecosystem tier designed for your current business milestone.
          </p>
        </div>

        {/* 1. PRIMARY HIGH-TICKET CHANNELS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto mb-16">
          {primaryPrograms.map((card, i) => (
            <div 
              key={i} 
              className={`p-8 rounded-2xl flex flex-col justify-between transition-all duration-300 relative ${
                card.highlight 
                  ? 'bg-brand-darkGreen text-white ring-4 ring-brand-coral/30 shadow-xl md:scale-[1.02]' 
                  : 'bg-brand-cream/40 text-brand-charcoal border border-gray-100 shadow-3xs'
              }`}
            >
              {card.highlight && (
                <span className="absolute -top-3 right-6 bg-brand-coral text-white text-[9px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  Highly Requested Peak Track
                </span>
              )}

              <div>
                <span className={`text-[9px] font-bold tracking-widest uppercase block ${card.highlight ? 'text-brand-gold' : 'text-brand-coral'}`}>
                  {card.badge}
                </span>
                <h3 className={`font-serif text-2xl font-bold mt-1 ${card.highlight ? 'text-white' : 'text-brand-darkGreen'}`}>
                  {card.title}
                </h3>
                <span className={`text-xs block mt-0.5 font-medium ${card.highlight ? 'text-gray-300' : 'text-gray-400'}`}>
                  {card.subtitle}
                </span>
                <span className={`text-xs font-bold block mt-4 ${card.highlight ? 'text-brand-coral' : 'text-brand-darkGreen/90'}`}>
                  {card.price}
                </span>

                <div className={`mt-6 p-4 rounded-xl text-xs leading-relaxed font-medium ${
                  card.highlight ? 'bg-white/5 border border-white/10 text-gray-200' : 'bg-white border border-gray-100 text-gray-600'
                }`}>
                  <span className={`font-bold block uppercase text-[10px] mb-1.5 ${card.highlight ? 'text-brand-gold' : 'text-brand-darkGreen'}`}>
                    Target Business Profile Eligibility:
                  </span>
                  {card.forWho}
                </div>
              </div>

              <button 
                onClick={() => handleRouteSelection(card.targetUrl)}
                className={`mt-8 w-full py-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  card.highlight 
                    ? 'bg-brand-coral text-white hover:bg-brand-coral/95 shadow-md shadow-brand-coral/10' 
                    : 'bg-brand-darkGreen text-white hover:bg-brand-darkGreen/95'
                }`}
              >
                {card.ctaText}
              </button>
            </div>
          ))}
        </div>

        {/* 2. REVENUE STACKING / LONG-TERM NURTURE ROW */}
        <div className="border-t border-gray-100 pt-16 max-w-4xl mx-auto">
          <div className="text-center md:text-left mb-8">
            <h4 className="font-serif text-xl font-bold text-brand-darkGreen">Low-Barrier Assets & Training</h4>
            <p className="text-xs text-gray-400 mt-0.5">Not ready to scale with a program yet? Join the incubation lists:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {secondaryOffers.map((item, idx) => (
              <div key={idx} className="bg-brand-cream/30 p-6 rounded-xl border border-gray-100/70 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-100 pb-3 mb-3">
                    <span className="text-[10px] font-bold text-brand-coral uppercase tracking-wider">
                      {item.type}
                    </span>
                    <span className="text-[10px] bg-brand-darkGreen/5 text-brand-darkGreen font-bold px-2 py-0.5 rounded-md">
                      {item.availability}
                    </span>
                  </div>
                  <h5 className="font-serif text-base font-bold text-brand-darkGreen">{item.title}</h5>
                  <p className="text-xs text-gray-500 mt-2 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4">
                  {/* Dynamic Form Activation / Interactive Trigger Field */}
                  <div className="flex gap-2">
                    <input 
                      type="email" 
                      placeholder="Enter your email addresses" 
                      className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-xs w-full focus:outline-none focus:border-brand-coral font-medium text-brand-charcoal"
                    />
                    <button className="bg-brand-darkGreen hover:bg-brand-darkGreen/90 text-white text-[10px] font-bold uppercase tracking-wider px-4 py-2 rounded-lg shrink-0 transition">
                      {item.ctaText}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final Catch-All Link */}
        <div className="mt-12 text-center">
          <p className="text-xs text-gray-400 font-medium">
            Confused about your operational setup limits?{" "}
            <a href="#booking" className="text-brand-coral underline decoration-brand-coral/30 underline-offset-4 font-bold hover:text-brand-darkGreen transition">
              Let&apos;s evaluate your numbers together on a short strategy call →
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}