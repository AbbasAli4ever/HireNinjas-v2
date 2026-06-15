import { Card, CardContent } from "@/components/ui/card";
import { AwarenessToConsultationCardsSection } from "./sections/AwarenessToConsultationCardsSection/AwarenessToConsultationCardsSection";
import { BuyerFocusNarrativeSection } from "./sections/BuyerFocusNarrativeSection/BuyerFocusNarrativeSection";
import { GrowthPartnerPositioningSection } from "./sections/GrowthPartnerPositioningSection/GrowthPartnerPositioningSection";
import { HeroPropertyMarketingSection } from "./sections/HeroPropertyMarketingSection/HeroPropertyMarketingSection";
import { PipelineCTABannerSection } from "./sections/PipelineCTABannerSection/PipelineCTABannerSection";
import { ServiceOfferingsGridSection } from "./sections/ServiceOfferingsGridSection/ServiceOfferingsGridSection";

const sections = [
  {
    id: "hero-property-marketing",
    component: HeroPropertyMarketingSection,
    contained: false,
  },
  // {
  //   id: "buyer-focus-narrative",
  //   component: BuyerFocusNarrativeSection,
  //   contained: true,
  // },
  // {
  //   id: "service-offerings-grid",
  //   component: ServiceOfferingsGridSection,
  //   contained: false,
  // },
  // {
  //   id: "awareness-to-consultation-cards",
  //   component: AwarenessToConsultationCardsSection,
  //   contained: true,
  // },
  // {
  //   id: "growth-partner-positioning",
  //   component: GrowthPartnerPositioningSection,
  //   contained: true,
  // },
  // {
  //   id: "pipeline-cta-banner",
  //   component: PipelineCTABannerSection,
  //   contained: true,
  // },
] as const;

export const HireninjasReal = (): JSX.Element => {
  return (
    <main className="w-full bg-white" data-model-id="347:14638">
      <div className="mx-auto flex w-full flex-col bg-white">
        {sections.map(({ id, component: Section, contained }) => (
          <section
            key={id}
            className={contained ? "w-full px-4 py-6 sm:px-6 sm:py-8 xl:px-9 lg:py-8" : "w-full"}
            data-id={id}
          >
            {contained ? (
              <Card className="h-auto w-full rounded-none border-0 bg-transparent shadow-none">
                <CardContent className="p-0">
                  <Section />
                </CardContent>
              </Card>
            ) : (
              <Section />
            )}
          </section>
        ))}
      </div>
    </main>
  );
};
