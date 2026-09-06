import Hero from "@/components/sections/Hero";
import SolutionsOverview from "@/components/sections/SolutionsOverview";
import WhyVedAIT from "@/components/sections/WhyVedAIT";
import CoreCapabilities from "@/components/sections/CoreCapabilities";
import ResearchPreview from "@/components/sections/ResearchPreview";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <SolutionsOverview />
      <WhyVedAIT />
      <CoreCapabilities />
      <ResearchPreview />
      <FinalCTA />
    </>
  );
}