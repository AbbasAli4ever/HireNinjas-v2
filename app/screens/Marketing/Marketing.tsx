import { Card, CardContent } from "@/components/ui/card";
import { MarketingRoadmapSection } from "./sections/MarketingRoadmapSection/MarketingRoadmapSection";

import { MarketingConsultationsSection } from "./sections/DifferentiatorCardsSection/MarketingConsultationsSection";

import { HeroMarketingSection } from "./sections/HeroMarketingSection/HeroMarketingSection";
import { MarketingStrategyCtaSection } from "./sections/MarketingStrategyCta/MarketingStrategyCtaSection";

import { MarketingExpertiseSection } from "./sections/MarketingExpertiseSection/MarketingExpertiseSection";
const centeredSections = [
  {
    key: "identity-growth-cta",
    component: <MarketingStrategyCtaSection />,
  },
];
export const Marketing = (): JSX.Element => {
  return (
    <main
      className="w-full bg-white overflow-x-hidden"
      data-model-id="214:4863"
    >
      <div className="flex w-full flex-col">
        <section aria-label="Hero statement" className="w-full shrink-0">
          <HeroMarketingSection />
        </section>
        <section
          aria-label="Brand identity preview"
          className="w-full shrink-0"
        >
          <MarketingRoadmapSection />
        </section>
        <section
          aria-label="Strategic differentiators"
          className="w-full shrink-0"
        >
          <MarketingExpertiseSection />
        </section>
        <section aria-label="Differentiator cards" className="w-full shrink-0">
          <MarketingConsultationsSection />
        </section>
        <section
          aria-label="Brand strategy callouts"
          className="w-full bg-[#f5f5f5] py-6 sm:py-8 md:py-10"
        >
          <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-6 px-4 sm:px-6 md:gap-8 md:px-8">
            {centeredSections.map((section) => (
              <Card
                key={section.key}
                className="w-full  border-0 bg-transparent shadow-none"
              >
                <CardContent className="p-0">{section.component}</CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};
