import React from "react";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { BentoGridSection } from "@/components/BentoGridSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <BentoGridSection />
    </>
  );
}