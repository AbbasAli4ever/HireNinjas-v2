import { Badge } from "../../../../../components/ui/badge";
import { Card, CardContent } from "../../../../../components/ui/card";

const capabilityCards = [
  {
    title: "Conversion-Focused Campaign Architecture",
    description:
      "We design structured acquisition funnels that guide prospects from first click through to enquiry submission and sales engagement.",
    iconSrc: "/lead-generation/arrow.svg",
    iconAlt: "Conversion-focused campaign architecture icon",
  },
  {
    title: "Multi-Channel Lead Capture Strategy",
    description:
      "Our campaigns combine Google Ads, Meta Ads, LinkedIn campaigns, and retargeting systems to maximise reach and lead quality across platforms.",
    iconSrc: "/lead-generation/globe.svg",
    iconAlt: "Multi-channel lead capture strategy icon",
  },
  {
    title: "Optimized for UAE Market Performance",
    description:
      "Campaign targeting and messaging are tailored specifically for audiences throughout Dubai and the wider UAE, increasing engagement rates and conversion performance.",
    iconSrc: "/lead-generation/stat.svg",
    iconAlt: "Optimized for UAE market performance icon",
  },
];

export const FunnelCapabilitiesSection = (): JSX.Element => {
  return (
    <section className="w-full bg-[#fafaff] border-y border-[#ece8f3]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start px-5 py-10 sm:px-8 sm:py-16 md:px-12 lg:px-8 lg:py-24 xl:px-[100px]">
        <div className="mx-auto flex w-full max-w-[1220px] flex-col items-start gap-8 sm:gap-10 lg:gap-12 lg:px-10">
          <header className="flex w-full flex-col items-start gap-3 sm:gap-[16.83px] lg:max-w-[760px]">
            <Badge className="h-auto rounded-[999px] border border-[#f0e2ff] bg-[#f7f1ff] px-3.5 pb-[7.69px] pt-[7.5px] text-[10px] font-semibold tracking-[1.2px] text-[#8a39e4] hover:bg-[#f7f1ff] [font-family:'Montserrat',Helvetica] sm:text-xs sm:tracking-[1.68px]">
              WHY CHOOSE HIRENINJAS FOR LEAD GENERATION
            </Badge>
            <h2 className="[font-family:'Satoshi-Bold',Helvetica] text-[28px] font-bold leading-[33px] tracking-[-0.56px] text-[#0f0a1f] sm:text-[32px] sm:leading-[36px] sm:tracking-[-0.64px] md:text-[40px] md:leading-[44px] md:tracking-[-0.8px] lg:text-[46px] lg:leading-[49.7px] lg:tracking-[-0.92px]">
              Architected funnels. Multi-channel reach. UAE-tuned.
            </h2>
          </header>
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3">
            {capabilityCards.map((card) => (
              <Card
                key={card.title}
                className="h-full rounded-2xl border border-[#ece8f3] bg-white shadow-none"
              >
                <CardContent className="flex h-full flex-col items-start gap-2.5 p-5 sm:p-6 lg:p-8">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#f7f1ff] sm:h-12 sm:w-12">
                    <img
                      className="h-5 w-5 sm:h-[22px] sm:w-[22px]"
                      alt={card.iconAlt}
                      src={card.iconSrc}
                    />
                  </div>
                  <div className="w-full pt-2 sm:pt-[9.33px]">
                    <h3 className="[font-family:'Satoshi-Bold',Helvetica] text-[18px] font-bold leading-[22px] tracking-[-0.36px] text-[#0f0a1f] sm:text-[20px] sm:leading-[24px] lg:text-[23px] lg:leading-[27.6px] lg:tracking-[-0.46px]">
                      {card.title}
                    </h3>
                  </div>
                  <p className="[font-family:'Montserrat',Helvetica] text-[13px] font-normal leading-[1.6] tracking-[0] text-[#3a3447] sm:text-[14px] lg:text-[15px] lg:leading-6">
                    {card.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};