import { Separator } from "@/components/ui/separator";
import { ComplianceCTASection } from "./sections/ComplianceCTASection";
import { ComplianceTrustSection } from "./sections/ComplianceTrustSection";
import { HealthcareHeroSection } from "./sections/HealthcareHeroSection/HealthcareHeroSection";
import { HealthcareSolutionsGridSection } from "./sections/HealthcareSolutionsGridSection";
import { PatientAcquisitionStorySection } from "./sections/PatientAcquisitionStorySection";
import { ValuePropositionSection } from "./sections/ValuePropositionSection";

export const Hireninjas = (): JSX.Element => {
  const sections = [
    {
      key: "hero",
      content: <HealthcareHeroSection />,
      padded: false,
      bordered: false,
    },
    {
      key: "trust",
      content: <ComplianceTrustSection />,
      padded: true,
      bordered: true,
    },
    {
      key: "solutions",
      content: <HealthcareSolutionsGridSection />,
      padded: false,
      bordered: true,
    },
    {
      key: "value",
      content: <ValuePropositionSection />,
      padded: true,
      bordered: false,
    },
    {
      key: "cta",
      content: <ComplianceCTASection />,
      padded: true,
      bordered: false,
    },
    {
      key: "story",
      content: <PatientAcquisitionStorySection />,
      padded: true,
      bordered: false,
    },
  ];

  return (
    <main className="w-full bg-white" data-model-id="352:16213">
      <div className="flex w-full flex-col bg-white">
        {sections.map((section, index) => (
          <section
            key={section.key}
            className={`w-full ${section.bordered ? "border-t border-[#d9d9d9]" : ""}`}
          >
            <div
              className={`mx-auto w-full max-w-[1440px] ${
                section.padded ? "px-10 py-5 sm:px-10 lg:px-10" : ""
              }`}
            >
              {section.content}
            </div>
            {index === 0 && <Separator className="bg-[#d9d9d9]" />}
          </section>
        ))}
      </div>
    </main>
  );
};