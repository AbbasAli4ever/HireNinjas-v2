import { Badge } from "../../../../../components/ui/badge";
import { Button } from "../../../../../components/ui/button";

const metrics = [
  {
    title: "Qualified",
    description: "Sales-ready prospects",
  },
  {
    title: "Lower CPL",
    description: "Continuously optimized",
  },
  {
    title: "Multi-channel",
    description: "Google · Meta · LinkedIn",
  },
];

export const LeadGenerationHeroSection = (): JSX.Element => {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="absolute inset-x-0 top-0 h-[430px] overflow-hidden">
        <div className="relative left-1/2 h-[131.77%] w-[120%] -translate-x-1/2 -translate-y-[18.82%] blur-[10px] [background:radial-gradient(50%_50%_at_20%_30%,rgba(139,58,229,0.18)_0%,rgba(139,58,229,0)_60%),radial-gradient(50%_50%_at_85%_20%,rgba(189,140,255,0.35)_0%,rgba(189,140,255,0)_60%)]" />
      </div>
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[139.69%] w-[120%] -translate-x-1/2 -translate-y-[19.95%] blur-[10px] [background:radial-gradient(50%_50%_at_20%_30%,rgba(139,58,229,0.18)_0%,rgba(139,58,229,0)_60%),radial-gradient(50%_50%_at_85%_20%,rgba(189,140,255,0.35)_0%,rgba(189,140,255,0)_60%)]" />
      </div>
      <div className="relative mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-8 px-5 py-10 sm:gap-10 sm:px-8 sm:py-14 md:px-12 md:py-16 lg:grid-cols-[minmax(0,1fr)_420px] lg:gap-8 lg:px-16 lg:py-[96px] lg:min-h-[765px] xl:grid-cols-[minmax(0,1fr)_506px] xl:gap-10 xl:px-[140px]">
        <header className="z-10 flex w-full flex-col items-start gap-5 sm:gap-[21.2px] lg:max-w-[574px]">
          <Badge className="h-auto rounded-[999px] border border-solid border-[#f0e2ff] bg-[#f7f1ff] px-3.5 pb-[7.69px] pt-[7.5px] hover:bg-[#f7f1ff]">
            <span className="mr-2 inline-block h-1.5 w-1.5 rounded-[3px] bg-[#8a39e4]" />
            <span className="[font-family:'Montserrat',Helvetica] text-xs font-semibold tracking-[1.68px] leading-[19.2px] text-[#8a39e4]">
              LEAD GENERATION
            </span>
          </Badge>
          <header className="flex w-full flex-col items-start pb-[0.6px] lg:max-w-[550px]">
            <h1
              style={{
                fontFamily: '"Satoshi", Helvetica, sans-serif',
                fontWeight: 700,
                lineHeight: "110%",
                letterSpacing: "-1.5px",
              }}
              className="text-[36px] sm:text-[44px] md:text-[50px] lg:text-[56px] lg:[letter-spacing:-2.52px]"
            >
              <span style={{ color: "#0F0A1F" }} className="inline xl:block">
                Lead Generation to{" "}
              </span>
              <span
                style={{
                  background: "linear-gradient(101deg, #8B3AE5 0%, #591F97 60%, #0F0A1F 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
                className="inline xl:block"
              >
                Drive Growth
              </span>
            </h1>
          </header>
          <p className="[font-family:'Montserrat',Helvetica] text-base font-normal leading-[1.6] text-[#3a3447] sm:text-lg sm:leading-[28.8px]">
            Targeted lead generation campaigns designed to help businesses
            across Dubai and the UAE attract qualified prospects consistently
            and turn them into real sales opportunities are crucial components
            of business expansion and sustained success.
          </p>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-4">
            <a href="/contact" className="w-full sm:w-auto">
              <Button className="h-auto w-full justify-between rounded-[999px] bg-[#8b39e5] py-1.5 pl-[22px] pr-2 hover:bg-[#7e31d7] sm:w-auto sm:justify-start">
                <span className="inline-flex flex-1 items-center justify-center [font-family:'Inter',Helvetica] text-[13.5px] font-medium leading-[normal] text-white sm:flex-none sm:justify-start sm:text-[14.5px]">
                  Book a Free Consultation
                </span>
                <span className="ml-3 grid h-9 w-9 shrink-0 place-items-center rounded-[18px] bg-white">
                  <img
                    className="h-4 w-4"
                    alt="Arrow icon"
                    src="https://c.animaapp.com/mpaw8ml1N6JcQv/img/component-2.svg"
                  />
                </span>
              </Button>
            </a>
            <Button
              variant="outline"
              className="h-12 w-full rounded-[999px] border-[#8b39e529] bg-transparent px-[22px] py-3.5 [font-family:'Inter',Helvetica] text-[13.5px] font-medium leading-[normal] text-[#8b39e5] hover:bg-[#f7f1ff] hover:text-[#8b39e5] sm:w-auto sm:text-[14.5px]"
            >
              See services
            </Button>
          </div>
          <div className="grid w-full grid-cols-3 gap-3 pt-1 sm:gap-5 sm:pt-1">
            {metrics.map((metric) => (
              <div
                key={metric.title}
                className="flex min-h-[56px] flex-col border-l-2 border-[#d9bbff] pl-3 sm:pl-4"
              >
                <h3 className="[font-family:'Satoshi-Bold',Helvetica] text-base font-bold tracking-[-0.44px] leading-[1.5] text-[#0f0a1f] sm:text-[18px] lg:text-[22px] lg:leading-[35.2px]">
                  {metric.title}
                </h3>
                <p className="[font-family:'Montserrat',Helvetica] text-[11px] font-normal leading-[1.6] text-[#6b6478] sm:text-[13px] sm:leading-[20.8px]">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>
        </header>
        <div className="relative z-10 flex items-center justify-center lg:justify-end">
          <img
            className="h-auto w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[380px] xl:max-w-[506px]"
            alt="Lead generation dashboard illustration"
            src="/figmaAssets/lead-generation.svg"
          />
        </div>
      </div>
    </section>
  );
};