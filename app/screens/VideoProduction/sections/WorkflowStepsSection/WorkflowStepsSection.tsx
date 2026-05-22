import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const workflowSteps = [
  {
    number: "01",
    title: "Discovery",
    description: "Understanding brand goals, target audience, and platforms.",
  },
  {
    number: "02",
    title: "Scripting",
    description: "Concept development and storyboarding for approval.",
  },
  {
    number: "03",
    title: "The Shoot",
    description: "Professional filming with high-end cinema equipment.",
  },
  {
    number: "04",
    title: "Editing",
    description: "Post-production, sound design, and color grading.",
  },
  {
    number: "05",
    title: "Delivery",
    description: "Optimized assets ready for every marketing channel.",
  },
];

export const WorkflowStepsSection = (): JSX.Element => {
  return (
    <section className="w-full bg-[#fafaff] border-y border-[#ece8f3]">
      <div className="mx-auto flex w-full max-w-[1480px] flex-col items-start gap-8 px-5 py-10 sm:gap-10 sm:px-8 sm:py-14 lg:gap-12 lg:px-8 lg:py-[70px] xl:px-[140px]">
        <header className="flex w-full max-w-[760px] flex-col items-start gap-3 sm:gap-[17px]">
          <Badge
            variant="outline"
            className="inline-flex h-auto items-center gap-2.5 rounded-[999px] border-[#00000029] bg-transparent px-3.5 py-[7px] hover:bg-transparent"
          >
            <span className="relative flex h-1.5 w-1.5 items-center justify-center rounded-[3px] bg-[#6ce5b1]">
              <span className="h-1.5 w-1.5 rounded-[3px] bg-[#ffffff01] shadow-[0px_0px_0px_4px_#6ce5b12e]" />
            </span>
            <span className="[font-family:'Inter',Helvetica] text-xs font-normal leading-[18px] tracking-[1.68px] text-black">
              THE PRODUCTION WORKFLOW
            </span>
          </Badge>
          <div className="w-full pb-[0.67px]">
            <h2 className="[font-family:'Satoshi-Bold',Helvetica] text-[28px] font-bold leading-[34px] tracking-[-0.56px] text-[#0f0a1f] sm:text-[34px] sm:leading-[38px] sm:tracking-[-0.68px] md:text-[40px] md:leading-[44px] lg:text-[46px] lg:leading-[49.7px] lg:tracking-[-0.92px]">
              <span className="inline xl:block">Five steps from baseline</span>{" "}
              <span className="inline xl:block">to final delivery.</span>
            </h2>
          </div>
        </header>
        <div className="flex w-full flex-col items-start gap-5">
          {workflowSteps.map((step) => (
            <Card
              key={step.number}
              className="w-full rounded-2xl border border-[#ece8f3] bg-white shadow-none"
            >
              <CardContent className="grid min-h-[110px] grid-cols-[64px_minmax(0,1fr)] items-start gap-4 p-5 sm:grid-cols-[80px_minmax(0,1fr)] sm:gap-6 sm:p-6">
                <div className="flex w-full flex-col items-start">
                  <span className="[font-family:'Satoshi-Bold',Helvetica] text-3xl font-bold leading-[1.6] tracking-[-1.08px] text-[#8a39e4] whitespace-nowrap sm:text-4xl sm:leading-[57.6px]">
                    {step.number}
                  </span>
                </div>
                <div className="flex w-full flex-col items-start gap-2">
                  <h3 className="[font-family:'Satoshi-Bold',Helvetica] text-[20px] font-bold leading-[24px] tracking-[-0.46px] text-[#0f0a1f] sm:text-[23px] sm:leading-[27.6px]">
                    {step.title}
                  </h3>
                  <p className="[font-family:'Montserrat',Helvetica] text-sm font-normal leading-6 tracking-[0] text-[#3a3447] sm:text-[15px]">
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
