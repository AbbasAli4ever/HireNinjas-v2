import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const leftColumnCards = [
  {
    title: "UI/UX Designer",
    flag: "🇨🇴",
    image: "/figmaAssets/ui-ux-designer.png",
  },
  {
    title: "Accountant",
    flag: "🇧🇷",
    image: "/figmaAssets/accountant.png",
  },
  {
    title: "Product Manager",
    flag: "🇨🇱",
    image: "/figmaAssets/product-manager.png",
  },
  {
    title: "Data Analyst",
    flag: "🇺🇾",
    image: "/figmaAssets/data-analyst.png",
  },
  {
    title: "UI/UX Designer",
    flag: "🇨🇴",
    image: "/figmaAssets/ui-ux-designer-1.png",
  },
  {
    title: "Accountant",
    flag: "🇧🇷",
    image: "/figmaAssets/accountant-1.png",
  },
];

const rightColumnCards = [
  {
    title: "Full-Stack Developer",
    flag: "🇲🇽",
    image: "/figmaAssets/full-stack-developer.png",
  },
  {
    title: "Social Media Lead",
    flag: "🇦🇷",
    image: "/figmaAssets/social-media-lead.png",
  },
  {
    title: "Customer Success",
    flag: "🇵🇪",
    image: "/figmaAssets/customer-success.png",
  },
  {
    title: "Brand Strategist",
    flag: "🇨🇷",
    image: "/figmaAssets/brand-strategist.png",
  },
  {
    title: "Product Manager",
    flag: "🇨🇱",
    image: "/figmaAssets/product-manager-1.png",
  },
  {
    title: "Data Analyst",
    flag: "🇺🇾",
    image: "/figmaAssets/data-analyst-1.png",
  },
];

const stats = [
  {
    value: "200+",
    label: ["Brands Served", "worldwide"],
  },
  {
    value: "98%",
    label: ["Client Retention Rate"],
  },
  {
    value: "9+",
    label: ["Years Of Excellence"],
  },
  {
    value: "150+",
    label: ["Countries Covered"],
  },
];

type TalentCardProps = {
  title: string;
  flag: string;
  image: string;
};

