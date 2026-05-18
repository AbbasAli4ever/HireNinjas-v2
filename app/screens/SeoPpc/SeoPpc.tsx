import { Card, CardContent } from "@/components/ui/card";
import { CommerceFocusSection } from "./sections/CommerceFocusSection/CommerceFocusSection";
import { CompetitiveEdgeSection } from "./sections/CompetitiveEdgeSection/CompetitiveEdgeSection";
import { HeroMessageSection } from "./sections/HeroMessageSection/HeroMessageSection";
import { PerformanceHighlightsSection } from "./sections/PerformanceHighlightsSection/PerformanceHighlightsSection";
import { SearchIntelligenceSection } from "./sections/SearchIntelligenceSection/SearchIntelligenceSection";
import { TechnicalServicesSection } from "./sections/TechnicalServicesSection/TechnicalServicesSection";

const sectionOrder = [
  { key: "hero", component: HeroMessageSection, wrapperClassName: "w-full" },
  {
    key: "search",
    component: SearchIntelligenceSection,
    wrapperClassName: "w-full px-8 md:px-10 lg:px-[31px] py-6 md:py-7",
    useCard: true,
  },
  {
    key: "performance",
    component: PerformanceHighlightsSection,
    wrapperClassName: "w-full",
  },
  {
    key: "technical",
    component: TechnicalServicesSection,
    wrapperClassName: "w-full px-8 md:px-10 lg:px-[31px] pt-6 md:pt-7",
    useCard: true,
  },
  {
    key: "commerce",
    component: CommerceFocusSection,
    wrapperClassName: "w-full px-8 md:px-10 lg:px-[31px] pt-6",
    useCard: true,
  },
  {
    key: "competitive",
    component: CompetitiveEdgeSection,
    wrapperClassName: "w-full px-8 md:px-10 lg:px-[37px] py-12 md:py-14",
    useCard: true,
  },

];

export const SeoPpc = (): JSX.Element => {
  return (
    <main className="w-full bg-white overflow-x-hidden" data-model-id="95:2609">
      <div className="mx-auto flex w-full min-w-[375px] flex-col">
        {sectionOrder.map(
          ({ key, component: SectionComponent, wrapperClassName, useCard }) => (
            <section key={key} className={wrapperClassName}>
              {useCard ? (
                <Card className="h-auto w-full rounded-none border-0 bg-transparent shadow-none">
                  <CardContent className="p-0">
                    <SectionComponent />
                  </CardContent>
                </Card>
              ) : (
                <SectionComponent />
              )}
            </section>
          ),
        )}
      </div>
    </main>
  );
};