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
    <section className="w-full px-2 py-8 sm:px-6 lg:px-10">
      <div className="mx-auto w-full max-w-[1200px]">
        <Card className="relative overflow-hidden rounded-3xl border-0 bg-transparent shadow-none">
          <CardContent className="relative flex w-full flex-col items-start gap-3 overflow-hidden rounded-3xl p-6 sm:gap-[15.2px] sm:p-10 lg:p-20 [background:linear-gradient(157deg,rgba(89,31,151,1)_0%,rgba(45,2,85,1)_100%)]">
            <div className="pointer-events-none absolute inset-y-[-10%] right-[-5%] w-[60%] [background:radial-gradient(70.71%_70.71%_at_50%_50%,rgba(189,140,255,0.50)_0%,rgba(189,140,255,0.00)_70%)]"
            style={{ right: "-116px", top: "-207.743px", width: "696px", height: "695.575px" }} />
            <div className="relative inline-flex items-center gap-2 rounded-[999px] border border-solid border-[#ffffff2e] bg-[#ffffff1f] px-3.5 pb-[7.69px] pt-[7.5px]">
              <span className="h-1.5 w-1.5 rounded-[3px] bg-white" />
              <span className="whitespace-nowrap [font-family:'Montserrat',Helvetica] text-[9px] font-semibold leading-[19.2px] tracking-[1.68px] text-white">
                BUILD YOUR TEAM IN DUBAI &amp; THE UAE
              </span>
            </div>
            <header className="relative flex w-full flex-col items-start px-0 pb-0 pt-[1.74px] lg:max-w-[520.36px]">
              <h2 className="mt-[-1px] [font-family:'Satoshi-Bold',Helvetica] text-[30px] font-bold leading-[1.1] tracking-[-0.6px] text-white sm:text-[36px] sm:tracking-[-0.72px] md:text-[40px] lg:text-[46px] lg:leading-[49.7px] lg:tracking-[-0.92px]">
                <span className="inline xl:block">Turn your brand story</span>{" "}
                <span className="inline xl:block">into measurable growth.</span>
              </h2>
            </header>
            <div className="relative w-full lg:max-w-[697.73px]">
              <p className="[font-family:'Montserrat',Helvetica] text-[13px] font-normal leading-[1.6] tracking-[0] text-[#ffffffd1] sm:text-[15px] sm:leading-[24px] lg:text-[17px] lg:leading-[27.2px]">
                Schedule a free consultation with our production specialists and
                learn how cinematic video content can enhance your brand.
              </p>
            </div>
            <nav className="flex w-full flex-col gap-3 pt-1 sm:w-auto sm:flex-row sm:items-center sm:gap-4 sm:pt-0">
              {ctaButtons.map((button) =>
                button.variant === "primary" ? (
                  <Button
                    key={button.label}
                    type="button"
                    className="h-12 w-full justify-between rounded-[999px] bg-white py-3.5 pl-[22px] pr-2 text-[#14101f] hover:bg-white/95 sm:w-auto sm:justify-start"
                  >
                    <span className="inline-flex flex-1 items-center justify-center pl-3.5 sm:flex-none sm:justify-start">
                      <span className="[font-family:'Inter',Helvetica] text-[13.5px] font-medium leading-none tracking-[0] text-[#14101f] sm:text-[14.5px]">
                        {button.label}
                      </span>
                    </span>
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-[18px] bg-[#3a0d8c]">
                      <img
                        className="h-4 w-4"
                        alt="Component"
                        src="https://c.animaapp.com/mpccdn8iGwnAdb/img/component-2.svg"
                      />
                    </span>
                  </Button>
                ) : (
                  <Button
                    key={button.label}
                    type="button"
                    variant="ghost"
                    className="h-12 w-full rounded-[999px] border border-solid border-[#f5efe629] px-[22px] py-3.5 [font-family:'Inter',Helvetica] text-[13.5px] font-medium tracking-[0] text-[#f5efe6] hover:bg-white/5 hover:text-[#f5efe6] sm:w-auto sm:text-[14.5px]"
                  >
                    {button.label}
                  </Button>
                ),
              )}
            </nav>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
