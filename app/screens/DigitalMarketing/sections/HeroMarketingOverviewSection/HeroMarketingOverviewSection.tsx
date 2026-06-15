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
    <section className="relative w-full overflow-hidden px-4 pb-12 pt-16 sm:px-8 sm:pb-16 sm:pt-20 md:px-12 lg:px-16 lg:pb-20 lg:pt-24 xl:px-[140px]">
      <div className="pointer-events-none absolute inset-x-[-10%] top-[-10%] h-[70%] w-[120%] blur-[10px] [background:radial-gradient(50%_50%_at_20%_30%,rgba(139,58,229,0.18)_0%,rgba(139,58,229,0)_60%),radial-gradient(50%_50%_at_85%_20%,rgba(189,140,255,0.35)_0%,rgba(189,140,255,0)_60%)]" />
      <div className="relative mx-auto grid max-w-[1200px] items-center gap-10 sm:gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-12 xl:gap-16">
        <article className="relative flex w-full flex-col items-start gap-5 sm:gap-[21.2px] self-center">
          <Badge className="h-auto rounded-[999px] border border-solid border-[#f0e2ff] bg-[#f7f1ff] px-3.5 pb-[7.69px] pt-[7.5px] hover:bg-[#f7f1ff]">
            <span className="mr-2 h-1.5 w-1.5 rounded-[3px] bg-[#8a39e4]" />
            <span className="[font-family:'Montserrat',Helvetica] text-[10px] sm:text-xs font-semibold leading-[19.2px] tracking-[1.68px] text-[#8a39e4]">
              DIGITAL MARKETING STRATEGY
            </span>
          </Badge>
          <header className="flex w-full xl:w-[550px] flex-col items-start pb-[0.6px]">
            <h1
              className="text-[40px] leading-[1.1] tracking-[-1.2px] sm:text-[52px] sm:leading-[1.05] sm:tracking-[-1.8px] lg:text-6xl lg:tracking-[-2px] xl:text-[72px] xl:leading-[73.44px] xl:tracking-[-2.52px]"
              style={{
                fontFamily: '"Satoshi", Helvetica, sans-serif',
                fontWeight: 700,
              }}
            >
              <span style={{ color: "#0F0A1F", display: "block" }}>
                Digital Marketing Strategy for
              </span>
              <span
                style={{
                  display: "block",
                  background: "linear-gradient(101deg, #8B3AE5 0%, #591F97 60%, #0F0A1F 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Brands Looking to Scale Faster
              </span>
            </h1>
          </header>
          <p className="max-w-[667.29px] [font-family:'Montserrat',Helvetica] text-sm sm:text-base xl:text-lg font-normal leading-[1.6] xl:leading-[28.8px] tracking-[0] text-[#3a3447]">
            <span className="xl:block">Data-driven marketing roadmaps created to assist businesses </span>
            <span className="xl:block">across Dubai and UAE convert their marketing budgets into </span>
            <span className="xl:block">predictable, measurable growth.</span>
          </p>
          <nav
            aria-label="Hero actions"
            className="flex w-full flex-col items-stretch gap-4 sm:w-auto sm:flex-row sm:flex-wrap sm:items-start sm:gap-6"
          >
            <a href="/contact" className="w-full sm:w-auto">
              <Button className="relative h-14 sm:h-auto w-full sm:w-auto rounded-[999px] bg-[#8b39e5] py-2 pr-2 pl-[22px] hover:bg-[#7d2fda]">
                <span className="relative flex w-full sm:w-auto items-center justify-center sm:justify-start gap-3">
                  <span className="[font-family:'Inter',Helvetica] text-center text-[14.5px] font-medium leading-[normal] tracking-[0] text-white">
                    Book a Free Consultation
                  </span>
                  <span className="grid h-9 w-9 place-items-center rounded-[18px] bg-white absolute right-0 sm:static">
                    <img
                      className="h-4 w-4"
                      alt="Component"
                      src="/figmaAssets/arrow-purple.svg"
                    />
                  </span>
                </span>
              </Button>
            </a>
            <Button
              variant="ghost"
              className="h-12 w-full sm:w-auto rounded-[999px] border border-solid border-[#8b39e529] px-[22px] py-3.5 [font-family:'Inter',Helvetica] text-[14.5px] font-medium leading-[normal] tracking-[0] text-[#8b39e5] hover:bg-[#f7f1ff] hover:text-[#8b39e5]"
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
          <div className="relative w-full max-w-full lg:max-w-[400px] xl:max-w-[430px]">
            <div className="relative min-h-[400px] sm:min-h-[460px] xl:min-h-[512.38px] w-full overflow-hidden rounded-3xl border border-solid border-[#ece8f3] [background:url(/digital-marketing/hero.svg)_50%_50%_/_cover,radial-gradient(50%_50%_at_0%_0%,rgba(248,241,255,1)_0%,rgba(255,255,255,1)_60%)]">
              <Card className="absolute bottom-5 left-5 rounded-3xl border-0 bg-white shadow-[4px_4px_56px_#0000001a]">
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
                  <Card className="absolute -right-4 sm:-right-10 xl:-right-20 top-[-47px] w-[140px] sm:w-[153px] rounded-xl border-0 bg-white shadow-[4px_4px_56px_#0000001a]">
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
                          src="/digital-marketing/green-arrow.svg"
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
              className="pointer-events-none absolute left-[-172px] top-[200px] h-[110px] w-[170px] hidden xl:block"
              alt="Group"
              src="/digital-marketing/plain.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
