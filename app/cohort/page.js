import React from 'react';
import CohortHero from "@/components/cohort/CohortHero";
import CorePromise from "@/components/cohort/CorePromise";
import CurriculumTimeline from "@/components/cohort/CurriculumTimeline";
import LeverageInclusions from "@/components/cohort/LeverageInclusions";
import CohortQualification from "@/components/cohort/CohortQualification";
import DynamicEnrollmentCTA from "@/components/cohort/DynamicEnrollmentCTA";

export const metadata = {
  title: "The Practice Fix: 12-Week Group Cohort | Jenny Lane",
  description: "Stop guessing your strategy. Join a structured 12-week group implementation program to install the Simple Client Conversion System inside your coaching practice.",
};

export default function CohortPage() {
  return (
    <div className="bg-brand-cream min-h-screen text-brand-charcoal antialiased selection:bg-brand-coral selection:text-white">
      {/* Funnel Sticky Bar */}
      <div className="bg-brand-darkGreen text-white text-center py-2 text-[10px] sm:text-xs font-bold uppercase tracking-widest px-4 border-b border-white/5">
        ⚡ Next 12-Week Cohort Enrolling Now — Limited to 15 Active Seats Total.
      </div>

      <main>
        <CohortHero />
        <CorePromise />
        <CurriculumTimeline />
        <LeverageInclusions />
        <CohortQualification />
        <DynamicEnrollmentCTA />
      </main>

      <footer className="bg-brand-darkGreen text-white/30 text-[11px] py-12 text-center border-t border-white/5">
        &copy; {new Date().getFullYear()} Jenny Lane Coaching. Programmatic Growth Track. All Rights Reserved.
      </footer>
    </div>
  );
}