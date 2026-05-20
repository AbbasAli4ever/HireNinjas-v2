import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const audienceItems = [
  {
    title: "Off-plan",
    description: "Full-funnel launch campaigns",
  },
  {
    title: "Global",
    description: "International investor corridors",
  },
  {
    title: "HNWI",
    description: "Premium buyer targeting",
  },
];

const statCards = [
  {
    title: "QUALIFIED LEADS",
    value: (
      <>
        <span className="font-bold text-[#0f0a1f] tracking-[-0.06px]">+</span>
        <span className="font-bold text-[#8a39e4] tracking-[-0.06px]">
          312%
        </span>
      </>
    ),
    className: "right-2 top-6 sm:right-4 lg:-right-2 lg:top-5",
    width: "w-[102px]",
  },
  {
    title: "UNIT ABSORPTION",
    value: <>Faster</>,
    className: "right-0 top-1/2 -translate-y-1/2 sm:right-2 lg:-right-10",
    width: "w-auto",
  },
  {
    title: "CHANNELS",
    image: "https://c.animaapp.com/mpdwd6sgQyTogJ/img/frame-2147224420.svg",
    className: "bottom-24 left-4 sm:left-8 lg:-left-6",
    width: "w-auto",
  },
  {
    title: "INVESTOR REACH",
    value: <>UAE · GCC · Intl</>,
    className: "bottom-4 left-6 sm:left-10 lg:-left-24",
    width: "w-auto",
  },
];



const ArrowCircle = () => (
  <span className="grid h-9 w-9 place-items-center rounded-full bg-white">
    <img
      className="h-4 w-4"
      alt="Arrow icon"
      src="https://c.animaapp.com/mpdwd6sgQyTogJ/img/component-2.svg"
    />
  </span>
);


const FloatingStatCard = ({
  title,
  value,
  image,
  className,
  width,
}: {
  title: string;
  value?: React.ReactNode;
  image?: string;
  className: string;
  width: string;
}) => (
  <Card
    className={`absolute z-10 ${className} ${width} rounded-xl border border-[#ece8f3] bg-white shadow-[0px_10px_24px_-22px_#140a282e]`}
  >
    <CardContent className="flex flex-col items-start gap-1 px-3.5 pb-[11.99px] pt-[11px]">
      <div className="flex w-full items-center font-montserrat-semibold-upper text-[length:var(--montserrat-semibold-upper-font-size)] font-[number:var(--montserrat-semibold-upper-font-weight)] leading-[var(--montserrat-semibold-upper-line-height)] tracking-[var(--montserrat-semibold-upper-letter-spacing)] text-dolphin [font-style:var(--montserrat-semibold-upper-font-style)]">
        {title}
      </div>
      {image ? (
        <img className="relative flex-[0_0_auto]" alt={title} src={image} />
      ) : (
        <div className="flex flex-col items-start">
          <div className="flex items-center whitespace-nowrap [font-family:'Satoshi-Bold',Helvetica] text-sm leading-[14px] tracking-[-0.44px] text-ebony">
            {value}
          </div>
        </div>
      )}
    </CardContent>
  </Card>
);

