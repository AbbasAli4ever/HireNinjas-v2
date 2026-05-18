import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const metrics = [
  {
    title: "Speed",
    description: "Performance-first build",
    width: "max-w-[167.81px]",
  },
  {
    title: "SEO",
    description: "Search-ready architecture",
    width: "max-w-[184.23px]",
  },
  {
    title: "Scale",
    description: "Built to grow with you",
    width: "max-w-[159.47px]",
  },
];



export const HeroProductShowcaseSection = (): JSX.Element => {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[430px] overflow-hidden">
        <div className="relative left-1/2 h-[131.77%] w-[120%] -translate-x-1/2 blur-[10px] [background:radial-gradient(50%_50%_at_20%_30%,rgba(139,58,229,0.18)_0%,rgba(139,58,229,0)_60%),radial-gradient(50%_50%_at_85%_20%,rgba(189,140,255,0.35)_0%,rgba(189,140,255,0)_60%)]" />
      </div>
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-[-18.39%] h-[128.75%] w-[120%] blur-[10px] [background:radial-gradient(50%_50%_at_20%_30%,rgba(139,58,229,0.18)_0%,rgba(139,58,229,0)_60%),radial-gradient(50%_50%_at_85%_20%,rgba(189,140,255,0.35)_0%,rgba(189,140,255,0)_60%)]" />
      </div>
      <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-[100px]">
        <div className="grid min-h-[830px] items-start gap-10 py-12 lg:grid-cols-[minmax(0,564px)_minmax(0,1fr)] lg:gap-8 lg:py-[55px]">
          <header className="flex flex-col items-start gap-[21.2px]">
            <Badge className="h-auto rounded-[999px] border border-solid border-[#f0e2ff] bg-[#f7f1ff] px-3.5 pb-[7.69px] pt-[7.5px] hover:bg-[#f7f1ff]">
              <span className="mr-2 h-1.5 w-1.5 rounded-[3px] bg-[#8a39e4]" />
              <span className="[font-family:'Montserrat',Helvetica] text-xs font-semibold tracking-[1.68px] leading-[19.2px] text-[#8a39e4]">
                WEBSITE &amp; APP DEVELOPMENT
              </span>
            </Badge>
             <header className="flex w-full max-w-[450px] flex-col items-start pb-[0.6px]">
            <h1
              style={{
                fontFamily: '"Satoshi", Helvetica, sans-serif',
                fontSize: "56px",
                fontWeight: 700,
                lineHeight: "110%",
                letterSpacing: "-2.52px",
              }}
            >
              <span style={{ color: "#0F0A1F", display: "block" }}>
                Website and App Development to 
              </span>
              <span
                style={{
                  display: "block",
                  background: "linear-gradient(101deg, #8B3AE5 0%, #591F97 60%, #0F0A1F 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
               Power Modern UAE Businesses
              </span>
            </h1>
          </header>
            <p className="max-w-[667.29px] [font-family:'Montserrat',Helvetica] text-lg font-normal leading-[28.8px] text-[#3a3447]">
              High-performance websites and mobile apps designed specifically
              for modern UAE businesses to attract visitors, engage users, and
              transform traffic into tangible revenue growth.
            </p>
            <nav
              aria-label="Hero actions"
              className="flex flex-wrap items-start gap-4 sm:gap-6"
            >
              <Button className="h-auto rounded-[999px] bg-[#8b39e5] py-2 pr-2 pl-[22px] text-white hover:bg-[#7d31d1]">
                <span className="inline-flex items-center pl-3.5 [font-family:'Inter',Helvetica] text-[14.5px] font-medium leading-none text-center">
                  Book a Free Consultation
                </span>
                <span className="ml-3 grid h-9 w-9 place-items-center rounded-[18px] bg-white">
                  <img
                    className="h-4 w-4"
                    alt="Component"
                    src="/figmaAssets/arrow-purple.svg"
                  />
                </span>
              </Button>
              <Button
                variant="outline"
                className="h-12 rounded-[999px] border-[#8b39e529] bg-transparent px-[22px] py-3.5 [font-family:'Inter',Helvetica] text-[14.5px] font-medium text-[#8b39e5] hover:bg-[#f7f1ff] hover:text-[#8b39e5]"
              >
                Explore services
              </Button>
            </nav>
            <div className="flex w-full max-w-[758px] items-start gap-x-[28px] gap-y-5 pt-[18.8px]">
              {metrics.map((metric) => (
                <div
                  key={metric.title}
                  className={`border-l-2 border-[#d9bbff] pl-4 ${metric.width} min-w-[200px]`}
                >
                  <h3 className="[font-family:'Satoshi-Bold',Helvetica] text-[22px] font-bold leading-[35.2px] tracking-[-0.44px] text-[#0f0a1f]">
                    {metric.title}
                  </h3>
                  <p className="[font-family:'Montserrat',Helvetica] text-[13px] font-normal leading-[20.8px] text-[#6b6478]">
                    {metric.description}
                  </p>
                </div>
              ))}
            </div>
          </header>
          <div className="relative flex min-h-[520px] items-center justify-end lg:min-h-[680px]">
            
            <div className="relative z-10 flex w-full items-start justify-end">
              <img
                className="relative z-10 h-auto w-full max-w-[568px]"
                alt="Imockup iphone"
                src="/figmaAssets/mobile.png"
              />
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
