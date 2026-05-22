import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const paragraphs = [
  "HireNinjas Provides SEO Expertise and PPC Campaign Management Solutions that Put Businesses Ahead At HireNinjas, our combination of technical SEO expertise with PPC campaign management enables businesses throughout Dubai and UAE to capture high-intent search traffic at every stage of the buying journey.",
  "Our approach ensures your brand appears where customers are searching, whether that means organic rankings or paid placements. From keyword opportunity mapping and technical audits to optimising Google Ads and conversion tracking, every strategy we use aims at increasing brand visibility while simultaneously decreasing acquisition costs and increasing qualified enquiries.",
  "HireNinjas' extensive knowledge of both Arabic and English search behaviors across Dubai and Abu Dhabi markets allows businesses to secure long-term ranking strength alongside immediate lead generation performance.",
];

const capabilities = [
  { title: "Keyword opportunity mapping", label: "Discover" },
  { title: "Technical audits", label: "Audit" },
  { title: "Google Ads optimization", label: "Acquire" },
  { title: "Conversion tracking", label: "Measure" },
  { title: "Arabic & English SEO", label: "Bilingual" },
];

export const SearchIntelligenceSection = (): JSX.Element => {
  return (
    <section className="w-full px-2 py-8 sm:px-0 sm:py-12 lg:px-10 lg:py-16">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-start gap-8 sm:gap-10 lg:gap-12">
        <header className="flex w-full flex-col items-start gap-3 sm:gap-[16.83px] lg:max-w-[760px]">
          <Badge className="h-auto rounded-[999px] border border-solid border-[#f0e2ff] bg-[#f7f1ff] px-3.5 pt-[7.5px] pb-[7.69px] hover:bg-[#f7f1ff]">
            <span className="[font-family:'Montserrat',Helvetica] text-[10px] font-semibold leading-[19.2px] tracking-[1.2px] text-[#8a39e4] sm:text-xs sm:tracking-[1.68px]">
              OWN THE TOP OF SEARCH RESULTS WHERE IT MATTERS MOST
            </span>
          </Badge>
          <div className="w-full">
            <h2 className="[font-family:'Satoshi-Bold',Helvetica] text-[28px] font-bold leading-[34px] tracking-[-0.56px] text-[#0f0a1f] sm:text-[34px] sm:leading-[38px] sm:tracking-[-0.68px] md:text-[40px] md:leading-[44px] md:tracking-[-0.8px] lg:text-[46px] lg:leading-[49.7px] lg:tracking-[-0.92px]">
              Where customers search,
              <br />organic and paid.
            </h2>
          </div>
        </header>
        <div className="grid w-full grid-cols-1 items-start gap-6 md:gap-8 xl:grid-cols-[minmax(0,530px)_minmax(0,1fr)] xl:gap-[60px]">
          <article className="flex h-fit flex-col items-start gap-3 sm:gap-[15.3px]">
            {paragraphs.map((paragraph, index) => (
              <p
                key={`paragraph-${index}`}
                className="[font-family:'Montserrat',Helvetica] text-sm font-normal leading-[1.6] tracking-[0] text-[#3a3447] sm:text-base sm:leading-[25.6px]"
              >
                {paragraph}
              </p>
            ))}
          </article>
          <Card className="w-full rounded-2xl border border-solid border-[#f0e2ff] bg-[linear-gradient(180deg,rgba(248,241,255,1)_0%,rgba(255,255,255,1)_100%)] p-0 shadow-none">
            <CardContent className="flex flex-col gap-2.5 p-4 sm:gap-3 sm:p-5 md:p-7">
              {capabilities.map((item) => (
                <div
                  key={item.title}
                  className="flex min-h-[54px] items-center justify-between gap-3 rounded-xl border border-solid border-[#ece8f3] bg-white px-3 py-3 sm:gap-4 sm:px-4 sm:py-3.5"
                >
                  <h3 className="[font-family:'Satoshi-Bold',Helvetica] text-[13px] font-bold leading-6 tracking-[0] text-[#0f0a1f] sm:text-[15px]">
                    {item.title}
                  </h3>
                  <Badge className="h-auto shrink-0 rounded-[999px] bg-[#f7f1ff] px-[9px] py-1 hover:bg-[#f7f1ff]">
                    <span className="[font-family:'Montserrat',Helvetica] text-[10px] font-semibold leading-[17.6px] tracking-[0] text-[#591f97] sm:text-[11px]">
                      {item.label}
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