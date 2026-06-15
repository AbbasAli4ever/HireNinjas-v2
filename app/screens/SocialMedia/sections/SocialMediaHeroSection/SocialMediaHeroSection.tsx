import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  { value: "7+", label: "Platforms managed" },
  { value: "UAE", label: "Locally aware creative" },
  { value: "Daily", label: "Community engagement" },
];

const mediaCards = [
  {
    title: "@yourbrand",
    metrics: ["♥ 2.4k", "💬 84"],
    gradient:
      "bg-[linear-gradient(145deg,rgba(218,188,255,1)_0%,rgba(157,91,244,1)_100%)]",
    wrapperClass: "absolute left-[5.57%] top-[27px] w-[49.78%] max-w-[220px]",
    previewHeight: "h-20",
  },
  {
    title: "UAE Edit",
    metrics: ["♥ 1.1k", "↗ 312"],
    gradient:
      "bg-[linear-gradient(142deg,rgba(189,140,255,1)_0%,rgba(116,41,195,1)_100%)]",
    wrapperClass:
      "absolute left-[48.64%] top-[30.08%] w-[45.79%] max-w-[202px]",
    previewHeight: "h-20",
  },
  {
    title: "Reel · Trending",
    metrics: ["▶ 18.2k views", "+412 followers"],
    gradient:
      "bg-[linear-gradient(155deg,rgba(241,227,255,1)_0%,rgba(157,91,244,1)_100%)]",
    wrapperClass:
      "absolute bottom-[25px] left-[5.57%] w-[59.73%] max-w-[264px]",
    previewHeight: "h-16",
  },
];

