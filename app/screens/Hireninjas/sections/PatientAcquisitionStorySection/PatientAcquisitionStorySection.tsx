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

export const PatientAcquisitionStorySection = (): JSX.Element => {
  return (
    <section className="w-full px-6 py-10 md:px-10 lg:px-[120px]">
      <Card className="relative w-full overflow-hidden rounded-3xl border-0 bg-transparent shadow-none">
        <CardContent className="relative flex flex-col items-start gap-[15.2px] overflow-hidden rounded-3xl p-8 sm:p-10 lg:p-20 [background:radial-gradient(50%_50%_at_100%_0%,rgba(189,140,255,0.6)_0%,rgba(189,140,255,0)_60%),linear-gradient(156deg,rgba(89,31,151,1)_0%,rgba(45,2,85,1)_100%)]">
          <div className="pointer-events-none absolute inset-y-[-18%] right-[-6%] w-[62%] blur-[10px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(189,140,255,0.5)_0%,rgba(189,140,255,0)_70%)]" />
          <div className="relative inline-flex items-center gap-2.5 rounded-[999px] border border-solid border-[#ffffff29] px-3.5 py-[7px]">
            <span className="flex h-1.5 w-1.5 items-center justify-center rounded-[3px] bg-[#6ce5b1]">
              <span className="h-1.5 w-1.5 rounded-[3px] bg-[#ffffff01] shadow-[0px_0px_0px_4px_#6ce5b12e]" />
            </span>
            <span className="[font-family:'Inter',Helvetica] text-xs font-normal leading-[18px] tracking-[1.68px] text-white">
              GET A FREE STRATEGY CALL
            </span>
          </div>
          <header className="relative max-w-[460.37px] pt-[1.63px]">
            <h2 className="mt-[-1px] [font-family:'Satoshi-Bold',Helvetica] text-[38px] font-bold leading-[42px] tracking-[-0.92px] text-white sm:text-[42px] sm:leading-[46px] lg:text-[46px] lg:leading-[49.7px]">
              Compliant. Trusted.
              <br />
              Always booking.
            </h2>
          </header>
          <div className="relative max-w-[697.75px]">
            <p className="mt-[-1px] [font-family:'Montserrat',Helvetica] text-[15px] font-normal leading-[24px] tracking-[0] text-white-82 sm:text-[16px] sm:leading-[26px] lg:text-[17px] lg:leading-[27.2px]">
              HireNinjas specialize in compliant patient acquisition campaigns
              for healthcare
              <br className="hidden md:block" />
              providers &amp; clinics in Dubai &amp; Abu Dhabi, including
              digital marketing for patient
              <br className="hidden md:block" />
              acquisition campaigns. Get your free strategy consultation today.
            </p>
          </div>
          <nav
            aria-label="Patient acquisition story actions"
            className="relative flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6"
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
                      <span className="[font-family:'Inter',Helvetica] text-center text-[14.5px] font-medium leading-none tracking-[0] text-[#14101f]">
                        {button.label}
                      </span>
                    </span>
                    <span className="grid h-9 w-9 place-items-center rounded-[18px] bg-[#3a0d8c]">
                      <img
                        className="h-4 w-4"
                        alt="Component"
                        src="https://c.animaapp.com/mpdygeiw3T2LLS/img/component-2.svg"
                      />
                    </span>
                  </span>
                </Button>
              ) : (
                <Button
                  key={button.label}
                  type="button"
                  variant="outline"
                  className="h-12 rounded-[999px] border-[#f5efe629] bg-transparent px-[22px] py-3.5 [font-family:'Inter',Helvetica] text-[14.5px] font-medium leading-none tracking-[0] text-[#f5efe6] hover:bg-white/5 hover:text-[#f5efe6]"
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
