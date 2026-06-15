import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const featureItems = [
  {
    title: "Organic + Paid",
    description: "Dual strategy advantage",
  },
  {
    title: "ROI focused",
    description: "Real measurable performance",
  },
  {
    title: "AR · EN",
    description: "Bilingual search behaviour",
  },
];

const resultCards = [
  {
    path: "hireninjas.ae › seo",
    title: "SEO Company Dubai · Top of Page Visibility",
    description: "Capture high-intent search traffic. Technical SEO + Google Ads tuned for UAE.",
    badge: "Sponsored",
    badgeClassName: "bg-[#0f0a1f] text-white",
    cardClassName:
      "border-[#f0e2ff] bg-[linear-gradient(180deg,rgba(248,241,255,1)_0%,rgba(255,255,255,1)_100%)]",
  },
  {
    path: "hireninjas.ae › seo-ppc",
    title: "SEO & PPC Agency Dubai, HireNinjas UAE",
    description: "Backlink building, on-page optimization, and local SEO across Dubai & Abu Dhabi.",
    badge: "#1",
    badgeClassName: "bg-[#F1E3FF] text-[#8a39e4]",
    cardClassName: "border-[#ece8f3] bg-white",
  },
  {
    path: "hireninjas.ae › services",
    title: "Local SEO & Google Maps Optimization",
    description: null,
    badge: null,
    badgeClassName: "",
    cardClassName: "border-[#ece8f3] bg-white",
  },
];

