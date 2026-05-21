import { Card, CardContent } from "@/components/ui/card";

const strategicPrinciples = [
  {
    title: ["Research-Driven", "Decision Making"],
    description: [
      "Every recommendation made should",
      "be supported by data such as",
      "competitor benchmarking, keyword",
      "intelligence and audience behavior",
      "insights to ensure your strategy is",
      "founded in facts rather than",
      "assumptions.",
    ],
    iconSrc: "/digital-marketing/stat.svg",
  },
  {
    title: ["At Full-Funnel", "Planning Approach"],
    description: [
      "We create strategies that address",
      "every stage of the customer journey,",
      "from awareness through conversion",
      "and retention - resulting in sustained",
      "growth at each step.",
    ],
    iconSrc: "/digital-marketing/globe.svg",
  },
  {
    title: ["Built for UAE", "Market Dynamics"],
    description: [
      "Our strategies are custom designed for",
      "businesses operating in Dubai and the",
      "wider UAE market, taking into account",
      "regional competition, audience",
      "expectations, and platform trends.",
    ],
    iconSrc: "/digital-marketing/star.svg",
  },
];

export const StrategicPrinciplesSection = (): JSX.Element => {
  return (
    <section className="w-full bg-[#fafaff] border-y border-[#ece8f3] px-4 py-12 sm:px-8 sm:py-16 md:px-12 lg:px-16 lg:py-[70px] xl:px-[140px]">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-start gap-8 sm:gap-10 lg:gap-12">
        <header className="flex w-full max-w-[760px] flex-col items-start gap-4 lg:gap-[17.33px]">
          <div className="inline-flex items-center gap-2.5 rounded-[999px] border border-solid border-[#00000029] px-3.5 py-[7px]">
            <span className="flex h-1.5 w-1.5 items-center justify-center rounded-[3px] bg-[#6ce5b1]">
              <span className="h-1.5 w-1.5 rounded-[3px] bg-[#ffffff01] shadow-[0px_0px_0px_4px_#6ce5b12e]" />
            </span>
            <span className="flex w-fit items-center whitespace-nowrap [font-family:'Inter',Helvetica] text-[10px] sm:text-xs font-normal leading-[18px] tracking-[1.68px] text-black">
              WHY HIRENINJAS FOR STRATEGY SERVICES
            </span>
          </div>
          <h2 className="w-full text-[32px] leading-[1.15] tracking-[-1px] sm:text-[40px] sm:tracking-[-1.4px] lg:text-5xl xl:font-h-2 xl:text-[length:var(--h-2-font-size)] xl:font-[number:var(--h-2-font-weight)] xl:leading-[var(--h-2-line-height)] xl:tracking-[var(--h-2-letter-spacing)] text-[#0f0a1f] font-bold [font-family:'Satoshi-Bold',Helvetica] xl:[font-style:var(--h-2-font-style)]">
            <span className="xl:block">Three principles behind </span>
            <span className="xl:block">every roadmap we deliver.</span>
          </h2>
        </header>
        <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {strategicPrinciples.map((principle) => (
            <Card
              key={principle.title[0]}
              className="rounded-2xl border border-solid border-[#ece8f3] bg-white shadow-none"
            >
              <CardContent className="flex h-full flex-col items-start gap-2.5 p-6 sm:p-7 xl:p-8">
                <div className="grid h-12 w-12 grid-cols-[48px] grid-rows-[48px] rounded-xl bg-[#f7f1ff]">
                  <img
                    className="relative col-[1_/_2] row-[1_/_2] h-[22px] w-[22px] place-self-center"
                    alt="Component"
                    src={principle.iconSrc}
                  />
                </div>
                <div className="flex w-full flex-col items-start pt-[9.32px]">
                  <h3 className="[font-family:'Satoshi-Bold',Helvetica] text-xl sm:text-[23px] font-bold leading-[1.2] xl:leading-[27.6px] tracking-[-0.46px] text-[#0f0a1f]">
                    {principle.title.join(" ")}
                  </h3>
                </div>
                <div className="flex w-full flex-col items-start">
                  <p className="[font-family:'Montserrat',Helvetica] text-sm sm:text-[15px] font-normal leading-[1.6] xl:leading-6 tracking-[0] text-[#3a3447]">
                    {principle.description.join(" ")}
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
