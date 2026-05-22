import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const badgeText = "BUILT FOR OPTIMIZED SALES";

const headingLines = [
  "Outperform",
  "competitors in",
  "both organic",
  "and paid search.",
];

const descriptionLines = [
  "HireNinjas provides more than simple optimization; their expert teams integrate technical infrastructure upgrades, keyword targeting strategies, multilingual optimization approaches and conversion-driven landing pages into their service to help businesses outperform competitors in both organic and paid search environments.",
];

export const CommerceFocusSection = (): JSX.Element => {
  return (
    <section className="relative w-full px-2 py-0 sm:px-0 lg:px-10">
      <Card className="relative mx-auto w-full max-w-[1200px] overflow-hidden rounded-3xl border border-[#f0e2ff] bg-[linear-gradient(180deg,rgba(248,241,255,1)_0%,rgba(255,255,255,1)_100%)] shadow-none">
        <div className="pointer-events-none absolute inset-y-[-18%] right-[-4%] w-[62%] rounded-full [background:radial-gradient(50%_50%_at_50%_50%,rgba(189,140,255,0.5)_0%,rgba(189,140,255,0)_70%)] blur-[10px]" />
        <CardContent className="relative z-10 flex flex-col items-start gap-3 px-5 py-8 sm:gap-[15.4px] sm:px-10 sm:py-12 lg:p-20">
          <Badge
            variant="outline"
            className="h-auto rounded-[999px] border-[#f0e2ff] bg-[#f7f1ff] px-3.5 pb-[7.69px] pt-[7.5px] [font-family:'Montserrat',Helvetica] text-[10px] font-semibold tracking-[1.2px] text-[#8a39e4] hover:bg-[#f7f1ff] sm:text-xs sm:tracking-[1.68px]"
          >
            <span className="mr-2 inline-block h-1.5 w-1.5 rounded-[3px] bg-[#8a39e4]" />
            {badgeText}
          </Badge>
          <div className="flex w-full flex-col items-start pt-[1.6px] pb-[0.68px] lg:max-w-[460.37px]">
            <h2 className="[font-family:'Satoshi-Bold',Helvetica] text-[30px] font-bold leading-[1.1] tracking-[-0.6px] text-[#0f0a1f] sm:text-[36px] sm:leading-[40px] sm:tracking-[-0.72px] md:text-[42px] md:leading-[45px] lg:text-[46px] lg:leading-[49.7px] lg:tracking-[-0.92px]">
              {headingLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
          </div>
          <div className="flex w-full flex-col items-start pb-[0.56px] lg:max-w-[697.75px]">
            <p className="[font-family:'Montserrat',Helvetica] text-[13px] font-normal leading-[1.6] tracking-[0] text-[#0f0a1f] sm:text-[15px] sm:leading-[24px] md:text-[16px] md:leading-[25.6px] lg:text-[17px] lg:leading-[27.2px]">
              {descriptionLines[0]}
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
