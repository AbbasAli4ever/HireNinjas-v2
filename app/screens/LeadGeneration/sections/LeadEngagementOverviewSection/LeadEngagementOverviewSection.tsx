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
    <section className="w-full px-2 py-0 sm:px-6 md:px-4 lg:px-8">
      <div className="mx-auto flex w-full max-w-[1220px] flex-col items-start gap-8 sm:gap-10 lg:gap-12">
        <header className="flex w-full flex-col items-start gap-3 sm:gap-[16.83px] lg:max-w-[760px]">
          <Badge className="h-auto rounded-[999px] border border-solid border-[#f0e2ff] bg-[#f7f1ff] px-3.5 pb-[7.69px] pt-[7.5px] hover:bg-[#f7f1ff]">
            <span className="[font-family:'Montserrat',Helvetica] text-[10px] font-semibold leading-[19.2px] tracking-[1.2px] text-[#8a39e4] sm:text-xs sm:tracking-[1.68px]">
              BUILD AN ASSURED SUPPLY OF QUALIFIED LEADS
            </span>
          </Badge>
          <div className="w-full">
            <h2 className="[font-family:'Satoshi-Bold',Helvetica] text-[28px] font-bold leading-[34px] tracking-[-0.56px] text-[#0f0a1f] sm:text-[34px] sm:leading-[38px] sm:tracking-[-0.68px] md:text-[40px] md:leading-[44px] md:tracking-[-0.8px] lg:text-[46px] lg:leading-[49.7px] lg:tracking-[-0.92px]">
              From first interaction to
              <br />
              booked meeting efficiently.
            </h2>
          </div>
        </header>
        <div className="grid w-full grid-cols-1 items-start gap-6 md:gap-8 xl:grid-cols-[minmax(0,530px)_minmax(0,1fr)] xl:gap-[60px]">
          <article className="flex w-full flex-col items-start xl:max-w-[530px]">
            <p className="[font-family:'Montserrat',Helvetica] text-sm font-normal leading-[1.6] tracking-[0] text-[#3a3447] sm:text-base sm:leading-[25.6px]">
              HireNinjas&#39; <a href="/lead-generation" className="hover:underline">expert lead generation services</a> help businesses
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
            <CardContent className="flex flex-col gap-2.5 p-4 sm:gap-3 sm:p-5 md:p-7">
              {engagementSteps.map((step) => (
                <div
                  key={step.title}
                  className="flex w-full items-center justify-between gap-3 rounded-xl border border-solid border-[#ece8f3] bg-white px-3 py-3 sm:gap-4 sm:px-4 sm:py-3.5"
                >
                  <h3 className="[font-family:'Satoshi-Bold',Helvetica] text-[13px] font-bold leading-6 tracking-[0] text-[#0f0a1f] sm:text-[15px]">
                    {step.title}
                  </h3>
                  <Badge className="h-auto shrink-0 rounded-[999px] bg-[#f7f1ff] px-[9px] py-1 hover:bg-[#f7f1ff]">
                    <span className="[font-family:'Montserrat',Helvetica] text-[10px] font-semibold leading-[17.6px] tracking-[0] text-[#591f97] sm:text-[11px]">
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
