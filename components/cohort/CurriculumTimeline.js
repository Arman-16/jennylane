import React from 'react';

export default function CurriculumTimeline() {
  const milestones = [
    { phase: "Weeks 1–3", core: "Offer Optimization Architecture", desc: "We audit and strip away confusing, low-priced tiers. We build a single, premium signature offer priced at £1k–£3k that your ideal clients will actively seek out." },
    { phase: "Weeks 4–6", core: "High-Intent Authority Messaging", desc: "We establish your core messaging pillars. You&apos;ll learn exactly how to communicate your specific transformation value so that leads self-qualify instantly." },
    { phase: "Weeks 7–9", core: "Client Conversion System Launch", desc: "We deploy our simple client pipeline blueprint. No complex multi-step tech stacks. Just a direct path from discovery conversation to booked client asset." },
    { phase: "Weeks 10–12", core: "Roster Scaling Optimization", desc: "We refine your tracking numbers and sales conversations. We build consistent weekly routines to keep your booking engine running cleanly long-term." }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto" id="curriculum">
      <div className="text-center max-w-xl mx-auto mb-16">
        <span className="text-[10px] font-bold tracking-widest uppercase text-brand-coral block">The Implementation Blueprint</span>
        <h2 className="font-serif text-3xl font-bold mt-1 text-brand-darkGreen">The 12-Week Cohort Curriculum</h2>
      </div>

      <div className="space-y-4">
        {milestones.map((item, i) => (
          <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 shadow-3xs grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
            <div className="md:col-span-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-brand-coral bg-brand-pinkHighlight/60 px-2.5 py-1 rounded-md inline-block">
                {item.phase}
              </span>
            </div>
            <div className="md:col-span-9">
              <h4 className="font-serif text-base font-bold text-brand-darkGreen">{item.core}</h4>
              <p className="text-xs sm:text-sm text-gray-500 mt-1.5 leading-relaxed font-medium">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}