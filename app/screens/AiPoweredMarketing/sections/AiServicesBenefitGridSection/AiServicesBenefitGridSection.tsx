import { Card, CardContent } from "@/components/ui/card";

const serviceCards = [
  {
    step: "01 — PRODUCE",
    title: "AI Content Generation",
    description:
      "Automate the production workflows required for large scale blog posts, landing pages, ads copy and visual assets with AI assisted production workflows while keeping a consistent brand voice across global campaigns.",
  },
  {
    step: "02 — FORECAST",
    title: "Predictive Analytics",
    description:
      "Machine learning insights allow you to accurately predict customer behaviour, detect churn risks early and optimize campaigns before performance declines.",
  },
  {
    step: "03 — ENGAGE",
    title: "Chatbots & AI Assistants",
    description:
      "Deploy WhatsApp AI Assistants to capture leads instantly 24hrs a day.",
  },
  {
    step: "04 — NURTURE",
    title: "Marketing Automation",
    description:
      "Build automation systems that send personalised emails, nurture sequences and lifecycle campaigns without manual intervention.",
  },
  {
    step: "05 — TAILOR",
    title: "Personalisation Engines",
    description:
      "Provide tailored website experiences such as product recommendations and behavioral messaging based on real-time visitor data.",
  },
];

export const AiServicesBenefitGridSection = (): JSX.Element => {
  return (
    <section className="w-full bg-white border-y border-[#ece8f3] px-4 py-[70px] sm:px-6 lg:px-[140px]">
      <div className="mx-auto flex w-full max-w-[1160px] flex-col items-start gap-12">
        <header className="flex w-full flex-col items-start gap-4">
          <div className="inline-flex items-center gap-2.5 rounded-[999px] border border-[#00000029] px-3.5 py-[7px]">
            <span className="flex h-1.5 w-1.5 items-center justify-center rounded-[3px] bg-[#6ce5b1]">
              <span className="h-1.5 w-1.5 rounded-[3px] bg-[#ffffff01] shadow-[0px_0px_0px_4px_#6ce5b12e]" />
            </span>
            <p className="whitespace-nowrap [font-family:'Inter',Helvetica] text-xs font-normal leading-[18px] tracking-[1.68px] text-black">
              OUR AI-POWERED MARKETING SERVICES INCLUDE
            </p>
          </div>
          <div className="w-full">
            <h2 className="[font-family:'Satoshi-Bold',Helvetica] text-[36px] font-bold leading-[1.08] tracking-[-0.92px] text-[#0f0a1f] sm:text-[42px] lg:text-[46px]">
              From content to chat to ad optimization.
            </h2>
          </div>
        </header>
        <div className="flex w-full flex-col gap-5">
          <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {serviceCards.slice(0, 3).map((card) => (
              <Card
                key={card.step}
                className="relative h-full overflow-hidden rounded-2xl border border-[#ece8f3] bg-white shadow-none"
              >
                <CardContent className="flex h-full flex-col items-start gap-2.5 p-7">
                  <div className="grid h-11 w-11 grid-cols-[44px] grid-rows-[44px] rounded-[11px] bg-[#f7f1ff]">
                    <img
                      className="col-[1_/_2] row-[1_/_2] h-[22px] w-[22px] place-self-center"
                      alt="Component"
                      src="https://c.animaapp.com/mpds11xn92TSuJ/img/component-4-1.svg"
                    />
                  </div>
                  <div className="w-full pt-[7px] pb-[0.8px]">
                    <p className="[font-family:'Satoshi-Bold',Helvetica] text-[13px] font-bold leading-[20.8px] tracking-[2.08px] text-[#8a39e4]">
                      {card.step}
                    </p>
                  </div>
                  <div className="w-full pt-[3.99px]">
                    <h3 className="[font-family:'Satoshi-Bold',Helvetica] text-[23px] font-bold leading-[27.6px] tracking-[-0.46px] text-[#0f0a1f]">
                      {card.title}
                    </h3>
                  </div>
                  <p className="[font-family:'Montserrat',Helvetica] text-[15px] font-normal leading-6 text-[#3a3447]">
                    {card.description}
                  </p>
                  <div className="pointer-events-none absolute bottom-[-29px] right-[-29px] h-[140px] w-[140px] rounded-[70px] opacity-0 [background:radial-gradient(50%_50%_at_50%_50%,rgba(139,58,229,0.18)_0%,rgba(139,58,229,0)_70%)]" />
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2">
            {serviceCards.slice(3, 5).map((card) => (
              <Card
                key={card.step}
                className="relative h-full overflow-hidden rounded-2xl border border-[#ece8f3] bg-white shadow-none"
              >
                <CardContent className="flex h-full flex-col items-start gap-2.5 p-7">
                  <div className="grid h-11 w-11 grid-cols-[44px] grid-rows-[44px] rounded-[11px] bg-[#f7f1ff]">
                    <img
                      className="col-[1_/_2] row-[1_/_2] h-[22px] w-[22px] place-self-center"
                      alt="Component"
                      src="https://c.animaapp.com/mpds11xn92TSuJ/img/component-4-1.svg"
                    />
                  </div>
                  <div className="w-full pt-[7px] pb-[0.8px]">
                    <p className="[font-family:'Satoshi-Bold',Helvetica] text-[13px] font-bold leading-[20.8px] tracking-[2.08px] text-[#8a39e4]">
                      {card.step}
                    </p>
                  </div>
                  <div className="w-full pt-[3.99px]">
                    <h3 className="[font-family:'Satoshi-Bold',Helvetica] text-[23px] font-bold leading-[27.6px] tracking-[-0.46px] text-[#0f0a1f]">
                      {card.title}
                    </h3>
                  </div>
                  <p className="[font-family:'Montserrat',Helvetica] text-[15px] font-normal leading-6 text-[#3a3447]">
                    {card.description}
                  </p>
                  <div className="pointer-events-none absolute bottom-[-29px] right-[-29px] h-[140px] w-[140px] rounded-[70px] opacity-0 [background:radial-gradient(50%_50%_at_50%_50%,rgba(139,58,229,0.18)_0%,rgba(139,58,229,0)_70%)]" />
                </CardContent>
              </Card>
            ))}
          </div>
          <Card className="relative w-full overflow-hidden rounded-3xl border border-[#f0e2ff] bg-transparent shadow-none">
            <CardContent className="relative flex flex-col items-start gap-[15.4px] overflow-hidden rounded-3xl bg-[linear-gradient(180deg,rgba(248,241,255,1)_0%,rgba(255,255,255,1)_100%)] p-7">
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-[695px] w-[59.89%] -translate-x-1/2 -translate-y-1/2 blur-[10px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(189,140,255,0.5)_0%,rgba(189,140,255,0)_70%)]" />
              <div className="relative inline-flex items-center gap-2 rounded-[999px] border border-[#f0e2ff] bg-[#f7f1ff] px-3.5 pt-[7.5px] pb-[7.69px]">
                <span className="h-1.5 w-1.5 rounded-[3px] bg-[#8a39e4]" />
                <p className="whitespace-nowrap [font-family:'Montserrat',Helvetica] text-xs font-semibold leading-[19.2px] tracking-[1.68px] text-[#8a39e4]">
                  06 — OPTIMISE
                </p>
              </div>
              <div className="relative w-full max-w-[460.37px] pt-[1.6px] pb-[0.68px]">
                <h3 className="[font-family:'Satoshi-Bold',Helvetica] text-[23px] font-bold leading-[27.6px] tracking-[-0.46px] text-[#0f0a1f]">
                  AI Ad Optimisation
                </h3>
              </div>
              <p className="relative w-full [font-family:'Montserrat',Helvetica] text-[15px] font-normal leading-6 text-[#3a3447]">
                Constantly provides automated tools to optimise ad placement on
                social networks. Continue to optimize campaign performance using
                machine-learning bid strategies, audience signals and automated
                creative testing across platforms.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
