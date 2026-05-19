import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const highlights = [
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

export const HeroMarketingSection = (): JSX.Element => {
  return (
    <section className="relative w-full overflow-hidden px-6 py-16 sm:px-8 lg:px-[140px] lg:pt-24 lg:pb-20">
      <div className="pointer-events-none absolute inset-x-[-10%] top-[-10%] h-[70%] w-[120%] blur-[10px] [background:radial-gradient(50%_50%_at_20%_30%,rgba(139,58,229,0.18)_0%,rgba(139,58,229,0)_60%),radial-gradient(50%_50%_at_85%_20%,rgba(189,140,255,0.35)_0%,rgba(189,140,255,0)_60%)]" />
      <div className="relative mx-auto grid w-full max-w-[1200px] items-center gap-10 lg:min-h-[621px] lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
        <div className="flex w-full flex-col items-start gap-[20.9px] self-center">
          <Badge className="h-auto rounded-[999px] border border-solid border-[#f0e2ff] bg-[#f7f1ff] px-3.5 pt-[7.5px] pb-[7.69px] text-transparent shadow-none hover:bg-[#f7f1ff]">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-[3px] bg-[#8a39e4]" />
              <span className="font-montserrat text-xs font-semibold leading-[19.2px] tracking-[1.68px] text-[#8a39e4]">
                MARKETING CONSULTATIONS
              </span>
            </span>
          </Badge>
          <header className="flex w-full flex-col items-start">
            <h1 className="mt-[-1.00px] font-satoshi self-stretch text-[40px] font-bold leading-[1.08] tracking-[-2.52px] text-[#0f0a1f] sm:text-[48px] lg:text-[56px] lg:leading-[61.6px]">
              Marketing Consultation Services to Support Smart Scaling
            </h1>
          </header>
          <div className="flex w-full max-w-[667.29px] flex-col items-start">
            <p className="mt-[-1.00px] self-stretch font-montserrat font- text-base font-normal leading-[28px] tracking-[0] text-[#3a3447] sm:text-lg lg:leading-[28.8px]">
              Senior marketing consultation services throughout Dubai and UAE
              provide businesses with expert guidance to make smarter decisions,
              enhance performance and expand faster with expert support.
            </p>
          </div>
          <nav
            aria-label="Hero actions"
            className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6"
          >
            <Button className="h-auto rounded-[999px] bg-[#8b39e5] pl-[22px] pr-2 py-2 text-white hover:bg-[#7d31d2]">
              <span className="inline-flex items-center gap-3">
                <span className="inline-flex flex-col items-center pl-3.5">
                  <span className="font-inter font-medium text-center text-[14.5px] leading-normal tracking-[0] text-white">
                    Book a Free Consultation
                  </span>
                </span>
                <span className="grid h-9 w-9 place-items-center rounded-[18px] bg-white">
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
              </span>
            </Button>
            <Button
              variant="outline"
              className="h-12 rounded-[999px] border-[#8b39e529] px-[22px] py-3.5 font-medium text-[14.5px] leading-normal tracking-[0] text-[#8b39e5] hover:bg-[#f7f1ff] hover:text-[#8b39e5]"
            >
              See Services
            </Button>
          </nav>
          <div className="grid w-full gap-6 pt-1 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((item) => (
              <Card
                key={item.title}
                className="border-0 bg-transparent shadow-none"
              >
                <CardContent className="border-l-2 border-[#d9bbff] p-0 pl-4">
                  <div className="font-satoshi text-[22px] font-bold leading-[35.2px] tracking-[-0.44px] text-[#0f0a1f]">
                    {item.title}
                  </div>
                  <p className="font-montserrat text-[13px] font-normal leading-[20.8px] tracking-[0] text-[#6b6478]">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <div className="flex w-full justify-center lg:justify-end">
          <img
            className="h-auto w-full max-w-[493px]"
            alt="Image"
            src="/figmaAssets/image_21.png"
          />
        </div>
      </div>
    </section>
  );
};
