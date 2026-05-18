import { Card, CardContent } from "@/components/ui/card";
import { AcquisitionServicesGridSection } from "./sections/AcquisitionServicesGridSection";
import { FooterLinkSection } from "./sections/FooterLinkSection";
import { FunnelCapabilitiesSection } from "./sections/FunnelCapabilitiesSection";
import { IndustryUseCaseSection } from "./sections/IndustryUseCaseSection/IndustryUseCaseSection";
import { LeadEngagementOverviewSection } from "./sections/LeadEngagementOverviewSection";
import { LeadGenerationHeroSection } from "./sections/LeadGenerationHeroSection";
import { PrimaryNavigationSection } from "./sections/PrimaryNavigationSection";
import { SearchLeadCTABannerSection } from "./sections/SearchLeadCTABannerSection";

const sectionCards = [
  {
    key: "lead-engagement-overview",
    wrapperClassName: "py-5 sm:py-7 md:pt-10 md:pb-[120px] ",
    innerClassName:
      "mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8 xl:px-12",
    cardClassName:
      "mx-auto w-full max-w-[1220px] rounded-none border-0 bg-transparent shadow-none",
    contentClassName: "p-0",
    section: <LeadEngagementOverviewSection />,
  },
  {
    key: "acquisition-services-grid",
    wrapperClassName: "py-5 sm:py-7 md:py-0",
    innerClassName:
      "mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8 xl:px-12",
    cardClassName:
      "mx-auto w-full max-w-[1220px] rounded-none border-0 bg-transparent shadow-none",
    contentClassName: "p-0",
    section: <AcquisitionServicesGridSection />,
  },
  {
    key: "search-lead-cta-banner",
    wrapperClassName: "py-5 sm:py-7 md:py-10",
    innerClassName:
      "mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8 xl:px-12",
    cardClassName:
      "mx-auto w-full max-w-[1200px] rounded-none border-0 bg-transparent shadow-none",
    contentClassName: "p-0",
    section: <SearchLeadCTABannerSection />,
  },
];

export const LeadGeneration = (): JSX.Element => {
  const leadEngagementOverviewCard = sectionCards[0];
  const acquisitionServicesGridCard = sectionCards[1];
  const searchLeadCTABannerCard = sectionCards[2];

  return (
    <main className="w-full bg-white text-foreground" data-model-id="173:3544">
      <div className="flex min-h-screen w-full flex-col">
        <header className="w-full">
          {/* <PrimaryNavigationSection /> */}
        </header>
        <section className="w-full">
          <LeadGenerationHeroSection />
        </section>
        <section className={leadEngagementOverviewCard.wrapperClassName}>
          <div className={leadEngagementOverviewCard.innerClassName}>
            <Card className={leadEngagementOverviewCard.cardClassName}>
              <CardContent
                className={leadEngagementOverviewCard.contentClassName}
              >
                {leadEngagementOverviewCard.section}
              </CardContent>
            </Card>
          </div>
        </section>
        <section className="w-full">
          <FunnelCapabilitiesSection />
        </section>
        <section className={acquisitionServicesGridCard.wrapperClassName}>
          <div className={acquisitionServicesGridCard.innerClassName}>
            <Card className={acquisitionServicesGridCard.cardClassName}>
              <CardContent
                className={acquisitionServicesGridCard.contentClassName}
              >
                {acquisitionServicesGridCard.section}
              </CardContent>
            </Card>
          </div>
        </section>
        <section className="w-full">
          <IndustryUseCaseSection />
        </section>
        <section className={searchLeadCTABannerCard.wrapperClassName}>
          <div className={searchLeadCTABannerCard.innerClassName}>
            <Card className={searchLeadCTABannerCard.cardClassName}>
              <CardContent className={searchLeadCTABannerCard.contentClassName}>
                {searchLeadCTABannerCard.section}
              </CardContent>
            </Card>
          </div>
        </section>
        <footer className="w-full">
          {/* <FooterLinkSection /> */}
        </footer>
      </div>
    </main>
  );
};