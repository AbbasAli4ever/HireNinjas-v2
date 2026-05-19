import { ExpertRoleHighlightsSection } from "./sections/ExpertRoleHighlightsSection";
import { GrowthCTASection } from "./sections/GrowthCTASection";
import { ProductionServicesGridSection } from "./sections/ProductionServicesGridSection";
import { StrategyApproachSection } from "./sections/StrategyApproachSection";
import { VideoHeroSection } from "./sections/VideoHeroSection";
import { WorkflowStepsSection } from "./sections/WorkflowStepsSection";

const sectionOrder = [
  { id: "video-hero", component: <VideoHeroSection /> },
  { id: "expert-role-highlights", component: <ExpertRoleHighlightsSection /> },
  { id: "strategy-approach", component: <StrategyApproachSection /> },
  {
    id: "production-services-grid",
    component: <ProductionServicesGridSection />,
  },
  { id: "workflow-steps", component: <WorkflowStepsSection /> },
];

export const VideoProduction = (): JSX.Element => {
  return (
    <main
      className="w-full bg-white text-foreground overflow-x-hidden"
      data-model-id="212:3548"
    >
      <div className="flex w-full flex-col">
        {sectionOrder.map((section) => (
          <section key={section.id} className="w-full">
            {section.component}
          </section>
        ))}

        <section className="w-full bg-[#FFFFFF] py-6 sm:py-8 md:py-10">
          <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-8">
            
              <GrowthCTASection />
           
          </div>
        </section>
      </div>
    </main>
  );
};