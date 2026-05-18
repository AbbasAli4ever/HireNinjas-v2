import { Badge } from "../../../../../components/ui/badge";
import { Card, CardContent } from "../../../../../components/ui/card";

const topRowCards = [
  {
    step: "01 — PAID",
    title: "PPC Campaigns",
    description:
      "We specialize in creating and managing Google, Meta, and LinkedIn advertising campaigns designed to capture high-intent prospects while maintaining efficient cost-per-lead performance.",
    icon: "https://c.animaapp.com/mpaw8ml1N6JcQv/img/component-3-3.svg",
  },
  {
    step: "02 — RECOVER",
    title: "Retargeting Campaigns",
    description:
      "Reach back out to visitors who previously interacted with your website using tailored ad sequences designed to increase conversion likelihood and decrease missed opportunities.",
    icon: "https://c.animaapp.com/mpaw8ml1N6JcQv/img/component-3-9.svg",
  },
];

const middleRowCards = [
  {
    step: "03 — NURTUR",
    title: "Email Marketing & Lead Nurturing",
    description:
      "Automated email workflows direct prospects down your sales funnel with structured follow-up messaging designed to increase engagement and conversion readiness.",
    icon: "https://c.animaapp.com/mpaw8ml1N6JcQv/img/component-3-1.svg",
    contentClassName: "p-7",
  },
  {
    step: "04 — CONVERT",
    title: "Google Ads Management",
    description:
      "Conversion-driven landing pages designed to increase inquiries, consultation bookings and high-quality lead submissions are the foundation of our services.",
    icon: "https://c.animaapp.com/mpaw8ml1N6JcQv/img/component-3-8.svg",
    contentClassName: "pt-7 px-7 pb-[76px]",
  },
  {
    step: "05 — OPTIMIZE",
    title: "A/B Testing and Funnel Optimization",
    description:
      "Frequent split testing on creatives, messaging, landing pages and call-to-action elements helps reduce cost per lead and enhance campaign performance over time.",
    icon: "https://c.animaapp.com/mpaw8ml1N6JcQv/img/component-3-5.svg",
    contentClassName: "p-7",
  },
];

const featuredCard = {
  step: "06 — TRACK",
  title: "CRM Integration & Lead Tracking",
  description:
    "HireNinjas facilitates seamless CRM integration and lead tracking capabilities with all leads being automatically routed into your CRM with full attribution tracking across channels so your team has full visibility over campaign performance and ROI.",
  icon: "https://c.animaapp.com/mpaw8ml1N6JcQv/img/component-3-2.svg",
};

type ServiceCardProps = {
  step: string;
  title: string;
  description: string;
  icon: string;
  dark?: boolean;
  contentClassName?: string;
  bodyClassName?: string;
};

const ServiceCard = ({
  step,
  title,
  description,
  icon,
  dark = false,
  contentClassName = "p-7",
  bodyClassName,
}: ServiceCardProps): JSX.Element => {
  return (
    <Card
      className={
        dark
          ? "w-full rounded-2xl border-0 bg-[linear-gradient(164deg,rgba(45,2,85,1)_0%,rgba(26,10,61,1)_100%)]"
          : "w-full rounded-2xl border border-[#e9e4f0] bg-white"
      }
    >
      <CardContent
        className={`flex flex-col items-start gap-[18px] ${contentClassName}`}
      >
        <div
          className={`flex h-[46px] w-[46px] items-center justify-center rounded-xl ${dark ? "bg-[#ffffff1a]" : "bg-[#f7f1ff]"}`}
        >
          <img className="h-[22px] w-[22px]" alt="" src={icon} />
        </div>
        <div className="flex w-full flex-col items-start px-0 pt-[7px] pb-[0.8px]">
          <p
            className={`[font-family:'Montserrat',Helvetica] text-xs font-semibold tracking-[1.68px] uppercase ${dark ? "text-[#a78bdb]" : "text-[#8a39e4]"}`}
          >
            {step}
          </p>
        </div>
        <div className="flex w-full flex-col items-start px-0 pt-1 pb-0">
          <h3
            className={`[font-family:'Satoshi-Bold',Helvetica] text-xl font-bold leading-snug tracking-[-0.3px] ${dark ? "text-white" : "text-[#0f0a1f]"}`}
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
            className={`[font-family:'Inter',Helvetica] text-sm font-normal leading-relaxed ${dark ? "text-[#b0a8c4]" : "text-[#5a5169]"}`}
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
    <section className="relative w-full px-4 py-16 md:px-8 lg:px-10 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-start gap-12">
        <header className="flex w-full max-w-[760px] flex-col items-start gap-[16.83px]">
          <Badge className="h-auto rounded-[999px] border border-[#f0e2ff] bg-[#f7f1ff] px-3.5 pt-[7.5px] pb-[7.69px] text-[#8a39e4] hover:bg-[#f7f1ff]">
            <span className="[font-family:'Montserrat',Helvetica] text-xs font-semibold leading-[19.2px] tracking-[1.68px] whitespace-nowrap">
              OUR LEAD GENERATION CAMPAIGN SERVICES INCLUDE:
            </span>
          </Badge>
          <div className="w-full">
            <h2 className="[font-family:'Satoshi-Bold',Helvetica] text-[32px] font-bold leading-[1.08] tracking-[-0.92px] text-[#0f0a1f] sm:text-[38px] lg:text-[46px] lg:leading-[49.7px]">
              A complete acquisition stack clicks to closed.
            </h2>
          </div>
        </header>
        <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-12">
          {topRowCards.map((card, index) => (
            <div
              key={card.step}
              className={index === 0 ? "lg:col-span-6" : "lg:col-span-6"}
            >
              <ServiceCard {...card} contentClassName="p-7" />
            </div>
          ))}

          {middleRowCards.map((card) => (
            <div key={card.step} className="lg:col-span-4">
              <ServiceCard {...card} contentClassName={card.contentClassName} />
            </div>
          ))}

          <div className="lg:col-span-12">
            <ServiceCard {...featuredCard} dark contentClassName="p-7" />
          </div>
        </div>
      </div>
    </section>
  );
};
