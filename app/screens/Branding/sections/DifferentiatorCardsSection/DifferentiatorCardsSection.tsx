import { Card, CardContent } from "@/components/ui/card";
const serviceCards = [
  {
    id: "01",
    label: "MARK",
    title: "Logo Design",
    description:
      "Logos designed for long-term recognition across digital platforms, print materials, signage and advertising campaigns.",
    icon: "https://c.animaapp.com/mpcclquhSkUmAZ/img/component-4.svg",
  },
  {
    id: "02",
    label: "DOCUMENT",
    title: "Brand Guidelines",
    description:
      "Comprehensive brand documentation covering typography, color systems, usage rules for logo usage as well as imagery direction and tone of voice standards.",
    icon: "https://c.animaapp.com/mpcclquhSkUmAZ/img/component-4.svg",
  },
  {
    id: "03",
    label: "SYSTEM",
    title: "Visual Identity System",
    description:
      "Sophisticated visual identities integrated across business cards, presentations, social media posts, marketing materials and large format brand environments.",
    icon: "https://c.animaapp.com/mpcclquhSkUmAZ/img/component-4.svg",
  },
  {
    id: "04",
    label: "VOICE",
    title: "Naming & Messaging",
    description:
      "Our branding & messaging experts provide support in terms of naming support, tagline development, positioning statements and messaging frameworks to clarify how your business engages its audience. In addition to brand renaming & refresh services.",
    icon: "https://c.animaapp.com/mpcclquhSkUmAZ/img/component-4.svg",
  },
  {
    id: "05",
    label: "REFRESH",
    title: "Brand Refresh",
    description:
      "Modernize and elevate your existing brand identity while upholding brand equity and recognition already established in your market.",
    icon: "https://c.animaapp.com/mpcclquhSkUmAZ/img/component-4.svg",
  },
  {
    id: "06",
    label: "TACTILE",
    title: "Packaging & Print Design",
    description:
      "Design concepts for packaging concepts, brochures, exhibition graphics, and offline marketing materials designed to strengthen brand presence beyond digital channels.",
    icon: "https://c.animaapp.com/mpcclquhSkUmAZ/img/component-4.svg",
  },
];
export const DifferentiatorCardsSection = (): JSX.Element => {
  return (
    <section className="w-full bg-white border-t border-b border-[#ece8f3]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start px-6 py-[70px] sm:px-10 lg:px-[140px]">
        <div className="flex w-full max-w-[1200px] flex-col items-start gap-12">
          <header className="flex w-full flex-col items-start gap-4">
            <div className="inline-flex items-center gap-2.5 rounded-[999px] border border-solid border-[#00000029] px3.5 py-[7px]">
              <span className="flex h-1.5 w-1.5 ml-2 items-start justify-center rounded-[3px] bg-[#6ce5b1]">
                <span className="h-1.5 w-1.5 rounded-[3px] bg-[#ffffff01] shadow-[0px_0px_0px_4px_#6ce5b12e]" />
              </span>
              <span className="font-inter text-xs font-normal leading-[18px] tracking-[1.68px] textblack">
                OUR SPECIALIZED SERVICES
              </span>
            </div>
            <h2
              className="font-satoshi text-[36px] font-bold leading-[40px] tracking-[-0.92px]
text-[#0f0a1f] sm:text-[42px] sm:leading-[46px] lg:text-[46px] lg:leading-[49.7px]"
            >
              A complete production toolkit,
              <br />
              assembled around your goals.
            </h2>
          </header>
          <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {serviceCards.map((card) => (
              <Card
                key={card.id}
                className="relative h-full overflow-hidden rounded-2xl border border-solid border-[#ece8f3] bg-white
shadow-none"
              >
                <CardContent className="flex h-full flex-col items-start gap-2.5 p-7">
                  <div className="grid h-11 w-11 grid-cols-[44px] grid-rows-[44px] rounded-[11px] bg-[#f7f1ff]">
                    <img
                      className="col-[1_/_2] row-[1_/_2] h-[22px] w-[22px] place-self-center"
                      alt="Component"
                      src={card.icon}
                    />
                  </div>
                  <div className="flex w-full flex-col items-start px-0 pb-[0.8px] pt-[7px]">
                    <p className="font-satoshi mt-[-1.00px] w-fit whitespace-nowrap text-[13px] font-bold leading-[20.8px] tracking-[2.08px] text-[#8a39e4]">
                      {card.id} — {card.label}
                    </p>
                  </div>
                  <div className="flex w-full flex-col items-start px-0 pb-0 pt-[3.99px]">
                    <h3
                      className="font-satoshi mt-[-1.00px] self-stretch text-[23px] font-bold leading-
[27.6px] tracking-[-0.46px] text-[#0f0a1f]"
                    >
                      {card.title}
                    </h3>
                  </div>
                  <div className="flex w-full flex-1 flex-col items-start">
                    <p
                      className="font-montserrat mt-[-1.00px] self-stretch text-[15px] font-normal leading-6
tracking-[0] text-[#3a3447]"
                    >
                      {card.description}
                    </p>
                  </div>
                  <div
                    className="pointer-events-none absolute bottom-[-29px] right-[-29px] h-[140px] w-[140px] rounded-
[70px] opacity-0 [background:radialgradient(50%_50%_at_50%_50%,rgba(139,58,229,0.18)_0%,rgba(139,58,229,0)_70%)]"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
