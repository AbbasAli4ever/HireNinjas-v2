import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const serviceCards = [
  {
    id: "01",
    label: "AUDIT",
    title: "Technical SEO Audits",
    description: "We conduct comprehensive audits encompassing crawlability, indexing structure, Core Web Vitals performance, mobile usability and potential on-page optimisation opportunities.",
    icon: "/seo-ppc/jar.svg",
    className: "md:col-span-6",
    dark: false,
  },
  {
    id: "02",
    label: "AUTHORITY",
    title: "Backlink Building",
    description: "Engaging in high-authority link acquisition campaigns will build domain credibility and boost keyword performance across competitive UAE search markets.",
    icon: "/seo-ppc/link.svg",
    className: "md:col-span-6",
    dark: false,
  },
  {
    id: "03",
    label: "ON-PAGE",
    title: "On-Page Optimization",
    description: "We utilize keyword targeting techniques to ensure optimal performance on search pages. Optimizations include title tags, meta descriptions, internal linking structures and content hierarchy to increase visibility and search relevance.",
    icon: "/seo-ppc/lines.svg",
    className: "md:col-span-4",
    dark: false,
  },
  {
    id: "04",
    label: "PAID",
    title: "Google Ads Management",
    description: "Our experts optimise Search, Display, Shopping and Performance Max campaigns strategically for maximum return on ad spend while minimising wasteful ad spend.",
    icon: "/seo-ppc/card.svg",
    className: "md:col-span-4",
    dark: false,
  },
  {
    id: "05",
    label: "LOCAL",
    title: "Local SEO",
    description: "Our services help ensure maximum local search relevance while minimising wasted ad spend. Optimize visibility on Google Maps and local search results across Dubai and Abu Dhabi to help nearby customers quickly locate your business.",
    icon: "/seo-ppc/map.svg",
    className: "md:col-span-4",
    dark: false,
  },
  {
    id: "06",
    label: "COMMERCE",
    title: "E-Commerce SEO",
    description: "Optimize category structures, product pages, metadata, and internal linking frameworks in order to increase organic traffic and sales for online stores in competitive UAE search markets.",
    icon: "/seo-ppc/cart.svg",
    className: "md:col-span-12",
    dark: true,
  },
];

const _renderDescription = (text: string, dark?: boolean) => (
  <p
    className={`[font-family:'Montserrat',Helvetica] text-[13px] leading-[1.6] tracking-[0] sm:text-[14px] lg:text-[15px] lg:leading-6 ${
      dark ? "text-[#ffffffc7]" : "text-[#3a3447]"
    }`}
  >
    {text}
  </p>
);

export const TechnicalServicesSection = (): JSX.Element => {
  return (
    <section className="relative w-full px-2 py-10 sm:px-0 sm:py-14 lg:px-10 lg:py-16">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-start gap-8 sm:gap-10 lg:gap-12">
        <header className="flex w-full flex-col items-start gap-3 sm:gap-[16.83px] lg:max-w-[760px]">
          <Badge className="h-auto rounded-[999px] border border-solid border-[#f0e2ff] bg-[#f7f1ff] px-3.5 pb-[7.69px] pt-[7.5px] text-[#8a39e4] shadow-none hover:bg-[#f7f1ff]">
            <span className="[font-family:'Montserrat',Helvetica] text-[10px] font-semibold leading-[19.2px] tracking-[1.2px] sm:text-xs sm:tracking-[1.68px]">
              OUR SEO &amp; PPC SERVICES ARE:
            </span>
          </Badge>
          <div className="w-full">
            <h2 className="[font-family:'Satoshi-Bold',Helvetica] text-[28px] font-bold leading-[34px] tracking-[-0.56px] text-[#0f0a1f] sm:text-[34px] sm:leading-[38px] sm:tracking-[-0.68px] md:text-[40px] md:leading-[44px] lg:text-[46px] lg:leading-[49.7px] lg:tracking-[-0.92px]">
              Technical depth
              <br />
              meets paid precision.
            </h2>
          </div>
        </header>
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 md:grid-cols-12">
          {serviceCards.map((card) => (
            <Card
              key={card.id}
              className={`relative overflow-hidden rounded-2xl border shadow-none col-span-1 sm:col-span-1 ${
                card.dark
                  ? "border-transparent bg-[linear-gradient(167deg,rgba(45,2,85,1)_0%,rgba(26,10,61,1)_100%)]"
                  : "border-[#ece8f3] bg-white"
              } ${card.className}`}
            >
              <CardContent
                className={`flex h-full flex-col items-start gap-2.5 p-5 sm:p-6 lg:p-7 ${
                  card.id === "04" ? "lg:pb-[76px]" : ""
                }`}
              >
                <div
                  className={`grid h-10 w-10 place-items-center rounded-[11px] sm:h-11 sm:w-11 ${
                    card.dark ? "bg-[#ffffff1a]" : "bg-[#f7f1ff]"
                  }`}
                >
                  <img
                    className="h-5 w-5 sm:h-[22px] sm:w-[22px]"
                    alt={card.title}
                    src={card.icon}
                  />
                </div>
                <div className="w-full pt-1 pb-[0.8px]">
                  <p
                    className={`[font-family:'Satoshi-Bold',Helvetica] text-[11px] font-bold leading-[20.8px] tracking-[1.5px] sm:text-[13px] sm:tracking-[2.08px] ${
                      card.dark ? "text-[#bd8cff]" : "text-[#8a39e4]"
                    }`}
                  >
                    {card.id} , {card.label}
                  </p>
                </div>
                <div className="w-full pt-0.5">
                  <h3
                    className={`[font-family:'Satoshi-Bold',Helvetica] text-[18px] font-bold leading-[22px] tracking-[-0.36px] sm:text-[20px] sm:leading-[24px] lg:text-[23px] lg:leading-[27.6px] lg:tracking-[-0.46px] ${
                      card.dark ? "text-white" : "text-[#0f0a1f]"
                    }`}
                  >
                    {card.title}
                  </h3>
                </div>
                <div
                  className={`w-full ${card.dark ? "xl:max-w-[595.8px]" : ""}`}
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
