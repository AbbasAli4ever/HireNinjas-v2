import { Card, CardContent } from "@/components/ui/card";
import { DevelopmentServicesSection } from "./sectons/DevelopmentServicesSection";
import { DevelopmentShowcaseSection } from "./sectons/DevelopmentShowcaseSection";
import { DigitalPlatformBenefitsSection } from "./sectons/DigitalPlatformBenefitsSection";
import { HeroProductShowcaseSection } from "./sectons/HeroProductShowcaseSection/HeroProductShowcaseSection";
import { MainNavigationSection } from "./sectons/MainNavigationSection";
import { RevenuePlatformCtaSection } from "./sectons/RevenuePlatformCtaSection";
import { SiteFooterSection } from "./sectons/SiteFooterSection";
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
      className="relative w-full min-w-[1440px] bg-white"
      data-model-id="132:3969"
    >
      <div className="relative flex w-full flex-col bg-white">
        <MainNavigationSection />
        <section className="relative w-full">
          <HeroProductShowcaseSection />
          <div className="pointer-events-none absolute right-[184px] top-[594px] z-10">
            <Card className="h-auto border-0 bg-transparent shadow-none">
              <CardContent className="p-0">
                <div className="relative h-[60px] w-[188px]">
                  {memberAvatars.map((avatar, index) => (
                    <img
                      key={`member-avatar-${index}`}
                      className={`absolute top-0 ${avatar.className}`}
                      alt={avatar.alt}
                      src={avatar.src}
                    />
                  ))}
                  <div className="absolute left-[129px] top-0 h-[60px] w-[61px]">
                    <div className="absolute left-px top-0 h-[60px] w-[59px] rotate-180 rounded-[29.52px/30px] border-2 border-solid border-white bg-[#ffce31]" />
                    <div className="absolute left-4 top-5 whitespace-nowrap [font-family:'Raleway',Helvetica] text-lg font-medium leading-5 tracking-[0] text-black">
                      2m
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        <DevelopmentShowcaseSection />
        <ValuePropositionsSection />
        <div className="w-full px-[8%]">
          <DevelopmentServicesSection />
        </div>
        <DigitalPlatformBenefitsSection />
        <div className="w-full px-[8%]">
          <RevenuePlatformCtaSection />
        </div>
        <SiteFooterSection />
      </div>
    </main>
  );
};
