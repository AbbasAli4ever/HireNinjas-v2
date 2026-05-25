import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const lifecycleCards = [
  {
    number: "01",
    title: "Customer Acquisition",
    body: (
      <>
        At hireninjas we create performance-
        <br />
        driven online store marketing
        <br />
        campaigns across Google Shopping,
        <br />
        Meta, TikTok and affiliate channels in
        <br />
        order to increase customer acquisition
        <br />
        efficiency while optimizing ROAS
        <br />
        across your advertising investment.
      </>
    ),
    cardClassName: "gap-3 pt-8 pb-[83.65px] px-8",
    numberClassName: "top-[25px] right-[22px]",
  },
  {
    number: "02",
    title: (
      <>
        Conversion Rate
        <br />
        Optimization
      </>
    ),
    body: (
      <>
        Our ecommerce marketing Dubai
        <br />
        team&#39;s conversion rate optimisation
        <br />
        services enhance store performance
        <br />
        through structured A/B testing, UX
        <br />
        improvements, landing-page
        <br />
        optimisation and checkout-flow
        <br />
        improvements designed to convert
        <br />
        more visitors into paying customers.
      </>
    ),
    cardClassName: "gap-[12.01px] pt-[31.33px] pb-[31.99px] px-8",
    numberClassName: "top-[25px] right-[11px]",
  },
  {
    number: "03",
    title: "Customer Retention",
    body: (
      <>
        At HireNinjas UAE, our lifecycle
        <br />
        marketing strategies combine email
        <br />
        automation, SMS campaigns, loyalty
        <br />
        programme integrations and loyalty
        <br />
        program integrations into lifecycle
        <br />
        strategies to increase repeat purchase
        <br />
        rate and maximize long-term
        <br />
        customer lifetime value for
        <br />
        ecommerce brands.
      </>
    ),
    cardClassName: "gap-3 pt-8 pb-[35.65px] px-8",
    numberClassName: "top-[25px] right-[13px]",
  },
];

export const ConversionLifecycleSection = (): JSX.Element => {
  return (
    <section className="relative mt-[70px] flex w-full flex-col items-start gap-12 px-4 sm:px-6 lg:px-[140px]">
      <div className="flex w-full max-w-[1200px] flex-col items-start gap-[17px]">
        <Badge className="h-auto rounded-[999px] border border-solid border-[#f0e2ff] bg-[#f7f1ff] px-3.5 pt-[7.5px] pb-[7.69px] text-[#8a39e4] hover:bg-[#f7f1ff]">
          <span className="[font-family:'Montserrat',Helvetica] text-xs font-semibold leading-[19.2px] tracking-[1.68px] whitespace-nowrap">
            KEY CHALLENGES WE SOLVE
          </span>
        </Badge>
        <header className="flex w-full max-w-[760px] flex-col items-start px-0 pt-0 pb-[0.67px]">
          <h2 className="[font-family:'Satoshi-Bold',Helvetica] text-[46px] font-bold leading-[49.7px] tracking-[-0.92px] text-[#0f0a1f]">
            Acquire, convert, retain.
          </h2>
        </header>
      </div>
      <div className="grid w-full max-w-[1200px] grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {lifecycleCards.map((card) => (
          <Card
            key={card.number}
            className={`relative h-full rounded-2xl border border-solid border-[#ece8f3] bg-[#ffffff] shadow-none ${card.cardClassName}`}
          >
            <div
              className={`absolute ${card.numberClassName} inline-flex flex-col items-start`}
            >
              <span className="[font-family:'Satoshi-Bold',Helvetica] text-[56px] font-bold leading-[56px] tracking-[-2.24px] whitespace-nowrap text-[#f7f1ff]">
                {card.number}
              </span>
            </div>
            <CardContent className="p-0">
              <article className="flex flex-col items-start gap-3">
                <h3 className="[font-family:'Satoshi-Bold',Helvetica] text-[23px] font-bold leading-[27.6px] tracking-[-0.46px] text-[#0f0a1f]">
                  {card.title}
                </h3>
                <p className="[font-family:'Montserrat',Helvetica] text-[15px] leading-6 font-normal text-[#3a3447]">
                  {card.body}
                </p>
              </article>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
