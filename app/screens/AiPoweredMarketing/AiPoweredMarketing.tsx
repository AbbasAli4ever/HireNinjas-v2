import { Card, CardContent } from "@/components/ui/card";
import { AiIntegrationShowcaseSection } from "./sections/AiIntegrationShowcaseSection";
import { AiMarketingHeroSection } from "./sections/AiMarketingHeroSection";
import { AiServicesBenefitGridSection } from "./sections/AiServicesBenefitGridSection";
import { GrowthSystemsCtaSection } from "./sections/GrowthSystemsCtaSection";
import { IntegratedGrowthHighlightsSection } from "./sections/IntegratedGrowthHighlightsSection";

import { WorkflowValidationSection } from "./sections/WorkflowValidationSection";

const insetSections = [
  {
    key: "growth-systems-cta",
    component: <GrowthSystemsCtaSection />,
  },
  {
    key: "workflow-validation",
    component: <WorkflowValidationSection />,
  },
];

export const AiPoweredMarketing = (): JSX.Element => {
  return (
    <main className="w-full bg-white text-foreground" data-model-id="220:4801">
      <AiMarketingHeroSection />
      <AiIntegrationShowcaseSection />
      <IntegratedGrowthHighlightsSection />
      <AiServicesBenefitGridSection />
      <section className="w-full bg-white py-5 sm:py-6 md:py-8">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-6 px-5 sm:px-8 md:px-10 lg:px-12">
          {insetSections.map((section) => (
            <Card
              key={section.key}
              className="w-full border-0 bg-transparent shadow-none"
            >
              <CardContent className="p-0">{section.component}</CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
};
