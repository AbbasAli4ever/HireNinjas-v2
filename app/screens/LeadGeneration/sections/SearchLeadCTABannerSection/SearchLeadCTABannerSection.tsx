import { Button } from "../../../../../components/ui/button";
import { Card, CardContent } from "../../../../../components/ui/card";
import { Badge } from "@/components/ui/badge";

const ctaButtons = [
  {
    label: "Book consultation",
    variant: "primary" as const,
    icon: "https://c.animaapp.com/mpaw8ml1N6JcQv/img/component-2.svg",
  },
  {
    label: "Review services",
    variant: "secondary" as const,
  },
];

export const SearchLeadCTABannerSection = (): JSX.Element => {
  return (
    <section className="w-full px-2 py-10 sm:px-6 sm:py-14 lg:px-10 lg:py-[60px]">
      <Card className="relative w-full overflow-hidden rounded-3xl border-0 bg-transparent shadow-none">
        <CardContent className="relative flex w-full flex-col items-start gap-3 overflow-hidden rounded-3xl p-6 sm:gap-[15.2px] sm:p-10 lg:p-20 [background:linear-gradient(157deg,rgba(89,31,151,1)_0%,rgba(45,2,85,1)_100%)]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-1/2 h-[671px] w-[60%] blur-[10px] [background:radial-gradient(70.71%_70.71%_at_50%_50%,rgba(189,140,255,0.50)_0%,rgba(189,140,255,0.00)_70%)]"
            style={{ right: "-116px", top: "-207.743px", width: "696px", height: "695.575px" }}
          />
          <Badge className="relative inline-flex h-auto items-center gap-2 rounded-[999px] border border-solid border-[#ffffff2e] bg-[#ffffff1f] px-3.5 pb-[7.69px] pt-[7.5px] text-white hover:bg-[#ffffff1f]">
            <span className="h-1.5 w-1.5 rounded-[3px] bg-white" />
            <span className="[font-family:'Montserrat',Helvetica] text-[10px] font-semibold leading-[19.2px] tracking-[1.2px] text-white sm:text-xs sm:tracking-[1.68px]">
              LET&#39;S TALK
            </span>
          </Badge>
          <header className="relative flex w-full flex-col items-start px-0 pb-0 pt-[1.62px] lg:max-w-[460.37px]">
            <h2 className="[font-family:'Satoshi-Bold',Helvetica] text-[32px] font-bold leading-[1.1] tracking-[-0.64px] text-white sm:text-[38px] sm:tracking-[-0.76px] lg:text-[46px] lg:leading-[49.7px] lg:tracking-[-0.92px]">
              More qualified
              <br />
              leads, from search.
            </h2>
          </header>
          <div className="relative flex w-full flex-col items-start lg:max-w-[697.75px]">
            <p className="[font-family:'Montserrat',Helvetica] text-[14px] font-normal leading-[1.6] tracking-[0] text-[#ffffffd1] sm:text-[15px] lg:text-[17px] lg:leading-[27.2px]">
              Get in touch with one of our SEO and PPC specialists and discover how search visibility improvements can produce more qualified leads across Dubai and UAE.
            </p>
          </div>
          <div className="relative flex w-full flex-col gap-3 pt-1 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-4">
            {ctaButtons.map((button) =>
              button.variant === "primary" ? (
                <Button
                  key={button.label}
                  type="button"
                  className="h-auto min-h-11 w-full justify-between rounded-[999px] bg-white py-1.5 pl-5 pr-2 text-[#14101f] hover:bg-white sm:w-auto sm:justify-start sm:min-h-12 sm:pl-[22px]"
                >
                  <span className="inline-flex flex-1 items-center justify-center pl-2.5 pr-0 sm:flex-none sm:justify-start sm:pl-3.5">
                    <span className="[font-family:'Inter',Helvetica] text-[13px] font-medium leading-[normal] tracking-[0] text-[#14101f] sm:text-[14.5px]">
                      {button.label}
                    </span>
                  </span>
                  <span className="grid h-8 w-8 place-items-center rounded-[18px] bg-[#3a0d8c] sm:h-9 sm:w-9">
                    <img
                      className="h-4 w-4"
                      alt="Component"
                      src="https://c.animaapp.com/mp5dxvs5vBeNIx/img/component-2.svg"
                    />
                  </span>
                </Button>
              ) : (
                <Button
                  key={button.label}
                  type="button"
                  variant="outline"
                  className="h-auto min-h-11 w-full rounded-[999px] border border-solid border-[#f5efe629] bg-transparent px-5 py-3 text-[#f5efe6] hover:bg-transparent hover:text-[#f5efe6] sm:w-auto sm:min-h-12 sm:px-[22px] sm:py-3.5"
                >
                  <span className="[font-family:'Inter',Helvetica] text-[13px] font-medium leading-[normal] tracking-[0] text-[#f5efe6] sm:text-[14.5px]">
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
