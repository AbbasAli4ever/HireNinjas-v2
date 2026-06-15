import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const metrics = [
  {
    title: "ROI-driven",
    description: "Not experiments",
  },
  {
    title: "24/7",
    description: "Always-on automation",
  },
  {
    title: "Global",
    description: "Dubai · UAE · Worldwide",
  },
];

const _chartRows = [
  { label: "Awareness", value: "+34%", width: "w-[72%]" },
  {
    label: "Conversion",
    value: "Optimizing",
    width: "w-[92%]",
    highlighted: true,
  },
  { label: "Conversion", value: "+12%", width: "w-[48%]" },
  { label: "Retention", value: "+57%", width: "w-[84%]" },
  { label: "CAC", value: "-22%", width: "w-[26%]" },
];

export const AiMarketingHeroSection = (): JSX.Element => {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="absolute inset-x-0 top-0 h-[430px] overflow-hidden">
        <div className="relative left-1/2 top-[-18.82%] h-[131.77%] w-[120%] -translate-x-1/2 blur-[10px] [background:radial-gradient(50%_50%_at_20%_30%,rgba(139,58,229,0.18)_0%,rgba(139,58,229,0)_60%),radial-gradient(50%_50%_at_85%_20%,rgba(189,140,255,0.35)_0%,rgba(189,140,255,0)_60%)]" />
      </div>
      <div className="pointer-events-none absolute inset-0">
        <div className="relative left-1/2 top-[-19.95%] h-[139.69%] w-[120%] -translate-x-1/2 blur-[10px] [background:radial-gradient(50%_50%_at_20%_30%,rgba(139,58,229,0.18)_0%,rgba(139,58,229,0)_60%),radial-gradient(50%_50%_at_85%_20%,rgba(189,140,255,0.35)_0%,rgba(189,140,255,0)_60%)]" />
      </div>
      <div className="container relative z-10 mx-auto max-w-[1200px] px-5 py-14 sm:px-8 sm:py-16 lg:px-8 lg:py-[73px] xl:px-[40px]">
        <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-[minmax(0,1fr)_506px] lg:gap-12">
          <header className="flex w-full flex-col items-start gap-4 sm:gap-[20.9px] lg:max-w-[560px]">
            <Badge className="h-auto rounded-[999px] border border-solid border-[#f0e2ff] bg-[#f7f1ff] px-3.5 pb-[7.69px] pt-[7.5px] hover:bg-[#f7f1ff]">
              <span className="mr-2 h-1.5 w-1.5 rounded-[3px] bg-[#8a39e4]" />
              <span className="[font-family:'Montserrat',Helvetica] text-[10px] font-semibold leading-[19.2px] tracking-[1.2px] text-[#8a39e4] sm:text-xs sm:tracking-[1.68px]">
                AI-POWERED MARKETING
              </span>
            </Badge>
            <div className="w-full">
              <h1 className="[font-family:'Satoshi-Bold',Helvetica] text-[32px] font-bold leading-[1.05] tracking-[-1.2px] text-[#0f0a1f] sm:text-[40px] sm:tracking-[-1.8px] lg:text-[50px] lg:tracking-[-2px] xl:text-[56px] xl:leading-[61.6px] xl:tracking-[-2.52px]">
                AI-Powered Marketing Designed for Smarter Campaign Performance
              </h1>
            </div>
            <p className="[font-family:'Montserrat',Helvetica] text-[14px] font-normal leading-[1.6] text-[#3a3447] sm:text-base sm:leading-[28.8px] lg:text-[17px] xl:max-w-[667.29px]">
              Employing intelligent automation, predictive analytics, and growth
              systems designed by AI that scale faster with less manual effort
              across Dubai, the UAE, and global markets.
            </p>
            <nav
              aria-label="Hero actions"
              className="flex w-full flex-col gap-3 pt-1 sm:w-auto sm:flex-row sm:items-center sm:gap-4 sm:pt-0"
            >
              <Button className="h-12 w-full justify-between rounded-[999px] bg-[#8b39e5] py-3.5 pl-[22px] pr-2 text-white hover:bg-[#7d2fd2] sm:w-auto sm:justify-start">
                <span className="inline-flex flex-1 items-center justify-center pl-3.5 sm:flex-none sm:justify-start">
                  <span className="[font-family:'Inter',Helvetica] text-[13.5px] font-medium leading-normal tracking-[0] text-white sm:text-[14.5px]">
                    Book a Free Consultation
                  </span>
                </span>
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-[18px] bg-white">
                  <img
                    className="h-4 w-4"
                    alt="Component"
                    src="/figmaAssets/arrow-purple.svg"
                  />
                </span>
              </Button>
              <a href="/ai-marketing" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  className="h-12 w-full rounded-[999px] border-[#8b39e529] bg-transparent px-[22px] py-3.5 [font-family:'Inter',Helvetica] text-[13.5px] font-medium leading-normal tracking-[0] text-[#8b39e5] hover:bg-[#f7f1ff] hover:text-[#8b39e5] sm:w-auto sm:text-[14.5px]"
                >
                  See Services
                </Button>
              </a>
            </nav>
            <dl className="grid w-full grid-cols-2 gap-4 pt-1 sm:grid-cols-3 sm:gap-6">
              {metrics.map((metric) => (
                <div
                  key={metric.title}
                  className="border-l-2 border-[#d9bbff] pl-4"
                >
                  <dt className="[font-family:'Satoshi-Bold',Helvetica] text-[18px] font-bold leading-[28px] tracking-[-0.36px] text-[#0f0a1f] sm:text-[22px] sm:leading-[35.2px] sm:tracking-[-0.44px]">
                    {metric.title}
                  </dt>
                  <dd className="[font-family:'Montserrat',Helvetica] text-[12px] font-normal leading-[19px] text-[#6b6478] sm:text-[13px] sm:leading-[20.8px]">
                    {metric.description}
                  </dd>
                </div>
              ))}
            </dl>
          </header>
          <aside className="flex justify-center lg:justify-end">
            <div className="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[460px] xl:max-w-[506px]">
              <img
                className="h-auto w-full"
                alt="AI marketing analytics performance chart"
                src="/AIMarketing/hero.svg"
              />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};
