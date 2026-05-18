import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const valuePropositions = [
  {
    title: ["Conversion-Focused", "Design Approach"],
    description: [
      "At hireninjas we take an innovative and conversion-centric design approach when developing websites - not simply building beautiful websites but instead engineering user journeys for lead generation, engagement and measurable business outcomes.",
    ],
    iconSrc: "https://c.animaapp.com/mp5dxvs5vBeNIx/img/component-4-8.svg",
  },
  {
    title: ["Built for performance", "& scalability"],
    description: [
      "Our websites and apps are tailored for speed, mobile responsiveness, and long-term scalability so your platform grows with your business.",
    ],
    iconSrc: "https://c.animaapp.com/mp5dxvs5vBeNIx/img/component-4-12.svg",
  },
  {
    title: ["UAE Market-", "Ready Solutions"],
    description: [
      "At Hireninjas, we develop platforms tailored specifically for businesses operating across Dubai and UAE markets, supporting multilingual audiences, regional integrations and local payment ecosystems.",
    ],
    iconSrc: "https://c.animaapp.com/mp5dxvs5vBeNIx/img/component-4-9.svg",
  },
];

export const ValuePropositionsSection = (): JSX.Element => {
  return (
    <section className="w-full border-y border-[#ece8f3] bg-[#fafaff] px-5 py-16 sm:px-8 lg:px-[120px] lg:py-24">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-12 lg:px-10">
        <header className="flex w-full max-w-[760px] flex-col items-start gap-[16.83px]">
          <Badge className="inline-flex h-auto rounded-[999px] border border-[#f0e2ff] bg-[#f7f1ff] px-3.5 pb-[7.69px] pt-[7.5px] text-xs font-semibold tracking-[1.68px] text-[#8a39e4] hover:bg-[#f7f1ff] [font-family:'Montserrat',Helvetica]">
            WHY CHOOSE HIRENINJAS FOR DEVELOPMENT
          </Badge>
          <div className="w-full">
            <h2 className="[font-family:'Satoshi-Bold',Helvetica] text-[36px] font-bold leading-[40px] tracking-[-0.92px] text-[#0f0a1f] sm:text-[42px] sm:leading-[46px] lg:text-[46px] lg:leading-[49.7px]">
              Three commitments
              <br />
              behind every site we ship.
            </h2>
          </div>
        </header>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {valuePropositions.map((item, index) => (
            <Card
              key={`value-proposition-${index}`}
              className="rounded-2xl border border-[#ece8f3] bg-white shadow-none"
            >
              <CardContent className="flex h-full flex-col items-start gap-2.5 p-8">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#f7f1ff]">
                  <img
                    className="h-[22px] w-[22px]"
                    alt=""
                    src={item.iconSrc}
                  />
                </div>
                <div className="w-full px-0 pb-0 pt-[9.33px]">
                  <h3 className="[font-family:'Satoshi-Bold',Helvetica] text-[23px] font-bold leading-[27.6px] tracking-[-0.46px] text-[#0f0a1f]">
                    {item.title.map((line, lineIndex) => (
                      <span key={`title-line-${lineIndex}`}>
                        {line}
                        {lineIndex < item.title.length - 1 && <br />}
                      </span>
                    ))}
                  </h3>
                </div>
                <div className="w-full">
                  <p className="[font-family:'Montserrat',Helvetica] text-[15px] font-normal leading-6 text-[#3a3447]">
                    {item.description.map((line, lineIndex) => (
                      <span key={`description-line-${lineIndex}`}>
                        {line}
                        {lineIndex < item.description.length - 1 && <br />}
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
