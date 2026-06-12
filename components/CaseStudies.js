import React from 'react';

export default function CaseStudies() {
  const checklist = [
    "Signing 3-5 clients in the next 60-90 days",
    "Reaching £5K-£10K/month without burnout",
    "Working with fewer, better clients",
    "Spending less time posting and more time earning",
    "Finally feeling confident in your business direction"
  ];

  const stories = [
    { name: "Sarah M.", role: "Health Coach", text: "I signed 4 new clients in 60 days and finally hit £7K/month. Jenny&apos;s system is a game changer." },
    { name: "Dana K.", role: "Wellness Coach", text: "For the first time, I have a business that feels simple and aligned. It actually works." },
    { name: "Laura P.", role: "Life Coach", text: "I used to feel so inconsistent. Now I have a clear plan and steady clients every month." }
  ];

  return (
    <section className="bg-brand-darkGreen py-20 px-4 sm:px-6 lg:px-8 text-white" id="stories">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Checklist Left Column */}
        <div className="lg:col-span-4">
          <h2 className="font-serif text-3xl font-bold leading-tight">What This Looks Like <br />In Real Life</h2>
          <ul className="mt-6 space-y-3 text-xs sm:text-sm font-medium text-white/90">
            {checklist.map((item, i) => (
              <li key={i} className="flex items-center space-x-2.5">
                <span className="text-brand-coral font-bold text-sm">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Stories Right Cards Column */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {stories.map((story, i) => (
            <div key={i} className="bg-white text-brand-charcoal p-6 rounded-xl flex flex-col justify-between shadow-xl">
              <div>
                <p className="text-xs italic text-gray-600 leading-relaxed">&ldquo;{story.text}&rdquo;</p>
              </div>
              <div className="mt-6 flex items-center justify-between border-t border-gray-50 pt-3">
                <div>
                  <h5 className="text-xs font-bold text-brand-darkGreen">{story.name}</h5>
                  <span className="text-[9px] text-gray-400 font-medium block">{story.role}</span>
                </div>
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