import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const serviceCards = [
  {
    number: "02",
    title: "Paid Ads , Google & Meta",
    description: ["Performance media built around clean attribution", "and incremental lift, not vanity clicks."],
    href: "/seo-ppc",
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
    href: "/social-media",
  },
  {
    number: "04",
    title: "Content & Brand Positioning",
    description: ["Narrative, messaging and assets that turn", "category complexity into a clear story."],
    href: "/branding",
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
    href: "/staff-augmentation",
  },
];

export const PerformanceDrivenDigitalMarketingServicesSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white py-12 sm:py-16 lg:py-[70px]">
      <div className="absolute inset-x-[-10%] top-[-8.33%] h-[58.34%] blur-[10px] [background:radial-gradient(50%_50%_at_20%_30%,rgba(139,58,229,0.18)_0%,rgba(139,58,229,0)_60%),radial-gradient(50%_50%_at_85%_20%,rgba(189,140,255,0.35)_0%,rgba(189,140,255,0)_60%)]" />
      <div className="relative mx-auto flex w-full max-w-[1160px] flex-col items-start gap-8 px-4 sm:gap-10 sm:px-6 lg:gap-[50px]">
        <header className="flex w-full flex-col gap-6 sm:gap-8 lg:flex-row lg:items-end lg:gap-[50px]">
          <div className="flex flex-1 flex-col items-start gap-3 sm:gap-[18px]">
            <Badge variant="outline" className="rounded-[999px] border border-solid border-[#14101f14] bg-[#ffffff66] px-3.5 py-[7px] [font-family:'Inter',Helvetica] text-xs font-normal tracking-[1.68px] text-[#6a6478] hover:bg-[#ffffff66]">
              OUR SERVICES
            </Badge>
            <h2 className="[font-family:'Satoshi-Bold',Helvetica] text-[28px] font-black leading-[1.1] tracking-[-0.5px] text-[#14101f] sm:text-4xl sm:leading-[44px] sm:tracking-[-1px] xl:text-5xl xl:leading-[48px]">
              Performance-Driven Digital Marketing{" "}
              <span className="text-[#3a0d8c]">Services</span>
            </h2>
          </div>
          <div className="flex max-w-[681.33px] flex-1 flex-col items-start pt-0 lg:pt-[17.39px]">
            <p className="[font-family:'Inter',Helvetica] text-sm font-normal leading-6 text-[#3a3445] sm:text-base sm:leading-[27.9px] lg:text-lg">
              HireNinjas provides UAE companies with modern performance marketing strategies to increase visibility, generate leads and expand revenue through modern performance marketing approaches.
            </p>
          </div>
        </header>
        <div className="grid w-full grid-cols-1 gap-px overflow-hidden rounded-2xl border border-solid border-[#14101f14] bg-[#14101f14] sm:rounded-3xl md:grid-cols-2 xl:grid-cols-3">
          {serviceCards.map((service, index) => (
            <Card key={`${service.number}-${index}`} className="rounded-none border-0 bg-white shadow-none">
              <CardContent className="flex min-h-[220px] flex-col items-start px-5 pb-7 pt-6 sm:min-h-[280px] sm:px-8 sm:pb-10 sm:pt-9">
                <p className="[font-family:'Inter',Helvetica] text-xs font-normal leading-[18px] tracking-[1.68px] text-[#6a6478]">
                  {service.number}
                </p>
                <h3 className="mt-4 [font-family:'Satoshi-Bold',Helvetica] text-lg font-bold leading-[1.3] tracking-[-0.5px] text-[#14101f] sm:mt-[22px] sm:text-2xl sm:leading-[33px] sm:tracking-[-1px]">
                  {service.title}
                </h3>
                <p className="mt-3 [font-family:'Inter',Helvetica] text-sm font-normal leading-[21.7px] text-[#3a3445] sm:mt-[17px]">
                  {service.description.map((line, lineIndex) => (
                    <span key={`${service.number}-line-${lineIndex}`}>
                      {line}
                      {lineIndex < service.description.length - 1 && <br />}
                    </span>
                  ))}
                </p>
                {service.href ? (
                  <a
                    href={service.href}
                    className="mt-auto inline-flex h-[38px] w-[38px] items-center justify-center rounded-[19px] border border-solid border-[#14101f14] bg-white transition-colors hover:bg-[#faf7ff]"
                    aria-label={service.title}
                  >
                    <Image width={16} height={16} alt="Arrow" src="/figmaAssets/arrow.svg" className="h-4 w-4" />
                  </a>
                ) : (
                  <button
                    type="button"
                    className="mt-auto inline-flex h-[38px] w-[38px] items-center justify-center rounded-[19px] border border-solid border-[#14101f14] bg-white transition-colors hover:bg-[#faf7ff]"
                    aria-label={service.title}
                  >
                    <Image width={16} height={16} alt="Arrow" src="/figmaAssets/arrow.svg" className="h-4 w-4" />
                  </button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
