import React from "react";
import { Badge } from "../../../../../components/ui/badge";
import { Card, CardContent } from "../../../../../components/ui/card";

const topRowCards = [
  {
    step: "01 — PAID",
    title: "PPC Campaigns",
    description:
      "We specialize in creating and managing Google, Meta, and LinkedIn advertising campaigns designed to capture high-intent prospects while maintaining efficient cost-per-lead performance.",
    icon: "/lead-generation/globe.svg",
    iconHref: "/seo-ppc",
  },
  {
    step: "02 — RECOVER",
    title: "Retargeting Campaigns",
    description:
      "Reach back out to visitors who previously interacted with your website using tailored ad sequences designed to increase conversion likelihood and decrease missed opportunities.",
    icon: "/lead-generation/link.svg",
  },
];

const middleRowCards = [
  {
    step: "03 — NURTUR",
    title: "Email Marketing & Lead Nurturing",
    description:
      "Automated email workflows direct prospects down your sales funnel with structured follow-up messaging designed to increase engagement and conversion readiness.",
    icon: "/lead-generation/lines.svg",
    contentClassName: "p-7",
  },
  {
    step: "04 — CONVERT",
    title: "Google Ads Management",
    description:
      "Conversion-driven landing pages designed to increase inquiries, consultation bookings and high-quality lead submissions are the foundation of our services.",
    icon: "/lead-generation/card.svg",
    contentClassName: "pt-7 px-7 pb-[76px]",
  },
  {
    step: "05 — OPTIMIZE",
    title: "A/B Testing and Funnel Optimization",
    description:
      "Frequent split testing on creatives, messaging, landing pages and call-to-action elements helps reduce cost per lead and enhance campaign performance over time.",
    icon: "/lead-generation/map.svg",
    contentClassName: "p-7",
  },
];

const featuredCard = {
  step: "06 — TRACK",
  title: "CRM Integration & Lead Tracking",
  description: (
    <><a href="/" className="hover:underline font-medium text-[#c9b8e8]">HireNinjas</a>{" facilitates seamless CRM integration and lead tracking capabilities with all leads being automatically routed into your CRM with full attribution tracking across channels so your team has full visibility over campaign performance and ROI."}</>
  ),
  icon: "/lead-generation/cart.svg",
};

type ServiceCardProps = {
  step: string;
  title: string;
  description: React.ReactNode;
  icon: string;
  dark?: boolean;
  contentClassName?: string;
  bodyClassName?: string;
  iconHref?: string;
};

const ServiceCard = ({
  step,
  title,
  description,
  icon,
  dark = false,
  contentClassName = "p-7",
  bodyClassName,
  iconHref,
}: ServiceCardProps): JSX.Element => {
  const iconBox = (
    <div
      className={`flex h-10 w-10 items-center justify-center rounded-xl sm:h-[46px] sm:w-[46px] ${dark ? "bg-[#ffffff1a]" : "bg-[#f7f1ff]"}`}
    >
      <img className="h-5 w-5 sm:h-[22px] sm:w-[22px]" alt="" src={icon} />
    </div>
  );

  return (
    <Card
      className={
        dark
          ? "w-full rounded-2xl border-0 bg-[linear-gradient(164deg,rgba(45,2,85,1)_0%,rgba(26,10,61,1)_100%)]"
          : "w-full rounded-2xl border border-[#e9e4f0] bg-white"
      }
    >
      <CardContent
        className={`flex flex-col items-start gap-3 sm:gap-[18px] ${contentClassName}`}
      >
        {iconHref ? <a href={iconHref}>{iconBox}</a> : iconBox}
        <div className="flex w-full flex-col items-start px-0 pt-1 pb-0">
          <p
            className={`[font-family:'Montserrat',Helvetica] text-[10px] font-semibold tracking-[1.2px] uppercase sm:text-xs sm:tracking-[1.68px] ${dark ? "text-[#a78bdb]" : "text-[#8a39e4]"}`}
          >
            {step}
          </p>
        </div>
        <div className="flex w-full flex-col items-start px-0 pt-0.5 pb-0">
          <h3
            className={`[font-family:'Satoshi-Bold',Helvetica] text-[17px] font-bold leading-snug tracking-[-0.3px] sm:text-xl ${dark ? "text-white" : "text-[#0f0a1f]"}`}
          >
            {title}
          </h3>
        </div>
        <div
          className={
            dark
              ? "flex w-full max-w-[595.8px] flex-col items-start"
              : "flex w-full flex-col items-start"
          }
        >
          <p
            className={`[font-family:'Inter',Helvetica] text-[13px] font-normal leading-relaxed sm:text-sm ${dark ? "text-[#b0a8c4]" : "text-[#5a5169]"}`}
          >
            {description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export const AcquisitionServicesGridSection = (): JSX.Element => {
  return (
    <section className="relative w-full px-2 py-10 sm:py-14 md:px-8 lg:px-10 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-start gap-8 sm:gap-10 lg:gap-12">
        <header className="flex w-full flex-col items-start gap-3 sm:gap-[16.83px] lg:max-w-[760px]">
          <Badge className="h-auto rounded-[999px] border border-[#f0e2ff] bg-[#f7f1ff] px-3.5 pt-[7.5px] pb-[7.69px] text-[#8a39e4] hover:bg-[#f7f1ff]">
            <span className="[font-family:'Montserrat',Helvetica] text-[10px] font-semibold leading-[19.2px] tracking-[1.2px] sm:text-xs sm:tracking-[1.68px]">
              OUR LEAD GENERATION CAMPAIGN SERVICES INCLUDE:
            </span>
          </Badge>
          <div className="w-full">
            <h2 className="[font-family:'Satoshi-Bold',Helvetica] text-[28px] font-bold leading-[1.1] tracking-[-0.56px] text-[#0f0a1f] sm:text-[32px] sm:tracking-[-0.64px] md:text-[38px] lg:text-[46px] lg:leading-[49.7px] lg:tracking-[-0.92px]">
              A complete acquisition stack clicks to closed.
            </h2>
          </div>
        </header>
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-12">
          {topRowCards.map((card, index) => (
            <div
              key={card.step}
              className={index === 0 ? "lg:col-span-6" : "lg:col-span-6"}
            >
              <ServiceCard {...card} contentClassName="p-5 sm:p-7" />
            </div>
          ))}

          {middleRowCards.map((card) => (
            <div key={card.step} className="lg:col-span-4">
              <ServiceCard {...card} contentClassName={card.contentClassName ?? "p-5 sm:p-7"} />
            </div>
          ))}

          <div className="sm:col-span-2 lg:col-span-12">
            <ServiceCard {...featuredCard} dark contentClassName="p-5 sm:p-7" />
          </div>
        </div>
      </div>
    </section>
  );
};
