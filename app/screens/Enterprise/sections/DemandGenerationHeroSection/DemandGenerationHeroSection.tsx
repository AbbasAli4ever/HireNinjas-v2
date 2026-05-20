import { Button } from "@/components/ui/button";

const stats = [
  {
    title: "Senior",
    description: "Strategist-level",
  },
  {
    title: "No CMO cost",
    description: "Flexible engagement",
  },
  {
    title: "UAE-tuned",
    description: "Local market context",
  },
];

export const DemandGenerationHeroSection = (): JSX.Element => {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="absolute inset-x-0 top-0 h-[430px] overflow-hidden pointer-events-none">
        <div className="relative left-[-10%] top-[-18.82%] h-[131.77%] w-[120%] blur-[10px] [background:radial-gradient(50%_50%_at_20%_30%,rgba(139,58,229,0.18)_0%,rgba(139,58,229,0)_60%),radial-gradient(50%_50%_at_85%_20%,rgba(189,140,255,0.35)_0%,rgba(189,140,255,0)_60%)]" />
      </div>
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-10%] top-[-19.95%] h-[139.69%] w-[120%] blur-[10px] [background:radial-gradient(50%_50%_at_20%_30%,rgba(139,58,229,0.18)_0%,rgba(139,58,229,0)_60%),radial-gradient(50%_50%_at_85%_20%,rgba(189,140,255,0.35)_0%,rgba(189,140,255,0)_60%)]" />
      </div>
      <div className="relative mx-auto grid min-h-[765px] w-full max-w-[1440px] grid-cols-1 items-center gap-12 px-6 py-16 sm:px-10 lg:grid-cols-[minmax(0,1fr)_506px] lg:gap-10 lg:px-[140px] lg:py-[102px]">
        <article className="flex max-w-[560px] flex-col items-start gap-[20.9px]">
          <div className="inline-flex items-center gap-2.5 rounded-[999px] border border-solid border-[#00000029] px-3.5 py-[7px]">
            <span className="flex h-1.5 w-1.5 items-center justify-center rounded-[3px] bg-[#6ce5b1]">
              <span className="h-1.5 w-1.5 rounded-[3px] bg-[#ffffff01] shadow-[0px_0px_0px_4px_#6ce5b12e]" />
            </span>
            <span className="flex w-fit items-center whitespace-nowrap [font-family:'Inter',Helvetica] text-xs font-normal leading-[18px] tracking-[1.68px] text-black">
              B2B &amp; ENTERPRISE
            </span>
          </div>
          <header className="w-full">
            <h1 className="[font-family:'Satoshi-Bold',Helvetica] text-[42px] font-bold leading-[46px] tracking-[-1.8px] text-[#0f0a1f] sm:text-[48px] sm:leading-[54px] lg:text-[56px] lg:leading-[61.6px] lg:tracking-[-2.52px]">
              Enterprise-Grade Marketing Solutions for Complex Buying Journeys
            </h1>
          </header>
          <p className="max-w-[667.29px] [font-family:'Montserrat',Helvetica] text-base font-normal leading-[26px] tracking-[0] text-[#3a3447] sm:text-lg sm:leading-[28.8px]">
            B2B and enterprise organisations often entail complex buying
            journeys involving multiple stakeholders, lengthy evaluation
            timelines and high-value contracts. HireNinjas supports such
            organisations with structured demand generation systems designed to
            maintain consistent pipeline momentum rather than unpredictable lead
            spikes.
          </p>
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
            <Button
              type="button"
              className="h-auto rounded-[999px] bg-[#8b39e5] px-2 py-1.5 hover:bg-[#7c2fda]"
            >
              <span className="inline-flex h-12 items-center gap-3 pl-[22px]">
                <span className="inline-flex items-center justify-center pl-3.5 [font-family:'Inter',Helvetica] text-[14.5px] font-medium leading-[normal] tracking-[0] text-white">
                  Book a Free Consultation
                </span>
                <span className="grid h-9 w-9 place-items-center rounded-[18px] bg-white">
                  <img
                    className="h-4 w-4"
                    alt="Component"
                    src="https://c.animaapp.com/mpdt68x5t0jdIn/img/component-2.svg"
                  />
                </span>
              </span>
            </Button>
            <Button
              type="button"
              variant="outline"
              className="h-12 rounded-[999px] border border-solid border-[#8b39e529] bg-transparent px-[22px] py-3.5 [font-family:'Inter',Helvetica] text-[14.5px] font-medium leading-[normal] tracking-[0] text-[#8b39e5] hover:bg-[#8b39e508] hover:text-[#8b39e5]"
            >
              See Services
            </Button>
          </div>
          <div className="grid w-full grid-cols-1 gap-5 pt-1 sm:grid-cols-3 sm:gap-6">
            {stats.map((stat) => (
              <div
                key={stat.title}
                className="min-h-[56px] border-l-2 border-[#d9bbff] pl-4"
              >
                <div className="[font-family:'Satoshi-Bold',Helvetica] text-[22px] font-bold leading-[35.2px] tracking-[-0.44px] text-[#0f0a1f]">
                  {stat.title}
                </div>
                <div className="[font-family:'Montserrat',Helvetica] text-[13px] font-normal leading-[20.8px] tracking-[0] text-[#6b6478]">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </article>
        <div className="flex w-full justify-center lg:justify-end">
          <img
            className="h-auto w-full max-w-[506px] object-contain"
            alt="Enterprise demand generation chart illustration"
            src="https://c.animaapp.com/mpdt68x5t0jdIn/img/image-21.png"
          />
        </div>
      </div>
    </section>
  );
};
