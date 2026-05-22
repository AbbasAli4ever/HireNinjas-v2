import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ctaContent = {
  eyebrow: "LET'S TALK",
  title: "Senior strategy, on demand.",
  description:
    "Get in touch with one of our strategy specialists to learn how expert guidance can boost your marketing performance across Dubai and the UAE.  ",
  primaryAction: {
    label: "Book consultation",
    iconSrc: "/figmaAssets/arrow-white.svg",
    iconAlt: "Component",
  },
  secondaryAction: {
    label: "Review Services",
  },
};

export const MarketingStrategyCtaSection = (): JSX.Element => {
  return (
    <section className="w-full mx-auto max-w-[1150px]  ">
      <Card className="relative w-full  overflow-hidden rounded-3xl border-0 bg-transparent shadow-none">
        <CardContent className="relative flex w-full flex-col items-start gap-3 overflow-hidden rounded-3xl p-6 sm:gap-[15.2px] sm:p-10 lg:p-20 [background:linear-gradient(157deg,rgba(89,31,151,1)_0%,rgba(45,2,85,1)_100%)]">
            <div className="pointer-events-none absolute inset-y-[-10%] right-[-5%] w-[60%] [background:radial-gradient(70.71%_70.71%_at_50%_50%,rgba(189,140,255,0.50)_0%,rgba(189,140,255,0.00)_70%)]"
            style={{ right: "-116px", top: "-207.743px", width: "696px", height: "695.575px" }} />
          <div className="relative z-10 inline-flex items-center gap-2 rounded-[999px] border border-solid border-[#ffffff2e] bg-[#ffffff1f] px-3.5 pb-[7.69px] pt-[7.5px]">
            <span className="h-1.5 w-1.5 rounded-[3px] bg-white" />
            <span className="font-montserrat text-[10px] font-semibold leading-[19.2px] tracking-[1.2px] text-white sm:text-xs sm:tracking-[1.68px]">
              {ctaContent.eyebrow}
            </span>
          </div>
          <header className="relative z-10 flex w-full flex-col items-start pt-[1.74px] lg:max-w-[760.37px]">
            <h2 className="font-satoshi text-[30px] font-bold leading-[1.1] tracking-[-0.6px] text-white sm:text-[36px] sm:tracking-[-0.72px] md:text-[40px] lg:text-[46px] lg:tracking-[-0.92px]">
              {ctaContent.title}
            </h2>
          </header>
          <div className="relative z-10 w-full lg:max-w-[697.75px]">
            <p className="font-montserrat text-[13px] font-normal leading-[1.6] text-[#ffffffd1] sm:text-[15px] sm:leading-[27.2px] lg:text-[17px]">
              {ctaContent.description}
            </p>
          </div>
          <nav className="relative z-10 flex w-full flex-col gap-3 pt-1 sm:w-auto sm:flex-row sm:items-center sm:gap-4 sm:pt-0">
            <Button
              type="button"
              className="h-12 w-full justify-between rounded-[999px] bg-white py-3.5 pl-[22px] pr-2 text-[#14101f] hover:bg-white/95 sm:w-auto sm:justify-start"
            >
              <span className="inline-flex flex-1 items-center justify-center pl-3.5 sm:flex-none sm:justify-start">
                <span className="[font-family:'Inter',Helvetica] text-[13.5px] font-medium leading-normal tracking-[0] text-[#14101f] sm:text-[14.5px]">
                  {ctaContent.primaryAction.label}
                </span>
              </span>
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-[18px] bg-[#3a0d8c]">
                <img
                  className="h-4 w-4"
                  alt={ctaContent.primaryAction.iconAlt}
                  src={ctaContent.primaryAction.iconSrc}
                />
              </span>
            </Button>
            <Button
              type="button"
              variant="ghost"
              className="h-12 w-full rounded-[999px] border border-solid border-[#f5efe629] px-[22px] py-3.5 [font-family:'Inter',Helvetica] text-[13.5px] font-medium leading-normal tracking-[0] text-[#f5efe6] hover:bg-white/5 hover:text-[#f5efe6] sm:w-auto sm:text-[14.5px]"
            >
              {ctaContent.secondaryAction.label}
            </Button>
          </nav>
        </CardContent>
      </Card>
    </section>
  );
};
