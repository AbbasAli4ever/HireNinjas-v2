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
    title: (
      <>
        SEO Company Dubai · Top of Page
        <br />
        Visibility
      </>
    ),
    description: (
      <>
        Capture high-intent search traffic. Technical SEO
        <br />+ Google Ads tuned for UAE.
      </>
    ),
    badge: "Sponsored",
    badgeClassName: "bg-[#0f0a1f] text-white",
    cardClassName:
      "border-[#f0e2ff] bg-[linear-gradient(180deg,rgba(248,241,255,1)_0%,rgba(255,255,255,1)_100%)]",
  },
  {
    path: "hireninjas.ae › seo-ppc",
    title: (
      <>
        SEO &amp; PPC Agency Dubai , HireNinjas
        <br />
        UAE
      </>
    ),
    description: (
      <>
        Backlink building, on-page optimization, and
        <br />
        local SEO across Dubai &amp; Abu Dhabi.
      </>
    ),
    badge: "#1",
    badgeClassName: "bg-[#f0e2ff] text-[#8a39e4]",
    cardClassName: "border-[#ece8f3] bg-white",
  },
  {
    path: "hireninjas.ae › services",
    title: <>Local SEO &amp; Google Maps Optimization</>,
    description: null,
    badge: null,
    badgeClassName: "",
    cardClassName: "border-[#ece8f3] bg-white",
  },
];

export const HeroMessageSection = (): JSX.Element => {
  return (
    <section className="relative w-full overflow-hidden px-6 pb-20 pt-24 sm:px-10 lg:px-[120px]">
      <div className="pointer-events-none absolute left-[-10%] top-[-10%] h-[70%] w-[120%] blur-[10px] [background:radial-gradient(50%_50%_at_20%_30%,rgba(139,58,229,0.18)_0%,rgba(139,58,229,0)_60%),radial-gradient(50%_50%_at_85%_20%,rgba(189,140,255,0.35)_0%,rgba(189,140,255,0)_60%)]" />
      <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
        <header className="flex w-full flex-col items-start gap-[21.2px]">
          <Badge className="h-auto rounded-[999px] border border-[#f0e2ff] bg-[#f7f1ff] px-3.5 pb-[7.69px] pt-[7.5px] hover:bg-[#f7f1ff]">
            <span className="mr-2 inline-block h-1.5 w-1.5 rounded-[3px] bg-[#8a39e4]" />
            <span className="[font-family:'Montserrat',Helvetica] text-xs font-semibold tracking-[1.68px] leading-[19.2px] text-[#8a39e4]">
              SEO &amp; PPC
            </span>
          </Badge>
          <div className="w-full pb-[0.6px]">
            <img
              className="h-auto w-full max-w-[667px]"
              alt="Seo PPC for businesses to dominate search results"
              src="https://c.animaapp.com/mpb6dv7tQ8BPXz/img/seo---ppc-for-businesses-to-dominate-search-results.svg"
            />
          </div>
          <div className="w-full max-w-[667.29px]">
            <p className="[font-family:'Montserrat',Helvetica] text-lg font-normal leading-[28.8px] text-[#3a3447]">
              Increase search results across Dubai and the UAE by employing
              <br />
              combined SEO and Google Ads strategies designed to drive high-
              <br />
              intent traffic and measurable revenue growth.
            </p>
          </div>
          <nav className="flex flex-wrap items-start gap-4 sm:gap-6">
            <Button
              type="button"
              className="h-12 rounded-[999px] bg-[#8b39e5] pl-[22px] pr-2 text-white hover:bg-[#7d31d5]"
            >
              <span className="pl-3.5 [font-family:'Inter',Helvetica] text-[14.5px] font-medium leading-[normal]">
                Book a Free Consultation
              </span>
              <span className="ml-3 grid h-9 w-9 place-items-center rounded-[18px] bg-white">
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
              className="h-12 rounded-[999px] border-[#8b39e529] px-[22px] py-3.5 [font-family:'Inter',Helvetica] text-[14.5px] font-medium leading-[normal] text-[#8b39e5] hover:bg-[#f7f1ff] hover:text-[#8b39e5]"
            >
              See services
            </Button>
          </nav>
          <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-6">
            {featureItems.map((item) => (
              <div
                key={item.title}
                className="flex min-h-[55.98px] flex-col justify-between border-l-2 border-[#d9bbff] pl-4"
              >
                <div className="[font-family:'Satoshi-Bold',Helvetica] text-[22px] font-bold leading-[35.2px] tracking-[-0.44px] text-[#0f0a1f]">
                  {item.title}
                </div>
                <div className="[font-family:'Montserrat',Helvetica] text-[13px] font-normal leading-[20.8px] text-[#6b6478]">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </header>
        <Card className="relative w-full overflow-hidden rounded-3xl border border-[#ece8f3] bg-[radial-gradient(50%_50%_at_0%_0%,rgba(248,241,255,1)_0%,rgba(255,255,255,1)_60%)] shadow-none">
          <CardContent className="relative p-[23px]">
            <div className="flex flex-col gap-3">
              <div className="relative flex items-center gap-3 rounded-[999px] border border-[#ece8f3] bg-white px-[18px] py-3 shadow-[0px_8px_22px_-16px_#140a282e]">
                <img
                  className="relative h-4 w-4"
                  alt="Search icon"
                  src="https://c.animaapp.com/mpb6dv7tQ8BPXz/img/component-3.svg"
                />
                <div className="[font-family:'Montserrat',Helvetica] text-sm font-medium leading-[22.4px] text-[#0f0a1f]">
                  seo company dubai
                </div>
              </div>
              {resultCards.map((item) => (
                <article
                  key={item.path}
                  className={`relative rounded-2xl border ${item.cardClassName} ${
                    item.description ? "min-h-[154.06px]" : "min-h-[128.47px]"
                  }`}
                >
                  <div className="flex h-full flex-col px-[19px] pb-4 pt-4">
                    <div className="pr-20 [font-family:'Montserrat',Helvetica] text-xs font-normal leading-[19.2px] text-[#0f0a1f]">
                      {item.path}
                    </div>
                    <div className="mt-[10px] pr-8 [font-family:'Satoshi-Bold',Helvetica] text-base font-bold leading-[25.6px] text-[#8a39e4]">
                      {item.title}
                    </div>
                    {item.description ? (
                      <div className="mt-[14px] [font-family:'Montserrat',Helvetica] text-[13px] font-normal leading-[18.9px] text-[#0f0a1f]">
                        {item.description}
                      </div>
                    ) : null}

                    {item.badge ? (
                      <Badge
                        className={`absolute right-[15px] top-[15px] h-auto rounded-[999px] px-[9px] py-1 hover:${item.badgeClassName}`}
                      >
                        <span className="[font-family:'Montserrat',Helvetica] text-[10px] font-bold leading-4 tracking-[0.40px]">
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
