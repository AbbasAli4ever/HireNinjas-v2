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
    label: "Review services",
    variant: "secondary" as const,
  },
];

export const GrowthOpportunityCtaSection = (): JSX.Element => {
  return (
    <section className="w-full px-4 pt-0 pb-10 sm:px-6 sm:pb-14 lg:px-10 lg:pb-[100px]">
      <div className="mx-auto w-full max-w-[1200px]">
        <Card className="relative overflow-hidden rounded-3xl border-0 bg-transparent shadow-none">
          <CardContent className="relative flex w-full flex-col items-start gap-3 overflow-hidden rounded-3xl p-6 sm:gap-[15.2px] sm:p-10 lg:p-20 [background:linear-gradient(157deg,rgba(89,31,151,1)_0%,rgba(45,2,85,1)_100%)]">
            <div className="pointer-events-none absolute inset-y-[-10%] right-[-5%] w-[60%] [background:radial-gradient(70.71%_70.71%_at_50%_50%,rgba(189,140,255,0.50)_0%,rgba(189,140,255,0.00)_70%)]"
            style={{ right: "-116px", top: "-207.743px", width: "696px", height: "695.575px" }} />
            <Badge className="relative inline-flex h-auto items-center gap-2 rounded-[999px] border border-solid border-[#ffffff2e] bg-[#ffffff1f] px-3.5 pb-[7.69px] pt-[7.5px] hover:bg-[#ffffff1f]">
              <span className="h-1.5 w-1.5 rounded-[3px] bg-white" />
              <span className="[font-family:'Montserrat',Helvetica] text-[10px] font-semibold leading-[19.2px] tracking-[1.2px] text-white sm:text-xs sm:tracking-[1.68px]">
                LET&apos;S TALK
              </span>
            </Badge>
            <header className="relative flex w-full flex-col items-start px-0 pb-0 pt-[1.47px] lg:max-w-[460.37px]">
              <h2 className="[font-family:'Satoshi-Bold',Helvetica] text-[30px] font-bold leading-[1.1] tracking-[-0.6px] text-white sm:text-[36px] sm:tracking-[-0.72px] md:text-[42px] lg:text-[46px] lg:tracking-[-0.92px]">
                Turn social
                <br />
                platforms into
                <br />
                measurable growth.
              </h2>
            </header>
            <div className="relative flex w-full flex-col items-start lg:max-w-[697.75px]">
              <p className="[font-family:'Montserrat',Helvetica] text-[13px] font-normal leading-[1.6] tracking-[0] text-[#ffffffd1] sm:text-[15px] sm:leading-[27.2px] lg:text-[17px]">
                Take advantage of a complimentary consultation with one of our social media experts, and discover how structured content and campaign strategy can expand your brand across Dubai and the UAE
              </p>
            </div>
            <nav
              aria-label="Growth opportunity actions"
              className="relative flex w-full flex-col gap-3 px-0 pb-0 pt-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-3 sm:gap-y-3 sm:pt-[12.8px]"
            >
              {ctaButtons.map((button) =>
                button.variant === "primary" ? (
                  <Button
                    key={button.label}
                    className="relative h-auto w-full justify-center rounded-[999px] border border-transparent bg-white px-[22px] py-3.5 text-[#591f97] shadow-[0px_18px_36px_-16px_#00000066] hover:bg-white/95 sm:w-auto"
                  >
                    <span className="[font-family:'Montserrat',Helvetica] text-[13px] font-semibold leading-6 tracking-[0] text-[#591f97] sm:text-[15px]">
                      {button.label}
                    </span>
                    <ArrowRightIcon className="h-4 w-4 text-[#591f97]" />
                  </Button>
                ) : (
                  <Button
                    key={button.label}
                    variant="outline"
                    className="h-auto w-full justify-center rounded-[999px] border border-solid border-[#ffffff4c] bg-transparent px-[22px] py-3.5 text-white hover:bg-white/10 hover:text-white sm:w-auto"
                  >
                    <span className="[font-family:'Montserrat',Helvetica] text-[13px] font-semibold leading-6 tracking-[0] text-white sm:text-[15px]">
                      {button.label}
                    </span>
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
