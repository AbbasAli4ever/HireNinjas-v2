import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const processSteps = [
  {
    number: "01",
    title: "Outline Your Requirements",
    description:
      "Please provide details of your role requirements, skillset and desired engagement type (full-time, part-time or project based), along with an expected start timeline and engagement type preference to our team so they may create a specialized talent match plan instantly using our structured Staff Augmentation Services framework.",
  },
  {
    number: "02",
    title: "We Source and Screen",
    description:
      "We shortlist candidates from our pre-vetted global talent network, conducting technical assessments and communication evaluations prior to presenting profiles as part of our structured screening approach for IT staff augmentation services.",
  },
  {
    number: "03",
    title: "You Interview and Select",
    description:
      "Explore 2-3 candidates carefully selected to your role requirements and choose the professional who fits in best with your team.",
  },
  {
    number: "04",
    title: "Onboard Fast",
    description:
      "We handle contracts, HR coordination, documentation and onboarding support so your selected professional can become productive from day one through our efficient staff augmentation services workflow.",
  },
  {
    number: "05",
    title: "Long Term Support",
    description:
      "HireNinjas' team remains engaged even after placement with regular check-ins, performance monitoring, and replacement support as your requirements change.",
  },
];

export const EngagementProcessSection = (): JSX.Element => {
  return (
    <section className="relative mt-14 w-full border-y border-[#ece8f3] bg-titan-white px-4 py-12 sm:mt-24 sm:px-6 sm:py-16 xl:px-[120px] lg:py-24">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-start gap-10 sm:gap-12 lg:px-4 xl:px-10">
        <header className="flex w-full max-w-[760px] flex-col items-start gap-4 sm:gap-[17px]">
          <Badge className="h-auto rounded-[999px] border border-[#f0e2ff] bg-magnolia px-3.5 pb-[7.69px] pt-[7.5px] font-montserrat-semibold-upper text-[length:var(--montserrat-semibold-upper-font-size)] font-[number:var(--montserrat-semibold-upper-font-weight)] tracking-[var(--montserrat-semibold-upper-letter-spacing)] text-purple-heart hover:bg-magnolia leading-[var(--montserrat-semibold-upper-line-height)] [font-style:var(--montserrat-semibold-upper-font-style)]">
            OUR 5-STEP STAFF AUGMENTATION PROCESS
          </Badge>
          <div className="w-full pb-[0.67px]">
            <h2 className="[font-family:'Satoshi-Bold',Helvetica] text-[28px] font-bold leading-[34px] tracking-[-0.56px] text-ebony sm:text-[34px] sm:leading-[40px] sm:tracking-[-0.92px] md:text-[40px] md:leading-[44px] lg:text-[46px] lg:leading-[49.7px]">
              Five steps from brief to productive.
            </h2>
          </div>
        </header>
        <div className="grid w-full grid-cols-1 gap-3 sm:gap-3.5">
          {processSteps.map((step) => (
            <Card
              key={step.number}
              className="rounded-2xl border border-[#ece8f3] bg-white shadow-none"
            >
              <CardContent className="grid grid-cols-[44px_minmax(0,1fr)] gap-3 p-4 sm:grid-cols-[56px_minmax(0,1fr)] sm:gap-4 sm:p-5 md:grid-cols-[80px_minmax(0,1fr)] md:gap-6 md:p-6">
                <div className="flex items-start">
                  <span className="[font-family:'Satoshi-Bold',Helvetica] text-[26px] font-bold leading-[1.6] tracking-[-0.8px] text-purple-heart sm:text-[30px] sm:tracking-[-1.08px] md:text-4xl">
                    {step.number}
                  </span>
                </div>
                <div className="flex min-w-0 flex-col items-start gap-1.5 sm:gap-2">
                  <h3 className="[font-family:'Satoshi-Bold',Helvetica] text-[17px] font-bold leading-[1.4] tracking-[-0.3px] text-ebony sm:text-[20px] sm:leading-[27.6px] sm:tracking-[-0.46px] md:text-[23px]">
                    {step.title}
                  </h3>
                  <p className="[font-family:'Montserrat',Helvetica] text-[13px] font-normal leading-[1.6] tracking-[0] text-tuna sm:text-[14px] sm:leading-6 md:text-[15px]">
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
