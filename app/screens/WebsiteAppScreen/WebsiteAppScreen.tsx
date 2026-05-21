import { Card, CardContent } from "@/components/ui/card";
import { DevelopmentServicesSection } from "./sectons/DevelopmentServicesSection";
import { DevelopmentShowcaseSection } from "./sectons/DevelopmentShowcaseSection";
import { DigitalPlatformBenefitsSection } from "./sectons/DigitalPlatformBenefitsSection";
import { HeroProductShowcaseSection } from "./sectons/HeroProductShowcaseSection/HeroProductShowcaseSection";
import { RevenuePlatformCtaSection } from "./sectons/RevenuePlatformCtaSection";
import { ValuePropositionsSection } from "./sectons/ValuePropositionsSection";

const memberAvatars = [
  {
    src: "https://c.animaapp.com/mp5dxvs5vBeNIx/img/ellipse-252.png",
    alt: "Ellipse",
    className: "left-0 w-[60px] h-[60px] object-cover",
  },
  {
    src: "https://c.animaapp.com/mp5dxvs5vBeNIx/img/ellipse-248.png",
    alt: "Ellipse",
    className: "left-8 w-[61px] h-[60px]",
  },
  {
    src: "https://c.animaapp.com/mp5dxvs5vBeNIx/img/ellipse-251.png",
    alt: "Ellipse",
    className: "left-[65px] w-[61px] h-[60px] object-cover",
  },
  {
    src: "https://c.animaapp.com/mp5dxvs5vBeNIx/img/ellipse-250.png",
    alt: "Ellipse",
    className: "left-[98px] w-[59px] h-[60px]",
  },
];

export const WebsiteAppScreen = (): JSX.Element => {
  return (
    <main
      className="relative w-full max-w-[1440px] bg-white"
      data-model-id="132:3969"
    >
      <div className="relative flex w-full flex-col bg-white">
        <section className="relative w-full">
          <HeroProductShowcaseSection />
        </section>
        <DevelopmentShowcaseSection />
        <ValuePropositionsSection />
        <div className="w-full px-0 xl:px-[8%]">
          <DevelopmentServicesSection />
        </div>
        <DigitalPlatformBenefitsSection />
        <div className="w-full px-0 xl:px-[8%]">
          <RevenuePlatformCtaSection />
        </div>
      </div>
    </main>
  );
};
