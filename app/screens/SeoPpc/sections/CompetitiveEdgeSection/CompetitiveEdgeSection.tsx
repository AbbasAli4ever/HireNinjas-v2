import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const actions = [
  {
    label: "Book consultation",
    variant: "primary" as const,
  },
  {
    label: "Review services",
    variant: "secondary" as const,
  },
];

export const CompetitiveEdgeSection = (): JSX.Element => {
  return (
    <section className="relative w-full px-2 py-0 sm:px-0 lg:px-8">
      <div className="mx-auto w-full max-w-[1200px]">
        <Card className="relative overflow-hidden rounded-3xl border-0 bg-transparent shadow-none">
          <div className="absolute inset-0 rounded-3xl [background:linear-gradient(157deg,rgba(89,31,151,1)_0%,rgba(45,2,85,1)_100%)]" />
          <div className="absolute right-0 top-0 h-full w-[60%] blur-[10px] [background:radial-gradient(70.71%_70.71%_at_50%_50%,rgba(189,140,255,0.50)_0%,rgba(189,140,255,0.00)_70%)]"
            style={{ right: "-116px", top: "-207.743px", width: "696px", height: "695.575px" }} />
          <CardContent className="relative z-10 flex flex-col items-start gap-3 p-6 sm:gap-[15.1px] sm:p-10 lg:p-20">
            <Badge className="h-auto rounded-[999px] border border-solid border-[#ffffff2e] bg-[#ffffff1f] px-3.5 pb-[7.69px] pt-[7.5px] text-white hover:bg-[#ffffff1f]">
              <span className="mr-2 inline-block h-1.5 w-1.5 rounded-[3px] bg-white" />
              <span className="[font-family:'Montserrat',Helvetica] text-[10px] font-semibold leading-[19.2px] tracking-[1.2px] sm:text-xs sm:tracking-[1.68px]">
                LET&#39;S TALK
              </span>
            </Badge>
            <header className="flex w-full flex-col items-start pt-[1.74px] lg:max-w-[460.37px]">
              <h2 className="[font-family:'Satoshi-Bold',Helvetica] text-[30px] font-bold leading-[1.1] tracking-[-0.6px] text-white sm:text-[36px] sm:tracking-[-0.72px] md:text-[40px] lg:text-[46px] lg:tracking-[-0.92px]">
                More qualified
                <br />
                leads, from search.
              </h2>
            </header>
            <div className="flex w-full flex-col items-start lg:max-w-[697.75px]">
              <p className="[font-family:'Montserrat',Helvetica] text-[13px] font-normal leading-[1.6] tracking-[0] text-[#ffffffd1] sm:text-[15px] sm:leading-[27.2px] lg:text-[17px]">
                Get in touch with one of our SEO and PPC specialists and discover how search visibility improvements can produce more qualified leads across Dubai and UAE.
              </p>
            </div>
            <nav
              aria-label="Competitive edge actions"
              className="flex w-full flex-col gap-3 pt-1 sm:w-auto sm:flex-row sm:items-center sm:gap-4 sm:pt-0"
            >
              {actions.map((action) =>
                action.variant === "primary" ? (
                  <Button
                    key={action.label}
                    className="h-12 w-full justify-between rounded-[999px] bg-white py-3.5 pl-[22px] pr-2 text-[#14101f] hover:bg-white/95 sm:w-auto sm:justify-start"
                  >
                    <span className="inline-flex flex-1 items-center justify-center pl-3.5 sm:flex-none sm:justify-start">
                      <span className="[font-family:'Inter',Helvetica] text-[13.5px] font-medium leading-none tracking-[0] sm:text-[14.5px]">
                        {action.label}
                      </span>
                    </span>
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-[18px] bg-[#3a0d8c]">
                      <img
                        className="h-4 w-4"
                        alt="Component"
                        src="/figmaAssets/arrow-white.svg"
                      />
                    </span>
                  </Button>
                ) : (
                  <Button
                    key={action.label}
                    variant="outline"
                    className="h-12 w-full rounded-[999px] border-[#f5efe629] bg-transparent px-[22px] py-3.5 [font-family:'Inter',Helvetica] text-[13.5px] font-medium tracking-[0] text-[#f5efe6] hover:bg-white/5 hover:text-[#f5efe6] sm:w-auto sm:text-[14.5px]"
                  >
                    {action.label}
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