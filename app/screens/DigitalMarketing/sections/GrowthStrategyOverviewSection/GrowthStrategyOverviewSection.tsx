import { Card, CardContent } from "@/components/ui/card";

const paragraphs = [
  `At HireNinjas, we create custom digital marketing strategies tailored specifically for businesses in Dubai and throughout the UAE who seek direction, clarity, and measurable performance from their marketing investments.`,
  `Our strategy process leverages competitor intelligence, audience behavior insights, keyword opportunity mapping, and channel performance forecasting to create a strategic growth blueprint tailored specifically to your commercial goals. Instead of leaving growth plans up to chance or isolated tactics alone, we define how each marketing channel works together across the full customer journey and define our growth plans accordingly.`,
  `HireNinjas' strategy services range from brand positioning and acquisition strategy, conversion optimization and reporting framework development, all the way through to long-term scalability and measurable return on investment (ROI).`,
];

const strategyItems = [
  {
    id: "01",
    title: "Brand Positioning & Acquisition",
    description:
      "Sharpen who you are and how you win attention in the UAE market.",
  },
  {
    id: "02",
    title: "Conversion Optimization",
    description:
      "Tighten funnels so every dollar drives more pipeline and revenue.",
  },
  {
    id: "03",
    title: "Reporting Framework",
    description:
      "Decision-grade dashboards built on the metrics that matter to growth.",
  },
  {
    id: "04",
    title: "Long-term Scalability",
    description:
      "Plans engineered for measurable, compounding return on investment.",
  },
];

export const GrowthStrategyOverviewSection = (): JSX.Element => {
  return (
    <section className="w-full px-5 py-16 sm:px-8 lg:px-[90px] lg:py-20">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-start gap-12">
        <header className="flex w-full max-w-[760px] flex-col items-start gap-4">
          <div className="inline-flex items-center gap-2.5 rounded-[999px] border border-solid border-[#00000029] px-3.5 py-[7px]">
            <span className="flex h-1.5 w-1.5 items-start justify-center rounded-[3px] bg-[#6ce5b1]">
              <span className="h-1.5 w-1.5 rounded-[3px] bg-[#ffffff01] shadow-[0px_0px_0px_4px_#6ce5b12e]" />
            </span>
            <p className="flex w-fit items-center whitespace-nowrap [font-family:'Inter',Helvetica] text-xs font-normal leading-[18px] tracking-[1.68px] text-black">
              BUILD A SMARTER DIGITAL GROWTH ROADMAP
            </p>
          </div>
          <h2 className="self-stretch font-h-2 text-[length:var(--h-2-font-size)] font-[number:var(--h-2-font-weight)] leading-[var(--h-2-line-height)] tracking-[var(--h-2-letter-spacing)] text-[#0f0a1f] [font-style:var(--h-2-font-style)]">
            Strategy, tailored to commercial
            <br />
            goals not guesswork.
          </h2>
        </header>
        <div className="grid w-full grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,530px)_minmax(0,1fr)] lg:gap-[60px]">
          <article className="flex w-full flex-col items-start gap-[15.3px]">
            {paragraphs.map((paragraph, index) => (
              <p
                key={`paragraph-${index}`}
                className="[font-family:'Montserrat',Helvetica] text-base font-normal leading-[25.6px] tracking-[0] text-[#3a3447]"
              >
                {paragraph}
              </p>
            ))}
          </article>
          <Card className="w-full rounded-2xl border border-solid border-[#f0e2ff] bg-[linear-gradient(180deg,rgba(248,241,255,1)_0%,rgba(255,255,255,1)_100%)] shadow-none">
            <CardContent className="flex flex-col gap-3 p-7">
              {strategyItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className="flex w-full items-start gap-3.5 rounded-xl p-3.5 text-left transition-colors hover:bg-white/40"
                >
                  <span className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-[10px] bg-[#8a39e4]">
                    <span className="[font-family:'Satoshi-Bold',Helvetica] text-center text-sm font-bold leading-[22.4px] tracking-[0] text-white">
                      {item.id}
                    </span>
                  </span>
                  <span className="flex min-w-0 flex-1 flex-col items-start gap-[3px] pt-[1px]">
                    <span className="[font-family:'Satoshi-Bold',Helvetica] text-[17px] font-bold leading-[22.1px] tracking-[-0.34px] text-[#0f0a1f]">
                      {item.title}
                    </span>
                    <span className="[font-family:'Montserrat',Helvetica] text-sm font-normal leading-[22.4px] tracking-[0] text-[#3a3447]">
                      {item.description}
                    </span>
                  </span>
                </button>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
