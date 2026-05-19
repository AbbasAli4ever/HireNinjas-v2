import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ctaButtons = [
  {
    label: "Book consultation",
    variant: "primary" as const,
  },
  {
    label: "View Pricing",
    variant: "secondary" as const,
  },
];

export const GrowthCTASection = (): JSX.Element => {
  return (
    <section className="w-full px-4 py-8 sm:px-6 lg:px-10">
      <div className="mx-auto w-full max-w-[1200px]">
        <Card className="relative overflow-hidden rounded-3xl border-0 bg-transparent shadow-none">
          <CardContent className="relative flex w-full flex-col items-start gap-[15.2px] overflow-hidden rounded-3xl p-8 sm:p-12 lg:p-20 [background:linear-gradient(157deg,rgba(89,31,151,1)_0%,rgba(45,2,85,1)_100%)]">
            <div className="pointer-events-none absolute inset-y-[-10%] right-[-5%] w-[60%] [background:radial-gradient(70.71%_70.71%_at_50%_50%,rgba(189,140,255,0.50)_0%,rgba(189,140,255,0.00)_70%)]"
            style={{ right: "-116px", top: "-207.743px", width: "696px", height: "695.575px" }} />
            <div className="relative inline-flex items-center gap-2 rounded-[999px] border border-solid border-[#ffffff2e] bg-[#ffffff1f] px-3.5 pb-[7.69px] pt-[7.5px]">
              <span className="h-1.5 w-1.5 rounded-[3px] bg-white" />
              <span className="whitespace-nowrap [font-family:'Montserrat',Helvetica] text-xs font-semibold leading-[19.2px] tracking-[1.68px] text-white">
                BUILD YOUR TEAM IN DUBAI &amp; THE UAE
              </span>
            </div>
            <header className="relative flex max-w-[520.36px] flex-col items-start px-0 pb-0 pt-[1.74px]">
              <h2 className="mt-[-1px] [font-family:'Satoshi-Bold',Helvetica] text-[34px] font-bold leading-[1.08] tracking-[-0.92px] text-white sm:text-[40px] lg:text-[46px] lg:leading-[49.7px]">
                Turn your brand story <br />
                into measurable growth.
              </h2>
            </header>
            <div className="relative max-w-[697.73px]">
              <p className="[font-family:'Montserrat',Helvetica] text-[15px] font-normal leading-[24px] tracking-[0] text-[#ffffffd1] sm:text-[16px] lg:text-[17px] lg:leading-[27.2px]">
                Schedule a free consultation with our production specialists and
                learn how cinematic video content can enhance your brand.
              </p>
            </div>
            <div className="relative flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
              {ctaButtons.map((button) =>
                button.variant === "primary" ? (
                  <Button
                    key={button.label}
                    type="button"
                    className="h-auto rounded-[999px] bg-white py-2 pl-[22px] pr-2 text-[#14101f] hover:bg-white/95"
                  >
                    <span className="flex items-center gap-3">
                      <span className="inline-flex items-center pl-3.5 [font-family:'Inter',Helvetica] text-[14.5px] font-medium leading-none tracking-[0] text-[#14101f]">
                        {button.label}
                      </span>
                      <span className="grid h-9 w-9 place-items-center rounded-[18px] bg-[#3a0d8c]">
                        <img
                          className="h-4 w-4"
                          alt="Component"
                          src="https://c.animaapp.com/mpccdn8iGwnAdb/img/component-2.svg"
                        />
                      </span>
                    </span>
                  </Button>
                ) : (
                  <Button
                    key={button.label}
                    type="button"
                    variant="ghost"
                    className="h-12 rounded-[999px] border border-solid border-[#f5efe629] px-[22px] py-3.5 [font-family:'Inter',Helvetica] text-[14.5px] font-medium tracking-[0] text-[#f5efe6] hover:bg-white/5 hover:text-[#f5efe6]"
                  >
                    {button.label}
                  </Button>
                ),
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
