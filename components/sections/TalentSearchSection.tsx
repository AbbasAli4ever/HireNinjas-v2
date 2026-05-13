import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const sectionTag = "WHY HIRENINJAS";
const sectionDescription =
  "HireNinjas combines top hiring infrastructure with performance marketing expertise for an effective approach to expansion.";

const reasons = [
  { number: "01", title: "Top 1% global professionals, pre-vetted.", label: "QUALITY" },
];

export const TalentSearchSection = () => {
  return (
    <section className="w-full bg-[#f9f9f9]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col px-6 py-[70px] md:px-10 lg:px-[140px]">
        <header className="flex flex-col items-start">
          <Badge
            variant="outline"
            className="rounded-[999px] border border-solid border-[#14101f14] bg-[#ffffff66] px-3.5 py-[7px] [font-family:'Inter',Helvetica] text-xs font-normal tracking-[1.68px] text-[#6a6478] hover:bg-[#ffffff66]"
          >
            {sectionTag}
          </Badge>
          <h2 className="mt-[37px] max-w-[809px] [font-family:'Satoshi-Bold',Helvetica] text-4xl font-normal leading-[48px] text-[#14101f] sm:text-5xl">
            <span className="font-[number:var(--h-2-font-weight)] tracking-[var(--h-2-letter-spacing)] leading-[var(--h-2-line-height)] font-h-2 [font-style:var(--h-2-font-style)] text-[length:var(--h-2-font-size)]">
              Why Companies across Dubai &amp;
              <br />
              Abu Dhabi{" "}
            </span>
            <span className="font-[number:var(--h-2-font-weight)] tracking-[var(--h-2-letter-spacing)] leading-[var(--h-2-line-height)] font-h-2 [font-style:var(--h-2-font-style)] text-[length:var(--h-2-font-size)] text-[#3a0d8c]">
              turn to HireNinjas
            </span>
          </h2>
          <p className="mt-[44px] max-w-[573px] [font-family:'Inter',Helvetica] text-lg font-normal leading-[27.9px] text-[#3a3445]">
            {sectionDescription}
          </p>
        </header>
        <div className="mt-[74px]">
          {reasons.map((reason) => (
            <Card key={reason.number} className="rounded-none border-0 border-b border-solid border-[#14101f14] bg-white shadow-none">
              <CardContent className="grid min-h-[99px] grid-cols-[56px_minmax(0,1fr)_auto] items-center gap-[22px] px-5 py-7">
                <div className="[font-family:'Inter',Helvetica] text-sm font-normal leading-[15.4px] tracking-[1.68px] text-[#6a6478]">
                  {reason.number}
                </div>
                <div className="[font-family:'Inter',Helvetica] text-xl font-normal leading-tight tracking-[-0.19px] text-[#14101f] md:text-2xl md:leading-[41.8px]">
                  {reason.title}
                </div>
                <Badge className="rounded-[999px] bg-[#3a0d8c14] px-3 py-[5.5px] [font-family:'Inter',Helvetica] text-xs font-normal leading-[13.2px] tracking-[1.20px] text-[#3a0d8c] hover:bg-[#3a0d8c14]">
                  {reason.label}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
