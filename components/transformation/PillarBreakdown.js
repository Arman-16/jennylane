import React from 'react';

export default function PillarBreakdown() {
  const assets = [
    { step: "01", asset: "High-Ticket Offer Restructuring", impact: "Consolidate multiple low-margin packages into a single flagship signature offer priced at £3k–£5k+." },
    { step: "02", asset: "High-Intent Lead Pipelines", desc: "Deploy an evergreen marketing machine to attract qualified, premium buyers without daily algorithm chasing." },
    { step: "03", asset: "Scalable Client Delivery Models", impact: "Transition your delivery mechanics from individual sessions to group architectures, freeing up 15+ calendar hours weekly." },
    { step: "04", asset: "Authority Messaging Overhaul", desc: "Rebuild your copy hierarchy to position you as an expert, filtering out bad-fit clients before they book." },
    { step: "05", asset: "Bespoke Premium Asset Launch", impact: "Design and launch custom high-value sales tools (like short, direct-response PDFs) that convert leads automatically." },
    { step: "06", asset: "Direct Operational Advisory", desc: "Get consistent 1:1 strategy reviews with Jenny to optimize pricing, pitch frameworks, and scale pipelines cleanly." }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-darkGreen text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-xl mx-auto">
          <span className="text-[10px] font-bold tracking-widest uppercase text-brand-gold block">The Roadmap to Scale</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mt-2 text-white">
            The Operational <span className="text-brand-coral font-sans italic font-light">Upgrades</span> We Will Install
          </h2>
          <p className="text-xs text-gray-400 mt-2 leading-relaxed">
            We systematically audit and rebuild your business backend to turn it into a high-converting revenue platform:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {assets.map((item, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-xl flex flex-col justify-between hover:border-white/20 transition-all">
              <div>
                <span className="font-serif text-xs text-brand-gold font-bold block mb-2 tracking-widest">{item.step}</span>
                <h4 className="font-bold text-sm text-white tracking-wide uppercase">{item.asset}</h4>
                <p className="text-xs text-gray-300 mt-2.5 leading-relaxed font-light">{item.impact || item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}