'use client';

import React, { useState } from 'react';

export default function FAQAccordion() {
  const faqs = [
    { q: "How much time is required each week?", a: "The program is engineered to clean up your calendar, not add to it. Expect to spend 2-3 hours weekly on strategy sessions and implementation tasks. Most partners begin reclaiming hours within the first 14 days." },
    { q: "I have used other coaching programs. How is this different?", a: "This is not an information-only course. It is an intensive 1:1 operational partnership. We do not focus on generic content frameworks; we audit and rebuild your specific offer architecture and pipelines to maximize profit margins directly." },
    { q: "How quickly can I expect to see an investment return?", a: "Our main objective during the first 30 days is to restructure your signature package. Because we optimize your pricing structure first, signing just one high-ticket client covers your entire program investment." }
  ];

  const [openIdx, setOpenIdx] = useState(null);

  return (
    <section className="py-16 bg-white px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto border-t border-gray-50">
      <h4 className="font-serif text-xl font-bold text-center text-brand-darkGreen mb-8">Objection Handling FAQs</h4>
      
      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <div key={i} className="border border-gray-100 rounded-xl overflow-hidden shadow-3xs">
            <button 
              onClick={() => setOpenIdx(openIdx === i ? null : i)}
              className="w-full text-left bg-brand-cream/20 px-5 py-4 text-xs sm:text-sm font-bold text-brand-darkGreen flex justify-between items-center transition hover:bg-brand-cream/40"
            >
              <span>{faq.q}</span>
              <span className="text-brand-coral font-bold text-base">{openIdx === i ? '−' : '+'}</span>
            </button>
            {openIdx === i && (
              <div className="px-5 py-4 text-xs sm:text-sm text-gray-500 bg-white border-t border-gray-50 leading-relaxed font-medium">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}