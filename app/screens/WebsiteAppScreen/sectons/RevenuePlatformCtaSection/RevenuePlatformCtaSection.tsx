import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ctaButtons = [
  {
    label: "Book consultation",
    variant: "primary" as const,
  },
  {
    label: "Review services",
    variant: "secondary" as const,
  },
];

export const RevenuePlatformCtaSection = (): JSX.Element => {
  return (
    <section className="w-full px-4 py-12 sm:px-8 sm:py-16 md:px-12 lg:px-16 lg:py-20 xl:py-[80px]">
      <Card className="relative w-full overflow-hidden rounded-3xl border-0 bg-transparent shadow-none">
        <CardContent className="relative flex w-full flex-col items-start gap-4 sm:gap-[15.2px] overflow-hidden rounded-3xl p-6 sm:p-10 md:p-12 lg:p-14 xl:p-20 [background:linear-gradient(157deg,rgba(89,31,151,1)_0%,rgba(45,2,85,1)_100%)]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-1/2 h-[671px] w-[60%] blur-[10px] [background:radial-gradient(70.71%_70.71%_at_50%_50%,rgba(189,140,255,0.50)_0%,rgba(189,140,255,0.00)_70%)]"
            style={{ right: "-116px", top: "-207.743px", width: "696px", height: "695.575px" }}
          />
          <Badge className="relative inline-flex h-auto items-center gap-2 rounded-[999px] border border-solid border-[#ffffff2e] bg-[#ffffff1f] px-3.5 pb-[7.69px] pt-[7.5px] text-white hover:bg-[#ffffff1f]">
            <span className="h-1.5 w-1.5 rounded-[3px] bg-white" />
            <span className="[font-family:'Montserrat',Helvetica] text-[10px] sm:text-xs font-semibold leading-[19.2px] tracking-[1.68px] text-white">
              LET&#39;S TALK
            </span>
          </Badge>
          <header className="relative flex w-full max-w-[460.37px] flex-col items-start px-0 pb-0 pt-[1.62px]">
            <h2 className="mt-[-1.00px] [font-family:'Satoshi-Bold',Helvetica] text-[28px] font-bold leading-[1.15] tracking-[-0.8px] text-white sm:text-[36px] sm:leading-[42px] sm:tracking-[-0.92px] md:text-[40px] md:leading-[45px] lg:text-[46px] lg:leading-[49.7px]">
              <span className="xl:block">Build a platform </span>
              <span className="xl:block">that drives revenue.</span>
            </h2>
          </header>
          <div className="relative flex w-full max-w-[697.75px] flex-col items-start">
            <p className="mt-[-1.00px] [font-family:'Montserrat',Helvetica] text-sm sm:text-[15px] md:text-base lg:text-[17px] font-normal leading-[1.6] lg:leading-[27.2px] tracking-[0] text-[#ffffffd1]">
              <span className="xl:block">Meet our development specialists for a complimentary consultation to learn how </span>
              <span className="xl:block">a high-performance website or mobile application can enhance your brand </span>
              <span className="xl:block">presence throughout Dubai and the UAE.</span>
            </p>
          </div>
          <div className="relative flex w-full flex-col items-stretch gap-4 sm:w-auto sm:flex-row sm:flex-wrap sm:items-start sm:gap-6">
            {ctaButtons.map((button) =>
              button.variant === "primary" ? (
                <Button
                  key={button.label}
                  type="button"
                  className="relative h-14 sm:h-auto w-full sm:w-auto min-h-12 rounded-[999px] bg-white py-2 pl-[22px] pr-2 text-[#14101f] hover:bg-white"
                >
                  <span className="relative flex w-full sm:w-auto items-center justify-center sm:justify-start gap-3">
                    <span className="[font-family:'Inter',Helvetica] text-[14.5px] font-medium leading-[normal] tracking-[0] text-[#14101f]">
                      {button.label}
                    </span>
                    <span className="grid h-9 w-9 place-items-center rounded-[18px] bg-[#3a0d8c] absolute right-0 sm:static">
                      <img
                        className="h-4 w-4"
                        alt="Component"
                        src="/figmaAssets/arrow-white.svg"
                      />
                    </span>
                  </span>
                </Button>
              ) : (
                <Button
                  key={button.label}
                  type="button"
                  variant="outline"
                  className="h-12 sm:h-auto w-full sm:w-auto min-h-12 rounded-[999px] border border-solid border-[#f5efe629] bg-transparent px-[22px] py-3.5 text-[#f5efe6] hover:bg-transparent hover:text-[#f5efe6]"
                >
                  <span className="[font-family:'Inter',Helvetica] text-[14.5px] font-medium leading-[normal] tracking-[0] text-[#f5efe6]">
                    {button.label}
                  </span>
                </Button>
              ),
            )}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
