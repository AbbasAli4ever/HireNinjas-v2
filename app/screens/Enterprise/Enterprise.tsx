import { Card, CardContent } from "@/components/ui/card";
import { DemandGenerationHeroSection } from "./sections/DemandGenerationHeroSection";
import { EngagementProcessSection } from "./sections/EngagementProcessSection";
import { StaffAugmentationBenefitsSection } from "./sections/StaffAugmentationBenefitsSection";
import { StaffAugmentationServicesSection } from "./sections/StaffAugmentationServicesSection";
import { StructuredDemandSection } from "./sections/StructuredDemandSection";
import { TalentCTASection } from "./sections/TalentCTASection/TalentCTASection";

const sectionOrder = [
  {
    id: "demand-generation-hero",
    component: DemandGenerationHeroSection,
    wrapperClassName: "relative w-full",
  },
  {
    id: "structured-demand",
    component: StructuredDemandSection,
    wrapperClassName: "relative w-full",
  },
  {
    id: "engagement-process",
    component: EngagementProcessSection,
    wrapperClassName: "relative w-full",
  },
  {
    id: "staff-augmentation-services",
    component: StaffAugmentationServicesSection,
    wrapperClassName: "relative w-full",
  },
  {
    id: "staff-augmentation-benefits",
    component: StaffAugmentationBenefitsSection,
    wrapperClassName: "relative w-full",
  },
  {
    id: "talent-cta",
    component: TalentCTASection,
    wrapperClassName: "relative w-full",
  },
];

export const Enterprise = (): JSX.Element => {
  return (
    <main className="w-full bg-white text-foreground" data-model-id="95:5928">
      <Card className="h-auto w-full rounded-none border-0 shadow-none">
        <CardContent className="flex w-full flex-col gap-0 p-0">
          {sectionOrder.map(
            ({ id, component: SectionComponent, wrapperClassName }) => (
              <section key={id} className={wrapperClassName}>
                <SectionComponent />
              </section>
            ),
          )}
        </CardContent>
      </Card>
    </main>
  );
};
