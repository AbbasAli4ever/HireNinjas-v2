import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ctaContent = {
  eyebrow: "BUILD YOUR TEAM IN DUBAI & THE UAE",
  title: "A strategic identity that scales.",
  description:
    "Speak to one of our branding specialists and explore how a strategic identity system can enhance the success of your business across Dubai and UAE.",
  primaryAction: {
    label: "Book consultation",
    iconSrc: "https://c.animaapp.com/mpcclquhSkUmAZ/img/component-2.svg",
    iconAlt: "Component",
  },
  secondaryAction: {
    label: "Review Services",
  },
};

export const IdentityGrowthCtaSection = (): JSX.Element => {
  return (
    <section className="w-full max-w-[1200px]  ">
      <Card className="relative w-full  overflow-hidden rounded-3xl border-0 bg-transparent shadow-none">
        <CardContent className="relative flex flex-col items-start gap-8 overflow-hidden rounded-3xl px-6 py-10 sm:px-10 sm:py-12 lg:gap-[32.1px] lg:px-20 lg:py-20 [background:radial-gradient(50%_50%_at_100%_0%,rgba(189,140,255,0.6)_0%,rgba(189,140,255,0)_60%),linear-gradient(157deg,rgba(89,31,151,1)_0%,rgba(45,2,85,1)_100%)]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-[695px] w-[60%] -translate-y-[62%] blur-[10px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(189,140,255,0.5)_0%,rgba(189,140,255,0)_70%)]"
          />
          <div className="relative z-10 inline-flex items-center gap-2 rounded-[999px] border border-solid border-[#ffffff2e] bg-[#ffffff1f] px-3.5 pb-[7.69px] pt-[7.5px]">
            <span className="h-1.5 w-1.5 rounded-[3px] bg-white" />
            <span className="[font-family:'Montserrat',Helvetica] text-xs font-semibold leading-[19.2px] tracking-[1.68px] text-white">
              {ctaContent.eyebrow}
            </span>
          </div>
          <header className="relative z-10 flex max-w-[460.37px] flex-col items-start pt-[1.74px]">
            <h2 className="[font-family:'Satoshi-Bold',Helvetica] text-[34px] font-bold leading-[1.08] tracking-[-0.92px] text-white sm:text-[40px] lg:text-[46px]">
              {ctaContent.title}
            </h2>
          </header>
          <div className="relative z-10 max-w-[697.75px]">
            <p className="[font-family:'Montserrat',Helvetica] text-[15px] font-normal leading-[27.2px] text-[#ffffffd1] sm:text-[17px]">
              {ctaContent.description}
            </p>
          </div>
          <div className="relative z-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
            <Button
              type="button"
              className="h-auto rounded-[999px] bg-white px-2 py-1.5 text-[#14101f] hover:bg-white/95"
            >
              <span className="flex items-center gap-3 pl-[22px]">
                <span className="pl-3.5 [font-family:'Inter',Helvetica] text-[14.5px] font-medium leading-normal tracking-[0] text-center text-[#14101f]">
                  {ctaContent.primaryAction.label}
                </span>
                <span className="grid h-9 w-9 place-items-center rounded-[18px] bg-[#3a0d8c]">
                  <img
                    className="h-4 w-4"
                    alt={ctaContent.primaryAction.iconAlt}
                    src={ctaContent.primaryAction.iconSrc}
                  />
                </span>
              </span>
            </Button>
            <Button
              type="button"
              variant="ghost"
              className="h-auto rounded-[999px] border border-solid border-[#f5efe629] px-[22px] py-3.5 [font-family:'Inter',Helvetica] text-[14.5px] font-medium leading-normal tracking-[0] text-[#f5efe6] hover:bg-white/5 hover:text-[#f5efe6]"
            >
              {ctaContent.secondaryAction.label}
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
