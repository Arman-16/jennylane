import React from 'react';

export default function ReviewGrid() {
  const reviews = [
    { metric: "£12.5k Months", text: "Jenny&apos;s system completely transformed my offer structure. I closed two high-ticket clients within 3 weeks of updating my pricing strategy." },
    { metric: "Reclaimed 15 Hours Weekly", text: "The delivery model changes freed up my schedule instantly. I am making more revenue now while working significantly fewer hours." },
    { metric: "Simple 6-Figure System", text: "I removed three low-converting offers and focused purely on my flagship signature package. My sales pipeline is now incredibly clear." },
    { metric: "High-Ticket Success", text: "The WhatsApp access alone is worth the investment. Having direct feedback on my strategy kept me focused and moving forward." }
  ];

  return (
    <section className="py-20 bg-brand-cream border-t border-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <span className="text-[10px] font-bold tracking-widest uppercase text-brand-coral block">Proof of Concept</span>
        <h3 className="font-serif text-2xl sm:text-3xl font-bold mt-1 text-brand-darkGreen">Verified Results from Real Partners</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10 text-left">
          {reviews.map((card, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl border border-gray-100 shadow-2xs flex flex-col justify-between">
              <div>
                <span className="text-brand-coral font-serif text-lg font-bold block border-b border-gray-50 pb-2 mb-3">
                  {card.metric}
                </span>
                <p className="text-xs italic text-gray-600 leading-relaxed font-medium">&ldquo;{card.text}&rdquo;</p>
              </div>
              <div className="mt-4 flex items-center justify-between pt-2">
                <span className="text-[10px] font-bold text-brand-darkGreen uppercase tracking-wide">Verified Coach</span>
                <div className="flex text-brand-gold space-x-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-2.5 w-2.5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}