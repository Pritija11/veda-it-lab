import Hero from "@/components/sections/Hero";
import SolutionsOverview from "@/components/sections/SolutionsOverview";
import SystemFlow from "@/components/sections/SystemFlow";
import AgenticAI from "@/components/sections/AgenticAI";
import DataIntelligence from "@/components/sections/DataIntelligence";
import ComputerVision from "@/components/sections/ComputerVision";
import CoreCapabilities from "@/components/sections/CoreCapabilities";
import Industries from "@/components/sections/Industries";
import ResearchPreview from "@/components/sections/ResearchPreview";
import AboutIdentity from "@/components/sections/AboutIdentity";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <SolutionsOverview />
      <SystemFlow />
      <AgenticAI />
      <DataIntelligence />
      <ComputerVision />
      <CoreCapabilities />
      <Industries />
      <ResearchPreview />
      <AboutIdentity />
      <FinalCTA />
    </>
  );
}
