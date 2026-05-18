import { FooterUtilityLinksSection } from "./sections/FooterUtilityLinksSection";
import { GrowthOpportunityCtaSection } from "./sections/GrowthOpportunityCtaSection";
import { PlatformSupportSection } from "./sections/PlatformSupportSection";
import { ServiceOfferingSection } from "./sections/ServiceOfferingSection";
import { SiteNavigationSection } from "./sections/SiteNavigationSection";
import { SocialMediaHeroSection } from "./sections/SocialMediaHeroSection";
import { StrategySummarySection } from "./sections/StrategySummarySection";
import { WhyChooseUsSection } from "./sections/WhyChooseUsSection/WhyChooseUsSection";

export const SocialMedia = (): JSX.Element => {
  return (
    <main className="w-full bg-white" data-model-id="145:5309">
      {/* <SiteNavigationSection /> */}
      <SocialMediaHeroSection />
      <StrategySummarySection />
      <WhyChooseUsSection />
      <ServiceOfferingSection />
      <PlatformSupportSection />
      <GrowthOpportunityCtaSection />
      {/* <FooterUtilityLinksSection /> */}
    </main>
  );
};
