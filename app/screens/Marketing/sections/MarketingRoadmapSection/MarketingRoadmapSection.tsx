import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
const brandItems = [
  { title: "Channel selection", label: "Strategy" },
  { title: "Funnel optimisation", label: "Convert" },
  { title: "Campaign structure", label: "Build" },
  { title: "Budget allocation", label: "Plan" },
  { title: "Action roadmap", label: "Execute" },
];
export const MarketingRoadmapSection = (): JSX.Element => {
  return (
    <section className="w-full bg-white py-[70px]">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-8 px-6 lg:gap-12">
        <div className="grid w-full items-end gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)]">
          <article className="flex flex-col items-start justify-center gap-8">
            <header className="flex w-full max-w-[760px] flex-col items-start gap-4">
              <Badge
                variant="outline"
                className="inline-flex h-auto items-center gap-2.5 rounded-[999px] border border-solid border-[#00000029]
bg-transparent px-3.5 py-[7px] hover:bg-transparent"
              >
                <span className="flex h-1.5 w-1.5 items-center justify-center rounded-[3px] bg-[#6ce5b1]">
                  <span className="h-1.5 w-1.5 rounded-[3px] bg-[#ffffff01] shadow-[0px_0px_0px_4px_#6ce5b12e]" />
                </span>
                <span className="font-inter text-xs font-normal tracking-[1.68px] leading-[18px] textblack">
                  STRATEGIC MARKETING GUIDANCE WITHOUT THE COST OF A FULL-TIME
                  CMO
                </span>
              </Badge>
              <h2
                className="self-stretch text-[length:var(--h-2-font-size)] font-[number:var(--h-2-font-weight)]
leading-[var(--h-2-line-height)] tracking-[var(--h-2-letter-spacing)] font-satoshi text-[#0f0a1f] [font-style:var(--h-2-fontstyle)]"
              >
                From trial-and-error to <br /> action roadmap.
              </h2>
            </header>
            <div
              className="self-stretch font-montserrat text-base font-normal leading-[25.6px]
tracking-[0] text-[#3a3447]"
            >
              <p>
                HireNinjas provides strategic marketing advice without the high
                costs associated with full-time Chief Marketing Officers,
                helping businesses in Dubai, Abu Dhabi and throughout the UAE
                identify growth opportunities, optimize campaign performance and
                strengthen marketing strategy. Instead of making decisions
                through trial-and-error methods alone, our consultants work
                alongside your internal team to evaluate what is working, what
                needs improvement, and where your greatest opportunities lie.
              </p>
              <p className="mt-6">
                Each consultation session focuses on practical enhancements that
                support measurable results, from channel selection and funnel
                optimisation, campaign structure and budget allocation, through
                to action roadmap creation - with every engagement ending with a
                plan that ensures strategy translates directly into growth. Each
                engagement ends with an action roadmap your team can immediately
                implement; guaranteeing strategy translates directly into
                growth.
              </p>
            </div>
          </article>
          <Card className="rounded-2xl border border-solid border-[#f0e2ff] bg-[lineargradient(180deg,rgba(248,241,255,1)_0%,rgba(255,255,255,1)_100%)] shadow-none">
            <CardContent className="flex flex-col gap-3 p-7">
              {brandItems.map((item) => (
                <button
                  key={item.title}
                  type="button"
                  className="flex w-full items-center justify-between rounded-xl border border-solid border-[#ece8f3] bg-white
px-4 py-3.5 text-left transition-colors hover:bg-[#fcfaff]"
                >
                  <span
                    className="font-satoshi text-[15px] font-bold leading-6 tracking-[0] text-
[#0f0a1f]"
                  >
                    {item.title}
                  </span>
                  <span className="inline-flex rounded-[999px] bg-[#f7f1ff] px-[9px] py-1">
                    <span
                      className="font-montserrat text-[11px] font-semibold leading-[17.6px] tracking-[0]
text-[#591f97]"
                    >
                      {item.label}
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
