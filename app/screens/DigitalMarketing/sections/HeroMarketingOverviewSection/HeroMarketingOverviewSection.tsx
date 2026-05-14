import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  {
    title: "+ROI",
    description: "Measurable returns",
  },
  {
    title: "UAE",
    description: "Built for Dubai market",
  },
  {
    title: "Quarterly",
    description: "Reviews & refinement",
  },
];

const channelBars = [
  { baseClassName: "h-full", activeClassName: "top-12 left-0 h-[73px]" },
  {
    baseClassName: "h-full",
    activeClassName: "top-[84px] left-[30px] h-[37px]",
  },
  {
    baseClassName: "h-full",
    activeClassName: "top-[60px] left-[60px] h-[61px]",
  },
  { baseClassName: "h-full", activeClassName: "top-6 left-[90px] h-[97px]" },
  { baseClassName: "h-full", activeClassName: "top-4 left-[121px] h-[105px]" },
  { baseClassName: "h-full", activeClassName: "top-7 left-[151px] h-[93px]" },
  {
    baseClassName: "h-full",
    activeClassName: "left-[181px] bottom-0 h-[65px]",
  },
  {
    baseClassName: "h-full",
    activeClassName: "top-[26px] left-[211px] h-[95px]",
  },
];

const channelLabels = ["SEO", "Paid", "Social"];

