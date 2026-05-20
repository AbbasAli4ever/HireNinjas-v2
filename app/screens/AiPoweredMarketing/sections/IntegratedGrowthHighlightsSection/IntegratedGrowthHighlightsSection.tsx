import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const highlightCards = [
  {
    title: "Built AI-Powered Marketing For High-Grow Companies",
    description:
      "Our AI marketing systems are specifically designed to meet the needs of SaaS, tech, ecommerce and digital-first businesses that span multiple markets.",
    iconSrc: "https://c.animaapp.com/mpds11xn92TSuJ/img/component-4.svg",
  },
  {
    title: "Automating The Manual Work Effort",
    description:
      "Intelligent workflows developed by our team enable your team to focus on strategy and growth rather than repetitive campaign tasks.",
    iconSrc: "https://c.animaapp.com/mpds11xn92TSuJ/img/component-4.svg",
  },
  {
    title: "Integrated With Your Global Growth Stack",
    description:
      "HireNinjas already supports hiring, compliance and workforce scaling worldwide, our AI-Powered Marketing Services align seamlessly with your wider expansion strategy.",
    iconSrc: "https://c.animaapp.com/mpds11xn92TSuJ/img/component-4.svg",
  },
];

export const IntegratedGrowthHighlightsSection = (): JSX.Element => {
  return (
    <section className="w-full bg-[#fafaff] border-y border-[#ece8f3]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start gap-[50px] px-6 py-[56px] sm:px-10 md:px-16 lg:px-[140px] lg:py-[70px]">
        <header className="flex w-full max-w-[760px] flex-col items-start gap-4">
          <Badge
            variant="outline"
            className="h-auto rounded-[999px] border-[#00000029] bg-transparent px-3.5 py-[7px] text-black hover:bg-transparent"
          >
            <span className="mr-2.5 flex h-1.5 w-1.5 items-center justify-center rounded-[3px] bg-[#6ce5b1]">
              <span className="h-1.5 w-1.5 rounded-[3px] bg-[#ffffff01] shadow-[0px_0px_0px_4px_#6ce5b12e]" />
            </span>
            <span className="[font-family:'Inter',Helvetica] text-xs font-normal tracking-[1.68px] leading-[18px] whitespace-nowrap">
              WHY CHOOSE HIRENINJAS FOR AI-POWERED MARKETING
            </span>
          </Badge>
          <h2 className="self-stretch font-h-2 text-[length:var(--h-2-font-size)] font-[number:var(--h-2-font-weight)] leading-[var(--h-2-line-height)] tracking-[var(--h-2-letter-spacing)] text-[#0f0a1f] [font-style:var(--h-2-font-style)] max-md:text-[38px] max-sm:text-[32px]">
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
                <CardContent className="flex h-full flex-col items-start gap-8 p-8">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#f7f1ff]">
                    <img
                      className="h-[22px] w-[22px]"
                      alt="Component"
                      src={card.iconSrc}
                    />
                  </div>
                  <div className="flex w-full flex-col items-start gap-4">
                    <h3 className="[font-family:'Satoshi-Bold',Helvetica] text-[23px] font-bold leading-[27.6px] tracking-[-0.46px] text-[#0f0a1f]">
                      {card.title}
                    </h3>
                    <p className="[font-family:'Montserrat',Helvetica] text-[15px] font-normal leading-6 tracking-[0] text-[#3a3447]">
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
