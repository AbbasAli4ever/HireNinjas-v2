import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const challengeCards = [
  {
    number: "01",
    title: "Regulatory Compliance",
    description: [
      "As an experienced banking marketing",
      "agency in Dubai, all campaigns are",
      "reviewed for CBUAE and FSRA",
      "compliance prior to being launched to",
      "ensure they align with UAE financial",
      "advertising regulations.",
    ],
  },
  {
    number: "02",
    title: "Trust and Credibility",
    description: [
      "Financial decisions require trust. At",
      "hireninjas, our marketing strategies",
      "involve thought-leadership content",
      "creation, executive positioning and",
      "credibility-driven brand messaging",
      "aimed at strengthening it within high-",
      "value customer audiences.",
    ],
  },
  {
    number: "03",
    title: "Customer Acquisition",
    description: [
      "At HireNinjas UAE, we use precision",
      "targeting strategies using both first-",
      "party and third-party data insights to",
      "support insurance marketing agency",
      "Dubai campaigns and fintech",
      "customer acquisition funnels",
      "designed to attract qualified,",
      "conversion-ready prospects.",
    ],
  },
];

export const TrustCredibilityHighlightsSection = (): JSX.Element => {
  return (
    <section className="relative mt-[70px] w-full px-4 sm:px-6 lg:px-[140px]">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-start gap-12">
        <header className="flex w-full max-w-[760px] flex-col items-start gap-[16.83px]">
          <Badge className="h-auto rounded-[999px] border border-[#f0e2ff] bg-[#f7f1ff] px-3.5 pb-[7.69px] pt-[7.5px] text-left shadow-none hover:bg-[#f7f1ff]">
            <span className="[font-family:'Montserrat',Helvetica] text-xs font-semibold leading-[19.2px] tracking-[1.68px] text-[#8a39e4]">
              KEY CHALLENGES WE OVERCOME
            </span>
          </Badge>
          <div className="w-full">
            <h2 className="[font-family:'Satoshi-Bold',Helvetica] text-[36px] font-bold leading-[40px] tracking-[-0.92px] text-[#0f0a1f] sm:text-[42px] sm:leading-[45px] lg:text-[46px] lg:leading-[49.7px]">
              Compliant. Credible.
              <br />
              Conversion-ready.
            </h2>
          </div>
        </header>
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {challengeCards.map((card) => (
            <Card
              key={card.number}
              className="relative h-full overflow-hidden rounded-2xl border border-[#ece8f3] bg-white shadow-none"
            >
              <CardContent className="relative flex h-full flex-col items-start gap-[11.99px] p-8">
                <span className="pointer-events-none absolute right-3 top-[25px] [font-family:'Satoshi-Bold',Helvetica] text-[56px] font-bold leading-[56px] tracking-[-2.24px] text-[#f7f1ff] sm:right-4 lg:right-[13px]">
                  {card.number}
                </span>
                <h3 className="relative z-10 pr-10 [font-family:'Satoshi-Bold',Helvetica] text-[23px] font-bold leading-[27.6px] tracking-[-0.46px] text-[#0f0a1f]">
                  {card.title}
                </h3>
                <div className="relative z-10 [font-family:'Montserrat',Helvetica] text-[15px] font-normal leading-6 tracking-[0] text-[#3a3447]">
                  {card.description.map((line, index) => (
                    <p key={`${card.number}-${index}`}>{line}</p>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
