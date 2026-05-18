import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const summaryParagraphs = [
  `At HireNinjas, we manage your social media presence end-to-end,
combining strategy, creative content production, audience
engagement, and paid campaign execution to help businesses
across Dubai and the UAE grow visibility and conversions.`,
  `Our UAE-aware team understands local audience behaviour,
regional trends, and platform performance dynamics across
Instagram, LinkedIn, Facebook, TikTok, X (Twitter), Snapchat, and
YouTube. Instead of posting randomly, we develop structured
content systems aligned with your brand positioning and
business goals.`,
  `From increasing engagement and followers to generating leads
and strengthening reputation, our social media management
services turn your platforms into measurable growth channels.`,
];

const summaryMetrics = [
  { title: "Visibility & reach", tag: "Awareness" },
  { title: "Engagement & community", tag: "Connect" },
  { title: "Followers & audience", tag: "Grow" },
  { title: "Leads & conversions", tag: "Convert" },
  { title: "Reputation strength", tag: "Trust" },
];

export const StrategySummarySection = (): JSX.Element => {
  return (
    <section className="w-full px-4 py-[80px] md:px-8 xl:px-[100px]">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col items-start gap-12">
        <header className="flex w-full max-w-[760px] flex-col items-start gap-[16.83px]">
          <Badge className="h-auto rounded-[999px] border border-solid border-[#f0e2ff] bg-[#f7f1ff] px-3.5 pb-[7.69px] pt-[7.5px] text-[#8a39e4] hover:bg-[#f7f1ff]">
            <span className="[font-family:'Montserrat',Helvetica] text-xs font-semibold leading-[19.2px] tracking-[1.68px] whitespace-nowrap">
              BUILD A STRONGER SOCIAL PRESENCE THAT DRIVES GROWTH
            </span>
          </Badge>
          <div className="w-full">
            <h2 className="[font-family:'Satoshi-Bold',Helvetica] text-[36px] leading-[40px] font-bold tracking-[-0.72px] text-[#0f0a1f] sm:text-[42px] sm:leading-[45px] lg:text-[46px] lg:leading-[49.7px] lg:tracking-[-0.92px]">
              Strategy, creative, engagement,
              <br />
              and paid — under one team.
            </h2>
          </div>
        </header>
        <div className="grid w-full grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,530px)_minmax(0,1fr)] lg:gap-[60px]">
          <article className="flex h-fit w-full flex-col items-start gap-[15.5px]">
            {summaryParagraphs.map((paragraph, index) => (
              <p
                key={`summary-paragraph-${index}`}
                className="w-full whitespace-pre-line [font-family:'Montserrat',Helvetica] text-base leading-[25.6px] font-normal tracking-[0] text-[#3a3447]"
              >
                {paragraph}
              </p>
            ))}
          </article>
          <Card className="w-full rounded-2xl border border-solid border-[#f0e2ff] bg-[linear-gradient(180deg,rgba(248,241,255,1)_0%,rgba(255,255,255,1)_100%)] shadow-none">
            <CardContent className="flex flex-col gap-3 p-7">
              {summaryMetrics.map((item) => (
                <div
                  key={item.title}
                  className="flex w-full items-center justify-between gap-4 rounded-xl border border-solid border-[#ece8f3] bg-white px-4 py-3.5"
                >
                  <h3 className="[font-family:'Satoshi-Bold',Helvetica] text-[15px] leading-6 font-bold tracking-[0] text-[#0f0a1f]">
                    {item.title}
                  </h3>
                  <Badge className="h-auto rounded-[999px] bg-[#f7f1ff] px-[9px] py-1 text-[#591f97] hover:bg-[#f7f1ff]">
                    <span className="[font-family:'Montserrat',Helvetica] text-[11px] leading-[17.6px] font-semibold tracking-[0] whitespace-nowrap">
                      {item.tag}
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
