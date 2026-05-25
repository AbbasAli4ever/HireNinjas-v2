import { Card, CardContent } from "@/components/ui/card";
import { BrandIdentityPreviewSection } from "./sections/BrandIdentityPreviewSection/BrandIdentityPreviewSection";
import { BrandPerceptionSection } from "./sections/BrandPerceptionSection/BrandPerceptionSection";
import { DifferentiatorCardsSection } from "./sections/DifferentiatorCardsSection/DifferentiatorCardsSection";
// import { FooterLinksSection } from "./sections/FooterLinksSection";
import { HeroStatementSection } from "./sections/HeroStatementSection/HeroStatementSection";
import { IdentityGrowthCtaSection } from "./sections/IdentityGrowthCtaSection/IdentityGrowthCtaSection";
// import { MainNavigationSection } from "./sections/MainNavigationSection";
import { StrategicDifferentiatorsSection } from "./sections/StrategicDifferentiatiorsSection/StrategicDifferentiatiorsSection";
const centeredSections = [
  {
    key: "brand-perception",
    component: <BrandPerceptionSection />,
  },
  {
    key: "identity-growth-cta",
    component: <IdentityGrowthCtaSection />,
  },
];
export const Branding = (): JSX.Element => {
  return (
    <main
      className="w-full bg-white overflow-x-hidden"
      data-model-id="214:4863"
    >
      <div className="flex w-full flex-col">
        {/* <section aria-label="Main navigation" className="w-full shrink-0">
          <MainNavigationSection />
        </section> */}
        <section aria-label="Hero statement" className="w-full shrink-0">
          <HeroStatementSection />
        </section>
        <section
          aria-label="Brand identity preview"
          className="w-full shrink-0"
        >
          <BrandIdentityPreviewSection />
        </section>
        <section
          aria-label="Strategic differentiators"
          className="w-full shrink-0"
        >
          <StrategicDifferentiatorsSection />
        </section>
        <section aria-label="Differentiator cards" className="w-full shrink-0">
          <DifferentiatorCardsSection />
        </section>
        <section
          aria-label="Brand strategy callouts"
          className="w-full bg-[#f5f5f5] py-6 sm:py-8 md:py-10"
        >
          <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-6 px-4 sm:px-6 md:gap-8 md:px-10 xl:px-[10%]">
            {centeredSections.map((section) => (
              <Card
                key={section.key}
                className="w-full  border-0 bg-transparent shadow-none"
              >
                <CardContent className="p-0">{section.component}</CardContent>
              </Card>
            ))}
          </div>
        </section>
        {/* <section aria-label="Footer links" className="w-full shrink-0">
          <FooterLinksSection />
        </section> */}
      </div>
    </main>
  );
};
