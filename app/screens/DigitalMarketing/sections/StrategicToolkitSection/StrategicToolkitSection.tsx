import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const toolkitCards = [
  {
    id: "01",
    label: "RESEARCH",
    title: "Market and Audience Research",
    description: (
      <>
        At Hireninjas, we conduct detailed competitor benchmarking,
        <br className="hidden xl:inline" />
        persona creation, and market opportunity evaluation so every
        <br className="hidden xl:inline" />
        strategic decision is informed by real commercial insights.
      </>
    ),
    className: "md:col-span-6",
    dark: false,
  },
  {
    id: "02",
    label: "CHANNELS",
    title: "Channel Strategy",
    description: (
      <>
        Locate and leverage the top acquisition channels for your
        <br className="hidden xl:inline" />
        business, such as SEO, paid media, social platforms, email
        <br className="hidden xl:inline" />
        marketing and conversion-focused landing funnels.
      </>
    ),
    className: "md:col-span-6",
    dark: false,
  },
  {
    id: "03",
    label: "JOURNEY",
    title: "Customer Journey Mapping",
    description: (
      <>
        At Hireninjas, we help businesses map
        <br className="hidden xl:inline" />
        the complete customer lifecycle from
        <br className="hidden xl:inline" />
        initial interactions through to repeat
        <br className="hidden xl:inline" />
        purchases - from friction points and
        <br className="hidden xl:inline" />
        potential conversion opportunities
        <br className="hidden xl:inline" />
        to improved engagement and
        <br className="hidden xl:inline" />
        conversion rates.
      </>
    ),
    className: "md:col-span-4",
    dark: false,
  },
  {
    id: "04",
    label: "MEASUREMENT",
    title: "Performance Measurement",
    description: (
      <>
        Custom performance measurement
        <br className="hidden xl:inline" />
        systems will help your team
        <br className="hidden xl:inline" />
        understand what success looks like
        <br className="hidden xl:inline" />
        and how campaigns contribute to
        <br className="hidden xl:inline" />
        revenue growth.
      </>
    ),
    className: "md:col-span-4",
    dark: false,
  },
  {
    id: "05",
    label: "CAMPAIGNS",
    title: "Campaign Architecture",
    description: (
      <>
        Our campaign architects create full
        <br className="hidden xl:inline" />
        funnel-level campaign frameworks with
        <br className="hidden xl:inline" />
        messaging hierarchies, creative
        <br className="hidden xl:inline" />
        direction, audience targeting logic and
        <br className="hidden xl:inline" />
        budget allocation models.
      </>
    ),
    className: "md:col-span-4",
    dark: false,
  },
  {
    id: "06",
    label: "CONTINUOUS",
    title: "Quarterly Strategy Reviews",
    description: (
      <>
        As markets change rapidly, we adapt and refine your roadmap on a
        quarterly
        <br className="hidden xl:inline" />
        basis using performance data and trend insights to maintain momentum and
        <br className="hidden xl:inline" />
        competitive advantage.
      </>
    ),
    className: "md:col-span-12",
    dark: true,
  },
];

export const StrategicToolkitSection = (): JSX.Element => {
  return (
    <section className="w-full px-2 py-12 sm:px-8 sm:py-16 md:px-4 lg:px-8 xl:px-0">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-start gap-8 sm:gap-10 lg:gap-12">
        <header className="flex w-full max-w-[760px] flex-col items-start gap-4 lg:gap-[17.33px]">
          <Badge
            variant="outline"
            className="h-auto rounded-[999px] border border-solid border-[#00000029] bg-transparent px-3.5 py-[7px] hover:bg-transparent"
          >
            <span className="mr-2.5 flex h-1.5 w-1.5 items-start justify-center rounded-[3px] bg-[#6ce5b1]">
              <span className="h-1.5 w-1.5 rounded-[3px] bg-[#ffffff01] shadow-[0px_0px_0px_4px_#6ce5b12e]" />
            </span>
            <span className="[font-family:'Inter',Helvetica] text-[7px] sm:text-xs font-normal tracking-[1.68px] leading-[18px] text-black">
              WHAT IS INCLUDED IN YOUR ROADMAP FOR SUCCESS
            </span>
          </Badge>
          <div className="w-full">
            <h2 className="text-[32px] leading-[1.15] tracking-[-1px] sm:text-[40px] sm:tracking-[-1.4px] lg:text-5xl xl:font-h-2 xl:text-[length:var(--h-2-font-size)] xl:font-[number:var(--h-2-font-weight)] xl:leading-[var(--h-2-line-height)] xl:tracking-[var(--h-2-letter-spacing)] text-[#0f0a1f] font-bold [font-family:'Satoshi-Bold',Helvetica] xl:[font-style:var(--h-2-font-style)]">
              A complete strategic toolkit ,
              <br className="hidden xl:inline" />
              assembled around your goals.
            </h2>
          </div>
        </header>
        <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-12">
          {toolkitCards.map((card) => (
            <Card
              key={card.id}
              className={`relative overflow-hidden rounded-2xl border border-solid border-[#ece8f3] bg-white shadow-none ${card.className}`}
              style={card.dark ? { background: "linear-gradient(100deg, #2D0255 0%, #1A0A3D 100%)" } : undefined}
            >
              <CardContent
                className={
                  card.dark
                    ? "flex flex-col items-start gap-2.5 p-5 sm:p-6 xl:p-7"
                    : "flex flex-col items-start gap-2.5 p-5 sm:p-6 xl:p-7"
                }
              >
                <div className="flex w-full flex-col items-start">
                  <p
                    className={
                      card.dark
                        ? "[font-family:'Inter',Helvetica] text-xs font-medium tracking-[1.68px] leading-[18px] text-[#BD8CFF]"
                        : "[font-family:'Inter',Helvetica] text-xs font-medium tracking-[1.68px] leading-[18px] text-[#8b3ae5]"
                    }
                  >
                    {card.id} , {card.label}
                  </p>
                </div>
                <div
                  className={
                    card.dark
                      ? "flex w-full max-w-[357.21px] flex-col items-start px-0 pb-0 pt-[3.99px]"
                      : "flex w-full flex-col items-start px-0 pb-0 pt-1"
                  }
                >
                  <h3
                    className={
                      card.dark
                        ? "[font-family:'Inter',Helvetica] text-xl font-semibold leading-[30px] text-white"
                        : "[font-family:'Inter',Helvetica] text-xl font-semibold leading-[30px] text-[#0f0a1f]"
                    }
                  >
                    {card.title}
                  </h3>
                </div>
                <div
                  className={
                    card.dark
                      ? "flex w-full max-w-[595.8px] flex-col items-start"
                      : "flex w-full flex-col items-start"
                  }
                >
                  <p
                    className={
                      card.dark
                        ? "[font-family:'Inter',Helvetica] text-sm font-normal leading-[21px] text-[#ffffffb2]"
                        : "[font-family:'Inter',Helvetica] text-sm font-normal leading-[21px] text-[#4a4062]"
                    }
                  >
                    {card.description}
                  </p>
                </div>
                {!card.dark && (
                  <div className="pointer-events-none absolute bottom-[-29px] right-[-29px] h-[140px] w-[140px] rounded-[70px] opacity-0 [background:radial-gradient(50%_50%_at_50%_50%,rgba(139,58,229,0.18)_0%,rgba(139,58,229,0)_70%)]" />
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
