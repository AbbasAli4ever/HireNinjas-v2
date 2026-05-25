import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ctaButtons = [
  {
    label: "Book a Free Consultation",
    variant: "primary" as const,
  },
  {
    label: "View Packages",
    variant: "secondary" as const,
  },
];

export const ConsultationCtaSection = (): JSX.Element => {
  return (
    <section className="relative mt-[70px] w-full px-4 sm:px-6 lg:px-[140px]">
      <Card className="relative w-full overflow-hidden rounded-[24px] border-0 bg-transparent shadow-none">
        <CardContent className="relative flex flex-col items-start gap-[15.1px] overflow-hidden rounded-[24px] bg-[radial-gradient(50%_50%_at_100%_0%,rgba(189,140,255,0.6)_0%,rgba(189,140,255,0)_60%),linear-gradient(157deg,rgba(89,31,151,1)_0%,rgba(45,2,85,1)_100%)] px-6 py-10 sm:px-10 sm:py-14 lg:px-20 lg:py-20">
          <div className="pointer-events-none absolute inset-y-[-30%] right-[-8%] w-[62%] blur-[10px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(189,140,255,0.5)_0%,rgba(189,140,255,0)_70%)]" />
          <div className="relative inline-flex items-center gap-2 rounded-[999px] border border-solid border-[#ffffff2e] bg-[#ffffff1f] px-3.5 pb-[7.69px] pt-[7.5px]">
            <span className="h-1.5 w-1.5 rounded-[3px] bg-white" />
            <span className="[font-family:'Montserrat',Helvetica] text-xs font-semibold leading-[19.2px] tracking-[1.68px] text-white whitespace-nowrap">
              LET&#39;S TALK
            </span>
          </div>
          <header className="relative flex max-w-[460.37px] flex-col items-start pt-[1.73px]">
            <h2 className="[font-family:'Satoshi-Bold',Helvetica] text-[36px] font-bold leading-[42px] tracking-[-0.72px] text-white sm:text-[42px] sm:leading-[46px] lg:text-[46px] lg:leading-[49.7px] lg:tracking-[-0.92px]">
              Pick a plan.
              <br />
              Start growing.
            </h2>
          </header>
          <div className="relative max-w-[697.75px]">
            <p className="[font-family:'Montserrat',Helvetica] text-[15px] font-normal leading-[24px] tracking-[0] text-[#ffffffd1] sm:text-[16px] sm:leading-[26px] lg:text-[17px] lg:leading-[27.2px]">
              Transparent pricing, dedicated strategy, no hidden fees. Tell us
              about your goals
              <br />
              and we&#39;ll match you to the right plan within 48 hours.
            </p>
          </div>
          <nav
            aria-label="Consultation actions"
            className="relative flex flex-col items-start gap-3 sm:flex-row sm:items-start sm:gap-6"
          >
            {ctaButtons.map((button) =>
              button.variant === "primary" ? (
                <Button
                  key={button.label}
                  type="button"
                  className="h-auto rounded-[999px] bg-white py-2 pl-[22px] pr-2 text-[#14101f] hover:bg-white/95"
                >
                  <span className="inline-flex items-center gap-3">
                    <span className="inline-flex flex-col items-center pl-3.5">
                      <span className="[font-family:'Inter',Helvetica] text-center text-[14.5px] font-medium leading-normal tracking-[0] text-[#14101f]">
                        {button.label}
                      </span>
                    </span>
                    <span className="grid h-9 w-9 place-items-center rounded-[18px] bg-[#3a0d8c]">
                      <img
                        className="h-4 w-4"
                        alt="Component"
                        src="https://c.animaapp.com/mpl6davuOYe2Kc/img/component-2.svg"
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