export const HeroPropertyMarketingSection = (): JSX.Element => {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-[430px] w-full overflow-hidden">
          <div className="relative left-[-10%] top-[-18.82%] h-[131.77%] w-[120%] blur-[10px] [background:radial-gradient(50%_50%_at_20%_30%,rgba(139,58,229,0.18)_0%,rgba(139,58,229,0)_60%),radial-gradient(50%_50%_at_85%_20%,rgba(189,140,255,0.35)_0%,rgba(189,140,255,0)_60%)]" />
        </div>
        <div className="absolute left-[-10%] top-[-21.5%] h-[150.51%] w-[120%] blur-[10px] [background:radial-gradient(50%_50%_at_20%_30%,rgba(139,58,229,0.18)_0%,rgba(139,58,229,0)_60%),radial-gradient(50%_50%_at_85%_20%,rgba(189,140,255,0.35)_0%,rgba(189,140,255,0)_60%)]" />
      </div>
      
      <div className="relative z-10 mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-10 px-4 pb-12 pt-10 sm:px-6 md:pt-14 lg:grid-cols-[minmax(0,1fr)_469px] lg:gap-14 lg:px-[140px] lg:pb-[93px] lg:pt-[78px]">
        <div className="flex flex-col items-start gap-[20.9px]">
          <div className="inline-flex items-center gap-2.5 rounded-[999px] border border-[#00000029] px-3.5 py-[7px]">
            <div className="flex h-1.5 w-1.5 items-start justify-center rounded-[3px] bg-[#6ce5b1]">
              <div className="h-1.5 w-1.5 rounded-[3px] bg-[#ffffff01] shadow-[0px_0px_0px_4px_#6ce5b12e]" />
            </div>
            <div className="flex items-center whitespace-nowrap [font-family:'Inter',Helvetica] text-xs font-normal leading-[18px] tracking-[1.68px] text-black">
              INDUSTRIES · REAL ESTATE
            </div>
          </div>
          <div className="w-full max-w-[607px]">
            <img
              className="h-auto w-full"
              alt="Real estate marketing that drives showroom visits and site tours"
              src="https://c.animaapp.com/mpdwd6sgQyTogJ/img/real-estate-marketing-that-drives-showroom-visits-and-site-tours.svg"
            />
          </div>
          <div className="w-full max-w-[667.29px]">
            <p className="[font-family:'Montserrat',Helvetica] text-lg font-normal leading-[28.8px] tracking-[0] text-tuna">
              Supporting real estate developers,
              <br />
              agents and brokers across Dubai and Abu Dhabi.
            </p>
          </div>
          <div className="flex flex-wrap items-start gap-4 sm:gap-6">
            <Button className="h-auto rounded-[999px] bg-[#8b39e5] px-2 py-2 pl-[22px] pr-2 hover:bg-[#8b39e5]/90">
              <span className="inline-flex items-center gap-3">
                <span className="inline-flex flex-col items-center pl-3.5">
                  <span className="[font-family:'Inter',Helvetica] text-[14.5px] font-medium leading-[normal] tracking-[0] text-white">
                    Get a Free Strategy Call
                  </span>
                </span>
                <ArrowCircle />
              </span>
            </Button>
            <Button
              variant="outline"
              className="h-12 rounded-[999px] border-[#8b39e529] px-[22px] py-3.5 [font-family:'Inter',Helvetica] text-[14.5px] font-medium leading-[normal] tracking-[0] text-[#8b39e5] hover:bg-[#8b39e5]/5 hover:text-[#8b39e5]"
            >
              See Services
            </Button>
          </div>
          <div className="grid w-full max-w-[560px] grid-cols-1 gap-6 sm:grid-cols-3">
            {audienceItems.map((item, index) => (
              <div
                key={item.title}
                className={`flex min-h-[71px] flex-col items-start border-[#d9bbff] pl-4 ${
                  index > 0 ? "sm:border-l-2" : "border-l-2"
                }`}
              >
                <h3 className="font-satoshi-bold text-[length:var(--satoshi-bold-font-size)] font-[number:var(--satoshi-bold-font-weight)] leading-[var(--satoshi-bold-line-height)] tracking-[var(--satoshi-bold-letter-spacing)] text-ebony [font-style:var(--satoshi-bold-font-style)]">
                  {item.title}
                </h3>
                <p className="max-w-[170px] font-montserrat-regular text-[length:var(--montserrat-regular-font-size)] font-[number:var(--montserrat-regular-font-weight)] leading-[var(--montserrat-regular-line-height)] tracking-[var(--montserrat-regular-letter-spacing)] text-dolphin [font-style:var(--montserrat-regular-font-style)]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[469px] lg:mx-0">
          <div className="relative h-[437px] overflow-visible rounded-3xl border border-[#ece8f3] [background:radial-gradient(50%_50%_at_0%_0%,rgba(248,241,255,1)_0%,rgba(255,255,255,1)_60%)]">
            <img
              className="absolute left-0 top-0 h-[100.69%] w-full"
              alt="Tower chart"
              src="https://c.animaapp.com/mpdwd6sgQyTogJ/img/div-tower-row.svg"
            />
            {statCards.map((card) => (
              <FloatingStatCard
                key={card.title}
                title={card.title}
                value={card.value}
                image={card.image}
                className={card.className}
                width={card.width}
              />
            ))}
          </div>
        </div>
      </div>
      <Separator className="opacity-0" />
    </section>
  );
};
