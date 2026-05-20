import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const narrativePoints = [
  { title: "Property lead funnels", tag: "Acquire" },
  { title: "Paid acquisition", tag: "Google · Meta" },
  { title: "Video marketing", tag: "Showcase" },
  { title: "Search visibility", tag: "SEO" },
  { title: "International targeting", tag: "HNWI" },
];

export const BuyerFocusNarrativeSection = (): JSX.Element => {
  return (
    <section className="relative w-full px-4 py-0 sm:px-6 lg:px-10">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-start gap-12">
        <header className="flex w-full max-w-[760px] flex-col items-start gap-[16.83px]">
          <Badge
            variant="outline"
            className="inline-flex h-auto items-center gap-2.5 rounded-[999px] border border-solid border-[#00000029] bg-transparent px-3.5 py-[7px] text-transparent shadow-none hover:bg-transparent"
          >
            <span className="flex h-1.5 w-1.5 items-start justify-center rounded-[3px] bg-[#6ce5b1]">
              <span className="h-1.5 w-1.5 rounded-[3px] bg-[#ffffff01] shadow-[0px_0px_0px_4px_#6ce5b12e]" />
            </span>
            <span className="relative flex w-fit items-center whitespace-nowrap [font-family:'Inter',Helvetica] text-xs font-normal tracking-[1.68px] leading-[18px] text-black">
              GET A FREE STRATEGY CALL
            </span>
          </Badge>
          <div className="flex w-full flex-col items-start">
            <h2 className="mt-[-1.00px] self-stretch font-h-2 text-[36px] font-[number:var(--h-2-font-weight)] leading-[var(--h-2-line-height)] tracking-[var(--h-2-letter-spacing)] text-[#0f0a1f] [font-style:var(--h-2-font-style)] sm:text-[42px] lg:text-[length:var(--h-2-font-size)]">
              Built for serious buyers
              <br />— not low-quality leads.
            </h2>
          </div>
        </header>
        <div className="grid w-full grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-[60px]">
          <article className="flex h-fit w-full max-w-[530px] flex-col items-start gap-4">
            <p className="mt-[-1.00px] self-stretch [font-family:'Montserrat',Helvetica] text-base font-normal leading-[25.6px] tracking-[0] text-tuna">
              Dubai is an increasingly fast-moving real estate market, and
              <br />
              competition for buyer attention can be fierce, particularly across
              <br />
              off-plan launches, investor campaigns, and premium residential
              <br />
              developments. HireNinjas helps developers, brokerages, and real
              <br />
              estate agencies attract qualified buyer enquiries instead of low-
              <br />
              quality leads through structured marketing systems tailored
              <br />
              specifically for them.
            </p>
            <p className="mt-[-1.00px] self-stretch [font-family:'Montserrat',Helvetica] text-base font-normal leading-[25.6px] tracking-[0] text-tuna">
              HireNinjas&#39; campaigns combine property lead generation
              funnels,
              <br />
              paid acquisition across Google and Meta, video marketing
              <br />
              strategies that reach serious buyers both locally and globally,
              <br />
              search visibility optimization services and international investor
              <br />
              targeting strategies in order to reach serious buyers locally and
              <br />
              globally. Because HireNinjas also supports global hiring and
              <br />
              marketing execution teams, real estate organisations across
              <br />
              Dubai, Abu Dhabi and international investment corridors can
              <br />
              scale campaign performance quickly without increasing internal
              <br />
              overhead costs.
            </p>
          </article>
          <Card className="w-full rounded-2xl border border-solid border-[#f0e2ff] bg-[linear-gradient(180deg,rgba(248,241,255,1)_0%,rgba(255,255,255,1)_100%)] p-7 shadow-none">
            <CardContent className="flex flex-col items-start gap-3 p-0">
              {narrativePoints.map((point) => (
                <button
                  key={point.title}
                  type="button"
                  className="flex h-auto w-full items-center justify-between rounded-xl border border-solid border-[#ece8f3] bg-white px-4 py-3.5 text-left transition-colors hover:bg-[#fcfaff]"
                >
                  <span className="relative mt-[-1.00px] flex w-fit items-center whitespace-nowrap [font-family:'Satoshi-Bold',Helvetica] text-[15px] font-bold leading-6 tracking-[0] text-ebony">
                    {point.title}
                  </span>
                  <span className="inline-flex flex-col items-start rounded-[999px] bg-magnolia px-[9px] py-1">
                    <span className="relative mt-[-1.00px] flex w-fit items-center whitespace-nowrap font-montserrat-semibold text-[length:var(--montserrat-semibold-font-size)] font-[number:var(--montserrat-semibold-font-weight)] leading-[var(--montserrat-semibold-line-height)] tracking-[var(--montserrat-semibold-letter-spacing)] text-daisy-bush [font-style:var(--montserrat-semibold-font-style)]">
                      {point.tag}
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
