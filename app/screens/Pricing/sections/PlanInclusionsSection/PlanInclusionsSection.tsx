import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const inclusionItems = [
  "Dedicated account manager",
  "Strategy-first campaign execution",
  "UAE audience targeting expertise",
  "Transparent monthly reporting",
  "Performance tracking dashboards",
  "Flexible upgrade options as your business scales",
  "No hidden fees",
];

export const PlanInclusionsSection = (): JSX.Element => {
  return (
    <section className="relative mt-[70.1px] w-full px-4 sm:px-6 lg:px-[140px]">
      <Card className="w-full rounded-3xl border border-[#f0e2ff] bg-[linear-gradient(180deg,rgba(248,241,255,1)_0%,rgba(255,255,255,1)_100%)] shadow-none">
        <CardContent className="flex flex-col items-start gap-3.5 p-6 sm:p-10 lg:p-16">
          <Badge
            variant="secondary"
            className="h-auto rounded-[999px] border border-[#f0e2ff] bg-[#f7f1ff] px-3.5 pb-[7.69px] pt-[7.5px] text-[#8a39e4] hover:bg-[#f7f1ff]"
          >
            <span className="mr-2 h-1.5 w-1.5 rounded-[3px] bg-[#8a39e4]" />
            <span className="[font-family:'Montserrat',Helvetica] text-xs font-semibold tracking-[1.68px] leading-[19.2px] whitespace-nowrap">
              WHAT&#39;S INCLUDED IN EVERY HIRENINJAS PACKAGE
            </span>
          </Badge>
          <header className="w-full">
            <h2 className="[font-family:'Satoshi-Bold',Helvetica] text-3xl font-bold tracking-[-0.72px] leading-[38.9px] text-[#0f0a1f] sm:text-4xl">
              Every digital marketing pricing UAE plan includes:
            </h2>
          </header>
          <div className="grid w-full grid-cols-1 gap-3.5 pt-[17.99px] md:grid-cols-2">
            {inclusionItems.map((item) => (
              <article
                key={item}
                className="flex min-h-[52.39px] w-full items-center gap-3 rounded-xl border border-[#ece8f3] bg-white px-[18px] py-3.5"
              >
                <img
                  className="h-[18px] w-[18px] shrink-0"
                  alt="Component"
                  src="https://c.animaapp.com/mpl6davuOYe2Kc/img/component-1-2.svg"
                />
                <p className="[font-family:'Satoshi-Bold',Helvetica] text-sm font-bold leading-[22.4px] tracking-[0] text-[#0f0a1f]">
                  {item}
                </p>
              </article>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
