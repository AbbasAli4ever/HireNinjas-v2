import { Card, CardContent } from "@/components/ui/card";
import { DirectBookingCTASection } from "./sections/DirectBookingCTASection/DirectBookingCTASection";
import { HospitalityServicesOverviewSection } from "./sections/HospitalityServicesOverviewSection/HospitalityServicesOverviewSection";


const sectionOrder = [
  {
    id: "hospitality-services-overview",
    label: "HospitalityServicesOverviewSection",
    component: <HospitalityServicesOverviewSection />,
    wrapperClassName: "w-full",
  },
  {
    id: "direct-booking-cta",
    label: "DirectBookingCTASection",
    component: <DirectBookingCTASection />,
    wrapperClassName: "w-full bg-[#f5f5f5] py-6 sm:py-8 md:py-10",
    contentClassName: "mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-11",
  },
];

export const HospitalityAnd = (): JSX.Element => {
  return (
    <main className="w-full bg-white" data-model-id="467:7596">
      {sectionOrder.map((section) => (
        <section
          key={section.id}
          aria-label={section.label}
          className={section.wrapperClassName}
        >
          {section.contentClassName ? (
            <div className={section.contentClassName}>{section.component}</div>
          ) : (
            section.component
          )}
        </section>
      ))}

      <Card className="hidden">
        <CardContent />
      </Card>
    </main>
  );
};
