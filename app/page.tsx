import Hero from "@/components/home/Hero";
import WhatWeBuild from "@/components/home/WhatWeBuild";
import HowWeBuild from "@/components/home/HowWeBuild";
import Technology from "@/components/home/Technology";
import Innovation from "@/components/home/Innovation";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatWeBuild />
      <HowWeBuild />
      <Technology />
      <Innovation />
      <CTA />
    </>
  );
}