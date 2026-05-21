import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const valuePropositions = [
  {
    title: ["Conversion-Focused", "Design Approach"],
    description: [
      "At hireninjas we take an innovative and conversion-centric design approach when developing websites - not simply building beautiful websites but instead engineering user journeys for lead generation, engagement and measurable business outcomes.",
    ],
    iconSrc: "/web-development/light.svg",
  },
  {
    title: ["Built for performance", "& scalability"],
    description: [
      "Our websites and apps are tailored for speed, mobile responsiveness, and long-term scalability so your platform grows with your business.",
    ],
    iconSrc: "/web-development/elec.svg",
  },
  {
    title: ["UAE Market-", "Ready Solutions"],
    description: [
      "At Hireninjas, we develop platforms tailored specifically for businesses operating across Dubai and UAE markets, supporting multilingual audiences, regional integrations and local payment ecosystems.",
    ],
    iconSrc: "/web-development/globe.svg",
  },
];

export const ValuePropositionsSection = (): JSX.Element => {
  return (
    <section className="w-full border-y border-[#ece8f3] bg-[#fafaff] px-4 py-12 sm:px-8 sm:py-16 md:px-12 lg:px-16 lg:py-20 xl:px-[120px] xl:py-24">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-8 sm:gap-10 lg:gap-12 xl:px-10">
        <header className="flex w-full max-w-[760px] flex-col items-start gap-4 lg:gap-[16.83px]">
          <Badge className="inline-flex h-auto rounded-[999px] border border-[#f0e2ff] bg-[#f7f1ff] px-3.5 pb-[7.69px] pt-[7.5px] text-[10px] sm:text-xs font-semibold tracking-[1.68px] text-[#8a39e4] hover:bg-[#f7f1ff] [font-family:'Montserrat',Helvetica]">
            WHY CHOOSE HIRENINJAS FOR DEVELOPMENT
          </Badge>
          <div className="w-full">
            <h2 className="[font-family:'Satoshi-Bold',Helvetica] text-[28px] font-bold leading-[1.15] tracking-[-0.8px] text-[#0f0a1f] sm:text-[36px] sm:leading-[40px] sm:tracking-[-0.92px] md:text-[42px] md:leading-[46px] lg:text-[46px] lg:leading-[49.7px]">
              <span className="xl:block">Three commitments </span>
              <span className="xl:block">behind every site we ship.</span>
            </h2>
          </div>
        </header>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {valuePropositions.map((item, index) => (
            <Card
              key={`value-proposition-${index}`}
              className="rounded-2xl border border-[#ece8f3] bg-white shadow-none"
            >
              <CardContent className="flex h-full flex-col items-start gap-2.5 p-6 sm:p-7 xl:p-8">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#f7f1ff]">
                  <img
                    className="h-[22px] w-[22px]"
                    alt=""
                    src={item.iconSrc}
                  />
                </div>
                <div className="w-full px-0 pb-0 pt-[9.33px]">
                  <h3 className="[font-family:'Satoshi-Bold',Helvetica] text-xl sm:text-[23px] font-bold leading-[1.2] xl:leading-[27.6px] tracking-[-0.46px] text-[#0f0a1f]">
                    {item.title.join(" ")}
                  </h3>
                </div>
                <div className="w-full">
                  <p className="[font-family:'Montserrat',Helvetica] text-sm sm:text-[15px] font-normal leading-[1.6] xl:leading-6 text-[#3a3447]">
                    {item.description.join(" ")}
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
