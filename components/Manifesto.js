import React from 'react';

export default function Manifesto() {
  const stats = [
    { value: "200+", text: "Coaches Helped" },
    { value: "85%", text: "Increase In Income" },
    { value: "6 Figure", text: "Clients Created" },
    { value: "20K+", text: "Avg. Annual Goal Hit" }
  ];

  return (
    /* 
      CRITICAL CONVERSION ANCHOR: 
      id="about" connects seamlessly to your navbar and footer smooth-scroll paths.
    */
    <section id="about" className="bg-[#FAF6F0] py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Premium Editorial Image Container */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden bg-gray-200 shadow-xl border border-gray-100">
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: "url('/jenny-lane-portrait.jpg')" }} /* Replace with your secondary professional portrait asset */
              />
            </div>
          </div>

          {/* Right Column: High-Ticket Authority Copy Letter */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="text-[10px] font-bold tracking-widest uppercase text-brand-coral bg-brand-pinkHighlight/60 px-3 py-1.5 rounded-full inline-block self-start">
              A Note From Jenny
            </span>
            
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mt-4 text-brand-darkGreen leading-tight">
              I&apos;ve Been Where You Are. <br />
              <span className="text-brand-coral font-sans italic font-light">And I Built A Better Way.</span>
            </h2>
            
            <div className="mt-6 text-xs sm:text-sm text-brand-charcoal/90 space-y-4 leading-relaxed font-medium">
              <p>
                For a long time, I did everything everyone told me to do. I posted daily on social media, chased changing algorithms, tried the latest tricks, and launched multiple complicated offers.
              </p>
              <p>
                <strong>I was completely exhausted — and I was making no real money.</strong>
              </p>
              <p>
                So I stripped everything back and built a simpler system. I focused on a single connected framework, streamlined my client pipelines, and raised my pricing structure. That is when everything changed. My income became completely predictable, and my business finally felt sustainable.
              </p>
              <p>
                Now, I help ambitious coaches install that exact same client acquisition machine. Not with more social media noise or exhausting tech funnels — but with real Support, absolute structural clarity, and strategy that fits your life.
              </p>
            </div>
            
            <span className="font-serif text-xl font-bold text-brand-coral block mt-6 tracking-wide">
              Jenny Lane ♥
            </span>
          </div>

        </div>

        {/* 
          Institutional Data Row: 
          Brings heavy quantitative validation immediately following the personal story
        */}
        <div className="mt-20 pt-12 border-t border-brand-darkGreen/5 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-brand-darkGreen tracking-tight">
                {stat.value}
              </span>
              <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mt-2 block">
                {stat.text}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}