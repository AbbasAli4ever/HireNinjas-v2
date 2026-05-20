import { ArrowRightIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
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

export const EnrollmentCtaSection = (): JSX.Element => {
  return (
    <section className="relative w-full px-6 py-0 md:px-10 lg:px-[120px]">
      <Card className="relative w-full overflow-hidden rounded-3xl border-0 bg-transparent shadow-none">
        <CardContent className="relative flex flex-col items-start gap-[15px] overflow-hidden rounded-3xl px-7 py-10 sm:px-10 sm:py-14 lg:px-20 lg:py-20 [background:radial-gradient(50%_50%_at_100%_0%,rgba(189,140,255,0.6)_0%,rgba(189,140,255,0)_60%),linear-gradient(157deg,rgba(89,31,151,1)_0%,rgba(45,2,85,1)_100%)]">
          <div className="pointer-events-none absolute inset-y-[-18%] right-[-8%] w-[62%] blur-[12px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(189,140,255,0.5)_0%,rgba(189,140,255,0)_70%)]" />
          <header className="relative z-10 flex max-w-full flex-col items-start gap-[15px]">
            <Badge className="h-auto rounded-[999px] border border-[#ffffff29] bg-transparent px-3.5 py-[7px] text-white hover:bg-transparent">
              <span className="mr-2.5 flex h-1.5 w-1.5 items-center justify-center rounded-[3px] bg-[#6ce5b1]">
                <span className="h-1.5 w-1.5 rounded-[3px] bg-[#ffffff01] shadow-[0px_0px_0px_4px_#6ce5b12e]" />
              </span>
              <span className="[font-family:'Inter',Helvetica] text-xs font-normal tracking-[1.68px] leading-[18px]">
                GET A FREE STRATEGY CALL
              </span>
            </Badge>
            <div className="max-w-[460.37px] pt-[1.74px]">
              <h2 className="m-0 [font-family:'Satoshi-Bold',Helvetica] text-[36px] font-bold leading-[1.08] tracking-[-0.92px] text-white sm:text-[42px] lg:text-[46px]">
                Fill seats with
                <br />
                confidence.
              </h2>
            </div>
            <div className="max-w-[697.75px]">
              <p className="m-0 [font-family:'Montserrat',Helvetica] text-[15px] font-normal leading-[27.2px] tracking-[0] text-white-82 sm:text-[17px]">
                HireNinjas specialize in digital marketing for schools &amp;
                universities in Dubai &amp; Abu Dhabi, such as enrollment
                campaigns, student recruitment &amp; branding.
              </p>
            </div>
          </header>
          <nav className="relative z-10 flex w-full flex-wrap items-center gap-x-3 gap-y-3 pt-[12.89px]">
            {ctaButtons.map((button) =>
              button.variant === "primary" ? (
                <Button
                  key={button.label}
                  type="button"
                  className="h-auto rounded-[999px] border border-transparent bg-white px-[22px] py-3.5 text-daisy-bush shadow-[0px_18px_36px_-16px_#00000066] hover:bg-white/95"
                >
                  <span className="font-montserrat-semibold text-[length:var(--montserrat-semibold-font-size)] font-[number:var(--montserrat-semibold-font-weight)] leading-[var(--montserrat-semibold-line-height)] tracking-[var(--montserrat-semibold-letter-spacing)] [font-style:var(--montserrat-semibold-font-style)]">
                    {button.label}
                  </span>
                  <ArrowRightIcon className="ml-0.5 h-4 w-4 shrink-0" />
                </Button>
              ) : (
                <Button
                  key={button.label}
                  type="button"
                  variant="outline"
                  className="h-auto rounded-[999px] border-[#ffffff4c] bg-transparent px-[22px] py-3.5 text-white hover:bg-white/5 hover:text-white"
                >
                  <span className="font-montserrat-semibold text-[length:var(--montserrat-semibold-font-size)] font-[number:var(--montserrat-semibold-font-weight)] leading-[var(--montserrat-semibold-line-height)] tracking-[var(--montserrat-semibold-letter-spacing)] [font-style:var(--montserrat-semibold-font-style)]">
                    {button.label}
                  </span>
                </Button>
              ),
            )}
          </nav>
        </CardContent>
      </Card>
    </section>
  );
};
