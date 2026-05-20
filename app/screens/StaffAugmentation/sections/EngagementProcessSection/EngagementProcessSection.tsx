import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const processSteps = [
  {
    number: "01",
    title: "Outline Your Requirements",
    description: (
      <>
        Please provide details of your role requirements, skillset and desired
        engagement type (full-time, part-time or project based),
        <br />
        along with an expected start timeline and engagement type preference to
        our team so they may create a specialized talent
        <br />
        match plan instantly using our structured Staff Augmentation Services
        framework.
      </>
    ),
  },
  {
    number: "02",
    title: "We Source and Screen",
    description: (
      <>
        We shortlist candidates from our pre-vetted global talent network,
        conducting technical assessments and communication
        <br />
        evaluations prior to presenting profiles as part of our structured
        screening approach for IT staff augmentation services.
      </>
    ),
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
    description: (
      <>
        We handle contracts, HR coordination, documentation and onboarding
        support so your selected professional can become
        <br />
        productive from day one through our efficient staff augmentation
        services workflow.
      </>
    ),
  },
  {
    number: "05",
    title: "Long Term Support",
    description: (
      <>
        HireNinjas&#39; team remains engaged even after placement with regular
        check-ins, performance monitoring, and replacement
        <br />
        support as your requirements change.
      </>
    ),
  },
];

export const EngagementProcessSection = (): JSX.Element => {
  return (
    <section className="relative mt-24 w-full border-y border-[#ece8f3] bg-titan-white px-4 py-16 sm:px-6 lg:px-[120px] lg:py-24">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-start gap-12 lg:px-10">
        <header className="flex w-full max-w-[760px] flex-col items-start gap-[17px]">
          <Badge className="h-auto rounded-[999px] border border-[#f0e2ff] bg-magnolia px-3.5 pb-[7.69px] pt-[7.5px] font-montserrat-semibold-upper text-[length:var(--montserrat-semibold-upper-font-size)] font-[number:var(--montserrat-semibold-upper-font-weight)] tracking-[var(--montserrat-semibold-upper-letter-spacing)] text-purple-heart hover:bg-magnolia leading-[var(--montserrat-semibold-upper-line-height)] [font-style:var(--montserrat-semibold-upper-font-style)]">
            OUR 5-STEP STAFF AUGMENTATION PROCESS
          </Badge>
          <div className="w-full pb-[0.67px]">
            <h2 className="[font-family:'Satoshi-Bold',Helvetica] text-[34px] font-bold leading-[40px] tracking-[-0.92px] text-ebony sm:text-[40px] sm:leading-[44px] lg:text-[46px] lg:leading-[49.7px]">
              Five steps from brief to productive.
            </h2>
          </div>
        </header>
        <div className="grid w-full grid-cols-1 gap-3.5">
          {processSteps.map((step) => (
            <Card
              key={step.number}
              className="rounded-2xl border border-[#ece8f3] bg-white shadow-none"
            >
              <CardContent className="grid grid-cols-[56px_minmax(0,1fr)] gap-4 p-5 sm:grid-cols-[80px_minmax(0,1fr)] sm:gap-6 sm:p-6">
                <div className="flex items-start">
                  <span className="[font-family:'Satoshi-Bold',Helvetica] text-[30px] font-bold leading-[1.6] tracking-[-1.08px] text-purple-heart sm:text-4xl">
                    {step.number}
                  </span>
                </div>
                <div className="flex min-w-0 flex-col items-start gap-2">
                  <h3 className="[font-family:'Satoshi-Bold',Helvetica] text-[20px] font-bold leading-[27.6px] tracking-[-0.46px] text-ebony sm:text-[23px]">
                    {step.title}
                  </h3>
                  <p className="[font-family:'Montserrat',Helvetica] text-[14px] font-normal leading-6 tracking-[0] text-tuna sm:text-[15px]">
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
