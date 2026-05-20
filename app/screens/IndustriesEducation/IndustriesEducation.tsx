import { ApplicantConversionSection } from "./sections/ApplicantConversionSection";
import { ApplicantJourneyStagesSection } from "./sections/ApplicantJourneyStagesSection";
import { EducationHeroSection } from "./sections/EducationHeroSection";
import { EducationServicesSection } from "./sections/EducationServicesSection/EducationServicesSection";
import { EnrollmentCtaSection } from "./sections/EnrollmentCtaSection";
import { PredictableGrowthSection } from "./sections/PredictableGrowthSection";


export const IndustriesEducation = (): JSX.Element => {
  return (
    <main className="w-full bg-white" data-model-id="352:17604">
      <div className="flex w-full flex-col overflow-x-clip">
     
        <EducationHeroSection />
        <ApplicantConversionSection />
        <EducationServicesSection />
        <ApplicantJourneyStagesSection />
        <PredictableGrowthSection />
        <EnrollmentCtaSection />
      
      </div>
    </main>
  );
};