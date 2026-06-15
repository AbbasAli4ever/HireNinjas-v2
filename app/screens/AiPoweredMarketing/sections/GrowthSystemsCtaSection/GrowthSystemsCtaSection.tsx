import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const sectionContent: { eyebrow: string; title: string; description: React.ReactNode } = {
  eyebrow: "AI MARKETING SOLUTIONS THAT SCALE WITH YOUR TEAM",
  title: "Real workflows, not just tool experiments.",
  description: (
    <>
      {"Many companies experiment with artificial intelligence tools but struggle to integrate them into real workflows. HireNinjas provides "}
      <a href="/" className="hover:underline font-medium">structured AI marketing</a>
      {" systems for growing organisations, aligning automation with recruitment, operations and campaign execution to ensure your marketing grows with the team across Dubai, the UAE and global markets."}
    </>
  ),
};

export const GrowthSystemsCtaSection = (): JSX.Element => {
  return (
    <section className="w-full">
      <div className="mx-auto w-full max-w-[1200px] px-0 sm:px-0 lg:px-0">
        <Card className="relative overflow-hidden rounded-3xl border border-solid border-[#f0e2ff] bg-[linear-gradient(180deg,rgba(248,241,255,1)_0%,rgba(255,255,255,1)_100%)] shadow-none">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-1/2 h-[695px] w-[59.89%] -translate-y-[75%] blur-[10px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(189,140,255,0.5)_0%,rgba(189,140,255,0)_70%)]"
          />
          <CardContent className="relative flex flex-col items-start gap-3 p-6 sm:gap-[15.4px] sm:p-10 lg:p-20">
            <Badge
              variant="secondary"
              className="h-auto rounded-[999px] border border-solid border-[#f0e2ff] bg-[#f7f1ff] px-3.5 pb-[7.69px] pt-[7.5px] text-left hover:bg-[#f7f1ff]"
            >
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-[3px] bg-[#8a39e4]" />
                <span className="[font-family:'Montserrat',Helvetica] text-[10px] font-semibold leading-[19.2px] tracking-[1.2px] text-[#8a39e4] sm:text-xs sm:tracking-[1.68px]">
                  {sectionContent.eyebrow}
                </span>
              </span>
            </Badge>
            <header className="w-full lg:max-w-[998px]">
              <h2 className="[font-family:'Satoshi-Bold',Helvetica] text-[28px] font-bold leading-[34px] tracking-[-0.56px] text-[#0f0a1f] sm:text-[34px] sm:leading-[38px] sm:tracking-[-0.68px] md:text-[40px] md:leading-[44px] lg:text-[46px] lg:leading-[49.7px] lg:tracking-[-0.92px]">
                {sectionContent.title}
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
