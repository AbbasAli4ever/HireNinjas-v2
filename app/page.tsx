import { HeroSection } from "@/components/sections/HeroSection";
import { TalentMarketingPartnerSection } from "@/components/sections/TalentMarketingPartnerSection";
import { PreVettedProfessionalsSection } from "@/components/sections/PreVettedProfessionalsSection";
import { PerformanceDrivenDigitalMarketingServicesSection } from "@/components/sections/PerformanceDrivenDigitalMarketingServicesSection";
import { TalentSearchSection } from "@/components/sections/TalentSearchSection";
import { IndustriesWeServeSection } from "@/components/sections/IndustriesWeServeSection";
import { FourStepProcessSection } from "@/components/sections/FourStepProcessSection";
import { CommonGrowthChallengesSection } from "@/components/sections/CommonGrowthChallengesSection";
import { CallToActionSection } from "@/components/sections/CallToActionSection";

export default function HomePage() {
  return (
    <div className="w-full bg-[#fafaff]">
      <main>
       <HeroSection />
        <TalentMarketingPartnerSection />
         <PreVettedProfessionalsSection />
        <PerformanceDrivenDigitalMarketingServicesSection />
        <TalentSearchSection />
       <IndustriesWeServeSection />
        <FourStepProcessSection />
        <CommonGrowthChallengesSection />
         <CallToActionSection />
      </main>
    </div>
  );
}
