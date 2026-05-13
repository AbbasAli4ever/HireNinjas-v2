import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    number: "01",
    title: "Share your requirements",
    lines: [
      "Tell us your hiring or marketing",
      "goals and the kind of support your",
      "team actually needs.",
    ],
  },
  {
    number: "02",
    title: "We build a shortlist",
    lines: [
      "Our experts assemble a tailored",
      "growth strategy or shortlist of pre-",
      "screened professionals.",
    ],
  },
  {
    number: "03",
    title: "Execution & interviews",
    lines: [
      "Launch campaigns or meet",
      "candidates while we handle",
      "coordination and setup end-to-",
      "end.",
    ],
  },
  {
    number: "04",
    title: "Scale confidently",
    lines: [
      "We support onboarding,",
      "optimization and continuous",
      "improvement for sustainable",
      "growth.",
    ],
  },
];

export const FourStepProcessSection = (): JSX.Element => {
  return (
    <section className="relative w-full overflow-hidden bg-white px-4 py-[70px] sm:px-6 lg:px-[140px]">
      <div className="relative z-10 mx-auto flex w-full max-w-screen-xl flex-col items-start gap-[50px]">
        <header className="grid w-full grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-[86.4px]">
          <div className="flex w-full flex-col items-start gap-[17.26px]">
            <Badge
              variant="outline"
              className="rounded-[999px] border-[#14101f14] bg-[#ffffff66] px-3.5 py-[7px] [font-family:'Inter',Helvetica] text-xs font-normal tracking-[1.68px] text-[#6a6478] hover:bg-[#ffffff66]"
            >
              HOW IT WORKS
            </Badge>
            <h2 className="self-stretch [font-family:'Satoshi-Bold',Helvetica] text-5xl font-normal leading-[48px] text-transparent">
              <span className="font-h-2 text-[length:var(--h-2-font-size)] font-[number:var(--h-2-font-weight)] leading-[var(--h-2-line-height)] tracking-[var(--h-2-letter-spacing)] text-[#14101f] [font-style:var(--h-2-font-style)]">
                Four steps from
                <br />
              </span>
              <span className="font-h-2 text-[length:var(--h-2-font-size)] font-[number:var(--h-2-font-weight)] leading-[var(--h-2-line-height)] tracking-[var(--h-2-letter-spacing)] text-[#3a0d8c] [font-style:var(--h-2-font-style)]">
                brief to scale.
              </span>
            </h2>
          </div>
          <div className="flex w-full max-w-[681.33px] flex-col items-start pt-0 lg:pt-[17.39px]">
            <p className="[font-family:'Inter',Helvetica] text-lg font-normal leading-[27.9px] text-[#3a3445]">
              To begin working together on this step of our hiring and marketing
              solutions process, complete
            </p>
          </div>
        </header>
        <div className="grid w-full grid-cols-1 gap-[14px] sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-[32px]">
          {steps.map((step) => (
            <Card
              key={step.number}
              className="min-h-[280px] rounded-[22px] border-0 bg-[#f8f5ff] shadow-none"
            >
              <CardContent className="flex h-full flex-col items-start gap-[13px] px-[26px] pb-7 pt-7">
                <div className="[font-family:'Satoshi-Black',Helvetica] text-[56px] font-black leading-[56px] tracking-[-0.28px] text-[#3a0d8c]">
                  {step.number}
                </div>
                <h3 className="[font-family:'Satoshi-Bold',Helvetica] text-xl font-bold leading-[26.4px] tracking-[0] text-[#14101f]">
                  {step.title}
                </h3>
                <p className="[font-family:'Inter',Helvetica] text-sm font-normal leading-[21.7px] tracking-[0] text-[#3a3445]">
                  {step.lines.map((line, index) => (
                    <span key={`${step.number}-${index}`}>
                      {line}
                      {index < step.lines.length - 1 && <br />}
                    </span>
                  ))}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-[-10%] top-[-12.36%] z-0 h-[86.5%] w-[120%] blur-[10px] [background:radial-gradient(50%_50%_at_20%_30%,rgba(139,58,229,0.18)_0%,rgba(139,58,229,0)_60%),radial-gradient(50%_50%_at_85%_20%,rgba(189,140,255,0.35)_0%,rgba(189,140,255,0)_60%)]" />
    </section>
  );
};
