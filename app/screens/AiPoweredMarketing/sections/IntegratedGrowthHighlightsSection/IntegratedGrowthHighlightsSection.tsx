import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const highlightCards = [
  {
    title: "Built AI-Powered Marketing For High-Grow Companies",
    description:
      "Our AI marketing systems are specifically designed to meet the needs of SaaS, tech, ecommerce and digital-first businesses that span multiple markets.",
    iconSrc: "/AIMarketing/chat.svg",
  },
  {
    title: "Automating The Manual Work Effort",
    description:
      "Intelligent workflows developed by our team enable your team to focus on strategy and growth rather than repetitive campaign tasks.",
    iconSrc: "/AIMarketing/chat.svg",
  },
  {
    title: "Integrated With Your Global Growth Stack",
    description:
      "HireNinjas already supports hiring, compliance and workforce scaling worldwide, our AI-Powered Marketing Services align seamlessly with your wider expansion strategy.",
    iconSrc: "/AIMarketing/chat.svg",
  },
];

export const IntegratedGrowthHighlightsSection = (): JSX.Element => {
  return (
    <section className="w-full bg-[#fafaff] border-y border-[#ece8f3]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start gap-8 px-5 py-10 sm:gap-[50px] sm:px-8 sm:py-14 lg:px-8 lg:py-[70px] xl:px-[140px]">
        <header className="flex w-full max-w-[760px] flex-col items-start gap-3 sm:gap-4">
          <Badge
            variant="outline"
            className="h-auto rounded-[999px] border-[#00000029] bg-transparent px-3.5 py-[7px] text-black hover:bg-transparent"
          >
            <span className="mr-2.5 flex h-1.5 w-1.5 items-center justify-center rounded-[3px] bg-[#6ce5b1]">
              <span className="h-1.5 w-1.5 rounded-[3px] bg-[#ffffff01] shadow-[0px_0px_0px_4px_#6ce5b12e]" />
            </span>
            <span className="[font-family:'Inter',Helvetica] text-xs font-normal tracking-[1.68px] leading-[18px]">
              WHY CHOOSE HIRENINJAS FOR AI-POWERED MARKETING
            </span>
          </Badge>
          <h2 className="self-stretch [font-family:'Satoshi-Bold',Helvetica] text-[28px] font-bold leading-[34px] tracking-[-0.56px] text-[#0f0a1f] sm:text-[34px] sm:leading-[38px] sm:tracking-[-0.68px] md:text-[40px] md:leading-[44px] lg:text-[46px] lg:leading-[49.7px] lg:tracking-[-0.92px]">
            Built for high-growth. Integrated globally.
          </h2>
        </header>
        <div className="w-full max-w-[1200px]">
          <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {highlightCards.map((card) => (
              <Card
                key={card.title}
                className="h-full rounded-2xl border border-[#ece8f3] bg-white shadow-none"
              >
                <CardContent className="flex h-full flex-col items-start gap-5 p-5 sm:gap-6 sm:p-6 lg:gap-8 lg:p-8">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#f7f1ff] sm:h-11 sm:w-11 lg:h-12 lg:w-12">
                    <img
                      className="h-5 w-5 sm:h-[22px] sm:w-[22px]"
                      alt="Component"
                      src={card.iconSrc}
                    />
                  </div>
                  <div className="flex w-full flex-col items-start gap-3 sm:gap-4">
                    <h3 className="[font-family:'Satoshi-Bold',Helvetica] text-[18px] font-bold leading-[22px] tracking-[-0.36px] text-[#0f0a1f] sm:text-[20px] sm:leading-[24px] lg:text-[23px] lg:leading-[27.6px] lg:tracking-[-0.46px]">
                      {card.title}
                    </h3>
                    <p className="[font-family:'Montserrat',Helvetica] text-[13px] font-normal leading-[1.6] tracking-[0] text-[#3a3447] sm:text-[14px] lg:text-[15px] lg:leading-6">
                      {card.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
