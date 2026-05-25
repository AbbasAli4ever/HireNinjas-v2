import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
const sectionContent = {
  eyebrow: "LONG-TERM GROWTH SUPPORT",
  title: ["A brand customers perceive,", "trust and remember."],
  description:
    "Brand identity extends far beyond just logo design, it shapes how customers perceive, trust and remember your business. HireNinjas creates scalable identity systems that align with your marketing strategy, ensuring your  brand remains consistent across advertising campaigns, websites, social platforms, presentations and customer experiences as your company expands.",
};
export const BrandPerceptionSection = (): JSX.Element => {
  return (
    <section className="relative w-full px-0 py-6 sm:px-6 lg:px-0">
      <div className="mx-auto w-full max-w-[1200px] relative overflow-hidden">
        <Image
          src="/figmaAssets/gradient.svg"
          className="absolute -right-0 z-0 rounded-3xl"
          height={695}
          width={695}
          alt="bgGradient"
        />
        <Card className="relative overflow-hidden rounded-3xl border border-[#f0e2ff] bg-[lineargradient(180deg,rgba(248,241,255,1)_0%,rgba(255,255,255,1)_100%)] shadow-none">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-[695px] w-[59.89%] -translate-x-1/2 -translate-y1/2 blur-[10px] [background:radialgradient(50%_50%_at_50%_50%,rgba(189,140,255,0.5)_0%,rgba(189,140,255,0)_70%)]"
          />
          <CardContent className="relative z-10 flex flex-col items-start gap-3 p-6 sm:gap-[15.4px] sm:p-10 lg:p-20">
            <Badge
              variant="outline"
              className="inline-flex h-auto items-center gap-2 rounded-[999px] border border-[#f0e2ff] bg-[#f7f1ff] px-3.5 pb-[7.69px] pt-[7.5px] text-[#8a39e4] shadow-none hover:bg-[#f7f1ff]"
            >
              <span className="h-1.5 w-1.5 rounded-[3px] bg-[#8a39e4]" />
              <span className="[font-family:'Montserrat',Helvetica] text-[10px] font-semibold leading-[19.2px] tracking-[1.2px] sm:text-xs sm:tracking-[1.68px]">
                {sectionContent.eyebrow}
              </span>
            </Badge>
            <header className="w-full lg:max-w-[998px]">
              <h2 className="[font-family:'Satoshi-Bold',Helvetica] text-[28px] font-bold leading-[34px] tracking-[-0.56px] text-[#0f0a1f] sm:text-[34px] sm:leading-[38px] sm:tracking-[-0.68px] md:text-[40px] md:leading-[44px] lg:text-[46px] lg:leading-[49.7px] lg:tracking-[-0.92px]">
                {sectionContent.title.map((line) => (
                  <span key={line} className="inline xl:block">
                    {line}{" "}
                  </span>
                ))}
              </h2>
            </header>
            <p className="max-w-none self-stretch [font-family:'Montserrat',Helvetica] text-[13px] font-normal leading-[1.6] tracking-[0] text-[#0f0a1f] sm:text-[15px] sm:leading-[27.2px] lg:text-[17px]">
              {sectionContent.description}
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
