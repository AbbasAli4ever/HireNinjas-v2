import { Card, CardContent } from "@/components/ui/card";

const strategyCards = [
  {
    title: "Cinematic Storytelling",
    description:
      "High-impact visual storytelling that builds brand credibility and drives massive engagement on digital platforms.",
    iconSrc: "/video/chat.svg",
  },
  {
    title: "Cinematic Storytelling",
    description:
      "High-impact visual storytelling that builds brand credibility and drives massive engagement on digital platforms.",
    iconSrc: "/video/chat.svg",
  },
  {
    title: "Cinematic Storytelling",
    description:
      "High-impact visual storytelling that builds brand credibility and drives massive engagement on digital platforms.",
    iconSrc: "/video/chat.svg",
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
              <CardContent className="flex min-h-[220px] flex-col items-start gap-5 p-5 sm:min-h-[250px] sm:gap-6 sm:p-6 lg:min-h-[286px] lg:gap-8 lg:p-8">
                <div className="grid h-10 w-10 grid-cols-[40px] grid-rows-[40px] rounded-xl bg-[#f7f1ff] sm:h-11 sm:w-11 sm:grid-cols-[44px] sm:grid-rows-[44px] lg:h-12 lg:w-12 lg:grid-cols-[48px] lg:grid-rows-[48px]">
                  <img
                    className="relative col-[1_/_2] row-[1_/_2] h-5 w-5 self-center justify-self-center sm:h-[22px] sm:w-[22px]"
                    alt=""
                    src={card.iconSrc}
                  />
                </div>
                <article className="flex w-full flex-col items-start gap-3 sm:gap-4">
                  <h3 className="[font-family:'Satoshi-Bold',Helvetica] text-[18px] font-bold leading-[22px] tracking-[-0.36px] text-[#0f0a1f] sm:text-[20px] sm:leading-[24px] lg:text-[23px] lg:leading-[27.6px] lg:tracking-[-0.46px]">
                    {card.title}
                  </h3>
                  <p className="[font-family:'Montserrat',Helvetica] text-[13px] font-normal leading-[1.6] tracking-[0] text-[#3a3447] sm:text-[14px] lg:text-[15px] lg:leading-6">
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
