import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const sectionCopy = {
  badge:
    "MARKETING INFRASTRUCTURE BUILT FOR DEVELOPERS & AGENCIES GROWING FAST",
  heading: ["One growth partner.", "Predictable pipeline."],
  paragraphs: [
    "Many property organisations rely on fragmented campaign execution across multiple vendors; HireNinjas acts as a single growth partner supporting strategy, campaign rollout, creative production, and execution teams so developers and agencies can scale faster without increasing operational complexity.",
    "HireNinjas' marketing infrastructure offers everything you need for predictable pipeline growth across Dubai and Abu Dhabi.",
  ],
};

export const GrowthPartnerPositioningSection = (): JSX.Element => {
  return (
    <section className="relative w-full px-4 py-0 sm:px-6 lg:px-10">
      <Card className="relative w-full overflow-hidden rounded-3xl border border-[#f0e2ff] bg-[linear-gradient(180deg,rgba(248,241,255,1)_0%,rgba(255,255,255,1)_100%)] shadow-none">
        <div className="pointer-events-none absolute inset-x-[20%] top-[-12%] h-[669px] blur-[10px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(189,140,255,0.5)_0%,rgba(189,140,255,0)_70%)]" />
        <CardContent className="relative z-10 flex flex-col items-start gap-3 p-6 sm:p-10 lg:gap-[11.1px] lg:p-20">
          <Badge
            variant="outline"
            className="h-auto rounded-full border border-[#00000029] bg-transparent px-3.5 py-[7px] text-black hover:bg-transparent"
          >
            <span className="mr-2.5 flex h-1.5 w-1.5 items-center justify-center rounded-[3px] bg-[#6ce5b1]">
              <span className="h-1.5 w-1.5 rounded-[3px] bg-[#ffffff01] shadow-[0px_0px_0px_4px_#6ce5b12e]" />
            </span>
            <span className="[font-family:'Inter',Helvetica] text-xs font-normal leading-[18px] tracking-[1.68px] whitespace-normal sm:whitespace-nowrap">
              {sectionCopy.badge}
            </span>
          </Badge>
          <header className="max-w-[460.37px] pt-[5.74px]">
            <h2 className="[font-family:'Satoshi-Bold',Helvetica] text-[34px] font-bold leading-[1.08] tracking-[-0.92px] text-ebony sm:text-[40px] lg:text-[46px] lg:leading-[49.7px]">
              {sectionCopy.heading.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
          </header>
          <div className="max-w-[697.75px] space-y-3 pt-[4.18px]">
            {sectionCopy.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="[font-family:'Montserrat',Helvetica] text-[15px] font-normal leading-[27.2px] tracking-[0] text-tuna sm:text-[17px]"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
