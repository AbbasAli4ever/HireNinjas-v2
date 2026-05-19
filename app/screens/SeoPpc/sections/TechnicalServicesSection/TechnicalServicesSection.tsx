import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const serviceCards = [
  {
    id: "01",
    label: "AUDIT",
    title: "Technical SEO Audits",
    description: [
      "We conduct comprehensive audits encompassing crawlability,",
      "indexing structure, Core Web Vitals performance, mobile usability",
      "and potential on-page optimisation opportunities.",
    ],
    icon: "https://c.animaapp.com/mpb6dv7tQ8BPXz/img/component-3-10.svg",
    className: "md:col-span-6",
    dark: false,
  },
  {
    id: "02",
    label: "AUTHORITY",
    title: "Backlink Building",
    description: [
      "Engaging in high-authority link acquisition campaigns will build",
      "domain credibility and boost keyword performance across",
      "competitive UAE search markets.",
    ],
    icon: "https://c.animaapp.com/mpb6dv7tQ8BPXz/img/component-3-11.svg",
    className: "md:col-span-6",
    dark: false,
  },
  {
    id: "03",
    label: "ON-PAGE",
    title: "On-Page Optimization",
    description: [
      "We utilize techniques like keyword",
      "targeting to ensure optimal keyword",
      "performance on search pages.",
      "Optimizations include title tags, meta",
      "descriptions, internal linking structures",
      "and content hierarchy to increase",
      "visibility and search relevance.",
    ],
    icon: "https://c.animaapp.com/mpb6dv7tQ8BPXz/img/component-3-7.svg",
    className: "md:col-span-4",
    dark: false,
  },
  {
    id: "04",
    label: "PAID",
    title: "Google Ads Management",
    description: [
      "Our experts optimise Search, Display,",
      "Shopping and Performance Max",
      "campaigns strategically for maximum",
      "return on ad spend while minimising",
      "wasteful ad spend.",
    ],
    icon: "https://c.animaapp.com/mpb6dv7tQ8BPXz/img/component-3-4.svg",
    className: "md:col-span-4",
    dark: false,
  },
  {
    id: "05",
    label: "LOCAL",
    title: "Local SEO",
    description: [
      "Our services help ensure maximum",
      "local search relevance while minimising",
      "wasted ad spend. Optimize visibility on",
      "Google Maps and local-search results",
      "across Dubai and Abu Dhabi to help",
      "nearby customers quickly locate",
      "your business.",
    ],
    icon: "https://c.animaapp.com/mpb6dv7tQ8BPXz/img/component-3-2.svg",
    className: "md:col-span-4",
    dark: false,
  },
  {
    id: "06",
    label: "COMMERCE",
    title: "E-Commerce SEO",
    description: [
      "Optimize category structures, product pages, metadata, and internal linking",
      "frameworks in order to increase organic traffic and sales for online stores in",
      "competitive UAE search markets.",
    ],
    icon: "https://c.animaapp.com/mpb6dv7tQ8BPXz/img/component-3-3.svg",
    className: "md:col-span-12",
    dark: true,
  },
];

const _renderDescription = (lines: string[], dark?: boolean) => (
  <p
    className={`[font-family:'Montserrat',Helvetica] text-[15px] leading-6 tracking-[0] ${
      dark ? "text-[#ffffffc7]" : "text-[#3a3447]"
    }`}
  >
    {lines.map((line, index) => (
      <span key={`${line}-${index}`}>
        {line}
        {index < lines.length - 1 && <br />}
      </span>
    ))}
  </p>
);

export const TechnicalServicesSection = (): JSX.Element => {
  return (
    <section className="relative w-full px-4 py-16 sm:px-6 lg:px-10">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-start gap-12">
        <header className="flex w-full max-w-[760px] flex-col items-start gap-[16.83px]">
          <Badge className="h-auto rounded-[999px] border border-solid border-[#f0e2ff] bg-[#f7f1ff] px-3.5 pb-[7.69px] pt-[7.5px] text-[#8a39e4] shadow-none hover:bg-[#f7f1ff]">
            <span className="[font-family:'Montserrat',Helvetica] text-xs font-semibold leading-[19.2px] tracking-[1.68px]">
              OUR SEO &amp; PPC SERVICES ARE:
            </span>
          </Badge>
          <div className="w-full">
            <h2 className="[font-family:'Satoshi-Bold',Helvetica] text-[34px] font-bold leading-[38px] tracking-[-0.68px] text-[#0f0a1f] sm:text-[40px] sm:leading-[44px] md:text-[46px] md:leading-[49.7px] md:tracking-[-0.92px]">
              Technical depth
              <br />
              meets paid precision.
            </h2>
          </div>
        </header>
        <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-12">
          {serviceCards.map((card) => (
            <Card
              key={card.id}
              className={`relative overflow-hidden rounded-2xl border shadow-none ${
                card.dark
                  ? "border-transparent bg-[linear-gradient(167deg,rgba(45,2,85,1)_0%,rgba(26,10,61,1)_100%)]"
                  : "border-[#ece8f3] bg-white"
              } ${card.className}`}
            >
              <CardContent
                className={`flex h-full flex-col items-start gap-2.5 p-7 ${
                  card.id === "04" ? "pb-[76px]" : ""
                }`}
              >
                <div
                  className={`grid h-11 w-11 place-items-center rounded-[11px] ${
                    card.dark ? "bg-[#ffffff1a]" : "bg-[#f7f1ff]"
                  }`}
                >
                  <img
                    className="h-[22px] w-[22px]"
                    alt={card.title}
                    src={card.icon}
                  />
                </div>
                <div className="w-full pt-[7px] pb-[0.8px]">
                  <p
                    className={`[font-family:'Satoshi-Bold',Helvetica] text-[13px] font-bold leading-[20.8px] tracking-[2.08px] ${
                      card.dark ? "text-[#bd8cff]" : "text-[#8a39e4]"
                    }`}
                  >
                    {card.id} , {card.label}
                  </p>
                </div>
                <div
                  className={`w-full ${card.id === "01" || card.id === "02" ? "pt-[3.99px]" : "pt-1"}`}
                >
                  <h3
                    className={`[font-family:'Satoshi-Bold',Helvetica] text-[23px] font-bold leading-[27.6px] tracking-[-0.46px] ${
                      card.dark ? "text-white" : "text-[#0f0a1f]"
                    }`}
                  >
                    {card.title}
                  </h3>
                </div>
                <div
                  className={`w-full ${card.dark ? "max-w-[595.8px]" : ""}`}
                >
                  {_renderDescription(card.description, card.dark)}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
