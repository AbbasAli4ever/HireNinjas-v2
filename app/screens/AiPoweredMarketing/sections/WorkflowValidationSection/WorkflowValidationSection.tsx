import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ctaButtons = [
  {
    label: "Book consultation",
    variant: "primary" as const,
  },
  {
    label: "Review Services",
    variant: "secondary" as const,
  },
];

export const WorkflowValidationSection = (): JSX.Element => {
  return (
    <section className="relative w-full px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-[1200px]">
        <Card className="relative overflow-hidden rounded-3xl border-0 bg-transparent shadow-none [background:radial-gradient(50%_50%_at_100%_0%,rgba(189,140,255,0.6)_0%,rgba(189,140,255,0)_60%),linear-gradient(157deg,rgba(89,31,151,1)_0%,rgba(45,2,85,1)_100%)]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-1/2 h-[695px] w-[60%] -translate-y-[62%] blur-[10px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(189,140,255,0.5)_0%,rgba(189,140,255,0)_70%)]"
          />
          <CardContent className="relative z-10 flex flex-col items-start gap-8 p-8 sm:p-10 lg:p-20">
            <div className="inline-flex items-center gap-2 rounded-[999px] border border-solid border-[#ffffff2e] bg-[#ffffff1f] px-3.5 pb-[7.69px] pt-[7.5px]">
              <span className="h-1.5 w-1.5 rounded-[3px] bg-white" />
              <span className="[font-family:'Montserrat',Helvetica] text-xs font-semibold leading-[19.2px] tracking-[1.68px] text-white whitespace-nowrap">
                LET&apos;S TALK
              </span>
            </div>
            <header className="max-w-[460.37px]">
              <h2 className="[font-family:'Satoshi-Bold',Helvetica] text-[36px] font-bold leading-[1.08] tracking-[-0.92px] text-white sm:text-[42px] lg:text-[46px]">
                Future-proof your growth systems.
              </h2>
            </header>
            <div className="max-w-[697.75px]">
              <p className="[font-family:'Montserrat',Helvetica] text-[15px] font-normal leading-[27.2px] tracking-[0] text-[#ffffffd1] sm:text-[17px]">
                Take advantage of our specialists and discover how AI-powered
                automation can enhance your marketing performance across Dubai
                and the UAE.
              </p>
            </div>
            <nav
              aria-label="Workflow validation actions"
              className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6"
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
                        <span className="[font-family:'Inter',Helvetica] text-center text-[14.5px] font-medium leading-none tracking-[0] text-[#14101f]">
                          {button.label}
                        </span>
                      </span>
                      <span className="grid h-9 w-9 place-items-center rounded-[18px] bg-[#3a0d8c]">
                        <img
                          className="h-4 w-4"
                          alt="Component"
                          src="https://c.animaapp.com/mpds11xn92TSuJ/img/component-2.svg"
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
            </nav>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
