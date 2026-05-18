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
    <section className="w-full px-4 py-[60px] sm:px-6 lg:px-10">
      <Card className="relative w-full overflow-hidden rounded-3xl border-0 bg-transparent shadow-none">
        <CardContent className="relative flex w-full flex-col items-start gap-[15.2px] overflow-hidden rounded-3xl p-8 sm:p-10 lg:p-20 [background:linear-gradient(157deg,rgba(89,31,151,1)_0%,rgba(45,2,85,1)_100%)]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-1/2 h-[671px] w-[60%] blur-[10px] [background:radial-gradient(70.71%_70.71%_at_50%_50%,rgba(189,140,255,0.50)_0%,rgba(189,140,255,0.00)_70%)]"
            style={{ right: "-116px", top: "-207.743px", width: "696px", height: "695.575px" }}
          />
          <Badge className="relative inline-flex h-auto items-center gap-2 rounded-[999px] border border-solid border-[#ffffff2e] bg-[#ffffff1f] px-3.5 pb-[7.69px] pt-[7.5px] text-white hover:bg-[#ffffff1f]">
            <span className="h-1.5 w-1.5 rounded-[3px] bg-white" />
            <span className="[font-family:'Montserrat',Helvetica] text-xs font-semibold leading-[19.2px] tracking-[1.68px] text-white">
              LET&#39;S TALK
            </span>
          </Badge>
          <header className="relative flex w-full max-w-[460.37px] flex-col items-start px-0 pb-0 pt-[1.62px]">
            <h2 className="mt-[-1.00px] [font-family:'Satoshi-Bold',Helvetica] text-[46px] font-bold leading-[49.7px] tracking-[-0.92px] text-white">
              More qualified
              <br />
              leads, from search.
            </h2>
          </header>
          <div className="relative flex w-full max-w-[697.75px] flex-col items-start">
            <p className="mt-[-1.00px] [font-family:'Montserrat',Helvetica] text-[17px] font-normal leading-[27.2px] tracking-[0] text-[#ffffffd1]">
             Get in touch with one of our SEO and PPC specialists and discover how search

              <br />visibility improvements can produce more qualified leads across Dubai and UAE.
             
            </p>
          </div>
          <div className="relative flex flex-wrap items-start gap-4 sm:gap-6">
            {ctaButtons.map((button) =>
              button.variant === "primary" ? (
                <Button
                  key={button.label}
                  type="button"
                  className="h-auto min-h-12 rounded-[999px] bg-white py-2 pl-[22px] pr-2 text-[#14101f] hover:bg-white"
                >
                  <span className="inline-flex flex-col items-center pl-3.5 pr-0">
                    <span className="[font-family:'Inter',Helvetica] text-[14.5px] font-medium leading-[normal] tracking-[0] text-[#14101f]">
                      {button.label}
                    </span>
                  </span>
                  <span className="grid h-9 w-9 place-items-center rounded-[18px] bg-[#3a0d8c]">
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
                  className="h-auto min-h-12 rounded-[999px] border border-solid border-[#f5efe629] bg-transparent px-[22px] py-3.5 text-[#f5efe6] hover:bg-transparent hover:text-[#f5efe6]"
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
