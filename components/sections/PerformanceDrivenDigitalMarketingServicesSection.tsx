import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const serviceCards = [
  {
    number: "02",
    title: "Paid Ads , Google & Meta",
    description: ["Performance media built around clean attribution", "and incremental lift, not vanity clicks."],
  },
  {
    number: "02",
    title: "Paid Ads , Google & Meta",
    description: ["Performance media built around clean attribution", "and incremental lift, not vanity clicks."],
  },
  {
    number: "03",
    title: "Social Media Growth",
    description: ["Editorial calendars and creator partnerships that", "move beyond posts into pipeline."],
  },
  {
    number: "04",
    title: "Content & Brand Positioning",
    description: ["Narrative, messaging and assets that turn", "category complexity into a clear story."],
  },
  {
    number: "05",
    title: "Conversion Optimization",
    description: ["Funnel diagnostics, experimentation and landing", "systems wired for measurable lift."],
  },
  {
    number: "06",
    title: "Marketing Team Augmentation",
    description: ["Senior operators embedded into your team ,", "strategy, ops or hands-on execution."],
  },
];

export const PerformanceDrivenDigitalMarketingServicesSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white py-[70px]">
      <div className="absolute inset-x-[-10%] top-[-8.33%] h-[58.34%] blur-[10px] [background:radial-gradient(50%_50%_at_20%_30%,rgba(139,58,229,0.18)_0%,rgba(139,58,229,0)_60%),radial-gradient(50%_50%_at_85%_20%,rgba(189,140,255,0.35)_0%,rgba(189,140,255,0)_60%)]" />
      <div className="relative mx-auto flex w-full max-w-[1160px] flex-col items-start gap-[50px] px-4 sm:px-6">
        <header className="flex w-full flex-col gap-8 lg:flex-row lg:items-end lg:gap-[50px]">
          <div className="flex flex-1 flex-col items-start gap-[18px]">
            <div className="flex w-full flex-col items-start">
              <Badge variant="outline" className="rounded-[999px] border border-solid border-[#14101f14] bg-[#ffffff66] px-3.5 py-[7px] [font-family:'Inter',Helvetica] text-xs font-normal tracking-[1.68px] text-[#6a6478] hover:bg-[#ffffff66]">
                OUR SERVICES
              </Badge>
            </div>
            <div className="flex w-full flex-col items-start">
              <h2 className="text-4xl leading-[44px] sm:text-5xl sm:leading-[48px]">
                <span className="font-[number:var(--h-2-font-weight)] font-h-2 text-[length:var(--h-2-font-size)] leading-[var(--h-2-line-height)] tracking-[var(--h-2-letter-spacing)] text-[#14101f] [font-style:var(--h-2-font-style)]">
                  Performance-Driven Digital Marketing{" "}
                </span>
                <span className="font-[number:var(--h-2-font-weight)] font-h-2 text-[length:var(--h-2-font-size)] leading-[var(--h-2-line-height)] tracking-[var(--h-2-letter-spacing)] text-[#3a0d8c] [font-style:var(--h-2-font-style)]">
                  Services
                </span>
              </h2>
            </div>
          </div>
          <div className="flex max-w-[681.33px] flex-1 flex-col items-start pt-0 lg:pt-[17.39px]">
            <p className="[font-family:'Inter',Helvetica] text-lg font-normal leading-[27.9px] text-[#3a3445]">
              HireNinjas provides UAE companies with modern performance marketing strategies to increase visibility, generate leads and expand revenue through modern performance marketing approaches.
            </p>
          </div>
        </header>
        <div className="grid w-full grid-cols-1 gap-px overflow-hidden rounded-3xl border border-solid border-[#14101f14] bg-[#14101f14] md:grid-cols-2 xl:grid-cols-3">
          {serviceCards.map((service, index) => (
            <Card key={`${service.number}-${index}`} className="rounded-none border-0 bg-white shadow-none">
              <CardContent className="flex min-h-[280px] flex-col items-start px-8 pb-10 pt-9">
                <p className="[font-family:'Inter',Helvetica] text-xs font-normal leading-[18px] tracking-[1.68px] text-[#6a6478]">
                  {service.number}
                </p>
                <h3 className="mt-[22px] [font-family:'Satoshi-Bold',Helvetica] text-2xl font-bold leading-[33px] tracking-[-1.00px] text-[#14101f]">
                  {service.title}
                </h3>
                <p className="mt-[17px] [font-family:'Inter',Helvetica] text-sm font-normal leading-[21.7px] text-[#3a3445]">
                  {service.description.map((line, lineIndex) => (
                    <span key={`${service.number}-line-${lineIndex}`}>
                      {line}
                      {lineIndex < service.description.length - 1 && <br />}
                    </span>
                  ))}
                </p>
                <button
                  type="button"
                  className="mt-auto inline-flex h-[38px] w-[38px] items-center justify-center rounded-[19px] border border-solid border-[#14101f14] bg-white transition-colors hover:bg-[#faf7ff]"
                  aria-label={service.title}
                >
                  <Image width={16} height={16} alt="Arrow" src="/figmaAssets/component-2.svg" className="h-4 w-4" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