export const HeroMessageSection = (): JSX.Element => {
  return (
    <section className="relative w-full overflow-hidden px-5 pb-12 pt-14 sm:px-8 sm:pb-16 sm:pt-20 lg:px-16 lg:pb-20 lg:pt-24 xl:px-[120px]">
      <div className="pointer-events-none absolute left-[-10%] top-[-10%] h-[70%] w-[120%] blur-[10px] [background:radial-gradient(50%_50%_at_20%_30%,rgba(139,58,229,0.18)_0%,rgba(139,58,229,0)_60%),radial-gradient(50%_50%_at_85%_20%,rgba(189,140,255,0.35)_0%,rgba(189,140,255,0)_60%)]" />
      <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-8 xl:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] xl:gap-16">
        <header className="flex w-full flex-col items-start gap-4 sm:gap-[21.2px]">
          <Badge className="h-auto rounded-[999px] border border-[#f0e2ff] bg-[#f7f1ff] px-3.5 pb-[7.69px] pt-[7.5px] hover:bg-[#f7f1ff]">
            <span className="mr-2 inline-block h-1.5 w-1.5 rounded-[3px] bg-[#8a39e4]" />
            <span className="[font-family:'Montserrat',Helvetica] text-[10px] font-semibold tracking-[1.2px] leading-[19.2px] text-[#8a39e4] sm:text-xs sm:tracking-[1.68px]">
              SEO &amp; PPC
            </span>
          </Badge>
          <div className="w-full pb-[0.6px]">
            <header className="flex w-full flex-col items-start pb-[0.6px] xl:max-w-[600px]">
            <h1
              style={{
                fontFamily: '"Satoshi", Helvetica, sans-serif',
                fontWeight: 700,
                lineHeight: "110%",
                letterSpacing: "-1.5px",
              }}
              className="text-[34px] sm:text-[42px] md:text-[50px] lg:text-[56px] lg:[letter-spacing:-2.52px]"
            >
              <span style={{ color: "#0F0A1F" }}>
                SEO & PPC for businesses to{" "}
              </span>
               <span
                style={{
                  background: "linear-gradient(101deg, #8B3AE5 0%, #591F97 60%, #0F0A1F 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                dominate search results
              </span>
            </h1>
          </header>
          </div>
          <div className="w-full xl:max-w-[667.29px]">
            <p className="[font-family:'Montserrat',Helvetica] text-sm font-normal leading-[1.6] text-[#3a3447] sm:text-base sm:leading-[25.6px] lg:text-lg lg:leading-[28.8px]">
              Increase search results across Dubai and the UAE by employing <a href="/seo-ppc" className="hover:underline">combined SEO and Google Ads</a> strategies designed to drive high-intent traffic and measurable revenue growth.
            </p>
          </div>
          <nav className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <Button
              type="button"
              className="h-12 w-full justify-between rounded-[999px] bg-[#8b39e5] pl-[22px] pr-2 text-white hover:bg-[#7d31d5] sm:w-auto sm:justify-start"
            >
              <span className="flex-1 text-center pl-3.5 [font-family:'Inter',Helvetica] text-[13.5px] font-medium leading-[normal] sm:flex-none sm:text-left sm:text-[14.5px]">
                Book a Free Consultation
              </span>
              <span className="ml-3 grid h-9 w-9 shrink-0 place-items-center rounded-[18px] bg-white">
                <img
                  className="h-4 w-4"
                  alt="Arrow icon"
                  src="https://c.animaapp.com/mpb6dv7tQ8BPXz/img/component-2.svg"
                />
              </span>
            </Button>
            <Button
              type="button"
              variant="outline"
              className="h-12 w-full rounded-[999px] border-[#8b39e529] px-[22px] py-3.5 [font-family:'Inter',Helvetica] text-[13.5px] font-medium leading-[normal] text-[#8b39e5] hover:bg-[#f7f1ff] hover:text-[#8b39e5] sm:w-auto sm:text-[14.5px]"
            >
              See services
            </Button>
          </nav>
          <div className="grid w-full grid-cols-3 gap-3 sm:gap-5">
            {featureItems.map((item) => (
              <div
                key={item.title}
                className="flex min-h-[55.98px] flex-col justify-start border-l-2 border-[#d9bbff] pl-3 sm:pl-4"
              >
                <div className="[font-family:'Satoshi-Bold',Helvetica] text-base font-bold leading-[1.5] tracking-[-0.44px] text-[#0f0a1f] sm:text-[18px] lg:text-[22px] lg:leading-[35.2px]">
                  {item.title}
                </div>
                <div className="[font-family:'Montserrat',Helvetica] text-[11px] font-normal leading-[1.6] text-[#6b6478] sm:text-[12px] sm:leading-[20.8px]">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </header>
        <Card className="relative w-full overflow-hidden rounded-3xl border border-[#ece8f3] bg-[radial-gradient(50%_50%_at_0%_0%,rgba(248,241,255,1)_0%,rgba(255,255,255,1)_60%)] shadow-none">
          <CardContent className="relative p-4 lg:p-[18px] xl:p-[23px]">
            <div className="flex flex-col gap-2 lg:gap-2.5 xl:gap-3">
              <div className="relative flex items-center gap-2 rounded-[999px] border border-[#ece8f3] bg-white px-3 py-2 shadow-[0px_8px_22px_-16px_#140a282e] lg:px-[18px] lg:py-2.5 xl:py-3">
                <img
                  className="relative h-3.5 w-3.5 xl:h-4 xl:w-4"
                  alt="Search icon"
                  src="https://c.animaapp.com/mpb6dv7tQ8BPXz/img/component-3.svg"
                />
                <div className="[font-family:'Montserrat',Helvetica] text-xs font-medium leading-[22.4px] text-[#0f0a1f] lg:text-sm">
                  seo company dubai
                </div>
              </div>
              {resultCards.map((item) => (
                <article
                  key={item.path}
                  className={`relative rounded-2xl border ${item.cardClassName} ${
                    item.description ? "min-h-[100px] lg:min-h-[120px] xl:min-h-[154.06px]" : "min-h-[80px] lg:min-h-[100px] xl:min-h-[128.47px]"
                  }`}
                >
                  <div className="flex h-full flex-col px-3 pb-3 pt-3 lg:px-4 xl:px-[19px]">
                    <div className="pr-16 [font-family:'Montserrat',Helvetica] text-[10px] font-normal leading-[1.6] text-[#0f0a1f] lg:text-xs lg:leading-[19.2px]">
                      {item.path}
                    </div>
                    <div className="mt-1.5 pr-6 [font-family:'Satoshi-Bold',Helvetica] text-[13px] font-bold leading-[1.5] text-[#8a39e4] lg:mt-[10px] lg:text-sm xl:text-base xl:leading-[25.6px]">
                      {item.title}
                    </div>
                    {item.description ? (
                      <div className="mt-2 [font-family:'Montserrat',Helvetica] text-[11px] font-normal leading-[1.6] text-[#0f0a1f] lg:mt-[10px] lg:text-[12px] xl:text-[13px] xl:leading-[18.9px]">
                        {item.description}
                      </div>
                    ) : null}

                    {item.badge ? (
                      <Badge
                        className={`absolute right-[10px] top-[10px] h-auto rounded-[999px] px-[7px] py-0.5 xl:right-[15px] xl:top-[15px] xl:px-[9px] xl:py-1 ${item.badgeClassName}`}
                      >
                        <span className="[font-family:'Montserrat',Helvetica] text-[9px] font-bold leading-4 tracking-[0.40px] xl:text-[10px]">
                          {item.badge}
                        </span>
                      </Badge>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
            <div className="pointer-events-none absolute left-[59.95%] top-[76.28%] h-[63.35%] w-[69.69%] opacity-70 blur-[10px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(139,58,229,0.35)_0%,rgba(139,58,229,0)_70%)]" />
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
