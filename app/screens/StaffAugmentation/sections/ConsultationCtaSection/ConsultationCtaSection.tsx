import { ArrowRightIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ctaButtons = [
  {
    label: "Book a Free Consultation",
    variant: "primary" as const,
  },
  {
    label: "Review process",
    variant: "secondary" as const,
  },
];

export const ConsultationCtaSection = (): JSX.Element => {
  return (
    <section className="relative my-[96.5px] w-full px-4 sm:px-6 lg:px-10">
      <Card className="relative w-full max-w-[1150px] mx-auto overflow-hidden rounded-3xl border-0 bg-transparent shadow-none">
        <div className="absolute inset-0 rounded-3xl [background:radial-gradient(50%_50%_at_100%_0%,rgba(189,140,255,0.6)_0%,rgba(189,140,255,0)_60%),linear-gradient(157deg,rgba(89,31,151,1)_0%,rgba(45,2,85,1)_100%)]" />
        <div className="absolute right-[-8%] top-1/2 h-[671px] w-[60%] -translate-y-1/2 blur-[10px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(189,140,255,0.5)_0%,rgba(189,140,255,0)_70%)]" />
        <CardContent className="relative z-10 flex flex-col items-start gap-[15.1px] px-6 py-10 sm:px-10 sm:py-14 lg:p-20">
          <Badge className="h-auto rounded-[999px] border border-[#ffffff2e] bg-white-12 px-3.5 pb-[7.69px] pt-[7.5px] font-montserrat-semibold-upper text-[length:var(--montserrat-semibold-upper-font-size)] font-[number:var(--montserrat-semibold-upper-font-weight)] leading-[var(--montserrat-semibold-upper-line-height)] tracking-[var(--montserrat-semibold-upper-letter-spacing)] text-white hover:bg-white-12 [font-style:var(--montserrat-semibold-upper-font-style)]">
            <span className="mr-2 inline-block h-1.5 w-1.5 rounded-[3px] bg-white" />
            BUILD YOUR TEAM IN DUBAI &amp; THE UAE
          </Badge>
          <header className="max-w-[460.37px] pt-[1.74px]">
            <h2 className="mt-[-1px] [font-family:'Satoshi-Bold',Helvetica] text-[36px] font-bold leading-[42px] tracking-[-0.92px] text-white sm:text-[42px] sm:leading-[46px] lg:text-[46px] lg:leading-[49.7px]">
              Pre-vetted talent. In
              <br />
              days, not months.
            </h2>
          </header>
          <div className="max-w-[697.75px]">
            <p className="mt-[-1px] font-montserrat-regular text-[length:var(--montserrat-regular-font-size)] font-[number:var(--montserrat-regular-font-weight)] leading-[var(--montserrat-regular-line-height)] tracking-[var(--montserrat-regular-letter-spacing)] text-white-82 [font-style:var(--montserrat-regular-font-style)]">
              Hire pre-vetted professionals across Dubai and Abu Dhabi in days,
              not months,
              <br className="hidden sm:block" />
              with compliance, payroll, and onboarding fully managed by
              HireNinjas.
            </p>
          </div>
          <nav
            aria-label="Consultation call to action"
            className="flex w-full flex-wrap items-center gap-x-3 gap-y-3 pt-[12.89px]"
          >
            {ctaButtons.map((button) =>
              button.variant === "primary" ? (
                <Button
                  key={button.label}
                  type="button"
                  className="h-auto rounded-[999px] border border-transparent bg-white px-[22px] py-3.5 font-montserrat-semibold text-[length:var(--montserrat-semibold-font-size)] font-[number:var(--montserrat-semibold-font-weight)] leading-[var(--montserrat-semibold-line-height)] tracking-[var(--montserrat-semibold-letter-spacing)] text-daisy-bush shadow-[0px_18px_36px_-16px_#00000066] hover:bg-white/95 [font-style:var(--montserrat-semibold-font-style)]"
                >
                  <span>{button.label}</span>
                  <ArrowRightIcon className="ml-0.5 h-4 w-4 shrink-0 text-daisy-bush" />
                </Button>
              ) : (
                <Button
                  key={button.label}
                  type="button"
                  variant="outline"
                  className="h-auto rounded-[999px] border-[#ffffff4c] bg-transparent px-[22px] py-3.5 font-montserrat-semibold text-[length:var(--montserrat-semibold-font-size)] font-[number:var(--montserrat-semibold-font-weight)] leading-[var(--montserrat-semibold-line-height)] tracking-[var(--montserrat-semibold-letter-spacing)] text-white hover:bg-white/10 hover:text-white [font-style:var(--montserrat-semibold-font-style)]"
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
