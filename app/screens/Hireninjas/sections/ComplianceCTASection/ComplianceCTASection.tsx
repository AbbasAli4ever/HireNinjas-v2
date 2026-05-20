import { Card, CardContent } from "@/components/ui/card";

const copy = {
  eyebrow:
    "MARKETING INFRASTRUCTURE SOLUTIONS TAILORED TO GROWING HEALTHCARE PROVIDERS",
  title: ["One partner. Scalable", "patient acquisition."],
  paragraphs: [
    "Healthcare organizations typically rely on multiple vendors for websites, ads and social visibility, from paid search ads and paid social posts, all the way through to creative production and technical implementation, but HireNinjas stands as an all-inclusive growth partner who supports strategy execution creative production technical implementation to allow clinics and providers to scale patient acquisition without increasing internal workload.",
    "HireNinjas provides structured marketing infrastructure designed for long-term growth. From opening new clinic locations or offering specialist services to expanding patient acquisition campaigns across Dubai and Abu Dhabi, HireNinjas delivers structured solutions designed for success.",
  ],
};

export const ComplianceCTASection = (): JSX.Element => {
  return (
    <section className="relative w-full px-4 py-0 md:px-6 lg:px-0">
      <Card className="relative mx-auto w-full max-w-[1200px] overflow-hidden rounded-3xl border border-[#f0e2ff] bg-[linear-gradient(180deg,rgba(248,241,255,1)_0%,rgba(255,255,255,1)_100%)] shadow-none">
        <div className="pointer-events-none absolute inset-y-[-22%] right-[-6%] w-[62%] blur-[10px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(189,140,255,0.5)_0%,rgba(189,140,255,0)_70%)]" />
        <CardContent className="relative flex flex-col items-start gap-5 px-6 py-10 sm:px-8 sm:py-12 md:px-12 lg:px-20 lg:py-20">
          <div className="inline-flex max-w-full items-center gap-2.5 rounded-[999px] border border-[#00000029] px-3.5 py-[7px]">
            <span className="relative block h-1.5 w-1.5 rounded-[3px] bg-[#6ce5b1] shadow-[0px_0px_0px_4px_#6ce5b12e]" />
            <p className="max-w-full text-[10px] leading-[18px] tracking-[1.68px] text-black sm:text-xs [font-family:'Inter',Helvetica]">
              {copy.eyebrow}
            </p>
          </div>
          <header className="max-w-[460px] pt-[5.53px]">
            <h2 className="[font-family:'Satoshi-Bold',Helvetica] text-[36px] font-bold leading-[1.08] tracking-[-0.92px] text-ebony sm:text-[40px] lg:text-[46px]">
              {copy.title.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
          </header>
          <div className="max-w-[698px] space-y-5 text-[15px] leading-[1.6] text-tuna sm:text-[16px] lg:text-[17px] lg:leading-[27.2px] [font-family:'Montserrat',Helvetica]">
            {copy.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
