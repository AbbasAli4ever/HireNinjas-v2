import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const highlightCards = [
  {
    title: (
      <>
        Dual Organic + Paid
        <br />
        Strategy Advantage
      </>
    ),
    description: (
      <>
        At our firm, we combine long-term
        <br />
        SEO growth with immediate PPC
        <br />
        performance for maximum benefit to
        <br />
        both businesses today and into the
        <br />
        future. By taking this approach, traffic
        <br />
        can be captured quickly while
        <br />
        sustainable rankings can be developed
        <br />
        over time.
      </>
    ),
    iconSrc: "/seo-ppc/arrow.svg",
  },
  {
    title: (
      <>
        Arabic &amp; English
        <br />
        Search Optimisation
      </>
    ),
    description: (
      <>
        Our campaigns are optimized to
        <br />
        match search behaviour across Dubai
        <br />
        and Abu Dhabi, helping brands reach
        <br />
        both local and international audiences
        <br />
        effectively. Dedicated Campaign
        <br />
        Management with ROI Focus.
      </>
    ),
    iconSrc: "/seo-ppc/globe.svg",
  },
  {
    title: (
      <>
        Dedicated Campaign
        <br />
        Management
        <br />
        with ROI Focus
      </>
    ),
    description: (
      <>
        Every keyword, landing page, and
        <br />
        bidding strategy we employ focuses
        <br />
        on real measurable performance
        <br />
        improvements instead of
        <br />
        vanity metrics.
      </>
    ),
    iconSrc: "/seo-ppc/stat.svg",
  },
];

export const PerformanceHighlightsSection = (): JSX.Element => {
  return (
    <section className="w-full bg-[#fafaff] border-y border-[#ece8f3] px-6 py-10 sm:px-8 sm:py-14 lg:px-8 lg:py-20 xl:px-[120px] xl:py-24">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-start gap-8 sm:gap-10 lg:gap-12 lg:px-10">
        <header className="flex w-full flex-col items-start gap-3 sm:gap-[16.83px] lg:max-w-[760px]">
          <Badge className="h-auto rounded-[999px] border border-[#f0e2ff] bg-[#f7f1ff] px-3.5 pb-[7.69px] pt-[7.5px] [font-family:'Montserrat',Helvetica] text-[10px] font-semibold tracking-[1.2px] text-[#8a39e4] hover:bg-[#f7f1ff] sm:text-xs sm:tracking-[1.68px]">
            WHY HIRENINJAS FOR SEO &amp; PPC SERVICES?
          </Badge>
          <div className="w-full">
            <h2 className="[font-family:'Satoshi-Bold',Helvetica] text-[28px] font-bold leading-[34px] tracking-[-0.56px] text-[#0f0a1f] sm:text-[34px] sm:leading-[38px] sm:tracking-[-0.68px] md:text-[40px] md:leading-[44px] md:tracking-[-0.8px] lg:text-[46px] lg:leading-[49.7px] lg:tracking-[-0.92px]">
              Long-term rankings,
              <br />
              immediate performance.
            </h2>
          </div>
        </header>
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3">
          {highlightCards.map((card, index) => (
            <Card
              key={`highlight-card-${index}`}
              className="rounded-2xl border border-[#ece8f3] bg-white shadow-none"
            >
              <CardContent className="flex h-full flex-col items-start gap-2.5 p-5 sm:p-6 lg:p-8">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#f7f1ff] sm:h-12 sm:w-12">
                  <img
                    className="h-5 w-5 sm:h-[22px] sm:w-[22px]"
                    alt="Component"
                    src={card.iconSrc}
                  />
                </div>
                <div className="w-full pt-2 sm:pt-[9.33px]">
                  <h3 className="[font-family:'Satoshi-Bold',Helvetica] text-[18px] font-bold leading-[22px] tracking-[-0.36px] text-[#0f0a1f] sm:text-[20px] sm:leading-[24px] lg:text-[23px] lg:leading-[27.6px] lg:tracking-[-0.46px]">
                    {card.title}
                  </h3>
                </div>
                <div className="w-full">
                  <p className="[font-family:'Montserrat',Helvetica] text-[13px] font-normal leading-[1.6] tracking-[0] text-[#3a3447] sm:text-[14px] lg:text-[15px] lg:leading-6">
                    {card.description}
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
