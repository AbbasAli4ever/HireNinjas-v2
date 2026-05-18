import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    number: "01",
    title: "Discovery & Audit",
    description: [
      "We start by auditing",
      "existing marketing",
      "channels, analytics",
      "infrastructure, website",
      "performance metrics,",
      "competitor positioning",
      "signals and audience",
      "engagement signals to",
      "establish your baseline.",
    ],
    label: "STEP 1",
    cardClassName: "pt-7 pb-[50.39px] px-[22px]",
    titleClassName:
      "relative flex items-center self-stretch mt-[-1.00px] [font-family:'Satoshi-Bold',Helvetica] font-bold text-[#0f0a1f] text-[16.9px] tracking-[-0.34px] leading-[22.1px]",
    titleWrapperClassName: "pt-[7px] pb-0 px-0",
    footerClassName: "pt-px pb-[0.59px] px-0",
  },
  {
    number: "02",
    title: "Research & Insights",
    description: [
      "Our specialists perform",
      "keyword opportunity",
      "analysis, audience",
      "segmentation",
      "research, and",
      "competitor mapping in",
      "order to identify",
      "growth gaps and",
      "positioning",
      "advantages.",
    ],
    label: "STEP TWO",
    cardClassName: "px-[22px] py-7",
    titleClassName:
      "relative flex items-center self-stretch mt-[-1.00px] [font-family:'Satoshi-Bold',Helvetica] font-bold text-[#0f0a1f] text-[16.9px] tracking-[-0.34px] leading-[22.1px]",
    titleWrapperClassName: "pt-[7px] pb-0 px-0",
    footerClassName: "pt-px pb-[0.59px] px-0",
  },
  {
    number: "03",
    title: "Strategy\nDevelopment",
    description: [
      "We develop a detailed",
      "strategy encompassing",
      "channel selection,",
      "messaging",
      "frameworks, budget",
      "guidance, campaign",
      "timelines and",
      "KPIs aligned with",
      "your goals.",
    ],
    label: "STEP 3",
    cardClassName: "px-[22px] py-7",
    titleClassName:
      "relative self-stretch mt-[-1.00px] [font-family:'Satoshi-Bold',Helvetica] font-bold text-[#0f0a1f] text-[16.9px] tracking-[-0.34px] leading-[22.1px]",
    titleWrapperClassName: "pt-[7.05px] pb-0 px-0",
    footerClassName: "pt-[0.99px] pb-[0.59px] px-0",
  },
  {
    number: "04",
    title: "Execution Briefing",
    description: [
      "Your internal team or",
      "our specialists receive",
      "detailed campaign",
      "briefs covering creative",
      "direction, targeting",
      "logic, funnel structure",
      "and roll out priorities.",
    ],
    label: "STEP 4",
    cardClassName: "pt-7 pb-[95.17px] px-[22px]",
    titleClassName:
      "relative flex items-center self-stretch mt-[-1.00px] [font-family:'Satoshi-Bold',Helvetica] font-bold text-[#0f0a1f] text-[16.9px] tracking-[-0.34px] leading-[22.1px]",
    titleWrapperClassName: "pt-[7px] pb-0 px-0",
    footerClassName: "pt-[1.01px] pb-[0.59px] px-0",
  },
  {
    number: "05",
    title: "Monitor & Optimize",
    description: [
      "Through ongoing",
      "reporting dashboards,",
      "performance reviews,",
      "and monthly",
      "refinements, we",
      "continuously",
      "strengthen your",
      "strategy as new",
      "insights arise.",
    ],
    label: "STEP 5",
    cardClassName: "pt-7 pb-[50.39px] px-[22px]",
    titleClassName:
      "relative flex items-center self-stretch mt-[-1.00px] [font-family:'Satoshi-Bold',Helvetica] font-bold text-[#0f0a1f] text-[16.9px] tracking-[-0.34px] leading-[22.1px]",
    titleWrapperClassName: "pt-[7px] pb-0 px-0",
    footerClassName: "pt-px pb-[0.59px] px-0",
  },
];

export const GrowthProcessStepsSection = (): JSX.Element => {
  return (
    <section className="w-full bg-[radial-gradient(50%_50%_at_80%_0%,rgba(248,241,255,1)_0%,rgba(248,241,255,0)_60%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)] px-6 py-[70px] md:px-10 lg:px-[140px]">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-start gap-12">
        <header className="flex w-full max-w-[760px] flex-col items-start gap-[17.33px]">
          {/* <div className="text-xs tracking-[1.68px] leading-[18px] text-black [font-family:'Inter',Helvetica]">
            What I see in the image: a light section with a subtle radial
            lavender glow, a small pill label at the top left, a bold two-line
            heading underneath, and a single row of five slim white process
            cards with light borders and pale purple step numbers.
          </div> */}
          <Badge
            variant="outline"
            className="h-auto rounded-[999px] border border-solid border-[#00000029] bg-transparent px-3.5 py-[7px] text-black hover:bg-transparent"
          >
            <span className="mr-2.5 flex h-1.5 w-1.5 items-center justify-center rounded-[3px] bg-[#6ce5b1]">
              <span className="h-1.5 w-1.5 rounded-[3px] bg-[#ffffff01] shadow-[0px_0px_0px_4px_#6ce5b12e]" />
            </span>
            <span className="[font-family:'Inter',Helvetica] text-xs font-normal tracking-[1.68px] leading-[18px]">
              OUR DIGITAL STRATEGY PROCESS
            </span>
          </Badge>
          <div className="w-full">
            <h2 className="font-h-2 text-[length:var(--h-2-font-size)] font-[number:var(--h-2-font-weight)] leading-[var(--h-2-line-height)] tracking-[var(--h-2-letter-spacing)] text-[#0f0a1f] [font-style:var(--h-2-font-style)]">
              Five steps from baseline
              <br />
              to compounding growth.
            </h2>
          </div>
        </header>
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {steps.map((step) => (
            <Card
              key={step.number}
              className={`h-full rounded-2xl border border-solid border-[#ece8f3] bg-white shadow-none ${step.cardClassName}`}
            >
              <CardContent className="flex h-full flex-col items-start gap-2 p-0">
                <div className="flex w-full flex-col items-start">
                  <div className="relative mt-[-1.00px] flex items-center self-stretch [font-family:'Satoshi-Black',Helvetica] text-[38px] font-black leading-[38px] tracking-[-1.52px] text-[#d9bbff]">
                    {step.number}
                  </div>
                </div>
                <div
                  className={`flex w-full flex-col items-start ${step.titleWrapperClassName}`}
                >
                  <h3 className={step.titleClassName}>
                    {step.title.split("\n").map((line, index) => (
                      <span key={`${step.number}-title-${index}`}>
                        {line}
                        {index < step.title.split("\n").length - 1 && <br />}
                      </span>
                    ))}
                  </h3>
                </div>
                <div className="flex w-full flex-1 flex-col items-start">
                  <p className="relative mt-[-1.00px] self-stretch [font-family:'Montserrat',Helvetica] text-sm font-normal leading-[22.4px] tracking-[0] text-[#3a3447]">
                    {step.description.map((line, index) => (
                      <span key={`${step.number}-description-${index}`}>
                        {line}
                        {index < step.description.length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                </div>
                <div
                  className={`flex w-full flex-col items-start ${step.footerClassName}`}
                >
                  <div className="relative mt-[-1.00px] flex items-center self-stretch [font-family:'Montserrat',Helvetica] text-[11px] font-semibold leading-[17.6px] tracking-[1.54px] text-[#6b6478]">
                    {step.label}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
