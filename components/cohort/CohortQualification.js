import React from 'react';

export default function CohortQualification() {
  return (
    <section className="py-16 bg-[#FAF6F0] px-4 sm:px-6 lg:px-8 border-b border-gray-100">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h3 className="font-serif text-2xl font-bold text-brand-darkGreen">Is This Cohort Your Right Next Step?</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-3xs">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-700 flex items-center space-x-2">
              <span>●</span> <span>Perfect For You If...</span>
            </h4>
            <ul className="mt-4 space-y-3 text-xs font-medium text-gray-600">
              <li>• You want to replace your low-priced services with a single premium package.</li>
              <li>• You are ready to follow a clear, weekly implementation plan.</li>
              <li>• You value direct peer feedback and active group learning environments.</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-3xs">
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-coral flex items-center space-x-2">
              <span>●</span> <span>Not For You If...</span>
            </h4>
            <ul className="mt-4 space-y-3 text-xs font-medium text-gray-600">
              <li>• You are looking for automated hacks instead of building a real pipeline system.</li>
              <li>• You aren&apos;t ready to allocate 3 hours weekly to group execution goals.</li>
              <li>• You are looking for high-touch 1:1 private advisory rather than group collaboration.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}