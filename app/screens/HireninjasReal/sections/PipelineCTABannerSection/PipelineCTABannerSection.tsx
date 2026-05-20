import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ctaButtons = [
  {
    label: "Get a Free Strategy Call",
    variant: "primary" as const,
  },
  {
    label: "Review services",
    variant: "secondary" as const,
  },
];

export const PipelineCTABannerSection = (): JSX.Element => {
  return (
    <section className="w-full px-6 py-0 md:px-10 xl:px-[120px]">
      <Card className="relative w-full overflow-hidden rounded-3xl border-0 bg-transparent shadow-none">
        <div className="absolute inset-0 rounded-3xl [background:radial-gradient(50%_50%_at_100%_0%,rgba(189,140,255,0.6)_0%,rgba(189,140,255,0)_60%),linear-gradient(157deg,rgba(89,31,151,1)_0%,rgba(45,2,85,1)_100%)]" />
        <div className="absolute right-0 top-[-80px] h-[360px] w-[60%] blur-[10px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(189,140,255,0.5)_0%,rgba(189,140,255,0)_70%)]" />
        <CardContent className="relative flex flex-col items-start gap-[15px] px-6 py-10 sm:px-8 sm:py-12 lg:px-20 lg:py-20">
          <div className="inline-flex items-center gap-2.5 rounded-[999px] border border-solid border-[#ffffff29] px-3.5 py-[7px]">
            <span className="flex h-1.5 w-1.5 items-start justify-center rounded-[3px] bg-[#6ce5b1]">
              <span className="h-1.5 w-1.5 rounded-[3px] bg-[#ffffff01] shadow-[0px_0px_0px_4px_#6ce5b12e]" />
            </span>
            <p className="[font-family:'Inter',Helvetica] text-xs font-normal leading-[18px] tracking-[1.68px] text-white">
              GET A FREE STRATEGY CALL TODAY
            </p>
          </div>
          <header className="max-w-[460.37px] pt-[1.74px]">
            <h2 className="[font-family:'Satoshi-Bold',Helvetica] text-[36px] font-bold leading-[1.08] tracking-[-0.92px] text-white sm:text-[40px] lg:text-[46px]">
              Pipeline that
              <br />
              fills itself.
            </h2>
          </header>
          <div className="max-w-[697.75px]">
            <p className="[font-family:'Montserrat',Helvetica] text-[15px] font-normal leading-[27.2px] tracking-[0] text-white-82 sm:text-[17px]">
              Speak with our real estate growth team about your next launch,
              investor
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              campaign or ready-property pipeline across Dubai and Abu Dhabi.
            </p>
          </div>
          <nav
            aria-label="Pipeline call to action"
            className="flex flex-col items-start gap-4 pt-1 sm:flex-row sm:items-center sm:gap-6"
          >
            {ctaButtons.map((button) =>
              button.variant === "primary" ? (
                <Button
                  key={button.label}
                  type="button"
                  className="h-auto rounded-[999px] bg-white px-2 py-2 pl-[22px] pr-2 text-[#14101f] hover:bg-white/95"
                >
                  <span className="inline-flex items-center gap-3">
                    <span className="inline-flex flex-col items-center pl-3.5">
                      <span className="[font-family:'Inter',Helvetica] text-center text-[14.5px] font-medium leading-normal tracking-[0] text-[#14101f]">
                        {button.label}
                      </span>
                    </span>
                    <span className="grid h-9 w-9 grid-cols-[36px] grid-rows-[36px] rounded-[18px] bg-[#3a0d8c]">
                      <img
                        className="col-[1_/_2] row-[1_/_2] h-4 w-4 place-self-center"
                        alt="Component"
                        src="https://c.animaapp.com/mpdwd6sgQyTogJ/img/component-2.svg"
                      />
                    </span>
                  </span>
                </Button>
              ) : (
                <Button
                  key={button.label}
                  type="button"
                  variant="outline"
                  className="h-12 rounded-[999px] border-[#f5efe629] bg-transparent px-[22px] py-3.5 [font-family:'Inter',Helvetica] text-[14.5px] font-medium leading-normal tracking-[0] text-[#f5efe6] hover:bg-white/5 hover:text-[#f5efe6]"
                >
                  {button.label}
                </Button>
              ),
            )}
          </nav>
        </CardContent>
      </Card>
    </section>
  );
};