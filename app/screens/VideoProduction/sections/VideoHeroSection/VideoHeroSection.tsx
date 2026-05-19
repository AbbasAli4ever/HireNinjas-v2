import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const talentCards = [
  {
    title: "Front End Developer",
    availability: "Available · 48h",
    avatar: "https://c.animaapp.com/mpccdn8iGwnAdb/img/background.png",
  },
  {
    title: "PPC Manager",
    availability: "Available · 72h",
    avatar: "https://c.animaapp.com/mpccdn8iGwnAdb/img/background-1.png",
  },
  {
    title: "UI/UX Designer",
    availability: "Available · 24h",
    avatar: "https://c.animaapp.com/mpccdn8iGwnAdb/img/background-2.png",
  },
  {
    title: "Full Stack Dev",
    availability: "Available · 48h",
    avatar: "https://c.animaapp.com/mpccdn8iGwnAdb/img/background-3.png",
  },
  {
    title: "SEO Specialist",
    availability: "Available · 24h",
    avatar: "https://c.animaapp.com/mpccdn8iGwnAdb/img/background-5.png",
  },
  {
    title: "Business Analyst",
    availability: "Available · 72h",
    avatar: "https://c.animaapp.com/mpccdn8iGwnAdb/img/background-4.png",
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
    <section className="relative w-full overflow-hidden px-6 pb-20 pt-24 md:px-10 lg:px-[140px]">
      <div className="pointer-events-none absolute left-[-10%] top-[-10%] h-[70%] w-[120%] blur-[10px] [background:radial-gradient(50%_50%_at_20%_30%,rgba(139,58,229,0.18)_0%,rgba(139,58,229,0)_60%),radial-gradient(50%_50%_at_85%_20%,rgba(189,140,255,0.35)_0%,rgba(189,140,255,0)_60%)]" />
      <div className="relative mx-auto grid max-w-[1200px] items-center gap-10 lg:min-h-[620.77px] lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
        <header className="flex w-full flex-col items-start gap-[20.9px] self-center">
          <div className="inline-flex items-center gap-2 rounded-[999px] border border-solid border-[#f0e2ff] bg-[#f7f1ff] px-3.5 pb-[7.69px] pt-[7.5px]">
            <span className="h-1.5 w-1.5 rounded-[3px] bg-[#8a39e4]" />
            <span className="relative flex w-fit items-center whitespace-nowrap [font-family:'Montserrat',Helvetica] text-xs font-semibold leading-[19.2px] tracking-[1.68px] text-[#8a39e4]">
              CINEMATIC EXCELLENCE
            </span>
          </div>
          <div className="flex w-full flex-col items-start">
            <h1 className="relative mt-[-1.00px] self-stretch text-[40px] font-bold leading-[44px] tracking-[-1.8px] text-[#0f0a1f] sm:text-[48px] sm:leading-[52px] lg:text-[56px] lg:leading-[61.6px] lg:tracking-[-2.52px]" style={{
                fontFamily: '"Satoshi", Helvetica, sans-serif',}}>
              Video Production <br />
              Built for Impact
            </h1>
          </div>
          <div className="relative flex w-full max-w-[667.29px] flex-col items-start">
            <p className="relative mt-[-1.00px] flex self-stretch [font-family:'Montserrat',Helvetica] text-base font-normal leading-[26px] tracking-[0] text-[#3a3447] sm:text-lg sm:leading-[28.8px]">
              Dubai-based cinematic video production services designed to
              reinforce brand storytelling, increase engagement, and support
              high-performing marketing campaigns.
            </p>
          </div>
          <nav
            aria-label="Primary hero actions"
            className="flex flex-wrap items-start gap-4 sm:gap-6"
          >
            <Button className="h-12 rounded-[999px] bg-[#8b39e5] pl-[22px] pr-2 text-white hover:bg-[#7d31d6]">
              <span className="inline-flex flex-col items-center pl-3.5">
                <span className="[font-family:'Inter',Helvetica] text-[14.5px] font-medium leading-[normal] tracking-[0] text-center text-white">
                  Book a Free Consultation
                </span>
              </span>
              <span className="grid h-9 w-9 place-items-center rounded-[18px] bg-white">
                <img
                  className="h-4 w-4"
                  alt="Component"
                  src="/figmaAssets/arrow-purple.svg"
                />
              </span>
            </Button>
            <Button
              variant="outline"
              className="h-12 rounded-[999px] border-[#8b39e529] px-[22px] py-3.5 [font-family:'Inter',Helvetica] text-[14.5px] font-medium leading-[normal] tracking-[0] text-[#8b39e5] hover:bg-[#f7f1ff] hover:text-[#8b39e5]"
            >
              View Reel
            </Button>
          </nav>
          <div className="flex w-full flex-wrap items-start gap-6 pt-1">
            {stats.map((stat) => (
              <div
                key={stat.value}
                className="flex min-w-[175px] flex-col border-l-2 border-[#d9bbff] pl-4"
              >
                <div className="[font-family:'Satoshi-Bold',Helvetica] text-[22px] font-bold leading-[35.2px] tracking-[-0.44px] text-[#0f0a1f]">
                  {stat.value}
                </div>
                <div className="[font-family:'Montserrat',Helvetica] text-[13px] font-normal leading-[20.8px] tracking-[0] text-[#6b6478]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </header>
        <aside className="relative self-center">
          <Card className="relative w-full overflow-hidden rounded-2xl border border-solid border-[#f0e2ff] bg-[linear-gradient(180deg,rgba(248,241,255,1)_0%,rgba(255,255,255,1)_100%)] shadow-none lg:h-[512.38px]">
            <CardContent className="relative p-[23px]">
              <div className="grid grid-cols-2 gap-2.5 lg:grid-rows-[113.19px_113.19px_113.19px]">
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
