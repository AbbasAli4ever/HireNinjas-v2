import { Card, CardContent } from "@/components/ui/card";

const sectionCards = [
  {
    number: "01",
    titleLines: ["Off-Plan", "Launch Campaigns"],
    descriptionLines: [
      "Launching a new development",
      "requires full visibility across its various",
      "stages. HireNinjas develops full-funnel",
      "campaigns covering teaser awareness,",
      "investor education, retargeting, and",
      "conversion phases aimed at speeding",
      "unit absorption timelines.",
    ],
  },
  {
    number: "02",
    titleLines: ["Targeting High-", "Net-Worth Buyers"],
    descriptionLines: [
      "Attracting premium real estate buyers",
      "requires precise outreach. We design",
      "multi-channel acquisition campaigns",
      "targeting HNWI investors on Google,",
      "Meta, LinkedIn and international",
      "digital networks in order to draw",
      "in serious purchasers instead of",
      "casual inquiries.",
    ],
  },
  {
    number: "03",
    titleLines: ["Lead Quality"],
    descriptionLines: [
      "Real estate teams waste precious time",
      "filtering unqualified enquiries, so",
      "HireNinjas implements lead",
      "qualification workflows and funnel",
      "optimisation strategies designed to",
      "deliver higher-intent prospects ready",
      "for consultation and viewing.",
    ],
  },
];

export const AwarenessToConsultationCardsSection = (): JSX.Element => {
  return (
    <section className="relative w-full px-10 py-0">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-start gap-12">
        <header className="flex w-full max-w-[760px] flex-col items-start gap-[16.83px]">
          <div className="inline-flex items-center gap-2.5 rounded-[999px] border border-solid border-[#00000029] px-3.5 py-[7px]">
            <span className="flex h-1.5 w-1.5 items-start justify-center rounded-[3px] bg-[#6ce5b1]">
              <span className="h-1.5 w-1.5 rounded-[3px] bg-[#ffffff01] shadow-[0px_0px_0px_4px_#6ce5b12e]" />
            </span>
            <p className="flex w-fit items-center whitespace-nowrap [font-family:'Inter',Helvetica] text-xs font-normal leading-[18px] tracking-[1.68px] text-black">
              COMMON REAL ESTATE MARKETING CHALLENGES WE SOLVE
            </p>
          </div>
          <div className="w-full">
            <h2 className="[font-family:'Satoshi-Bold',Helvetica] text-[46px] font-bold leading-[49.7px] tracking-[-0.92px] text-ebony">
              From teaser awareness
              <br />
              to consultation booked.
            </h2>
          </div>
        </header>
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {sectionCards.map((card) => (
            <Card
              key={card.number}
              className="relative h-full rounded-2xl border border-solid border-[#ece8f3] bg-white shadow-none"
            >
              <CardContent className="relative flex h-full flex-col items-start gap-3 overflow-hidden px-8 pb-8 pt-8">
                <div className="pointer-events-none absolute right-3 top-[25px] inline-flex flex-col items-start">
                  <span className="flex w-fit items-center whitespace-nowrap [font-family:'Satoshi-Bold',Helvetica] text-[56px] font-bold leading-[56px] tracking-[-2.24px] text-magnolia">
                    {card.number}
                  </span>
                </div>
                <div className="relative z-10 flex w-full flex-col items-start">
                  <h3 className="w-full [font-family:'Satoshi-Bold',Helvetica] text-[23px] font-bold leading-[27.6px] tracking-[-0.46px] text-ebony">
                    {card.titleLines.map((line, index) => (
                      <span key={`${card.number}-title-${index}`}>
                        {line}
                        {index < card.titleLines.length - 1 && <br />}
                      </span>
                    ))}
                  </h3>
                </div>
                <div className="relative z-10 flex w-full flex-col items-start">
                  <p className="w-full [font-family:'Montserrat',Helvetica] text-[15px] font-normal leading-6 tracking-[0] text-tuna">
                    {card.descriptionLines.map((line, index) => (
                      <span key={`${card.number}-description-${index}`}>
                        {line}
                        {index < card.descriptionLines.length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};