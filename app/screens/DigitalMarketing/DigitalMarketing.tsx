import { Card, CardContent } from "@/components/ui/card";
import { BudgetGrowthCTASection } from "./sections/BudgetGrowthCTASection";
import { FooterLinksSection } from "./sections/FooterLinksSection";
import { GrowthStrategyOverviewSection } from "./sections/GrowthStrategyOverviewSection";
import { StrategicToolkitSection } from "./sections/StrategicToolkitSection";
import { GlobalNavigationSection } from "./sections/GlobalNavigationSection";
import { HeroMarketingOverviewSection } from "./sections/HeroMarketingOverviewSection";
import { StrategicPrinciplesSection } from "./sections/StrategicPrinciplesSection";
import { GrowthProcessStepsSection } from "./sections/GrowthProcessStepsSection";

const centeredSections = [
  {
    key: "growth-strategy-overview",
    component: <GrowthStrategyOverviewSection />,
  },
  {
    key: "strategic-toolkit",
    component: <StrategicToolkitSection />,
  },
  {
    key: "budget-growth-cta",
    component: <BudgetGrowthCTASection />,
  },
];

export const DigitalMarketing = (): JSX.Element => {
  return (
    <main className="w-full bg-white" data-model-id="84:1317">
      <div className="flex w-full flex-col bg-white">
        <header className="w-full">
          <GlobalNavigationSection />
        </header>
        <section className="w-full">
          <HeroMarketingOverviewSection />
        </section>
        {centeredSections.slice(0, 1).map((section) => (
          <section key={section.key} className="w-full bg-white py-6 md:py-7">
            <div className="mx-auto w-full max-w-[1440px] px-4 md:px-8 lg:px-10">
              <Card className="mx-auto w-full max-w-[1314px] border-0 bg-transparent shadow-none">
                <CardContent className="p-0">{section.component}</CardContent>
              </Card>
            </div>
          </section>
        ))}

        <section className="w-full">
          <StrategicPrinciplesSection />
        </section>
        {centeredSections.slice(1, 2).map((section) => (
          <section key={section.key} className="w-full bg-white py-6 md:py-7">
            <div className="mx-auto w-full max-w-[1440px] px-4 md:px-8 lg:px-10">
              <Card className="mx-auto w-full max-w-[1314px] border-0 bg-transparent shadow-none">
                <CardContent className="p-0">{section.component}</CardContent>
              </Card>
            </div>
          </section>
        ))}

        <section className="w-full">
          <GrowthProcessStepsSection />
        </section>
        {centeredSections.slice(2).map((section) => (
          <section key={section.key} className="w-full bg-white py-6 md:py-7">
            <div className="mx-auto w-full max-w-[1440px] px-4 md:px-8 lg:px-10">
              <Card className="mx-auto w-full max-w-[1314px] border-0 bg-transparent shadow-none">
                <CardContent className="p-0">{section.component}</CardContent>
              </Card>
            </div>
          </section>
        ))}

        <footer className="w-full">
          <FooterLinksSection />
        </footer>
      </div>
    </main>
  );
};
