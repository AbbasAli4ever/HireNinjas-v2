import { ConsultationCtaSection } from "./sections/ConsultationCtaSection";
import { EngagementProcessSection } from "./sections/EngagementProcessSection";
import { HiringMetricsSection } from "./sections/HiringMetricsSection";
import { RoleCategoriesSection } from "./sections/RoleCategoriesSection";
import { StaffAugmentationHeroSection } from "./sections/StaffAugmentationHeroSection";
import { ValuePropositionSection } from "./sections/ValuePropositionSection";

export const StaffAugmentation = (): JSX.Element => {
  return (
    <main
      className="flex w-full min-w-full flex-col bg-white"
      data-model-id="435:9183"
    >
      <StaffAugmentationHeroSection />
      <HiringMetricsSection />
      <EngagementProcessSection />
      <RoleCategoriesSection />
      <ValuePropositionSection />
      <ConsultationCtaSection />
    </main>
  );
};