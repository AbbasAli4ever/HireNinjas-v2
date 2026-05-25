import { Card, CardContent } from "@/components/ui/card";
import { ComplianceAcquisitionOverviewSection } from "./sections/ComplianceAcquisitionOverviewSection/ComplianceAcquisitionOverviewSection";
import { CompliancePipelineCtaSection } from "./sections/CompliancePipelineCtaSection/CompliancePipelineCtaSection";
import { IndustryServiceOfferingSection } from "./sections/IndustryServiceOfferingSection/IndustryServiceOfferingSection";
import { LeadGenerationHeroSection } from "./sections/LeadGenerationHeroSection/LeadGenerationHeroSection";
import { TrustCredibilityHighlightsSection } from "./sections/TrustCredibilityHighlightsSection/TrustCredibilityHighlightsSection";

const sectionComponents = [
  
  { key: "lead-generation-hero", component: <LeadGenerationHeroSection /> },
  {
    key: "compliance-acquisition-overview",
    component: <ComplianceAcquisitionOverviewSection />,
  },
  {
    key: "industry-service-offering",
    component: <IndustryServiceOfferingSection />,
  },
  {
    key: "trust-credibility-highlights",
    component: <TrustCredibilityHighlightsSection />,
    className: "mx-auto w-full max-w-[81%]",
  },
  {
    key: "compliance-pipeline-cta",
    component: <CompliancePipelineCtaSection />,
    className: "mx-auto w-full max-w-[81%]",
  },
  
];

export const FinanceFintech = (): JSX.Element => {
  return (
    <main className="w-full bg-white" data-model-id="499:9541">
      <Card className="h-auto w-full rounded-none border-0 bg-transparent shadow-none">
        <CardContent className="flex w-full flex-col p-0">
          {sectionComponents.map((section) => (
            <section
              key={section.key}
              className={section.className ?? "w-full"}
            >
              {section.component}
            </section>
          ))}
        </CardContent>
      </Card>
    </main>
  );
};