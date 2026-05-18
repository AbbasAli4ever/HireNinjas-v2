import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const serviceCards = [
  {
    id: "01",
    label: "ENGAGE",
    title: "Community Management",
    description: [
      "Our Community Managers monitor messages, comments and",
      "mentions daily to maintain engagement quality, protect brand",
      "reputation and build relationships with your audience.",
    ],
    icon: "https://c.animaapp.com/mp6yzze1tTdE4q/img/component-4-4.svg",
    wrapperClassName: "md:col-span-6",
    dark: false,
  },
  {
    id: "02",
    label: "INFLUENCE",
    title: "Influencer Marketing",
    description: [
      "Our team identifies, vets and manages influencer collaborations",
      "aligned with your brand positioning and target demographics in",
      "the UAE market.",
    ],
    icon: "https://c.animaapp.com/mp6yzze1tTdE4q/img/component-4-1.svg",
    wrapperClassName: "md:col-span-6",
    dark: false,
  },
  {
    id: "03",
    label: "CREATE",
    title: "Content Creation",
    description: [
      "Scroll-stopping visuals, captions, short-",
      "form videos and platform optimised",
      "creatives are our specialty, designed to",
      "increase reach and engagement.",
    ],
    icon: "https://c.animaapp.com/mp6yzze1tTdE4q/img/component-4-8.svg",
    wrapperClassName: "md:col-span-4",
    dark: false,
  },
  {
    id: "04",
    label: "AMPLIFY",
    title: "Paid Social Advertising",
    description: [
      "Launch targeted campaigns across",
      "Instagram, Facebook, LinkedIn, TikTok",
      "and Snapchat to generate traffic, leads,",
      "and conversions effectively.",
    ],
    icon: "https://c.animaapp.com/mp6yzze1tTdE4q/img/component-4-5.svg",
    wrapperClassName: "md:col-span-4",
    dark: false,
  },
  {
    id: "05",
    label: "PLAN",
    title: "Content Calendar Planning",
    description: [
      "Content Calendars will ensure a steady",
      "publishing schedule aligned",
      "with campaigns, promotions,",
      "seasonal trends and brand voice for",
      "consistent publishing.",
    ],
    icon: "https://c.animaapp.com/mp6yzze1tTdE4q/img/component-4.svg",
    wrapperClassName: "md:col-span-4",
    dark: false,
  },
  {
    id: "06",
    label: "MEASURE",
    title: "Analytics & Reporting",
    description: [
      "Monthly performance reports provide clear metrics on engagement growth,",
      "reach, conversions, campaign effectiveness and campaign strategy, giving you",
      "a deeper understanding of results. At Marketing Expertise we offer full service",
      "management across several platforms for UAE Businesses.",
    ],
    icon: "https://c.animaapp.com/mp6yzze1tTdE4q/img/component-4-2.svg",
    wrapperClassName: "md:col-span-12",
    dark: true,
  },
];

export const ServiceOfferingSection = (): JSX.Element => {
  return (
    <section className="relative w-full px-4 py-[80px] sm:px-6 lg:px-10">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col items-start gap-12">
        <header className="flex w-full max-w-[760px] flex-col items-start gap-[16.83px]">
          <Badge className="h-auto rounded-[999px] border border-solid border-[#f0e2ff] bg-[#f7f1ff] px-3.5 pb-[7.69px] pt-[7.5px] text-xs font-semibold tracking-[1.68px] text-[#8a39e4] hover:bg-[#f7f1ff] [font-family:'Montserrat',Helvetica]">
            OUR SOCIAL MEDIA MANAGEMENT SERVICES INCLUDE:
          </Badge>
          <div className="w-full">
            <h2 className="[font-family:'Satoshi-Bold',Helvetica] text-[34px] font-bold leading-[38px] tracking-[-0.92px] text-[#0f0a1f] sm:text-[40px] sm:leading-[44px] lg:text-[46px] lg:leading-[49.7px]">
              Everything from creative to
              <br />
              community to conversion.
            </h2>
          </div>
        </header>
        <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-12">
          {serviceCards.map((card) => (
            <article key={card.id} className={card.wrapperClassName}>
              <Card
                className={`h-full rounded-2xl border border-solid ${card.dark ? "border-transparent bg-[linear-gradient(164deg,rgba(45,2,85,1)_0%,rgba(26,10,61,1)_100%)]" : "border-[#e8e2f4] bg-white"}`}
              >
                <CardContent className="flex h-full flex-col items-start gap-4 p-6">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-xl ${card.dark ? "bg-white/10" : "bg-[#f7f1ff]"}`}
                  >
                    <img
                      className="h-[22px] w-[22px]"
                      alt={card.title}
                      src={card.icon}
                    />
                  </div>
                  <div className="flex w-full flex-col items-start px-0 pb-[0.8px] pt-[7px]">
                    <p
                      className={`text-xs font-semibold tracking-[1.68px] [font-family:'Montserrat',Helvetica] ${card.dark ? "text-[#BD8CFF]" : "text-[#8a39e4]"}`}
                    >
                      {card.id} — {card.label}
                    </p>
                  </div>
                  <div className="flex w-full flex-col items-start">
                    <h3
                      className={`[font-family:'Satoshi-Bold',Helvetica] text-[22px] font-bold leading-[28px] tracking-[-0.44px] ${card.dark ? "text-white" : "text-[#0f0a1f]"}`}
                    >
                      {card.title}
                    </h3>
                  </div>
                  <div className="flex w-full flex-col items-start">
                    <p
                      className={`text-sm leading-[22px] [font-family:'Satoshi-Regular',Helvetica] ${card.dark ? "text-white/80" : "text-[#4a4060]"}`}
                    >
                      {card.description.map((line, index) => (
                        <span key={`${card.id}-${index}`}>
                          {line}
                          {index < card.description.length - 1 && <br />}
                        </span>
                      ))}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};