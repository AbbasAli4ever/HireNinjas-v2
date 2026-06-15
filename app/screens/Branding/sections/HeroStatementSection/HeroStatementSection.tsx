import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const highlights = [
  {
    title: "Strategy-led",
    description: "Positioning + design",
  },
  {
    title: "UAE-aware",
    description: "Local + global appeal",
  },
  {
    title: "Cross-channel",
    description: "Built for consistency",
  },
];

export const HeroStatementSection = (): JSX.Element => {
  return (
    <section className="relative w-full overflow-hidden px-5 pb-14 pt-14 sm:px-8 sm:pb-16 sm:pt-16 lg:px-8 lg:pb-20 lg:pt-24 xl:px-[140px]">
      <div className="pointer-events-none absolute inset-x-[-10%] top-[-10%] h-[70%] w-[120%] blur-[10px] [background:radial-gradient(50%_50%_at_20%_30%,rgba(139,58,229,0.18)_0%,rgba(139,58,229,0)_60%),radial-gradient(50%_50%_at_85%_20%,rgba(189,140,255,0.35)_0%,rgba(189,140,255,0)_60%)]" />
      <div className="relative mx-auto grid w-full max-w-[1200px] items-center gap-8 sm:gap-10 lg:min-h-[621px] lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
        <div className="flex w-full flex-col items-start gap-4 self-center sm:gap-[20.9px]">
          <Badge className="h-auto rounded-[999px] border border-solid border-[#f0e2ff] bg-[#f7f1ff] px-3.5 pt-[7.5px] pb-[7.69px] text-transparent shadow-none hover:bg-[#f7f1ff]">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-[3px] bg-[#8a39e4]" />
              <span className="font-montserrat text-[10px] font-semibold leading-[19.2px] tracking-[1.2px] text-[#8a39e4] sm:text-xs sm:tracking-[1.68px]">
                BRANDING &amp; IDENTITY
              </span>
            </span>
          </Badge>
          <header className="flex w-full flex-col items-start">
            <h1 className="mt-[-1.00px] font-satoshi self-stretch text-[32px] font-bold leading-[1.08] tracking-[-1.2px] text-[#0f0a1f] sm:text-[40px] sm:tracking-[-1.8px] lg:text-[50px] lg:tracking-[-2px] xl:text-[56px] xl:leading-[61.6px] xl:tracking-[-2.52px]">
              Branding Agency That Will Make Your Business Impossible to Ignore
            </h1>
          </header>
          <div className="flex w-full flex-col items-start xl:max-w-[667.29px]">
            <p className="mt-[-1.00px] self-stretch font-montserrat text-[14px] font-normal leading-[1.6] tracking-[0] text-[#3a3447] sm:text-base sm:leading-[28px] lg:text-[17px] lg:leading-[28.8px]">
              A strategic brand identity design for businesses across Dubai and
              UAE that builds recognition, strengthens trust, and clearly
              positions you within competitive markets.
            </p>
          </div>
          <nav
            aria-label="Hero actions"
            className="flex w-full flex-col gap-3 pt-1 sm:w-auto sm:flex-row sm:items-center sm:gap-4 sm:pt-0"
          >
            <a href="/contact" className="w-full sm:w-auto">
              <Button className="h-12 w-full justify-between rounded-[999px] bg-[#8b39e5] pl-[22px] pr-2 py-3.5 text-white hover:bg-[#7d31d2] sm:w-auto sm:justify-start">
                <span className="inline-flex flex-1 items-center justify-center pl-3.5 sm:flex-none sm:justify-start">
                  <span className="font-inter font-medium text-[13.5px] leading-normal tracking-[0] text-white sm:text-[14.5px]">
                    Book a Free Consultation
                  </span>
                </span>
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-[18px] bg-white">
                  <svg
                    className="h-4 w-4 text-[#8b39e5]"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path
                      d="M3.33594 8H12.6693"
                      stroke="currentColor"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.66406 4L12.6641 8L8.66406 12"
                      stroke="currentColor"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Button>
            </a>
            <Button
              variant="outline"
              className="h-12 w-full rounded-[999px] border-[#8b39e529] px-[22px] py-3.5 font-medium text-[13.5px] leading-normal tracking-[0] text-[#8b39e5] hover:bg-[#f7f1ff] hover:text-[#8b39e5] sm:w-auto sm:text-[14.5px]"
            >
              See Services
            </Button>
          </nav>
          <div className="grid w-full grid-cols-2 gap-4 pt-1 sm:flex sm:flex-wrap sm:gap-6 lg:grid-cols-3">
            {highlights.map((item) => (
              <Card
                key={item.title}
                className="border-0 bg-transparent shadow-none"
              >
                <CardContent className="border-l-2 border-[#d9bbff] p-0 pl-4">
                  <div className="font-satoshi text-[18px] font-bold leading-[28px] tracking-[-0.36px] text-[#0f0a1f] sm:text-[22px] sm:leading-[35.2px] sm:tracking-[-0.44px]">
                    {item.title}
                  </div>
                  <p className="font-montserrat text-[12px] font-normal leading-[19px] tracking-[0] text-[#6b6478] sm:text-[13px] sm:leading-[20.8px]">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <div className="flex w-full justify-center lg:justify-end">
          <img
            className="h-auto w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[440px] xl:max-w-[493px]"
            alt="Image"
            src="/branding/hero.svg"
          />
        </div>
      </div>
    </section>
  );
};
