import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const industryCards = [
  {
    title: "SaaS/Tech Startups",
    description:
      "Multi-currency support for global expansion and multi-user accounts with granular permissions to manage a growing, international team.",
    image: "/figmaAssets/frame-2147224383.png",
    tracking: "tracking-[0]",
  },
  {
    title: "Ecommerce Brands",
    description:
      "Traditional banks won't touch you. We embrace you. Trade and custody crypto alongside fiat. Instant conversions. Institutional security. Full compliance built-in.",
    image: "/figmaAssets/frame-2147224387.png",
    tracking: "tracking-[0]",
  },
  {
    title: "HealthTech Companies",
    description:
      "Separate personal and business finances effortlessly. Get paid faster with local account details worldwide. Track expenses automatically for tax time.",
    image: "/figmaAssets/frame-2147224389.png",
    tracking: "tracking-[0]",
  },
  {
    title: "Fintech Platforms",
    description:
      "Juggling multiple client projects? Create dedicated virtual cards per client. Track spending in real-time. Generate client reports automatically. Close your books faster.",
    image: "/figmaAssets/frame-2147224386.png",
    tracking: "tracking-[0]",
  },
  {
    title: "Enterprise Organizations",
    description:
      "Sell worldwide without banking headaches. Local account details in major markets, wholesale FX rates, and same-day settlements. Pay suppliers in their currency, get paid in yours.",
    image: "/figmaAssets/frame-2147224385.png",
    tracking: "tracking-[-1.00px]",
  },
  {
    title: "AI/Web3 Teams",
    description:
      "Multi-currency support for global expansion and multi-user accounts with granular permissions to manage a growing, international team.",
    image: "/figmaAssets/frame-2147224388.png",
    tracking: "tracking-[0]",
  },
];

export const IndustriesWeServeSection = (): JSX.Element => {
  return (
    <section className="w-full bg-[#4a0d8c] px-4 py-[70px] sm:px-6 lg:px-[140px]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-[50px]">
        <header className="flex w-full max-w-[914px] flex-col items-center gap-6">
          <h2 className="mt-[-1.00px] self-stretch text-center font-h-2 text-[length:var(--h-2-font-size)] font-[number:var(--h-2-font-weight)] leading-[var(--h-2-line-height)] tracking-[var(--h-2-letter-spacing)] text-white [font-style:var(--h-2-font-style)] max-md:text-3xl">
            Built for Ambitious Growth-Focused Companies, supports companies
            across
          </h2>
          <p className="self-stretch text-center text-lg font-normal leading-[27.9px] tracking-[0] text-white [font-family:'Inter',Helvetica]">
            HireNinjas understands the challenges associated with scaling
            rapidly digital businesses,
            <br />
            such as hiring and marketing staff.
          </p>
        </header>
        <ScrollArea className="w-full whitespace-nowrap">
          <div className="flex w-max min-w-full items-start gap-8 pb-4">
            {industryCards.map((card) => (
              <Card
                key={card.title}
                className="relative h-[315px] w-[356px] shrink-0 overflow-hidden rounded-[30px] border-2 border-solid border-[#9644ed] bg-transparent p-0 shadow-none"
              >
                <CardContent className="relative h-full p-0">
                  <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${card.image})` }}
                    aria-hidden="true"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,1)_0%,rgba(0,0,0,0)_33%,rgba(0,0,0,0)_58%,rgba(0,0,0,0.96)_100%)]" />
                  <h3 className="absolute left-6 top-6 z-10 w-[308px] text-2xl font-medium leading-[31.2px] tracking-[0] text-white [font-family:'Inter',Helvetica]">
                    {card.title}
                  </h3>
                  <div className="absolute bottom-0 left-0 z-10 flex h-[132px] w-full flex-col justify-end gap-4 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.82)_35%,rgba(0,0,0,1)_100%)] px-6 pb-6">
                    <img
                      className="h-0.5 w-full"
                      alt="Line stroke"
                      src="/figmaAssets/line-9--stroke-.svg"
                    />
                    <p
                      className={`flex items-center text-sm font-light leading-6 text-white [font-family:'SF_Pro-Light',Helvetica] ${card.tracking}`}
                    >
                      {card.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <ScrollBar orientation="horizontal" className="hidden" />
        </ScrollArea>
      </div>
    </section>
  );
};
