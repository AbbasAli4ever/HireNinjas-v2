import { Card, CardContent } from "@/components/ui/card";

const benefitCards = [
  {
    title: "Speed to Hire",
    icon: "https://c.animaapp.com/mpe3o2jeYfuFFD/img/component-3-4.svg",
    description: [
      "With our staff augmentation services",
      "approach, hiring professionals within",
      "48 hours rather than 6-8 weeks",
      "through traditional recruitment",
      "channels is now possible.",
    ],
    className: "pt-8 pb-[80.01px] px-8",
  },
  {
    title: "Reduce Overhead",
    icon: "https://c.animaapp.com/mpe3o2jeYfuFFD/img/component-3-1.svg",
    description: [
      "Avoid costly recruitment agency fees,",
      "visa processing delays, HR",
      "administration expenses and long-",
      "term employment commitments with",
      "our flexible IT staff augmentation",
      "services model that only charges for",
      "what is actually needed.",
    ],
    className: "p-8",
  },
  {
    title: "Exact Skills Match",
    icon: "https://c.animaapp.com/mpe3o2jeYfuFFD/img/component-3-3.svg",
    description: [
      "We carefully match you with IT staff",
      "augmentation professionals based on",
      "role-specific technical capability rather",
      "than generic availability to ensure",
      "immediate productivity on day one",
      "with our precision-driven company",
      "matching system.",
    ],
    className: "p-8",
  },
  {
    title: "Flexible Scaling",
    icon: "https://c.animaapp.com/mpe3o2jeYfuFFD/img/component-3-6.svg",
    description: [
      "As your business needs fluctuate, flex",
      "your workforce quickly to meet",
      "them, ideal for product launches,",
      "campaigns, seasonal demands or rapid",
      "expansion phases.",
    ],
    className: "p-8",
  },
  {
    title: "World-Based Talent",
    icon: "https://c.animaapp.com/mpe3o2jeYfuFFD/img/component-3-5.svg",
    description: [
      "All professionals available globally for",
      "in-office, hybrid or remote",
      "collaboration depending on your",
      "operational setup.",
    ],
    className: "pt-8 pb-14 px-8",
  },
  {
    title: "Risk-Free Trial",
    icon: "https://c.animaapp.com/mpe3o2jeYfuFFD/img/component-3-7.svg",
    description: [
      "Begin a two week evaluation period; if",
      "it doesn't feel right, we quickly replace",
      "the professional at no additional cost.",
    ],
    className: "pt-8 pb-20 px-8",
  },
];

export const ValuePropositionSection = (): JSX.Element => {
  return (
    <section className="relative mt-[96.3px] w-full border-y border-[#ece8f3] bg-titan-white px-6 py-24 md:px-10 xl:px-[140px]">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-start gap-12">
        <header className="flex w-full max-w-[760px] flex-col items-start gap-[16.83px]">
          <div className="inline-flex items-center rounded-[999px] border border-[#f0e2ff] bg-magnolia px-3.5 pb-[7.69px] pt-[7.5px]">
            <p className="font-montserrat-semibold-upper text-[length:var(--montserrat-semibold-upper-font-size)] font-[number:var(--montserrat-semibold-upper-font-weight)] leading-[var(--montserrat-semibold-upper-line-height)] tracking-[var(--montserrat-semibold-upper-letter-spacing)] text-purple-heart whitespace-nowrap [font-style:var(--montserrat-semibold-upper-font-style)]">
              BENEFITS OF HIRENINJAS STAFF AUGMENTATION SERVICES
            </p>
          </div>
          <div className="w-full">
            <h2 className="max-w-[760px] [font-family:'Satoshi-Bold',Helvetica] text-[36px] font-bold leading-[42px] tracking-[-0.72px] text-ebony sm:text-[42px] sm:leading-[46px] lg:text-[46px] lg:leading-[49.7px] lg:tracking-[-0.92px]">
              Speed, savings,
              <br />
              precision, flexibility.
            </h2>
          </div>
        </header>
        <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {benefitCards.map((card) => (
            <Card
              key={card.title}
              className={`h-full rounded-2xl border border-[#ece8f3] bg-white shadow-none ${card.className}`}
            >
              <CardContent className="flex h-full flex-col items-start gap-2.5 p-0">
                <div className="grid h-12 w-12 grid-cols-[48px] grid-rows-[48px] rounded-xl bg-magnolia">
                  <img
                    className="relative col-[1_/_2] row-[1_/_2] h-[22px] w-[22px] place-self-center"
                    alt=""
                    src={card.icon}
                  />
                </div>
                <div className="flex w-full flex-col items-start px-0 pb-0 pt-2.5">
                  <h3 className="[font-family:'Satoshi-Bold',Helvetica] text-[23px] font-bold leading-[27.6px] tracking-[-0.46px] text-ebony">
                    {card.title}
                  </h3>
                </div>
                <div className="w-full">
                  <p className="[font-family:'Montserrat',Helvetica] text-[15px] font-normal leading-6 tracking-[0] text-tuna">
                    {card.description.map((line, index) => (
                      <span key={`${card.title}-${index}`}>
                        {line}
                        {index < card.description.length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
