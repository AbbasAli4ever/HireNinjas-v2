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
    iconSrc: "https://c.animaapp.com/mp3z2ouuSvWBo9/img/component-4-1.svg",
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
    iconSrc: "https://c.animaapp.com/mp3z2ouuSvWBo9/img/component-4-2.svg",
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
    iconSrc: "https://c.animaapp.com/mp3z2ouuSvWBo9/img/component-4.svg",
  },
];

export const StrategicPrinciplesSection = (): JSX.Element => {
  return (
    <section className="w-full bg-[#fafaff] border-y border-[#ece8f3] px-4 py-[56px] sm:px-6 lg:px-[140px] lg:py-[70px]">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-start gap-12">
        <header className="flex w-full max-w-[760px] flex-col items-start gap-[17.33px]">
          <div className="inline-flex items-center gap-2.5 rounded-[999px] border border-solid border-[#00000029] px-3.5 py-[7px]">
            <span className="flex h-1.5 w-1.5 items-center justify-center rounded-[3px] bg-[#6ce5b1]">
              <span className="h-1.5 w-1.5 rounded-[3px] bg-[#ffffff01] shadow-[0px_0px_0px_4px_#6ce5b12e]" />
            </span>
            <span className="flex w-fit items-center whitespace-nowrap [font-family:'Inter',Helvetica] text-xs font-normal leading-[18px] tracking-[1.68px] text-black">
              WHY HIRENINJAS FOR STRATEGY SERVICES
            </span>
          </div>
          <h2 className="w-full font-h-2 text-[length:var(--h-2-font-size)] font-[number:var(--h-2-font-weight)] leading-[var(--h-2-line-height)] tracking-[var(--h-2-letter-spacing)] text-[#0f0a1f] [font-style:var(--h-2-font-style)] max-md:text-[36px]">
            Three principles behind
            <br />
            every roadmap we deliver.
          </h2>
        </header>
        <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {strategicPrinciples.map((principle) => (
            <Card
              key={principle.title[0]}
              className="rounded-2xl border border-solid border-[#ece8f3] bg-white shadow-none"
            >
              <CardContent className="flex h-full flex-col items-start gap-2.5 p-8">
                <div className="grid h-12 w-12 grid-cols-[48px] grid-rows-[48px] rounded-xl bg-[#f7f1ff]">
                  <img
                    className="relative col-[1_/_2] row-[1_/_2] h-[22px] w-[22px] place-self-center"
                    alt="Component"
                    src={principle.iconSrc}
                  />
                </div>
                <div className="flex w-full flex-col items-start pt-[9.32px]">
                  <h3 className="[font-family:'Satoshi-Bold',Helvetica] text-[23px] font-bold leading-[27.6px] tracking-[-0.46px] text-[#0f0a1f]">
                    {principle.title.map((line, index) => (
                      <span key={line}>
                        {line}
                        {index < principle.title.length - 1 && <br />}
                      </span>
                    ))}
                  </h3>
                </div>
                <div className="flex w-full flex-col items-start">
                  <p className="[font-family:'Montserrat',Helvetica] text-[15px] font-normal leading-6 tracking-[0] text-[#3a3447]">
                    {principle.description.map((line, index) => (
                      <span key={line}>
                        {line}
                        {index < principle.description.length - 1 && <br />}
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