const TalentCard = ({ title, flag, image }: TalentCardProps): JSX.Element => {
  return (
    <Card className="border-0 bg-transparent shadow-none">
      <CardContent className="p-0">
        <article className="relative overflow-hidden rounded-[15.02px] bg-[linear-gradient(156deg,rgba(108,78,201,1)_0%,rgba(74,31,160,1)_55%,rgba(50,16,118,1)_100%)] shadow-[0px_5.46px_21.84px_#0000002e]">
          <div
            className="h-[249.9px] w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
            aria-hidden="true"
          />
          <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between rounded-[681.91px] bg-[#14101f8c] px-[9.56px] py-[6.14px] backdrop-blur-[2.73px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(2.73px)_brightness(100%)]">
            <div className="flex items-center gap-[5px]">
              <div className="flex h-[5px] w-[5px] items-center justify-center rounded-[2.39px] bg-[#6ce5b1]">
                <div className="h-[4.78px] w-[4.78px] rounded-[2.39px] bg-[#ffffff01] shadow-[0px_0px_0px_2.05px_#6ce5b138]" />
              </div>
              <span className="[font-family:'Inter',Helvetica] text-[8.9px] font-normal leading-[13.3px] tracking-[0] whitespace-nowrap text-[#f5efe6]">
                {title}
              </span>
            </div>
            <span className="[font-family:'Inter',Helvetica] text-[9.6px] font-normal leading-[14.3px] tracking-[0] whitespace-nowrap text-[#f5efe6] opacity-90">
              {flag}
            </span>
          </div>
        </article>
      </CardContent>
    </Card>
  );
};

export const HeroSection = (): JSX.Element => {
  return (
    <section className="relative w-full overflow-hidden rounded-[16.67px] bg-[#14101f] px-5 py-8 sm:px-8 lg:px-[92px] lg:py-[101px]">
      <div className="pointer-events-none absolute left-[-281px] top-1/2 h-[525px] w-[393px] -translate-y-[206px] rounded-[196.5px/262.5px] bg-[#7b15e9] opacity-10 blur-[117px]" />
      <div className="relative z-10 flex flex-col gap-10 lg:min-h-[727px] lg:flex-row lg:items-start lg:justify-between lg:gap-6">
        <header className="flex w-full max-w-[722px] flex-col gap-8 lg:pt-[61px]">
          <div className="flex flex-col items-start gap-[21.3px]">
            <div className="inline-flex items-center gap-2.5 rounded-[999px] border border-solid border-[#ffffff29] px-3.5 py-[7px]">
              <div className="flex h-1.5 w-1.5 items-center justify-center rounded-[3px] bg-[#6ce5b1]">
                <div className="h-1.5 w-1.5 rounded-[3px] bg-[#ffffff01] shadow-[0px_0px_0px_4px_#6ce5b12e]" />
              </div>
              <p className="[font-family:'Inter',Helvetica] text-xs font-normal leading-[18px] tracking-[1.68px] whitespace-nowrap text-[#f5efe6]">
                GLOBAL TALENT · PERFORMANCE MARKETING
              </p>
            </div>
            <div className="flex flex-col items-start pt-[1.97px]">
              <h1 className="max-w-[597px] [font-family:'Satoshi-Black',Helvetica] text-[44px] font-black leading-[0.95] tracking-[-1.56px] text-white sm:text-[58px] lg:text-[76px]">
                Grow Faster With Elite Talent &amp; Marketing
              </h1>
            </div>
            <div className="max-w-[620px]">
              <p className="[font-family:'Inter',Helvetica] text-sm font-normal leading-[25.6px] tracking-[0] text-[#ded7f3] sm:text-base">
                Winning digital marketing and staff augmentation services in
                Dubai and Abu Dhabi to assist ambitious companies scale faster
                through expert talent, performance marketing strategies and
                global hiring support all from one source.
              </p>
            </div>
            <div className="flex flex-wrap items-start gap-4">
              <Button className="h-auto rounded-[999px] bg-white px-2 py-2 pl-[22px] pr-2 text-[#14101f] hover:bg-white/95">
                <span className="inline-flex items-center pl-3.5 [font-family:'Inter',Helvetica] text-[14.5px] font-medium leading-none tracking-[0]">
                  Our Services
                </span>
                <span className="ml-3 grid h-9 w-9 place-items-center rounded-[18px] bg-[#3a0d8c]">
                  <img
                    className="h-4 w-4"
                    alt="Component"
                    src="/figmaAssets/component-2.svg"
                  />
                </span>
              </Button>
              <Button
                variant="outline"
                className="h-auto rounded-[999px] border-[#f5efe629] bg-transparent px-[22px] py-3.5 [font-family:'Inter',Helvetica] text-[14.5px] font-medium text-[#f5efe6] hover:bg-white/5 hover:text-[#f5efe6]"
              >
                Free Consultation
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-10">
            {stats.map((stat) => (
              <article key={stat.value} className="flex flex-col items-start">
                <div className="[font-family:'Satoshi-Black',Helvetica] text-[40px] font-black leading-[72px] tracking-[-0.72px] whitespace-nowrap text-[#f5efe6] sm:text-[56px]">
                  {stat.value}
                </div>
                <div className="[font-family:'Inter',Helvetica] text-[13px] font-normal leading-[19.5px] tracking-[0] text-[#ffffffb2]">
                  {stat.label.map((line) => (
                    <div key={line}>{line}</div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </header>
        <div className="relative hidden h-[800px] w-full max-w-[416px] overflow-hidden lg:block">
          <div className="absolute inset-y-[10px] right-0 w-[216px] bg-[linear-gradient(180deg,rgba(20,16,31,1)_0%,rgba(20,16,31,0.8)_56%,rgba(20,16,31,0)_100%)]" />
          <div className="absolute left-0 top-[10px] flex h-[800px] w-[200px] overflow-hidden">
            <div className="flex w-[200px] flex-col items-start gap-[10.92px]">
              {leftColumnCards.map((card, index) => (
                <TalentCard
                  key={`${card.title}-${card.flag}-${index}`}
                  title={card.title}
                  flag={card.flag}
                  image={card.image}
                />
              ))}
              <img
                className="w-full"
                alt="Background shadow"
                src="/figmaAssets/background-shadow-1.svg"
              />
            </div>
          </div>
          <div className="absolute right-0 top-[10px] flex h-[800px] w-[200px] items-end overflow-hidden">
            <div className="flex w-[200px] flex-col items-start gap-[10.92px]">
              <img
                className="w-full"
                alt="Background shadow"
                src="/figmaAssets/background-shadow.svg"
              />
              {rightColumnCards.map((card, index) => (
                <TalentCard
                  key={`${card.title}-${card.flag}-${index}`}
                  title={card.title}
                  flag={card.flag}
                  image={card.image}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
