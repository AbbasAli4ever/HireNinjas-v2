import { Badge } from "../../../../../components/ui/badge";
import { Card, CardContent } from "../../../../../components/ui/card";

const engagementSteps = [
  { title: "Paid advertising", label: "Acquire" },
  { title: "Conversion landing pages", label: "Convert" },
  { title: "Retargeting systems", label: "Recover" },
  { title: "Automated follow-up", label: "Nurture" },
  { title: "CPL optimization", label: "Optimize" },
];

export const LeadEngagementOverviewSection = (): JSX.Element => {
  return (
    <section className="w-full px-8 py-0 md:px-10">
      <div className="mx-auto flex w-full max-w-[1220px] flex-col items-start gap-12">
        <header className="flex w-full max-w-[760px] flex-col items-start gap-[16.83px]">
          <Badge className="h-auto rounded-[999px] border border-solid border-[#f0e2ff] bg-[#f7f1ff] px-3.5 pb-[7.69px] pt-[7.5px] hover:bg-[#f7f1ff]">
            <span className="[font-family:'Montserrat',Helvetica] text-xs font-semibold leading-[19.2px] tracking-[1.68px] text-[#8a39e4]">
              BUILD AN ASSURED SUPPLY OF QUALIFIED LEADS
            </span>
          </Badge>
          <div className="w-full">
            <h2 className="[font-family:'Satoshi-Bold',Helvetica] text-[34px] font-bold leading-[38px] tracking-[-0.68px] text-[#0f0a1f] sm:text-[40px] sm:leading-[44px] sm:tracking-[-0.8px] lg:text-[46px] lg:leading-[49.7px] lg:tracking-[-0.92px]">
              From first interaction to
              <br />
              booked meeting efficiently.
            </h2>
          </div>
        </header>
        <div className="grid w-full grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,530px)_minmax(0,1fr)] lg:gap-[60px]">
          <article className="flex w-full max-w-[530px] flex-col items-start">
            <p className="[font-family:'Montserrat',Helvetica] text-base font-normal leading-[25.6px] tracking-[0] text-[#3a3447]">
              HireNinjas&#39; expert lead generation services help businesses
              throughout Dubai and UAE generate qualified lead
              <br />
              <br />
              Our approach combines paid advertising, conversion-focused landing
              pages, retargeting systems, and automated follow-up sequences to
              move prospects from first interaction to booked meetings
              efficiently. Every campaign is structured around audience intent,
              funnel positioning, and cost-per-lead optimisation.
              <br />
              <br />
              We&#39;ve supported companies across real estate, healthcare,
              education, and B2B sectors in generating thousands of qualified
              enquiries through scalable acquisition systems designed to improve
              lead quality while reducing acquisition costs over time.
            </p>
          </article>
          <Card className="w-full rounded-2xl border border-solid border-[#f0e2ff] bg-[linear-gradient(180deg,rgba(248,241,255,1)_0%,rgba(255,255,255,1)_100%)] shadow-none">
            <CardContent className="flex flex-col gap-3 p-5 sm:p-7">
              {engagementSteps.map((step) => (
                <div
                  key={step.title}
                  className="flex w-full items-center justify-between gap-4 rounded-xl border border-solid border-[#ece8f3] bg-white px-4 py-3.5"
                >
                  <h3 className="[font-family:'Satoshi-Bold',Helvetica] text-[15px] font-bold leading-6 tracking-[0] text-[#0f0a1f]">
                    {step.title}
                  </h3>
                  <Badge className="h-auto shrink-0 rounded-[999px] bg-[#f7f1ff] px-[9px] py-1 hover:bg-[#f7f1ff]">
                    <span className="[font-family:'Montserrat',Helvetica] text-[11px] font-semibold leading-[17.6px] tracking-[0] text-[#591f97]">
                      {step.label}
                    </span>
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
