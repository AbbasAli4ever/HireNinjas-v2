import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  { title: "Senior", description: "Strategist-level" },
  { title: "No CMO cost", description: "Flexible engagement" },
  { title: "UAE-tuned", description: "Local market context" },
];

export const DemandGenerationHeroSection = (): JSX.Element => {
  return (
    <section className="relative w-full overflow-hidden px-5 pb-14 pt-14 sm:px-8 sm:pb-16 sm:pt-16 lg:px-8 lg:pb-20 lg:pt-24 xl:px-[140px]">
      <div className="pointer-events-none absolute inset-x-[-10%] top-[-10%] h-[70%] w-[120%] blur-[10px] [background:radial-gradient(50%_50%_at_20%_30%,rgba(139,58,229,0.18)_0%,rgba(139,58,229,0)_60%),radial-gradient(50%_50%_at_85%_20%,rgba(189,140,255,0.35)_0%,rgba(189,140,255,0)_60%)]" />
      <div className="relative mx-auto grid w-full max-w-[1200px] items-center gap-8 sm:gap-10 lg:min-h-[621px] lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
        <div className="flex w-full flex-col items-start gap-4 self-center sm:gap-[20.9px]">
          <Badge className="h-auto rounded-[999px] border border-solid border-[#00000029] bg-transparent px-3.5 py-[7px] shadow-none hover:bg-transparent">
            <span className="flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 rounded-[3px] bg-[#6ce5b1] shadow-[0px_0px_0px_4px_#6ce5b12e]" />
              <span className="[font-family:'Inter',Helvetica] text-xs font-normal leading-[18px] tracking-[1.68px] text-black">
                B2B &amp; ENTERPRISE
              </span>
            </span>
          </Badge>
          <header className="flex w-full flex-col items-start">
            <h1
              className="self-stretch text-[32px] font-bold leading-[1.08] tracking-[-1.2px] text-[#0f0a1f] sm:text-[40px] sm:tracking-[-1.8px] lg:text-[50px] lg:tracking-[-2px] xl:text-[56px] xl:leading-[61.6px] xl:tracking-[-2.52px]"
              style={{ fontFamily: '"Satoshi", Helvetica, sans-serif', fontWeight: 700 }}
            >
              Enterprise-Grade Marketing Solutions for Complex Buying Journeys
            </h1>
          </header>
          <div className="flex w-full flex-col items-start xl:max-w-[667px]">
            <p className="self-stretch [font-family:'Montserrat',Helvetica] text-[14px] font-normal leading-[1.6] tracking-[0] text-[#3a3447] sm:text-base sm:leading-[28px] lg:text-[17px] lg:leading-[28.8px]">
              B2B and enterprise organisations often entail complex buying
              journeys involving multiple stakeholders, lengthy evaluation
              timelines and high-value contracts. HireNinjas supports such
              organisations with structured demand generation systems designed to
              maintain consistent pipeline momentum rather than unpredictable lead
              spikes.
            </p>
          </div>
          <nav
            aria-label="Hero actions"
            className="flex w-full flex-col gap-3 pt-1 sm:w-auto sm:flex-row sm:items-center sm:gap-4 sm:pt-0"
          >
            <Button
              type="button"
              className="h-12 w-full justify-between rounded-[999px] bg-[#8b39e5] py-3.5 pl-[22px] pr-2 hover:bg-[#7c2fda] sm:w-auto sm:justify-start"
            >
              <span className="inline-flex flex-1 items-center justify-center pl-3.5 sm:flex-none sm:justify-start">
                <span className="[font-family:'Inter',Helvetica] text-[13.5px] font-medium leading-none tracking-[0] text-white sm:text-[14.5px]">
                  Book a Free Consultation
                </span>
              </span>
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-[18px] bg-white">
                <img className="h-4 w-4" alt="" src="/figmaAssets/arrow-purple.svg" />
              </span>
            </Button>
            <Button
              type="button"
              variant="outline"
              className="h-12 w-full rounded-[999px] border border-solid border-[#8b39e529] bg-transparent px-[22px] py-3.5 [font-family:'Inter',Helvetica] text-[13.5px] font-medium leading-none tracking-[0] text-[#8b39e5] hover:bg-[#f7f1ff] hover:text-[#8b39e5] sm:w-auto sm:text-[14.5px]"
            >
              See Services
            </Button>
          </nav>
          <div className="grid w-full grid-cols-2 gap-4 pt-1 sm:flex sm:flex-wrap sm:gap-6 lg:grid-cols-3">
            {stats.map((stat) => (
              <Card key={stat.title} className="border-0 bg-transparent shadow-none">
                <CardContent className="border-l-2 border-[#d9bbff] p-0 pl-4">
                  <div className="[font-family:'Satoshi-Bold',Helvetica] text-[18px] font-bold leading-[28px] tracking-[-0.36px] text-[#0f0a1f] sm:text-[22px] sm:leading-[35.2px] sm:tracking-[-0.44px]">
                    {stat.title}
                  </div>
                  <p className="[font-family:'Montserrat',Helvetica] text-[12px] font-normal leading-[19px] tracking-[0] text-[#6b6478] sm:text-[13px] sm:leading-[20.8px]">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <div className="flex w-full justify-center lg:justify-end">
          <img
            className="h-auto w-full max-w-[340px] object-contain sm:max-w-[420px] lg:max-w-[440px] xl:max-w-[506px]"
            alt="Enterprise demand generation chart illustration"
            src="/enterprise/hero.svg"
          />
        </div>
      </div>
    </section>
  );
};
