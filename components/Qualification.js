import React from 'react';

export default function Qualification() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Pass Vector Box */}
        <div className="bg-white p-6 sm:p-8 rounded-xl border border-gray-100 shadow-2xs">
          <h4 className="font-serif text-sm font-bold text-brand-darkGreen uppercase tracking-wide flex items-center space-x-2">
            <span className="text-emerald-600 font-bold">♥</span> 
            <span>This IS For You If You...</span>
          </h4>
          <ul className="mt-5 space-y-3.5 text-xs sm:text-sm font-medium text-brand-charcoal">
            <li>• Are serious about building a real coaching business</li>
            <li>• Want consistent clients and predictable income</li>
            <li>• Are willing to simplify and focus</li>
            <li>• Want to make a bigger impact (and get paid well for it)</li>
          </ul>
        </div>

        {/* Reject Vector Box */}
        <div className="bg-white p-6 sm:p-8 rounded-xl border border-gray-100 shadow-2xs">
          <h4 className="font-serif text-sm font-bold text-brand-darkGreen uppercase tracking-wide flex items-center space-x-2">
            <span className="text-brand-coral font-bold">✕</span> 
            <span>This Is NOT For You If You...</span>
          </h4>
          <ul className="mt-5 space-y-3.5 text-xs sm:text-sm font-medium text-brand-charcoal">
            <li>• Want overnight results without effort</li>
            <li>• Avoid sales conversations completely</li>
            <li>• Are looking for hacks instead of a real system</li>
            <li>• Don&apos;t want to be held accountable</li>
          </ul>
        </div>

      </div>
    </section>
  );
}