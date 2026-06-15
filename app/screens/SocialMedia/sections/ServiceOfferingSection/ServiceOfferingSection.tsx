import React from "react";
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
    icon: "/social-media/chat.svg",
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
    icon: "/social-media/person.svg",
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
    icon: "/social-media/img.svg",
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
    icon: "/social-media/navi.svg",
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
    icon: "/social-media/calen.svg",
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
      <>a deeper understanding of results. <a href="/" className="hover:underline font-medium">At Marketing Expertise</a> we offer full service</>,
      "management across several platforms for UAE Businesses.",
    ],
    icon: "/social-media/stat.svg",
    wrapperClassName: "md:col-span-12",
    dark: true,
  },
];

export const ServiceOfferingSection = (): JSX.Element => {
  return (
    <section className="relative w-full px-4 py-10 sm:px-6 sm:py-14 lg:px-10 lg:py-[80px]">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col items-start gap-8 sm:gap-10 lg:gap-12">
        <header className="flex w-full flex-col items-start gap-3 sm:gap-[16.83px] lg:max-w-[760px]">
          <Badge className="h-auto rounded-[999px] border border-solid border-[#f0e2ff] bg-[#f7f1ff] px-3.5 pb-[7.69px] pt-[7.5px] text-[10px] font-semibold tracking-[1.2px] text-[#8a39e4] hover:bg-[#f7f1ff] [font-family:'Montserrat',Helvetica] sm:text-xs sm:tracking-[1.68px]">
            OUR SOCIAL MEDIA MANAGEMENT SERVICES INCLUDE:
          </Badge>
          <div className="w-full">
            <h2 className="[font-family:'Satoshi-Bold',Helvetica] text-[28px] font-bold leading-[34px] tracking-[-0.56px] text-[#0f0a1f] sm:text-[34px] sm:leading-[38px] sm:tracking-[-0.68px] md:text-[40px] md:leading-[44px] lg:text-[46px] lg:leading-[49.7px] lg:tracking-[-0.92px]">
              Everything from creative to
              <br className="hidden sm:block" />
              {" "}community to conversion.
            </h2>
          </div>
        </header>
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 md:grid-cols-12">
          {serviceCards.map((card) => (
            <article key={card.id} className={`col-span-1 sm:col-span-1 ${card.wrapperClassName}`}>
              <Card
                className={`h-full rounded-2xl border border-solid ${card.dark ? "border-transparent bg-[linear-gradient(164deg,rgba(45,2,85,1)_0%,rgba(26,10,61,1)_100%)]" : "border-[#e8e2f4] bg-white"}`}
              >
                <CardContent className="flex h-full flex-col items-start gap-3 p-5 sm:gap-4 sm:p-6">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-xl ${card.dark ? "bg-white/10" : "bg-[#f7f1ff]"}`}
                  >
                    <img
                      className="h-5 w-5 sm:h-[22px] sm:w-[22px]"
                      alt={card.title}
                      src={card.icon}
                    />
                  </div>
                  <div className="flex w-full flex-col items-start px-0 pb-[0.8px] pt-1">
                    <p
                      className={`text-[10px] font-semibold tracking-[1.2px] [font-family:'Montserrat',Helvetica] sm:text-xs sm:tracking-[1.68px] ${card.dark ? "text-[#BD8CFF]" : "text-[#8a39e4]"}`}
                    >
                      {card.id} — {card.label}
                    </p>
                  </div>
                  <div className="flex w-full flex-col items-start">
                    <h3
                      className={`[font-family:'Satoshi-Bold',Helvetica] text-[18px] font-bold leading-[24px] tracking-[-0.36px] sm:text-[20px] sm:leading-[26px] lg:text-[22px] lg:leading-[28px] lg:tracking-[-0.44px] ${card.dark ? "text-white" : "text-[#0f0a1f]"}`}
                    >
                      {card.title}
                    </h3>
                  </div>
                  <div className="flex w-full flex-col items-start">
                    <p
                      className={`text-[13px] leading-[1.6] [font-family:'Satoshi-Regular',Helvetica] sm:text-sm sm:leading-[22px] ${card.dark ? "text-white/80" : "text-[#4a4060]"}`}
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