export const SocialMediaHeroSection = (): JSX.Element => {
  return (
    <section className="relative w-full overflow-hidden px-5 pb-12 pt-14 sm:px-8 sm:pb-16 sm:pt-20 lg:px-4 lg:pb-20 lg:pt-24 xl:px-[80px]">
      <div className="pointer-events-none absolute left-[-10%] top-[-10%] h-[70%] w-[120%] blur-[10px] [background:radial-gradient(50%_50%_at_20%_30%,rgba(139,58,229,0.18)_0%,rgba(139,58,229,0)_60%),radial-gradient(50%_50%_at_85%_20%,rgba(189,140,255,0.35)_0%,rgba(189,140,255,0)_60%)]" />
      <div className="relative mx-auto grid max-w-[1250px] items-center gap-8 sm:gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-12 lg:px-10 xl:gap-16">
        <header className="flex w-full flex-col items-start gap-4 sm:gap-[21.2px]">
          <div className="inline-flex items-center gap-2 rounded-[999px] border border-solid border-[#f0e2ff] bg-[#f7f1ff] px-3.5 pb-[7.69px] pt-[7.5px]">
            <span className="h-1.5 w-1.5 rounded-[3px] bg-[#8a39e4]" />
            <span className="flex w-fit items-center [font-family:'Montserrat',Helvetica] text-[10px] font-semibold leading-[19.2px] tracking-[1.2px] text-[#8a39e4] sm:text-xs sm:tracking-[1.68px]">
              SOCIAL MEDIA MANAGEMENT
            </span>
          </div>
          <header className="flex w-full flex-col items-start pb-[0.6px] xl:max-w-[550px]">
            <h1
              style={{
                fontFamily: '"Satoshi", Helvetica, sans-serif',
                fontWeight: 700,
                lineHeight: "110%",
                letterSpacing: "-1.5px",
              }}
              className="text-[34px] sm:text-[42px] md:text-[50px] lg:text-[56px] lg:[letter-spacing:-2.52px]"
            >
              <span style={{ color: "#0F0A1F" }} className="inline xl:block">
                Social Media Management That{" "}
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
                Achieves Real Business Results
              </span>
            </h1>
          </header>
          <div className="flex w-full flex-col items-start xl:max-w-[667.29px]">
            <p className="self-stretch [font-family:'Montserrat',Helvetica] text-sm font-normal leading-[1.6] tracking-[0] text-[#3a3447] sm:text-base sm:leading-[25.6px] lg:text-lg lg:leading-[28.8px]">
              Strategic content, community engagement, and paid campaigns designed to grow your brand presence across Dubai and the UAE's most important social platforms
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-4">
            <a href="/contact" className="w-full sm:w-auto">
              <Button
                type="button"
                className="h-auto w-full justify-between rounded-[999px] bg-[#8b39e5] py-1.5 pl-[22px] pr-2 hover:bg-[#7d2fd1] sm:w-auto sm:justify-start sm:py-2"
              >
                <span className="inline-flex flex-1 items-center justify-center py-0 pl-3.5 pr-0 sm:flex-none sm:justify-start">
                  <span className="[font-family:'Inter',Helvetica] text-[13.5px] font-medium leading-[normal] tracking-[0] text-white sm:text-[14.5px]">
                    Book a Free Consultation
                  </span>
                </span>
                <span className="ml-3 grid h-9 w-9 shrink-0 place-items-center rounded-[18px] bg-white">
                  <img
                    className="h-4 w-4"
                    alt="Arrow icon"
                    src="https://c.animaapp.com/mp6yzze1tTdE4q/img/component-2.svg"
                  />
                </span>
              </Button>
            </a>
            <Button
              type="button"
              variant="outline"
              className="h-12 w-full rounded-[999px] border-[#8b39e529] bg-transparent px-[22px] py-3.5 [font-family:'Inter',Helvetica] text-[13.5px] font-medium leading-[normal] tracking-[0] text-[#8b39e5] hover:bg-[#f7f1ff] hover:text-[#8b39e5] sm:w-auto sm:text-[14.5px]"
            >
              Explore services
            </Button>
          </div>
          <div className="grid w-full grid-cols-3 gap-x-4 gap-y-4 pb-0 pt-2 sm:gap-x-7 sm:pt-[18.8px]">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex min-h-[56px] flex-col border-l-2 border-[#d9bbff] pl-3 sm:pl-4"
              >
                <span className="[font-family:'Satoshi-Bold',Helvetica] text-base font-bold leading-[1.5] tracking-[-0.44px] text-[#0f0a1f] sm:text-[18px] lg:text-[22px] lg:leading-[35.2px]">
                  {stat.value}
                </span>
                <span className="[font-family:'Montserrat',Helvetica] text-[11px] font-normal leading-[1.6] tracking-[0] text-[#6b6478] sm:text-[13px] sm:leading-[20.8px]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </header>
        <aside className="relative mx-auto h-[360px] w-full max-w-[360px] overflow-hidden rounded-3xl border border-solid border-[#ece8f3] sm:h-[430px] sm:max-w-[400px] lg:h-[460px] lg:max-w-[410px] xl:h-[493.68px] xl:max-w-[430px] [background:radial-gradient(50%_50%_at_0%_0%,rgba(248,241,255,1)_0%,rgba(255,255,255,1)_60%)]">
          {mediaCards.map((card) => (
            <Card
              key={card.title}
              className={`${card.wrapperClass} overflow-hidden rounded-[14px] border border-solid border-[#ece8f3] bg-white shadow-[0px_18px_40px_-22px_#140a282e]`}
            >
              <CardContent className="relative flex flex-col items-start gap-2 p-3">
                <div className="flex w-full items-center gap-2">
                  <span className="h-[22px] w-[22px] rounded-[11px] bg-[linear-gradient(135deg,rgba(157,91,244,1)_0%,rgba(89,31,151,1)_100%)]" />
                  <span className="[font-family:'Satoshi-Bold',Helvetica] text-xs font-bold leading-[19.2px] tracking-[0] text-[#0f0a1f]">
                    {card.title}
                  </span>
                </div>
                <div
                  className={`w-full rounded-lg ${card.previewHeight} ${card.gradient}`}
                />
                <div className="flex w-full flex-wrap items-start gap-x-2.5 gap-y-1">
                  {card.metrics.map((metric) => (
                    <span
                      key={metric}
                      className="[font-family:'Montserrat',Helvetica] text-[11px] font-normal leading-[17.6px] tracking-[0] text-[#6b6478]"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}

          <div className="absolute left-[59.95%] top-[76.28%] h-[63.35%] w-[69.69%] opacity-70 blur-[10px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(139,58,229,0.35)_0%,rgba(139,58,229,0)_70%)]" />
        </aside>
      </div>
    </section>
  );
};
