import React from 'react';
import TransformationHero from "@/components/transformation/TransformationHero";
import CurrentStateContext from "@/components/transformation/CurrentStateContext";
import PillarBreakdown from "@/components/transformation/PillarBreakdown";
import InvestmentInvestment from "@/components/transformation/InvestmentInvestment";
import AlignmentFilter from "@/components/transformation/AlignmentFilter";
import ApplicationCTA from "@/components/transformation/ApplicationCTA";
import ReviewGrid from "@/components/transformation/ReviewGrid";
import FAQAccordion from "@/components/transformation/FAQAccordion";

export const metadata = {
  title: "Apply: Coaching Business Transformation | 1:1 Private Mentorship",
  description: "Secure your high-ticket 1:1 partnership with Jenny Lane. Install the Connected Framework, streamline lead generation pipelines, and protect your margins.",
};

export default function TransformationPage() {
  return (
    <div className="bg-brand-cream min-h-screen text-brand-charcoal antialiased selection:bg-brand-coral selection:text-white">
      {/* Conversion-Focused Minimalist Header */}
      <nav className="absolute top-0 left-0 right-0 z-50 max-w-7xl mx-auto flex items-center justify-between px-6 py-6 bg-transparent">
        <span className="font-serif text-2xl font-bold tracking-tight text-white mix-blend-difference">JL</span>
        <a href="/" className="text-xs font-bold uppercase tracking-widest text-white/80 hover:text-brand-coral transition flex items-center space-x-1 mix-blend-difference">
          <span>←</span> <span>Exit Funnel</span>
        </a>
      </nav>

      <main>
        <TransformationHero />
        
        {/* Real-time Urgency Indicator Ribbon */}
        <div className="bg-brand-coral text-white text-center py-3 text-xs font-bold uppercase tracking-wider px-4">
          ⚠️ Notice: Private 1:1 allocations are capped at 3 seats per month. Applications close immediately once capacity is met.
        </div>

        <CurrentStateContext />
        <PillarBreakdown />
        <InvestmentInvestment />
        <AlignmentFilter />
        <ApplicationCTA />
        <ReviewGrid />
        <FAQAccordion />
      </main>

      <footer className="bg-brand-darkGreen text-white/30 text-[11px] py-12 text-center border-t border-white/5">
        &copy; {new Date().getFullYear()} Jenny Lane Coaching. Secure Client Acquisition Track. All Rights Reserved.
      </footer>
    </div>
  );
}