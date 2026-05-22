import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const highlights = [
  {
    number: "01",
    title: "End-to-end production expertise",
    description:
      "From creative concept development and script writing to post-production delivery.",
  },
  {
    number: "02",
    title: "Built for Marketing Performance",
    description:
      "Videos developed specifically to support social media campaigns and landing pages.",
  },
  {
    number: "03",
    title: "Dubai-Based Production Across MENA",
    description:
      "Supporting brands with regional-scale video production capability from our Dubai hub.",
  },
];

export const ExpertRoleHighlightsSection = (): JSX.Element => {
  return (
    <section className="w-full bg-white py-10 sm:py-14 lg:py-[70px]">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-8 px-5 sm:gap-10 sm:px-8 lg:flex-row lg:items-start lg:gap-8 lg:px-8 xl:px-0">
        <header className="flex flex-1 flex-col justify-center gap-6 sm:gap-8">
          <div className="flex max-w-[760px] flex-col items-start gap-3 sm:gap-4">
            <Badge
              variant="outline"
              className="inline-flex h-auto items-center gap-2.5 rounded-[999px] border border-solid border-[#00000029] bg-transparent px-3.5 py-[7px] hover:bg-transparent"
            >
              <span className="flex h-1.5 w-1.5 items-center justify-center rounded-[3px] bg-[#6ce5b1]">
                <span className="h-1.5 w-1.5 rounded-[3px] bg-[#ffffff01] shadow-[0px_0px_0px_4px_#6ce5b12e]" />
              </span>
              <span className="relative flex items-center whitespace-nowrap [font-family:'Inter',Helvetica] text-xs font-normal leading-[18px] tracking-[1.68px] text-black">
                THE NINJA APPROACH
              </span>
            </Badge>
            <h2 className="[font-family:'Satoshi-Bold',Helvetica] text-[28px] font-bold leading-[34px] tracking-[-0.56px] text-[#0f0a1f] sm:text-[34px] sm:leading-[38px] sm:tracking-[-0.68px] md:text-[40px] md:leading-[44px] lg:text-[46px] lg:leading-[49.7px] lg:tracking-[-0.92px]">
              Strategy, tailored to commercial goals not guesswork.
            </h2>
          </div>
          <p className="[font-family:'Montserrat',Helvetica] text-[13px] font-normal leading-[1.6] tracking-[0] text-[#3a3447] sm:text-[15px] sm:leading-[25.6px]">
            HireNinjas&#39; video production services allow businesses in Dubai,
            UAE and MENA region to bring their brand story to life on screen,
            from concept development through final delivery. Our production team
            crafts cinematic content designed to support marketing performance
            across websites, social platforms, and corporate communications.
          </p>
        </header>
        <Card className="flex-1 rounded-2xl border border-solid border-[#f0e2ff] bg-[linear-gradient(180deg,rgba(248,241,255,1)_0%,rgba(255,255,255,1)_100%)] shadow-none">
          <CardContent className="flex flex-col gap-3 p-5 sm:p-6 lg:p-7">
            {highlights.map((item, index) => (
              <article
                key={`${item.title}-${index}`}
                className="flex items-start gap-3.5 rounded-xl p-3.5"
              >
                <div className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-[10px] bg-[#8a39e4] pt-[4.8px] pb-[6.2px]">
                  <span className="mt-[-1px] flex items-center justify-center whitespace-nowrap [font-family:'Satoshi-Bold',Helvetica] text-sm font-bold leading-[22.4px] tracking-[0] text-white">
                    {item.number}
                  </span>
                </div>
                <div className="flex min-w-0 flex-1 flex-col gap-[2px]">
                  <h3 className="[font-family:'Satoshi-Bold',Helvetica] text-[17px] font-bold leading-[22.1px] tracking-[-0.34px] text-[#0f0a1f]">
                    {item.title}
                  </h3>
                  <p className="[font-family:'Montserrat',Helvetica] text-sm font-normal leading-[22.4px] tracking-[0] text-[#3a3447]">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
