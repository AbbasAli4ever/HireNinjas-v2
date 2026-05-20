import { Card, CardContent } from "@/components/ui/card";

const differentiators = [
  {
    title: "Strategy Led Brand Development",
    description:
      "Brand identities designed by us take into account positioning, audience psychology and market context; not merely visual preferences or trends.",
  },
  {
    title: "Built for UAE Business Environments",
    description:
      "Our branding work reflects the cultural expectations and commercial landscape of Dubai and the wider UAE, helping brands connect locally while expanding globally.",
  },
  {
    title: "Engineered for Marketing Consistency",
    description:
      "Every identity system we design is tailored to perform across websites, advertising campaigns, social media accounts, packaging materials and corporate materials.",
  },
];

export const StrategicDifferentiatorsSection = (): JSX.Element => {
  return (
    <section className="w-full bg-[#fafaff] border-y border-[#ece8f3]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start gap-[50px] px-6 py-[70px] sm:px-10 lg:px-[140px]">
        <header className="flex w-full max-w-[760px] flex-col items-start gap-4">
          <div className="inline-flex items-center gap-2.5 rounded-[999px] border border-solid border-[#00000029] px-3.5 py-[7px]">
            <span className="flex h-1.5 w-1.5 items-center justify-center rounded-[3px] bg-[#6ce5b1]">
              <span className="h-1.5 w-1.5 rounded-[3px] bg-[#ffffff01] shadow-[0px_0px_0px_4px_#6ce5b12e]" />
            </span>
            <span className="font-inter text-xs font-normal leading-[18px] tracking-[1.68px] text-black">
              WHY HIRENINJAS FOR BRANDING &amp; IDENTITY
            </span>
          </div>
          <h2 className="self-stretch font-satoshi text-[length:var(--h-2-font-size)] font-[number:var(--h-2-font-weight)] leading-[var(--h-2-line-height)] tracking-[var(--h-2-letter-spacing)] text-[#0f0a1f] [font-style:var(--h-2-font-style)]">
            Strategy-led. Locally tuned.
            <br />
            Built to perform.
          </h2>
        </header>
        <div className="w-full max-w-[1200px]">
          <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {differentiators.map((item) => (
              <Card
                key={item.title}
                className="h-full rounded-2xl border border-solid border-[#ece8f3] bg-white shadow-none"
              >
                <CardContent className="flex h-full flex-col items-start gap-8 p-8">
                  <div className="grid h-12 w-12 grid-cols-[48px] grid-rows-[48px] rounded-xl bg-[#f7f1ff]">
                    <img
                      className="col-[1_/_2] row-[1_/_2] h-[22px] w-[22px] self-center justify-self-center"
                      alt="Component"
                      src="https://c.animaapp.com/mpcclquhSkUmAZ/img/component-4-2.svg"
                    />
                  </div>
                  <div className="flex w-full flex-col items-start gap-4">
                    <h3 className="font-satoshi text-[23px] font-bold leading-[27.6px] tracking-[-0.46px] text-[#0f0a1f]">
                      {item.title}
                    </h3>
                    <p className="font-montserrat text-[15px] font-normal leading-6 tracking-[0] text-[#3a3447]">
                      {item.description}
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
