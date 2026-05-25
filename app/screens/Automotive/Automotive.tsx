import { Card, CardContent } from "@/components/ui/card";
import { AutoMarketingHeroSection } from "./sections/AutoMarketingHeroSection/AutoMarketingHeroSection";
import { DiscoveryAccelerationSection } from "./sections/DiscoveryAccelerationSection/DiscoveryAccelerationSection";
import { FullFunnelServicesSection } from "./sections/FullFunnelServicesSection/FullFunnelServicesSection";
import { KeyChallengesSection } from "./sections/KeyChallengesSection/KeyChallengesSection";
import { StrategyCallCTASection } from "./sections/StrategyCallCTASection/StrategyCallCTASection";

const sections = [

  {
    id: "auto-marketing-hero",
    Component: AutoMarketingHeroSection,
    wrapped: false,
  },
  {
    id: "discovery-acceleration",
    Component: DiscoveryAccelerationSection,
    wrapped: true,
  },
  {
    id: "full-funnel-services",
    Component: FullFunnelServicesSection,
    wrapped: false,
  },
  { id: "key-challenges", Component: KeyChallengesSection, wrapped: true },
  { id: "strategy-call-cta", Component: StrategyCallCTASection, wrapped: true },
 
] as const;

export const Automotive = (): JSX.Element => {
  return (
    <main className="w-full bg-white" data-model-id="486:8053">
      <div className="flex w-full flex-col">
        {sections.map(({ id, Component, wrapped }) => (
          <section key={id} className="relative w-full">
            {wrapped ? (
              <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-10 lg:px-12">
                <Card className="h-auto w-full border-0 bg-transparent shadow-none">
                  <CardContent className="p-0">
                    <Component />
                  </CardContent>
                </Card>
              </div>
            ) : (
              <Component />
            )}
          </section>
        ))}
      </div>
    </main>
  );
};