export const HeroMarketingOverviewSection = (): JSX.Element => {
  return (
    <section className="relative w-full overflow-hidden px-6 pb-20 pt-24 sm:px-10 lg:px-[140px]">
      <div className="pointer-events-none absolute inset-x-[-10%] top-[-10%] h-[70%] w-[120%] blur-[10px] [background:radial-gradient(50%_50%_at_20%_30%,rgba(139,58,229,0.18)_0%,rgba(139,58,229,0)_60%),radial-gradient(50%_50%_at_85%_20%,rgba(189,140,255,0.35)_0%,rgba(189,140,255,0)_60%)]" />
      <div className="relative mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
        <article className="relative flex w-full flex-col items-start gap-[21.2px] self-center">
          <Badge className="h-auto rounded-[999px] border border-solid border-[#f0e2ff] bg-[#f7f1ff] px-3.5 pb-[7.69px] pt-[7.5px] hover:bg-[#f7f1ff]">
            <span className="mr-2 h-1.5 w-1.5 rounded-[3px] bg-[#8a39e4]" />
            <span className="[font-family:'Montserrat',Helvetica] text-xs font-semibold leading-[19.2px] tracking-[1.68px] text-[#8a39e4]">
              DIGITAL MARKETING STRATEGY
            </span>
          </Badge>
          <header className="flex w-full flex-col items-start pb-[0.6px]">
            <img
              className="relative h-auto w-full max-w-[667px]"
              alt="Digital marketing strategy for brands looking to scale faster"
              src="https://c.animaapp.com/mp3z2ouuSvWBo9/img/digital-marketing-strategy-for-brands-looking-to-scale-faster.svg"
            />
          </header>
          <p className="max-w-[667.29px] [font-family:'Montserrat',Helvetica] text-lg font-normal leading-[28.8px] tracking-[0] text-[#3a3447]">
            Data-driven marketing roadmaps created to assist businesses
            <br />
            across Dubai and UAE convert their marketing budgets into
            <br />
            predictable, measurable growth.
          </p>
          <nav
            aria-label="Hero actions"
            className="flex flex-wrap items-start gap-4 sm:gap-6"
          >
            <Button className="h-auto rounded-[999px] bg-[#8b39e5] py-2 pr-2 pl-[22px] hover:bg-[#7d2fda]">
              <span className="inline-flex items-center gap-3">
                <span className="inline-flex flex-col items-center pl-3.5">
                  <span className="[font-family:'Inter',Helvetica] text-center text-[14.5px] font-medium leading-[normal] tracking-[0] text-white">
                    Book a Free Consultation
                  </span>
                </span>
                <span className="grid h-9 w-9 place-items-center rounded-[18px] bg-white">
                  <img
                    className="h-4 w-4"
                    alt="Component"
                    src="https://c.animaapp.com/mp3z2ouuSvWBo9/img/component-2.svg"
                  />
                </span>
              </span>
            </Button>
            <Button
              variant="ghost"
              className="h-12 rounded-[999px] border border-solid border-[#8b39e529] px-[22px] py-3.5 [font-family:'Inter',Helvetica] text-[14.5px] font-medium leading-[normal] tracking-[0] text-[#8b39e5] hover:bg-[#f7f1ff] hover:text-[#8b39e5]"
            >
              See what&#39;s included
            </Button>
          </nav>
          <dl className="flex w-full flex-wrap items-start gap-x-6 gap-y-4 pb-0 pt-[18.8px]">
            {stats.map((stat) => (
              <div
                key={stat.title}
                className="inline-flex self-stretch border-l-2 border-[#0000001a] py-0 pl-3.5 pr-0"
              >
                <div className="flex flex-col items-start">
                  <dt className="[font-family:'Satoshi-Bold',Helvetica] text-[22px] font-bold leading-[35.2px] tracking-[-0.44px] text-[#0f0a1f]">
                    {stat.title}
                  </dt>
                  <dd className="[font-family:'Montserrat',Helvetica] text-[13px] font-normal leading-[20.8px] tracking-[0] text-[#6b6478]">
                    {stat.description}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </article>
        <div className="relative flex w-full justify-center self-center">
          <div className="relative w-full max-w-[430px]">
            <div className="relative min-h-[512.38px] w-full overflow-hidden rounded-3xl border border-solid border-[#ece8f3] [background:url(https://c.animaapp.com/mp3z2ouuSvWBo9/img/background-border.png)_50%_50%_/_cover,radial-gradient(50%_50%_at_0%_0%,rgba(248,241,255,1)_0%,rgba(255,255,255,1)_60%)]">
              <Card className="absolute bottom-5 left-5 rounded-3xl border-0 bg-neutral-10 shadow-[4px_4px_56px_#0000001a]">
                <CardContent className="relative flex flex-col items-start gap-2 p-3">
                  <div className="absolute left-0 top-0 h-[calc(100%_+_1px)] w-full rounded-[14px] bg-[#ffffff01] shadow-[0px_18px_40px_-22px_#140a282e]" />
                  <div className="relative flex w-full flex-col items-start pb-[0.59px]">
                    <h2 className="[font-family:'Satoshi-Bold',Helvetica] text-base font-bold leading-6 tracking-[0] text-neutral-90">
                      Channel mix
                    </h2>
                  </div>
                  <div className="relative flex h-[121px] w-[235px] items-end justify-center gap-1.5">
                    {channelBars.map((bar, index) => (
                      <div
                        key={`channel-bar-${index}`}
                        className="relative flex-1 self-stretch"
                      >
                        <div
                          className={`absolute bottom-0 w-6 rounded-[55px] bg-[#0000000d] ${bar.baseClassName}`}
                        />
                      </div>
                    ))}

                    {channelBars.map((bar, index) => (
                      <div
                        key={`channel-bar-active-${index}`}
                        className={`absolute w-6 rounded-[55px] bg-[#591f97] ${bar.activeClassName}`}
                      />
                    ))}
                  </div>
                  <div className="inline-flex items-start gap-4">
                    {channelLabels.map((label) => (
                      <span
                        key={label}
                        className="[font-family:'Inter',Helvetica] text-sm font-normal leading-[17.6px] tracking-[0] text-[#591f97]"
                      >
                        {label}
                      </span>
                    ))}
                  </div>
                  <Card className="absolute -right-20 top-[-47px] w-[153px] rounded-xl border-0 bg-neutral-10 shadow-[4px_4px_56px_#0000001a]">
                    <CardContent className="relative flex flex-col items-start p-3">
                      <div className="absolute left-0 top-0 h-full w-full rounded-[14px] bg-[#ffffff01] shadow-[0px_18px_40px_-22px_#140a282e]" />
                      <div className="relative flex w-full flex-col items-start pb-[0.59px]">
                        <p className="[font-family:'Inter',Helvetica] text-xs font-normal leading-[18px] tracking-[0] text-neutral-60">
                          Forecast ROI
                        </p>
                      </div>
                      <p className="[font-family:'Satoshi-Bold',Helvetica] text-[26px] font-bold leading-[41.6px] tracking-[-0.52px] text-[#591f97]">
                        3.4×
                      </p>
                      <div className="inline-flex items-center gap-1">
                        <img
                          className="h-4 w-4"
                          alt="Arrow up"
                          src="https://c.animaapp.com/mp3z2ouuSvWBo9/img/arrow-up.svg"
                        />
                        <span className="[font-family:'Inter',Helvetica] text-xs font-normal leading-[19.2px] tracking-[0] text-green-600">
                          22% vs. baseline
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </CardContent>
              </Card>
            </div>
            <img
              className="pointer-events-none absolute left-[-72px] top-[214px] h-[140px] w-[152px]"
              alt="Group"
              src="https://c.animaapp.com/mp3z2ouuSvWBo9/img/group-1.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
