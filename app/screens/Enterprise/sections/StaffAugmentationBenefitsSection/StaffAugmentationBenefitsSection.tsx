import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    title: "Speed to Hire",
    description: [
      "With our staff augmentation services",
      "approach, hiring professionals within",
      "48 hours rather than 6-8 weeks",
      "through traditional recruitment",
      "channels is now possible.",
    ],
    icon: "https://c.animaapp.com/mpdt68x5t0jdIn/img/component-3-2.svg",
    cardClassName: "pt-8 pb-[80.01px] px-8",
  },
  {
    title: "Reduce Overhead",
    description: [
      "Avoid costly recruitment agency fees,",
      "visa processing delays, HR",
      "administration expenses and long-",
      "term employment commitments with",
      "our flexible IT staff augmentation",
      "services model that only charges for",
      "what is actually needed.",
    ],
    icon: "https://c.animaapp.com/mpdt68x5t0jdIn/img/component-3-6.svg",
    cardClassName: "p-8",
  },
  {
    title: "Exact Skills Match",
    description: [
      "We carefully match you with IT staff",
      "augmentation professionals based on",
      "role-specific technical capability rather",
      "than generic availability to ensure",
      "immediate productivity on day one",
      "with our precision-driven company",
      "matching system.",
    ],
    icon: "https://c.animaapp.com/mpdt68x5t0jdIn/img/component-3-1.svg",
    cardClassName: "p-8",
  },
  {
    title: "Flexible Scaling",
    description: [
      "As your business needs fluctuate, flex",
      "your workforce quickly to meet",
      "them, ideal for product launches,",
      "campaigns, seasonal demands or rapid",
      "expansion phases.",
    ],
    icon: "https://c.animaapp.com/mpdt68x5t0jdIn/img/component-3-7.svg",
    cardClassName: "p-8",
  },
  {
    title: "World-Based Talent",
    description: [
      "All professionals available globally for",
      "in-office, hybrid or remote",
      "collaboration depending on your",
      "operational setup.",
    ],
    icon: "https://c.animaapp.com/mpdt68x5t0jdIn/img/component-3-4.svg",
    cardClassName: "pt-8 pb-14 px-8",
  },
  {
    title: "Risk-Free Trial",
    description: [
      "Begin a two week evaluation period; if",
      "it doesn't feel right, we quickly replace",
      "the professional at no additional cost.",
    ],
    icon: "https://c.animaapp.com/mpdt68x5t0jdIn/img/component-3-3.svg",
    cardClassName: "pt-8 pb-20 px-8",
  },
];

export const StaffAugmentationBenefitsSection = (): JSX.Element => {
  return (
    <section className="w-full border-y border-[#ece8f3] bg-[#fafaff] px-6 py-24 md:px-10 xl:px-[120px]">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-12 xl:px-10">
        <header className="flex w-full max-w-[760px] flex-col items-start gap-[16.83px]">
          <Badge
            variant="outline"
            className="inline-flex rounded-[999px] border border-[#f0e2ff] bg-[#f7f1ff] px-3.5 pb-[7.69px] pt-[7.5px] [font-family:'Montserrat',Helvetica] text-xs font-semibold tracking-[1.68px] text-[#8a39e4] hover:bg-[#f7f1ff]"
          >
            BENEFITS OF OUR STAFF AUGMENTATION SERVICES
          </Badge>
          <div className="w-full">
            <h2 className="[font-family:'Satoshi-Bold',Helvetica] text-[36px] font-bold leading-[40px] tracking-[-0.72px] text-[#0f0a1f] sm:text-[42px] sm:leading-[46px] md:text-[46px] md:leading-[49.7px] md:tracking-[-0.92px]">
              Speed, savings,
              <br />
              precision, flexibility.
            </h2>
          </div>
        </header>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {benefits.map((benefit) => (
            <Card
              key={benefit.title}
              className={`rounded-2xl border border-[#ece8f3] bg-white shadow-none ${benefit.cardClassName}`}
            >
              <CardContent className="flex h-full flex-col items-start gap-2.5 p-0">
                <div className="grid h-12 w-12 grid-cols-[48px] grid-rows-[48px] rounded-xl bg-[#f7f1ff]">
                  <img
                    className="relative col-[1_/_2] row-[1_/_2] h-[22px] w-[22px] place-self-center"
                    alt={benefit.title}
                    src={benefit.icon}
                  />
                </div>
                <div className="flex w-full flex-col items-start px-0 pb-0 pt-2.5">
                  <h3 className="mt-[-1.00px] flex w-full items-center [font-family:'Satoshi-Bold',Helvetica] text-[23px] font-bold leading-[27.6px] tracking-[-0.46px] text-[#0f0a1f]">
                    {benefit.title}
                  </h3>
                </div>
                <div className="flex w-full flex-col items-start">
                  <p className="mt-[-1.00px] self-stretch [font-family:'Montserrat',Helvetica] text-[15px] font-normal leading-6 tracking-[0] text-[#3a3447]">
                    {benefit.description.map((line, index) => (
                      <span key={`${benefit.title}-${index}`}>
                        {line}
                        {index < benefit.description.length - 1 && <br />}
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
