import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const progressSteps = [
  { label: "BROWSE", active: false },
  { label: "CONFIGURE", active: false },
  { label: "BOOK", active: true },
  { label: "DRIVE", active: false },
];

const exteriorColors = [
  {
    bgClass: "bg-[#0f0a1f]",
    borderClass: "border-[#ffffff]",
    active: true,
  },
  {
    bgClass: "bg-red-600",
    borderClass: "border-[#ffffff4c]",
    active: false,
  },
  {
    bgClass: "bg-[#ffffff]",
    borderClass: "border-[#9999994c]",
    active: false,
  },
  {
    bgClass: "bg-blue-800",
    borderClass: "border-[#ffffff4c]",
    active: false,
  },
];

export const AutoMarketingHeroSection = (): JSX.Element => {
  return (
    <section className="relative w-full overflow-hidden bg-[#ffffff]">
      <div className="pointer-events-none absolute inset-x-0 top-[-80px] h-[430px] overflow-hidden">
        <div className="relative left-[-10%] top-[-18.82%] h-[131.77%] w-[120%] blur-[10px] [background:radial-gradient(50%_50%_at_20%_30%,rgba(139,58,229,0.18)_0%,rgba(139,58,229,0)_60%),radial-gradient(50%_50%_at_85%_20%,rgba(189,140,255,0.35)_0%,rgba(189,140,255,0)_60%)]" />
      </div>
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-[-22.91%] h-[116.79%] w-[120%] blur-[10px] [background:radial-gradient(50%_50%_at_20%_30%,rgba(139,58,229,0.18)_0%,rgba(139,58,229,0)_60%),radial-gradient(50%_50%_at_85%_20%,rgba(189,140,255,0.35)_0%,rgba(189,140,255,0)_60%)]" />
      </div>
      <div className="relative mx-auto flex w-full max-w-[1440px] justify-center px-6 py-16 sm:px-8 lg:px-[140px] lg:py-[90px]">
        <div className="flex w-full max-w-[1160px] flex-col items-start gap-10 lg:flex-row lg:items-center lg:gap-[34px]">
          <header className="flex w-full max-w-[653px] flex-col items-start gap-6">
            <div className="flex w-full flex-col items-start gap-[13px]">
              <Badge
                variant="outline"
                className="h-auto rounded-[999px] border border-solid border-[#00000029] bg-transparent px-3.5 py-[7px] hover:bg-transparent"
              >
                <span className="mr-2.5 flex h-1.5 w-1.5 items-start justify-center rounded-[3px] bg-[#6ce5b1]">
                  <span className="h-1.5 w-1.5 rounded-[3px] bg-[#ffffff01] shadow-[0px_0px_0px_4px_#6ce5b12e]" />
                </span>
                <span className="[font-family:'Inter',Helvetica] text-xs font-normal tracking-[1.68px] leading-[18px] text-black">
                  INDUSTRIES · AUTOMOTIVE
                </span>
              </Badge>
              <img
                className="h-auto w-full max-w-[540px]"
                alt="Automotive marketing solutions trusted by leading dealerships and auto brands"
                src="https://c.animaapp.com/mpi63hrl0ms5Dd/img/automotive-marketing-solutions-trusted-by-leading-dealerships-an.svg"
              />
              <p className="relative self-stretch [font-family:'Montserrat',Helvetica] text-lg font-normal leading-[28.8px] tracking-[0] text-[#3a3447]">
                UAE automotive market is one of the world's most dynamic
                markets, where dealerships and manufacturers compete for
                attention on digital research platforms, social media channels
                and showroom conversion journeys.
                <br />
                <br />
                HireNinjas' automotive marketing agency services in Dubai
                specialize in increasing showroom footfall by driving qualified
                buyer enquiries directly into showrooms; producing effective
                model launch campaigns using performance-driven digital
                strategies; increasing showroom footfall through increased
                showroom visits; creating qualified buyer enquiries quickly &
                executing high impact model launch campaigns using performance
                driven digital strategies & more.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 lg:gap-6">
              <Button className="h-auto rounded-[999px] bg-[#8b39e5] pl-[22px] pr-2 py-1.5 hover:bg-[#7f33d5]">
                <span className="inline-flex items-center gap-3">
                  <span className="inline-flex flex-col items-center pl-3.5">
                    <span className="[font-family:'Inter',Helvetica] text-center text-[14.5px] font-medium leading-normal tracking-[0] text-[#ffffff]">
                      Schedule Free Strategy Call
                    </span>
                  </span>
                  <span className="grid h-9 w-9 place-items-center rounded-[18px] bg-[#ffffff]">
                    <img
                      className="h-4 w-4"
                      alt="Arrow icon"
                      src="https://c.animaapp.com/mpi63hrl0ms5Dd/img/component-2.svg"
                    />
                  </span>
                </span>
              </Button>
              <Button
                variant="outline"
                className="h-12 rounded-[999px] border border-solid border-[#8b39e529] bg-transparent px-[22px] py-3.5 [font-family:'Inter',Helvetica] text-[14.5px] font-medium leading-normal tracking-[0] text-[#8b39e5] hover:bg-[#8b39e508] hover:text-[#8b39e5]"
              >
                See Services
              </Button>
            </div>
          </header>
          <div className="w-full flex-1">
            <Card className="relative mx-auto w-full max-w-[475px] overflow-hidden rounded-[18px] border-0 bg-transparent shadow-none">
              <CardContent className="relative p-0">
                <img
                  className="block h-auto w-full rounded-[18px]"
                  alt="Sports car booking interface"
                  src="https://c.animaapp.com/mpi63hrl0ms5Dd/img/image-27.png"
                />
                <div className="absolute right-5 top-5 inline-flex flex-col items-start rounded-lg bg-[#00000033] px-0 py-0 backdrop-blur-[2px] backdrop-brightness-[110%] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] [-webkit-backdrop-filter:blur(2px)_brightness(110%)]">
                  <div className="[font-family:'Satoshi-Bold',Helvetica] text-base font-bold leading-[22px] tracking-[-0.44px] text-[#ffffff]">
                    GR Sport Coupé
                  </div>
                  <div className="[font-family:'Montserrat',Helvetica] text-[10px] font-normal leading-[17.6px] tracking-[1.10px] text-[#bd8cff]">
                    CONFIGURE · 5.0L V8
                  </div>
                </div>
                <div className="absolute left-5 top-5 inline-flex flex-col items-start gap-2 rounded-[10px] bg-transparent shadow-[0px_5px_11px_#0000001a,0px_19px_19px_#00000017,0px_43px_26px_#0000000d,0px_77px_31px_#00000003,0px_120px_33px_transparent]">
                  <div className="[font-family:'Montserrat',Helvetica] text-[10px] font-medium leading-4 tracking-[0] text-[#ffffff]">
                    EXTERIOR
                  </div>
                  <div className="inline-flex items-center gap-1.5">
                    {exteriorColors.map((color, index) => (
                      <button
                        key={`exterior-color-${index}`}
                        type="button"
                        aria-label={`Exterior color option ${index + 1}`}
                        aria-pressed={color.active}
                        className={`h-[18px] w-[18px] rounded-[9px] border-2 border-solid ${color.bgClass} ${color.borderClass}`}
                      />
                    ))}
                  </div>
                </div>
                <div className="absolute bottom-5 left-5 flex w-[calc(100%-40px)] max-w-[433px] flex-col items-start gap-2.5 rounded-3xl bg-[#ffffff1a] p-4 backdrop-blur-[2px] backdrop-brightness-[110%] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] [-webkit-backdrop-filter:blur(2px)_brightness(110%)]">
                  <div className="flex w-full items-center justify-between">
                    <div className="inline-flex flex-col items-start">
                      <div className="[font-family:'Satoshi-Bold',Helvetica] text-sm font-bold leading-[22.4px] tracking-[0] text-[#ffffff]">
                        Test drive · Sat 11:00
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-[3px] bg-green-600" />
                      <span className="[font-family:'Montserrat',Helvetica] text-[11px] font-bold leading-[17.6px] tracking-[0] text-green-600">
                        Booking
                      </span>
                    </div>
                  </div>
                  <img
                    className="grid h-2 grid-cols-4 gap-1.5"
                    alt="Booking progress bar"
                    src="https://c.animaapp.com/mpi63hrl0ms5Dd/img/container.svg"
                  />
                  <nav
                    aria-label="Booking progress"
                    className="grid h-4 w-full grid-cols-4 gap-1.5"
                  >
                    {progressSteps.map((step) => (
                      <div
                        key={step.label}
                        className="flex h-fit w-full flex-col items-start"
                      >
                        <span
                          className={`[font-family:'Montserrat',Helvetica] text-[10px] font-semibold leading-4 tracking-[0.40px] whitespace-nowrap ${
                            step.active ? "text-[#8a39e4]" : "text-[#ffffff]"
                          }`}
                        >
                          {step.label}
                        </span>
                      </div>
                    ))}
                  </nav>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
