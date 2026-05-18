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
    <section className="relative w-full px-5 py-0 sm:px-6 lg:px-10">
      <div className="mx-auto w-full max-w-[1200px]">
        <Card className="relative overflow-hidden rounded-3xl border-0 bg-transparent shadow-none">
          <div className="absolute inset-0 rounded-3xl [background:radial-gradient(50%_50%_at_100%_0%,rgba(189,140,255,0.6)_0%,rgba(189,140,255,0)_60%),linear-gradient(157deg,rgba(89,31,151,1)_0%,rgba(45,2,85,1)_100%)]" />
          <div className="absolute right-0 top-0 h-full w-[60%] blur-[10px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(189,140,255,0.5)_0%,rgba(189,140,255,0)_70%)]" />
          <CardContent className="relative z-10 flex flex-col items-start gap-[15.1px] p-6 sm:p-8 lg:p-20">
            <Badge className="h-auto rounded-[999px] border border-solid border-[#ffffff2e] bg-[#ffffff1f] px-3.5 pb-[7.69px] pt-[7.5px] text-white hover:bg-[#ffffff1f]">
              <span className="mr-2 inline-block h-1.5 w-1.5 rounded-[3px] bg-white" />
              <span className="[font-family:'Montserrat',Helvetica] text-xs font-semibold leading-[19.2px] tracking-[1.68px]">
                LET&#39;S TALK
              </span>
            </Badge>
            <header className="flex w-full max-w-[460.37px] flex-col items-start pt-[1.74px]">
              <h2 className="mt-[-1.00px] [font-family:'Satoshi-Bold',Helvetica] text-[36px] font-bold leading-[1.08] tracking-[-0.92px] text-white sm:text-[40px] lg:text-[46px]">
                More qualified
                <br />
                leads, from search.
              </h2>
            </header>
            <div className="flex w-full max-w-[697.75px] flex-col items-start">
              <p className="mt-[-1.00px] [font-family:'Montserrat',Helvetica] text-[15px] font-normal leading-[27.2px] tracking-[0] text-[#ffffffd1] sm:text-[17px]">
                Get in touch with one of our SEO and PPC specialists and
                discover how search
                <br className="hidden sm:block" />
                visibility improvements can produce more qualified leads across
                Dubai and UAE.
              </p>
            </div>
            <nav
              aria-label="Competitive edge actions"
              className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6"
            >
              {actions.map((action) =>
                action.variant === "primary" ? (
                  <Button
                    key={action.label}
                    className="h-12 rounded-[999px] bg-white py-3.5 pl-[22px] pr-2 text-[#14101f] hover:bg-white/95"
                  >
                    <span className="inline-flex flex-col items-center pl-3.5">
                      <span className="[font-family:'Inter',Helvetica] text-[14.5px] font-medium leading-none tracking-[0]">
                        {action.label}
                      </span>
                    </span>
                    <span className="grid h-9 w-9 place-items-center rounded-[18px] bg-[#3a0d8c]">
                      <img
                        className="h-4 w-4"
                        alt="Component"
                        src="https://c.animaapp.com/mpb6dv7tQ8BPXz/img/component-2.svg"
                      />
                    </span>
                  </Button>
                ) : (
                  <Button
                    key={action.label}
                    variant="outline"
                    className="h-12 rounded-[999px] border-[#f5efe629] bg-transparent px-[22px] py-3.5 [font-family:'Inter',Helvetica] text-[14.5px] font-medium tracking-[0] text-[#f5efe6] hover:bg-white/5 hover:text-[#f5efe6]"
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