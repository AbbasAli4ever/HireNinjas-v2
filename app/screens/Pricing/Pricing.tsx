import { Card, CardContent } from "@/components/ui/card";
import { ConsultationCtaSection } from "./sections/ConsultationCtaSection/ConsultationCtaSection";
import { HeroValueSection } from "./sections/HeroValueSection/HeroValueSection";
import { PerformanceTrustSection } from "./sections/PerformanceTrustSection/PerformanceTrustSection";
import { PlanInclusionsSection } from "./sections/PlanInclusionsSection/PlanInclusionsSection";
import { TieredServicePackagesSection } from "./sections/TieredServicePackagesSection/TieredServicePackagesSection";

const sections = [
  { id: "hero-value", component: HeroValueSection, wrapperClassName: "w-full" },
  {
    id: "tiered-service-packages",
    component: TieredServicePackagesSection,
    wrapperClassName: "w-full max-w-[1312px] self-center px-8",
  },
  {
    id: "plan-inclusions",
    component: PlanInclusionsSection,
    wrapperClassName: "w-full max-w-[1312px] self-center px-8",
  },
  {
    id: "performance-trust",
    component: PerformanceTrustSection,
    wrapperClassName: "w-full max-w-[1312px] self-center px-8",
  },
  {
    id: "consultation-cta",
    component: ConsultationCtaSection,
    wrapperClassName: "w-full max-w-[1312px] self-center px-8",
  },

] as const;

export const Pricing = (): JSX.Element => {
  return (
    <main
      className="flex w-full min-w-0 flex-col bg-white"
      data-model-id="520:10568"
    >
      {sections.map(({ id, component: Section, wrapperClassName }) => (
        <section key={id} className={wrapperClassName} aria-label={id}>
          <Card className="h-auto w-full rounded-none border-0 bg-transparent shadow-none">
            <CardContent className="p-0">
              <Section />
            </CardContent>
          </Card>
        </section>
      ))}
    </main>
  );
};