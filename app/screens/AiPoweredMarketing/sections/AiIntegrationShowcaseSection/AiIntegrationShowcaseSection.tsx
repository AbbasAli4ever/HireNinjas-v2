import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const aiCapabilities = [
  { title: "AI content", action: "Produce" },
  { title: "Predictive analytics", action: "Forecast" },
  { title: "Chatbots & assistants", action: "Engage" },
  { title: "Marketing automation", action: "Nurture" },
  { title: "Personalisation", action: "Tailor" },
];

export const AiIntegrationShowcaseSection = (): JSX.Element => {
  return (
    <section className="w-full bg-white py-16 md:py-20 lg:py-24">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-10 px-6 md:px-8 lg:gap-12">
        <div className="grid items-end gap-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)] lg:gap-8">
          <article className="flex flex-col items-start gap-8">
            <header className="flex w-full max-w-[760px] flex-col items-start gap-4">
              <Badge
                variant="outline"
                className="inline-flex h-auto rounded-[999px] border border-[#00000029] bg-transparent px-3.5 py-[7px] text-black hover:bg-transparent"
              >
                <span className="mr-2.5 flex h-1.5 w-1.5 items-center justify-center rounded-[3px] bg-[#6ce5b1]">
                  <span className="h-1.5 w-1.5 rounded-[3px] bg-[#ffffff01] shadow-[0px_0px_0px_4px_#6ce5b12e]" />
                </span>
                <span className="[font-family:'Inter',Helvetica] text-xs font-normal tracking-[1.68px] leading-[18px]">
                  TURN ARTIFICIAL INTELLIGENCE INTO A GROWTH ENGINE
                </span>
              </Badge>
              <h2 className="self-stretch font-h-2 text-[length:var(--h-2-font-size)] font-[number:var(--h-2-font-weight)] leading-[var(--h-2-line-height)] tracking-[var(--h-2-letter-spacing)] text-[#0f0a1f] [font-style:var(--h-2-font-style)] max-md:text-[40px] max-sm:text-[32px]">
                Practical, ROI-driven AI integration.
              </h2>
            </header>
            <p className="max-w-[760px] self-stretch [font-family:'Montserrat',Helvetica] text-base font-normal leading-[25.6px] tracking-[0] text-[#3a3447]">
              HireNinjas provides growth-minded companies with practical,
              ROI-driven AI integration for their marketing systems, not
              experiments, but rather scalable automation that improves
              performance across the funnel. From AI-assisted content production
              and predictive analytics to intelligent chatbots and real-time
              campaign optimisation, we implement solutions that reduce
              acquisition costs while simultaneously increasing conversion
              rates.
              <br />
              <br />
              HireNinjas&#39; AI marketing solutions are tailored specifically
              for high-growth tech companies, providing talent, compliance and
              scaling infrastructure solutions that fit seamlessly into existing
              growth stacks and offer smarter campaigns, faster execution and
              personalized customer journeys that operate continuously across
              Dubai, UAE and international markets.
            </p>
          </article>
          <Card className="rounded-2xl border border-[#f0e2ff] bg-[linear-gradient(180deg,rgba(248,241,255,1)_0%,rgba(255,255,255,1)_100%)] shadow-none">
            <CardContent className="flex flex-col gap-3 p-7">
              {aiCapabilities.map((item) => (
                <button
                  key={item.title}
                  type="button"
                  className="flex h-auto w-full items-center justify-between rounded-xl border border-[#ece8f3] bg-white px-4 py-3.5 text-left transition-colors hover:bg-[#fcfaff]"
                >
                  <span className="[font-family:'Satoshi-Bold',Helvetica] text-[15px] font-bold leading-6 tracking-[0] text-[#0f0a1f]">
                    {item.title}
                  </span>
                  <span className="inline-flex rounded-[999px] bg-[#f7f1ff] px-[9px] py-1">
                    <span className="[font-family:'Montserrat',Helvetica] text-[11px] font-semibold leading-[17.6px] tracking-[0] text-[#591f97]">
                      {item.action}
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
