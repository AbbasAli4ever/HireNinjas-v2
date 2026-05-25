import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    title: "Speed to Hire",
    description: "With our staff augmentation services approach, hiring professionals within 48 hours rather than 6-8 weeks through traditional recruitment channels is now possible.",
    icon: "/video/elec.svg",
    cardClassName: "p-5 sm:p-8 xl:pb-[80.01px]",
  },
  {
    title: "Reduce Overhead",
    description: "Avoid costly recruitment agency fees, visa processing delays, HR administration expenses and long-term employment commitments with our flexible IT staff augmentation services model that only charges for what is actually needed.",
    icon: "/video/p.svg",
    cardClassName: "p-5 sm:p-8",
  },
  {
    title: "Exact Skills Match",
    description: "We carefully match you with IT staff augmentation professionals based on role-specific technical capability rather than generic availability to ensure immediate productivity on day one with our precision-driven company matching system.",
    icon: "/video/point.svg",
    cardClassName: "p-5 sm:p-8",
  },
  {
    title: "Flexible Scaling",
    description: "As your business needs fluctuate, flex your workforce quickly to meet them, ideal for product launches, campaigns, seasonal demands or rapid expansion phases.",
    icon: "/video/refresh.svg",
    cardClassName: "p-5 sm:p-8",
  },
  {
    title: "World-Based Talent",
    description: "All professionals available globally for in-office, hybrid or remote collaboration depending on your operational setup.",
    icon: "/video/globe.svg",
    cardClassName: "p-5 sm:p-8 xl:pb-14",
  },
  {
    title: "Risk-Free Trial",
    description: "Begin a two week evaluation period; if it doesn't feel right, we quickly replace the professional at no additional cost.",
    icon: "/video/map.svg",
    cardClassName: "p-5 sm:p-8 xl:pb-20",
  },
];

export const StaffAugmentationBenefitsSection = (): JSX.Element => {
  return (
    <section className="w-full border-y border-[#ece8f3] bg-[#fafaff] px-4 py-12 sm:px-6 sm:py-16 md:px-10 md:py-20 xl:px-[120px] xl:py-24">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-10 sm:gap-12 xl:px-10">
        <header className="flex w-full max-w-[760px] flex-col items-start gap-4 sm:gap-[16.83px]">
          <Badge
            variant="outline"
            className="inline-flex rounded-[999px] border border-[#f0e2ff] bg-[#f7f1ff] px-3.5 pb-[7.69px] pt-[7.5px] [font-family:'Montserrat',Helvetica] text-xs font-semibold tracking-[1.68px] text-[#8a39e4] hover:bg-[#f7f1ff]"
          >
            BENEFITS OF OUR STAFF AUGMENTATION SERVICES
          </Badge>
          <div className="w-full">
            <h2 className="[font-family:'Satoshi-Bold',Helvetica] text-[28px] font-bold leading-[34px] tracking-[-0.56px] text-[#0f0a1f] sm:text-[36px] sm:leading-[40px] sm:tracking-[-0.72px] md:text-[42px] md:leading-[46px] xl:text-[46px] xl:leading-[49.7px] xl:tracking-[-0.92px]">
              Speed, savings, precision, flexibility.
            </h2>
          </div>
        </header>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3">
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
                  <h3 className="mt-[-1.00px] flex w-full items-center [font-family:'Satoshi-Bold',Helvetica] text-[19px] font-bold leading-[1.3] tracking-[-0.3px] text-[#0f0a1f] sm:text-[23px] sm:leading-[27.6px] sm:tracking-[-0.46px]">
                    {benefit.title}
                  </h3>
                </div>
                <div className="flex w-full flex-col items-start">
                  <p className="mt-[-1.00px] self-stretch [font-family:'Montserrat',Helvetica] text-[14px] font-normal leading-[1.6] tracking-[0] text-[#3a3447] sm:text-[15px] sm:leading-6">
                    {benefit.description}
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
