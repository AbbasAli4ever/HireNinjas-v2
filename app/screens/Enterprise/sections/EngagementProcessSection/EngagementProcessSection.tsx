import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    number: "01",
    title: "Outline Your Requirements",
    description: "Please provide details of your role requirements, skillset and desired engagement type (full-time, part-time or project based), along with an expected start timeline and engagement type preference to our team so they may create a specialized talent match plan instantly using our structured Staff Augmentation Services framework.",
  },
  {
    number: "02",
    title: "We Source and Screen",
    description: "We shortlist candidates from our pre-vetted global talent network, conducting technical assessments and communication evaluations prior to presenting profiles as part of our structured screening approach for IT staff augmentation services.",
  },
  {
    number: "03",
    title: "You Interview and Select",
    description: "Explore 2-3 candidates carefully selected to your role requirements and choose the professional who fits in best with your team.",
  },
  {
    number: "04",
    title: "Onboard Fast",
    description: "We handle contracts, HR coordination, documentation and onboarding support so your selected professional can become productive from day one through our efficient staff augmentation services workflow.",
  },
  {
    number: "05",
    title: "Long Term Support",
    description: "HireNinjas' team remains engaged even after placement with regular check-ins, performance monitoring, and replacement support as your requirements change.",
  },
];

export const EngagementProcessSection = (): JSX.Element => {
  return (
    <section className="w-full border-y border-[#ece8f3] bg-[#fafaff] px-4 py-12 sm:px-6 sm:py-16 xl:px-[120px] lg:py-24">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-10 sm:gap-12 lg:px-10">
        <header className="flex max-w-[760px] flex-col items-start gap-4 sm:gap-[17px]">
          <Badge className="h-auto rounded-[999px] border border-[#f0e2ff] bg-[#f7f1ff] px-3.5 pb-[7.69px] pt-[7.5px] text-[11.5px] font-semibold tracking-[1.68px] text-[#8a39e4] hover:bg-[#f7f1ff] [font-family:'Montserrat',Helvetica]">
            OUR 5-STEP STAFF AUGMENTATION PROCESS
          </Badge>
          <div className="w-full pb-[0.67px]">
            <h2 className="[font-family:'Satoshi-Bold',Helvetica] text-[26px] font-bold leading-[1.1] tracking-[-0.52px] text-[#0f0a1f] sm:text-[32px] sm:tracking-[-0.92px] md:text-[38px] lg:text-[46px] lg:leading-[49.7px]">
              Five steps from brief to productive.
            </h2>
          </div>
        </header>
        <div className="grid grid-cols-1 gap-3 sm:gap-3.5">
          {steps.map((step) => (
            <Card
              key={step.number}
              className="rounded-2xl border border-[#ece8f3] bg-white shadow-none"
            >
              <CardContent className="grid grid-cols-[44px_minmax(0,1fr)] gap-3 p-4 sm:grid-cols-[56px_minmax(0,1fr)] sm:gap-4 sm:p-5 md:grid-cols-[80px_minmax(0,1fr)] md:gap-6 md:p-6">
                <div className="flex items-start">
                  <span className="[font-family:'Satoshi-Bold',Helvetica] text-[24px] font-bold leading-[1.6] tracking-[-0.8px] text-[#8a39e4] sm:text-[28px] sm:tracking-[-1.08px] md:text-4xl md:leading-[57.6px]">
                    {step.number}
                  </span>
                </div>
                <div className="flex min-w-0 flex-col items-start gap-1.5 sm:gap-2">
                  <h3 className="[font-family:'Satoshi-Bold',Helvetica] text-[16px] font-bold leading-[1.3] tracking-[-0.3px] text-[#0f0a1f] sm:text-[18px] sm:tracking-[-0.46px] md:text-[23px] md:leading-[27.6px]">
                    {step.title}
                  </h3>
                  <p className="[font-family:'Montserrat',Helvetica] text-[13px] font-normal leading-[1.6] text-[#3a3447] sm:text-[14px] sm:leading-5 md:text-[15px] md:leading-6">
                    {step.description}
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
