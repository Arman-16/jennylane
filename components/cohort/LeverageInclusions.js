import React from 'react';

export default function LeverageInclusions() {
  const assets = [
    { title: "12 Weekly Strategy Labs", desc: "Interactive group review calls with Jenny Lane to fine-tune your messaging, fix bottleneck structures, and optimize script files." },
    { title: "The Peer Implementation Slack Hub", desc: "Direct accountability channels with ambitious coaches working through the exact same scaling checkpoints." },
    { title: "The Client Conversion Template Pack", desc: "Our proven plug-and-play sales assets, discovery scripts, and framework outlines to save you hundreds of tracking hours." },
    { title: "Bespoke Tracking Review Matrices", desc: "Custom sheets to monitor your pipeline analytics, helping you easily identify exactly where adjustments are needed." }
  ];

  return (
    <section className="py-20 bg-brand-darkGreen text-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-[10px] font-bold tracking-widest uppercase text-brand-gold block">The Complete Toolset</span>
          <h2 className="font-serif text-3xl font-bold mt-1 text-white">What You Gain Access To</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {assets.map((box, i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-xl flex space-x-4 items-start">
              <span className="text-brand-coral font-bold text-base mt-0.5">✓</span>
              <div>
                <h4 className="font-bold text-sm text-white tracking-wide uppercase">{box.title}</h4>
                <p className="text-xs text-gray-300 mt-2 leading-relaxed font-light">{box.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}