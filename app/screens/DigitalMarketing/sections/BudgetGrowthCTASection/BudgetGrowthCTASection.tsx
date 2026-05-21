import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ctaContent = {
  eyebrow: "LETS TALK",
  title: ["Turn marketing budgets", "into measurable growth."],
  description: [
    "Contact our strategy team now for a complimentary consultation and discover",
    "how a digital roadmap can accelerate business growth across Dubai and UAE.",
  ],
  primaryAction: {
    label: "Book consultation",
    iconSrc: "/figmaAssets/arrow-white.svg",
  },
  secondaryAction: {
    label: "Review the Roadmap",
  },
};

export const BudgetGrowthCTASection = (): JSX.Element => {
  return (
    <section className="w-full px-2 sm:px-8 md:px-4 lg:px-8 xl:px-[140px]">
      <Card className="relative w-full overflow-hidden rounded-3xl border-0 bg-transparent shadow-none">
        <CardContent className="relative flex flex-col items-start gap-4 sm:gap-[15.1px] overflow-hidden rounded-3xl px-6 py-10 sm:px-10 sm:py-14 lg:p-14 xl:p-20 [background:linear-gradient(157deg,rgba(89,31,151,1)_0%,rgba(45,2,85,1)_100%)]">
          {/* Right-side spotlight glow */}
          <div
            className="pointer-events-none absolute blur-[10px] [background:radial-gradient(70.71%_70.71%_at_50%_50%,rgba(189,140,255,0.50)_0%,rgba(189,140,255,0.00)_70%)]"
            style={{ right: "-116px", top: "-207.743px", width: "696px", height: "695.575px" }}
          />
          <div className="relative inline-flex items-center gap-2 rounded-[999px] border border-solid border-[#ffffff2e] bg-[#ffffff1f] px-3.5 pb-[7.69px] pt-[7.5px]">
            <span className="h-1.5 w-1.5 rounded-[3px] bg-white" />
            <span className="[font-family:'Montserrat',Helvetica] text-[10px] sm:text-xs font-semibold leading-[19.2px] tracking-[1.68px] text-white whitespace-nowrap">
              {ctaContent.eyebrow}
            </span>
          </div>
          <header className="relative flex max-w-[583.74px] flex-col items-start self-start px-0 pb-0 pt-[2.23px]">
            <h2 className="[font-family:'Satoshi-Bold',Helvetica] text-[28px] font-bold leading-[1.15] tracking-[-0.92px] text-white sm:text-[36px] sm:leading-[42px] md:text-[40px] md:leading-[45px] lg:text-[46px] lg:leading-[49.7px]">
              <span className="xl:block">{ctaContent.title[0]} </span>
              <span className="xl:block">{ctaContent.title[1]}</span>
            </h2>
          </header>
          <div className="relative flex max-w-[697.75px] flex-col items-start">
            <p className="[font-family:'Montserrat',Helvetica] text-sm font-normal leading-[1.6] tracking-[0] text-[#ffffffd1] sm:text-[15px] sm:leading-[24px] md:text-[16px] md:leading-[26px] lg:text-[17px] lg:leading-[27.2px]">
              <span className="xl:block">{ctaContent.description[0]} </span>
              <span className="xl:block">{ctaContent.description[1]}</span>
            </p>
          </div>
          <nav className="relative flex w-full flex-col items-stretch gap-4 pt-1 sm:w-auto sm:flex-row sm:items-center sm:gap-6">
            <Button
              type="button"
              className="relative h-14 sm:h-auto w-full sm:w-auto inline-flex min-h-12 items-center gap-3 rounded-[999px] bg-white py-2 pl-[22px] pr-2 text-[#14101f] hover:bg-white/95"
            >
              <span className="flex w-full sm:w-auto items-center justify-center sm:justify-start gap-3">
                <span className="[font-family:'Inter',Helvetica] text-center text-[14.5px] font-medium leading-normal tracking-[0] text-[#14101f]">
                  {ctaContent.primaryAction.label}
                </span>
                <span className="grid h-9 w-9 place-items-center rounded-[18px] bg-[#3a0d8c] absolute right-2 sm:static">
                  <img
                    className="h-4 w-4"
                    alt="Component"
                    src={ctaContent.primaryAction.iconSrc}
                  />
                </span>
              </span>
            </Button>
            <Button
              type="button"
              variant="outline"
              className="h-12 sm:h-auto w-full sm:w-auto inline-flex min-h-12 items-center justify-center rounded-[999px] border border-solid border-[#f5efe629] bg-transparent px-[22px] py-3.5 text-[#f5efe6] hover:bg-white/5 hover:text-[#f5efe6]"
            >
              <span className="[font-family:'Inter',Helvetica] text-center text-[14.5px] font-medium leading-normal tracking-[0] text-[#f5efe6]">
                {ctaContent.secondaryAction.label}
              </span>
            </Button>
          </nav>
        </CardContent>
      </Card>
    </section>
  );
};
