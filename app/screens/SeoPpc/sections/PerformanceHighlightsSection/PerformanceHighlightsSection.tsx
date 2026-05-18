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
    iconSrc: "https://c.animaapp.com/mpb6dv7tQ8BPXz/img/component-3-8.svg",
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
    iconSrc: "https://c.animaapp.com/mpb6dv7tQ8BPXz/img/component-3-9.svg",
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
    iconSrc: "https://c.animaapp.com/mpb6dv7tQ8BPXz/img/component-3-6.svg",
  },
];

export const PerformanceHighlightsSection = (): JSX.Element => {
  return (
    <section className="w-full bg-[#fafaff] border-y border-[#ece8f3] px-6 py-16 sm:px-8 lg:px-[120px] lg:py-24">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-start gap-12 lg:px-10">
        <header className="flex w-full max-w-[760px] flex-col items-start gap-[16.83px]">
          <Badge className="h-auto rounded-[999px] border border-[#f0e2ff] bg-[#f7f1ff] px-3.5 pb-[7.69px] pt-[7.5px] [font-family:'Montserrat',Helvetica] text-xs font-semibold tracking-[1.68px] text-[#8a39e4] hover:bg-[#f7f1ff]">
            WHY HIRENINJAS FOR SEO &amp; PPC SERVICES?
          </Badge>
          <div className="w-full">
            <h2 className="[font-family:'Satoshi-Bold',Helvetica] text-[34px] font-bold leading-[38px] tracking-[-0.68px] text-[#0f0a1f] sm:text-[40px] sm:leading-[44px] sm:tracking-[-0.8px] lg:text-[46px] lg:leading-[49.7px] lg:tracking-[-0.92px]">
              Long-term rankings,
              <br />
              immediate performance.
            </h2>
          </div>
        </header>
        <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {highlightCards.map((card, index) => (
            <Card
              key={`highlight-card-${index}`}
              className="rounded-2xl border border-[#ece8f3] bg-white shadow-none"
            >
              <CardContent className="flex h-full flex-col items-start gap-2.5 p-8">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#f7f1ff]">
                  <img
                    className="h-[22px] w-[22px]"
                    alt="Component"
                    src={card.iconSrc}
                  />
                </div>
                <div className="w-full pt-[9.33px]">
                  <h3 className="[font-family:'Satoshi-Bold',Helvetica] text-[23px] font-bold leading-[27.6px] tracking-[-0.46px] text-[#0f0a1f]">
                    {card.title}
                  </h3>
                </div>
                <div className="w-full">
                  <p className="[font-family:'Montserrat',Helvetica] text-[15px] font-normal leading-6 tracking-[0] text-[#3a3447]">
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
