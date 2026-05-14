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

const mockupDots = [0, 1, 2];

const mockupGrid = [
  {
    className:
      "col-span-2 h-[42.43px] rounded-[2.83px] bg-[linear-gradient(164deg,rgba(241,227,255,1)_0%,rgba(218,188,255,1)_100%)]",
  },
  {
    className: "h-[5.66px] rounded-[2.83px] bg-[#f0e2ff]",
  },
  {
    className: "h-[5.66px] rounded-[2.83px] bg-[#f0e2ff]",
  },
  {
    className: "h-[5.66px] rounded-[2.83px] bg-[#f0e2ff]",
  },
  {
    className:
      "h-[21.21px] w-[63.64px] justify-self-start rounded-[706.43px] border-[0.71px] border-solid border-transparent bg-[#8a39e4]",
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
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-[140px]">
        <div className="grid min-h-[830px] items-center gap-10 py-12 lg:grid-cols-[minmax(0,564px)_minmax(0,1fr)] lg:gap-8 lg:py-[75px]">
          <header className="flex flex-col items-start gap-[21.2px]">
            <Badge className="h-auto rounded-[999px] border border-solid border-[#f0e2ff] bg-[#f7f1ff] px-3.5 pb-[7.69px] pt-[7.5px] hover:bg-[#f7f1ff]">
              <span className="mr-2 h-1.5 w-1.5 rounded-[3px] bg-[#8a39e4]" />
              <span className="[font-family:'Montserrat',Helvetica] text-xs font-semibold tracking-[1.68px] leading-[19.2px] text-[#8a39e4]">
                WEBSITE &amp; APP DEVELOPMENT
              </span>
            </Badge>
            <div className="flex w-full flex-col items-start self-stretch pb-[0.6px]">
              <img
                className="h-auto w-full max-w-[564px]"
                alt="Website and app"
                src="https://c.animaapp.com/mp5dxvs5vBeNIx/img/website-and-app-development-to-power-modern-uae-businesses.svg"
              />
            </div>
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
                    src="https://c.animaapp.com/mp5dxvs5vBeNIx/img/component-2.svg"
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
            <div className="flex w-full max-w-[658px] flex-wrap items-start gap-x-[28px] gap-y-5 pt-[18.8px]">
              {metrics.map((metric) => (
                <div
                  key={metric.title}
                  className={`border-l-2 border-[#d9bbff] pl-4 ${metric.width} min-w-[150px]`}
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
          <div className="relative flex min-h-[520px] items-center justify-center lg:min-h-[680px]">
            <div className="pointer-events-none absolute right-0 top-1/2 h-[668px] w-full max-w-[607px] -translate-y-1/2 overflow-hidden rounded-3xl border border-solid border-[#ece8f3] [background:radial-gradient(50%_50%_at_0%_0%,rgba(248,241,255,1)_0%,rgba(255,255,255,1)_60%)]">
              <div className="relative left-[59.95%] top-[76.28%] h-[63.35%] w-[69.69%] blur-[10px] opacity-70 [background:radial-gradient(50%_50%_at_50%_50%,rgba(139,58,229,0.35)_0%,rgba(139,58,229,0)_70%)]" />
            </div>
            <div className="relative z-10 flex w-full items-center justify-center">
              <img
                className="relative z-10 h-auto w-full max-w-[568px]"
                alt="Imockup iphone"
                src="https://c.animaapp.com/mp5dxvs5vBeNIx/img/imockup---iphone-15-pro-max.png"
              />
              <img
                className="absolute bottom-[88px] left-[14%] z-0 h-auto w-[52%] max-w-[346px]"
                alt="Rectangle"
                src="https://c.animaapp.com/mp5dxvs5vBeNIx/img/rectangle-3.svg"
              />
              <Card className="absolute bottom-[82px] left-[24%] z-20 w-full max-w-[276px] rotate-[0.91deg] overflow-hidden rounded-[13.48px] border-0 bg-neutral-10 p-0 shadow-[6.87px_6.87px_0px_#3c3c3c,4.58px_4.58px_0px_#797979,2.29px_2.29px_0px_#b5b5b5]">
                <CardContent className="p-0">
                  <div className="flex items-center gap-[4.24px] self-stretch border-b-[0.71px] border-[#f3f0f9] bg-[#fafaff] px-[8.49px] py-[7.07px]">
                    {mockupDots.map((dot) => (
                      <span
                        key={dot}
                        className="h-[7.07px] w-[7.07px] rounded-[3.54px] bg-[#ece8f3]"
                      />
                    ))}

                    <div className="flex min-w-0 flex-1 flex-col items-start pl-[5.66px]">
                      <div className="w-full rounded-[706.43px] border-[0.71px] border-solid border-[#ece8f3] bg-white px-[7.07px] py-[2.83px]">
                        <div className="[font-family:'Montserrat',Helvetica] text-[7.8px] font-normal leading-[12.4px] text-[#6b6478]">
                          hireninjas.ae/your-brand
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid h-[108.9px] grid-cols-2 grid-rows-[42.43px_5.66px_21.21px] gap-[8.49px] p-[11.31px]">
                    {mockupGrid.map((item, index) => (
                      <div key={index} className={item.className} />
                    ))}
                  </div>
                </CardContent>
              </Card>
              <div className="absolute left-[6%] top-[78px] z-20 inline-flex items-center gap-2.5 rounded-[27.26px] bg-[#5fa215] px-[17.26px] py-2 shadow-[-1px_2px_5px_#0000000d,-6px_6px_9px_#0000000a,-13px_14px_12px_#00000008,-23px_25px_14px_#00000003,-36px_40px_15px_transparent]">
                <div className="absolute left-0 top-0 h-full w-[calc(100%_+_1px)] rounded-[17.26px] bg-[#ffffff01] shadow-[0px_25.89px_57.54px_-31.65px_#140a282e]" />
                <img
                  className="relative h-[21px] w-[21px]"
                  alt="Arrow up"
                  src="https://c.animaapp.com/mp5dxvs5vBeNIx/img/arrow-up.svg"
                />
                <span className="relative mt-[-1.44px] [font-family:'Inter',Helvetica] text-base font-medium leading-[25.3px] tracking-[-1px] text-white">
                  247.23%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
