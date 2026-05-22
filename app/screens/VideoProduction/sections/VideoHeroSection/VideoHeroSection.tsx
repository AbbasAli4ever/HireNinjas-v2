import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const talentCards = [
  {
    title: "Front End Developer",
    availability: "Available · 48h",
    avatar: "/video/av.svg",
  },
  {
    title: "PPC Manager",
    availability: "Available · 72h",
    avatar: "/video/av1.svg",
  },
  {
    title: "UI/UX Designer",
    availability: "Available · 24h",
    avatar: "/video/av2.svg",
  },
  {
    title: "Full Stack Dev",
    availability: "Available · 48h",
    avatar: "/video/av3.svg",
  },
  {
    title: "SEO Specialist",
    availability: "Available · 24h",
    avatar: "/video/av4.svg",
  },
  {
    title: "Business Analyst",
    availability: "Available · 72h",
    avatar: "/video/av5.svg",
  },
];

const stats = [
  {
    value: "4K / 8K",
    label: "Production Quality",
  },
  {
    value: "MENA",
    label: "Regional Reach",
  },
];

export const VideoHeroSection = (): JSX.Element => {
  return (
    <section className="relative w-full overflow-hidden px-5 pb-14 pt-14 sm:px-8 sm:pb-16 sm:pt-16 lg:px-8 lg:pb-20 lg:pt-24 xl:px-[140px]">
      <div className="pointer-events-none absolute left-[-10%] top-[-10%] h-[70%] w-[120%] blur-[10px] [background:radial-gradient(50%_50%_at_20%_30%,rgba(139,58,229,0.18)_0%,rgba(139,58,229,0)_60%),radial-gradient(50%_50%_at_85%_20%,rgba(189,140,255,0.35)_0%,rgba(189,140,255,0)_60%)]" />
      <div className="relative mx-auto grid max-w-[1200px] items-center gap-8 sm:gap-10 lg:min-h-[620.77px] lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
        <header className="flex w-full flex-col items-start gap-4 self-center sm:gap-[20.9px]">
          <div className="inline-flex items-center gap-2 rounded-[999px] border border-solid border-[#f0e2ff] bg-[#f7f1ff] px-3.5 pb-[7.69px] pt-[7.5px]">
            <span className="h-1.5 w-1.5 rounded-[3px] bg-[#8a39e4]" />
            <span className="relative flex w-fit items-center whitespace-nowrap [font-family:'Montserrat',Helvetica] text-[10px] font-semibold leading-[19.2px] tracking-[1.2px] text-[#8a39e4] sm:text-xs sm:tracking-[1.68px]">
              CINEMATIC EXCELLENCE
            </span>
          </div>
          <div className="flex w-full flex-col items-start">
            <h1 className="relative mt-[-1.00px] self-stretch text-[32px] font-bold leading-[38px] tracking-[-1.2px] text-[#0f0a1f] sm:text-[42px] sm:leading-[48px] sm:tracking-[-1.8px] lg:text-[50px] lg:leading-[56px] lg:tracking-[-2px] xl:text-[56px] xl:leading-[61.6px] xl:tracking-[-2.52px]" style={{
                fontFamily: '"Satoshi", Helvetica, sans-serif',}}>
              <span className="inline xl:block">Video Production</span>{" "}
              <span className="inline xl:block">Built for Impact</span>
            </h1>
          </div>
          <div className="relative flex w-full flex-col items-start xl:max-w-[667.29px]">
            <p className="relative mt-[-1.00px] flex self-stretch [font-family:'Montserrat',Helvetica] text-[14px] font-normal leading-[1.6] tracking-[0] text-[#3a3447] sm:text-base sm:leading-[26px] lg:text-[17px] lg:leading-[28.8px]">
              Dubai-based cinematic video production services designed to
              reinforce brand storytelling, increase engagement, and support
              high-performing marketing campaigns.
            </p>
          </div>
          <nav
            aria-label="Primary hero actions"
            className="flex w-full flex-col gap-3 pt-1 sm:w-auto sm:flex-row sm:items-center sm:gap-4 sm:pt-0"
          >
            <Button className="h-12 w-full justify-between rounded-[999px] bg-[#8b39e5] pl-[22px] pr-2 text-white hover:bg-[#7d31d6] sm:w-auto sm:justify-start">
              <span className="inline-flex flex-1 items-center justify-center pl-3.5 sm:flex-none sm:justify-start">
                <span className="[font-family:'Inter',Helvetica] text-[13.5px] font-medium leading-[normal] tracking-[0] text-white sm:text-[14.5px]">
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
            <Button
              variant="outline"
              className="h-12 w-full rounded-[999px] border-[#8b39e529] px-[22px] py-3.5 [font-family:'Inter',Helvetica] text-[13.5px] font-medium leading-[normal] tracking-[0] text-[#8b39e5] hover:bg-[#f7f1ff] hover:text-[#8b39e5] sm:w-auto sm:text-[14.5px]"
            >
              View Reel
            </Button>
          </nav>
          <div className="grid w-full grid-cols-2 gap-4 pt-1 sm:flex sm:flex-wrap sm:gap-6">
            {stats.map((stat) => (
              <div
                key={stat.value}
                className="flex flex-col border-l-2 border-[#d9bbff] pl-4 sm:min-w-[175px]"
              >
                <div className="[font-family:'Satoshi-Bold',Helvetica] text-[18px] font-bold leading-[28px] tracking-[-0.36px] text-[#0f0a1f] sm:text-[22px] sm:leading-[35.2px] sm:tracking-[-0.44px]">
                  {stat.value}
                </div>
                <div className="[font-family:'Montserrat',Helvetica] text-[12px] font-normal leading-[19px] tracking-[0] text-[#6b6478] sm:text-[13px] sm:leading-[20.8px]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </header>
        <aside className="relative self-center">
          <Card className="relative w-full overflow-hidden rounded-2xl border border-solid border-[#f0e2ff] bg-[linear-gradient(180deg,rgba(248,241,255,1)_0%,rgba(255,255,255,1)_100%)] shadow-none sm:max-w-[420px] sm:mx-auto lg:max-w-none lg:h-[460px] xl:h-[512.38px]">
            <CardContent className="relative p-4 sm:p-[23px]">
              <div className="grid grid-cols-2 gap-2 sm:gap-2.5 lg:grid-rows-[auto_auto_auto] xl:grid-rows-[113.19px_113.19px_113.19px]">
                {talentCards.map((card, index) => {
                  const orderClasses =
                    index === 4
                      ? "lg:order-6"
                      : index === 5
                        ? "lg:order-5"
                        : "";

                  return (
                    <div
                      key={card.title}
                      className={`relative flex h-full min-h-[113.19px] w-full flex-col items-start gap-2 rounded-[14px] border border-solid border-[#ece8f3] bg-[#ffffff33] p-3.5 backdrop-blur-[2px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(2px)_brightness(100%)] ${orderClasses}`}
                    >
                      <div className="pointer-events-none absolute left-0 top-0 h-full w-[calc(100%_+_1px)] rounded-[14px] border-2 border-solid border-white shadow-[0px_12px_28px_-22px_#140a282e] backdrop-blur-[2.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(2.5px)_brightness(100%)]" />
                      <div
                        className="relative h-[34px] w-[34px] rounded-[17px]"
                        style={{
                          backgroundImage: `url(${card.avatar})`,
                          backgroundPosition: "50% 50%",
                          backgroundSize: "cover",
                        }}
                      />
                      <div className="relative flex w-full flex-col items-start">
                        <div className="relative mt-[-1.00px] flex self-stretch items-center [font-family:'Satoshi-Bold',Helvetica] text-[13px] font-bold leading-[15.6px] tracking-[0] text-[#0f0a1f]">
                          {card.title}
                        </div>
                      </div>
                      <div className="relative flex w-full items-center gap-[6px]">
                        <div className="flex h-[7px] w-[7px] items-start justify-center rounded-[3.5px] bg-green-600">
                          <div className="h-[7px] w-[7px] rounded-[3.5px] bg-[#ffffff01] shadow-[0px_0px_0px_3px_#16a34a26]" />
                        </div>
                        <div className="[font-family:'Montserrat',Helvetica] text-[11px] font-normal leading-[17.6px] tracking-[0] text-[#6b6478]">
                          {card.availability}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="pointer-events-none absolute bottom-[-8%] right-[-1%] h-[63.35%] w-[325px] opacity-70 blur-[10px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(139,58,229,0.35)_0%,rgba(139,58,229,0)_70%)]" />
            </CardContent>
          </Card>
        </aside>
      </div>
    </section>
  );
};
