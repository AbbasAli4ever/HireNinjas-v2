import { Card, CardContent } from "@/components/ui/card";

const strategyCards = [
  {
    title: "Cinematic Storytelling",
    description:
      "High-impact visual storytelling that builds brand credibility and drives massive engagement on digital platforms.",
    iconSrc: "https://c.animaapp.com/mpccdn8iGwnAdb/img/component-4.svg",
  },
  {
    title: "Cinematic Storytelling",
    description:
      "High-impact visual storytelling that builds brand credibility and drives massive engagement on digital platforms.",
    iconSrc: "https://c.animaapp.com/mpccdn8iGwnAdb/img/component-4.svg",
  },
  {
    title: "Cinematic Storytelling",
    description:
      "High-impact visual storytelling that builds brand credibility and drives massive engagement on digital platforms.",
    iconSrc: "https://c.animaapp.com/mpccdn8iGwnAdb/img/component-4.svg",
  },
];

export const StrategyApproachSection = (): JSX.Element => {
  return (
    <section className="w-full border-y border-[#ece8f3] bg-[#fafaff] px-4 py-[34px] sm:px-6 md:px-10 lg:px-[60px] xl:px-[140px] xl:py-[70px]">
      <div className="mx-auto w-full max-w-[1200px]">
        <p className="sr-only">
          This section presents three strategy cards focused on cinematic
          storytelling.
        </p>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {strategyCards.map((card, index) => (
            <Card
              key={`${card.title}-${index}`}
              className="rounded-2xl border border-[#ece8f3] bg-white shadow-none"
            >
              <CardContent className="flex min-h-[286px] flex-col items-start gap-8 p-8">
                <div className="grid h-12 w-12 grid-cols-[48px] grid-rows-[48px] rounded-xl bg-[#f7f1ff]">
                  <img
                    className="relative col-[1_/_2] row-[1_/_2] h-[22px] w-[22px] self-center justify-self-center"
                    alt=""
                    src={card.iconSrc}
                  />
                </div>
                <article className="flex w-full flex-col items-start gap-4">
                  <h3 className="[font-family:'Satoshi-Bold',Helvetica] text-[23px] font-bold leading-[27.6px] tracking-[-0.46px] text-[#0f0a1f]">
                    {card.title}
                  </h3>
                  <p className="[font-family:'Montserrat',Helvetica] text-[15px] font-normal leading-6 tracking-[0] text-[#3a3447]">
                    {card.description}
                  </p>
                </article>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
