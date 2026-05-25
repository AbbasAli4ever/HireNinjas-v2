import { Card, CardContent } from "@/components/ui/card";
import { AcquisitionServiceHighlightsSection } from "./sections/AcquisitionServiceHighlightsSection/AcquisitionServiceHighlightsSection";
import { ConversionLifecycleSection } from "./sections/ConversionLifecycleSection/ConversionLifecycleSection";
import { HeroValuePropositionSection } from "./sections/HeroValuePropositionSection/HeroValuePropositionSection";
import { RevenueStrategyCTASection } from "./sections/RevenueStrategyCTASection/RevenueStrategyCTASection";
import { ShopifyCommerceOfferingSection } from "./sections/ShopifyCommerceOfferingSection/ShopifyCommerceOfferingSection";

const centeredSections = [
  {
    key: "shopify-commerce-offering",
    component: <ShopifyCommerceOfferingSection />,
  },
  {
    key: "conversion-lifecycle",
    component: <ConversionLifecycleSection />,
  },
  {
    key: "revenue-strategy-cta",
    component: <RevenueStrategyCTASection />,
  },
];

export const EcommerceRetail = (): JSX.Element => {
  return (
    <>
      <main
        className="flex w-full min-w-[1440px] flex-col bg-white"
        data-model-id="496:8265"
      >
        <section className="w-full">
          <HeroValuePropositionSection />
        </section>
        {centeredSections.slice(0, 1).map((section) => (
          <section key={section.key} className="w-full bg-white px-[54px] py-7">
            <Card className="mx-auto w-full max-w-[1242px] rounded-none border-0 bg-transparent shadow-none">
              <CardContent className="p-0">{section.component}</CardContent>
            </Card>
          </section>
        ))}

        <section className="w-full">
          <AcquisitionServiceHighlightsSection />
        </section>
        {centeredSections.slice(1).map((section) => (
          <section key={section.key} className="w-full bg-white px-[54px] py-7">
            <Card className="mx-auto w-full max-w-[1242px] rounded-none border-0 bg-transparent shadow-none">
              <CardContent className="p-0">{section.component}</CardContent>
            </Card>
          </section>
        ))}
      </main>
    </>
  );
};
