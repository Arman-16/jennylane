import React from 'react';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import ProcessTimeline from "@/components/ProcessTimeline";
import CaseStudies from "@/components/CaseStudies";
import Qualification from "@/components/Qualification";
import OfferGrid from "@/components/OfferGrid";
import Manifesto from "@/components/Manifesto";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      {/* Absolute Header Floating Layer Layer */}
      <Navbar />
      
      <main>
        <Hero />
        <PainPoints />
        <ProcessTimeline />
        <CaseStudies />
        <Qualification />
        <OfferGrid />
        <Manifesto />
        <CTA />
      </main>
    </>
  );
}