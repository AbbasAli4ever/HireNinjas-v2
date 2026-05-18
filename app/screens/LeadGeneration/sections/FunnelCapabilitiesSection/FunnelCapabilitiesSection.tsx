import { Badge } from "../../../../../components/ui/badge";
import { Card, CardContent } from "../../../../../components/ui/card";

const capabilityCards = [
  {
    title: "Conversion-Focused Campaign Architecture",
    description:
      "We design structured acquisition funnels that guide prospects from first click through to enquiry submission and sales engagement.",
    iconSrc: "https://c.animaapp.com/mpaw8ml1N6JcQv/img/component-3-7.svg",
    iconAlt: "Conversion-focused campaign architecture icon",
  },
  {
    title: "Multi-Channel Lead Capture Strategy",
    description:
      "Our campaigns combine Google Ads, Meta Ads, LinkedIn campaigns, and retargeting systems to maximise reach and lead quality across platforms.",
    iconSrc: "https://c.animaapp.com/mpaw8ml1N6JcQv/img/component-3-3.svg",
    iconAlt: "Multi-channel lead capture strategy icon",
  },
  {
    title: "Optimized for UAE Market Performance",
    description:
      "Campaign targeting and messaging are tailored specifically for audiences throughout Dubai and the wider UAE, increasing engagement rates and conversion performance.",
    iconSrc: "https://c.animaapp.com/mpaw8ml1N6JcQv/img/component-3-10.svg",
    iconAlt: "Optimized for UAE market performance icon",
  },
];

export const FunnelCapabilitiesSection = (): JSX.Element => {
  return (
    <section className="w-full bg-[#fafaff] border-y border-[#ece8f3]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start px-6 py-16 sm:px-8 lg:px-[100px] lg:py-24">
        <div className="mx-auto flex w-full max-w-[1220px] flex-col items-start gap-12 lg:px-10">
          <header className="flex w-full max-w-[760px] flex-col items-start gap-[16.83px]">
            <Badge className="h-auto rounded-[999px] border border-[#f0e2ff] bg-[#f7f1ff] px-3.5 pb-[7.69px] pt-[7.5px] text-xs font-semibold tracking-[1.68px] text-[#8a39e4] hover:bg-[#f7f1ff] [font-family:'Montserrat',Helvetica]">
              WHY CHOOSE HIRENINJAS FOR LEAD GENERATION
            </Badge>
            <h2 className="[font-family:'Satoshi-Bold',Helvetica] text-[32px] font-bold leading-[36px] tracking-[-0.64px] text-[#0f0a1f] sm:text-[40px] sm:leading-[44px] sm:tracking-[-0.8px] lg:text-[46px] lg:leading-[49.7px] lg:tracking-[-0.92px]">
              Architected funnels. Multi-channel reach. UAE-tuned.
            </h2>
          </header>
          <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {capabilityCards.map((card) => (
              <Card
                key={card.title}
                className="h-full rounded-2xl border border-[#ece8f3] bg-white shadow-none"
              >
                <CardContent className="flex h-full flex-col items-start gap-2.5 p-8">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#f7f1ff]">
                    <img
                      className="h-[22px] w-[22px]"
                      alt={card.iconAlt}
                      src={card.iconSrc}
                    />
                  </div>
                  <div className="w-full pt-[9.33px]">
                    <h3 className="[font-family:'Satoshi-Bold',Helvetica] text-[23px] font-bold leading-[27.6px] tracking-[-0.46px] text-[#0f0a1f]">
                      {card.title}
                    </h3>
                  </div>
                  <p className="[font-family:'Montserrat',Helvetica] text-[15px] font-normal leading-6 tracking-[0] text-[#3a3447]">
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