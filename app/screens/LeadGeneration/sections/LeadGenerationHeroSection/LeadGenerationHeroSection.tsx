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
      <div className="relative mx-auto grid min-h-[765px] w-full max-w-[1440px] grid-cols-1 items-center gap-12 px-6 py-16 sm:px-10 lg:grid-cols-[minmax(0,1fr)_506px] lg:gap-10 lg:px-[140px] lg:py-[96px]">
        <header className="z-10 flex max-w-[574px] flex-col items-start gap-[21.2px]">
          <Badge className="h-auto rounded-[999px] border border-solid border-[#f0e2ff] bg-[#f7f1ff] px-3.5 pb-[7.69px] pt-[7.5px] hover:bg-[#f7f1ff]">
            <span className="mr-2 inline-block h-1.5 w-1.5 rounded-[3px] bg-[#8a39e4]" />
            <span className="[font-family:'Montserrat',Helvetica] text-xs font-semibold tracking-[1.68px] leading-[19.2px] text-[#8a39e4]">
              LEAD GENERATION
            </span>
          </Badge>
           <header className="flex w-full max-w-[550px] flex-col items-start pb-[0.6px]">
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
                Lead Generation to
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
                Drive Growth
              </span>
            </h1>
          </header>
          <p className="[font-family:'Montserrat',Helvetica] text-lg font-normal leading-[28.8px] text-[#3a3447]">
            Targeted lead generation campaigns designed to help businesses
            across Dubai and the UAE attract qualified prospects consistently
            and turn them into real sales opportunities are crucial components
            of business expansion and sustained success.
          </p>
          <div className="flex flex-wrap items-start gap-4 sm:gap-6">
            <Button className="h-auto rounded-[999px] bg-[#8b39e5] py-1.5 pl-[22px] pr-2 hover:bg-[#7e31d7]">
              <span className="inline-flex items-center pl-3.5 [font-family:'Inter',Helvetica] text-[14.5px] font-medium leading-[normal] text-white">
                Book a Free Consultation
              </span>
              <span className="ml-3 grid h-9 w-9 place-items-center rounded-[18px] bg-white">
                <img
                  className="h-4 w-4"
                  alt="Arrow icon"
                  src="https://c.animaapp.com/mpaw8ml1N6JcQv/img/component-2.svg"
                />
              </span>
            </Button>
            <Button
              variant="outline"
              className="h-12 rounded-[999px] border-[#8b39e529] bg-transparent px-[22px] py-3.5 [font-family:'Inter',Helvetica] text-[14.5px] font-medium leading-[normal] text-[#8b39e5] hover:bg-[#f7f1ff] hover:text-[#8b39e5]"
            >
              See services
            </Button>
          </div>
          <div className="grid w-full grid-cols-1 gap-5 pt-1 sm:grid-cols-3 sm:gap-6">
            {metrics.map((metric) => (
              <div
                key={metric.title}
                className="flex min-h-[56px] flex-col border-l-2 border-[#d9bbff] pl-4"
              >
                <h3 className="[font-family:'Satoshi-Bold',Helvetica] text-[22px] font-bold tracking-[-0.44px] leading-[35.2px] text-[#0f0a1f]">
                  {metric.title}
                </h3>
                <p className="[font-family:'Montserrat',Helvetica] text-[13px] font-normal leading-[20.8px] text-[#6b6478]">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>
        </header>
        <div className="relative z-10 flex items-center justify-center lg:justify-end">
          <img
            className="h-auto w-full max-w-[506px]"
            alt="Lead generation dashboard illustration"
            src="/figmaAssets/lead-generation.svg"
          />
        </div>
      </div>
    </section>
  );
};