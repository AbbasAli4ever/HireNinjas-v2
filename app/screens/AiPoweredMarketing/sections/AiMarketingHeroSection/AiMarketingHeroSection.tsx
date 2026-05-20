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
      <div className="container relative z-10 mx-auto max-w-[1200px] px-4 py-[52px] sm:px-6 lg:px-[40px] lg:py-[73px]">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_506px] lg:gap-12">
          <header className="flex max-w-[560px] flex-col items-start gap-[20.9px]">
            <Badge className="h-auto rounded-[999px] border border-solid border-[#f0e2ff] bg-[#f7f1ff] px-3.5 pb-[7.69px] pt-[7.5px] hover:bg-[#f7f1ff]">
              <span className="mr-2 h-1.5 w-1.5 rounded-[3px] bg-[#8a39e4]" />
              <span className="[font-family:'Montserrat',Helvetica] text-xs font-semibold leading-[19.2px] tracking-[1.68px] text-[#8a39e4]">
                MARKETING CONSULTATIONS
              </span>
            </Badge>
            <div className="w-full">
              <h1 className="[font-family:'Satoshi-Bold',Helvetica] text-[40px] font-bold leading-[1.05] tracking-[-1.8px] text-[#0f0a1f] sm:text-[48px] sm:tracking-[-2.1px] lg:text-[56px] lg:leading-[61.6px] lg:tracking-[-2.52px]">
                AI-Powered Marketing Designed for Smarter Campaign Performance
              </h1>
            </div>
            <p className="max-w-[667.29px] [font-family:'Montserrat',Helvetica] text-base font-normal leading-[28.8px] text-[#3a3447] sm:text-lg">
              Employing intelligent automation, predictive analytics, and growth
              systems designed by AI that scale faster with less manual effort
              across Dubai, the UAE, and global markets.
            </p>
            <nav
              aria-label="Hero actions"
              className="flex flex-wrap items-start gap-4 sm:gap-6"
            >
              <Button className="h-auto rounded-[999px] bg-[#8b39e5] py-2 pl-[22px] pr-2 text-white hover:bg-[#7d2fd2]">
                <span className="pl-3.5 [font-family:'Inter',Helvetica] text-[14.5px] font-medium leading-normal tracking-[0]">
                  Book a Free Consultation
                </span>
                <span className="ml-3 grid h-9 w-9 place-items-center rounded-[18px] bg-white">
                  <img
                    className="h-4 w-4"
                    alt="Component"
                    src="https://c.animaapp.com/mpds11xn92TSuJ/img/component-2.svg"
                  />
                </span>
              </Button>
              <Button
                variant="outline"
                className="h-auto rounded-[999px] border-[#8b39e529] bg-transparent px-[22px] py-3.5 [font-family:'Inter',Helvetica] text-[14.5px] font-medium leading-normal tracking-[0] text-[#8b39e5] hover:bg-[#f7f1ff] hover:text-[#8b39e5]"
              >
                See Services
              </Button>
            </nav>
            <dl className="grid w-full gap-6 pt-1 sm:grid-cols-3">
              {metrics.map((metric) => (
                <div
                  key={metric.title}
                  className="border-l-2 border-[#d9bbff] pl-4"
                >
                  <dt className="[font-family:'Satoshi-Bold',Helvetica] text-[22px] font-bold leading-[35.2px] tracking-[-0.44px] text-[#0f0a1f]">
                    {metric.title}
                  </dt>
                  <dd className="[font-family:'Montserrat',Helvetica] text-[13px] font-normal leading-[20.8px] text-[#6b6478]">
                    {metric.description}
                  </dd>
                </div>
              ))}
            </dl>
          </header>
          <aside className="flex justify-center lg:justify-end">
            <div className="w-full max-w-[506px]">
              <img
                className="h-auto w-full"
                alt="AI marketing analytics performance chart"
                src="https://c.animaapp.com/mpds11xn92TSuJ/img/image-21.png"
              />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};
